from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

    path('', views.main, name = 'main'),
    path('home', views.main, name = 'main'),
    path('ceo인사말', views.ceo인사말, name = 'ceo인사말'),
    path('주요연혁', views.주요연혁, name = '주요연혁'),
    path('글로벌파트너', views.글로벌파트너, name = '글로벌파트너'),
    path('사업장소개', views.사업장소개, name = '사업장소개'),

    path('Discretes', views.Discretes, name = 'Discretes'),
    path('Discretes_공정도', views.Discretes_공정도, name = 'Discretes_공정도'),
    path('Modules', views.Modules, name = 'Modules'),
    path('Modules_공정도', views.Modules_공정도, name = 'Modules_공정도'),
    path('Product_detail/<str:product_family>/<str:product_name>', views.Product_detail, name = 'Product_detail'),

    path('Quality', views.Quality, name = 'Quality'),
    path('품질경영', views.품질경영, name = '품질경영'),
    path('품질승인관리', views.품질승인관리, name = '품질승인관리'),
    path('신뢰성시험', views.신뢰성시험, name = '신뢰성시험'),
    path('최종품질보증', views.최종품질보증, name = '최종품질보증'),
    path('부적합품관리', views.부적합품관리, name = '부적합품관리'),
    path('Certification', views.Certification, name = 'Certification'),

    path('공지사항', views.공지사항, name = '공지사항'),
    path('search_res', views.search_res, name = 'search_res'),
    path('board_category_all', views.board_category_all, name = 'board_category_all'),
    path('board_category_notice', views.board_category_notice, name = 'board_category_notice'),
    path('board_category_product', views.board_category_product, name = 'board_category_product'),
    path('board_category_etc', views.board_category_etc, name = 'board_category_etc'),
    path('board_detail/<int:board_id>', views.board_detail, name = 'board_detail'),
    path('문의사항', views.문의사항, name = '문의사항'),
    path('문의하기_res', views.문의하기_res, name = '문의하기_res'),
    path('오시는길', views.오시는길, name = '오시는길'),

    path('준비중화면', views.준비중화면, name = '준비중화면'),

    ]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)