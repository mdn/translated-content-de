---
title: "Django-Tutorial Teil 5: Erstellen unserer Startseite"
slug: Learn/Server-side/Django/Home_page
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

Wir sind nun bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt — eine Startseite für die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite wird die Anzahl der Datensätze anzeigen, die wir für jeden Modelltyp haben, und Navigationslinks zu unseren anderen Seiten in der Seitenleiste bereitstellen. Dabei werden wir praktische Erfahrungen im Schreiben grundlegender URL-Mappings und Views sammeln, Datensätze aus der Datenbank abrufen und Vorlagen verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Django/Introduction">Django Einführung</a>. Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Django-Admin-Site</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, einfache URL-Maps und Views (wo keine Daten in der URL kodiert sind) zu erstellen, Daten von Modellen abzurufen und Vorlagen zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs zu definieren, die wir für die Rückgabe dieser Ressourcen verwenden. Dann werden wir einen URL-Mapping, Views und Vorlagen erstellen, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die erforderlichen Komponenten beim Bearbeiten von HTTP-Anfragen und -Antworten. Da wir das Modell bereits implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mappings, um die unterstützten URLs (und alle in den URLs kodierten Informationen) an die entsprechenden View-Funktionen weiterzuleiten.
- View-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten an den Benutzer zur Ansicht im Browser zurückzugeben.
- Vorlagen, die beim Rendern von Daten in den Views verwendet werden.

![Hauptdatenflussdiagramm: URL-, Modell-, View- und Template-Komponentenerforderlich beim Bearbeiten von HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage trifft auf einen Django-Server und wird auf die 'urls.py'-Datei der URLS-Komponente weitergeleitet. Die Anfrage wird an die entsprechende View weitergeleitet. Die View kann Daten aus dem Dateimodell in der Datei 'models.py' lesen und schreiben, die den Code im Zusammenhang mit Modellen enthält. Die View greift auch auf die HTML-Dateivorlage zu. Die View gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir 5 Seiten zu erstellen, was zu viele Informationen für die Dokumentation in einem einzigen Artikel sind. Daher wird sich dieser Artikel darauf konzentrieren, wie die Startseite implementiert wird, und wir werden die anderen Seiten in einem nachfolgenden Artikel behandeln. Dies sollte Ihnen ein gutes Verständnis von den End-to-End-Prozessen der URL-Mappings, Views und Modelle in der Praxis geben.

## Definition der Ressourcen-URLs

Da diese Version der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) im Grunde genommen nur-lesen für Endbenutzer ist, müssen wir nur eine Einstiegsseite für die Website bereitstellen (eine Startseite) und Seiten, die Listen- und Detailansichten für Bücher und Autoren anzeigen.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Index-Seite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch mit einem Primärschlüsselfeld von `<id>` (Standard). Zum Beispiel wird die URL für das dritte zur Liste hinzugefügte Buch `/catalog/book/3`.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld von `<id>`. Zum Beispiel wird die URL für den elften zur Liste hinzugefügten Autor `/catalog/author/11`.

Die ersten drei URLs werden die Index-Seite, die Buchliste und die Autorenliste zurückgeben. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, bleiben immer gleich. Die Ergebnisse der Abfragen hängen jedoch vom Inhalt der Datenbank ab.

Im Gegensatz dazu zeigen die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor an. Diese URLs kodieren die Identität des anzuzeigenden Elements (dargestellt durch `<id>` oben). Der URL-Mapping wird die kodierten Informationen extrahieren und an die View übergeben, und die View wird dynamisch bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen. Indem wir die Informationen in der URL kodieren, verwenden wir ein einziges Set von URL-Mapping, einer View und einer Vorlage, um alle Bücher (oder Autoren) zu handhaben.

> [!NOTE]
> Mit Django können Sie Ihre URLs nach Belieben konstruieren — Sie können Informationen wie oben gezeigt im Textkörper der URL kodieren oder `GET`-Parameter in die URL einfügen, zum Beispiel `/book/?id=6`. Unabhängig davon, wie Sie vorgehen, sollten die URLs sauber, logisch und lesbar gehalten werden, wie von der [W3C empfohlen](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im Textkörper der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie im Überblick erwähnt, beschreibt der Rest dieses Artikels, wie die Index-Seite konstruiert wird.

## Erstellung der Index-Seite

Die erste Seite, die wir erstellen werden, ist die Index-Seite (`catalog/`). Die Index-Seite wird einige statische HTML-Elemente sowie generierte "Zählungen" verschiedener Datensätze in der Datenbank enthalten. Um dies zu verwirklichen, erstellen wir eine URL-Zuordnung, eine View und eine Vorlage.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt etwas mehr Aufmerksamkeit zu schenken. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Als wir die [Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website) erstellt haben, haben wir die **locallibrary/urls.py**-Datei aktualisiert, um sicherzustellen, dass wann immer eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_-Modul `catalog.urls` den verbleibenden Teilstring verarbeitet.

Der folgende Codeausschnitt aus der **locallibrary/urls.py** enthält das `catalog.urls`-Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) antrifft, wird die URL-Zeichenfolge am angegebenen Endzeichen aufgeteilt und der verbleibende Teilstring an das enthaltene _URLconf_-Modul zur weiteren Verarbeitung gesendet.

Wir haben auch eine Platzhalter-Datei für das _URLConf_-Modul erstellt, genannt **/catalog/urls.py**.
Fügen Sie die folgenden Zeilen zu dieser Datei hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die Funktion `path()` definiert Folgendes:

- Ein URL-Muster, das eine leere Zeichenfolge ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Views arbeiten.
- Eine View-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, welche die Funktion namens `index()` in der **views.py**-Datei ist.

Die Funktion `path()` gibt auch einen `name`-Parameter an, der ein eindeutiger Bezeichner für _diese_ spezielle URL-Zuordnung ist. Sie können den Namen verwenden, um den Mapper "umzukehren", das heißt, um dynamisch eine URL zu erstellen, die auf die Ressource verweist, die der Mapper verarbeiten soll.
Zum Beispiel können wir den Namen-Parameter verwenden, um von jeder anderen Seite auf unsere Startseite zu verlinken, indem wir den folgenden Link in einer Vorlage hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link hart kodieren (wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, zum Beispiel in `/catalog/index`, werden die Vorlagen nicht mehr korrekt verlinken. Die Verwendung eines umgekehrten URL-Mappings ist robuster.

### View (funktionbasiert)

Eine View ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mit einer HTML-Vorlage darstellt und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Index-View folgt diesem Modell — sie ruft Informationen über die Anzahl der `Book`, `BookInstance`, verfügbare `BookInstance` und `Author`-Datensätze ab, die wir in der Datenbank haben, und übergibt diese Informationen an eine Vorlage zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) Shortcut-Funktion importiert, um eine HTML-Seite mit einer Vorlage und Daten zu erstellen:

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

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um auf Daten in allen unseren Views zuzugreifen.

Der erste Teil der View-Funktion ruft die Anzahl der Datensätze über das `objects.all()`-Attribut der Modellklassen ab. Es wird auch eine Liste von `BookInstance`-Objekten abgerufen, die einen Wert von 'a' (verfügbar) im Statusfeld haben. Weitere Informationen darüber, wie man auf Modelldaten zugreift, finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Verwendung von Modellen > Suchen von Datensätzen](/de/docs/Learn/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Shortcut-Funktion umschließt eine Reihe anderer Funktionen, um einen sehr gebräuchlichen Anwendungsfall zu vereinfachen. Die `render()`-Funktion akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, das ein `HttpRequest` ist;
- eine HTML-Vorlage mit Platzhaltern für die Daten;
- eine `context`-Variable, die ein Python-Wörterbuch ist, das die Daten enthält, die in die Platzhalter eingefügt werden sollen.

Wir werden im nächsten Abschnitt mehr über Vorlagen und die `context`-Variable sprechen. Lassen Sie uns nun unsere Vorlage erstellen, damit wir dem Benutzer tatsächlich etwas anzeigen können!

### Vorlage

Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei definiert (wie einer HTML-Seite) und Platzhalter zur Darstellung von echtem Inhalt verwendet.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skelett dieses Beispiels) sucht nach Vorlagen in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen. Zum Beispiel wird in der soeben hinzugefügten Index-View die `render()`-Funktion die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** erwarten und einen Fehler ausgeben, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine recht intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/", und andere Details.

> [!NOTE]
> Basierend auf der Einstellungen Ihrer Projektdatei durchsucht Django an mehreren Orten nach Vorlagen, standardmäßig in Ihren installierten Anwendungen. Sie können mehr darüber erfahren, wie Django Vorlagen findet und welche Vorlagenformate es unterstützt, im [Vorlagenabschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Erweiterung von Vorlagen

Die Index-Vorlage benötigt Standard-HTML-Markup für den Kopf- und Körperbereich sowie Navigationsabschnitte, um auf die anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben) und auf Abschnitte, die einleitenden Text und Buchdaten darstellen.

Ein Großteil der HTML- und Navigationsstruktur wird auf jeder Seite unserer Website gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Vorlagensprache verwenden, um eine Basisschablone zu deklarieren und diese dann zu erweitern, um nur die Teile zu ersetzen, die für jede spezifische Seite unterschiedlich sind.

Der folgende Codeausschnitt ist eine Beispieldatei für eine Basisvorlage aus einer **base_generic.html**-Datei.
Wir werden die Vorlage für die LocalLibrary in Kürze erstellen.
Das unten stehende Beispiel umfasst allgemeines HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block`- und `endblock`-Vorlagentags markiert sind.
Sie können die Blöcke leer lassen oder standardmäßige Inhalte einfügen, die beim Rendern von Seiten aus der Vorlage verwendet werden.

> [!NOTE]
> Vorlagen _Tags_ sind Funktionen, die Sie in einer Vorlage verwenden können, um durch Listen zu iterieren, bedingte Operationen basierend auf dem Wert einer Variablen durchzuführen und so weiter. Zusätzlich zu Vorlagen-Tags ermöglicht die Vorlagensyntax das Referenzieren von Variablen, die aus der View an die Vorlage übergeben werden, und die Verwendung von _Vorlagenfiltern_, um Variablen zu formatieren (zum Beispiel, um eine Zeichenkette in Kleinbuchstaben zu konvertieren).

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

Beim Definieren einer Vorlage für eine bestimmte View geben wir zunächst die Basisvorlage mit dem `extends` Vorlagentag an — siehe den Beispielcode unten. Dann deklarieren wir, welche Abschnitte aus der Vorlage wir ersetzen möchten (falls vorhanden), indem wir `block`/`endblock`-Abschnitte wie in der Basisvorlage verwenden.

Zum Beispiel zeigt der unten stehende Codeausschnitt, wie der `extends` Vorlagentag verwendet wird, um den `content` Block zu überschreiben. Das generierte HTML enthält den in der Basisvorlage definierten Code und die Struktur, einschließlich des im `title` Block definierten Standardinhalts, ersetzt jedoch den neuen `content` Block anstelle des Standardblocks.

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

#### Die LocalLibrary Basisvorlage

Wir werden den folgenden Codeausschnitt als Basisvorlage für die _LocalLibrary_ Website verwenden. Wie Sie sehen können, enthält sie etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardseite mit Links zu Listen aller Bücher und Autoren, beide in Blöcken eingeschlossen, um sie leicht in der Zukunft zu ändern.

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

Die Vorlage enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Darstellung der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen clientseitigen Web-Framework) ist eine schnelle Möglichkeit, eine attraktive Seite zu erstellen, die sich gut an verschiedene Bildschirmgrößen anpasst.

Die Basisvorlage verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Styles bereitstellt. Erstellen Sie eine **styles.css**-Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Die Index-Vorlage

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unsere Basisvorlage in der ersten Zeile und ersetzt dann den Standard `content` Block für die Vorlage.

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

Im Abschnitt _Dynamische Inhalte_ deklarieren wir Platzhalter (_Vorlagenvariablen_) für die Informationen von der View, die wir einschließen möchten.
Die Variablen sind in doppelte geschweifte Klammern eingeschlossen (Handlebars).

> [!NOTE]
> Sie können Vorlagenvariablen und Vorlagentags (Funktionen) leicht erkennen - Variablen sind in doppelten geschweiften Klammern eingeschlossen (`\{{ num_books }}`), und Tags sind in einfachen Klammern mit Prozentzeichen eingeschlossen (`{% extends "base_generic.html" %}`).

Das Wichtige hierbei ist, dass Variablen mit den _Schlüsseln_ benannt werden, die wir in das `context`-Wörterbuch in der `render()`-Funktion unserer View übergeben (siehe Beispiel unten).
Variablen werden durch ihre zugeordneten _Werte_ ersetzt, wenn die Vorlage gerendert wird.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referenzierung statischer Dateien in Vorlagen

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bilder. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern kann), ermöglicht es Django Ihnen, den Speicherort in Ihren Vorlagen relativ zur globalen Einstellung `STATIC_URL` anzugeben. Die Standardskelettwebsite setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten diese Ressourcen auf einem Content Delivery Network oder anderswo hosten.

Innerhalb der Vorlage rufen Sie zuerst das `load` Vorlagentag auf und geben "static" an, um die Vorlagenbibliothek hinzuzufügen, wie im unten stehenden Codebeispiel gezeigt. Sie können dann das `static` Vorlagentag verwenden und die relative URL zur benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können auf ähnliche Weise ein Bild in die Seite einfügen, zum Beispiel:

```django
{% load static %}
<img
  src="{% static 'catalog/images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden, aber Django dient diesen standardmäßig nicht. Wir haben den Entwicklungs-Webserver konfiguriert, Dateien zu bedienen, indem wir den globalen URL-Mapping (**/django-locallibrary-tutorial/locallibrary/urls.py**) modifiziert haben, als wir [das Website-Skelett erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website), müssen jedoch das Datei-Serving in der Produktion aktivieren. Wir werden dies später betrachten.

Für weitere Informationen über den Umgang mit statischen Dateien siehe [Managing static files](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinkung zu URLs

Die oben eingeführte Basisvorlage führte das `url` Vorlagentag ein.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()`-Funktion, die in Ihrer **urls.py** aufgerufen wird und die Werte für alle Argumente, die die zugehörige View von dieser Funktion erhält, und gibt eine URL zurück, die Sie verwenden können, um auf die Ressource zu verlinken.

#### Konfiguration, wo die Vorlagen zu finden sind

Der Ort, an dem Django nach Vorlagen sucht, wird im Objekt `TEMPLATES` in der **settings.py**-Datei angegeben.
Die Standardeinstellung **settings.py** (wie für dieses Tutorial erstellt) sieht etwa so aus:

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

Die Einstellung `'APP_DIRS': True`, ist die wichtigste, da sie Django anweist, innerhalb eines Unterverzeichnisses jeder Anwendung im Projekt nach Vorlagen zu suchen, das "templates" genannt wird (dies macht es einfacher, Vorlagen mit ihrer zugehörigen Anwendung zur leichten Wiederverwendung zu gruppieren).

Wir können auch bestimmte Orte angeben, in denen Django nach Verzeichnissen sucht, indem wir `'DIRS': []` verwenden (aber das ist noch nicht erforderlich).

> [!NOTE]
> Sie können mehr darüber finden, wie Django Vorlagen findet und welche Vorlagenformate es unterstützt, im [Vorlagenabschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht das aus?

An diesem Punkt haben wir alle erforderlichen Ressourcen erstellt, um die Index-Seite anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Website wie der folgende Screenshot aussehen.

![Index-Seite für die LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die **Alle Bücher** und **Alle Autoren** Links werden noch nicht funktionieren, da die Pfade, Views und Vorlagen für diese Seiten nicht definiert sind. Wir haben nur Platzhalter für diese Links in der Vorlage `base_generic.html` eingefügt.

## Stellen Sie sich selbst auf die Probe

Hier sind ein paar Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Views und Vorlagen zu testen.

1. Die LocalLibrary [Basisvorlage](#die_locallibrary_basisvorlage) enthält einen `title` Block. Überschreiben Sie diesen Block in der [Index-Vorlage](#die_index-vorlage) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Erweiterung von Vorlagen](#erweiterung_von_vorlagen) erklärt, wie man Blöcke erstellt und einen Block in einer anderen Vorlage erweitert.

2. Ändern Sie die [View](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu generieren, die ein bestimmtes Wort enthalten (Groß-/Kleinschreibung ignorierend), und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie bei der Erstellung und Verwendung von `num_books` und `num_instances_available`. Ändern Sie dann die [Index-Vorlage](#die_index-vorlage) so, dass diese Variablen enthalten sind.

## Zusammenfassung

Wir haben gerade die Startseite unserer Website erstellt — eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und Links zu anderen noch zu erstellenden Seiten bietet. Dabei haben wir grundlegende Informationen über URL-Mappings, Views, die Abfrage der Datenbank mit Modellen, das Übergeben von Informationen an eine Vorlage aus einer View und das Erstellen und Erweitern von Vorlagen gelernt.

Im nächsten Artikel werden wir dieses Wissen nutzen, um die verbleibenden vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Writing your first Django app, part 3: Views and Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django docs)
- [URL dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django docs)
- [View functions](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django docs)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django docs)
- [Managing static files](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django docs)
- [Django shortcut functions](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django docs)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}
