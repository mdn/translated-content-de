---
title: "Django-Tutorial Teil 5: Unsere Startseite erstellen"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt können wir den Code für unsere erste vollständige Seite hinzufügen: die Startseite der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website). Die Startseite zeigt, wie viele Datensätze für jeden Modelltyp vorhanden sind, und bietet in einer Seitenleiste Navigationslinks zu unseren anderen Seiten. Dabei sammeln wir praktische Erfahrung mit dem Erstellen einfacher URL-Zuordnungen und Views, dem Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Einführung in Django</a>. Bearbeiten Sie die vorherigen Teile des Tutorials (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Django-Administrationsseite</a>).
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

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze angelegt haben, können wir den Code schreiben, der diese Informationen den Nutzern präsentiert. Zunächst müssen wir festlegen, welche Informationen unsere Seiten anzeigen sollen und über welche URLs diese Ressourcen erreichbar sein werden. Anschließend erstellen wir einen URL-Mapper, Views und Templates, um die Seiten anzuzeigen.

Das folgende Diagramm zeigt den grundlegenden Datenfluss und die Komponenten, die für die Verarbeitung von HTTP-Anfragen und -Antworten erforderlich sind. Da wir das Modell bereits implementiert haben, erstellen wir hauptsächlich diese Komponenten:

- URL-Mapper, die unterstützte URLs (und gegebenenfalls darin codierte Informationen) an die passenden View-Funktionen weiterleiten.
- View-Funktionen, die die angeforderten Daten aus den Modellen abrufen, HTML-Seiten zur Anzeige dieser Daten erstellen und die Seiten zurückgeben, damit Nutzer sie im Browser ansehen können.
- Templates, mit denen die Daten in den Views dargestellt werden.

![Diagramm des grundlegenden Datenflusses und der Komponenten URL, Modell, View und Template bei der Verarbeitung von HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage erreicht einen Django-Server und wird an die Datei „urls.py“ der URL-Komponente weitergeleitet. Von dort gelangt die Anfrage zum passenden View. Dieser kann Daten aus der Datei „models.py“ der Modellkomponente lesen und in sie schreiben. Außerdem greift er auf das HTML-Template zu. Der View gibt die Antwort an den Nutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, benötigen wir fünf Seiten. Das ist zu viel, um es in einem einzigen Artikel zu behandeln. Daher konzentriert sich dieser Artikel auf die Implementierung der Startseite; die übrigen Seiten behandeln wir in einem späteren Artikel. So erhalten Sie einen guten Gesamtüberblick darüber, wie URL-Mapper, Views und Modelle in der Praxis zusammenarbeiten.

## URLs für die Ressourcen festlegen

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) für Endnutzer im Wesentlichen schreibgeschützt ist, benötigen wir lediglich eine Einstiegsseite (die Startseite) sowie Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Für unsere Seiten benötigen wir folgende URLs:

- `catalog/` — Die Startseite (Indexseite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht eines bestimmten Buchs mit dem Primärschlüssel `<id>` (dem Standardwert). Die URL für das dritte zur Liste hinzugefügte Buch lautet beispielsweise `/catalog/book/3`.
- `catalog/author/<id>` — Die Detailansicht eines bestimmten Autors mit dem Primärschlüssel `<id>`. Die URL für den elften zur Liste hinzugefügten Autor lautet beispielsweise `/catalog/author/11`.

Die ersten drei URLs geben die Indexseite, die Bücherliste und die Autorenliste zurück. Diese URLs enthalten keine zusätzlichen codierten Informationen; die Abfragen zum Abrufen der Daten aus der Datenbank bleiben daher immer gleich. Welche Ergebnisse die Abfragen zurückgeben, hängt allerdings vom Inhalt der Datenbank ab.

Die letzten beiden URLs zeigen dagegen Detailinformationen zu einem bestimmten Buch oder Autor an. Sie codieren die Identität des anzuzeigenden Eintrags (oben als `<id>` dargestellt). Der URL-Mapper extrahiert diese Information und übergibt sie an den View. Dieser bestimmt dann dynamisch, welche Informationen aus der Datenbank abgerufen werden müssen. Da die Information in der URL codiert ist, können wir mit jeweils einer URL-Zuordnung, einem View und einem Template alle Bücher (bzw. Autoren) verarbeiten.

> [!NOTE]
> Mit Django können Sie URLs nach Bedarf gestalten: Sie können Informationen wie oben gezeigt im URL-Pfad codieren oder `GET`-Parameter in die URL aufnehmen, beispielsweise `/book/?id=6`. Unabhängig vom gewählten Ansatz sollten die URLs übersichtlich, logisch und lesbar bleiben, wie [vom W3C empfohlen](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im URL-Pfad zu codieren, um eine bessere URL-Gestaltung zu erreichen.

Wie im Überblick erwähnt, beschreibt der Rest dieses Artikels, wie Sie die Indexseite erstellen.

## Die Indexseite erstellen

Als erste Seite erstellen wir die Indexseite (`catalog/`). Sie enthält statisches HTML sowie dynamisch ermittelte Anzahlen verschiedener Datensätze in der Datenbank. Dafür erstellen wir eine URL-Zuordnung, einen View und ein Template.

> [!NOTE]
> Es lohnt sich, diesen Abschnitt besonders aufmerksam zu lesen. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Beim Erstellen des [Website-Grundgerüsts](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben wir die Datei **locallibrary/urls.py** so angepasst, dass das _URLConf_-Modul `catalog.urls` den verbleibenden Teil jeder eingehenden URL verarbeitet, die mit `catalog/` beginnt.

Der folgende Codeausschnitt aus **locallibrary/urls.py** bindet das Modul `catalog.urls` ein:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/6.1/ref/urls/#django.urls.include) trifft, teilt es die URL-Zeichenfolge am angegebenen Endzeichen und übergibt den verbleibenden Teil zur weiteren Verarbeitung an das eingebundene _URLConf_-Modul.

Außerdem haben wir für das _URLConf_-Modul eine Platzhalterdatei namens **/catalog/urls.py** erstellt.
Aktualisieren Sie die Liste `urlpatterns` wie folgt:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die Funktion `path()` definiert Folgendes:

- Ein URL-Muster, hier eine leere Zeichenfolge: `''`. URL-Muster besprechen wir ausführlicher, wenn wir die weiteren Views erstellen.
- Eine View-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`. Dies ist die Funktion `index()` in der Datei **views.py**.

Die Funktion `path()` legt außerdem einen Parameter `name` fest. Dieser dient als eindeutige Kennung für _diese_ URL-Zuordnung. Mit dem Namen können Sie die Zuordnung „umkehren“, also dynamisch eine URL erzeugen, die auf die zugehörige Ressource verweist.
Beispielsweise können wir mithilfe des Parameters `name` von jeder anderen Seite aus auf unsere Startseite verlinken, indem wir den folgenden Link in ein Template einfügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir könnten den Link fest codieren (wie in `<a href="/catalog/">Home</a>`). Wenn wir aber das Muster für unsere Startseite ändern, beispielsweise in `/catalog/index`, würden die Links in den Templates nicht mehr funktionieren. Eine umgekehrte URL-Zuordnung ist robuster.

### View (funktionsbasiert)

Ein View ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die benötigten Daten aus der Datenbank abruft, sie mithilfe eines HTML-Templates auf einer HTML-Seite darstellt und das erzeugte HTML anschließend als HTTP-Antwort zurückgibt, damit die Seite angezeigt werden kann. Der Index-View folgt diesem Ablauf: Er ermittelt, wie viele Datensätze der Typen `Book`, `BookInstance` und `Author` sowie wie viele verfügbare `BookInstance`-Datensätze in der Datenbank vorhanden sind, und übergibt diese Informationen zur Anzeige an ein Template.

Öffnen Sie **catalog/views.py**. Beachten Sie, dass die Datei bereits die Kurzformfunktion [render()](https://docs.djangoproject.com/en/6.1/topics/http/shortcuts/#django.shortcuts.render) importiert, mit der anhand eines Templates und von Daten eine HTML-Datei erzeugt wird:

```python
from django.shortcuts import render

# Create your views here.
```

Fügen Sie die folgenden Zeilen am Ende der Datei ein:

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

Die erste Zeile importiert die Modellklassen, mit denen wir in allen unseren Views auf Daten zugreifen werden.

Der erste Teil der View-Funktion ermittelt die Anzahl der Datensätze über das Attribut `objects.all()` der Modellklassen. Außerdem ruft er eine Liste von `BookInstance`-Objekten ab, deren Status `BookInstance.LoanStatus.AVAILABLE` ist. Weitere Informationen zum Zugriff auf Modelldaten finden Sie im vorherigen Tutorial unter [Django-Tutorial Teil 3: Modelle verwenden > Nach Datensätzen suchen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir `render()` auf, um eine HTML-Seite zu erstellen und sie als Antwort zurückzugeben. Diese Kurzformfunktion fasst mehrere andere Funktionen zusammen und vereinfacht so einen sehr häufigen Anwendungsfall. Die Funktion `render()` nimmt folgende Parameter entgegen:

- das ursprüngliche `request`-Objekt vom Typ `HttpRequest`.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine Variable `context`: ein Python-Dictionary mit den Daten, die in die Platzhalter eingefügt werden sollen.

Im nächsten Abschnitt gehen wir näher auf Templates und die Variable `context` ein. Erstellen wir nun unser Template, damit wir den Nutzern tatsächlich etwas anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (etwa einer HTML-Seite) festlegt und Platzhalter für die eigentlichen Inhalte verwendet.

Eine mit **startapp** erstellte Django-Anwendung (wie das Grundgerüst in diesem Beispiel) sucht Templates in einem Unterverzeichnis namens **templates** der jeweiligen Anwendung. Beispielsweise erwartet die Funktion `render()` in dem gerade hinzugefügten Index-View die Datei **_index.html_** unter **/catalog/templates/** und meldet einen Fehler, wenn sie nicht vorhanden ist.

Sie können das überprüfen, indem Sie die bisherigen Änderungen speichern und `127.0.0.1:8000` im Browser aufrufen. Es erscheint eine recht verständliche Fehlermeldung: „TemplateDoesNotExist at /catalog/“, zusammen mit weiteren Details.

> [!NOTE]
> Abhängig von der Einstellungsdatei Ihres Projekts sucht Django an verschiedenen Orten nach Templates. Standardmäßig durchsucht es die installierten Anwendungen. Wie Django Templates findet und welche Template-Formate unterstützt werden, erfahren Sie im [Abschnitt zu Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/6.1/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt die üblichen HTML-Elemente für den Kopf- und Hauptbereich. Hinzu kommen Navigationsbereiche mit Links zu den anderen Seiten der Website (die wir noch nicht erstellt haben) sowie Bereiche für einen Einführungstext und Buchdaten.

Ein Großteil der HTML- und Navigationsstruktur wird auf jeder Seite unserer Website gleich sein. Statt diesen Standardcode auf jeder Seite zu duplizieren, können Sie mit der Django-Template-Sprache ein Basis-Template definieren und es anschließend erweitern, indem Sie nur die Teile ersetzen, die sich je nach Seite unterscheiden.

Der folgende Codeausschnitt zeigt ein Beispiel für ein Basis-Template aus einer Datei **base_generic.html**.
Das Template für LocalLibrary erstellen wir gleich.
Das Beispiel enthält allgemeines HTML mit Bereichen für einen Titel, eine Seitenleiste und den Hauptinhalt. Diese Bereiche sind durch die Template-Tags `block` und `endblock` gekennzeichnet.
Sie können die Blöcke leer lassen oder Standardinhalte angeben, die beim Rendern abgeleiteter Seiten verwendet werden.

> [!NOTE]
> Template-_Tags_ sind Funktionen, mit denen Sie in einem Template beispielsweise Listen durchlaufen oder bedingte Operationen abhängig vom Wert einer Variablen ausführen können. Darüber hinaus ermöglicht die Template-Syntax den Zugriff auf Variablen, die der View an das Template übergibt. Mit _Template-Filtern_ können Sie Variablen formatieren, etwa indem Sie eine Zeichenfolge in Kleinbuchstaben umwandeln.

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

Wenn wir ein Template für einen bestimmten View definieren, geben wir zuerst mit dem Template-Tag `extends` das Basis-Template an – siehe das folgende Codebeispiel. Anschließend legen wir mithilfe von Abschnitten mit `block` und `endblock` fest, welche Bereiche des Basis-Templates wir gegebenenfalls ersetzen möchten.

Der folgende Codeausschnitt zeigt beispielsweise, wie Sie mit dem Template-Tag `extends` den Block `content` überschreiben. Das erzeugte HTML enthält den Code und die Struktur des Basis-Templates, einschließlich des im Block `title` definierten Standardinhalts. Anstelle des ursprünglichen Blocks `content` wird jedoch der neue verwendet.

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

Den folgenden Codeausschnitt verwenden wir als Basis-Template für die _LocalLibrary_-Website. Wie Sie sehen, enthält er HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standard-Seitenleiste mit Links zu den Listen aller Bücher und Autoren. Beide sind in Blöcke eingeschlossen, damit sie sich später leicht ändern lassen.

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

Das Template bindet CSS von [Bootstrap](https://getbootstrap.com/) ein, um Layout und Darstellung der HTML-Seite zu verbessern. Mit Bootstrap (oder einem anderen clientseitigen Webframework) lässt sich schnell eine ansprechende Seite erstellen, die auf unterschiedlichen Bildschirmgrößen gut dargestellt wird.

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
Die erste Zeile erweitert unser Basis-Template; anschließend ersetzt der Code dessen standardmäßigen Block `content`.

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

Im Abschnitt _Dynamischer Inhalt_ definieren wir Platzhalter (_Template-Variablen_) für die Informationen aus dem View, die wir einfügen möchten.
Die Variablen stehen zwischen doppelten geschweiften Klammern.

> [!NOTE]
> Template-Variablen und Template-Tags (Funktionen) lassen sich leicht unterscheiden: Variablen stehen zwischen doppelten geschweiften Klammern (`\{{ num_books }}`), Tags zwischen einfachen geschweiften Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`).

Wichtig ist dabei, dass die Namen der Variablen den _Schlüsseln_ entsprechen, die wir in der Funktion `render()` unseres Views an das Dictionary `context` übergeben (siehe Beispiel unten).
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

Ihr Projekt wird wahrscheinlich statische Ressourcen wie JavaScript, CSS und Bilder verwenden. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist oder sich ändern kann, können Sie ihn in Ihren Templates relativ zur globalen Einstellung `STATIC_URL` angeben. Im standardmäßigen Website-Grundgerüst hat `STATIC_URL` den Wert `"/static/"`. Sie können die Dateien aber auch über ein Content Delivery Network oder an einem anderen Ort bereitstellen.

Rufen Sie innerhalb des Templates zunächst das Template-Tag `load` mit der Angabe „static“ auf, um die Template-Bibliothek einzubinden, wie im folgenden Codebeispiel gezeigt. Danach können Sie das Template-Tag `static` mit der relativen URL der benötigten Datei verwenden.

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
  width="555"
  height="540" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden. Django stellt sie jedoch standardmäßig nicht bereit. Als wir das [Website-Grundgerüst erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben, konfigurierten wir den Entwicklungsserver durch eine Änderung am globalen URL-Mapper (**/locallibrary/urls.py**) für die Bereitstellung von Dateien. Für die Produktionsumgebung müssen wir die Dateibereitstellung allerdings noch aktivieren. Darauf gehen wir später ein.

Weitere Informationen zum Umgang mit statischen Dateien finden Sie unter [Statische Dateien verwalten](https://docs.djangoproject.com/en/6.1/howto/static-files/) in der Django-Dokumentation.

#### Auf URLs verlinken

Im obigen Basis-Template wurde das Template-Tag `url` eingeführt.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag nimmt den Namen einer in Ihrer **urls.py** aufgerufenen `path()`-Funktion sowie die Werte aller Argumente entgegen, die der zugehörige View von dieser Funktion erhält. Es gibt eine URL zurück, mit der Sie auf die Ressource verlinken können.

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
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

Besonders wichtig ist die Einstellung `'APP_DIRS': True`: Sie weist Django an, in jeder Anwendung des Projekts in einem Unterverzeichnis namens „templates“ nach Templates zu suchen. Dadurch lassen sich Templates und die zugehörige Anwendung zusammenhalten und leichter wiederverwenden.

Mit `'DIRS': []` können wir außerdem weitere Verzeichnisse angeben, in denen Django suchen soll. Das ist derzeit aber noch nicht nötig.

> [!NOTE]
> Wie Django Templates findet und welche Template-Formate unterstützt werden, erfahren Sie im [Abschnitt zu Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/6.1/topics/templates/).

## Wie sieht das Ergebnis aus?

Damit haben wir alle Ressourcen erstellt, die für die Anzeige der Indexseite erforderlich sind. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles richtig konfiguriert ist, sollte Ihre Website wie im folgenden Screenshot aussehen.

![Indexseite der LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **All books** und **All authors** funktionieren noch nicht, da die Pfade, Views und Templates für diese Seiten noch nicht definiert sind. Im Template `base_generic.html` haben wir lediglich Platzhalter für diese Links eingefügt.

## Probieren Sie es selbst

Mit den folgenden Aufgaben können Sie prüfen, wie vertraut Sie mit Modellabfragen, Views und Templates sind.

1. Das [Basis-Template von LocalLibrary](#das_basis-template_von_locallibrary) enthält einen Block `title`. Überschreiben Sie diesen Block im [Index-Template](#das_index-template) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Im Abschnitt [Templates erweitern](#templates_erweitern) wird erklärt, wie Sie Blöcke erstellen und einen Block in einem anderen Template erweitern.

2. Ändern Sie den [View](#view_function-based) so, dass er die Anzahl der _Genres_ sowie der _Bücher_, die ein bestimmtes Wort enthalten (ohne Beachtung der Groß- und Kleinschreibung), ermittelt und die Ergebnisse an `context` übergibt. Dies funktioniert ähnlich wie beim Erstellen und Verwenden von `num_books` und `num_instances_available`. Aktualisieren Sie anschließend das [Index-Template](#das_index-template), damit es diese Variablen anzeigt.

## Zusammenfassung

Wir haben die Startseite unserer Website erstellt: eine HTML-Seite, die die Anzahl verschiedener Datensätze aus der Datenbank anzeigt und auf weitere, noch zu erstellende Seiten verlinkt. Dabei haben wir grundlegende Konzepte kennengelernt: URL-Mapper, Views, Datenbankabfragen mit Modellen, die Übergabe von Informationen aus einem View an ein Template sowie das Erstellen und Erweitern von Templates.

Im nächsten Artikel bauen wir auf diesem Wissen auf und erstellen die verbleibenden vier Seiten unserer Website.

## Siehe auch

- [Ihre erste Django-App schreiben, Teil 3: Views und Templates](https://docs.djangoproject.com/en/6.1/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/6.1/topics/http/urls/) (Django-Dokumentation)
- [View-Funktionen](https://docs.djangoproject.com/en/6.1/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/6.1/topics/templates/) (Django-Dokumentation)
- [Statische Dateien verwalten](https://docs.djangoproject.com/en/6.1/howto/static-files/) (Django-Dokumentation)
- [Django-Kurzformfunktionen](https://docs.djangoproject.com/en/6.1/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
