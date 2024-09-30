---
title: "Django-Tutorial Teil 5: Erstellen unserer Homepage"
slug: Learn/Server-side/Django/Home_page
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

Wir sind jetzt bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt – eine Startseite für die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite wird die Anzahl der Datensätze anzeigen, die wir für jeden Modelltyp haben, und Navigationslinks in der Seitenleiste zu unseren anderen Seiten bereitstellen. Auf dem Weg dorthin werden wir praktische Erfahrungen im Schreiben von grundlegenden URL-Maps und Views, dem Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates sammeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Django/Introduction">Django-Einführung</a>. Vollständige vorherige Tutorial-Themen (einschließlich <a href="/de/docs/Learn/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Django-Admin-Seite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen Sie, einfache URL-Maps und Views zu erstellen (bei denen keine Daten in der URL kodiert sind), Daten aus Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs zu definieren, die verwendet werden, um diese Ressourcen zurückzugeben. Dann werden wir einen URL-Mapper, Views und Templates erstellen, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die Komponenten, die beim Bearbeiten von HTTP-Anfragen und -Antworten erforderlich sind. Da wir bereits das Modell implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mapper, um die unterstützten URLs (und alle in den URLs kodierten Informationen) an die entsprechenden View-Funktionen weiterzuleiten.
- View-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten dem Benutzer zur Ansicht im Browser zurückzugeben.
- Templates zur Verwendung beim Rendern von Daten in den Views.

![Hauptdatenflussdiagramm: URL, Modell, View & Template-Komponente erforderlich beim Bearbeiten von HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage trifft auf einen Django-Server und wird an die 'urls.py'-Datei der URLS-Komponente weitergeleitet. Die Anfrage wird an die entsprechende Ansicht weitergeleitet. Die Ansicht kann Daten aus der 'models.py'-Datei der Modelle lesen und schreiben, die den Code beziehen, der sich auf die Modelle bezieht. Die Ansicht greift auch auf die HTML-Datei der Template-Komponente zu. Die Ansicht gibt die Antwort zurück an den Benutzer.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir 5 Seiten anzuzeigen, was zu viele Informationen sind, um sie in einem einzigen Artikel zu dokumentieren. Daher wird sich dieser Artikel darauf konzentrieren, wie man die Startseite implementiert, und wir werden die anderen Seiten in einem nachfolgenden Artikel behandeln. Dies sollte Ihnen ein gutes End-to-End-Verständnis dafür geben, wie URL-Mapper, Views und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) im Wesentlichen schreibgeschützt für Endbenutzer ist, müssen wir nur eine Landing Page für die Seite bereitstellen (eine Startseite) und Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Index-Seite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch, mit einem Feld-Primärschlüssel von `<id>` (Standard). Zum Beispiel wird die URL für das dritte Buch, das zur Liste hinzugefügt wurde, `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld von `<id>`. Zum Beispiel wird die URL für den 11. Autor, der zur Liste hinzugefügt wurde, `/catalog/author/11` sein.

Die ersten drei URLs geben die Index-Seite, die Bücherliste und die Autorenliste zurück. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen zum Abrufen von Daten aus der Datenbank werden immer gleich sein. Die Ergebnisse, die die Abfragen zurückgeben, hängen jedoch vom Inhalt der Datenbank ab.

Im Gegensatz dazu zeigen die letzten beiden URLs detaillierte Informationen zu einem bestimmten Buch oder Autor an. Diese URLs kodieren die Identität des anzuzeigenden Elements (dargestellt durch `<id>` oben). Der URL-Mapper extrahiert die kodierten Informationen und übergibt sie an die View, und die View wird dynamisch bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen. Durch das Kodieren der Informationen in der URL werden wir einen einzigen Satz einer URL-Abbildung, einer View und eines Templates verwenden, um alle Bücher (oder Autoren) zu behandeln.

> [!NOTE]
> Mit Django können Sie Ihre URLs nach Bedarf konstruieren – Sie können Informationen im Hauptteil der URL kodieren, wie oben gezeigt, oder `GET`-Parameter in die URL einschließen, zum Beispiel `/book/?id=6`. Welche Methode Sie auch verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden, wie von der [W3C](https://www.w3.org/Provider/Style/URI) empfohlen.
> Die Django-Dokumentation empfiehlt, Informationen im Hauptteil der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie in der Übersicht erwähnt, beschreibt der Rest dieses Artikels, wie man die Startseite konstruiert.

## Erstellen der Startseite

Die erste Seite, die wir erstellen werden, ist die Startseite (`catalog/`). Die Startseite wird einige statische HTML-Elemente sowie generierte "Anzahlen" verschiedener Datensätze in der Datenbank enthalten. Um dies zu realisieren, erstellen wir eine URL-Abbildung, eine View und ein Template.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt etwas genauer hinzuschauen. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Abbildung

Als wir die [Skeleton-Website](/de/docs/Learn/Server-side/Django/skeleton_website) erstellt haben, haben wir die Datei **locallibrary/urls.py** aktualisiert, um sicherzustellen, dass immer wenn eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_-Modul `catalog.urls` die restliche Teilzeichenfolge verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** enthält das `catalog.urls` Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) begegnet, wird die URL-Zeichenfolge am festgelegten Endzeichen aufgeteilt und die restliche Teilzeichenfolge wird zur Verarbeitung an das enthaltene _URLConf_-Modul gesendet.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul erstellt, die **/catalog/urls.py** heißt.
Fügen Sie folgende Zeilen zu dieser Datei hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die `path()` Funktion definiert Folgendes:

- Ein URL-Muster, das eine leere Zeichenfolge ist: `''`. Wir werden URL-Muster im Detail behandeln, wenn wir an den anderen Views arbeiten.
- Eine View-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, was die Funktion `index()` in der Datei **views.py** ist.

Die `path()` Funktion gibt auch einen `name` Parameter an, der ein eindeutiger Bezeichner für _dieses_ spezielle URL-Mapping ist. Sie können den Namen verwenden, um den Mapper "umzukehren", d.h. eine URL dynamisch zu erstellen, die auf die Ressource verweist, die der Mapper verarbeiten soll.
Zum Beispiel können wir den Namen-Parameter verwenden, um von jeder anderen Seite aus einen Link zu unserer Startseite zu erstellen, indem wir den folgenden Link in ein Template einfügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link hart kodieren wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, z.B. zu `/catalog/index`) werden die Templates nicht mehr korrekt verlinken. Die Verwendung eines umgekehrten URL-Mappings ist robuster.

### View (funktionbasiert)

Eine View ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mit einem HTML-Template rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Index-View folgt diesem Modell – sie holt Informationen über die Anzahl der `Book`, `BookInstance`, verfügbare `BookInstance` und `Author` Datensätze, die wir in der Datenbank haben, und übergibt diese Informationen an ein Template zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) Shortcut-Funktion importiert, um eine HTML-Datei mit einem Template und Daten zu generieren:

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

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um in allen unseren Views auf Daten zuzugreifen.

Der erste Teil der View-Funktion holt die Anzahl der Datensätze mit dem Attribut `objects.all()` auf den Modellklassen ab. Es erhält auch eine Liste von `BookInstance` Objekten, die einen Wert von 'a' (Verfügbar) im Statusfeld haben. Weitere Informationen darüber, wie Sie auf Modelldaten zugreifen können, finden Sie in unserem vorherigen Tutorial [Django-Tutorial Teil 3: Verwenden von Modellen > Suchen nach Datensätzen](/de/docs/Learn/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir die `render()` Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Shortcut-Funktion umschließt eine Reihe anderer Funktionen, um eine sehr häufige Verwendung zu vereinfachen. Die `render()` Funktion akzeptiert folgende Parameter:

- das ursprüngliche `request` Objekt, das ein `HttpRequest` ist.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine `context` Variable, die ein Python-Wörterbuch ist und die einzusetzenden Daten in die Platzhalter enthält.

Wir werden mehr über Templates und die `context` Variable im nächsten Abschnitt sprechen. Lassen Sie uns unser Template erstellen, damit wir etwas für den Benutzer tatsächlich anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert, und es verwendet Platzhalter, um den tatsächlichen Inhalt darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skelett dieses Beispiels) sucht nach Templates in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen. Zum Beispiel, in der Index-View, die wir gerade hinzugefügt haben, wird die `render()` Funktion erwarten, die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** zu finden und wird einen Fehler auslösen, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine ziemlich intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/", und andere Details.

> [!NOTE]
> Basierend auf der Konfigurationsdatei Ihres Projekts sucht Django standardmäßig an einer Reihe von Orten nach Templates, einschließlich Ihrer installierten Anwendungen. Weitere Informationen darüber, wie Django Templates findet und welche Template-Formate es unterstützt, finden Sie im [Templates-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt standardmäßiges HTML-Markup für Kopf- und Körperbereich sowie Navigationsabschnitte, um auf die anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben), und auf Abschnitte, die Einführungstext und Buchdaten anzeigen.

Ein Großteil des HTML- und Navigationsaufbaus wird auf jeder Seite unserer Website gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Templating-Sprache verwenden, um ein Basistemplate zu deklarieren und es dann zu erweitern, um nur die Teile zu ersetzen, die für jede spezifische Seite unterschiedlich sind.

Der folgende Codeausschnitt ist ein Beispiel-Basistemplate aus einer **base_generic.html** Datei.
Wir werden das Template für LocalLibrary in Kürze erstellen.
Das Beispiel unten enthält allgemeines HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock` Template-Tags markiert sind.
Sie können die Blöcke leer lassen oder Standardinhalt hinzufügen, der beim Rendern von Seiten verwendet wird, die aus dem Template abgeleitet sind.

> [!NOTE]
> Template _Tags_ sind Funktionen, die Sie in einem Template verwenden können, um z.B. Listen zu durchlaufen oder bedingte Operationen basierend auf dem Wert einer Variablen durchzuführen. Neben Template-Tags erlaubt es die Templatesyntax, Variablen zu referenzieren, die von der View in das Template übergeben werden, und _Templatefilter_ zu verwenden, um Variablen zu formatieren (z.B. um eine Zeichenkette in Kleinbuchstaben zu konvertieren).

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

Beim Definieren eines Templates für eine bestimmte View geben wir zuerst das Basistemplate mit dem `extends` Template-Tag an – siehe den Codeausschnitt unten. Dann deklarieren wir, welche Abschnitte des Templates wir ersetzen möchten (falls vorhanden), indem wir `block`/`endblock` Abschnitte wie im Basistemplate verwenden.

Zum Beispiel zeigt der unten stehende Codeausschnitt, wie das `extends` Template-Tag verwendet wird und der `content` Block überschrieben wird. Das erzeugte HTML wird den im Basistemplate definierten Code und die Struktur einschließen, einschließlich des von Ihnen im `title` Block definierten Standardinhalts, aber der neue `content` Block anstelle des Standardblocks.

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

Wir werden den folgenden Codeausschnitt als Basistemplate für die _LocalLibrary_ Website verwenden. Wie Sie sehen können, enthält es etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardseitenleiste mit Links zu Listen aller Bücher und Autoren, beide in Blöcken eingeschlossen, um zukünftig leicht änderbar zu sein.

> [!NOTE]
> Wir führen auch zwei zusätzliche Template-Tags ein: `url` und `load static`. Diese Tags werden in den folgenden Abschnitten erklärt.

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

Das Template enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Darstellung der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen Client-seitigen Web-Framework) ist eine schnelle Möglichkeit, eine attraktive Seite zu erstellen, die gut auf unterschiedlichen Bildschirmgrößen angezeigt wird.

Das Basistemplate verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Formatierungen bereitstellt. Erstellen Sie eine **styles.css** Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index Template

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unser Basistemplate in der ersten Zeile und ersetzt dann den Standard `content` Block für das Template.

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

Im Abschnitt _Dynamischer Inhalt_ erklären wir Platzhalter (_Template-Variablen_) für die Informationen aus der View, die wir einfügen möchten.
Die Variablen sind mit doppelten Klammern (Handlebars) eingeschlossen.

> [!NOTE]
> Sie können Template-Variablen und Template-Tags (Funktionen) leicht erkennen - Variablen sind in doppelten geschweiften Klammern (`\{{ num_books }}`) eingeschlossen, und Tags sind in einfachen Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`) eingeschlossen.

Das Wichtigste zu beachten ist hier, dass Variablen mit den _Schlüsseln_ benannt sind, die wir im `context` Wörterbuch in der `render()` Funktion unserer View übergeben (siehe Beispiel unten).
Variablen werden mit ihren zugehörigen _Werten_ ersetzt, wenn das Template gerendert wird.

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

Ihr Projekt verwendet wahrscheinlich statische Ressourcen, einschließlich JavaScript, CSS und Bilder. Da der Standort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern kann), ermöglicht Ihnen Django, den Standort in Ihren Templates relativ zur Einstellung `STATIC_URL` anzugeben. Die standardmäßige Skelet-Website setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten diese Dateien auch auf einem Content-Delivery-Netzwerk oder anderswo hosten.

Innerhalb des Templates rufen Sie zuerst das `load` Template-Tag auf, indem Sie "static" angeben, um die Template-Bibliothek hinzuzufügen, wie im Codeausschnitt unten gezeigt. Dann können Sie das `static` Template-Tag verwenden und die relative URL zur benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können ein Bild auf ähnliche Weise in die Seite einfügen, zum Beispiel:

```django
{% load static %}
<img
  src="{% static 'catalog/images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden, aber Django stellt sie standardmäßig nicht bereit. Wir haben den Entwicklungs-Webserver konfiguriert, um Dateien bereitzustellen, indem wir den globalen URL-Mapper (**/django-locallibrary-tutorial/locallibrary/urls.py**) geändert haben, als wir [das Website-Skelett erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website), aber wir müssen das Dateiserving in der Produktion noch aktivieren. Darauf werden wir später noch eingehen.

Für weitere Informationen zur Arbeit mit statischen Dateien siehe [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinken von URLs

Das oben erwähnte Basistemplate führte das `url` Template-Tag ein.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer in Ihrer **urls.py** aufgerufenen `path()` Funktion und die Werte für alle Argumente, die die zugehörige View von dieser Funktion erhält, und gibt eine URL zurück, die Sie verwenden können, um auf die Ressource zu verlinken.

#### Konfigurieren, wo die Templates zu finden sind

Der Ort, an dem Django nach Templates sucht, ist im `TEMPLATES` Objekt in der **settings.py** Datei angegeben.
Die standardmäßige **settings.py** (wie für dieses Tutorial erstellt) sieht ungefähr so aus:

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

Die Einstellung von `'APP_DIRS': True`, ist am wichtigsten, da sie Django anweist, in einem Unterverzeichnis jeder Anwendung im Projekt, das "templates" heißt, nach Templates zu suchen (das erleichtert das Gruppieren von Templates mit ihrer zugehörigen Anwendung für die einfache Wiederverwendung).

Wir können auch spezifische Orte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist noch nicht nötig).

> [!NOTE]
> Sie können mehr darüber erfahren, wie Django Templates findet und welche Template-Formate es unterstützt im [Templates-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

Zu diesem Zeitpunkt haben wir alle erforderlichen Ressourcen erstellt, um die Index-Seite anzuzeigen. Führen Sie den Server aus (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Seite wie im folgenden Screenshot aussehen.

![Index-Seite für die LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** werden noch nicht funktionieren, da die Pfade, Views und Templates für diese Seiten noch nicht definiert sind. Wir haben nur Platzhalter für diese Links im `base_generic.html` Template eingefügt.

## Fordern Sie sich selbst heraus

Hier sind ein paar Aufgaben, um Ihre Kenntnisse in Modellabfragen, Views und Templates zu testen.

1. Das LocalLibrary [Basistemplate](#das_locallibrary_basistemplate) enthält einen `title` Block. Überschreiben Sie diesen Block im [Indextemplate](#das_index_template) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Templates erweitern](#templates_erweitern) erklärt, wie man Blöcke erstellt und einen Block in einem anderen Template erweitert.

2. Ändern Sie die [View](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu erzeugen, die ein bestimmtes Wort (unabhängig von Groß- und Kleinschreibung) enthalten, und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie das Erstellen und Verwenden von `num_books` und `num_instances_available`. Aktualisieren Sie dann das [Index-Template](#das_index_template), um diese Variablen einzuschließen.

## Zusammenfassung

Wir haben gerade die Startseite für unsere Website erstellt – eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und auf andere noch zu erstellende Seiten verweist. Auf dem Weg dorthin haben wir grundlegende Informationen über URL-Mapper, Views, das Abfragen der Datenbank mit Modellen, das Übergeben von Informationen an ein Template von einer View und das Erstellen und Erweitern von Templates gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die übrigen vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 3: Views und Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [View-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django-Shortcut-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}
