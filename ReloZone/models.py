from django.db import models
from django.utils import timezone
from datetime import datetime

# Create your models here.
class Person(models.Model):
	firstname = models.CharField(max_length = 50, default = '', null = False)
	middlename = models.CharField(max_length = 50, default = '', null = False)
	lastname = models.CharField(max_length = 50, default = '', null = False)
	status= models.CharField(max_length=25)
	gender= models.CharField(max_length=10)
	birthday = models.DateField()
	spouse= models.CharField(max_length=50)
	children=models.IntegerField()
	street = models.CharField(max_length=25)
	brgy= models.CharField(max_length=25)
	zipp = models.IntegerField()
	city = models.CharField(max_length=25)
	province= models.CharField(max_length=25)
	email = models.EmailField()
	phone = models.CharField(max_length=11)

	class Meta:
		db_table="Person"

class Customer(Person):
	dateRegistered=models.DateTimeField(default=datetime.now, blank=True)
	class Meta:
		db_table= "Customer"

class Product(models.Model):
	dateRegistered=models.DateTimeField(default=datetime.now, blank=True)
	category= models.CharField(max_length=20)
	productName = models.CharField(max_length=20)
	brand = models.CharField(max_length=20)
	color = models.CharField(max_length=20)
	size = models.CharField(max_length=20)
	stocks= models.IntegerField()
	price = models.FloatField()
	
	class Meta:
		db_table="Product"

class Order(models.Model):
	customer= models.ForeignKey(
		Customer, null=True, on_delete=models.SET_NULL
	)
	product= models.ForeignKey(
		Product, null=True, on_delete=models.SET_NULL
	)
	date_create = models.DateTimeField(default=timezone.now)
	status = models.CharField(max_length=10, default='None')
	cost = models.FloatField()
	quantity = models.IntegerField()

	class Meta:
		db_table="Order"