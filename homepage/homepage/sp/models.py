from django.db import models
from django.utils import timezone
from django.urls import reverse

class board(models.Model):
    title = models.TextField('TITLE', default='')
    content = models.TextField('CONTENT', default='',blank= True,null=True)
    img = models.ImageField(upload_to="img",blank= True, null=True)
    file = models.FileField(upload_to="file", blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    category_choices = (('공지','공지'),('제품','제품'),('기타','기타'))
    category = models.CharField(choices=category_choices, max_length=3,null=False, blank=False,default='공지')
    top_fixed = models.BooleanField(verbose_name='상단고정', default=False,blank= True, null=True)



