
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.home),  
    path('home/', views.home,name="home"),
    path('todolist/', views.todolist,name="todolist"),
    path('about/', views.about,name="about"),
    path('contact/', views.contact,name="contact"),
]
