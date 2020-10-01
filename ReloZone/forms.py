from django.forms import ModelForm
from .models import Customer, Product


class CustomerForm(ModelForm):
    class Meta:
        model = Customer
        fields= '__all__'
        exclude=['dateRegistered']


class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = ('productName', 'category')