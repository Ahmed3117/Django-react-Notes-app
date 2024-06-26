from django.contrib import admin
from .models import Note

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('id', 'body', 'updated', 'created')
    search_fields = ('body',)
    list_filter = ('updated', 'created')
