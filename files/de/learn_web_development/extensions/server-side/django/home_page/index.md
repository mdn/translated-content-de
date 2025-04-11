---
title: "Django Tutorial Teil 5: Erstellung unserer Startseite"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Wir sind nun bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt – eine Startseite für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite wird die Anzahl der Datensätze anzeigen, die wir für jeden Modelltyp haben, und Seitenleisten-Navigationslinks zu unseren anderen Seiten bieten. Dabei werden wir praktische Erfahrungen im Schreiben grundlegender URL-Maps und Views, Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates sammeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django Einführung</a>. Abschließen der vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django Tutorial Teil 4: Django Admin Site</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, einfache URL-Maps und Views zu erstellen (wo keine Daten in der URL codiert sind), Daten von Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Nachdem wir unsere Modelle definiert und einige anfängliche Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen wollen, und die URLs zu definieren, die verwendet werden sollen, um diese Ressourcen zurückzugeben. Dann werden wir einen URL-Mapper, Views und Templates erstellen, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die Komponenten, die bei der Verarbeitung von HTTP-Anfragen und -Antworten erforderlich sind. Da wir bereits das Modell implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mapper, um die unterstützten URLs (und alle Informationen, die in den URLs codiert sind) an die entsprechenden View-Funktionen weiterzuleiten.
- View-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten dem Benutzer zur Ansicht im Browser zurückzusenden.
- Templates, die bei der Datenwiedergabe in den Views verwendet werden.

![Diagramm des Hauptdatenflusses: URL-, Model-, View- & Template-Komponente, die bei der Verarbeitung von HTTP-Anfragen und -Antworten in einer Django-Anwendung erforderlich sind. Eine HTTP-Anfrage erreicht einen Django-Server, wird an die 'urls.py'-Datei der URLS-Komponente weitergeleitet. Die Anfrage wird an die entsprechende View weitergeleitet. Die View kann Daten aus der Models 'models.py'-Datei lesen und schreiben, die den Code zu den Modellen enthält. Die View greift auch auf die HTML-Datei-Template-Komponente zu. Die View gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir 5 Seiten zu zeigen, was zu viele Informationen sind, um sie in einem einzigen Artikel zu dokumentieren. Daher konzentriert sich dieser Artikel darauf, wie man die Startseite implementiert, und wir werden die anderen Seiten in einem nachfolgenden Artikel behandeln. Dies sollte Ihnen ein gutes Verständnis darüber vermitteln, wie URL-Mappers, Views und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) im Wesentlichen für Endbenutzer schreibgeschützt ist, müssen wir nur eine Einstiegsseite für die Website (eine Startseite) und Seiten bereitstellen, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Index).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch mit einem primären Schlüssel des Feldes `<id>` (der Standard). Zum Beispiel wird die URL für das dritte Buch auf der Liste `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem primären Schlüssel des Feldes `<id>`. Zum Beispiel wird die URL für den 11. hinzugefügten Autor `/catalog/author/11` sein.

Die ersten drei URLs geben die Indexseite, die Bücherliste und die Autorenliste zurück. Diese URLs codieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, werden immer gleich sein. Die Ergebnisse, die die Abfragen zurückgeben, hängen jedoch vom Inhalt der Datenbank ab.

Im Gegensatz dazu zeigen die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor an. Diese URLs codieren die Identität des anzuzeigenden Elements (dargestellt durch `<id>` oben). Der URL-Mapper extrahiert die codierten Informationen und übergibt sie der View, und die View bestimmt dynamisch, welche Informationen aus der Datenbank abgerufen werden. Indem wir die Informationen in der URL codieren, verwenden wir einen einzigen Satz einer URL-Zuordnung, einer View und eines Templates, um alle Bücher (oder Autoren) zu bearbeiten.

> [!NOTE]
> Mit Django können Sie Ihre URLs so konstruieren, wie Sie es benötigen — Sie können Informationen im Hauptteil der URL wie oben gezeigt oder `GET`-Parameter in die URL aufnehmen, zum Beispiel `/book/?id=6`. Welche Methode Sie auch immer verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden, wie von der [W3C empfohlen](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im Hauptteil der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie bereits in der Übersicht erwähnt, wird im Rest dieses Artikels beschrieben, wie die Startseite erstellt wird.

## Erstellung der Startseite

Die erste Seite, die wir erstellen, ist die Startseite (`catalog/`). Die Startseite wird einige statische HTML-Inhalte enthalten, zusammen mit generierten "Zahlen" von verschiedenen Datensätzen in der Datenbank. Damit dies funktioniert, erstellen wir eine URL-Zuordnung, eine View und ein Template.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt etwas genauer hinzusehen. Die meisten der Informationen beziehen sich auch auf die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Als wir die [Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, haben wir die Datei **locallibrary/urls.py** so aktualisiert, dass jedes Mal, wenn eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_-Modul `catalog.urls` die verbleibende Teilzeichenkette verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** enthält das `catalog.urls`-Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) trifft, teilt es den URL-String am angegebenen Endzeichen und sendet die verbleibende Teilzeichenkette an das eingeschlossene _URLConf_-Modul zur weiteren Verarbeitung.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul mit dem Namen **/catalog/urls.py** erstellt.
Fügen Sie die folgenden Zeilen in diese Datei ein:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die Funktion `path()` definiert Folgendes:

- Ein URL-Muster, das ein leerer String ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Views arbeiten.
- Eine View-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, welche die Funktion namens `index()` in der Datei **views.py** ist.

Die Funktion `path()` gibt auch einen `name`-Parameter an, der ein eindeutiger Bezeichner für _diese_ spezielle URL-Zuordnung ist. Sie können den Namen verwenden, um den Mapper umzukehren, d.h. um dynamisch eine URL zu erstellen, die auf die Ressource verweist, die der Mapper bearbeiten soll.
Zum Beispiel können wir den Namen verwenden, um von jeder anderen Seite aus auf unsere Startseite zu verlinken, indem wir den folgenden Link in einem Template hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link hart kodieren, wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, z.B. in `/catalog/index`, werden die Templates nicht mehr richtig verlinken. Die Verwendung einer umgekehrten URL-Zuordnung ist robuster.

### View (funktionsbasiert)

Eine View ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mit einem HTML-Template rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Index-View folgt diesem Modell – sie ruft Informationen über die Anzahl der `Book`, `BookInstance`, verfügbaren `BookInstance` und `Author`-Datensätze ab, die wir in der Datenbank haben, und übergibt diese Informationen einem Template zur Anzeige.

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

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um auf Daten in allen unseren Views zuzugreifen.

Der erste Teil der View-Funktion ruft die Anzahl der Datensätze unter Verwendung des `objects.all()`-Attributs auf den Modellklassen ab. Es erhält auch eine Liste von `BookInstance`-Objekten, die einen Wert von 'a' (verfügbar) im Statusfeld haben. Weitere Informationen darüber, wie auf Modelldaten zugegriffen wird, finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Verwendung von Modellen > Suche nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Shortcut-Funktion kapselt eine Reihe anderer Funktionen, um einen sehr häufigen Anwendungsfall zu vereinfachen. Die Funktion `render()` akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, welches ein `HttpRequest` ist.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch ist, das die Daten zur Platzierung in die Platzhalter enthält.

Wir werden mehr über Templates und die `context`-Variable im nächsten Abschnitt sprechen. Beginnen wir mit der Erstellung unseres Templates, damit wir dem Benutzer tatsächlich etwas anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie z.B. einer HTML-Seite) definiert und Platzhalter verwendet, um den tatsächlichen Inhalt darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skeleton dieses Beispiels) sucht nach Templates in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen. Zum Beispiel wird die `render()`-Funktion in der gerade hinzugefügten Index-View erwarten, dass die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** liegt und wird einen Fehler auslösen, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und in Ihrem Browser auf `127.0.0.1:8000` zugreifen - es wird eine ziemlich intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/", und weitere Details.

> [!NOTE]
> Basierend auf der Einstellungsdatei Ihres Projekts sucht Django an mehreren Stellen nach Templates und sucht standardmäßig in Ihren installierten Anwendungen. Sie können mehr darüber erfahren, wie Django Templates findet und welche Template-Formate es unterstützt, im [Template-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt standardmäßiges HTML-Markup für Kopf und Körper, zusammen mit Navigationsabschnitten, um zu den anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben), und zu Abschnitten, die einführende Texte und Buchdaten anzeigen.

Ein großer Teil des HTML- und Navigationsaufbaus wird auf jeder Seite unserer Website gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Templating-Sprache verwenden, um ein Basistemplate zu deklarieren und es dann zu erweitern, indem Sie nur die Teile ersetzen, die für jede einzelne Seite unterschiedlich sind.

Der folgende Codeausschnitt ist ein Beispiel eines Basistemplates aus einer **base_generic.html**-Datei.
Wir werden das Template für LocalLibrary in Kürze erstellen.
Das Beispiel unten enthält Standard-HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit benannten `block`- und `endblock`-Template-Tags markiert sind.
Sie können die Blöcke leer lassen oder Standardinhalt enthalten, der bei der Wiedergabe von Seiten, die sich von diesem Template ableiten, verwendet wird.

> [!NOTE]
> Template-_Tags_ sind Funktionen, die Sie in einem Template verwenden können, um z.B. Listen zu durchlaufen, bedingte Operationen basierend auf dem Wert einer Variablen auszuführen usw. Neben Template-Tags ermöglicht Ihnen die Template-Syntax das Referenzieren von Variablen, die aus der View an das Template übergeben werden, und das Verwenden von _Template-Filtern_, um Variablen zu formatieren (zum Beispiel eine Zeichenkette in Kleinbuchstaben zu konvertieren).

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

Beim Definieren eines Templates für eine bestimmte Ansicht geben wir zunächst das Basistemplate mithilfe des `extends`-Template-Tags an — siehe das untenstehende Codebeispiel. Dann deklarieren wir, welche Abschnitte aus dem Template wir ersetzen möchten (falls vorhanden), indem wir `block`/`endblock`-Abschnitte wie im Basistemplate verwenden.

Zum Beispiel zeigt der untenstehende Codeausschnitt, wie man das `extends`-Template-Tag verwendet und den `content`-Block überschreibt. Das generierte HTML wird den im Basistemplate definierten Code und Aufbau einschließlich des Standardinhalts, den Sie im `title`-Block definiert haben, enthalten, jedoch den neuen `content`-Block anstelle des standardmäßigen.

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

Wir verwenden den folgenden Codeausschnitt als Basistemplate für die _LocalLibrary_ Website. Wie Sie sehen können, enthält es etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardsidebar mit Links zu Liste aller Bücher und Autoren, beide in Blöcken eingeschlossen, um sie in Zukunft leicht ändern zu können.

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

Das Template enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen Client-seitigen Webframework) ist ein schneller Weg, um eine ansprechende Seite zu erstellen, die gut auf verschiedenen Bildschirmgrößen angezeigt wird.

Das Basistemplate verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Formatierungen bereitstellt. Erstellen Sie eine **styles.css**-Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index-Template

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unser Basistemplate in der ersten Zeile und ersetzt dann den Standard-`content`-Block für das Template.

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
> Sie können Template-Variablen und Template-Tags (Funktionen) leicht erkennen - Variablen sind in doppelte Klammern eingeschlossen (`\{{ num_books }}`), und Tags sind in einfache Klammern mit Prozentzeichen eingeschlossen (`{% extends "base_generic.html" %}`).

Das Wichtigste, das hier zu beachten ist, dass Variablen mit den _Schlüssel_ benannt werden, unter denen wir die Daten im `context`-Wörterbuch der `render()`-Funktion unserer View übergeben (siehe Beispiel unten).
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

#### Verweis auf statische Dateien in Templates

Ihr Projekt verwendet wahrscheinlich statische Ressourcen, einschließlich JavaScript, CSS und Bilder. Da die Position dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern könnte), ermöglicht Django Ihnen, den Speicherort in Ihren Templates relativ zur globalen `STATIC_URL`-Einstellung anzugeben. Die Standardeinstellung der `STATIC_URL` auf der Skeleton-Website ist `"/static/"`, aber Sie könnten diese auch auf einem Content Delivery Network oder anderswo hosten.

Innerhalb des Templates rufen Sie zuerst das `load`-Template-Tag auf und geben "static" an, um die Template-Bibliothek hinzuzufügen, wie im Codebeispiel unten gezeigt. Dann können Sie das `static`-Template-Tag verwenden und die relative URL zur benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können ein Bild auf die gleiche Weise in die Seite einfügen, z.B.:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo die Dateien sich befinden, aber Django dient ihnen standardmäßig nicht. Wir haben den Entwicklungs-Webserver konfiguriert, um Dateien zu liefern, indem wir den globalen URL-Mapper (**/django-locallibrary-tutorial/locallibrary/urls.py**) geändert haben, als wir das [Website-Skeleton erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben, aber wir müssen das Dateiladen in der Produktion noch aktivieren. Darauf werden wir später noch eingehen.

Weitere Informationen zur Arbeit mit statischen Dateien finden Sie unter [Verwalten statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinkung zu URLs

Das obige Basistemplate hat das `url`-Template-Tag eingeführt.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()`-Funktion, die in Ihrer Datei **urls.py** aufgerufen wird, und die Werte für alle Argumente, die die zugehörige View von dieser Funktion erhalten soll, und gibt eine URL zurück, die Sie zum Verlinken der Ressource verwenden können.

#### Konfiguration, wo die Templates zu finden sind

Der Ort, an dem Django nach Templates sucht, ist im `TEMPLATES`-Objekt in der Datei **settings.py** angegeben.
Die Standard-**settings.py** (wie für dieses Tutorial erstellt) sieht etwa so aus:

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

Die Einstellung von `'APP_DIRS': True`, ist dabei die wichtigste, da sie Django anweist, nach Templates in einem Unterverzeichnis jeder Applikation im Projekt namens "templates" zu suchen (dies erleichtert das Gruppieren von Templates mit ihrer zugehörigen Applikation zur einfachen Wiederverwendung).

Wir können auch spezifische Orte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist bisher noch nicht erforderlich).

> [!NOTE]
> Sie können mehr darüber erfahren, wie Django Templates findet und welche Template-Formate es unterstützt, im [Template-Abschnitt der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

An diesem Punkt haben wir alle erforderlichen Ressourcen erstellt, um die Startseite anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![Startseite für die LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** funktionieren noch nicht, da die Pfade, Views und Templates für diese Seiten noch nicht definiert sind. Wir haben nur Platzhalter für diese Links im `base_generic.html`-Template eingefügt.

## Fordern Sie sich heraus

Hier sind ein paar Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Views und Templates zu testen.

1. Das LocalLibrary [Basistemplate](#das_locallibrary-basistemplate) enthält einen `title`-Block. Überschreiben Sie diesen Block im [Index-Template](#das_index-template) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Templates erweitern](#templates_erweitern) erklärt, wie man Blöcke erstellt und einen Block in einem anderen Template erweitert.

2. Ändern Sie die [View](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu generieren, die ein bestimmtes Wort enthalten (groß-/kleinschreibungsunabhängig), und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie bei der Erstellung und Verwendung von `num_books` und `num_instances_available`. Aktualisieren Sie dann das [Index-Template](#das_index-template), um diese Variablen einzubeziehen.

## Zusammenfassung

Wir haben gerade die Startseite unserer Website erstellt - eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und Links zu anderen, noch zu erstellenden Seiten bietet. Unterwegs haben wir grundlegende Informationen zu URL-Maps, Views, Abfragen der Datenbank mit Modellen, Weitergabe von Informationen an ein Template aus einer View und Erstellung und Erweiterung von Templates gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die verbleibenden vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Ihr erstes Django-App, Teil 3: Views und Templates schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [View-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwalten statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django-Shortcut-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
