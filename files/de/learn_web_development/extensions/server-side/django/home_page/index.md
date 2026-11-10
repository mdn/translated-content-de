---
title: "Django-Tutorial Teil 5: Unsere Startseite erstellen"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: edc9ab5479d1253d9edd93bfe90dd1d100605c26
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt können wir den Code für unsere erste vollständige Seite hinzufügen: eine Startseite für die [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website). Die Startseite zeigt die Anzahl der Datensätze für jeden Modelltyp und bietet in einer Seitenleiste Navigationslinks zu unseren anderen Seiten. Dabei sammeln wir praktische Erfahrung mit dem Schreiben einfacher URL-Zuordnungen und Views, dem Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Einführung in Django</a>. Arbeiten Sie die vorherigen Teile des Tutorials durch (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Die Django-Administrationsseite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, einfache URL-Zuordnungen und Views zu erstellen (bei denen keine Daten in der URL kodiert sind), Daten aus Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze angelegt haben, können wir den Code schreiben, der diese Informationen den Nutzern präsentiert. Zuerst müssen wir festlegen, welche Informationen auf unseren Seiten angezeigt werden sollen und welche URLs die entsprechenden Ressourcen bereitstellen. Anschließend erstellen wir einen URL-Mapper, Views und Templates, um die Seiten anzuzeigen.

Das folgende Diagramm zeigt den grundlegenden Datenfluss und die Komponenten, die für die Verarbeitung von HTTP-Anfragen und -Antworten erforderlich sind. Da wir das Modell bereits implementiert haben, erstellen wir hauptsächlich folgende Komponenten:

- URL-Mapper, die unterstützte URLs (und alle darin kodierten Informationen) an die passenden View-Funktionen weiterleiten.
- View-Funktionen, die die angeforderten Daten aus den Modellen abrufen, HTML-Seiten zur Anzeige der Daten erzeugen und diese Seiten zur Anzeige im Browser an die Nutzer zurückgeben.
- Templates, mit denen die Daten in den Views gerendert werden.

![Diagramm des grundlegenden Datenflusses: Die Komponenten URL, Model, View und Template, die bei der Verarbeitung von HTTP-Anfragen und -Antworten in einer Django-Anwendung benötigt werden. Eine HTTP-Anfrage erreicht einen Django-Server und wird an die Datei „urls.py“ der URLS-Komponente weitergeleitet. Die Anfrage wird an die passende View weitergeleitet. Die View kann Daten aus der Datei „models.py“ der Models-Komponente lesen und in sie schreiben; diese Datei enthält den Code für die Modelle. Die View greift außerdem auf die HTML-Template-Komponente zu und gibt die Antwort an den Nutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, müssen wir fünf Seiten anzeigen. Das sind zu viele Informationen für einen einzigen Artikel. Deshalb konzentrieren wir uns hier auf die Implementierung der Startseite und behandeln die übrigen Seiten in einem späteren Artikel. So erhalten Sie einen guten Überblick darüber, wie URL-Mapper, Views und Modelle in der Praxis zusammenspielen.

## Die URLs der Ressourcen festlegen

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) für Endnutzer im Wesentlichen schreibgeschützt ist, benötigen wir lediglich eine Einstiegsseite (eine Startseite) sowie Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Für unsere Seiten benötigen wir folgende URLs:

- `catalog/` — Die Startseite (Indexseite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht eines bestimmten Buchs mit dem Primärschlüssel `<id>` (dem Standard). Die URL für das dritte zur Liste hinzugefügte Buch lautet beispielsweise `/catalog/book/3`.
- `catalog/author/<id>` — Die Detailansicht eines bestimmten Autors mit dem Primärschlüssel `<id>`. Die URL für den elften zur Liste hinzugefügten Autor lautet beispielsweise `/catalog/author/11`.

Die ersten drei URLs liefern die Indexseite, die Bücherliste und die Autorenliste. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen zum Abrufen der Daten aus der Datenbank bleiben immer gleich. Die Ergebnisse dieser Abfragen hängen allerdings vom Inhalt der Datenbank ab.

Die letzten beiden URLs zeigen dagegen detaillierte Informationen zu einem bestimmten Buch oder Autor an. Sie kodieren die Identität des anzuzeigenden Eintrags (oben durch `<id>` dargestellt). Der URL-Mapper extrahiert die kodierte Information und übergibt sie an die View. Diese bestimmt dynamisch, welche Informationen aus der Datenbank abgerufen werden sollen. Indem wir diese Information in der URL kodieren, können wir mit jeweils einer URL-Zuordnung, einer View und einem Template alle Bücher (beziehungsweise Autoren) verarbeiten.

> [!NOTE]
> Mit Django können Sie Ihre URLs nach Bedarf gestalten: Sie können Informationen wie oben gezeigt im URL-Pfad kodieren oder `GET`-Parameter in die URL aufnehmen, zum Beispiel `/book/?id=6`. Unabhängig vom gewählten Ansatz sollten URLs übersichtlich, logisch und lesbar sein, wie es das [W3C empfiehlt](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im URL-Pfad zu kodieren, um eine bessere URL-Gestaltung zu erreichen.

Wie im Überblick erwähnt, beschreibt der Rest dieses Artikels, wie die Indexseite erstellt wird.

## Die Indexseite erstellen

Als erste Seite erstellen wir die Indexseite (`catalog/`). Sie enthält statisches HTML sowie berechnete Anzahlen verschiedener Datensätze in der Datenbank. Dafür erstellen wir eine URL-Zuordnung, eine View und ein Template.

> [!NOTE]
> Es lohnt sich, diesem Abschnitt besondere Aufmerksamkeit zu schenken. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Als wir das [Grundgerüst der Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, haben wir die Datei **locallibrary/urls.py** so angepasst, dass bei jeder eingehenden URL, die mit `catalog/` beginnt, das _URLConf_-Modul `catalog.urls` den verbleibenden Teil verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** bindet das Modul `catalog.urls` ein:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Wenn Django auf einen Aufruf der Funktion [`django.urls.include()`](https://docs.djangoproject.com/en/6.1/ref/urls/#django.urls.include) trifft, teilt es die URL-Zeichenfolge am festgelegten Ende auf und übergibt den verbleibenden Teil zur weiteren Verarbeitung an das eingebundene _URLConf_-Modul.

Außerdem haben wir eine Platzhalterdatei für das _URLConf_-Modul namens **/catalog/urls.py** erstellt.
Aktualisieren Sie die Liste `urlpatterns` wie folgt:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die Funktion `path()` definiert Folgendes:

- Ein URL-Muster, das aus einer leeren Zeichenfolge besteht: `''`. URL-Muster besprechen wir ausführlicher, wenn wir an den anderen Views arbeiten.
- Eine View-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`. Das ist die Funktion `index()` in der Datei **views.py**.

Die Funktion `path()` legt außerdem einen Parameter `name` fest. Er dient als eindeutige Kennung für _diese_ URL-Zuordnung. Mithilfe des Namens können Sie die Zuordnung umkehren, also dynamisch eine URL erzeugen, die auf die von der Zuordnung verarbeitete Ressource verweist.
Beispielsweise können wir den Namensparameter verwenden, um von jeder anderen Seite auf unsere Startseite zu verlinken. Dazu fügen wir in einem Template folgenden Link ein:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir könnten den Link fest eintragen (wie in `<a href="/catalog/">Home</a>`). Wenn wir jedoch das Muster für unsere Startseite ändern, beispielsweise zu `/catalog/index`, verweisen die Links in den Templates nicht mehr auf die richtige Seite. Eine umgekehrte URL-Zuordnung ist robuster.

### View (funktionsbasiert)

Eine View ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die benötigten Daten aus der Datenbank abruft, sie mithilfe eines HTML-Templates in einer HTML-Seite rendert und anschließend das erzeugte HTML als HTTP-Antwort zurückgibt, damit die Seite dem Nutzer angezeigt wird. Die Index-View folgt diesem Muster: Sie ermittelt die Anzahl der Datensätze für `Book`, `BookInstance`, verfügbare `BookInstance` und `Author` in unserer Datenbank und übergibt diese Informationen zur Anzeige an ein Template.

Öffnen Sie **catalog/views.py**. Die Datei importiert bereits die Hilfsfunktion [render()](https://docs.djangoproject.com/en/6.1/topics/http/shortcuts/#django.shortcuts.render), mit der anhand eines Templates und von Daten eine HTML-Seite erzeugt wird:

```python
from django.shortcuts import render

# Create your views here.
```

Fügen Sie am Ende der Datei die folgenden Zeilen ein:

```python
from .models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Available books
    num_instances_available = BookInstance.objects.filter(status__exact=BookInstance.LoanStatus.AVAILABLE).count()

    # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)
```

Die erste Zeile importiert die Modellklassen, mit denen wir in all unseren Views auf Daten zugreifen.

Im ersten Teil der View-Funktion wird die Anzahl der Datensätze über `objects.all()` der Modellklassen ermittelt. Außerdem wird eine Liste von `BookInstance`-Objekten mit dem Status `BookInstance.LoanStatus.AVAILABLE` abgerufen. Weitere Informationen zum Zugriff auf Modelldaten finden Sie im vorherigen Teil des Tutorials unter [Django-Tutorial Teil 3: Modelle verwenden > Nach Datensätzen suchen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir `render()` auf, um eine HTML-Seite zu erzeugen und als Antwort zurückzugeben. Diese Hilfsfunktion fasst mehrere andere Funktionen zusammen und vereinfacht damit einen sehr häufigen Anwendungsfall. `render()` nimmt folgende Parameter entgegen:

- Das ursprüngliche `request`-Objekt, ein `HttpRequest`.
- Ein HTML-Template mit Platzhaltern für die Daten.
- Eine Variable `context`: ein Python-Dictionary mit den Daten, die in die Platzhalter eingefügt werden sollen.

Im nächsten Abschnitt sprechen wir ausführlicher über Templates und die Variable `context`. Erstellen wir nun unser Template, damit wir den Nutzern tatsächlich etwas anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (beispielsweise einer HTML-Seite) festlegt. Platzhalter stehen darin für die eigentlichen Inhalte.

Eine mit **startapp** erstellte Django-Anwendung (wie das Grundgerüst dieses Beispiels) sucht nach Templates in einem Unterverzeichnis ihrer Anwendung namens **templates**. In der gerade hinzugefügten Index-View erwartet die Funktion `render()` beispielsweise die Datei **_index.html_** unter **/catalog/templates/**. Ist die Datei nicht vorhanden, wird ein Fehler ausgelöst.

Sie können das überprüfen, indem Sie die bisherigen Änderungen speichern und im Browser `127.0.0.1:8000` aufrufen. Es erscheint eine recht verständliche Fehlermeldung: „TemplateDoesNotExist at /catalog/“, gefolgt von weiteren Details.

> [!NOTE]
> Abhängig von den Einstellungen Ihres Projekts sucht Django an verschiedenen Orten nach Templates, standardmäßig auch in Ihren installierten Anwendungen. Weitere Informationen dazu, wie Django Templates findet und welche Template-Formate unterstützt werden, finden Sie im [Abschnitt über Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/6.1/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt das übliche HTML-Markup für Kopf- und Inhaltsbereich, Navigationsbereiche mit Links zu den anderen Seiten der Website (die wir noch nicht erstellt haben) sowie Bereiche für einen Einführungstext und Buchdaten.

Ein großer Teil der HTML- und Navigationsstruktur ist auf jeder Seite unserer Website gleich. Statt diesen wiederkehrenden Code auf jeder Seite zu duplizieren, können Sie mit der Template-Sprache von Django ein Basis-Template definieren und es anschließend erweitern, um nur die Teile zu ersetzen, die sich auf den einzelnen Seiten unterscheiden.

Der folgende Codeausschnitt zeigt ein Beispiel für ein Basis-Template aus einer Datei **base_generic.html**.
Das Template für LocalLibrary erstellen wir gleich.
Das Beispiel enthält gemeinsames HTML mit Abschnitten für einen Titel, eine Seitenleiste und den Hauptinhalt. Diese sind durch benannte Template-Tags `block` und `endblock` gekennzeichnet.
Sie können die Blöcke leer lassen oder Standardinhalte festlegen, die beim Rendern von Seiten auf Basis dieses Templates verwendet werden.

> [!NOTE]
> Template-_Tags_ sind Funktionen, mit denen Sie in einem Template beispielsweise Listen durchlaufen oder bedingte Operationen anhand des Werts einer Variablen ausführen können. Neben Template-Tags erlaubt die Template-Syntax auch, auf Variablen zuzugreifen, die von der View an das Template übergeben werden, und diese mit _Template-Filtern_ zu formatieren (beispielsweise eine Zeichenfolge in Kleinbuchstaben umzuwandeln).

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
  </head>
  <body>
    {% block sidebar %}
      <!-- insert default navigation text for every page -->
    {% endblock %}
    {% block content %}
      <!-- default content text (typically empty) -->
    {% endblock %}
  </body>
</html>
```

Wenn wir ein Template für eine bestimmte View definieren, geben wir zunächst mit dem Template-Tag `extends` das Basis-Template an — siehe folgendes Codebeispiel. Anschließend legen wir mit `block`/`endblock`-Abschnitten fest, welche Bereiche des Templates wir gegebenenfalls ersetzen möchten, wie im Basis-Template gezeigt.

Der folgende Codeausschnitt zeigt beispielsweise, wie Sie das Template-Tag `extends` verwenden und den Block `content` überschreiben. Das erzeugte HTML enthält den Code und die Struktur des Basis-Templates einschließlich des Standardinhalts, den Sie im Block `title` definiert haben. Anstelle des standardmäßigen Blocks `content` wird jedoch der neue verwendet.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
{% endblock %}
```

#### Das Basis-Template von LocalLibrary

Den folgenden Codeausschnitt verwenden wir als Basis-Template für die _LocalLibrary_-Website. Wie Sie sehen, enthält er HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardseitenleiste mit Links zu Listen aller Bücher und Autoren festgelegt. Beide sind in Blöcke eingeschlossen, damit sie sich später leicht ändern lassen.

> [!NOTE]
> Außerdem führen wir zwei weitere Template-Tags ein: `url` und `load static`. Diese Tags werden in den folgenden Abschnitten erklärt.

Erstellen Sie unter **/catalog/templates/** eine neue Datei **base_generic.html** und fügen Sie den folgenden Code ein:

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous">
    <!-- Add additional CSS in static file -->
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/styles.css' %}" />
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          {% block sidebar %}
            <ul class="sidebar-nav">
              <li><a href="{% url 'index' %}">Home</a></li>
              <li><a href="">All books</a></li>
              <li><a href="">All authors</a></li>
            </ul>
          {% endblock %}
        </div>
        <div class="col-sm-10 ">{% block content %}{% endblock %}</div>
      </div>
    </div>
  </body>
</html>
```

Das Template bindet CSS von [Bootstrap](https://getbootstrap.com/) ein, um Layout und Darstellung der HTML-Seite zu verbessern. Mit Bootstrap (oder einem anderen clientseitigen Web-Framework) lässt sich schnell eine ansprechende Seite erstellen, die auf verschiedenen Bildschirmgrößen gut dargestellt wird.

Das Basis-Template verweist außerdem auf eine lokale CSS-Datei (**styles.css**) für zusätzliche Formatierungen. Erstellen Sie unter **/catalog/static/css/** eine Datei **styles.css** und fügen Sie den folgenden Code ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index-Template

Erstellen Sie unter **/catalog/templates/** eine neue HTML-Datei **index.html** und fügen Sie den folgenden Code ein.
In der ersten Zeile erweitert dieser Code unser Basis-Template. Anschließend ersetzt er dessen standardmäßigen Block `content`.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
  <h2>Dynamic content</h2>
  <p>The library has the following record counts:</p>
  <ul>
    <li><strong>Books:</strong> \{{ num_books }}</li>
    <li><strong>Copies:</strong> \{{ num_instances }}</li>
    <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
    <li><strong>Authors:</strong> \{{ num_authors }}</li>
  </ul>
{% endblock %}
```

Im Abschnitt _Dynamische Inhalte_ definieren wir Platzhalter (_Template-Variablen_) für die Informationen aus der View, die wir einbinden möchten.
Die Variablen werden von doppelten geschweiften Klammern umschlossen.

> [!NOTE]
> Template-Variablen und Template-Tags (Funktionen) lassen sich leicht unterscheiden: Variablen stehen in doppelten geschweiften Klammern (`\{{ num_books }}`), Tags in einfachen geschweiften Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`).

Wichtig ist hier, dass die Variablennamen den _Schlüsseln_ entsprechen, die wir im Dictionary `context` an die Funktion `render()` unserer View übergeben (siehe Beispiel unten).
Beim Rendern des Templates werden die Variablen durch die zugehörigen _Werte_ ersetzt.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Statische Dateien in Templates referenzieren

Ihr Projekt verwendet wahrscheinlich statische Ressourcen wie JavaScript, CSS und Bilder. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern kann), erlaubt Django Ihnen, ihren Speicherort in Templates relativ zur globalen Einstellung `STATIC_URL` anzugeben. Im standardmäßigen Website-Grundgerüst hat `STATIC_URL` den Wert `"/static/"`. Sie könnten diese Ressourcen aber auch über ein Content Delivery Network oder an einem anderen Ort bereitstellen.

Rufen Sie im Template zuerst das Template-Tag `load` mit der Angabe „static“ auf, um die Template-Bibliothek einzubinden, wie im folgenden Codebeispiel gezeigt. Anschließend können Sie mit dem Template-Tag `static` die relative URL der benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Auf ähnliche Weise können Sie beispielsweise ein Bild in die Seite einbinden:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  width="555"
  height="540" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden. Django stellt sie jedoch standardmäßig nicht bereit. Als wir [das Grundgerüst der Website erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben, haben wir den Entwicklungs-Webserver durch eine Änderung des globalen URL-Mappers (**/locallibrary/urls.py**) so konfiguriert, dass er Dateien bereitstellt. Für den Produktivbetrieb müssen wir die Bereitstellung aber noch aktivieren. Darauf gehen wir später ein.

Weitere Informationen zum Umgang mit statischen Dateien finden Sie unter [Statische Dateien verwalten](https://docs.djangoproject.com/en/6.1/howto/static-files/) in der Django-Dokumentation.

#### Auf URLs verlinken

Im obigen Basis-Template haben wir das Template-Tag `url` eingeführt.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag nimmt den Namen entgegen, der einem Aufruf der Funktion `path()` in Ihrer **urls.py** zugewiesen wurde, sowie die Werte aller Argumente, die die zugehörige View von dieser Funktion erhält. Es gibt eine URL zurück, mit der Sie auf die Ressource verlinken können.

#### Konfigurieren, wo Templates gesucht werden

Wo Django nach Templates sucht, wird im Objekt `TEMPLATES` in der Datei **settings.py** festgelegt.
Die standardmäßige **settings.py** (wie sie für dieses Tutorial erstellt wurde) sieht ungefähr so aus:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

Besonders wichtig ist die Einstellung `'APP_DIRS': True`: Sie weist Django an, in jeder Anwendung des Projekts in einem Unterverzeichnis namens „templates“ nach Templates zu suchen. Dadurch lassen sich Templates ihrer jeweiligen Anwendung zuordnen und leichter wiederverwenden.

Mit `'DIRS': []` können wir auch bestimmte Verzeichnisse angeben, in denen Django suchen soll. Das ist derzeit aber noch nicht nötig.

> [!NOTE]
> Weitere Informationen dazu, wie Django Templates findet und welche Template-Formate unterstützt werden, finden Sie im [Abschnitt über Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/6.1/topics/templates/).

## Wie sieht das Ergebnis aus?

Jetzt haben wir alle benötigten Komponenten erstellt, um die Indexseite anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles richtig konfiguriert ist, sollte Ihre Website wie auf dem folgenden Screenshot aussehen.

![Indexseite der LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **All books** und **All authors** funktionieren noch nicht, weil die Pfade, Views und Templates für diese Seiten noch nicht definiert sind. Im Template `base_generic.html` haben wir für diese Links bisher nur Platzhalter eingefügt.

## Probieren Sie es selbst aus

Mit den folgenden Aufgaben können Sie prüfen, wie vertraut Sie mit Modellabfragen, Views und Templates sind.

1. Das [Basis-Template von LocalLibrary](#das_basis-template_von_locallibrary) enthält einen Block `title`. Überschreiben Sie diesen Block im [Index-Template](#das_index-template) und legen Sie einen neuen Seitentitel fest.

   > [!NOTE]
   > Im Abschnitt [Templates erweitern](#templates_erweitern) wird erklärt, wie Sie Blöcke erstellen und einen Block in einem anderen Template erweitern.

2. Ändern Sie die [View](#view_function-based) so, dass sie die Anzahl der _Genres_ und der _Bücher_ ermittelt, die ein bestimmtes Wort enthalten (ohne Berücksichtigung der Groß- und Kleinschreibung), und die Ergebnisse an `context` übergibt. Gehen Sie dabei ähnlich vor wie beim Erstellen und Verwenden von `num_books` und `num_instances_available`. Aktualisieren Sie anschließend das [Index-Template](#das_index-template), sodass es diese Variablen einbindet.

## Zusammenfassung

Wir haben die Startseite unserer Website erstellt: eine HTML-Seite, die die Anzahl einiger Datensätze aus der Datenbank anzeigt und auf weitere, noch zu erstellende Seiten verlinkt. Dabei haben wir grundlegende Konzepte zu URL-Mappern und Views kennengelernt, mit Modellen die Datenbank abgefragt, Informationen von einer View an ein Template übergeben sowie Templates erstellt und erweitert.

Im nächsten Artikel bauen wir auf diesem Wissen auf und erstellen die vier übrigen Seiten unserer Website.

## Siehe auch

- [Ihre erste Django-Anwendung schreiben, Teil 3: Views und Templates](https://docs.djangoproject.com/en/6.1/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/6.1/topics/http/urls/) (Django-Dokumentation)
- [View-Funktionen](https://docs.djangoproject.com/en/6.1/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/6.1/topics/templates/) (Django-Dokumentation)
- [Statische Dateien verwalten](https://docs.djangoproject.com/en/6.1/howto/static-files/) (Django-Dokumentation)
- [Django-Hilfsfunktionen](https://docs.djangoproject.com/en/6.1/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
