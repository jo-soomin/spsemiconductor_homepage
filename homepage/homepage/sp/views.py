from django.shortcuts import render, get_object_or_404, redirect, reverse
from django.shortcuts import render
from .models import board
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
import smtplib
from email.message import EmailMessage
from django.contrib import auth, messages
from django.db.models import Q

def main(request):
    return render(request, 'slide.html')

def ceo인사말(request):
    return render(request, 'About us/ceo인사말.html')

def 주요연혁(request):
    return render(request, 'About us/주요연혁.html')

def 글로벌파트너(request):
    return render(request, 'About us/글로벌파트너.html')

def 사업장소개(request):
    return render(request, 'About us/사업장소개.html')

def Discretes(request):
    return render(request, 'Products/Discretes.html')

def Discretes_공정도(request):
    return render(request, 'Products/Discretes_공정도.html')
def Modules(request):
    return render(request, 'Products/Modules.html')
def Modules_공정도(request):
    return render(request, 'Products/Modules_공정도.html')

def Product_detail(request ,product_family ,product_name):
    return render(request, 'Products/Product_detail.html',{'product_name':product_name, 'product_family':product_family})

def Quality(request):
    return render(request, 'Service/Quality.html')

def 품질경영(request):
    return render(request, 'Service/품질경영.html')

def 품질승인관리(request):
    return render(request, 'Service/품질승인관리.html')

def 신뢰성시험(request):
    return render(request, 'Service/신뢰성시험.html')

def 최종품질보증(request):
    return render(request, 'Service/최종품질보증.html')

def 부적합품관리(request):
    return render(request, 'Service/부적합품관리.html')

def Certification(request):
    return render(request, 'Service/Certification.html')

def 공지사항(request):
    board_list = board.objects.all().order_by('-date')
    paginator = Paginator(board_list, 8)
    page = request.GET.get('page')
    boardL = paginator.get_page(page)
    notice_fixed = board.objects.filter(top_fixed=True).order_by('-date')
    return render(request, 'Supports & Contacts/공지사항.html',{'board_list':board_list, 'boardL':boardL, 'notice_fixed':notice_fixed})

def search_res(request):
    search_text = request.POST.get('search_text')
    search_category = request.POST.get('search_category')
    if(search_category=='전체'):
        boardL = board.objects.all().filter(Q(title__icontains=search_text) | Q(content__icontains=search_text))
    else:
        boardL = board.objects.all().filter((Q(title__icontains=search_text) | Q(content__icontains=search_text)) & Q(category__icontains=search_category))
    notice_fixed = board.objects.filter(top_fixed=True).order_by('-date')
    return render(request, 'Supports & Contacts/공지사항.html',{'boardL':boardL, 'notice_fixed':notice_fixed})

def board_category_all(request):
    board_list = board.objects.all().order_by('-date')
    paginator = Paginator(board_list, 8)
    page = request.GET.get('page')
    boardL = paginator.get_page(page)
    notice_fixed = board.objects.filter(top_fixed=True).order_by('-date')
    return render(request, 'Supports & Contacts/공지사항.html',{'board_list':board_list, 'boardL':boardL,'notice_fixed':notice_fixed})

def board_category_notice(request):
    board_list = board.objects.filter(category='공지').order_by('-date')
    paginator = Paginator(board_list, 8)
    page = request.GET.get('page')
    boardL = paginator.get_page(page)
    notice_fixed = board.objects.filter(top_fixed=True).order_by('-date')
    return render(request, 'Supports & Contacts/공지사항.html',{'board_list':board_list, 'boardL':boardL,'notice_fixed':notice_fixed})

def board_category_product(request):
    board_list = board.objects.filter(category='제품').all().order_by('-date')
    paginator = Paginator(board_list, 8)
    page = request.GET.get('page')
    boardL = paginator.get_page(page)
    notice_fixed = board.objects.filter(top_fixed=True).order_by('-date')
    return render(request, 'Supports & Contacts/공지사항.html',{'board_list':board_list, 'boardL':boardL,'notice_fixed':notice_fixed})

def board_category_etc(request):
    board_list = board.objects.filter(category='기타').all().order_by('-date')
    paginator = Paginator(board_list, 8)
    page = request.GET.get('page')
    boardL = paginator.get_page(page)
    notice_fixed = board.objects.filter(top_fixed=True).order_by('-date')
    return render(request, 'Supports & Contacts/공지사항.html',{'board_list':board_list, 'boardL':boardL,'notice_fixed':notice_fixed})

def board_detail(request, board_id):
    board_detail = get_object_or_404(board, pk=board_id)
    sub_title = board_detail.title[8:];
    file = board_detail.file;
    return render(request, 'Supports & Contacts/board_detail.html', {'board_detail':board_detail, 'sub_title':sub_title})

def 문의사항(request):
    return render(request, 'Supports & Contacts/문의사항.html')

def 문의하기_res(request):
    title = request.POST.get('title')
    content = request.POST.get('content')
    name = request.POST.get('name')
    mail = request.POST.get('mail')
    to = request.POST.get('to')

    smtp = smtplib.SMTP('118.128.208.148', 25)
    smtp.ehlo()
    smtp.esmtp_features["smtputf8"] = ""
    smtp.login('master@spsemi.co.kr', 'spadmin1!')  # 로그인
    msg = EmailMessage()
    title = "[문의사항] %s" % title
    content = "%s<br><br>" % content + '\n' + "작성자: %s" % name + '\n' + "e-mail: %s" % mail
    # 제목 입력
    msg['Subject'] = title
    # 내용 입력
    msg.set_content(content)
    # 보내는 사람
    msg['From'] = 'master@spsemi.co.kr'
    # 받는 사람
    msg['To'] = to
    smtp.send_message(msg)
    smtp.quit()
    messages.info(request,'담당자에게 발송 되었습니다.')
    return redirect('문의사항')

def 오시는길(request):
    return render(request,'Supports & Contacts/문의사항.html')

def 준비중화면(request):
    return render(request,'공통/준비중화면.html')