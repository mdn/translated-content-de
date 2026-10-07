---
title: "Django-Tutorial Teil 5: Unsere Startseite erstellen"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt können wir den Code für unsere erste vollständige Seite hinzufügen: die Startseite der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website). Die Startseite zeigt die Anzahl der Datensätze für jeden Modelltyp und bietet in einer Seitenleiste Navigationslinks zu unseren anderen Seiten. Dabei sammeln wir praktische Erfahrung mit dem Schreiben einfacher URL-Zuordnungen und Views, dem Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Einführung in Django</a>. Schließen Sie die vorherigen Teile des Tutorials ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Die Django-Administrationsseite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, einfache URL-Zuordnungen und Views zu erstellen (bei denen keine Daten in der URL codiert sind), Daten aus Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze erstellt haben, können wir den Code schreiben, der Nutzern diese Informationen präsentiert. Zunächst müssen wir festlegen, welche Informationen wir auf unseren Seiten anzeigen möchten und über welche URLs diese Ressourcen erreichbar sein sollen. Anschließend erstellen wir URL-Zuordnungen, Views und Templates, um die Seiten anzuzeigen.

Das folgende Diagramm zeigt den grundlegenden Datenfluss und die Komponenten, die für die Verarbeitung von HTTP-Anfragen und -Antworten erforderlich sind. Da wir das Modell bereits implementiert haben, erstellen wir hauptsächlich folgende Komponenten:

- URL-Zuordnungen, die unterstützte URLs (und gegebenenfalls darin codierte Informationen) an die passenden View-Funktionen weiterleiten.
- View-Funktionen, die die angeforderten Daten aus den Modellen abrufen, daraus HTML-Seiten erstellen und diese zur Anzeige im Browser an die Nutzer zurückgeben.
- Templates, mit denen die Daten in den Views gerendert werden.

![Diagramm des grundlegenden Datenflusses: Die Komponenten URL, Modell, View und Template bei der Verarbeitung von HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage erreicht einen Django-Server und wird an die Datei „urls.py“ der URL-Komponente weitergeleitet. Die Anfrage wird an die passende View weitergeleitet. Die View kann Daten aus der Datei „models.py“, die den Code für die Modelle enthält, lesen und in diese schreiben. Außerdem greift die View auf die HTML-Template-Komponente zu. Die View gibt die Antwort an den Nutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, müssen wir fünf Seiten anzeigen. Das ist zu viel, um es in einem einzigen Artikel zu behandeln. Deshalb konzentrieren wir uns hier auf die Implementierung der Startseite; die übrigen Seiten behandeln wir in einem späteren Artikel. So erhalten Sie einen guten Gesamtüberblick darüber, wie URL-Zuordnungen, Views und Modelle in der Praxis zusammenspielen.

## URLs für die Ressourcen festlegen

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) für Endnutzer im Wesentlichen schreibgeschützt ist, benötigen wir lediglich eine Einstiegsseite (die Startseite) sowie Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Für unsere Seiten benötigen wir folgende URLs:

- `catalog/` — Die Startseite (Indexseite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht eines bestimmten Buches mit dem Primärschlüssel `<id>` (dem Standard). Die URL für das dritte zur Liste hinzugefügte Buch lautet beispielsweise `/catalog/book/3`.
- `catalog/author/<id>` — Die Detailansicht eines bestimmten Autors mit dem Primärschlüssel `<id>`. Die URL für den elften zur Liste hinzugefügten Autor lautet beispielsweise `/catalog/author/11`.

Die ersten drei URLs geben die Indexseite, die Bücherliste beziehungsweise die Autorenliste zurück. Sie enthalten keine zusätzlichen codierten Informationen, und die Abfragen zum Abrufen der Daten aus der Datenbank sind immer gleich. Welche Ergebnisse diese Abfragen liefern, hängt allerdings vom Inhalt der Datenbank ab.

Die letzten beiden URLs zeigen dagegen Detailinformationen zu einem bestimmten Buch oder Autor. Sie codieren die Identität des anzuzeigenden Eintrags (oben durch `<id>` dargestellt). Die URL-Zuordnung extrahiert diese Information und übergibt sie an die View. Die View bestimmt dann dynamisch, welche Informationen aus der Datenbank abgerufen werden sollen. Indem wir diese Information in der URL codieren, können wir für alle Bücher (beziehungsweise Autoren) dieselbe URL-Zuordnung, View und dasselbe Template verwenden.

> [!NOTE]
> Mit Django können Sie Ihre URLs nach Bedarf gestalten: Sie können Informationen wie oben gezeigt im Pfad der URL codieren oder `GET`-Parameter verwenden, beispielsweise `/book/?id=6`. Unabhängig vom gewählten Ansatz sollten URLs klar, logisch und lesbar bleiben, wie es das [W3C empfiehlt](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im Pfad der URL zu codieren, um eine bessere URL-Gestaltung zu erreichen.

Wie im Überblick erwähnt, beschreibt der Rest dieses Artikels die Erstellung der Indexseite.

## Die Indexseite erstellen

Als Erstes erstellen wir die Indexseite (`catalog/`). Sie enthält etwas statisches HTML sowie dynamisch ermittelte Anzahlen verschiedener Datensätze in der Datenbank. Dafür erstellen wir eine URL-Zuordnung, eine View und ein Template.

> [!NOTE]
> Es lohnt sich, diesem Abschnitt besondere Aufmerksamkeit zu schenken. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Beim Erstellen des [Website-Grundgerüsts](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben wir die Datei **locallibrary/urls.py** so angepasst, dass bei einer URL, die mit `catalog/` beginnt, das _URLConf_-Modul `catalog.urls` den verbleibenden Teil verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** bindet das Modul `catalog.urls` ein:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Wenn Django auf die importierte Funktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) trifft, teilt es die URL-Zeichenfolge an der angegebenen Stelle auf und übergibt den verbleibenden Teil zur weiteren Verarbeitung an das eingebundene _URLConf_-Modul.

Außerdem haben wir eine Platzhalterdatei für das _URLConf_-Modul namens **/catalog/urls.py** erstellt.
Fügen Sie dieser Datei die folgenden Zeilen hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die Funktion `path()` definiert Folgendes:

- Ein URL-Muster, hier eine leere Zeichenfolge: `''`. URL-Muster besprechen wir ausführlicher, wenn wir die anderen Views bearbeiten.
- Eine View-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`. Das ist die Funktion `index()` in der Datei **views.py**.

Die Funktion `path()` legt außerdem einen `name`-Parameter fest, der diese bestimmte URL-Zuordnung eindeutig identifiziert. Mit diesem Namen können Sie die Zuordnung „umkehren“, also dynamisch eine URL für die Ressource erzeugen, auf die sie verweist.
So können wir beispielsweise von jeder anderen Seite auf unsere Startseite verlinken, indem wir in einem Template folgenden Link hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir könnten den Link fest eintragen (wie in `<a href="/catalog/">Home</a>`). Wenn wir jedoch das Muster für unsere Startseite ändern, beispielsweise zu `/catalog/index`, würden die Links in den Templates nicht mehr funktionieren. Eine umgekehrte URL-Zuordnung ist robuster.

### View (funktionsbasiert)

Eine View ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die benötigten Daten aus der Datenbank abruft, sie mithilfe eines HTML-Templates in einer HTML-Seite rendert und das erzeugte HTML anschließend als HTTP-Antwort zurückgibt. Die Index-View folgt diesem Muster: Sie ruft ab, wie viele Datensätze der Typen `Book`, `BookInstance` und `Author` in der Datenbank vorhanden sind und wie viele `BookInstance`-Datensätze verfügbar sind. Diese Informationen übergibt sie zur Anzeige an ein Template.

Öffnen Sie **catalog/views.py**. Die Datei importiert bereits die Hilfsfunktion [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render), mit der aus einem Template und Daten eine HTML-Seite erzeugt wird:

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

    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

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

Die erste Zeile importiert die Modellklassen, mit denen wir in unseren Views auf Daten zugreifen werden.

Im ersten Teil der View-Funktion wird mithilfe des Attributs `objects.all()` der Modellklassen die Anzahl der Datensätze ermittelt. Außerdem wird eine Liste der `BookInstance`-Objekte abgerufen, deren Statusfeld den Wert „a“ (verfügbar) hat. Weitere Informationen zum Zugriff auf Modelldaten finden Sie im vorherigen Tutorial unter [Django-Tutorial Teil 3: Modelle verwenden > Nach Datensätzen suchen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir `render()` auf, um eine HTML-Seite zu erstellen und als Antwort zurückzugeben. Diese Hilfsfunktion fasst mehrere andere Funktionen zusammen und vereinfacht damit einen häufigen Anwendungsfall. `render()` erwartet folgende Parameter:

- das ursprüngliche `request`-Objekt, ein `HttpRequest`.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine `context`-Variable: ein Python-Dictionary mit den Daten, die in die Platzhalter eingefügt werden sollen.

Im nächsten Abschnitt sprechen wir ausführlicher über Templates und die `context`-Variable. Erstellen wir nun unser Template, damit wir den Nutzern tatsächlich etwas anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (etwa einer HTML-Seite) festlegt und Platzhalter für die eigentlichen Inhalte verwendet.

Eine mit **startapp** erstellte Django-Anwendung (wie das Grundgerüst in diesem Beispiel) sucht nach Templates in einem Unterverzeichnis namens **templates** der jeweiligen Anwendung. In der gerade hinzugefügten Index-View erwartet die Funktion `render()` beispielsweise die Datei **_index.html_** unter **/django-locallibrary-tutorial/catalog/templates/**. Ist die Datei nicht vorhanden, wird ein Fehler ausgelöst.

Sie können das überprüfen, indem Sie die bisherigen Änderungen speichern und im Browser `127.0.0.1:8000` aufrufen. Es erscheint die recht verständliche Fehlermeldung „TemplateDoesNotExist at /catalog/“ mit weiteren Details.

> [!NOTE]
> Abhängig von den Projekteinstellungen sucht Django an mehreren Orten nach Templates, standardmäßig auch in den installierten Anwendungen. Weitere Informationen darüber, wie Django Templates findet und welche Template-Formate unterstützt werden, finden Sie im [Abschnitt über Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt das übliche HTML-Markup für Head und Body. Hinzu kommen Navigationsbereiche mit Links zu den anderen Seiten der Website (die wir noch nicht erstellt haben) sowie Bereiche für einen Einführungstext und Buchdaten.

Ein großer Teil der HTML- und Navigationsstruktur ist auf jeder Seite unserer Website gleich. Statt diesen wiederkehrenden Code auf jeder Seite zu duplizieren, können Sie mit der Django-Template-Sprache ein Basis-Template definieren und es dann erweitern, um nur die Bereiche zu ersetzen, die sich von Seite zu Seite unterscheiden.

Der folgende Codeausschnitt zeigt ein beispielhaftes Basis-Template aus einer Datei **base_generic.html**.
Das Template für LocalLibrary erstellen wir gleich.
Das Beispiel enthält gemeinsames HTML mit Bereichen für einen Titel, eine Seitenleiste und den Hauptinhalt. Diese Bereiche sind mit den Template-Tags `block` und `endblock` gekennzeichnet und benannt.
Sie können die Blöcke leer lassen oder Standardinhalte einfügen, die beim Rendern abgeleiteter Seiten verwendet werden.

> [!NOTE]
> Template-_Tags_ sind Funktionen, mit denen Sie in einem Template beispielsweise Listen durchlaufen oder abhängig vom Wert einer Variablen Bedingungen auswerten können. Neben Template-Tags können Sie mit der Template-Syntax auf Variablen zugreifen, die von der View an das Template übergeben werden, und _Template-Filter_ verwenden, um Variablen zu formatieren (etwa eine Zeichenfolge in Kleinbuchstaben umzuwandeln).

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

Wenn wir ein Template für eine bestimmte View definieren, geben wir zuerst mit dem Template-Tag `extends` das Basis-Template an – siehe das folgende Codebeispiel. Anschließend legen wir mithilfe von `block`-/`endblock`-Bereichen fest, welche Abschnitte des Basis-Templates wir gegebenenfalls ersetzen möchten.

Der folgende Codeausschnitt zeigt beispielsweise, wie Sie mit dem Template-Tag `extends` das Basis-Template verwenden und den Block `content` überschreiben. Das erzeugte HTML enthält den im Basis-Template definierten Code und dessen Struktur, einschließlich des Standardinhalts im Block `title`. An die Stelle des standardmäßigen Blocks `content` tritt jedoch der neue Block.

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

Wir verwenden den folgenden Codeausschnitt als Basis-Template für die _LocalLibrary_-Website. Wie Sie sehen, enthält er HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Der Standardtitel und die Standard-Seitenleiste mit Links zu den Listen aller Bücher und Autoren befinden sich ebenfalls in Blöcken, damit sie später leicht geändert werden können.

> [!NOTE]
> Außerdem führen wir zwei weitere Template-Tags ein: `url` und `load static`. Diese Tags erläutern wir in den folgenden Abschnitten.

Erstellen Sie die Datei **base_generic.html** unter **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code ein:

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
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

Das Template bindet CSS von [Bootstrap](https://getbootstrap.com/) ein, um das Layout und die Darstellung der HTML-Seite zu verbessern. Mit Bootstrap (oder einem anderen clientseitigen Web-Framework) lässt sich schnell eine ansprechende Seite erstellen, die auf unterschiedlichen Bildschirmgrößen gut dargestellt wird.

Das Basis-Template verweist außerdem auf eine lokale CSS-Datei (**styles.css**) mit zusätzlichen Stilen. Erstellen Sie die Datei **styles.css** unter **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index-Template

Erstellen Sie die HTML-Datei **index.html** unter **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code ein.
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

Im Abschnitt _Dynamische Inhalte_ definieren wir Platzhalter (_Template-Variablen_) für die Informationen aus der View, die wir einfügen möchten.
Die Variablen stehen zwischen doppelten geschweiften Klammern.

> [!NOTE]
> Template-Variablen und Template-Tags (Funktionen) lassen sich leicht unterscheiden: Variablen stehen zwischen doppelten geschweiften Klammern (`\{{ num_books }}`), Tags zwischen einfachen geschweiften Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`).

Wichtig ist hier, dass die Variablen nach den _Schlüsseln_ benannt sind, die wir im `context`-Dictionary an die Funktion `render()` unserer View übergeben (siehe Beispiel unten).
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

Ihr Projekt wird wahrscheinlich statische Ressourcen wie JavaScript, CSS und Bilder verwenden. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern kann), erlaubt Django Ihnen, ihn in Ihren Templates relativ zur globalen Einstellung `STATIC_URL` anzugeben. Das standardmäßige Website-Grundgerüst setzt `STATIC_URL` auf `"/static/"`. Sie können die Dateien aber auch über ein Content Delivery Network oder an einem anderen Ort bereitstellen.

Im Template rufen Sie zunächst das Template-Tag `load` mit der Angabe „static“ auf, um die Template-Bibliothek einzubinden, wie das folgende Codebeispiel zeigt. Anschließend können Sie mit dem Template-Tag `static` die relative URL der benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Auf ähnliche Weise können Sie beispielsweise ein Bild in die Seite einfügen:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden. Django stellt sie jedoch standardmäßig nicht bereit. Beim [Erstellen des Website-Grundgerüsts](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben wir durch eine Änderung der globalen URL-Zuordnung (**/django-locallibrary-tutorial/locallibrary/urls.py**) den Entwicklungs-Webserver so konfiguriert, dass er Dateien bereitstellt. Für den Produktivbetrieb müssen wir die Bereitstellung aber noch aktivieren. Darauf gehen wir später ein.

Weitere Informationen zur Arbeit mit statischen Dateien finden Sie unter [Statische Dateien verwalten](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Auf URLs verlinken

Im obigen Basis-Template wurde das Template-Tag `url` eingeführt.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag erwartet den Namen eines Aufrufs der Funktion `path()` in Ihrer **urls.py** sowie die Werte aller Argumente, die die zugehörige View von dieser Funktion erhält. Es gibt eine URL zurück, mit der Sie auf die Ressource verlinken können.

#### Festlegen, wo Templates gesucht werden

Wo Django nach Templates sucht, wird im Objekt `TEMPLATES` in der Datei **settings.py** festgelegt.
Die standardmäßige **settings.py**, wie sie für dieses Tutorial erstellt wurde, sieht ungefähr so aus:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

Die Einstellung `'APP_DIRS': True` ist besonders wichtig: Sie weist Django an, in jeder Anwendung des Projekts in einem Unterverzeichnis namens „templates“ nach Templates zu suchen. Dadurch lassen sich Templates und die zugehörige Anwendung für eine einfache Wiederverwendung zusammenhalten.

Mit `'DIRS': []` können wir außerdem bestimmte Verzeichnisse angeben, in denen Django suchen soll. Das ist im Moment aber noch nicht nötig.

> [!NOTE]
> Weitere Informationen darüber, wie Django Templates findet und welche Template-Formate unterstützt werden, finden Sie im [Abschnitt über Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht das Ergebnis aus?

Jetzt haben wir alle benötigten Ressourcen erstellt, um die Indexseite anzuzeigen. Starten Sie den Server mit `python3 manage.py runserver` und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles richtig konfiguriert ist, sollte Ihre Website wie auf dem folgenden Screenshot aussehen.

![Indexseite der LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **All books** und **All authors** funktionieren noch nicht, weil die Pfade, Views und Templates für diese Seiten noch nicht definiert sind. Wir haben im Template `base_generic.html` lediglich Platzhalter für diese Links eingefügt.

## Probieren Sie es selbst

Mit den folgenden Aufgaben können Sie überprüfen, wie vertraut Sie mit Modellabfragen, Views und Templates sind.

1. Das [Basis-Template von LocalLibrary](#das_basis-template_von_locallibrary) enthält einen Block `title`. Überschreiben Sie diesen Block im [Index-Template](#das_index-template) und legen Sie einen neuen Seitentitel fest.

   > [!NOTE]
   > Der Abschnitt [Templates erweitern](#templates_erweitern) erklärt, wie Sie Blöcke erstellen und einen Block in einem anderen Template überschreiben.

2. Ändern Sie die [View](#view_function-based) so, dass sie die Anzahl der _Genres_ und _Bücher_ ermittelt, die ein bestimmtes Wort enthalten (ohne Berücksichtigung der Groß- und Kleinschreibung), und übergeben Sie die Ergebnisse an `context`. Das funktioniert ähnlich wie beim Erstellen und Verwenden von `num_books` und `num_instances_available`. Aktualisieren Sie anschließend das [Index-Template](#das_index-template), sodass es diese Variablen anzeigt.

## Zusammenfassung

Wir haben die Startseite unserer Website erstellt: eine HTML-Seite, die die Anzahl einiger Datensätze aus der Datenbank anzeigt und auf weitere, noch zu erstellende Seiten verlinkt. Dabei haben wir Grundlagen über URL-Zuordnungen, Views, Datenbankabfragen mithilfe von Modellen, die Übergabe von Informationen aus einer View an ein Template sowie das Erstellen und Erweitern von Templates kennengelernt.

Im nächsten Artikel bauen wir auf diesem Wissen auf und erstellen die übrigen vier Seiten unserer Website.

## Siehe auch

- [Ihre erste Django-Anwendung schreiben, Teil 3: Views und Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [View-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Statische Dateien verwalten](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django-Hilfsfunktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
