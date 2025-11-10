---
title: "Django Tutorial Teil 5: Erstellen unserer Startseite"
short-title: "5: Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Wir sind nun bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt - eine Startseite für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite wird die Anzahl der Datensätze anzeigen, die wir für jeden Modelltyp haben, und Navigationslinks in der Seitenleiste zu unseren anderen Seiten bereitstellen. Dabei werden wir praktische Erfahrungen im Schreiben grundlegender URL-Karten und Ansichten sammeln, Datensätze aus der Datenbank abrufen und Vorlagen verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django-Einführung</a>. Schließen Sie die vorherigen Tutorial-Themen ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django Tutorial Teil 4: Django Admin Site</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, einfache URL-Karten und Ansichten zu erstellen (bei denen keine Daten in der URL kodiert sind), Daten aus Modellen abzurufen und Vorlagen zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem wir unsere Modelle definiert und einige initiale Bibliotheksdatensätze erstellt haben, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Nutzern präsentiert. Zunächst müssen wir festlegen, welche Informationen wir auf unseren Seiten anzeigen möchten und die URLs definieren, die zur Rückgabe dieser Ressourcen verwendet werden sollen. Dann erstellen wir einen URL-Mapper, Ansichten und Vorlagen, um die Seiten anzuzeigen.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die benötigten Komponenten beim Umgang mit HTTP-Anfragen und -Antworten. Da wir bereits das Modell implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mapper, um die unterstützten URLs (und alle in den URLs kodierten Informationen) an die entsprechenden Ansichts-Funktionen weiterzuleiten.
- Ansichts-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten als Antwort an den Benutzer zurückzugeben, damit sie im Browser angezeigt werden können.
- Vorlagen, die beim Rendern der Daten in den Ansichten verwendet werden.

![Hauptdatenflussdiagramm: URL, Modell, Ansicht & Vorlagenkomponente benötigt beim Umgang mit HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage trifft auf einen Django-Server und wird zur Datei 'urls.py' der URL-Komponente weitergeleitet. Die Anfrage wird an die entsprechende Ansicht weitergeleitet. Die Ansicht kann Daten aus den Modellen der Datei 'models.py' lesen und schreiben, die den Code für die Modelle enthält. Die Ansicht greift auch auf die HTML-Vorlagenkomponente zu. Die Ansicht gibt die Antwort zurück an den Benutzer.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir fünf Seiten, die wir anzeigen möchten, was zu viele Informationen sind, um sie in einem einzigen Artikel zu dokumentieren. Daher wird dieser Artikel sich darauf konzentrieren, wie man die Startseite implementiert, und wir werden die anderen Seiten in einem späteren Artikel behandeln. Dies sollte Ihnen ein gutes End-to-End-Verständnis dafür geben, wie URL-Mapper, Ansichten und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) für Endbenutzer im Wesentlichen schreibgeschützt ist, müssen wir nur eine Startseite für die Website (eine Homepage) bereitstellen und Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Index-Seite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch mit einem Feldprimärschlüssel von `<id>` (dem Standardwert). Zum Beispiel wäre die URL für das dritte Buch in der Liste `/catalog/book/3`.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Feldprimärschlüssel von `<id>`. Zum Beispiel wäre die URL für den elften Autor in der Liste `/catalog/author/11`.

Die ersten drei URLs geben die Index-Seite, die Buchliste und die Autorenliste zurück. Diese URLs kodieren keine zusätzlichen Informationen und die Abfragen, die Daten aus der Datenbank abrufen, sind immer gleich. Die Ergebnisse, die die Abfragen zurückgeben, hängen jedoch vom Inhalt der Datenbank ab.

Im Gegensatz dazu zeigen die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor an. Diese URLs kodieren die Identität des Elements, das angezeigt werden soll (dargestellt durch `<id>` oben). Der URL-Mapper extrahiert die kodierten Informationen und übergibt sie an die Ansicht, und die Ansicht bestimmt dynamisch, welche Informationen aus der Datenbank abgerufen werden sollen. Indem die Informationen in der URL kodiert werden, können wir ein einziges URL-Mapping, eine Ansicht und eine Vorlage verwenden, um alle Bücher (oder Autoren) zu verwalten.

> [!NOTE]
> Mit Django können Sie Ihre URLs nach Ihren Anforderungen konstruieren - Sie können Informationen im Körper der URL kodieren, wie oben gezeigt, oder `GET`-Parameter in die URL einfügen, zum Beispiel `/book/?id=6`. Egal, welche Methode Sie verwenden, die URLs sollten sauber, logisch und lesbar gehalten werden, wie es die [W3C empfiehlt](https://www.w3.org/Provider/Style/URI).
> Die Django-Dokumentation empfiehlt, Informationen im Körper der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie im Überblick erwähnt, beschreibt der Rest dieses Artikels, wie die Index-Seite erstellt wird.

## Erstellen der Index-Seite

Die erste Seite, die wir erstellen werden, ist die Index-Seite (`catalog/`). Die Index-Seite wird einige statische HTML-Inhalte sowie generierte "Counts" verschiedener Datensätze in der Datenbank enthalten. Um dies zu ermöglichen, erstellen wir ein URL-Mapping, eine Ansicht und eine Vorlage.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt etwas genauer hinzuschauen. Ein Großteil der Informationen gilt auch für die anderen Seiten, die wir erstellen werden.

### URL-Mapping

Als wir die [Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, haben wir die Datei **locallibrary/urls.py** aktualisiert, um sicherzustellen, dass wann immer eine URL empfangen wird, die mit `catalog/` beginnt, das _URLConf_ Modul `catalog.urls` die verbleibende Teilzeichenkette verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** enthält das `catalog.urls`-Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer, wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) trifft, wird die URL-Zeichenkette am festgelegten Endzeichen geteilt und die verbleibende Teilzeichenkette an das enthaltene _URLConf_-Modul zur weiteren Verarbeitung gesendet.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul erstellt, genannt **/catalog/urls.py**.
Fügen Sie die folgenden Zeilen in diese Datei hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die `path()`-Funktion definiert Folgendes:

- Ein URL-Muster, das ein leerer String ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Ansichten arbeiten.
- Eine Ansichts-Funktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, was die Funktion mit dem Namen `index()` in der Datei **views.py** ist.

Die `path()`-Funktion spezifiziert auch einen `name`-Parameter, der einen einzigartigen Bezeichner für _diese_ spezielle URL-Zuordnung darstellt. Sie können den Namen verwenden, um den Mapper "umzukehren", d.h. eine URL dynamisch zu erstellen, die auf die Ressource verweist, die der Mapper handhaben soll.
Zum Beispiel können wir den Namen verwenden, um von jeder anderen Seite auf unsere Startseite zu verlinken, indem wir den folgenden Link in eine Vorlage einfügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link fest codieren, wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, zum Beispiel in `/catalog/index`) würden die Vorlagen nicht mehr korrekt verlinken. Die Verwendung einer umgekehrten URL-Zuordnung ist robuster.

### Ansicht (funktionsbasiert)

Eine Ansicht ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mit einer HTML-Vorlage rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Index-Ansicht folgt diesem Modell: Sie ruft Informationen über die Anzahl der `Book`, `BookInstance`, verfügbaren `BookInstance`- und `Author`-Datensätze ab, die wir in der Datenbank haben, und übergibt diese Informationen einer Vorlage zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) Shortcut-Funktion importiert, um eine HTML-Datei mithilfe einer Vorlage und Daten zu erzeugen:

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

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um auf die Daten in allen unseren Ansichten zuzugreifen.

Der erste Teil der Ansichts-Funktion holt die Anzahl der Datensätze mithilfe des `objects.all()`-Attributs der Modellklassen. Es erhält auch eine Liste von `BookInstance`-Objekten, die im Statusfeld den Wert 'a' (verfügbar) haben. Weitere Informationen dazu, wie man auf Modelldaten zugreift, finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Verwendung von Modellen > Suchen nach Datensätzen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der Ansichts-Funktion rufen wir die `render()`-Funktion auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Shortcut-Funktion wickelt eine Reihe anderer Funktionen ab, um einen sehr häufigen Anwendungsfall zu vereinfachen. Die `render()`-Funktion akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, bei dem es sich um ein `HttpRequest` handelt.
- eine HTML-Vorlage mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch darstellt und die Daten enthält, die in die Platzhalter eingefügt werden sollen.

Wir werden mehr über Vorlagen und die `context`-Variable im nächsten Abschnitt sprechen. Erstellen wir unsere Vorlage, damit wir dem Benutzer tatsächlich etwas anzeigen können!

### Vorlage

Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei (beispielsweise einer HTML-Seite) definiert und Platzhalter verwendet, um tatsächlichen Inhalt darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skeleton dieses Beispiels) sucht nach Vorlagen in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen. Zum Beispiel erwartet die `render()`-Funktion, die wir in der gerade hinzugefügten Index-Ansicht verwenden, die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** und wird einen Fehler ausgeben, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine ziemlich intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/" und weitere Details.

> [!NOTE]
> Basierend auf Ihrer Projekt-Einstellungsdatei sucht Django an mehreren Orten nach Vorlagen, wobei standardmäßig in Ihren installierten Anwendungen gesucht wird. Sie können mehr darüber erfahren, wie Django Vorlagen findet und welche Vorlagenformate es unterstützt, im [Template-Bereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Vorlagen erweitern

Die Index-Vorlage benötigt standardmäßiges HTML-Markup für Kopf- und Körperbereich sowie Navigationsabschnitte, um zu den anderen Seiten der Website zu verlinken (die wir noch nicht erstellt haben), und zu Abschnitten, die Einführungstext und Buchdaten anzeigen.

Vieles von dem HTML- und Navigationsaufbau wird auf jeder Seite unserer Website gleich sein. Statt den Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Template-Sprache verwenden, um eine Basisvorlage zu deklarieren und sie dann zu erweitern, um nur die Teile zu ersetzen, die für jede spezifische Seite unterschiedlich sind.

Der folgende Codeausschnitt ist eine Beispielbasisvorlage aus einer **base_generic.html**-Datei.
Wir werden die Vorlage für LocalLibrary in Kürze erstellen.
Die Beispielvorlage unten enthält allgemeine HTML-Sektionen mit Bereichen für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock` Template-Tags markiert sind.
Sie können die Blöcke leer lassen oder Standardinhalte für die Verwendung beim Rendern der von der Vorlage abgeleiteten Seiten einfügen.

> [!NOTE]
> Template-_Tags_ sind Funktionen, die Sie in einer Vorlage verwenden können, um durch Listen zu durchlaufen, bedingte Operationen basierend auf dem Wert einer Variablen auszuführen und so weiter. Zusätzlich zu Template-Tags ermöglicht die Template-Syntax das Referenzieren von Variablen, die von der Ansicht in die Vorlage übergeben werden, und das Verwenden von _Template-Filtern_, um Variablen zu formatieren (zum Beispiel, um eine Zeichenkette in Kleinbuchstaben zu konvertieren).

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

Beim Definieren einer Vorlage für eine bestimmte Ansicht geben wir zuerst die Basisvorlage mit dem `extends` Template-Tag an — siehe den untenstehenden Codeausschnitt. Dann deklarieren wir, welche Abschnitte der Vorlage wir ersetzen möchten (falls vorhanden), indem wir `block`/`endblock`-Bereiche wie in der Basisvorlage verwenden.

Der folgende Codeausschnitt zeigt zum Beispiel, wie man das `extends` Template-Tag verwendet und den `content`-Block überschreibt. Das generierte HTML wird den im Grundgerüst definierten Code und die Struktur einschließen, einschließlich des Standardinhalts, den Sie im `title`-Block definiert haben, aber der neue `content`-Block ersetzt den Standardinhalt.

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

#### Die LocalLibrary-Basisvorlage

Wir werden den folgenden Codeausschnitt als Basisvorlage für die _LocalLibrary_ Website verwenden. Wie Sie sehen, enthält sie etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardsidebar mit Links zu Listen aller Bücher und Autoren, beide in Blöcken eingefügt, um sie in Zukunft leicht ändern zu können.

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

Die Vorlage enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder eines anderen clientseitigen Web-Frameworks) ist ein schneller Weg, um eine ansprechende Seite zu erstellen, die auf unterschiedlichen Bildschirmgrößen gut aussieht.

Die Basisvorlage verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Styling-Anweisungen bietet. Erstellen Sie eine **styles.css** Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Die Index-Vorlage

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unsere Basisvorlage in der ersten Zeile und ersetzt dann den Standard-`content`-Block der Vorlage.

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
Die Variablen sind mit doppelten geschweiften Klammern (Handlebars) umschlossen.

> [!NOTE]
> Sie können Template-Variablen und Template-Tags (Funktionen) leicht erkennen - Variablen sind in doppelten geschweiften Klammern (`\{{ num_books }}`) und Tags sind in einfachen Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`) eingeschlossen.

Das Wichtigste hier ist, dass Variablen mit den _Keys_ benannt werden, die wir in das `context`-Dictionary der `render()`-Funktion unserer Ansicht übergeben (siehe Beispiel unten).
Die Variablen werden ersetzt durch ihre zugehörigen _Werte_, wenn die Vorlage gerendert wird.

```python
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

#### Referenzierung von statischen Dateien in Vorlagen

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bilder. Da der Speicherort dieser Dateien möglicherweise unbekannt ist (oder sich ändern kann), ermöglicht Django es Ihnen, den Speicherort in Ihren Vorlagen relativ zur globalen Einstellung `STATIC_URL` anzugeben. Die Standard-Skeleton-Website setzt den Wert von `STATIC_URL` auf `"/static/"`, aber Sie könnten diese statischen Dateien auch auf einem Content Delivery Network oder anderswo hosten.

Innerhalb der Vorlage rufen Sie zuerst das `load` Template-Tag auf, das "static" angibt, um die Template-Bibliothek hinzuzufügen, wie im Code-Beispiel unten gezeigt. Sie können dann das `static` Template-Tag verwenden und die relative URL zur erforderlichen Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können auch ein Bild auf ähnliche Weise in die Seite einfügen:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo sich die Dateien befinden, aber Django dient ihnen standardmäßig nicht. Wir haben den Entwicklungs-Webserver konfiguriert, um Dateien zu servern, indem wir den globalen URL-Mapper (**/django-locallibrary-tutorial/locallibrary/urls.py**) modifiziert haben, als wir [das Website-Skelett erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben, aber das File-Serving in der Produktion müssen wir später noch einrichten. Darauf werden wir später eingehen.

Weitere Informationen zum Arbeiten mit statischen Dateien finden Sie unter [Verwalten statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinken auf URLs

Die oben vorgestellte Basisvorlage führte das `url` Template-Tag ein.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()`-Funktion, die in Ihrer **urls.py** aufgerufen wird, sowie die Werte für alle Argumente, die die zugehörige Ansicht von dieser Funktion erhalten wird, und gibt eine URL zurück, die Sie verwenden können, um auf die Ressource zu verlinken.

#### Konfigurieren, wo die Vorlagen zu finden sind

Der Speicherort, an dem Django nach Vorlagen sucht, wird im `TEMPLATES`-Objekt in der Datei **settings.py** angegeben.
Die Standard-**settings.py** (wie sie für dieses Tutorial erstellt wurde) sieht ungefähr so aus:

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

Die Einstellung `'APP_DIRS': True` ist am wichtigsten, da sie Django anweist, nach Vorlagen in einem Unterverzeichnis jeder Anwendung des Projekts zu suchen, das "templates" genannt wird (dies erleichtert das Gruppieren von Vorlagen mit ihren zugehörigen Anwendungen zur einfachen Wiederverwendung).

Wir können auch bestimmte Speicherorte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist momentan nicht nötig).

> [!NOTE]
> Sie können mehr darüber erfahren, wie Django Vorlagen findet und welche Vorlagenformate es unterstützt, im [Template-Bereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

An diesem Punkt haben wir alle erforderlichen Ressourcen erstellt, um die Index-Seite anzuzeigen. Führen Sie den Server aus (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![Index-Seite der LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die **Alle Bücher** und **Alle Autoren** Links werden noch nicht funktionieren, weil die Pfade, Ansichten und Vorlagen für diese Seiten noch nicht definiert sind. Wir haben lediglich Platzhalter für diese Links in der `base_generic.html`-Vorlage eingefügt.

## Fordern Sie sich selbst heraus

Hier sind ein paar Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Ansichten und Vorlagen zu testen.

1. Die LocalLibrary [Basisvorlage](#die_locallibrary-basisvorlage) enthält einen `title`-Block. Überschreiben Sie diesen Block in der [Index-Vorlage](#die_index-vorlage) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Vorlagen erweitern](#vorlagen_erweitern) erklärt, wie man Blöcke erstellt und einen Block in einer anderen Vorlage erweitert.

2. Ändern Sie die [Ansicht](#view_function-based), um Zählungen für _Genres_ und _Bücher_, die ein bestimmtes Wort (unabhängig von Groß-/Kleinschreibung) enthalten, zu erzeugen und übergeben Sie die Ergebnisse an den `context`. Sie können dies auf ähnliche Weise erreichen, wie Sie `num_books` und `num_instances_available` erstellt und verwendet haben. Aktualisieren Sie dann die [Index-Vorlage](#die_index-vorlage), um diese Variablen einzuschließen.

## Zusammenfassung

Wir haben gerade die Startseite für unsere Seite erstellt - eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und Links zu anderen noch zu erstellenden Seiten enthält. Dabei haben wir grundlegende Informationen über URL-Mapper, Ansichten, Abfragen in der Datenbank mit Modellen, das Übergeben von Informationen von einer Ansicht an eine Vorlage sowie das Erstellen und Erweitern von Vorlagen gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die restlichen vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Writing your first Django app, part 3: Views and Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [View functions](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Managing static files](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django shortcut functions](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
