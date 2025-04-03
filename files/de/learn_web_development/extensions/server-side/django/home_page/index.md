---
title: "Django Tutorial Teil 5: Erstellen unserer Startseite"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Wir sind nun bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt — eine Startseite für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite zeigt die Anzahl der Datensätze, die wir für jeden Modelltyp haben, und bietet Seitenleisten-Navigationslinks zu unseren anderen Seiten. Dabei erhalten wir praktische Erfahrung im Schreiben von grundlegenden URL-Karten und Ansichten, Abrufen von Datensätzen aus der Datenbank und Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django Einführung</a>. Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django Tutorial Teil 4: Django Admin-Seite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, einfache URL-Karten und Ansichten zu erstellen (bei denen keine Daten in der URL kodiert sind), Daten aus Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem wir unsere Modelle definiert und einige initiale Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Zuerst müssen wir bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs definieren, die für die Bereitstellung dieser Ressourcen verwendet werden sollen. Dann erstellen wir eine URL-Zuordnung, Ansichten und Templates, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die Komponenten, die erforderlich sind, um HTTP-Anfragen und -Antworten zu verarbeiten. Da wir bereits das Modell implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Zuordnungen, um die unterstützten URLs (und alle Informationen, die in den URLs kodiert sind) an die entsprechenden Ansichts-Funktionen weiterzuleiten.
- Ansichts-Funktionen, um die angeforderten Daten von den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten an den Benutzer zurückzusenden, um sie im Browser anzuzeigen.
- Templates zur Verwendung bei der Datenwiedergabe in den Ansichten.

![Hauptdatenflussdiagramm: URL-, Modell-, Ansicht- und Template-Komponenten erforderlich bei der Verarbeitung von HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage trifft auf einen Django-Server und wird an die 'urls.py' Datei der URLS-Komponente weitergeleitet. Die Anfrage wird an die entsprechende Ansicht weitergeleitet. Die Ansicht kann Daten aus den Modellen 'models.py', der Datei mit dem Modellcode, lesen und schreiben. Die Ansicht greift auch auf die HTML-Dateivorlage zu. Die Ansicht gibt die Antwort zurück an den Benutzer.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir 5 Seiten, die angezeigt werden sollen, was zu viel Information ist, um sie in einem einzigen Artikel zu dokumentieren. Daher wird sich dieser Artikel darauf konzentrieren, wie die Startseite implementiert wird, und wir werden die anderen Seiten in einem nachfolgenden Artikel behandeln. Dies sollte Ihnen ein gutes Verständnis von Anfang bis Ende darüber geben, wie URL-Zuordnungen, Ansichten und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) im Wesentlichen nur-lesbar für Endnutzer ist, müssen wir lediglich eine Startseite für die Website (eine Startseite) sowie Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_, bereitstellen.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Indexseite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch, mit einem Primärschlüsselfeld von `<id>` (standardmäßig). Beispielsweise wird die URL für das dritte Buch in der Liste `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld von `<id>`. Beispielsweise wird die URL für den 11. hinzugefügten Autor `/catalog/author/11` sein.

Die ersten drei URLs werden die Indexseite, Buchlisten und Autorenlisten zurückgeben. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, werden immer dieselben sein. Die Ergebnisse, die die Abfragen zurückgeben, hängen jedoch vom Inhalt der Datenbank ab.

Im Gegensatz dazu werden die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor anzeigen. Diese URLs kodieren die Identität des anzuzeigenden Elements (repräsentiert durch `<id>` oben). Der URL-Mapper extrahiert die kodierten Informationen und übergibt sie an die Ansicht, und die Ansicht bestimmt dynamisch, welche Informationen aus der Datenbank abgerufen werden sollen. Indem wir die Informationen in der URL kodieren, verwenden wir ein einziges Set von URL-Zuordnung, Ansicht und Template, um alle Bücher (oder Autoren) zu verarbeiten.

> [!NOTE]
> Mit Django können Sie Ihre URLs so konstruieren, wie Sie es benötigen — Sie können Informationen im Body der URL kodieren, wie oben gezeigt, oder `GET`-Parameter in die URL aufnehmen, z.B. `/book/?id=6`. Unabhängig davon, welche Methode Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden, wie [vom W3C empfohlen](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im Body der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie im Überblick erwähnt, beschreibt der Rest dieses Artikels, wie die Indexseite erstellt wird.

## Erstellen der Indexseite

Die erste Seite, die wir erstellen, ist die Indexseite (`catalog/`). Die Indexseite wird einige statische HTML-Bausteine sowie generierte "Zähler" für verschiedene Datensätze in der Datenbank enthalten. Um dies zu ermöglichen, erstellen wir eine URL-Zuordnung, eine Ansicht und ein Template.

> [!NOTE]
> Es lohnt sich, diesem Abschnitt besondere Aufmerksamkeit zu schenken. Ein Großteil der Informationen gilt auch für die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Als wir die [Grundstruktur der Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, haben wir die **locallibrary/urls.py** Datei aktualisiert, um sicherzustellen, dass immer dann, wenn eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_ Modul `catalog.urls` den verbleibenden Unterstring verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** enthält das `catalog.urls` Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) stößt, wird der URL-String an der angegebenen Endstelle aufgeteilt und der verbleibende Unterstring an das eingefügte _URLconf_ Modul zur weiteren Bearbeitung gesendet.

Wir haben auch eine Platzhalter-Datei für das _URLConf_ Modul erstellt, benannt **/catalog/urls.py**.
Fügen Sie dieser Datei die folgenden Zeilen hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die `path()` Funktion definiert Folgendes:

- Ein URL-Muster, das ein leerer String ist: `''`. Wir werden URL-Muster genauer erläutern, wenn wir an den anderen Ansichten arbeiten.
- Eine Ansichts-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, die Funktion, die in der Datei **views.py** als `index()` bezeichnet wird.

Die `path()` Funktion spezifiziert auch einen `name`-Parameter, der ein eindeutiger Bezeichner für _diese_ bestimmte URL-Zuordnung ist. Sie können den Namen verwenden, um den Mapper "umzukehren", d.h. um dynamisch eine URL zu erstellen, die auf die Ressource verweist, für die der Mapper erstellt wurde.
Zum Beispiel können wir den Namen-Parameter verwenden, um von jeder anderen Seite aus einen Link zu unserer Startseite zu setzen, indem wir den folgenden Link in ein Template einfügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link hart kodieren wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, z.B. in `/catalog/index`), dann verlinken die Templates nicht mehr korrekt. Die Verwendung einer umgekehrten URL-Zuordnung ist robuster.

### Ansicht (funktionbasiert)

Eine Ansicht ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten über ein HTML-Template in einer HTML-Seite rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Indexansicht folgt diesem Modell — sie holt Informationen über die Anzahl der `Book`, `BookInstance`, verfügbaren `BookInstance` und `Author` Datensätze, die wir in der Datenbank haben, und übergibt diese Informationen an ein Template zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) Hilfsfunktion importiert, um eine HTML-Datei mit einem Template und Daten zu generieren:

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

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um auf Daten in all unseren Ansichten zuzugreifen.

Der erste Teil der Ansichts-Funktion holt die Anzahl der Datensätze mithilfe des `objects.all()`-Attributs auf den Modellklassen ab. Sie erhält auch eine Liste von `BookInstance`-Objekten, die im Statusfeld einen Wert von 'a' (Verfügbar) haben. Weitere Informationen darüber, wie auf Modelldaten zugegriffen werden kann, finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Verwendung von Modellen > Suche nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der Ansichts-Funktion rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Hilfsfunktion umfasst eine Reihe anderer Funktionen, um einen sehr häufigen Anwendungsfall zu vereinfachen. Die `render()`-Funktion akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, das eine `HttpRequest` ist.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch ist und die Daten enthält, die in die Platzhalter eingefügt werden sollen.

Wir werden im nächsten Abschnitt mehr über Templates und die `context`-Variable sprechen. Lassen Sie uns unser Template erstellen, damit wir auch tatsächlich etwas für den Benutzer darstellen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert und Platzhalter verwendet, um tatsächliche Inhalte darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Gerüst dieses Beispiels) sucht in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen nach Templates. In der gerade hinzugefügten Indexansicht erwartet die `render()`-Funktion beispielsweise die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** und wird einen Fehler ausgeben, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine ziemlich intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/" und andere Details.

> [!NOTE]
> Basierend auf der Einstellungsdatei Ihres Projekts sucht Django an verschiedenen Stellen nach Templates und durchsucht standardmäßig Ihre installierten Anwendungen. Weitere Informationen darüber, wie Django Templates findet und welche Template-Formate es unterstützt, finden Sie im [Templates-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt standardmäßiges HTML-Markup für Kopf- und Körperabschnitte sowie Navigationsabschnitte, um zu den anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben) und zu Abschnitten, die Einleitungstext und Buchdaten anzeigen.

Ein Großteil der HTML- und Navigationsstruktur wird auf jeder Seite unserer Website gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Template-Sprache verwenden, um ein Basistemplate zu deklarieren und es dann zu erweitern, um nur die Teile zu ersetzen, die sich für jede spezifische Seite unterscheiden.

Der folgende Codeausschnitt ist ein Beispiel für ein Basistemplate aus einer **base_generic.html** Datei.
Wir werden das Template für die LocalLibrary in Kürze erstellen.
Das Beispiel unten enthält allgemeines HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock` Template-Tags markiert sind.
Sie können die Blöcke leer lassen oder standardmäßigen Inhalt hinzufügen, der beim Rendern von Seiten verwendet wird, die auf dem Template basieren.

> [!NOTE]
> Template _Tags_ sind Funktionen, die Sie in einem Template verwenden können, um durch Listen zu iterieren, bedingte Operationen basierend auf dem Wert einer Variablen auszuführen und so weiter. Neben Template-Tags ermöglicht die Template-Syntax die Referenzierung von Variablen, die aus der Ansicht an das Template übergeben werden, und die Verwendung von _Template-Filtern_, um Variablen zu formatieren (zum Beispiel, um einen String in Kleinbuchstaben zu konvertieren).

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

Wenn Sie ein Template für eine bestimmte Ansicht definieren, geben Sie zuerst das Basistemplate mit dem `extends` Template-Tag an — siehe den folgenden Codeausschnitt. Dann deklarieren Sie, welche Abschnitte des Templates Sie ersetzen möchten (falls vorhanden), indem Sie `block`/`endblock` Abschnitte wie im Basistemplate verwenden.

Der Codeausschnitt unten zeigt, wie das `extends` Template-Tag verwendet wird und der `content`-Block überschrieben wird. Das generierte HTML wird den im Basistemplate definierten Code und die Struktur einschließlich des von Ihnen im `title`-Block definierten Standardinhalts enthalten, jedoch den neuen `content`-Block anstelle des Standardblocks.

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

#### Das LocalLibrary Basistemplate

Wir werden den folgenden Codeausschnitt als Basistemplate für die LocalLibrary Website verwenden. Wie Sie sehen, enthält er etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standard-Titel und eine Standardseitenleiste mit Links zu Listen aller Bücher und Autoren, die beide in Blöcken enthalten sind, um sie in Zukunft leicht ändern zu können.

> [!NOTE]
> Wir fügen auch zwei zusätzliche Template-Tags ein: `url` und `load static`. Diese Tags werden in den folgenden Abschnitten erklärt.

Erstellen Sie eine neue Datei **base_generic.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein:

```django
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
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

Das Template enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen Client-seitigen Webframework) ist eine schnelle Möglichkeit, eine ansprechende Seite zu erstellen, die auf verschiedenen Bildschirmgrößen gut dargestellt wird.

Das Basistemplate verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Styling-Optionen enthält. Erstellen Sie eine **styles.css** Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index-Template

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unser Basistemplate in der ersten Zeile und ersetzt dann den Standard `content`-Block für das Template.

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

Im Abschnitt _Dynamischer Inhalt_ deklarieren wir Platzhalter (_Template-Variablen_) für die Informationen aus der Ansicht, die wir einfügen möchten.
Die Variablen werden mit doppelt geschweiften Klammern (Handlebars) eingeschlossen.

> [!NOTE]
> Sie können Template-Variablen und Template-Tags (Funktionen) leicht erkennen - Variablen sind in doppelt geschweiften Klammern eingeschlossen (`\{{ num_books }}`), und Tags sind in einzelne Klammern mit Prozentzeichen eingeschlossen (`{% extends "base_generic.html" %}`).

Das Wichtige hierbei ist, dass Variablen mit den _Schlüsseln_ benannt werden, die wir in das `context`-Wörterbuch in der `render()`-Funktion unserer Ansicht übergeben (siehe Beispiel unten).
Variablen werden bei der Darstellung des Templates mit ihren zugehörigen _Werten_ ersetzt.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referenzieren von statischen Dateien in Templates

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bildern. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern kann), ermöglicht es Django Ihnen, den Speicherort in Ihren Templates relativ zur globalen Einstellung `STATIC_URL` anzugeben. Die Standard-Skelettwebsite setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten sich dafür entscheiden, diese auf einem Content Delivery Network oder an einem anderen Ort zu hosten.

Innerhalb des Templates rufen Sie zuerst das `load` Template-Tag mit der Angabe von "static" auf, um die Template-Bibliothek hinzuzufügen, wie im folgenden Codebeispiel gezeigt. Danach können Sie das `static` Template-Tag verwenden und die relative URL zu der benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können ein Bild ähnlich in die Seite einfügen, zum Beispiel:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden, aber Django stellt sie standardmäßig nicht bereit. Wir haben den Entwicklungs-Webserver so konfiguriert, dass er Dateien bereitstellt, indem wir den globalen URLMapper (**/django-locallibrary-tutorial/locallibrary/urls.py**) geändert haben, als wir das [Grundgerüst der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), müssen dies jedoch für den Produktionsbetrieb noch aktivieren. Darauf werden wir später noch eingehen.

Weitere Informationen zum Arbeiten mit statischen Dateien finden Sie in den [Django-Dokumentationen zur Verwaltung statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/).

#### Verlinken zu URLs

Das Basistemplate oben hat das `url` Template-Tag eingeführt.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()` Funktion, die in Ihrer **urls.py** aufgerufen wird, und die Werte für alle Argumente, die die zugeordnete Ansicht von dieser Funktion erhält, und gibt eine URL zurück, die Sie verwenden können, um auf die Ressource zu verlinken.

#### Konfigurieren, wo die Templates zu finden sind

Der Ort, an dem Django nach Templates sucht, ist im `TEMPLATES` Objekt in der Datei **settings.py** angegeben.
Die Standard-**settings.py** (wie für dieses Tutorial erstellt) sieht ungefähr so aus:

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

Die Einstellung `'APP_DIRS': True`, ist die wichtigste, da sie Django angibt, in einem Unterverzeichnis jeder Anwendung im Projekt nach Templates zu suchen, das „templates“ genannt wird (dies erleichtert das Gruppieren von Vorlagen mit ihrer zugehörigen Anwendung zur einfachen Wiederverwendung).

Wir können auch spezifische Standorte angeben, unter denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist noch nicht nötig).

> [!NOTE]
> Weitere Informationen darüber, wie Django Templates findet und welche Template-Formate es unterstützt, finden Sie im [Templates-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

An dieser Stelle haben wir alle erforderlichen Ressourcen erstellt, um die Indexseite anzuzeigen. Führen Sie den Server aus (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![Indexseite der LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** funktionieren noch nicht, da die Pfade, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wir haben in das `base_generic.html` Template nur Platzhalter für diese Links eingefügt.

## Testen Sie sich selbst

Hier sind ein paar Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Ansichten und Templates zu testen.

1. Das LocalLibrary [Basistemplate](#das_locallibrary_basistemplate) enthält einen `title`-Block. Überschreiben Sie diesen Block im [Indextemplate](#das_index-template) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Templates erweitern](#templates_erweitern) erklärt, wie man Blöcke erstellt und einen Block in einem anderen Template erweitert.

2. Ändern Sie die [Ansicht](#view_function-based), um Zähler für _Genres_ und _Bücher_, die ein bestimmtes Wort enthalten (unabhängig von der Groß-/Kleinschreibung), zu generieren, und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie das Erstellen und Verwenden von `num_books` und `num_instances_available`. Aktualisieren Sie dann das [Indextemplate](#das_index-template), um diese Variablen einzuschließen.

## Zusammenfassung

Wir haben gerade die Startseite unserer Website erstellt — eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und Links zu anderen noch zu erstellenden Seiten enthält. Dabei haben wir grundlegende Informationen über URL-Mappings, Ansichten, das Abfragen der Datenbank mit Modellen, das Übergeben von Informationen aus einer Ansicht an ein Template und das Erstellen und Erweitern von Templates erlernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen und die restlichen vier Seiten unserer Website erstellen.

## Siehe auch

- [Erstellen Ihrer ersten Django-App, Teil 3: Ansichten und Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [Ansichts-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwaltung statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django-Hilfsfunktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
