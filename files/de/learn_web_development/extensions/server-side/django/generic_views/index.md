---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
short-title: "6: Generische Listen- und Detailansichten"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial erweitern wir unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website um Listen- und Detailseiten für Bücher und Autoren. Sie lernen generische klassenbasierte Ansichten kennen und erfahren, wie diese den Codeumfang für häufige Anwendungsfälle verringern können. Außerdem betrachten wir die Verarbeitung von URLs genauer und zeigen, wie Sie einfache Mustervergleiche durchführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Teile des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page">Django-Tutorial Teil 5: Unsere Startseite erstellen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wo und wie generische klassenbasierte Ansichten verwendet werden und wie sich Muster aus URLs extrahieren und die Informationen an Ansichten übergeben lassen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In diesem Tutorial vervollständigen wir die erste Version der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen. Genauer gesagt zeigen wir Ihnen, wie Sie die Buchseiten implementieren; die Autorenseiten erstellen Sie anschließend selbst.

Das Vorgehen ähnelt der Erstellung der Indexseite, die wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Zuordnungen, Ansichten und Templates erstellen. Bei den Detailseiten kommt die zusätzliche Herausforderung hinzu, Informationen aus Mustern in der URL zu extrahieren und an die Ansicht zu übergeben. Für diese Seiten stellen wir eine andere Art von Ansicht vor: generische klassenbasierte Listen- und Detailansichten. Sie können den erforderlichen Code für Ansichten erheblich reduzieren und diese dadurch leichter zu schreiben und zu warten machen.

Im letzten Teil des Tutorials zeigen wir, wie Sie Daten bei der Verwendung generischer klassenbasierter Listenansichten paginieren.

## Buchlistenseite

Die Buchlistenseite zeigt eine Liste aller verfügbaren Bucheinträge an und ist unter der URL `catalog/books/` erreichbar. Für jeden Eintrag werden Titel und Autor angezeigt; der Titel ist ein Link zur zugehörigen Buchdetailseite. Die Seite hat dieselbe Struktur und Navigation wie die übrigen Seiten der Website. Deshalb können wir das im vorherigen Tutorial erstellte Basis-Template (**base_generic.html**) erweitern.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie die Zeile hinzu, die den Pfad für `'books/'` festlegt, wie unten gezeigt.
Wie bei der Indexseite definiert diese `path()`-Funktion ein Muster für den Abgleich mit der URL (**'books/'**), eine Ansichtsfunktion, die bei einer Übereinstimmung aufgerufen wird (`views.BookListView.as_view()`), und einen Namen für diese Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial erläutert, muss die URL bereits mit `/catalog` übereinstimmen. Die Ansicht wird daher tatsächlich für die URL `/catalog/books/` aufgerufen.

Die Ansichtsfunktion hat ein anderes Format als zuvor, weil diese Ansicht als Klasse implementiert wird. Statt eine eigene Ansichtsfunktion von Grund auf zu schreiben, erben wir von einer vorhandenen generischen Ansicht, die bereits den Großteil der gewünschten Funktionalität bereitstellt.

Bei klassenbasierten Ansichten in Django erhalten wir die passende Ansichtsfunktion durch Aufrufen der Klassenmethode `as_view()`. Sie erstellt eine Instanz der Klasse und sorgt dafür, dass für eingehende HTTP-Anfragen die richtigen Handler-Methoden aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht als normale Funktion schreiben, ähnlich unserer bisherigen Indexansicht. Diese würde alle Bücher aus der Datenbank abfragen und anschließend `render()` aufrufen, um die Liste an ein bestimmtes Template zu übergeben. Stattdessen verwenden wir eine generische klassenbasierte Listenansicht (`ListView`) – eine Klasse, die von einer vorhandenen Ansicht erbt. Da die generische Ansicht bereits den Großteil der benötigten Funktionalität implementiert und den bewährten Vorgehensweisen von Django folgt, können wir mit weniger Code und Wiederholungen eine robustere Listenansicht erstellen, die sich letztlich leichter warten lässt.

Öffnen Sie **catalog/views.py** und fügen Sie den folgenden Code am Ende der Datei ein:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das ist alles! Die generische Ansicht fragt die Datenbank nach allen Einträgen des angegebenen Modells (`Book`) ab und rendert anschließend das Template unter **/catalog/templates/catalog/book_list.html** (das wir gleich erstellen). Im Template können Sie über die Template-Variable `object_list` ODER `book_list` auf die Buchliste zugreifen (allgemein: `<the model name>_list`).

> [!NOTE]
> Dieser etwas umständliche Pfad zum Template ist kein Druckfehler: Generische Ansichten suchen im Verzeichnis `/application_name/templates/` der Anwendung (`/catalog/templates/`) nach Templates unter `/application_name/the_model_name_list.html` (hier `catalog/book_list.html`).

Sie können Attribute hinzufügen, um das oben beschriebene Standardverhalten zu ändern. Beispielsweise können Sie eine andere Template-Datei angeben, wenn mehrere Ansichten dasselbe Modell verwenden. Sie können auch einen anderen Namen für die Template-Variable wählen, falls `book_list` für Ihr Template nicht intuitiv ist. Besonders nützlich ist es, die zurückgegebenen Ergebnisse zu ändern oder zu filtern: Statt alle Bücher aufzulisten, könnten Sie beispielsweise die fünf meistgelesenen Bücher anderer Nutzer anzeigen.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methoden in klassenbasierten Ansichten überschreiben

Auch wenn es hier nicht nötig ist, können Sie einige Klassenmethoden überschreiben.

Beispielsweise können wir `get_queryset()` überschreiben, um die Liste der zurückgegebenen Einträge zu ändern. Das ist flexibler, als nur das Attribut `queryset` zu setzen, wie im vorherigen Codeausschnitt. In diesem Fall bringt es allerdings keinen wirklichen Vorteil:

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an das Template zu übergeben. Die Buchliste wird beispielsweise standardmäßig übergeben. Der folgende Ausschnitt zeigt, wie dem Kontext eine Variable namens `some_data` hinzugefügt wird, die anschließend als Template-Variable verfügbar ist.

```python
class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get the context
        context = super().get_context_data(**kwargs)
        # Create any data and add it to the context
        context['some_data'] = 'This is just some data'
        return context
```

Dabei ist es wichtig, dem oben gezeigten Muster zu folgen:

- Rufen Sie zuerst den vorhandenen Kontext aus der Oberklasse ab.
- Fügen Sie dann Ihre neuen Kontextinformationen hinzu.
- Geben Sie schließlich den aktualisierten Kontext zurück.

> [!NOTE]
> Unter [Integrierte generische klassenbasierte Ansichten](https://docs.djangoproject.com/en/6.1/topics/class-based-views/generic-display/) (Django-Dokumentation) finden Sie viele weitere Beispiele für die Möglichkeiten.

### Template für die Listenansicht erstellen

Erstellen Sie die HTML-Datei **/catalog/templates/catalog/book_list.html** und fügen Sie den folgenden Text ein. Wie oben beschrieben, ist dies die Template-Datei, die die generische klassenbasierte Listenansicht standardmäßig erwartet (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Templates für generische Ansichten funktionieren wie alle anderen Templates, auch wenn sich der an das Template übergebene Kontext beziehungsweise dessen Informationen unterscheiden können.
Wie bei unserem _Index_-Template erweitern wir in der ersten Zeile das Basis-Template und ersetzen anschließend den Block namens `content`.

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Book List</h1>
  {% if book_list %}
    <ul>
      {% for book in book_list %}
      <li>
        <a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a>
        (\{{book.author}})
      </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>There are no books in the library.</p>
  {% endif %}
{% endblock %}
```

Die Ansicht übergibt den Kontext (die Buchliste) standardmäßig unter den beiden Aliasnamen `object_list` und `book_list`; beide funktionieren.

#### Bedingte Ausführung

Wir verwenden die Template-Tags [`if`](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/#if), `else` und `endif`, um zu prüfen, ob `book_list` definiert und nicht leer ist.
Wenn `book_list` leer ist, zeigt der `else`-Zweig einen Text an, der erklärt, dass keine Bücher aufgelistet werden können.
Ist `book_list` nicht leer, durchlaufen wir die Buchliste.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die obige Bedingung prüft nur einen Fall. Mit dem Template-Tag `elif` können Sie jedoch weitere Bedingungen prüfen, beispielsweise `{% elif var2 %}`.
Weitere Informationen zu bedingten Operatoren finden Sie unter [if](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/#if) und [ifchanged](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/#ifchanged) in [Integrierte Template-Tags und Filter](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/) (Django-Dokumentation).

#### For-Schleifen

Das Template verwendet die Template-Tags [for](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/#for) und `endfor`, um die Buchliste wie unten gezeigt zu durchlaufen.
Bei jedem Durchlauf wird die Template-Variable `book` mit den Informationen zum aktuellen Listeneintrag belegt.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie können auch mit dem Template-Tag `{% empty %}` festlegen, was bei einer leeren Buchliste geschehen soll. Unser Template verwendet dafür allerdings eine Bedingung:

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Django erstellt innerhalb der Schleife außerdem weitere Variablen, mit denen Sie die Durchläufe verfolgen können. Diese werden hier nicht verwendet.
Beispielsweise können Sie anhand der Variable `forloop.last` beim letzten Schleifendurchlauf eine bedingte Verarbeitung ausführen.

#### Auf Variablen zugreifen

Der Code innerhalb der Schleife erstellt für jedes Buch einen Listeneintrag, der sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Auf die _Felder_ des zugehörigen Bucheintrags greifen wir mit der „Punktnotation“ zu, etwa `book.title` und `book.author`. Der Text nach `book` ist dabei der im Modell definierte Feldname.

Wir können aus dem Template heraus auch _Funktionen_ des Modells aufrufen. Hier rufen wir `Book.get_absolute_url()` auf, um eine URL für die Anzeige des zugehörigen Detaileintrags zu erhalten. Das funktioniert, sofern die Funktion keine Argumente benötigt – Argumente lassen sich nicht übergeben!

> [!NOTE]
> Beim Aufrufen von Funktionen in Templates müssen wir auf „Nebenwirkungen“ achten. Hier rufen wir lediglich eine URL für die Anzeige ab. Eine Funktion kann aber praktisch alles tun – wir möchten beispielsweise nicht allein durch das Rendern unseres Templates die Datenbank löschen!

#### Basis-Template aktualisieren

Öffnen Sie das Basis-Template (**/catalog/templates/base_generic.html**) und fügen Sie **{% url 'books' %}** wie unten gezeigt in den URL-Link für **Alle Bücher** ein. Dadurch funktioniert der Link auf allen Seiten. Da wir die URL-Zuordnung für „books“ erstellt haben, können wir ihn jetzt einfügen.

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht das aus?

Sie können die Buchliste noch nicht anzeigen, da eine Abhängigkeit fehlt: die URL-Zuordnung für die Buchdetailseiten, die für Links zu einzelnen Büchern benötigt wird. Nach dem nächsten Abschnitt zeigen wir sowohl die Listen- als auch die Detailansicht.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen zu einem bestimmten Buch an und ist unter der URL `catalog/book/<id>` erreichbar, wobei `<id>` der Primärschlüssel des Buchs ist. Zusätzlich zu den Feldern des Modells `Book` (Autor, Zusammenfassung, ISBN, Sprache und Genre) listen wir auch Details zu den verfügbaren Exemplaren (`BookInstances`) auf: Status, voraussichtliches Rückgabedatum, Impressum und ID. So können Leser nicht nur mehr über das Buch erfahren, sondern auch prüfen, ob beziehungsweise wann es verfügbar ist.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad namens '**book-detail**' hinzu.
Diese `path()`-Funktion definiert ein Muster, die zugehörige generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den Pfad _book-detail_ verwendet das URL-Muster eine spezielle Syntax, um die ID des Buchs zu erfassen, das wir anzeigen möchten.
Die Syntax ist einfach: Spitze Klammern kennzeichnen den Teil der URL, der erfasst werden soll. Darin steht der Name der Variable, über die die Ansicht auf die erfassten Daten zugreifen kann.
Beispielsweise erfasst **\<something>** den gekennzeichneten Teil und übergibt dessen Wert als Variable „something“ an die Ansicht. Optional können Sie dem Variablennamen eine [Konverterangabe](https://docs.djangoproject.com/en/6.1/topics/http/urls/#path-converters) voranstellen, die den Datentyp festlegt (int, str, slug, uuid, path).

Hier verwenden wir `'<int:pk>'`, um die Buch-ID als Ganzzahl zu erfassen und sie als Parameter namens `pk` (kurz für „primary key“, also Primärschlüssel) an die Ansicht zu übergeben. Diese ID dient dazu, das Buch eindeutig in der Datenbank zu speichern, wie im Modell `Book` festgelegt.

> [!NOTE]
> Wie bereits erläutert, stimmt unser Muster tatsächlich mit einer URL der Form `catalog/book/<digits>` überein (da wir uns in der Anwendung **catalog** befinden, wird `/catalog/` vorausgesetzt).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_ einen Parameter namens **pk**. Wenn Sie eine eigene Ansichtsfunktion schreiben, können Sie einen beliebigen Parameternamen verwenden oder die Information als unbenanntes Argument übergeben.

#### Fortgeschrittener Pfadabgleich und Einführung in reguläre Ausdrücke

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir stellen ihn bereit, weil diese Möglichkeit bei Ihrer weiteren Arbeit mit Django nützlich sein dürfte.

Der von `path()` bereitgestellte Musterabgleich ist einfach und für die sehr häufigen Fälle nützlich, in denen Sie lediglich _irgendeine_ Zeichenfolge oder Ganzzahl erfassen möchten. Wenn Sie genauer filtern müssen, etwa nur Zeichenfolgen mit einer bestimmten Anzahl von Zeichen zulassen möchten, können Sie die Methode [re_path()](https://docs.djangoproject.com/en/6.1/ref/urls/#django.urls.re_path) verwenden.

Diese Methode wird wie `path()` verwendet, erlaubt aber die Angabe eines Musters mithilfe eines [regulären Ausdrucks](https://docs.python.org/3/library/re.html). Der vorherige Pfad könnte beispielsweise so geschrieben werden:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein äußerst mächtiges Werkzeug für den Musterabgleich. Offen gesagt sind sie nicht besonders intuitiv und können auf Anfänger einschüchternd wirken. Deshalb folgt eine sehr kurze Einführung!

Zunächst sollten Sie wissen, dass reguläre Ausdrücke normalerweise mit der Syntax für unverarbeitete Zeichenfolgenliterale („raw strings“) deklariert werden sollten, also wie hier gezeigt eingeschlossen sind: **r'\<your regular expression text goes here>'**.

Die wichtigsten Syntaxbestandteile, die Sie zum Definieren der Muster kennen sollten, sind:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Symbol</th>
      <th scope="col">Bedeutung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>^</td>
      <td>Entspricht dem Anfang des Texts</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Entspricht dem Ende des Texts</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Entspricht einer Ziffer (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Entspricht einem Wortzeichen, beispielsweise einem Groß- oder
        Kleinbuchstaben des Alphabets, einer Ziffer oder einem Unterstrich (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Entspricht einem oder mehreren Vorkommen des vorangehenden Zeichens.
        Für eine oder mehrere Ziffern verwenden Sie beispielsweise
        <code>\d+</code>. Für ein oder mehrere „a“ verwenden Sie
        <code>a+</code>.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Entspricht null oder mehreren Vorkommen des vorangehenden Zeichens.
        Um beispielsweise kein Zeichen oder ein Wort zu erfassen, können Sie
        <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Erfasst den Teil des Musters innerhalb der Klammern. Alle erfassten Werte
        werden der Ansicht als unbenannte Parameter übergeben. Werden mehrere
        Muster erfasst, werden die zugehörigen Parameter in der Reihenfolge
        übergeben, in der die Erfassungen definiert wurden.
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfasst das durch ... gekennzeichnete Muster als benannte Variable
        (hier „name“). Die erfassten Werte werden der Ansicht unter dem
        angegebenen Namen übergeben. Ihre Ansicht muss daher einen Parameter
        mit demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Entspricht einem Zeichen aus der angegebenen Menge. Beispielsweise
        entspricht [abc] einem 'a', 'b' oder 'c'. [-\w] entspricht einem
        Bindestrich '-' oder einem beliebigen Wortzeichen.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können wörtlich genommen werden!

Betrachten wir einige konkrete Beispiele für Muster:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Muster</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>r'^book/(?P&#x3C;pk>\d+)$'</strong></td>
      <td>
        <p>
          Dies ist der reguläre Ausdruck aus unserer URL-Zuordnung. Er entspricht
          einer Zeichenfolge, die am Zeilenanfang mit <code>book/</code> beginnt
          (<strong>^book/</strong>), danach eine oder mehrere Ziffern enthält
          (<code>\d+</code>) und anschließend endet (ohne andere Zeichen vor
          dem Zeilenende).
        </p>
        <p>
          Außerdem erfasst er alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und
          übergibt sie der Ansicht als Parameter namens 'pk'.
          <strong>Erfasste Werte werden immer als Zeichenfolge übergeben!</strong>
        </p>
        <p>
          Beispielsweise entspricht <code>book/1234</code> diesem Muster; die
          Variable <code>pk='1234'</code> wird an die Ansicht übergeben.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dieses Muster entspricht denselben URLs wie das vorherige. Die erfasste
        Information würde als unbenanntes Argument an die Ansicht übergeben.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dieses Muster entspricht einer Zeichenfolge, die am Zeilenanfang mit
          <code>book/</code> beginnt (<strong>^book/</strong>), danach ein oder
          mehrere Zeichen enthält, die <em>entweder</em> ein Bindestrich oder
          ein Wortzeichen sind (<strong>[-\w]+</strong>), und anschließend
          endet. Es erfasst diese Zeichen außerdem und übergibt sie der
          Ansicht als Parameter namens 'stub'.
        </p>
        <p>
          Dies ist ein recht typisches Muster für einen „Stub“. Stubs sind
          URL-freundliche, wortbasierte Primärschlüssel für Daten. Sie könnten
          einen Stub verwenden, wenn die URL eines Buchs aussagekräftiger sein
          soll, beispielsweise <code>/catalog/book/the-secret-garden</code>
          statt <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können in einem einzigen Abgleich mehrere Muster erfassen und so viele verschiedene Informationen in einer URL kodieren.

> [!NOTE]
> Überlegen Sie als Übung, wie Sie eine URL gestalten könnten, um alle Bücher aufzulisten, die in einem bestimmten Jahr, Monat und an einem bestimmten Tag erschienen sind, und welcher reguläre Ausdruck dazu passen würde.

#### Zusätzliche Optionen in URL-Zuordnungen übergeben

Eine hier noch nicht verwendete, aber möglicherweise nützliche Möglichkeit besteht darin, der Ansicht ein [Dictionary mit zusätzlichen Optionen](https://docs.djangoproject.com/en/6.1/topics/http/urls/#views-extra-options) zu übergeben (als drittes unbenanntes Argument der Funktion `path()`). Das kann hilfreich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden und ihr jeweils Daten zur Konfiguration ihres Verhaltens übergeben möchten.

Beim unten gezeigten Pfad ruft Django für eine Anfrage an `/my-url/halibut/` beispielsweise `views.my_view(request, fish='halibut', my_template_name='some_path')` auf.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Dictionary-Optionen werden der Ansicht als _benannte_ Argumente übergeben. Verwenden Sie für ein erfasstes Muster und einen Dictionary-Schlüssel **denselben Namen**, hat die Dictionary-Option Vorrang.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und fügen Sie den folgenden Code am Ende der Datei ein:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das ist alles! Nun müssen Sie nur noch ein Template namens **/catalog/templates/catalog/book_detail.html** erstellen. Die Ansicht übergibt ihm die Datenbankinformationen für den jeweiligen `Book`-Eintrag, den die URL-Zuordnung bestimmt hat. Im Template können Sie über die Template-Variable `object` ODER `book` auf die Buchdetails zugreifen (allgemein: `the_model_name`).

Bei Bedarf können Sie das verwendete Template und den Namen des Kontextobjekts ändern, über das im Template auf das Buch zugegriffen wird. Außerdem können Sie Methoden überschreiben, um beispielsweise zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Eintrag nicht existiert?

Wenn ein angeforderter Eintrag nicht existiert, löst die generische klassenbasierte Detailansicht automatisch eine `Http404`-Exception aus. In der Produktionsumgebung wird dadurch automatisch eine passende „Ressource nicht gefunden“-Seite angezeigt, die Sie bei Bedarf anpassen können.

Damit Sie eine Vorstellung davon bekommen, wie das funktioniert, zeigt der folgende Codeausschnitt, wie Sie die Ansicht als Funktion implementieren würden, wenn Sie **nicht** die generische klassenbasierte Detailansicht verwenden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zuerst, den betreffenden Bucheintrag aus dem Modell abzurufen. Schlägt dies fehl, sollte sie eine `Http404`-Exception auslösen, um anzuzeigen, dass das Buch nicht gefunden wurde. Anschließend wird wie üblich `render()` mit dem Templatenamen und den Buchdaten im Parameter `context` (als Dictionary) aufgerufen.

Wenn Sie keine generische Ansicht verwenden, können Sie alternativ die Funktion `get_object_or_404()` aufrufen.
Sie ist eine Kurzform, um eine `Http404`-Exception auszulösen, wenn der Eintrag nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Template für die Detailansicht erstellen

Erstellen Sie die HTML-Datei **/catalog/templates/catalog/book_detail.html** mit dem folgenden Inhalt. Wie oben beschrieben, ist dies der Dateiname, den die generische klassenbasierte _Detailansicht_ standardmäßig als Template erwartet (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Title: \{{ book.title }}</h1>

  <p><strong>Author:</strong> <a href="">\{{ book.author }}</a></p>
  <!-- author detail link not yet defined -->
  <p><strong>Summary:</strong> \{{ book.summary }}</p>
  <p><strong>ISBN:</strong> \{{ book.isbn }}</p>
  <p><strong>Language:</strong> \{{ book.language }}</p>
  <p><strong>Genre:</strong> \{{ book.genre.all|join:", " }}</p>

  <div class="ms-4 mt-4">
    <h4>Copies</h4>

    {% for copy in book.bookinstance_set.all %}
      <hr />
      <p
        class="{% if copy.status == copy.LoanStatus.AVAILABLE %}text-success{% elif copy.status == copy.LoanStatus.MAINTENANCE %}text-danger{% else %}text-warning{% endif %}">
        \{{ copy.get_status_display }}
      </p>
      {% if copy.status != copy.LoanStatus.AVAILABLE %}
        <p><strong>Due to be returned:</strong> \{{ copy.due_back }}</p>
      {% endif %}
      <p><strong>Imprint:</strong> \{{ copy.imprint }}</p>
      <p class="text-muted"><strong>Id:</strong> \{{ copy.id }}</p>
    {% endfor %}
  </div>
{% endblock %}
```

> [!NOTE]
> Der Autorenlink im obigen Template hat eine leere URL, weil wir noch keine Autorendetailseite erstellt haben, auf die er verweisen könnte.
> Sobald die Detailseite existiert, können wir ihre URL auf eine der beiden folgenden Arten abrufen:
>
> - Verwenden Sie das Template-Tag `url`, um die in der URL-Zuordnung definierte URL 'author-detail' aufzulösen, und übergeben Sie ihm die Autoreninstanz des Buchs:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die Methode `get_absolute_url()` des Autorenmodells auf (sie führt dieselbe Auflösung durch):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Beide Methoden bewirken im Wesentlichen dasselbe. `get_absolute_url()` wird jedoch bevorzugt, weil Sie damit konsistenteren und leichter wartbaren Code schreiben können: Änderungen sind nur an einer Stelle nötig, nämlich im Autorenmodell.

Obwohl dieses Template etwas länger ist, haben wir fast alles darin bereits beschrieben:

- Wir erweitern unser Basis-Template und überschreiben den Block „content“.
- Wir verwenden Bedingungen, um festzulegen, ob bestimmte Inhalte angezeigt werden.
- Wir durchlaufen Objektlisten mit `for`-Schleifen.
- Wir greifen über die Punktnotation auf Kontextfelder zu. Da wir die generische Detailansicht verwenden, heißt das Kontextobjekt `book`; wir könnten auch `object` verwenden.

Die erste neue und interessante Funktion ist `book.bookinstance_set.all()`. Django erzeugt diese Methode automatisch, damit sie die Menge der `BookInstance`-Einträge zurückgibt, die einem bestimmten `Book` zugeordnet sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist nötig, weil Sie ein `ForeignKey`-Feld für eine Eins-zu-viele-Beziehung nur auf der „Viele“-Seite der Beziehung deklarieren (bei `BookInstance`). Da Sie im anderen Modell, auf der „Eins“-Seite, nichts zur Deklaration der Beziehung tun, besitzt dieses Modell (`Book`) kein Feld, über das sich die zugehörigen Einträge abrufen lassen. Um dieses Problem zu lösen, erstellt Django eine passend benannte Funktion für die umgekehrte Abfrage, die Sie verwenden können. Ihr Name setzt sich aus dem kleingeschriebenen Namen des Modells, in dem der `ForeignKey` deklariert wurde, und dem Suffix `_set` zusammen. Die in `Book` erstellte Funktion heißt also `bookinstance_set()`.

> [!NOTE]
> Hier verwenden wir `all()`, um alle Einträge abzurufen (die Standardeinstellung). Im Code können Sie mit der Methode `filter()` eine Teilmenge der Einträge abrufen. Direkt in Templates ist das jedoch nicht möglich, weil Sie Funktionen dort keine Argumente übergeben können.

Die zweite interessante und weniger offensichtliche Stelle im Template ist die Anzeige des Statustexts für jedes Buchexemplar („available“, „maintenance“ usw.).
Aufmerksame Leser werden bemerken, dass die Methode `BookInstance.get_status_display()`, mit der wir den Statustext abrufen, an keiner anderen Stelle im Code auftaucht.

```django
 <p class="{% if copy.status == copy.LoanStatus.AVAILABLE %}text-success{% elif copy.status == copy.LoanStatus.MAINTENANCE %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [Feld mit Auswahlmöglichkeiten](https://docs.djangoproject.com/en/6.1/ref/models/fields/#choices) ist.
Django erstellt für jedes Feld `foo` mit Auswahlmöglichkeiten in einem Modell automatisch eine Methode `get_foo_display()`, mit der sich der aktuelle Anzeigewert des Felds abrufen lässt.

> [!NOTE]
> `copy.LoanStatus` verweist auf die Klasse `LoanStatus`, die wir für `BookInstance` definiert haben (siehe [Django-Tutorial Teil 3: Modelle verwenden](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)). Daher entspricht `copy.LoanStatus.AVAILABLE` dem gespeicherten Code `'a'`.
> Der Vergleich mit dem benannten Klassenmitglied statt mit dem Rohcode macht das Template leichter lesbar.
> Djangos `TextChoices`-Klassen sind dafür ausgelegt, auf diese Weise aus Templates referenziert zu werden.

## Wie sieht das aus?

Jetzt sollten wir alles erstellt haben, was zur Anzeige der Buchlisten- und Buchdetailseiten nötig ist. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser.

> [!WARNING]
> Klicken Sie noch nicht auf Autorenlinks oder Links zu Autorendetailseiten – diese erstellen Sie erst in der Übung!

Klicken Sie auf **Alle Bücher**, um die Buchliste anzuzeigen.

![Buchlistenseite](book_list_page_no_pagination.png)

Klicken Sie anschließend auf den Link zu einem Ihrer Bücher. Wenn alles richtig eingerichtet ist, sollten Sie etwas Ähnliches wie im folgenden Screenshot sehen.

![Buchdetailseite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur wenige Einträge haben, sieht unsere Buchlistenseite gut aus. Bei mehreren Dutzend oder Hunderten von Einträgen dauert das Laden der Seite jedoch zunehmend länger, und sie enthält viel zu viele Inhalte, um sie sinnvoll durchzusehen. Die Lösung besteht darin, die Listenansichten zu paginieren und so die Anzahl der pro Seite angezeigten Einträge zu reduzieren.

Django bietet eine hervorragende integrierte Unterstützung für die Paginierung. Noch besser: Sie ist bereits in generische klassenbasierte Listenansichten eingebaut, sodass Sie nur wenig tun müssen, um sie zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die unten gezeigte Zeile mit `paginate_by` hinzu.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Sobald mehr als 10 Einträge vorhanden sind, paginiert die Ansicht damit die Daten, die sie an das Template sendet.
Die einzelnen Seiten sind über GET-Parameter erreichbar. Für Seite 2 verwenden Sie beispielsweise die URL `/catalog/books/?page=2`.

> [!NOTE]
> Die Paginierung funktioniert nur zuverlässig, wenn die Einträge in einer gleichbleibenden Reihenfolge zurückgegeben werden.
> Wenn Sie eine Listenansicht für ein Modell ohne Standardsortierung paginieren, zeigt der Entwicklungsserver eine Warnung wie diese an:
>
> ```plain
> /foo/local_library/venv/lib/python3.12/site-packages/django/views/generic/list.py:91: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <class 'catalog.models.Book'> QuerySet.
>   return self.paginator_class(
> ```
>
> Für Bücher oder Autoren sehen Sie diese Warnung nicht, weil wir bei der [Definition der Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models) für beide eine `ordering`-Angabe in `class Meta` festgelegt haben.
> Bei einem Modell ohne Standardsortierung können Sie entweder `ordering` zu seiner `class Meta` hinzufügen oder ein `ordering`-Attribut direkt in der Listenansicht setzen, beispielsweise `ordering = ['title']`.
> Wählen Sie in beiden Fällen ein Feld mit Datenbankindex für die Sortierung – unabhängig davon, ob es eindeutig ist –, um Leistungsprobleme zu vermeiden.
> Bei so wenigen Büchern spielt das keine Rolle, für künftige Projekte sollten Sie es jedoch im Hinterkopf behalten.

### Templates

Da die Daten nun paginiert sind, müssen wir dem Template eine Möglichkeit hinzufügen, durch die Ergebnisseiten zu navigieren. Weil wir möglicherweise alle Listenansichten paginieren möchten, fügen wir diese Funktion dem Basis-Template hinzu.

Öffnen Sie **/catalog/templates/base_generic.html** und suchen Sie den „content“-Block (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Fügen Sie direkt nach `{% endblock %}` den folgenden Paginierungsblock ein. Der Code prüft zunächst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Falls ja, fügt er passende Links zur _nächsten_ und _vorherigen_ Seite sowie die aktuelle Seitennummer hinzu.

```django
{% block pagination %}
    {% if is_paginated %}
        <div class="pagination">
            <span class="page-links">
                {% if page_obj.has_previous %}
                    <a href="{% querystring page=page_obj.previous_page_number %}">previous</a>
                {% endif %}
                <span class="page-current">
                    Page \{{ page_obj.number }} of \{{ page_obj.paginator.num_pages }}.
                </span>
                {% if page_obj.has_next %}
                    <a href="{% querystring page=page_obj.next_page_number %}">next</a>
                {% endif %}
            </span>
        </div>
    {% endif %}
  {% endblock %}
```

`page_obj` ist ein [Page](https://docs.djangoproject.com/en/6.1/ref/paginator/#django.core.paginator.Page)-Objekt, das vorhanden ist, wenn auf der aktuellen Seite eine Paginierung verwendet wird. Darüber können Sie Informationen zur aktuellen Seite, zu vorherigen Seiten, zur Anzahl der Seiten und zu weiteren Eigenschaften abrufen.

Wir verwenden das Template-Tag [`querystring`](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/#querystring), um die Paginierungslinks zu erstellen.
Es übernimmt die Abfrageparameter der aktuellen URL, setzt `page` auf den übergebenen Wert, behält alle anderen Parameter (etwa Suchfilter) bei und gibt das Ergebnis als Abfragezeichenfolge wie `?page=2` zurück.
Ein Link, der nur eine Abfragezeichenfolge enthält, verweist auf die aktuelle Seite. Daher funktioniert derselbe Code für jede Liste, die wir paginieren.

Das ist alles!

### Wie sieht das aus?

Der folgende Screenshot zeigt die Paginierung. Falls Ihre Datenbank noch nicht mehr als 10 Buchtitel enthält, können Sie sie leichter testen, indem Sie den Wert von `paginate_by` in **catalog/views.py** verringern. Für das unten gezeigte Ergebnis haben wir ihn auf `paginate_by = 2` gesetzt.

Die Paginierungslinks werden am unteren Rand angezeigt. Je nachdem, auf welcher Seite Sie sich befinden, erscheinen Links zur nächsten und zur vorherigen Seite.

![Paginierte Buchlistenseite](book_list_paginated.png)

## Probieren Sie es selbst aus

Ihre Aufgabe in diesem Artikel besteht darin, die noch fehlenden Autorendetail- und Autorenlistenansichten zu erstellen, um das Projekt zu vervollständigen. Sie sollten unter den folgenden URLs erreichbar sein:

- `catalog/authors/` — die Liste aller Autoren.
- `catalog/author/<id>` — die Detailansicht für den jeweiligen Autor mit einem Primärschlüssel namens `<id>`.

Der erforderliche Code für die URL-Zuordnungen und Ansichten sollte nahezu identisch mit den oben erstellten Listen- und Detailansichten für `Book` sein. Die Templates unterscheiden sich, funktionieren aber ähnlich.

> [!NOTE]
>
> - Nachdem Sie die URL-Zuordnung für die Autorenlistenseite erstellt haben, müssen Sie auch den Link **Alle Autoren** im Basis-Template aktualisieren.
>   Gehen Sie dabei [genauso vor](#basis-template_aktualisieren) wie beim Aktualisieren des Links **Alle Bücher**.
> - Nachdem Sie die URL-Zuordnung für die Autorendetailseite erstellt haben, sollten Sie auch das [Template der Buchdetailansicht](#template_für_die_detailansicht_erstellen) (**/catalog/templates/catalog/book_detail.html**) aktualisieren, damit der Autorenlink auf Ihre neue Autorendetailseite verweist (statt eine leere URL zu enthalten).
>   Empfohlen wird, dafür wie unten gezeigt `get_absolute_url()` des Autorenmodells aufzurufen.
>
>   ```django
>   <p>
>     <strong>Author:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten ungefähr wie auf den folgenden Screenshots aussehen.

![Autorenlistenseite](author_list_page_no_pagination.png)

![Autorendetailseite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch! Die grundlegende Funktionalität unserer Bibliothek ist jetzt vollständig!

In diesem Artikel haben Sie gelernt, wie Sie generische klassenbasierte Listen- und Detailansichten verwenden, um Seiten für die Anzeige unserer Bücher und Autoren zu erstellen. Dabei haben wir Mustervergleiche mit regulären Ausdrücken behandelt und gezeigt, wie Sie Daten aus URLs an Ansichten übergeben. Außerdem haben Sie weitere Möglichkeiten kennengelernt, Templates zu verwenden. Schließlich haben wir gezeigt, wie Listenansichten paginiert werden, damit unsere Listen auch bei vielen Einträgen übersichtlich bleiben.

In den nächsten Artikeln erweitern wir die Bibliothek um Benutzerkonten und behandeln dabei Benutzerauthentifizierung, Berechtigungen, Sessions und Formulare.

## Siehe auch

- [Integrierte generische klassenbasierte Ansichten](https://docs.djangoproject.com/en/6.1/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/6.1/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/6.1/topics/class-based-views/intro/) (Django-Dokumentation)
- [Integrierte Template-Tags und Filter](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/6.1/topics/pagination/) (Django-Dokumentation)
- [Abfragen durchführen > Verknüpfte Objekte](https://docs.djangoproject.com/en/6.1/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
