from django.views.generic import TemplateView, View
from django.shortcuts import render, redirect
from .models import Customer, Product, Person, Order
from .forms import CustomerForm, ProductForm, OrderForm
from django.http import HttpResponse


class IndexView(TemplateView):
    template_name='index.html'
    #def get(self, request):
    #    return render(request,'index.html')

class DashboardView(TemplateView):
    template_name='dashboard.html'
    
class CustomerView(TemplateView):
    def get(self, request):
        customer = Customer.objects.all()
        products = Product.objects.all()
        orders = Order.objects.all()
        data = {
            "customer": customer,
            "products": products,
            "orders": orders
        }
        print(len(orders))
        return render(request, 'customer.html', data)

    def post(self, request):
        if request.method == 'POST':
            if 'btnUpdate' in request.POST:
                print("Update profile button clicked!")
                cid = request.POST.get("id")
                firstname = request.POST.get("firstname")
                middlename = request.POST.get("middlename")
                lastname = request.POST.get("lastname")
                status = request.POST.get("status")
                gender = request.POST.get("gender")
                birthday = request.POST.get("birthday")
                street = request.POST.get("street")
                brgy= request.POST.get("brgy")
                zipp = request.POST.get("zip")
                city = request.POST.get("city")
                province= request.POST.get("province")
                phone = request.POST.get("phone")
                email = request.POST.get("email")
                spouse = request.POST.get("spouse")
                children = request.POST.get("children")
                print(cid)
                update_customer = Customer.objects.filter(pk = cid).update(firstname = firstname, middlename = middlename, lastname = lastname,
                                    status = status, gender = gender, birthday = birthday, street = street, brgy = brgy,
                                    zipp = zipp, city = city, province = province, email = email, phone = phone,
                                    spouse = spouse, children = children)
                print(update_customer)
                print('Profile Updated!')
            elif 'btnDelete' in request.POST:
                print('Delete button clicked!')
                cid = request.POST.get("id")
                cus = Customer.objects.filter(pk = cid).delete()
                pers = Person.objects.filter(pk = cid).delete()
                print(cus)
                print(pers)
                print("Record deleted!")
            
            elif 'btnOrder' in request.POST:
                cid = request.POST.get("id")
                customer = Customer.objects.filter(
                    pk=cid
                ).get()
                order_list = request.POST.getlist('chkBox')
                quanti_list = request.POST.getlist('quanti')
                for oder  in order_list:
                    product = Product.objects.filter(id=oder).get()
                    quantity = quanti_list[order_list.index(oder)]
                    cost = product.price * float(quantity)
                    Product.objects.filter(id=oder).update(stocks = product.stocks-int(quantity))
                    product_info_dict={
                        'customer': customer, 'product':product, 'cost':cost, 'quantity':quantity, 'status':'Pending'
                    }
                    Order.objects.create(**product_info_dict)
                print("Done")

        customer = Customer.objects.all()
        products = Product.objects.all()
        orders = Order.objects.all()

        data = {
            "customer": customer,
            "products": products,
            "orders": orders
        }
        
        return render(request, 'customer.html', data)

class ProductView(TemplateView):
    def get(self,request):
        products = Product.objects.all()
        context ={
            'product':products
        }
        return render(request, 'product.html', context)

    def post(self, request):
        if request.method == 'POST':
            print(request.POST)
            if 'btnUpdate' in request.POST:
                print("Update product button clicked!")
                pid = request.POST.get('id')
                category = request.POST.get('category')
                productName =request.POST.get('productName')
                brand = request.POST.get('brand')
                color = request.POST.get('color')
                size= request.POST.get('size')
                stocks= request.POST.get('stocks')
                price = request.POST.get('price')
                update_product = Product.objects.filter(pk = pid).update(category=category, productName=productName,
                                brand=brand, color=color, size=size, stocks=stocks, price=price)
                print(update_product)
                print("Product updated!")
            elif 'btnDelete' in request.POST:
                print("Delete product button clicked!")
                pid = request.POST.get("id")
                prod = Product.objects.filter(pk = pid).delete()
                print(prod)
                print("Record deleted!")
        product = Product.objects.all()

        data = {
            "product": product
        }

        return render(request, 'product.html', data)

class AddCustomerView(View):
    def get(self, request):
        return render(request,'addcustomer.html')

    def post(self, request):
        form = CustomerForm(request.POST)
        
        print(form.errors)
        if form.is_valid():

            firstname = request.POST.get("firstname")
            middlename = request.POST.get("middlename")
            lastname = request.POST.get("lastname")
            status = request.POST.get("status")
            gender = request.POST.get("gender")
            birthday = request.POST.get("birthday")
            street = request.POST.get("street")
            brgy= request.POST.get("brgy")
            zipp = request.POST.get("zipp")
            city = request.POST.get("city")
            province= request.POST.get("province")
            phone = request.POST.get("phone")
            email = request.POST.get("email")
            spouse = request.POST.get("spouse")
            children = request.POST.get("children")
            form = Customer(firstname = firstname, middlename = middlename, lastname = lastname,
                                status = status, gender = gender, birthday = birthday, street = street, brgy = brgy,
                                zipp = zipp, city = city, province = province, email = email, phone = phone,
                                spouse = spouse, children = children)
            form.save()
            customer = Customer.objects.all()

            data = {
                "customer": customer
            }
            
            return render(request, 'customer.html', data)
        else:
            return HttpResponse("failed")


class AddProductView(View):
    def get(self, request):
        return render(request, 'addproduct.html')
    def post(self, request):
        form = ProductForm(request.POST)
        form.errors
        if form.is_valid():
            category = request.POST.get('category')
            productName =request.POST.get('productName')
            brand = request.POST.get('brand')
            color = request.POST.get('color')
            size= request.POST.get('size')
            stocks= request.POST.get('stocks')
            price = request.POST.get('price')
            form = Product(category=category, productName=productName,
            brand=brand, color=color, size=size, stocks=stocks, price=price)
            form.save()
            product = Product.objects.all()

            data = {
                "product": product
            }

            return render(request, 'product.html', data)
        else:
            return HttpResponse("failed")
