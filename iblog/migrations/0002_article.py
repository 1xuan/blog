# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-13 16:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('iblog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=70)),
                ('body', models.TextField()),
                ('create_time', models.DateTimeField()),
                ('modify_time', models.DateTimeField()),
            ],
        ),
    ]
