from django.views.defaults import bad_request
from django.shortcuts import render, HttpResponse
from markdown import markdown
from iblog.models import Category, Article

# Create your views here.


def getindex(request):
    all_article = Article.objects.all()

    pass
    return render(request, 'index.html', context={
        'all_article': all_article,
    })


def getwrite(request):
    return render(request, 'write.html')


def getarticle(request):
    return render(request, 'article.html')


def getarchive(request):
    return render(request, 'archive.html')


def markup(request):
    if request.method == 'POST':
        article = request.POST.get('article')
        mdarticle = markdown(article)
        return HttpResponse(mdarticle)
    pass


def article_save(request):
    if request.method == 'POST':
        article = request.POST.get('article', '')
        category = request.POST.get('category', '')
        if article != '' and category != '':
            return HttpResponse("Success")
        else:
            return HttpResponse("Fail")
    else:
        raise bad_request


def httptest(request):
    v = request.method
    b = request.POST
    z = request.GET.get('name')
    x = request.POST.get('name')
    lt = []
    j = request.body
    for i in request.GET:
        lt.append(i)
    return HttpResponse('this is a test!')