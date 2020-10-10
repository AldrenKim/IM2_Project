from django.forms import ModelForm
from .models import Customer, Product, Order


class CustomerForm(ModelForm):
    class Meta:
        model = Customer
        fields= '__all__'
        exclude=['dateRegistered']


class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = ('productName', 'category')

class OrderForm(ModelForm):
    class Meta:
        model= Order
        fields = '__all__'