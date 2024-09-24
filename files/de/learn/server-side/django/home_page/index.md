---
title: "Django-Tutorial Teil 5: Erstellung unserer Startseite"
slug: Learn/Server-side/Django/Home_page
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}

Wir sind jetzt bereit, den Code hinzuzufügen, der unsere erste komplette Seite anzeigt – eine Startseite für die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website. Die Startseite zeigt die Anzahl der Einträge, die wir für jeden Modelltyp haben, und bietet Navigationslinks in der Seitenleiste zu unseren anderen Seiten. Auf dem Weg dorthin werden wir praktische Erfahrungen im Schreiben von URL-Karten und Ansichten sammeln, Datensätze aus der Datenbank abrufen und Vorlagen verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Django/Introduction">Django-Einführung</a>. Schließen Sie die vorangegangenen Themen des Tutorials ab (einschließlich <a href="/de/docs/Learn/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Django Admin-Site</a>).
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

Nachdem wir unsere Modelle definiert und einige erste Bibliothekseinträge erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen den Benutzern präsentiert. Das Erste, was wir tun müssen, ist zu bestimmen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs zu definieren, die zur Rückgabe dieser Ressourcen verwendet werden sollen. Dann erstellen wir einen URL-Mapper, Ansichten und Vorlagen zur Anzeige der Seiten.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die erforderlichen Komponenten beim Umgang mit HTTP-Anfragen und -Antworten. Da wir das Modell bereits implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Mappers, um die unterstützten URLs (und alle in den URLs kodierten Informationen) an die entsprechenden View-Funktionen weiterzuleiten.
- View-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und die Seiten zur Ansicht im Browser an den Benutzer zurückzugeben.
- Vorlagen, die beim Rendern von Daten in den Ansichten verwendet werden.

![Hauptdatenflussdiagramm: URL, Modell, View und Template-Komponenten, die beim Umgang mit HTTP-Anfragen und -Antworten in einer Django-Anwendung benötigt werden. Eine HTTP-Anfrage trifft auf einen Django-Server und wird an die Datei 'urls.py' der URL-Komponente weitergeleitet. Die Anfrage wird an die entsprechende Ansicht weitergeleitet. Die Ansicht kann Daten aus der Datei 'models.py' der Modelle lesen und schreiben, die den Code im Zusammenhang mit Modellen enthält. Die Ansicht greift auch auf die HTML-Template-Komponente zu. Die Ansicht gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie im nächsten Abschnitt zu sehen sein wird, haben wir 5 Seiten anzuzeigen, was zu viel Information ist, um sie in einem einzigen Artikel zu dokumentieren. Daher konzentriert sich dieser Artikel darauf, wie die Startseite implementiert wird, und wir werden die anderen Seiten in einem späteren Artikel behandeln. Dies sollte Ihnen ein gutes end-to-end Verständnis darüber geben, wie URL-Mapper, Ansichten und Modelle in der Praxis funktionieren.

## Definieren der Ressourcen-URLs

Da diese Version der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) im Wesentlichen schreibgeschützt für Endbenutzer ist, müssen wir lediglich eine Einstiegsseite für die Site bereitstellen (eine Startseite) und Seiten, die Listen- und Detailansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Indexseite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detailansicht für ein bestimmtes Buch, mit einem Primärschlüsselfeld von `<id>` (der Standard). Zum Beispiel wird die URL für das dritte Buch in der Liste `/catalog/book/3`.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld von `<id>`. Zum Beispiel wird die URL für den 11. Autor in der Liste `/catalog/author/11`.

Die ersten drei URLs geben die Indexseite, die Bücherliste und die Autorenliste zurück. Diese URLs kodieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, werden immer dieselben sein. Allerdings hängen die Ergebnisse, die die Abfragen zurückgeben, vom Inhalt der Datenbank ab.

Im Gegensatz dazu zeigen die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor an. Diese URLs kodieren die Identität des anzuzeigenden Elements (dargestellt durch `<id>` oben). Der URL-Mapper extrahiert die kodierten Informationen und leitet sie an die Ansicht weiter, und die Ansicht ermittelt dynamisch, welche Informationen aus der Datenbank abgerufen werden sollen. Durch die Kodierung der Informationen in der URL werden wir ein einzelnes Set aus URL-Mapping, Ansicht und Vorlage verwenden, um alle Bücher (oder Autoren) zu behandeln.

> [!NOTE]
> Mit Django können Sie Ihre URLs nach Bedarf konstruieren – Sie können die Informationen wie oben gezeigt im Körper der URL kodieren oder `GET` Parameter in der URL einfügen, zum Beispiel `/book/?id=6`. Unabhängig davon, welche Methode Sie verwenden, sollten die URLs sauber, logisch und lesbar gehalten werden, wie von W3C [empfohlen](https://www.w3.org/Provider/Style/URI). Die Django-Dokumentation empfiehlt, Informationen im Körper der URL zu kodieren, um ein besseres URL-Design zu erreichen.

Wie in der Übersicht erwähnt, beschreibt der Rest dieses Artikels, wie die Indexseite konstruiert wird.

## Erstellen der Indexseite

Die erste Seite, die wir erstellen werden, ist die Indexseite (`catalog/`). Die Indexseite wird einige statische HTML-Inhalte enthalten, zusammen mit generierten "Zählungen" verschiedener Einträge in der Datenbank. Um dies zu verwirklichen, erstellen wir eine URL-Zuordnung, eine Ansicht und eine Vorlage.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt besonders aufmerksam zu sein. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Zuordnung

Als wir die [Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website) erstellt haben, haben wir die Datei **locallibrary/urls.py** aktualisiert, um sicherzustellen, dass wann immer eine URL empfangen wird, die mit `catalog/` beginnt, das _URLConf_-Modul `catalog.urls` den verbleibenden Teilstring verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** enthält das `catalog.urls` Modul:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) trifft, teilt es den URL-String am angegebenen Endzeichen und sendet den verbleibenden Teilstring zur weiteren Verarbeitung an das enthaltene _URLconf_-Modul.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul mit dem Namen **/catalog/urls.py** erstellt.
Fügen Sie die folgenden Zeilen zu dieser Datei hinzu:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die Funktion `path()` definiert Folgendes:

- Ein URL-Muster, das ein leerer String ist: `''`. Wir werden URL-Muster im Detail diskutieren, wenn wir an den anderen Ansichten arbeiten.
- Eine View-Funktion, die aufgerufen wird, falls das URL-Muster erkannt wird: `views.index`, das ist die Funktion mit dem Namen `index()` in der Datei **views.py**.

Die Funktion `path()` spezifiziert auch einen `name` Parameter, der eine eindeutige Kennung für _diese_ bestimmte URL-Zuordnung ist. Sie können den Namen verwenden, um den Mapper zu "reversieren", d.h. eine URL, die auf die Ressource verweist, die der Mapper verarbeiten soll, dynamisch zu erstellen.
Zum Beispiel können wir den Namensparameter verwenden, um von jeder anderen Seite aus auf unsere Startseite zu verlinken, indem wir den folgenden Link in einer Vorlage hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir können den Link hartkodieren, wie in `<a href="/catalog/">Home</a>`), aber wenn wir das Muster für unsere Startseite ändern, z.B. in `/catalog/index`) werden die Vorlagen nicht mehr korrekt verlinken. Die Verwendung einer umgekehrten URL-Zuordnung ist robuster.

### Ansicht (funktionsbasiert)

Eine Ansicht ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mithilfe einer HTML-Vorlage rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Indexansicht folgt diesem Modell — sie ruft Informationen über die Anzahl der `Book`, `BookInstance`, verfügbaren `BookInstance` und `Author` Datensätze ab, die wir in der Datenbank haben, und übergibt diese Informationen zur Anzeige an eine Vorlage.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die Abkürzungsfunktion [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) importiert, um eine HTML-Datei mit einer Vorlage und Daten zu generieren:

```python
from django.shortcuts import render

# Create your views here.
```

Fügen Sie die folgenden Zeilen am Ende der Datei ein:

```python
from .models import Book, Author, BookInstance, Genre

def index(request):
    """View-Funktion für die Startseite der Site."""

    # Generieren von Zählungen einiger der Hauptobjekte
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Verfügbare Bücher (Status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # Das 'all()' ist standardmäßig impliziert.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Rendern der HTML-Vorlage index.html mit den Daten in der Kontextvariablen
    return render(request, 'index.html', context=context)
```

Die erste Zeile importiert die Modellklassen, die wir verwenden werden, um auf Daten in all unseren Ansichten zuzugreifen.

Der erste Teil der View-Funktion ruft die Anzahl der Datensätze mit dem Attribut `objects.all()` der Modellklassen ab. Sie erhält auch eine Liste der `BookInstance`-Objekte, die im Statusfeld einen Wert von 'a' (verfügbar) haben. Weitere Informationen zum Zugriff auf Modelldaten finden Sie in unserem vorherigen Tutorial [Django-Tutorial Teil 3: Verwenden von Modellen > Suchen von Datensätzen](/de/docs/Learn/Server-side/Django/Models#searching_for_records).

Am Ende der View-Funktion rufen wir die Funktion `render()` auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Abkürzungsfunktion umschließt eine Reihe anderer Funktionen, um einen sehr gängigen Anwendungsfall zu vereinfachen. Die `render()` Funktion akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, das ein `HttpRequest` ist.
- eine HTML-Vorlage mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch ist und die Daten enthält, die in die Platzhalter eingefügt werden sollen.

Wir werden im nächsten Abschnitt mehr über Vorlagen und die `context`-Variable sprechen. Kommen wir nun zur Erstellung unserer Vorlage, damit wir tatsächlich etwas für den Benutzer anzeigen können!

### Vorlage

Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert und Platzhalter verwendet, um tatsächlichen Inhalt darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Skelett dieses Beispiels) sucht nach Vorlagen in einem Unterverzeichnis namens '**templates**' Ihrer Anwendungen. Zum Beispiel wird in der gerade von uns hinzugefügten Index-Ansicht die Funktion `render()` erwarten, die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** zu finden und wird einen Fehler auslösen, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und `127.0.0.1:8000` in Ihrem Browser aufrufen - es wird eine recht intuitive Fehlermeldung angezeigt: "`TemplateDoesNotExist at /catalog/`", und weitere Details.

> [!NOTE]
> Basierend auf der Einstellungsdatei Ihres Projekts wird Django Vorlagen an mehreren Stellen, standardmäßig in den installierten Anwendungen, suchen. Weitere Informationen darüber, wie Django Vorlagen findet und welche Vorlagenformate es unterstützt, finden Sie im [Vorlagenbereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Erweiterung von Vorlagen

Die Indexvorlage benötigt standardmäßige HTML-Markierungen für den Kopf und Körper, zusammen mit Navigationsabschnitten, um zu den anderen Seiten der Site zu verlinken (die wir noch nicht erstellt haben), und in Abschnitte, die Einleitungstext und Buchdaten anzeigen.

Vieles der HTML- und Navigationsstruktur wird auf jeder Seite unserer Site gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Template-Sprache verwenden, um eine Basistemplate zu deklarieren und dann nur die Teile zu ersetzen, die sich für jede spezifische Seite unterscheiden.

Das folgende Codefragment ist eine Beispiel-Basistemplate aus einer **base_generic.html** Datei.
Wir werden die Vorlage für LocalLibrary in Kürze erstellen.
Das folgende Beispiel enthält allgemeines HTML mit Abschnitten für einen Titel, eine Seitenleiste und Hauptinhalte, die mit den benannten `block` und `endblock` Template-Tags markiert sind.
Sie können die Blöcke leer lassen oder Standardinhalte einfügen, die beim Rendern von abgeleiteten Seiten verwendet werden.

> [!NOTE]
> Template _Tags_ sind Funktionen, die Sie in einer Vorlage verwenden können, um durch Listen zu iterieren, bedingte Operationen basierend auf dem Wert einer Variablen durchzuführen usw. Neben Template-Tags erlaubt die Templatesyntax das Referenzieren von Variablen, die aus der Ansicht in die Vorlage übergeben werden, und das Verwenden von _Templatefiltern_, um Variablen zu formatieren (z.B. um eine Zeichenkette in Kleinbuchstaben zu konvertieren).

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
      <!-- Fügen Sie für jede Seite einen standardmäßigen Navigationstext ein -->
    {% endblock %}
    {% block content %}
      <!-- Standardinhaltstext (normalerweise leer) -->
    {% endblock %}
  </body>
</html>
```

Wenn Sie eine Vorlage für eine bestimmte Ansicht definieren, geben Sie zunächst die Basistemplate mithilfe des `extends` Template-Tags an - siehe den Codeausschnitt unten. Dann erklären Sie, welche Abschnitte der Vorlage Sie ersetzen möchten (falls vorhanden), indem Sie `block`/`endblock`-Abschnitte wie in der Basistemplate verwenden.

Zum Beispiel zeigt der folgende Codeausschnitt, wie man das `extends` Template-Tag verwendet und den `content`-Block überschreibt. Das generierte HTML wird den im Basistemplate definierten Code und die Struktur enthalten, einschließlich des von Ihnen in dem `title`-Block definierten Standardinhalts, aber den neuen `content`-Block anstelle des Standardinhalts.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Lokale Bibliothek Startseite</h1>
  <p>
    Willkommen bei LocalLibrary, einer Website, die von
    <em>Mozilla Developer Network</em> entwickelt wurde!
  </p>
{% endblock %}
```

#### Die LocalLibrary-Basistemplate

Wir werden den folgenden Codeausschnitt als Basistemplate für die _LocalLibrary_ Website verwenden. Wie Sie sehen können, enthält es einige HTML-Codes und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standard-Seitenleiste mit Links zu Listen aller Bücher und Autoren, die beide in Blöcke eingeschlossen sind, um bei Bedarf leicht geändert werden zu können.

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
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXhW+ALEwIH"
      crossorigin="anonymous">
    <!-- Fügen Sie zusätzliches CSS in statischen Dateien hinzu -->
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
              <li><a href="">Alle Bücher</a></li>
              <li><a href="">Alle Autoren</a></li>
            </ul>
          {% endblock %}
        </div>
        <div class="col-sm-10 ">{% block content %}{% endblock %}</div>
      </div>
    </div>
  </body>
</html>
```

Die Vorlage enthält CSS von [Bootstrap](https://getbootstrap.com/), um das Layout und die Präsentation der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder eines anderen Web-Frameworks auf Client-Seite) ist eine schnelle Möglichkeit, eine attraktive Seite zu erstellen, die auf verschiedenen Bildschirmgrößen gut angezeigt wird.

Das Basistemplate verweist auch auf eine lokale CSS-Datei (**styles.css**), die zusätzliche Stile bietet. Erstellen Sie eine **styles.css** Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Die Indexvorlage

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unsere Basisvorlage in der ersten Zeile und ersetzt dann den Standard `content`-Block für die Vorlage.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Lokale Bibliothek Startseite</h1>
  <p>
    Willkommen bei LocalLibrary, einer Website, die von
    <em>Mozilla Developer Network</em> entwickelt wurde!
  </p>
  <h2>Dynamischer Inhalt</h2>
  <p>Die Bibliothek hat die folgenden Anzahl von Einträgen:</p>
  <ul>
    <li><strong>Bücher:</strong> \{{ num_books }}</li>
    <li><strong>Kopien:</strong> \{{ num_instances }}</li>
    <li><strong>Verfügbare Kopien:</strong> \{{ num_instances_available }}</li>
    <li><strong>Autoren:</strong> \{{ num_authors }}</li>
  </ul>
{% endblock %}
```

Im Abschnitt _Dynamischer Inhalt_ deklarieren wir Platzhalter (_Template-Variablen_) für die Informationen aus der Ansicht, die wir einfügen möchten.
Die Variablen sind mit doppelten geschweiften Klammern (Handlebars) eingeschlossen.

> [!NOTE]
> Sie können Template-Variablen und Template-Tags (Funktionen) leicht erkennen - Variablen sind in doppelte geschweifte Klammern (`\{{ num_books }}`) eingeschlossen, und Tags sind in einfache Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`) eingeschlossen.

Das hier Wichtige ist, dass die Variablen mit den _Schlüsseln_ benannt werden, die wir im `context`-Wörterbuch in der `render()`-Funktion unserer Ansicht übergeben (siehe Beispiel unten).
Variablen werden bei der Darstellung der Vorlage durch ihre zugehörigen _Werte_ ersetzt.

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

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bilder. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern könnte), erlaubt Django Ihnen, den Standort in Ihren Vorlagen relativ zur globalen `STATIC_URL`-Einstellung anzugeben. Die Standardskelett-Website legt den Wert von `STATIC_URL` auf '`/static/`' fest, aber Sie könnten sich entscheiden, diese auf einem Content Delivery Network oder an einem anderen Ort zu hosten.

Innerhalb der Vorlage rufen Sie zuerst das `load` Template-Tag auf, indem Sie "static" angeben, um die Template-Bibliothek wie im Codebeispiel unten gezeigt hinzuzufügen. Dann können Sie das `static`-Template-Tag verwenden und die relative URL zur benötigten Datei angeben.

```django
<!-- Fügen Sie zusätzliches CSS in statischen Dateien hinzu -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können auf ähnliche Weise ein Bild in die Seite einfügen, zum Beispiel:

```django
{% load static %}
<img
  src="{% static 'catalog/images/local_library_model_uml.png' %}"
  alt="UML-Diagramm"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo die Dateien sich befinden, aber Django stellt sie standardmäßig nicht bereit. Wir haben den Entwicklungs-Webserver so konfiguriert, dass er Dateien durch Ändern der globalen URL-Zuordnung (**/django-locallibrary-tutorial/locallibrary/urls.py**) bereitstellt, als wir das [Website-Skelett erstellt](/de/docs/Learn/Server-side/Django/skeleton_website) haben, aber wir müssen das Dateidienstprogramm in der Produktion noch aktivieren. Wir werden uns das später ansehen.

Weitere Informationen zur Arbeit mit statischen Dateien finden Sie im [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinken zu URLs

Das Basistemplate oben führte das `url` Template-Tag ein.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer in Ihrem **urls.py** aufgerufenen `path()`-Funktion und die Werte für alle Argumente, die die zugehörige Ansicht von dieser Funktion erhalten wird, und gibt eine URL zurück, die Sie zum Verlinken zur Ressource verwenden können.

#### Konfigurieren, wo die Vorlagen zu finden sind

Der Ort, an dem Django nach Vorlagen sucht, wird im `TEMPLATES`-Objekt in der **settings.py** Datei angegeben.
Die Standard **settings.py** (wie in diesem Tutorial erstellt) sieht ungefähr so aus:

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

Die Einstellung `'APP_DIRS': True`, ist die wichtigste, da sie Django anweist, in einem Unterverzeichnis jeder Anwendung im Projekt nach Vorlagen zu suchen, das "templates" genannt wird (dies erleichtert das Gruppieren von Vorlagen mit ihrer zugehörigen Anwendung zur einfachen Wiederverwendung).

Wir können auch spezifische Standorte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist noch nicht nötig).

> [!NOTE]
> Sie können mehr darüber erfahren, wie Django Vorlagen findet und welche Vorlagenformate es unterstützt im [Vorlagenbereich der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht es aus?

An diesem Punkt haben wir alle erforderlichen Ressourcen erstellt, um die Indexseite anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles richtig konfiguriert ist, sollte Ihre Website wie im folgenden Screenshot aussehen.

![Indexseite der LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links zu **Alle Bücher** und **Alle Autoren** werden noch nicht funktionieren, weil die Pfade, Ansichten und Vorlagen für diese Seiten noch nicht definiert sind. Wir haben nur Platzhalter für diese Links im `base_generic.html` Template eingefügt.

## Fordern Sie sich heraus

Hier sind ein paar Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Ansichten und Vorlagen zu testen.

1. Die LocalLibrary [Basistemplate](#die_locallibrary-basistemplate) enthält einen `title` Block. Überschreiben Sie diesen Block in der [Indexvorlage](#die_indexvorlage) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Die Sektion [Erweiterung von Vorlagen](#erweiterung_von_vorlagen) erklärt, wie man Blöcke erstellt und einen Block in einer anderen Vorlage erweitert.

2. Ändern Sie die [Ansicht](#view_function-based), um Zählungen für _Genres_ und _Bücher_ zu erzeugen, die ein bestimmtes Wort (case-insensitive) enthalten, und übergeben Sie die Ergebnisse an den `context`. Sie erreichen dies auf ähnliche Weise wie beim Erstellen und Verwenden von `num_books` und `num_instances_available`. Aktualisieren Sie dann die [Indexvorlage](#die_indexvorlage), um diese Variablen einzubeziehen.

## Zusammenfassung

Wir haben gerade die Startseite unserer Site erstellt – eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und auf andere noch zu erstellende Seiten verlinkt. Unterwegs haben wir grundlegende Informationen über URL-Maper, Ansichten, das Abfragen der Datenbank mit Modellen, das Übergeben von Informationen an eine Vorlage von einer Ansicht und das Erstellen und Erweitern von Vorlagen gelernt.

Im nächsten Artikel werden wir auf diesem Wissen aufbauen, um die verbleibenden vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Ihr erstes Django-App schreiben, Teil 3: Ansichten und Vorlagen](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [View-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Vorlagen](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwalten von statischen Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django Abkürzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django")}}
