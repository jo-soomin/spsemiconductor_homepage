"""homepage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import os
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('sp.urls')),
    path('home', include('sp.urls')),
    path('ceo인사말', include('sp.urls')),
    path('주요연혁', include('sp.urls')),
    path('글로벌파트너', include('sp.urls')),
    path('사업장소개', include('sp.urls')),

    path('Discretes', include('sp.urls')),
    path('Discretes_공정도', include('sp.urls')),
    path('Modules', include('sp.urls')),
    path('Modules_공정도', include('sp.urls')),
    path('Product_detail/<str:product_family>/<str:product_name>', include('sp.urls')),

    path('Quality', include('sp.urls')),
    path('품질경영', include('sp.urls')),
    path('품질승인관리', include('sp.urls')),
    path('신뢰성시험', include('sp.urls')),
    path('최종품질보증', include('sp.urls')),
    path('부적합품관리', include('sp.urls')),
    path('Certification', include('sp.urls')),

    path('공지사항', include('sp.urls')),
    path('search_res', include('sp.urls')),
    path('board_category_all', include('sp.urls')),
    path('board_category_notice', include('sp.urls')),
    path('board_category_product', include('sp.urls')),
    path('board_category_etc', include('sp.urls')),
    path('board_detail/<int:board_id>', include('sp.urls')),
    path('문의사항', include('sp.urls')),
    path('문의하기_res', include('sp.urls')),
    path('오시는길', include('sp.urls')),
    
    path('준비중화면', include('sp.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)