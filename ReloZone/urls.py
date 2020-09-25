from django.urls import path
from . import views
from ReloZone.views import(
    IndexView,
    DashboardView,
    CustomerView,
    ProductView,
    AddCustomerView,
    AddProductView
)

urlpatterns= [
    path('', views.IndexView.as_view(), name='index'),
    path('index/dashboard/', views.DashboardView.as_view(), name='dashboard'),
    path('index/dashboard/customer/', views.CustomerView.as_view(), name='customer'),
    path('index/dashboard/product/', views.ProductView.as_view(), name='product'),
    path('addcustomer/', views.AddCustomerView.as_view(), name='addcustomer'),
    path('addproduct/', views.AddProductView.as_view(), name='addproduct'),

]