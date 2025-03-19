---
title: "Django-Tutorial Teil 5: Erstellen unserer Startseite"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Wir sind jetzt bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt – eine Startseite für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite wird die Anzahl der Datensätze anzeigen, die wir für jeden Modelltyp haben, und Navigationslinks zu unseren anderen Seiten in der Seitenleiste bereitstellen. Dabei werden wir praktische Erfahrungen im Schreiben von grundlegenden URL-Maps und Ansichten sammeln, Datensätze aus der Datenbank abrufen und Templates verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django-Einführung</a>. Schließen Sie die vorherigen Tutorialthemen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Django-Verwaltungsseite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie, einfache URL-Maps und Ansichten zu erstellen (bei denen keine Daten in der URL kodiert werden), Daten aus Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Nachdem wir unsere Modelle definiert und einige erste Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs zu definieren, die wir zur Rückgabe dieser Ressourcen verwenden. Dann erstellen wir einen URL-Mapper, Ansichten und Templates, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Haupt-Datenfluss und die erforderlichen Komponenten beim Umgang mit HTTP-Anfragen und -Antworten. Da wir das Modell bereits implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mapper, die die unterstützten URLs (sowie alle Informationen, die in den URLs kodiert sind) an die entsprechenden Ansichts-Funktionen weiterleiten.
- Ansichts-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten zur Ansicht an den Benutzer zurückzugeben.
- Templates, die bei der Darstellung der Daten in den Ansichten verwendet werden.

![Haupt-Datenflussdiagramm: URL-, Modell-, Ansicht- und Template-Komponente erforderlich beim Umgang mit HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage trifft auf einen Django-Server, der sie an die 'urls.py'-Datei der URL-Komponente weiterleitet. Die Anfrage wird zur entsprechenden Ansicht weitergeleitet. Die Ansicht kann Daten aus der Models 'models.py'-Datei lesen und schreiben, die den Code im Zusammenhang mit Modellen enthält. Die Ansicht greift auch auf die HTML-Datei-Template-Komponente zu. Die Ansicht gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir 5 Seiten anzuzeigen, was zu viel Information ist, um sie in einem einzigen Artikel zu dokumentieren. Daher wird sich dieser Artikel darauf konzentrieren, wie man die Startseite implementiert, und wir werden die anderen Seiten in einem nachfolgenden Artikel behandeln. Dies sollte Ihnen ein gutes End-to-End-Verständnis davon geben, wie URL-Mapper, Ansichten und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) im Wesentlichen nur für Endbenutzer lesbar ist, müssen wir lediglich eine Landingpage für die Site bereitstellen (eine Startseite) und Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Index).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch mit einem Primärschlüsselfeld von `<id>` (der Standardwert). Zum Beispiel wird die URL für das dritte Buch, das zur Liste hinzugefügt wurde, `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detailansicht für den bestimmten Autor mit einem Primärschlüsselfeld von `<id>`. Zum Beispiel wird die URL für den 11. Autor, der zur Liste hinzugefügt wurde, `/catalog/author/11` sein.

Die ersten drei URLs geben die Indexseite, die Bücherliste und die Autorenliste zurück. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, sind immer gleich. Die Ergebnisse, die die Abfragen zurückgeben, hängen jedoch vom Inhalt der Datenbank ab.

Im Gegensatz dazu werden die beiden letzten URLs detaillierte Informationen zu einem bestimmten Buch oder Autor anzeigen. Diese URLs kodieren die Identität des anzuzeigenden Elements (dargestellt durch `<id>` oben). Der URL-Mapper wird die kodierten Informationen extrahieren und an die Ansicht übergeben, und die Ansicht wird dynamisch bestimmen, welche Informationen aus der Datenbank abgerufen werden. Durch das Kodieren der Informationen in der URL verwenden wir einen einzigen Satz von URL-Mapping, einer Ansicht und einem Template, um alle Bücher (oder Autoren) zu handhaben.

> [!NOTE]
> Mit Django können Sie Ihre URLs so konstruieren, wie Sie es benötigen – Sie können Informationen, wie oben gezeigt, in den Text der URL kodieren oder `GET`-Parameter in die URL aufnehmen, zum Beispiel `/book/?id=6`. Welche Vorgehensweise Sie auch wählen, die URLs sollten sauber, logisch und lesbar gehalten werden, wie es [von der W3C empfohlen wird](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen in dem Text der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie in der Übersicht erwähnt, beschreibt der Rest dieses Artikels, wie man die Startseite konstruiert.

## Erstellen der Startseite

Die erste Seite, die wir erstellen, ist die Startseite (`catalog/`). Die Startseite wird einige statische HTML-Elemente sowie generierte "Zählungen" verschiedener Datensätze in der Datenbank enthalten. Um dies zu realisieren, erstellen wir ein URL-Mapping, eine Ansicht und ein Template.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt etwas mehr auf die Details zu achten. Ein Großteil der Informationen gilt auch für die anderen Seiten, die wir erstellen werden.

### URL-Mapping

Als wir die [Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, haben wir die Datei **locallibrary/urls.py** aktualisiert, um sicherzustellen, dass, wenn eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_-Modul `catalog.urls` den verbleibenden Substring verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** enthält das `catalog.urls`-Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) stößt, teilt es den URL-String an der bezeichneten Endzeichenstelle und sendet den verbleibenden Substring an das eingeschlossene _URLconf_-Modul zur weiteren Verarbeitung.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul erstellt, mit dem Namen **/catalog/urls.py**.
Fügen Sie die folgenden Zeilen in diese Datei ein:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die `path()`-Funktion definiert Folgendes:

- Ein URL-Muster, das ein leerer String ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Ansichten arbeiten.
- Eine Ansichts-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, bei der es sich um die Funktion `index()` in der Datei **views.py** handelt.

Die `path()`-Funktion legt auch einen `name`-Parameter fest, der ein eindeutiger Bezeichner für _diese_ bestimmte URL-Zuordnung ist. Sie können den Namen verwenden, um den Mapper "umzukehren", d.h. um dynamisch eine URL zu erstellen, die auf die Ressource verweist, die der Mapper zu verwalten versucht.
Zum Beispiel können wir den Namen verwenden, um von jeder anderen Seite auf unsere Startseite zu verlinken, indem wir den folgenden Link in einem Template hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir könnten den Link hart kodieren, wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, zum Beispiel auf `/catalog/index`), werden die Templates nicht mehr korrekt verlinken. Die Verwendung einer umgekehrten URL-Zuordnung ist robuster.

### Ansicht (funktionbasiert)

Eine Ansicht ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten auf einer HTML-Seite unter Verwendung eines HTML-Templates rendert und anschließend das generierte HTML als HTTP-Antwort zurücksendet, um die Seite dem Benutzer anzuzeigen. Die Indexansicht folgt diesem Modell – sie ruft Informationen über die Anzahl der `Book`-, `BookInstance`-, verfügbaren `BookInstance`- und `Author`-Datensätze ab, die wir in der Datenbank haben, und übergibt diese Informationen an ein Template zur Darstellung.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die Funktion [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) importiert, um unter Verwendung eines Templates und der Daten eine HTML-Datei zu generieren:

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

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um in allen unseren Ansichten auf die Daten zuzugreifen.

Der erste Teil der Ansichts-Funktion ruft die Anzahl der Datensätze mit dem Attribut `objects.all()` auf den Modellklassen ab. Außerdem wird eine Liste der `BookInstance`-Objekte erstellt, die im Statusfeld den Wert 'a' (Available) haben. Weitere Informationen zum Zugriff auf Modelldaten finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Verwendung von Modellen > Suchen nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der Ansichts-Funktion rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Kurzfunktion umschließt eine Reihe von anderen Funktionen, um einen sehr häufigen Anwendungsfall zu vereinfachen. Die `render()`-Funktion nimmt die folgenden Parameter an:

- das ursprüngliche `request`-Objekt, das ein `HttpRequest` ist.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch ist und die Daten enthält, die in die Platzhalter eingefügt werden sollen.

Wir werden im nächsten Abschnitt mehr über Templates und die `context`-Variable sprechen. Lassen Sie uns unser Template erstellen, damit wir tatsächlich etwas für den Benutzer anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert und Platzhalter verwendet, um den tatsächlichen Inhalt darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skeleton dieses Beispiels) sucht nach Templates in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen. Im Index-Ansicht, die wir gerade hinzugefügt haben, wird die `render()`-Funktion erwarten, die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** zu finden und wird einen Fehler ausgeben, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine ziemlich intuitive Fehlermeldung anzeigen: "TemplateDoesNotExist at /catalog/", und andere Details.

> [!NOTE]
> Basierend auf Ihrer Projekteinstellungsdatei wird Django an mehreren Stellen nach Templates suchen und standardmäßig in Ihren installierten Anwendungen durchsuchen. Weitere Informationen darüber, wie Django Templates findet und welche Template-Formate es unterstützt, finden Sie im [Abschnitt Templates der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Erweitern von Templates

Das Index-Template benötigt standardmäßiges HTML-Markup für den Kopfteil und den Körper, zusammen mit Navigationsabschnitten, um auf die anderen Seiten der Site (die wir noch nicht erstellt haben) und auf Abschnitte, die Einführungstext und Buchdaten anzeigen, zu verlinken.

Viel von der HTML- und Navigationsstruktur wird auf jeder Seite unserer Site gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Templatesprache verwenden, um ein Basistemplate zu deklarieren, und es dann erweitern, um nur die Teile zu ersetzen, die für jede spezifische Seite unterschiedlich sind.

Der folgende Codeausschnitt ist ein Beispiel für ein Basistemplate aus einer **base_generic.html**-Datei.
Wir werden das Template für LocalLibrary gleich erstellen.
Das Beispiel unten enthält allgemeines HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock`-Template-Tags markiert sind.
Sie können die Blöcke leer lassen oder Standardinhalt einfügen, der verwendet wird, wenn Seiten gerendert werden, die vom Template abgeleitet sind.

> [!NOTE]
> Template-_Tags_ sind Funktionen, die Sie in einem Template verwenden können, um durch Listen zu schleifen, bedingte Operationen basierend auf dem Wert einer Variablen auszuführen, und so weiter. Zusätzlich zu den Template-Tags erlaubt Ihnen die Template-Syntax, auf Variablen zuzugreifen, die von der Ansicht in das Template übergeben werden, und _Template-Filter_ zu verwenden, um Variablen zu formatieren (zum Beispiel, um eine Zeichenfolge in Kleinbuchstaben umzuwandeln).

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

Beim Definieren eines Templates für eine bestimmte Ansicht geben wir zunächst das Basistemplate mit dem `extends`-Template-Tag an – siehe den Codeausschnitt unten. Dann deklarieren wir, welche Abschnitte aus dem Template wir ersetzen möchten (falls vorhanden), indem wir die `block`/`endblock`-Abschnitte wie im Basistemplate verwenden.

Zum Beispiel zeigt der unten stehende Codeausschnitt, wie man das `extends`-Template-Tag verwendet und den `content`-Block überschreibt. Das generierte HTML wird den im Basistemplate definierten Code und die Struktur einschließlich des von Ihnen im `title`-Block definierten Standardinhalts enthalten, jedoch den neuen `content`-Block anstelle des Standardblocks.

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

#### Das LocalLibrary-Basistemplate

Wir werden den folgenden Codeausschnitt als Basistemplate für die _LocalLibrary_-Website verwenden. Wie Sie sehen, enthält es etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standard-Seitenleiste mit Links zu Listen aller Bücher und Autoren, beide in Blöcken eingeschlossen, um sie in Zukunft leicht ändern zu können.

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

Das Template schließt CSS von [Bootstrap](https://getbootstrap.com/) ein, um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen Client-Web-Framework) ist eine schnelle Möglichkeit, eine ansprechende Seite zu erstellen, die auf verschiedenen Bildschirmgrößen gut angezeigt wird.

Das Basistemplate enthält auch eine Referenz auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Styles bereitstellt. Erstellen Sie eine **styles.css**-Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index-Template

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unser Basistemplate in der ersten Zeile und ersetzt dann den Standard-`content`-Block des Templates.

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
Die Variablen sind in doppelte geschweifte Klammern (Handlebars) eingeschlossen.

> [!NOTE]
> Sie können Template-Variablen und Template-Tags (Funktionen) leicht erkennen - Variablen sind in doppelte geschweifte Klammern eingeschlossen (`\{{ num_books }}`), und Tags sind in einfache Klammern mit Prozentzeichen eingeschlossen (`{% extends "base_generic.html" %}`).

Das Wichtige hier ist, dass die Variablen mit den _Schlüsseln_ benannt sind, die wir in das `context`-Wörterbuch in der `render()`-Funktion unserer Ansicht übergeben (siehe Beispiel unten).
Variablen werden beim Rendern des Templates durch ihre zugehörigen _Werte_ ersetzt.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referenzieren statischer Dateien in Templates

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bilder. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern könnte), erlaubt Ihnen Django, den Speicherort in Ihren Templates relativ zur globalen Einstellung `STATIC_URL` anzugeben. Die Standardeinstellung der Skeleton-Website setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten diese Dateien auch in einem Content Delivery Network oder an einem anderen Ort hosten.

Innerhalb des Templates rufen Sie zunächst das `load`-Template-Tag auf, wobei Sie "static" angeben, um die Template-Bibliothek hinzuzufügen, wie im Codebeispiel unten gezeigt. Anschließend können Sie das `static`-Template-Tag verwenden und die URL zur erforderlichen Datei relativ angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können auf ähnliche Weise ein Bild in die Seite einfügen:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden, aber Django stellt sie nicht automatisch bereit. Wir haben den Webserver für die Entwicklung so konfiguriert, dass Dateien bereitgestellt werden, indem wir den globalen URL-Mapper (**/django-locallibrary-tutorial/locallibrary/urls.py**) geändert haben, als wir [das Website-Skeleton erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), müssen aber das Bereitstellen von Dateien in der Produktion noch aktivieren. Wir werden uns dies später ansehen.

Weitere Informationen zur Arbeit mit statischen Dateien finden Sie unter [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### URLs verlinken

Das Basistemplate oben führte das `url`-Template-Tag ein.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()`-Funktion, die in Ihrer **urls.py** aufgerufen wird, und die Werte für alle Argumente, die die zugehörige Ansicht von dieser Funktion erhalten wird, und gibt eine URL zurück, die Sie verwenden können, um zu der Ressource zu verlinken.

#### Konfigurieren, wo die Templates gefunden werden

Der Ort, an dem Django nach Templates sucht, wird im `TEMPLATES`-Objekt in der Datei **settings.py** angegeben.
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

Die Einstellung `'APP_DIRS': True` ist dabei am wichtigsten, da sie Django anweist, nach Templates in einem Unterverzeichnis jeder Anwendung im Projekt zu suchen, das "templates" genannt wird (dies erleichtert das Gruppieren von Templates mit ihrer zugehörigen Anwendung zur leichten Wiederverwendung).

Wir können auch spezifische Orte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist noch nicht notwendig).

> [!NOTE]
> Sie können mehr darüber erfahren, wie Django Templates findet und welche Template-Formate es unterstützt, im [Abschnitt Templates der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

An diesem Punkt haben wir alle erforderlichen Ressourcen erstellt, um die Startseite anzuzeigen. Führen Sie den Server aus (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![Startseite für die LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** funktionieren noch nicht, da die Pfade, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wir haben nur Platzhalter für diese Links im `base_generic.html`-Template eingefügt.

## Fordern Sie sich selbst heraus

Hier sind ein paar Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Ansichten und Templates zu testen.

1. Das LocalLibrary [Basistemplate](#das_locallibrary-basistemplate) enthält einen `title`-Block. Überschreiben Sie diesen Block im [Index-Template](#das_index-template) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Erweitern von Templates](#erweitern_von_templates) erklärt, wie man Blöcke erstellt und einen Block in einem anderen Template erweitert.

2. Ändern Sie die [Ansicht](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu erzeugen, die ein bestimmtes Wort (case insensitive) enthalten, und geben Sie die Ergebnisse an den `context` weiter. Sie erreichen dies auf ähnliche Weise wie das Erstellen und Verwenden von `num_books` und `num_instances_available`. Aktualisieren Sie dann das [Index-Template](#das_index-template), um diese Variablen einzuschließen.

## Zusammenfassung

Wir haben gerade die Startseite für unsere Site erstellt – eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und Links zu anderen, noch zu erstellenden Seiten bereitstellt. Unterwegs haben wir grundlegende Informationen über URL-Mapper, Ansichten, Abfragen der Datenbank mit Modellen, das Übergeben von Informationen von einer Ansicht an ein Template sowie das Erstellen und Erweitern von Templates gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die verbleibenden vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Writing your first Django app, part 3: Views and Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [View functions](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django Shortcut-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
