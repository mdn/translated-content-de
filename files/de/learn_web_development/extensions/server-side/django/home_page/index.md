---
title: "Django-Tutorial Teil 5: Erstellung unserer Startseite"
slug: Learn_web_development/Extensions/Server-side/Django/Home_page
l10n:
  sourceCommit: b6d31a9d986212e8cb4e98993886cb80cc761c02
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}

Wir sind nun bereit, den Code hinzuzufügen, der unsere erste vollständige Seite anzeigt – eine Startseite für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website. Die Startseite zeigt die Anzahl der Datensätze, die wir für jeden Modelltyp haben, und bietet Navigationslinks in der Seitenleiste zu unseren anderen Seiten. Auf dem Weg dorthin sammeln wir praktische Erfahrungen im Schreiben grundlegender URL-Abbildungen und Ansichten, beim Abrufen von Datensätzen aus der Datenbank und bei der Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Einführung in Django</a>. Schließen Sie die vorherigen Tutorials ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site">Django-Tutorial Teil 4: Django-Administrationsseite</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, einfache URL-Abbildungen und Ansichten zu erstellen (bei denen keine Daten in der URL codiert sind), Daten aus Modellen abzurufen und Templates zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Nachdem wir unsere Modelle definiert und einige anfängliche Bibliotheksdatensätze erstellt haben, mit denen wir arbeiten können, ist es an der Zeit, den Code zu schreiben, der diese Informationen Benutzern präsentiert. Zunächst müssen wir festlegen, welche Informationen wir auf unseren Seiten anzeigen möchten, und die URLs definieren, die für die Rückgabe dieser Ressourcen verwendet werden sollen. Dann erstellen wir eine URL-Abbildung, Ansichten und Templates zur Anzeige der Seiten.

Das folgende Diagramm beschreibt den Hauptdatenfluss und die erforderlichen Komponenten bei der Verarbeitung von HTTP-Anfragen und -Antworten. Da wir das Modell bereits implementiert haben, sind die Hauptkomponenten, die wir erstellen werden:

- URL-Abbildungen, um die unterstützten URLs (und alle in den URLs codierten Informationen) an die entsprechenden Ansichts-Funktionen weiterzuleiten.
- Ansichts-Funktionen, um die angeforderten Daten aus den Modellen abzurufen, HTML-Seiten zu erstellen, die die Daten anzeigen, und diese Seiten dem Benutzer zur Ansicht im Browser zurückzugeben.
- Templates, die beim Rendern der Daten in den Ansichten verwendet werden.

![Hauptdatenflussdiagramm: URL-, Modell-, Ansichts- und Template-Komponente erforderlich bei der Verarbeitung von HTTP-Anfragen und -Antworten in einer Django-Anwendung. Eine HTTP-Anfrage erreicht einen Django-Server und wird an die Datei 'urls.py' der URL-Komponente weitergeleitet. Die Anfrage wird an die entsprechende Ansicht weitergeleitet. Die Ansicht kann Daten aus dem 'models.py'-Modul lesen und schreiben, das den zugehörigen Modellcode enthält. Die Ansicht greift auch auf die HTML-Datei der Template-Komponente zu. Die Ansicht gibt die Antwort an den Benutzer zurück.](basic-django.png)

Wie Sie im nächsten Abschnitt sehen werden, haben wir fünf Seiten zur Anzeige, was für die Dokumentation in einem einzigen Artikel zu umfangreich ist. In diesem Artikel konzentrieren wir uns darauf, wie die Startseite implementiert wird, und behandeln die anderen Seiten in einem nachfolgenden Artikel. Dies sollte Ihnen ein gutes grundlegendes Verständnis dafür vermitteln, wie URL-Abbildungen, Ansichten und Modelle in der Praxis zusammenarbeiten.

## Definition der Ressourcen-URLs

Da diese Version von [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) für Endbenutzer im Wesentlichen schreibgeschützt ist, müssen wir lediglich eine Einstiegsseite für die Website (eine Startseite) und Seiten bereitstellen, die Listen und Detaillansichten für Bücher und Autoren _anzeigen_.

Die URLs, die wir für unsere Seiten benötigen, sind:

- `catalog/` — Die Startseite (Index-Seite).
- `catalog/books/` — Eine Liste aller Bücher.
- `catalog/authors/` — Eine Liste aller Autoren.
- `catalog/book/<id>` — Die Detaillansicht für ein bestimmtes Buch mit einer Primärschlüssel-Feld-ID von `<id>` (Standardwert). Zum Beispiel wird die URL für das dritte Buch, das zur Liste hinzugefügt wurde, `/catalog/book/3` sein.
- `catalog/author/<id>` — Die Detaillansicht für einen bestimmten Autor mit einer Primärschlüssel-Feld-ID von `<id>`. Zum Beispiel wird die URL für den elften Autor, der zur Liste hinzugefügt wurde, `/catalog/author/11` sein.

Die ersten drei URLs geben die Indexseite, die Bücherliste und die Autorenliste zurück. Diese URLs codieren keine zusätzlichen Informationen, und die Abfragen, die Daten aus der Datenbank abrufen, bleiben immer gleich. Die von den Abfragen zurückgegebenen Ergebnisse hängen jedoch vom Inhalt der Datenbank ab.

Im Gegensatz dazu zeigen die letzten beiden URLs detaillierte Informationen über ein bestimmtes Buch oder einen bestimmten Autor an. Diese URLs codieren die Identität des anzuzeigenden Elements (oben dargestellt durch `<id>`). Der URL-Abbilder extrahiert die codierten Informationen und übergibt sie an die Ansicht, und die Ansicht bestimmt dynamisch, welche Informationen aus der Datenbank abgerufen werden. Durch die Codierung der Informationen in der URL verwenden wir eine einzige URL-Abbildung, eine Ansicht und ein Template, um alle Bücher (oder Autoren) zu verarbeiten.

> [!NOTE]
> Mit Django können Sie Ihre URLs so gestalten, wie Sie es benötigen – Sie können Informationen wie oben gezeigt in den Körper der URL codieren oder `GET`-Parameter in der URL angeben, zum Beispiel `/book/?id=6`. Unabhängig davon, welches Format Sie verwenden, sollten die URLs gemäß den [W3C-Empfehlungen](https://www.w3.org/Provider/Style/URI) sauber, logisch und lesbar bleiben.
> Die Django-Dokumentation empfiehlt, Informationen im Körper der URL zu codieren, um ein besseres URL-Design zu erreichen.

Wie im Überblick erwähnt, beschreibt der Rest dieses Artikels, wie die Indexseite erstellt wird.

## Erstellung der Indexseite

Die erste Seite, die wir erstellen, ist die Indexseite (`catalog/`). Die Indexseite enthält statisches HTML sowie generierte "Zählwerte" von verschiedenen Datensätzen in der Datenbank. Um dies zu ermöglichen, erstellen wir eine URL-Abbildung, eine Ansicht und ein Template.

> [!NOTE]
> Es lohnt sich, in diesem Abschnitt besonders aufmerksam zu sein. Die meisten Informationen gelten auch für die anderen Seiten, die wir erstellen werden.

### URL-Abbildung

Als wir die [Gerüst-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) erstellt haben, haben wir die Datei **locallibrary/urls.py** aktualisiert, um sicherzustellen, dass immer, wenn eine URL, die mit `catalog/` beginnt, empfangen wird, das _URLConf_-Modul `catalog.urls` den verbleibenden Teilstring verarbeitet.

Der folgende Codeausschnitt aus **locallibrary/urls.py** enthält das Modul `catalog.urls`:

```python
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Immer wenn Django auf die Importfunktion [`django.urls.include()`](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.include) stößt, wird der URL-String am festgelegten Endezeichen unterteilt und der verbleibende Teilstring an das eingeschlossene _URLConf_-Modul zur weiteren Verarbeitung gesendet.

Wir haben auch eine Platzhalterdatei für das _URLConf_-Modul erstellt, die den Namen **/catalog/urls.py** trägt.
Fügen Sie die folgenden Zeilen in diese Datei ein:

```python
urlpatterns = [
    path('', views.index, name='index'),
]
```

Die Funktion `path()` definiert Folgendes:

- Ein URL-Muster, das ein leerer String ist: `''`. Wir werden URL-Muster im Detail besprechen, wenn wir an den anderen Ansichten arbeiten.
- Eine Ansichtsfunktion, die aufgerufen wird, wenn das URL-Muster erkannt wird: `views.index`, die Funktion, die `index()` im **views.py**-Dateisystem genannt wird.

Die Funktion `path()` gibt auch einen Parameter `name` an, der ein eindeutiger Bezeichner für _diese_ besondere URL-Abbildung ist. Sie können den Namen verwenden, um die Zuordnung „umzukehren“, d.h. dynamisch eine URL zu erstellen, die auf die Ressource verweist, die die Abbildung verarbeiten soll.
Beispielsweise können wir den Name-Parameter verwenden, um von jeder anderen Seite auf unsere Startseite zu verlinken, indem wir den folgenden Link in einem Template hinzufügen:

```django
<a href="{% url 'index' %}">Home</a>.
```

> [!NOTE]
> Wir könnten den Link auch fest kodieren (z. B. `<a href="/catalog/">Startseite</a>`), aber wenn wir das Muster für unsere Startseite ändern, z. B. in `/catalog/index`, funktionieren die Templates nicht mehr korrekt. Die Verwendung einer umgekehrten URL-Abbildung ist robuster.

### Ansicht (funktionsbasiert)

Eine Ansicht ist eine Funktion, die eine HTTP-Anfrage verarbeitet, die erforderlichen Daten aus der Datenbank abruft, die Daten in einer HTML-Seite mit einem HTML-Template rendert und dann das generierte HTML in einer HTTP-Antwort zurückgibt, um die Seite dem Benutzer anzuzeigen. Die Indexansicht folgt diesem Modell – sie ruft Informationen über die Anzahl der `Book`-, `BookInstance`-, verfügbaren `BookInstance`- und `Author`-Einträge ab, die wir in der Datenbank haben, und übermittelt diese Informationen an ein Template zur Anzeige.

Öffnen Sie **catalog/views.py** und beachten Sie, dass die Datei bereits die [render()](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render)-Shortcut-Funktion importiert hat, um eine HTML-Datei mit einem Template und Daten zu generieren:

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

Die erste Zeile importiert die Modellklassen, die wir in allen unseren Ansichten verwenden, um auf Daten zuzugreifen.

Der erste Teil der Ansichtsfunktion ruft die Anzahl der Datensätze über das `objects.all()`-Attribut der Modellklassen ab. Es wird auch eine Liste von `BookInstance`-Objekten abgerufen, deren Statusfeld den Wert 'a' (Available – Verfügbar) enthält. Weitere Informationen zum Zugriff auf Modelldaten finden Sie in unserem vorherigen Tutorial [Django Tutorial Teil 3: Modelle verwenden > Datensätze durchsuchen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#searching_for_records).

Am Ende der Ansichtsfunktion rufen wir die Funktion `render()` auf, um eine HTML-Seite zu erstellen und die Seite als Antwort zurückzugeben. Diese Shortcut-Funktion fasst eine Reihe anderer Funktionen zusammen, um einen sehr gängigen Anwendungsfall zu vereinfachen. Die Funktion `render()` akzeptiert die folgenden Parameter:

- das ursprüngliche `request`-Objekt, ein `HttpRequest`.
- ein HTML-Template mit Platzhaltern für die Daten.
- eine `context`-Variable, die ein Python-Wörterbuch ist und die Daten enthält, die in die Platzhalter eingefügt werden sollen.

Wir werden mehr über Templates und die `context`-Variable im nächsten Abschnitt sprechen. Lassen Sie uns unser Template erstellen, damit wir tatsächlich dem Benutzer etwas anzeigen können!

### Template

Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei definiert (z. B. eine HTML-Seite). Es verwendet Platzhalter, um tatsächlichen Inhalt darzustellen.

Eine mit **startapp** erstellte Django-Anwendung (wie das Gerüst in diesem Beispiel) sucht nach Templates in einem Unterverzeichnis mit dem Namen '**templates**' Ihrer Anwendungen. Beispielsweise erwartet die `render()`-Funktion in der Indexansicht, die wir gerade hinzugefügt haben, die Datei **_index.html_** in **/django-locallibrary-tutorial/catalog/templates/** und löst einen Fehler aus, wenn die Datei nicht vorhanden ist.

Sie können dies überprüfen, indem Sie die vorherigen Änderungen speichern und in Ihrem Browser `127.0.0.1:8000` aufrufen – es wird eine ziemlich intuitive Fehlermeldung angezeigt: "TemplateDoesNotExist at /catalog/", zusammen mit weiteren Details.

> [!NOTE]
> Basierend auf der Konfigurationsdatei Ihres Projekts durchsucht Django eine Reihe von Orten nach Templates, standardmäßig auch Ihre installierten Anwendungen. Weitere Informationen darüber, wie Django Templates findet und welche Template-Formate unterstützt werden, finden Sie im [Abschnitt Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

#### Templates erweitern

Das Index-Template benötigt Standard-HTML-Markup für den `<head>` und `<body>`-Bereich sowie Navigationsabschnitte, um zu den anderen Seiten der Website (die wir noch nicht erstellt haben) und zu Abschnitten zu navigieren, die einleitende Texte und Buchdaten anzeigen.

Ein Großteil der HTML- und Navigationsstruktur wird auf jeder Seite unserer Website gleich sein. Anstatt Boilerplate-Code auf jeder Seite zu duplizieren, können Sie die Django-Template-Sprache nutzen, um ein Basistemplate zu deklarieren und dieses zu erweitern. Dabei ersetzen Sie nur die Teile, die sich für jede spezifische Seite unterscheiden.

Der folgende Codeausschnitt ist ein Beispiel-Basistemplate aus einer **base_generic.html**-Datei.
Wir erstellen das Template für LocalLibrary in Kürze.
Das folgende Beispiel enthält allgemeines HTML mit Abschnitten für einen `title`, eine `sidebar` und Haupinhalte (`content`), die mit den Template-Tags `block` und `endblock` markiert sind.
Sie können die Blöcke leer lassen oder Standardinhalte zum Rendern von Seiten hinzufügen, die vom Template abgeleitet werden.

> [!NOTE]
> Template-_Tags_ sind Funktionen, die Sie in einem Template verwenden können, um z. B. durch Listen zu iterieren oder bedingte Operationen basierend auf dem Wert einer Variablen auszuführen. Neben Template-Tags können Sie in der Template-Syntax auch Variablen referenzieren, die aus der Ansicht in das Template übergeben werden, sowie _Template-Filter_ verwenden, um Variablen zu formatieren (z. B. eine Zeichenkette in Kleinbuchstaben umzuwandeln).

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

Beim Definieren eines Templates für eine bestimmte Ansicht geben wir zunächst mit dem Tag `extends` das Basistemplate an – siehe den Beispielcode unten. Anschließend deklarieren wir, welche Abschnitte des Templates wir ersetzen möchten (falls vorhanden), wobei `block`/`endblock` Abschnitte wie im Basistemplate verwendet werden.

Der untenstehende Code zeigt beispielsweise, wie man das Tag `extends` verwendet und den Block `content` überschreibt. Das generierte HTML enthält den im Basistemplate definierten Code und die Struktur, einschließlich des Standardinhalts im Block `title`, ersetzt jedoch den Block `content` durch den neuen definierten Block.

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

Wir verwenden den folgenden Code als Basistemplate für die _LocalLibrary_-Website. Wie Sie sehen, enthält es etwas HTML-Code und definiert Blöcke für `title`, `sidebar` und `content`. Wir haben einen Standardtitel und eine Standardsidebar mit Links zu Listen aller Bücher und Autoren, beide in Blöcken eingeschlossen, um diese zukünftig leicht ändern zu können.

> [!NOTE]
> Wir führen auch zwei weitere Template-Tags ein: `url` und `load static`. Diese Tags werden in den folgenden Abschnitten erklärt.

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

Das Template verwendet CSS von [Bootstrap](https://getbootstrap.com/), um die Darstellung der HTML-Seite zu verbessern. Die Verwendung von Bootstrap (oder einem anderen clientseitigen Web-Framework) ist eine schnelle Möglichkeit, eine attraktive Seite zu erstellen, die auf verschiedenen Bildschirmgrößen gut dargestellt wird.

Das Basistemplate referenziert außerdem eine lokale CSS-Datei (**styles.css**), die zusätzliche Formatierungen bereitstellt. Erstellen Sie eine **styles.css**-Datei in **/django-locallibrary-tutorial/catalog/static/css/** und fügen Sie den folgenden Code in die Datei ein:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

#### Das Index-Template

Erstellen Sie eine neue HTML-Datei **index.html** in **/django-locallibrary-tutorial/catalog/templates/** und fügen Sie den folgenden Code in die Datei ein.
Dieser Code erweitert unser Basistemplate in der ersten Zeile und ersetzt dann den Standardblock `content` für das Template.

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

Im Abschnitt _Dynamischer Inhalt_ deklarieren wir Platzhalter (_Template-Variablen_) für die Informationen, die wir aus der Ansicht einfügen möchten.
Die Variablen werden in doppelte geschweifte Klammern eingeschlossen (Handlebars).

> [!NOTE]
> Sie können Template-Variablen und Template-Tags (Funktionen) leicht erkennen: Variablen sind in doppelten geschweiften Klammern eingeschlossen (`{{ num_books }}`), Tags hingegen in einfachen geschweiften Klammern mit Prozentzeichen (`{% extends "base_generic.html" %}`).

Das Wichtige hier ist, dass Variablen mit den _Keys_ benannt werden, die wir im `context`-Dictionary in der `render()`-Funktion der Ansicht übergeben (siehe Beispiel unten).
Variablen werden beim Rendern des Templates durch ihre zugehörigen _Values_ ersetzt.

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

Ihr Projekt wird wahrscheinlich statische Ressourcen verwenden, einschließlich JavaScript, CSS und Bilder. Da der Speicherort dieser Dateien möglicherweise nicht bekannt ist (oder sich ändern könnte), können Sie mit Django deren Speicherort relativ zu den globalen Einstellungen `STATIC_URL` in Ihren Templates angeben. Standardmäßig wird im Grundgerüst der Wert von `STATIC_URL` auf `"/static/"` gesetzt, aber Sie könnten diese Dateien auch in einem Content Delivery Network oder an einem anderen Ort hosten.

Innerhalb des Templates rufen Sie zunächst, wie im folgenden Codebeispiel gezeigt, das `load`-Template-Tag mit der Angabe "static" auf, um die Template-Bibliothek hinzuzufügen. Anschließend können Sie das `static`-Template-Tag verwenden und die relative URL zur benötigten Datei angeben.

```django
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sie können ein Bild auf ähnliche Weise in die Seite einfügen, zum Beispiel:

```django
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

> [!NOTE]
> Die obigen Beispiele geben an, wo die Dateien gespeichert sind, aber Django stellt sie standardmäßig nicht bereit. Wir haben den Entwicklungs-Webserver konfiguriert, um Dateien bereitzustellen, indem wir die globale URL-Mapping-Datei (**/django-locallibrary-tutorial/locallibrary/urls.py**) geändert haben, als wir die [Website-Grundstruktur erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website), aber in der Produktionsumgebung muss die Bereitstellung noch aktiviert werden. Dies werden wir später behandeln.

Weitere Informationen zur Arbeit mit statischen Dateien finden Sie im Abschnitt [Management statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) in der Django-Dokumentation.

#### Verlinken von URLs

Das oben eingeführte Basistemplate beinhaltet das `url`-Template-Tag.

```django
<li><a href="{% url 'index' %}">Home</a></li>
```

Dieses Tag akzeptiert den Namen einer `path()`-Funktion in Ihrer Datei **urls.py** und die Werte für alle Argumente, die die zugehörige Ansicht von dieser Funktion erhält, und gibt eine URL zurück, die Sie verwenden können, um auf die Ressource zu verlinken.

#### Konfiguration der Template-Suchpfade

Der Ort, an dem Django nach Templates sucht, wird im `TEMPLATES`-Objekt der Datei **settings.py** angegeben.
Die Standardeinstellung von **settings.py** (wie sie in diesem Tutorial erstellt wurde) sieht etwa so aus:

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

Die Einstellung `'APP_DIRS': True` ist die wichtigste, da sie Django anweist, in einem Unterverzeichnis mit dem Namen "templates" in jeder Anwendung des Projekts nach Templates zu suchen (dies erleichtert die Gruppierung von Templates mit ihrer zugehörigen Anwendung zur einfachen Wiederverwendung).

Wir können auch bestimmte Orte angeben, an denen Django nach Verzeichnissen suchen soll, indem wir `'DIRS': []` verwenden (aber das ist bisher nicht notwendig).

> [!NOTE]
> Weitere Informationen darüber, wie Django nach Templates sucht und welche Template-Formate unterstützt werden, finden Sie im [Abschnitt Templates in der Django-Dokumentation](https://docs.djangoproject.com/en/5.0/topics/templates/).

## Wie sieht das aus?

Zu diesem Zeitpunkt haben wir alle Ressourcen erstellt, die für die Anzeige der Indexseite erforderlich sind. Führen Sie den Server aus (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser. Wenn alles korrekt konfiguriert ist, sollte Ihre Website wie auf dem folgenden Screenshot aussehen:

![Index-Seite der LocalLibrary-Website](index_page_ok.png)

> [!NOTE]
> Die Links **Alle Bücher** und **Alle Autoren** funktionieren noch nicht, da die Pfade, Ansichten und Templates für diese Seiten noch nicht definiert sind. Wir haben diese Links lediglich als Platzhalter in das Basistemplate `base_generic.html` eingefügt.

## Testen Sie Ihr Wissen

Hier sind ein paar Aufgaben, um Ihre Vertrautheit mit Modellabfragen, Ansichten und Templates zu testen.

1. Das LocalLibrary-[Basistemplate](#das_locallibrary-basistemplate) enthält einen `title`-Block. Überschreiben Sie diesen Block im [Index-Template](#das_index-template) und erstellen Sie einen neuen Titel für die Seite.

   > [!NOTE]
   > Der Abschnitt [Templates erweitern](#templates_erweitern) erklärt, wie Blöcke erstellt und in einem anderen Template erweitert werden können.

2. Ändern Sie die [Ansicht](#view_function-based), um Zählwerte für _Genres_ und _Bücher_, die ein bestimmtes Wort enthalten (Groß-/Kleinschreibung wird ignoriert), zu erzeugen, und übergeben Sie die Ergebnisse an den `context`. Sie können dies ähnlich wie mit `num_books` und `num_instances_available` implementieren. Aktualisieren Sie dann das [Index-Template](#das_index-template), um diese Variablen einzubeziehen.

## Zusammenfassung

Wir haben gerade die Startseite für unsere Website erstellt – eine HTML-Seite, die eine Anzahl von Datensätzen aus der Datenbank anzeigt und zu weiteren noch zu erstellenden Seiten verlinkt. Auf dem Weg dorthin haben wir grundlegende Informationen über URL-Abbildungen, Ansichten, Datenbankabfragen mit Modellen, die Übertragung von Informationen von einer Ansicht an ein Template sowie das Erstellen und Erweitern von Templates gelernt.

Im nächsten Artikel bauen wir auf diesem Wissen auf, um die verbleibenden vier Seiten unserer Website zu erstellen.

## Siehe auch

- [Erstellen Ihrer ersten Django-App, Teil 3: Ansichten und Templates](https://docs.djangoproject.com/en/5.0/intro/tutorial03/) (Django-Dokumentation)
- [URL-Dispatcher](https://docs.djangoproject.com/en/5.0/topics/http/urls/) (Django-Dokumentation)
- [Ansichtsfunktionen](https://docs.djangoproject.com/en/5.0/topics/http/views/) (Django-Dokumentation)
- [Templates](https://docs.djangoproject.com/en/5.0/topics/templates/) (Django-Dokumentation)
- [Verwaltung statischer Dateien](https://docs.djangoproject.com/en/5.0/howto/static-files/) (Django-Dokumentation)
- [Django-Shortcut-Funktionen](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#django.shortcuts.render) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django")}}
