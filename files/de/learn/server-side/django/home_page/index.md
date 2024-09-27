---
title: "Django-Tutorial, Teil 5: Erstellen unserer Startseite"
slug: Learn/Server-side/Django/Home_page
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

Wir sind nun bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt — eine Startseite für die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite wird die Anzahl der Datensätze anzeigen, die wir für jeden Modelltyp haben, und Navigationslinks in der Seitenleiste zu unseren anderen Seiten bereitstellen. Auf dem Weg dorthin werden wir praktische Erfahrungen im Schreiben einfacher URL-Karten und Ansichten sammeln, Datensätze aus der Datenbank abrufen und Vorlagen verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Django/Introduction">Django-Einführung</a>. Schließen Sie vorherige Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn/Server-side/Django/Admin_site">Django-Tutorial, Teil 4: Django-Admin-Seite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie das Erstellen einfacher URL-Karten und Ansichten (bei denen keine Daten in der URL kodiert sind), das Abrufen von Daten aus Modellen und das Erstellen von Vorlagen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist zu entscheiden, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs zu definieren, die zur Rückgabe dieser Ressourcen verwendet werden. Dann erstellen wir einen URL-Mapper, Ansichten und Vorlagen, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die erforderlichen Komponenten bei der Bearbeitung von HTTP-Anfragen und -Antworten. Da wir das Modell bereits implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mapper, um die unterstützten URLs (und alle Informationen, die in den URLs kodiert sind) an die entsprechenden Ansichts-Funktionen weiterzuleiten.
- Ansichts-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten für die Anzeige im Browser an den Benutzer zurückzugeben.
- Vorlagen, die beim Rendern von Daten in den Ansichten verwendet werden.

![Hauptdatenflussdiagramm: URL, Modell, Ansicht und Vorlagenkomponenten erforderlich, um HTTP-Anfragen und -Antworten in einer Django-Anwendung zu verarbeiten. Eine HTTP-Anfrage trifft einen Django-Server und wird an die 'urls.py'-Datei der URL-Komponente weitergeleitet. Die Anfrage wird an die entsprechende Ansicht weitergeleitet. Die Ansicht kann Daten aus der 'models.py'-Datei mit dem Code zu Modellen lesen und schreiben. Die Ansicht greift auch auf die HTML-Dateivorlagenkomponente zu. Die Ansicht gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir fünf Seiten, die angezeigt werden sollen, was zu viele Informationen sind, um sie in einem einzigen Artikel zu dokumentieren. Daher wird sich dieser Artikel darauf konzentrieren, wie die Startseite implementiert werden kann, und wir werden die anderen Seiten in einem nachfolgenden Artikel besprechen. Dies sollte Ihnen ein gutes Verständnis davon vermitteln, wie URL-Mapper, Ansichten und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) im Wesentlichen nur lesbar für Endbenutzer ist, müssen wir nur eine Landing-Page für die Seite bereitstellen (eine Startseite) sowie Seiten, die Listen- und Detailansichten für Bücher und Autoren anzeigen.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Indexseite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch mit einem Feldprimärschlüssel von `<id>` (Standard). Zum Beispiel wird die URL für das dritte hinzugefügte Buch `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detailansicht für den bestimmten Autor mit einem Feldprimärschlüssel von `<id>`. Zum Beispiel wird die URL für den 11. hinzugefügten Autor `/catalog/author/11` sein.

Die ersten drei URLs geben die Indexseite, die Buchliste und die Autorenliste zurück. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, sind immer dieselben. Die Ergebnisse der Abfragen hängen jedoch von den Inhalten der Datenbank ab.

Im Gegensatz dazu werden die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor anzeigen. Diese URLs kodieren die Identität des anzuzeigenden Elements (vertreten durch `<id>` oben). Der URL-Mapper wird die kodierten Informationen extrahieren und an die Ansicht übergeben, die Ansicht wird dann dynamisch bestimmen, welche Informationen aus der Datenbank abgerufen werden müssen. Indem wir die Informationen in der URL kodieren, verwenden wir einen einzigen Satz aus URL-Mapping, Ansicht und Vorlage, um alle Bücher (oder Autoren) zu bearbeiten.

> [!NOTE]
> Mit Django können Sie Ihre URLs nach Bedarf konstruieren — Sie können Informationen im Body der URL wie oben gezeigt kodieren oder `GET`-Parameter in die URL aufnehmen, zum Beispiel `/book/?id=6`. Unabhängig davon, welchen Ansatz Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden, wie von der [W3C empfohlen](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im Body der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie in der Übersicht erwähnt, beschreibt der Rest dieses Artikels, wie die Indexseite konstruiert wird.

## Erstellen der Indexseite

Die erste Seite, die wir erstellen werden, ist die Indexseite (`catalog/`). Die Indexseite wird einige statische HTML-Inhalte enthalten, zusammen mit generierten "Anzahlen" verschiedener Datensätze in der Datenbank. Um dies zum Laufen zu bringen, erstellen wir eine URL-Zuordnung, eine Ansicht und eine Vorlage.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt besonders aufmerksam zu sein. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Als wir die [Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website) erstellt haben, aktualisierten wir die **locallibrary/urls.py**-Datei, um sicherzustellen, dass wann immer eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_-Modul `catalog.urls` den restlichen Substring verarbeitet.

Der folgende Code-Ausschnitt aus **locallibrary/urls.py** enthält das Modul `catalog.urls`:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) trifft, trennt es die URL-Zeichenfolge am festgelegten Endzeichen und sendet den restlichen Substring zur weiteren Verarbeitung an das eingefügte _URLconf_-Modul.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul erstellt, benannt **/catalog/urls.py**.
Fügen Sie die folgenden Zeilen zu dieser Datei hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die `path()` Funktion definiert Folgendes:

- Ein URL-Muster, das eine leere Zeichenfolge ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Ansichten arbeiten.
- Eine Ansichts-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, die Funktion, die `index()` genannt wird, in der **views.py**-Datei.

Die `path()` Funktion gibt auch einen `name` Parameter an, der ein eindeutiger Bezeichner für _dieses_ bestimmte URL-Mapping ist. Sie können den Namen verwenden, um den Mapper "umzukehren", d.h. um dynamisch eine URL zu erstellen, die auf die Ressource zeigt, die der Mapper verarbeiten soll.
Zum Beispiel können wir den Namenparameter verwenden, um von einer anderen Seite aus auf unsere Startseite zu verlinken, indem wir den folgenden Link in einer Vorlage hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link hart kodieren, wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, zum Beispiel auf `/catalog/index`), werden die Vorlagen nicht mehr korrekt verlinken. Die Verwendung einer umgekehrten URL-Zuordnung ist robuster.

### Ansicht (basierend auf Funktionen)

Eine Ansicht ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mit einer HTML-Vorlage darstellt und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Indexansicht folgt diesem Modell — sie holt Informationen über die Anzahl der `Book`, `BookInstance`, verfügbaren `BookInstance` und `Author`-Datensätze ab, die wir in der Datenbank haben, und übergibt diese Informationen an eine Vorlage zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die Shortcut-Funktion [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) importiert, um eine HTML-Datei mit einer Vorlage und Daten zu generieren:

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

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um in allen unseren Ansichten auf Daten zuzugreifen.

Der erste Teil der Ansichts-Funktion holt die Anzahl der Datensätze mithilfe des `objects.all()`-Attributs auf den Modellklassen. Es erhält auch eine Liste von `BookInstance`-Objekten, die einen Wert von 'a' (Verfügbar) im Statusfeld haben. Sie finden mehr Informationen darüber, wie man auf Modelldaten zugreift, in unserem vorherigen Tutorial [Django Tutorial, Teil 3: Verwendung von Modellen > Aufzeichnen von Datensätzen](/de/docs/Learn/Server-side/Django/Models#searching_for_records).

Am Ende der Ansichts-Funktion rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Shortcut-Funktion umschließt eine Anzahl anderer Funktionen, um einen sehr häufigen Anwendungsfall zu vereinfachen. Die `render()`-Funktion akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, das eine `HttpRequest` ist.
- eine HTML-Vorlage mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch ist, das die Daten enthält, die in die Platzhalter eingefügt werden sollen.

Wir werden im nächsten Abschnitt mehr über Vorlagen und die `context`-Variable sprechen. Lassen Sie uns mit der Erstellung unserer Vorlage beginnen, damit wir dem Benutzer tatsächlich etwas anzeigen können!

### Vorlage

Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert und Platzhalter verwendet, um den tatsächlichen Inhalt darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skelett in diesem Beispiel) wird in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen nach Vorlagen suchen. Zum Beispiel wird in der Indexansicht, die wir gerade hinzugefügt haben, die `render()`-Funktion erwarten, die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** zu finden, und wird einen Fehler anzeigen, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine ziemlich intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/", und andere Details.

> [!NOTE]
> Basierend auf Ihrer Projekt-Einstellungsdatei wird Django an einer Reihe von Orten nach Vorlagen suchen und standardmäßig in Ihren installierten Anwendungen suchen. Weitere Informationen darüber, wie Django Vorlagen findet und welche Vorlageformate es unterstützt, finden Sie im [Vorlagenbereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Vorlagen erweitern

Die Index-Vorlage benötigt Standard-HTML-Markup für den Kopf- und Körperteil, zusammen mit Navigationsabschnitten, um zu den anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben), und zu Abschnitten, die Einführungstext und Buchdaten anzeigen.

Viel von der HTML- und Navigationsstruktur wird auf jeder Seite unserer Website dieselbe sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Vorlagensprache verwenden, um eine Basisevorlage zu deklarieren und diese dann zu erweitern, um nur die Teile zu ersetzen, die für jede spezifische Seite unterschiedlich sind.

Das folgende Codebeispiel ist eine Beispielbasisevorlage aus einer **base_generic.html**-Datei.
Wir werden die Vorlage für LocalLibrary in Kürze erstellen.
Das Muster darunter enthält allgemeine HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock`-Vorlagentags gekennzeichnet sind.
Sie können die Blöcke leer lassen oder Standardinhalte enthalten, die beim Rendern von Seiten aus der Vorlage verwendet werden sollen.

> [!NOTE]
> Vorlagentags sind Funktionen, die Sie in einer Vorlage verwenden können, um durch Listen zu schleifen, bedingte Operationen basierend auf dem Wert einer Variablen auszuführen usw. Zusätzlich zu Vorlagentags erlaubt Ihnen die Vorlagensyntax, auf Variablen zu verweisen, die von der Ansicht an die Vorlage übergeben werden, und _Vorlagenfilter_ zur Formatierung von Variablen zu verwenden (zum Beispiel, um eine Zeichenfolge in Kleinbuchstaben umzuwandeln).

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

Wenn Sie eine Vorlage für eine bestimmte Ansicht definieren, geben wir zuerst die Basisevorlage mit dem `extends`-Vorlagentag an - siehe das folgende Codebeispiel. Dann deklarieren wir, welche Abschnitte aus der Vorlage wir ersetzen möchten (falls vorhanden), indem wir `block`/`endblock`-Abschnitte wie in der Basisevorlage verwenden.

Zum Beispiel zeigt der untenstehende Code-Snippet, wie der `extends`-Vorlagentag verwendet wird und der `content`-Block überschrieben wird. Das generierte HTML enthält den in der Basisevorlage definierten Code und die Struktur, einschließlich des Standardinhalts, den Sie im `title`-Block definiert haben, aber den neuen `content`-Block anstelle des Standardblocks.

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

#### Die LocalLibrary-Basisevorlage

Wir werden den folgenden Code-Snippet als Basisevorlage für die _LocalLibrary_ Website verwenden. Wie Sie sehen können, enthält sie etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardsidebar mit Links zu Listen aller Bücher und Autoren, die beide in Blöcke eingeschlossen sind, um sie in Zukunft leicht ändern zu können.

> [!NOTE]
> Wir führen auch zwei zusätzliche Vorlagentags ein: `url` und `load static`. Diese Tags werden in den folgenden Abschnitten erklärt.

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

Die Vorlage enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen Client-Web-Framework) ist eine schnelle Möglichkeit, eine ansprechende Seite zu erstellen, die auf verschiedenen Bildschirmgrößen gut angezeigt wird.

Die Basisevorlage verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Stile bereitstellt. Erstellen Sie eine **styles.css**-Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Die Index-Vorlage

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unsere Basisevorlage in der ersten Zeile und ersetzt dann den Standard-`content`-Block für die Vorlage.

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

Im Abschnitt _Dynamischer Inhalt_ deklarieren wir Platzhalter (_Vorlagenvariablen_) für die Informationen aus der Ansicht, die wir einbeziehen möchten.
Die Variablen sind in doppelte geschweifte Klammern eingeschlossen.

> [!NOTE]
> Sie können Vorlagenvariablen und Vorlagentags (Funktionen) leicht erkennen - Variablen sind in doppelte geschweifte Klammern eingeschlossen (`\{{ num_books }}`), und Tags sind in einfache geschweifte Klammern mit Prozentzeichen eingeschlossen (`{% extends "base_generic.html" %}`).

Das Wichtige hier ist, dass Variablen mit den _Schlüsseln_ benannt werden, die wir in das `context` Wörterbuch in der `render()` Funktion unserer Ansicht übergeben (siehe Beispiel unten).
Variablen werden durch ihren zugehörigen _Wert_ ersetzt, wenn die Vorlage gerendert wird.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referenzieren von statischen Dateien in Vorlagen

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bilder. Da der Standort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern kann), ermöglicht Ihnen Django, den Standort in Ihren Vorlagen relativ zur globalen `STATIC_URL`-Einstellung anzugeben. Die Standardskelettwebsite setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten sich dafür entscheiden, diese auf einem Content Delivery Network oder anderswo zu hosten.

Innerhalb der Vorlage rufen Sie zuerst das `load` Vorlagentag auf und geben "static" an, um die Bibliothek der Vorlage hinzuzufügen, wie im untenstehenden Codebeispiel gezeigt. Sie können dann das `static` Vorlagentag verwenden und die relative URL zur erforderlichen Datei angeben.

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
> Die obigen Beispiele geben an, wo sich die Dateien befinden, aber Django stellt sie standardmäßig nicht bereit. Wir haben den Entwicklungs-Webserver so konfiguriert, dass er Dateien durch Ändern des globalen URL-Mappers (**/django-locallibrary-tutorial/locallibrary/urls.py**) bereitstellt, als wir [das Skelett der Website erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website), müssen jedoch den Dateizugriff in der Produktion noch aktivieren. Darauf werden wir später eingehen.

Weitere Informationen zur Arbeit mit statischen Dateien finden Sie unter [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinken zu URLs

Die obige Basisevorlage hat das `url` Vorlagentag eingeführt.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()` Funktion, die in Ihrer **urls.py** aufgerufen wird, und die Werte für alle Argumente, die die zugehörige Ansicht von dieser Funktion empfangen wird, und gibt eine URL zurück, die Sie verwenden können, um auf die Ressource zu verlinken.

#### Konfigurieren, wo die Vorlagen zu finden sind

Der Ort, an dem Django nach Vorlagen sucht, wird in dem Objekt `TEMPLATES` in der **settings.py**-Datei angegeben.
Das voreingestellte **settings.py** (wie für dieses Tutorial erstellt) sieht etwa so aus:

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

Die Einstellung `'APP_DIRS': True`, ist die wichtigste, da sie Django anweist, in einem Unterverzeichnis jeder Anwendung im Projekt namens "templates" nach Vorlagen zu suchen (dies macht es einfacher, Vorlagen mit ihrer zugehörigen Anwendung zur einfachen Wiederverwendung zu gruppieren).

Wir können auch spezifische Orte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist noch nicht erforderlich).

> [!NOTE]
> Weitere Informationen darüber, wie Django Vorlagen findet und welche Vorlagenformate es unterstützt, finden Sie im [Vorlagenbereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

Zu diesem Zeitpunkt haben wir alle erforderlichen Ressourcen erstellt, um die Indexseite anzuzeigen. Führen Sie den Server aus (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Website wie der folgende Screenshot aussehen.

![Indexseite für die LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** funktionieren noch nicht, da die Pfade, Ansichten und Vorlagen für diese Seiten noch nicht definiert sind. Wir haben nur Platzhalter für diese Links in der `base_generic.html` Vorlage eingefügt.

## Fordern Sie sich heraus

Hier sind einige Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Ansichten und Vorlagen zu testen.

1. Die LocalLibrary [Basisevorlage](#vorlagen_erweitern) enthält einen `title`-Block. Überschreiben Sie diesen Block in der [Index-Vorlage](#die_locallibrary-basisevorlage) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Die Sektion [Vorlagen erweitern](#vorlage) erklärt, wie man Blöcke erstellt und einen Block in einer anderen Vorlage erweitert.

2. Ändern Sie die [Ansicht](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu generieren, die ein bestimmtes Wort (Groß-/Kleinschreibung nicht beachten) enthalten, und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie bei der Erstellung und Verwendung von `num_books` und `num_instances_available`. Aktualisieren Sie dann die [Index-Vorlage](#die_locallibrary-basisevorlage), um diese Variablen einzuschließen.

## Zusammenfassung

Wir haben gerade die Startseite unserer Website erstellt — eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und zu anderen, noch nicht erstellten Seiten verlinkt. Auf dem Weg haben wir grundlegende Informationen über URL-Mapper, Ansichten, das Abfragen der Datenbank mit Modellen, das Übergeben von Informationen an eine Vorlage aus einer Ansicht und das Erstellen und Erweitern von Vorlagen gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die restlichen vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 3: Ansichten und Vorlagen](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [Ansichts-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Vorlagen](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django-Shortcut-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}
