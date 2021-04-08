from django.contrib import admin
from .models import board


# Register your models here.

@admin.register(board)
class boardAdmin(admin.ModelAdmin):
    list_display = ('id','category','title', 'content', 'img','file','top_fixed')
    list_filter = ('date',)
    search_fields = ('title', 'content')
