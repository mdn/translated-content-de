---
title: "Django Tutorial Teil 5: Unsere Startseite erstellen"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt sind wir bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt — eine Startseite für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite zeigt die Anzahl der Datensätze, die wir für jeden Modelltyp haben, und bietet Navigationslinks in der Seitenleiste zu unseren anderen Seiten. Auf dem Weg dorthin gewinnen wir praktische Erfahrungen im Schreiben grundlegender URL-Maps und Views, Abrufen von Datensätzen aus der Datenbank und Verwenden von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django-Einführung</a>. Beenden Sie die vorherigen Tutorials (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django Tutorial Teil 4: Django-Admin-Seite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, einfache URL-Maps und Views zu erstellen (wo keine Daten in der URL kodiert sind), Daten aus Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist festzulegen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs zu definieren, die für die Bereitstellung dieser Ressourcen verwendet werden sollen. Dann erstellen wir einen URL-Mapper, Views und Templates zum Anzeigen der Seiten.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die Komponenten, die bei der Bearbeitung von HTTP-Anfragen und -Antworten erforderlich sind. Da wir das Modell bereits implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mapper, um die unterstützten URLs (und alle in den URLs kodierten Informationen) an die entsprechenden View-Funktionen weiterzuleiten.
- View-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und diese Seiten an den Benutzer zurückzugeben, damit sie im Browser angezeigt werden.
- Templates, die beim Rendern von Daten in den Views verwendet werden.

![Diagramm des Hauptdatenflusses: URL-, Modell-, View- und Template-Komponente, die bei der Bearbeitung von HTTP-Anfragen und -Antworten in einer Django-Anwendung erforderlich sind. Eine HTTP-Anfrage trifft auf einen Django-Server, wird an die 'urls.py'-Datei der URLS-Komponente weitergeleitet. Die Anfrage wird an die entsprechende View weitergeleitet. Die View kann Daten aus der 'models.py'-Datei lesen und schreiben, die den Code in Bezug auf Modelle enthält. Die View greift auch auf die HTML-Dateivorlage zu. Die View gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir 5 Seiten, die angezeigt werden sollen, was zu viele Informationen sind, um sie in einem einzigen Artikel zu dokumentieren. Daher konzentriert sich dieser Artikel darauf, wie die Startseite implementiert wird, und wir behandeln die anderen Seiten in einem späteren Artikel. Dies sollte Ihnen ein gutes End-to-End-Verständnis davon vermitteln, wie URL-Mapper, Views und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) im Wesentlichen schreibgeschützt für Endbenutzer ist, müssen wir nur eine Landeseite für die Webseite (eine Startseite) sowie Seiten bereitstellen, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Indexseite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch mit einem Primärschlüssel-Feld von `<id>` (Standard). Zum Beispiel wird die URL für das dritte zur Liste hinzugefügte Buch `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüssel-Feld von `<id>`. Zum Beispiel wird die URL für den 11. zur Liste hinzugefügten Autor `/catalog/author/11` sein.

Die ersten drei URLs werden die Indexseite, die Bücherliste und die Autorenliste zurückgeben. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, werden immer dieselben sein. Allerdings hängen die Ergebnisse, die die Abfragen zurückgeben, vom Inhalt der Datenbank ab.

Im Gegensatz dazu werden die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor anzeigen. Diese URLs kodieren die Identität des anzuzeigenden Elements (dargestellt durch `<id>` oben). Der URL-Mapper extrahiert die kodierten Informationen und übergibt sie an die View, und die View ermittelt dynamisch, welche Informationen aus der Datenbank abgerufen werden sollen. Indem wir die Informationen in der URL kodieren, verwenden wir ein einziges Set von URL-Mapping, View und Template, um alle Bücher (oder Autoren) zu bearbeiten.

> [!NOTE]
> Mit Django können Sie Ihre URLs so konstruieren, wie Sie es benötigen — Sie können Informationen im Hauptteil der URL kodieren, wie oben gezeigt, oder `GET`-Parameter in die URL einfügen, z.B. `/book/?id=6`. Unabhängig davon, welche Methode Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden, wie von der [W3C empfohlen](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im Hauptteil der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie in der Übersicht erwähnt, beschreibt der Rest dieses Artikels, wie die Indexseite konzipiert wird.

## Erstellen der Indexseite

Die erste Seite, die wir erstellen werden, ist die Indexseite (`catalog/`). Die Indexseite wird einige statische HTML-Inhalte sowie generierte "Zählungen" verschiedener Datensätze in der Datenbank enthalten. Um dies zu erreichen, erstellen wir ein URL-Mapping, eine View und ein Template.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt ein wenig mehr Aufmerksamkeit zu schenken. Ein Großteil der Informationen gilt auch für die anderen Seiten, die wir erstellen werden.

### URL-Mapping

Als wir die [Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, haben wir die **locallibrary/urls.py**-Datei aktualisiert, um sicherzustellen, dass immer, wenn eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_-Modul `catalog.urls` die verbleibende Teilzeichenfolge verarbeitet.

Der folgende Codeauszug aus **locallibrary/urls.py** enthält das `catalog.urls`-Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) stößt, teilt es die URL-Zeichenfolge an der markierten Endposition und sendet die verbleibende Teilzeichenfolge an das inkludierte _URLConf_-Modul zur weiteren Verarbeitung.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul erstellt, die **/catalog/urls.py** heißt. Fügen Sie dieser Datei die folgenden Zeilen hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die `path()`-Funktion definiert Folgendes:

- Ein URL-Muster, das eine leere Zeichenfolge ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Views arbeiten.
- Eine View-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, das ist die Funktion `index()` in der **views.py** Datei.

Die `path()`-Funktion spezifiziert auch einen `name`-Parameter, der ein eindeutiger Bezeichner für _dieses_ besondere URL-Mapping ist. Sie können den Namen verwenden, um den Mapper "umzukehren", d.h. um dynamisch eine URL zu erstellen, die auf die Ressource verweist, die der Mapper bearbeiten soll. Zum Beispiel können wir den Namen verwenden, um von jeder anderen Seite zu unserer Startseite zu verlinken, indem wir den folgenden Link in einem Template hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link hart codieren, wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, zum Beispiel zu `/catalog/index`), würden die Templates nicht mehr korrekt verlinken. Die Verwendung eines umgekehrten URL-Mappings ist robuster.

### View (funktionsbasiert)

Eine View ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mithilfe eines HTML-Templates rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Index-View folgt diesem Modell — sie holt Informationen über die Anzahl der `Book`, `BookInstance`, verfügbaren `BookInstance` und `Author`-Datensätze, die wir in der Datenbank haben, und übergibt diese Informationen an ein Template zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render)-Funktion importiert, um eine HTML-Datei mithilfe eines Templates und von Daten zu generieren:

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

Der erste Teil der View-Funktion holt die Anzahl der Datensätze mithilfe des `objects.all()` Attributs der Modellklassen. Sie erhält auch eine Liste von `BookInstance`-Objekten, die einen Wert von 'a' (Available) im Statusfeld haben. Weitere Informationen zum Zugriff auf Modelldaten finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Verwenden von Modellen > Suchen nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Abkürzungsfunktion umschließt eine Reihe anderer Funktionen, um einen sehr häufigen Anwendungsfall zu vereinfachen. Die `render()`-Funktion akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, das ein `HttpRequest` ist.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch ist und die einzufügenden Daten enthält.

Wir werden mehr über Templates und die `context`-Variable im nächsten Abschnitt sprechen. Lassen Sie uns unser Template erstellen, damit wir tatsächlich etwas für den Benutzer anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei definiert (z. B. einer HTML-Seite), und es verwendet Platzhalter, um tatsächliche Inhalte darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skeleton dieses Beispiels) sucht nach Templates in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen. Zum Beispiel wird in der Index-View, die wir gerade hinzugefügt haben, erwartet, dass die `render()`-Funktion die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** findet und gibt einen Fehler zurück, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine ziemlich intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/", und weitere Details.

> [!NOTE]
> Basierend auf der Einstellungen-Datei Ihres Projekts wird Django nach Templates an mehreren Stellen suchen und dabei standardmäßig in Ihren installierten Anwendungen suchen. Sie können mehr darüber erfahren, wie Django Templates findet und welche Template-Formate es unterstützt, im [Template-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt standardmäßiges HTML-Markup für den Kopf- und Körperbereich, sowie Navigationsabschnitte, um zu den anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben), sowie zu Abschnitten, die Einführungstext und Buchdaten anzeigen.

Ein Großteil der HTML- und Navigationsstruktur wird auf jeder Seite unserer Website gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Templating-Sprache verwenden, um ein Basistemplate zu deklarieren, und es dann erweitern, um nur die Teile zu ersetzen, die für jede spezielle Seite unterschiedlich sind.

Der folgende Codeausschnitt ist ein Beispiel-Basistemplate aus einer **base_generic.html**-Datei.
Wir werden das Template für LocalLibrary in Kürze erstellen.
Das Beispiel unten enthält allgemeines HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock` Template-Tags markiert sind.
Sie können die Blöcke leer lassen oder Standardinhalte einfügen, die beim Rendern von Seiten aus dem Template genutzt werden.

> [!NOTE]
> Template _Tags_ sind Funktionen, die Sie in einem Template verwenden können, um durch Listen zu schleifen, bedingte Operationen basierend auf dem Wert einer Variablen durchzuführen und so weiter. Zusätzlich zu Template-Tags ermöglicht die Template-Syntax, auf vom View an das Template übergebene Variablen zu verweisen und _Template-Filter_ zu verwenden, um Variablen zu formatieren (z.B. um einen String in Kleinbuchstaben zu konvertieren).

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

Wenn Sie ein Template für eine bestimmte View definieren, geben Sie zuerst das Basistemplate mit dem `extends` Template-Tag an — siehe den untenstehenden Codeausschnitt. Dann deklarieren Sie, welche Abschnitte aus dem Template Sie ersetzen möchten (falls vorhanden), indem Sie `block`/`endblock`-Abschnitte wie im Basistemplate verwenden.

Zum Beispiel zeigt der untenstehende Codeausschnitt, wie man das `extends` Template-Tag verwendet und den `content`-Block überschreibt. Das generierte HTML wird den im Basistemplate definierten Code und die Struktur beinhalten, einschließlich des von Ihnen im `title`-Block definierten Standardinhalts, aber der neue `content`-Block wird anstelle des Standards verwendet.

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

Wir werden den folgenden Codeausschnitt als Basistemplate für die _LocalLibrary_ Website verwenden. Wie Sie sehen können, enthält es einigen HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardseitenleiste mit Links zu Listen aller Bücher und Autoren, beide in Blöcken um sie in Zukunft leicht ändern zu können.

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

Das Template enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen clientseitigen Web-Framework) ist eine schnelle Möglichkeit, eine attraktive Seite zu erstellen, die auf verschiedenen Bildschirmgrößen gut aussieht.

Das Basistemplate verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Styles bietet. Erstellen Sie eine **styles.css**-Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index-Template

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein. Dieser Code erweitert unser Basistemplate in der ersten Zeile und ersetzt dann den Standard `content`-Block für das Template.

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

Im _Dynamischer Inhalt_-Abschnitt deklarieren wir Platzhalter (_Template-Variablen_) für die Informationen aus der View, die wir einfügen möchten. Die Variablen sind mit doppelten geschweiften Klammern (Handlebars) eingeschlossen.

> [!NOTE]
> Sie können leicht Template-Variablen und Template-Tags (Funktionen) erkennen - Variablen sind in doppelten geschweiften Klammern (`\{{ num_books }}`) eingeschlossen, und Tags sind in einzelnen Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`) eingeschlossen.

Wichtig zu beachten ist hier, dass Variablen mit den _Schlüsseln_ benannt sind, die wir in das `context`-Wörterbuch der `render()`-Funktion unserer View übergeben (siehe Beispiel unten). Variablen werden beim Rendern des Templates mit ihren zugehörigen _Werten_ ersetzt.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referenzierung statischer Dateien in Templates

Ihr Projekt verwendet wahrscheinlich statische Ressourcen, einschließlich JavaScript, CSS und Bildern. Da der Standort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern könnte), erlaubt es Django, den Standort in Ihren Templates relativ zur `STATIC_URL` globalen Einstellung anzugeben. Der Standard-Skeleton-Website setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten diese Dateien auf einem Content Delivery Network oder anderswo hosten.

Im Template rufen Sie zuerst das `load` Template-Tag auf, bei dem "static" angegeben wurde, um die Template-Bibliothek hinzuzufügen, wie im untenstehenden Codeausschnitt gezeigt. Dann können Sie das `static` Template-Tag verwenden und die relative URL zur benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können ein Bild auf ähnliche Weise auf der Seite einfügen, zum Beispiel:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die oben genannten Beispiele geben an, wo sich die Dateien befinden, aber Django dient ihnen standardmäßig nicht. Wir haben den Entwicklungs-Webserver so konfiguriert, dass er Dateien serviert, indem wir ihn beim [Erstellen des Website-Skeletons](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) modifiziert haben, müssen aber noch das File-Serving in Produktion aktivieren. Darauf werden wir später eingehen.

Weitere Informationen über die Arbeit mit statischen Dateien finden Sie im Abschnitt [Verwalten statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinkung mit URLs

Das obenstehende Basistemplate führte das `url` Template-Tag ein.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer in Ihrer **urls.py** aufgerufenen `path()`-Funktion und die Werte für alle Argumente, die die zugehörige View von dieser Funktion erhält, und gibt eine URL zurück, die Sie verwenden können, um auf die Ressource zu verweisen.

#### Konfigurieren, wo die Templates gefunden werden

Der Ort, an dem Django nach Templates sucht, wird im `TEMPLATES`-Objekt der **settings.py**-Datei angegeben.
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

Die Einstellung `'APP_DIRS': True` ist hier am wichtigsten, da sie Django anweist, in einem Unterverzeichnis jeder Anwendung im Projekt namens "templates" nach Templates zu suchen (das macht es einfacher, Templates mit ihrer zugehörigen Anwendung für eine einfache Wiederverwendung zu gruppieren).

Wir können auch spezifische Orte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist hier noch nicht notwendig).

> [!NOTE]
> Sie können mehr darüber erfahren, wie Django Templates findet und welche Template-Formate es unterstützt im [Template-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

An diesem Punkt haben wir alle erforderlichen Ressourcen erstellt, um die Indexseite anzuzeigen. Führen Sie den Server (`python3 manage.py runserver`) aus und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Site wie der folgende Screenshot aussehen.

![Indexseite der LocalLibrary Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** funktionieren noch nicht, da die Pfade, Views und Templates für diese Seiten nicht definiert sind. Wir haben nur Platzhalter für diese Links im `base_generic.html`-Template eingefügt.

## Testen Sie sich selbst

Hier sind ein paar Aufgaben, um Ihr Verständnis für Modellabfragen, Views und Templates zu testen.

1. Das [Basistemplate](#das_locallibrary_basistemplate) der LocalLibrary enthält einen `title`-Block. Überschreiben Sie diesen Block im [Index-Template](#das_index-template) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Templates erweitern](#templates_erweitern) erklärt, wie man Blöcke erstellt und einen Block in einem anderen Template erweitert.

2. Ändern Sie die [View](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu generieren, die ein bestimmtes Wort enthalten (Groß-/Kleinschreibung ignorieren), und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie die Erstellung und Verwendung von `num_books` und `num_instances_available`. Aktualisieren Sie dann das [Index-Template](#das_index-template), um diese Variablen einzuschließen.

## Zusammenfassung

Wir haben gerade die Startseite für unsere Seite erstellt — eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und Links zu anderen noch zu erstellenden Seiten bietet. Unterwegs haben wir grundlegende Informationen über URL-Mapper, Views, das Abfragen der Datenbank mit Modellen, das Übergeben von Informationen von einer View an ein Template und das Erstellen und Erweitern von Templates gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die verbleibenden vier Seiten unserer Website zu erstellen.

## Siehe auch

- [First Django-App schreiben, Teil 3: Views und Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [View-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwalten statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django-Abkürzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
