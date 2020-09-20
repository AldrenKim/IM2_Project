from django.views.generic import TemplateView, View
from django.shortcuts import render
from .models import Customer, Product
from .forms import CustomerForm, ProductForm
from django.http import HttpResponse


class IndexView(TemplateView):
    template_name='index.html'
    #def get(self, request):
    #    return render(request,'index.html')

class DashboardView(TemplateView):
    template_name='dashboard.html'
    
class CustomerView(TemplateView):
    template_name='customer.html'

class ProductView(TemplateView):
    template_name='product.html'

class AddCustomerView(View):
    def get(self, request):
        return render(request,'addcustomer.html')
    def post(self, request):
        form=CustomerForm(request.POST)
        form.errors
        if form.is_valid():
            firstname = request.POST.get('firstname')
            middlename = request.POST.get('middlename')
            lastname = request.POST.get('lastname')
            status = request.POST.get('status')
            gender = request.POST.get('gender')
            birthday = request.POST.get('birthday')
            street = request.POST.get('street')
            brgy= request.POST.get('brgy')
            zipp = request.POST.get('zip')
            city = request.POST.get('city')
            province= request.POST.get('province')
            phone = request.POST.get('phone')
            email = request.POST.get('email')
            spouse = request.POST.get('spouse')
            children = request.POST.get('children')
            form= Customer(firstname=firstname, middlename=middlename, lastname=lastname,
                status=status, gender=gender, birthday=birthday, street=street, brgy=brgy,
                zipp=zipp, city=city, province=province, email=email, phone=phone,
                spouse=spouse, children=children
            )
            form.save()
            return render(request, 'customer.html')
        else:
            return HttpResponse("failed")
        return render(request, 'dashboard.html')


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
            return render(request, 'product.html')
        else:
            return HttpResponse("failed")
        return render(request, 'dashboard.html')