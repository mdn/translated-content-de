---
title: "Django Tutorial Teil 5: Erstellen unserer Homepage"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Wir sind jetzt bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt — eine Homepage für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite zeigt die Anzahl der Datensätze, die wir für jeden Modelltyp haben, und enthält Navigationslinks in der Seitenleiste zu unseren anderen Seiten. Dabei werden wir praktische Erfahrungen im Schreiben von grundlegenden URL-Mappings und Ansichten sammeln, Datensätze aus der Datenbank holen und Vorlagen verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django-Einführung</a>. Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Django Admin-Seite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, einfache URL-Mappings und Ansichten zu erstellen (wo keine Daten in der URL kodiert sind), Daten aus Modellen abzurufen und Vorlagen zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Nachdem wir unsere Modelle definiert und einige anfängliche Bibliotheksdatensätze erstellt haben, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs zu definieren, die zur Rückgabe dieser Ressourcen verwendet werden sollen. Dann erstellen wir einen URL-Mapper, Ansichten und Vorlagen, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die Komponenten, die bei der Verarbeitung von HTTP-Anfragen und -Antworten erforderlich sind. Da wir das Modell bereits implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mapper, die die unterstützten URLs (und alle Informationen, die in den URLs kodiert sind) an die entsprechenden Funktionsansichten weiterleiten.
- Funktionsansichten, die die angeforderten Daten aus den Modellen abrufen, HTML-Seiten erstellen, die die Daten anzeigen, und die Seiten zur Ansicht im Browser an den Benutzer zurückgeben.
- Vorlagen, die beim Rendern von Daten in den Ansichten verwendet werden.

![Hauptdatenflussdiagramm: URL-, Modell-, Ansichts- und Vorlagenkomponente, die beim Umgang mit HTTP-Anforderungen und -Antworten in einer Django-Anwendung erforderlich sind. Eine HTTP-Anfrage trifft einen Django-Server und wird an die Datei 'urls.py' der URLS-Komponente weitergeleitet. Die Anfrage wird an die entsprechende Ansicht weitergeleitet. Die Ansicht kann Daten aus der Datei 'models.py' der Modelle lesen und schreiben, die den Code im Zusammenhang mit Modellen enthält. Die Ansicht greift auch auf die HTML-Dateivorlage zu. Die Ansicht gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir fünf Seiten anzuzeigen, was zu viel Information ist, um sie in einem einzigen Artikel zu dokumentieren. Daher konzentriert sich dieser Artikel darauf, wie man die Startseite implementiert, und wir werden die anderen Seiten in einem nachfolgenden Artikel behandeln. Dies sollte Ihnen ein gutes Verständnis für den praktischen Einsatz von URL-Mappern, Ansichten und Modellen vermitteln.

## Definieren der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) im Wesentlichen schreibgeschützt für Endbenutzer ist, müssen wir nur eine Startseite für die Website (eine Homepage) und Seiten bereitstellen, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Home-(Index-)Seite.
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch, mit einem Primärschlüsselfeld von `<id>` (Standard). Zum Beispiel wird die URL für das dritte Buch in der Liste `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld von `<id>`. Zum Beispiel wird die URL für den 11. Autor in der Liste `/catalog/author/11` sein.

Die ersten drei URLs geben die Index-Seite, die Bücherliste und die Autorenliste zurück. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, werden immer gleich sein. Die Ergebnisse, die von den Abfragen zurückgegeben werden, hängen jedoch von den Inhalten der Datenbank ab.

Im Gegensatz dazu zeigen die letzten beiden URLs detaillierte Informationen zu einem bestimmten Buch oder Autor. Diese URLs kodieren die Identität des anzuzeigenden Elements (repräsentiert durch `<id>` oben). Der URL-Mapper extrahiert die kodierten Informationen und übergibt sie an die Ansicht, und die Ansicht wird dynamisch bestimmen, welche Informationen aus der Datenbank abgerufen werden sollen. Durch das Kodieren der Informationen in der URL verwenden wir eine einzige Menge von URL-Mapping, Ansicht und Vorlage, um mit allen Büchern (oder Autoren) umzugehen.

> [!NOTE]
> Mit Django können Sie Ihre URLs so konstruieren, wie Sie es benötigen — Sie können Informationen im Körper der URL wie oben gezeigt kodieren oder `GET`-Parameter in die URL einfügen, zum Beispiel `/book/?id=6`. Welche Methode auch immer Sie verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden, wie von der [W3C empfohlen](https://www.w3.org/Provider/Style/URI). Die Django-Dokumentation empfiehlt, Informationen im Körper der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie in der Übersicht erwähnt, beschreibt der Rest dieses Artikels, wie man die Indexseite konstruiert.

## Erstellen der Indexseite

Die erste Seite, die wir erstellen werden, ist die Indexseite (`catalog/`). Die Indexseite wird einige statische HTML-Inhalte enthalten, zusammen mit generierten "Anzahlen" der verschiedenen Datensätze in der Datenbank. Um dies zu erreichen, werden wir ein URL-Mapping, eine Ansicht und eine Vorlage erstellen.

> [!NOTE]
> Es lohnt sich, diesem Abschnitt besondere Aufmerksamkeit zu schenken. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Mapping

Als wir die [Website-Skelettstruktur](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, aktualisierten wir die **locallibrary/urls.py** Datei, um sicherzustellen, dass immer, wenn eine URL, die mit `catalog/` beginnt, eingeht, das _URLConf_-Modul `catalog.urls` die verbleibende Teilzeichenfolge verarbeitet.

Der folgende Code-Schnipsel aus **locallibrary/urls.py** beinhaltet das `catalog.urls` Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Wann immer Django die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) antrifft, trennt es die URL-Zeichenfolge am festgelegten Endzeichen und sendet die verbleibende Teilzeichenfolge an das eingeschlossene _URLconf_-Modul zur weiteren Verarbeitung.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul, genannt **/catalog/urls.py**, erstellt. Fügen Sie die folgenden Zeilen in diese Datei ein:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die `path()` Funktion definiert Folgendes:

- Ein URL-Muster, das eine leere Zeichenfolge ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Ansichten arbeiten.
- Eine Funktionsansicht, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, das die Funktion namens `index()` in der Datei **views.py** ist.

Die `path()` Funktion spezifiziert auch einen `name` Parameter, der ein eindeutiger Bezeichner für _dieses_ spezielle URL-Mapping ist. Sie können den Namen verwenden, um den Mapper zu "reversieren", d.h. um dynamisch eine URL zu erstellen, die auf die Ressource zeigt, die der Mapper verarbeiten soll. Zum Beispiel können wir den Name-Parameter verwenden, um von jeder anderen Seite auf unsere Startseite zu verlinken, indem wir den folgenden Link in einer Vorlage hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link fest kodieren, wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, z.B. in `/catalog/index`), werden die Vorlagen nicht mehr korrekt verlinken. Die Verwendung eines umgekehrten URL-Mappings ist robuster.

### Ansicht (funktionsbasiert)

Eine Ansicht ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite unter Verwendung einer HTML-Vorlage rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Indexansicht folgt diesem Modell — sie ruft Informationen über die Anzahl von `Book`, `BookInstance`, verfügbaren `BookInstance` und `Author` Datensätze ab, die wir in der Datenbank haben, und übergibt diese Informationen an eine Vorlage zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) Shortcut-Funktion importiert, um unter Verwendung einer Vorlage und Daten eine HTML-Datei zu generieren:

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

Der erste Teil der Funktionsansicht ruft die Anzahl der Datensätze ab, indem er das `objects.all()` Attribut auf die Modellklassen anwendet. Außerdem erhalten Sie eine Liste von `BookInstance` Objekten, die einen Wert von 'a' (Verfügbar) im Statusfeld haben. Weitere Informationen zum Zugriff auf Modelldaten finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Verwendung von Modellen > Suche nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der Funktionsansicht rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Shortcut-Funktion umschließt eine Reihe anderer Funktionen, um einen sehr häufigen Anwendungsfall zu vereinfachen. Die `render()`-Funktion akzeptiert die folgenden Parameter:

- das ursprüngliche `request` Objekt, das ein `HttpRequest` ist.
- eine HTML-Vorlage mit Platzhaltern für die Daten.
- eine `context` Variable, die ein Python-Wörterbuch ist, das die Daten enthält, die in die Platzhalter eingesetzt werden sollen.

Wir werden im nächsten Abschnitt mehr über Vorlagen und die `context` Variable sprechen. Kommen wir zur Erstellung unserer Vorlage, damit wir tatsächlich etwas dem Benutzer anzeigen können!

### Vorlage

Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei (z.B. einer HTML-Seite) definiert und Platzhalter verwendet, um tatsächliche Inhalte darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skelett dieses Beispiels) wird nach Vorlagen in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen suchen. Zum Beispiel wird in der Indexansicht, die wir gerade hinzugefügt haben, die `render()`-Funktion erwarten, die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** zu finden und wird einen Fehler auslösen, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine ziemlich intuitive Fehlermeldung anzeigen: "TemplateDoesNotExist in /catalog/", und weitere Details.

> [!NOTE]
> Basierend auf der Einstellungsdatei Ihres Projekts wird Django nach Vorlagen an verschiedenen Stellen suchen, standardmäßig in Ihren installierten Anwendungen. Weitere Informationen darüber, wie Django Vorlagen sucht und welche Vorlagenformate es unterstützt, finden Sie im [Templates-Bereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Vorlagen erweitern

Die Indexvorlage benötigt standardmäßiges HTML-Markup für Kopf- und Körperbereich, zusammen mit Navigationsabschnitten, um auf die anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben), und auf Abschnitte, die ein Einführungstext und Buchdaten anzeigen.

Ein Großteil der HTML- und Navigationsstruktur wird auf jeder Seite unserer Website dieselbe sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Templatingsprache verwenden, um eine Basisschablone zu deklarieren und diese dann zu erweitern, um nur die Teile zu ersetzen, die für jede spezifische Seite unterschiedlich sind.

Der folgende Code-Schnipsel ist ein Beispiel für eine Basisschablone aus einer **base_generic.html** Datei. Wir werden die Vorlage für LocalLibrary in Kürze erstellen. Das unten stehende Beispiel enthält allgemeines HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock` Vorlagen-Tags markiert sind. Sie können die Blöcke leer lassen oder Standardinhalte hinzufügen, die beim Rendern Seiten, die von der Vorlage abgeleitet sind, verwendet werden sollen.

> [!NOTE]
> Vorlagen _Tags_ sind Funktionen, die Sie in einer Vorlage verwenden können, um durch Listen zu schleifen, bedingte Operationen basierend auf dem Wert einer Variable auszuführen und so weiter. Zusätzlich zu Vorlagen-Tags erlaubt Ihnen die Vorlagensyntax, auf Variablen zu verweisen, die der Vorlage aus der Ansicht übergeben werden, und _Vorlagenfilter_ zu verwenden, um Variablen zu formatieren (zum Beispiel, um einen String in Kleinbuchstaben umzuwandeln).

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

Wenn Sie eine Vorlage für eine bestimmte Ansicht definieren, geben Sie zuerst die Basisvorlage mit dem `extends`-Vorlagen-Tag an — siehe den unten stehenden Code-Beispiel. Dann deklarieren wir, welche Abschnitte aus der Vorlage wir ersetzen wollen (falls vorhanden), indem wir `block`/`endblock` Abschnitte wie in der Basisvorlage verwenden.

Zum Beispiel zeigt der unten stehende Code-Schnipsel, wie man das `extends`-Vorlagen-Tag verwendet und den `content`-Block überschreibt. Das generierte HTML wird den Code und die Struktur enthalten, die in der Basisvorlage definiert sind, einschließlich des Standardinhalts, den Sie im `title`-Block definiert haben, aber der neue `content`-Block wird anstelle des Standardblocks angezeigt.

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

#### Die LocalLibrary Basisschablone

Wir werden den folgenden Code-Schnipsel als Basisschablone für die _LocalLibrary_ Website verwenden. Wie Sie sehen können, enthält sie etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardseitenleiste mit Links zu Listen aller Bücher und Autoren, beide in Blöcke eingefasst, um in Zukunft leicht geändert werden zu können.

> [!NOTE]
> Wir führen auch zwei zusätzliche Vorlagen-Tags ein: `url` und `load static`. Diese Tags werden in den folgenden Abschnitten erklärt.

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

Die Vorlage enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen klientseitigen Web-Framework) ist eine schnelle Möglichkeit, eine attraktive Seite zu erstellen, die auf verschiedenen Bildschirmgrößen gut angezeigt wird.

Die Basisschablone verweist außerdem auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Formatierungen bereitstellt. Erstellen Sie eine **styles.css** Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Die Indexvorlage

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein. Dieser Code erweitert unsere Basisschablone in der ersten Zeile und ersetzt dann den Standard-`content`-Block für die Vorlage.

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

Im Abschnitt _Dynamische Inhalte_ deklarieren wir Platzhalter (_Vorlagenvariablen_) für die Informationen aus der Ansicht, die wir einfügen möchten. Die Variablen sind mit doppelter Klammer (Handlebars) umschlossen.

> [!NOTE]
> Sie können Vorlagenvariablen und Vorlagen-Tags (Funktionen) leicht erkennen - Variablen sind in doppelten Klammern eingeschlossen (`\{{ num_books }}`), und Tags sind in einfachen Klammern mit Prozentzeichen eingeschlossen (`{% extends "base_generic.html" %}`).

Das Wichtigste hier ist, dass Variablen mit den _Schlüsseln_ benannt sind, die wir in das `context` Wörterbuch in der `render()` Funktion unserer Ansicht übergeben (siehe Beispiel unten). Variablen werden beim Rendern der Vorlage mit ihren zugehörigen _Werten_ ersetzt.

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

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bilder. Da der Standort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern könnte), erlaubt Django Ihnen, den Standort in Ihren Vorlagen relativ zur `STATIC_URL` globale Einstellung anzugeben. Der Standardskelett-Website setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten sich entscheiden, diese auf einem Content-Delivery-Netzwerk oder anderswo zu hosten.

Innerhalb der Vorlage rufen Sie zuerst das `load` Vorlagen-Tag auf, das "static" spezifiziert, um die Vorlagenbibliothek hinzuzufügen, wie im untenstehenden Code-Beispiel gezeigt. Sie können dann das `static` Vorlagen-Tag verwenden und die relative URL zur erforderlichen Datei angeben.

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
> Die obigen Beispiele geben an, wo sich die Dateien befinden, aber Django dient ihnen standardmäßig nicht. Wir haben den Entwicklungswebserver so konfiguriert, dass er Dateien durch Ändern des globalen URL-Mappers (**/django-locallibrary-tutorial/locallibrary/urls.py**) bereitstellt, als wir [das Website-Skelett erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), aber wir müssen das Fileserving in der Produktion immer noch aktivieren. Wir werden dies später betrachten.

Weitere Informationen zur Arbeit mit statischen Dateien finden Sie unter [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinken zu URLs

Die oben vorgestellte Basisschablone führt das `url` Vorlagen-Tag ein.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()` Funktion, die in Ihrer **urls.py** aufgerufen wird, und die Werte für alle Argumente, die die zugehörige Ansicht von dieser Funktion erhält, und gibt eine URL zurück, die Sie verwenden können, um zur Ressource zu verlinken.

#### Konfigurieren, wo die Vorlagen gefunden werden

Der Standort, an dem Django nach Vorlagen sucht, wird im `TEMPLATES` Objekt in der **settings.py** Datei angegeben. Die Standard-**settings.py** (wie für dieses Tutorial erstellt) sieht ungefähr so aus:

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

Die Einstellung von `'APP_DIRS': True` ist die wichtigste, da sie Django anweist, nach Vorlagen in einem Unterverzeichnis jeder Anwendung im Projekt zu suchen, das "templates" genannt wird (dies erleichtert es, Vorlagen mit ihrer zugehörigen Anwendung für eine einfache Wiederverwendung zu gruppieren).

Wir können auch spezielle Standorte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist bisher nicht nötig).

> [!NOTE]
> Weitere Informationen darüber, wie Django Vorlagen sucht und welche Vorlagenformate es unterstützt, finden Sie im [Templates-Bereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

An diesem Punkt haben wir alle erforderlichen Ressourcen erstellt, um die Indexseite anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![Index-Seite für die LocalLibrary Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** funktionieren noch nicht, da die Pfade, Ansichten und Vorlagen für diese Seiten noch nicht definiert sind. Wir haben gerade Platzhalter für diese Links in der `base_generic.html` Vorlage eingefügt.

## Fordern Sie sich heraus

Hier sind ein paar Aufgaben, um Ihr Verständnis von Modellabfragen, Ansichten und Vorlagen zu testen.

1. Die LocalLibrary [Basisschablone](#die_locallibrary_basisschablone) enthält einen `title` Block. Überschreiben Sie diesen Block in der [Indexvorlage](#die_indexvorlage) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Vorlagen erweitern](#vorlagen_erweitern) erklärt, wie man Blöcke erstellt und einen Block in einer anderen Vorlage erweitert.

2. Ändern Sie die [Ansicht](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu generieren, die ein bestimmtes Wort enthalten (ohne Berücksichtigung der Groß-/Kleinschreibung), und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie die Erstellung und Verwendung von `num_books` und `num_instances_available`. Aktualisieren Sie dann die [Indexvorlage](#die_indexvorlage) um diese Variablen einzuschließen.

## Zusammenfassung

Wir haben gerade die Startseite für unsere Website erstellt — eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und auf noch zu erstellende Seiten verlinkt. Auf dem Weg dorthin haben wir grundlegende Informationen über URL-Mapper, Ansichten, das Abfragen der Datenbank mit Modellen, das Übermitteln von Informationen an eine Vorlage aus einer Ansicht und das Erstellen und Erweitern von Vorlagen gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die verbleibenden vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 3: Ansichten und Vorlagen](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [Ansichts-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Vorlagen](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django Shortcut-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
