---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
slug: Learn/Server-side/Django/Generic_views
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website durch die Hinzufügung von Listen- und Detailseiten für Bücher und Autoren. Hier lernen Sie generische, klassenbasierte Ansichten kennen und erfahren, wie sie die Menge des Codes reduzieren können, den Sie für häufige Anwendungsfälle schreiben müssen. Wir gehen auch detaillierter auf die URL-Verarbeitung ein und zeigen, wie grundlegendes Musterabgleich funktioniert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn/Server-side/Django/Home_page">Django-Tutorial Teil 5: Erstellen unserer Startseite</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wo und wie generische klassenbasierte Ansichten verwendet werden, und Muster aus URLs extrahieren und diese Informationen an Ansichten übergeben.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website fertigstellen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (oder genauer gesagt, wir zeigen Ihnen, wie Sie die Buchseiten implementieren, und Sie werden aufgefordert, die Autorenseiten selbst zu erstellen!)

Der Prozess ähnelt der Erstellung der Indexseite, die wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Karten, Ansichten und Vorlagen erstellen. Der Hauptunterschied besteht darin, dass wir für die Detailseiten die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und diese an die Ansicht weiterzugeben. Für diese Seiten demonstrieren wir eine völlig andere Art von Ansicht: generische klassenbasierte Listen- und Detailansichten. Diese können die Menge des erforderlichen View-Codes erheblich reduzieren, was sie einfacher zu schreiben und zu pflegen macht.

Der letzte Teil des Tutorials zeigt, wie Sie Ihre Daten bei der Verwendung von generischen klassenbasierten Listenansichten paginieren können.

## Buchlisten-Seite

Die Buchlisten-Seite zeigt eine Liste aller verfügbaren Buchdatensätze auf der Seite an, die über die URL `catalog/books/` aufgerufen wird. Die Seite zeigt einen Titel und einen Autor für jeden Datensatz an, wobei der Titel ein Hyperlink zur zugehörigen Detailseite des Buches ist. Die Seite wird die gleiche Struktur und Navigation wie alle anderen Seiten der Website haben, und wir können daher die Basisvorlage (**base_generic.html**) erweitern, die wir im vorherigen Tutorial erstellt haben.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile, die den Pfad für `'books/'` setzt, wie unten gezeigt.
Genau wie für die Indexseite definiert diese `path()`-Funktion ein Muster, das mit der URL (**'books/'**) abgeglichen wird, eine View-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese spezielle Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits auf `/catalog` abgeglichen worden sein, sodass die Ansicht tatsächlich für die URL: `/catalog/books/` aufgerufen wird.

Die View-Funktion hat ein anderes Format als zuvor – das liegt daran, dass diese Ansicht tatsächlich als Klasse implementiert wird. Wir erben von einer bestehenden generischen View-Funktion, die bereits das meiste von dem tut, was wir von dieser View-Funktion erwarten, anstatt unsere eigene von Grund auf neu zu schreiben.

Für Django klassenbasierte Ansichten rufen wir eine geeignete View-Funktion auf, indem wir die Klassenmethode `as_view()` aufrufen. Dies erledigt die gesamte Arbeit, eine Instanz der Klasse zu erstellen und sicherzustellen, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht ganz einfach als reguläre Funktion schreiben (so wie unsere vorherige Indexansicht), die die Datenbank nach allen Büchern abfragt und dann `render()` aufruft, um die Liste an eine angegebene Vorlage zu übergeben. Stattdessen verwenden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) – eine Klasse, die von einer bestehenden Ansicht erbt. Da die generische Ansicht bereits die meiste der benötigten Funktionalität implementiert und die Django-Best-Practice folgt, können wir eine robustere Listenansicht mit weniger Code, weniger Wiederholungen und letztendlich weniger Wartungsaufwand erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das war es! Die generische Ansicht fragt die Datenbank ab, um alle Datensätze für das angegebene Modell (`Book`) zu erhalten, und rendert dann eine Vorlage unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste der Bücher mit der Vorlagenvariablen namens `object_list` ODER `book_list` zugreifen (d.h. generisch `<the model name>_list`).

> [!NOTE]
> Dieser ungewöhnliche Pfad für den Vorlagenstandort ist kein Tippfehler – die generischen Ansichten suchen nach Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) im `/application_name/templates/`-Verzeichnis der Anwendung (`/catalog/templates/`).

Sie können Attribute hinzufügen, um das Standardverhalten oben zu ändern. Zum Beispiel können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dasselbe Modell verwenden, oder Sie möchten möglicherweise einen anderen Vorlagenvariablennamen verwenden, wenn `book_list` für Ihren speziellen Vorlagenanwendungsfall nicht intuitiv ist. Vielleicht ist die nützlichste Variation, die Teilmenge der zurückgegebenen Ergebnisse zu ändern/zu filtern – anstatt also alle Bücher aufzulisten, möchten Sie möglicherweise die Top-5-Bücher auflisten, die von anderen Benutzern gelesen wurden.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methoden in klassenbasierten Ansichten überschreiben

Auch wenn wir es hier nicht tun müssen, können Sie einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die `get_queryset()`-Methode überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Dies ist flexibler als nur das `queryset`-Attribut zu setzen, wie wir es im vorhergehenden Codefragment getan haben (obwohl es in diesem Fall keinen wirklichen Vorteil bietet):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir können auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z.B. die Liste der Bücher wird standardmäßig übergeben). Das Fragment unten zeigt, wie man eine Variable namens `some_data` zur Kontextdatenbank hinzufügt (sie wäre dann als Vorlagenvariable verfügbar).

```python
class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get the context
        context = super(BookListView, self).get_context_data(**kwargs)
        # Create any data and add it to the context
        context['some_data'] = 'This is just some data'
        return context
```

Wenn Sie dies tun, ist es wichtig, dem oben verwendeten Muster zu folgen:

- Holen Sie zuerst den bestehenden Kontext von unserer Superklasse.
- Fügen Sie dann Ihre neuen Kontextinformationen hinzu.
- Geben Sie dann den neuen (aktualisierten) Kontext zurück.

> [!NOTE]
> Schauen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation) für viele weitere Beispiele an, was Sie tun können.

### Erstellen der Listview-Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text hinein. Wie oben besprochen, ist dies die Standardvorlagendatei, die von der generischen, klassenbasierten Listenansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Vorlagen für generische Ansichten sind wie alle anderen Vorlagen (obwohl sich der Kontext/die Informationen, die an die Vorlage übergeben werden, unterscheiden können).
Wie bei unserer _index_-Vorlage erweitern wir unsere Basisvorlage in der ersten Zeile und ersetzen dann den Block namens `content`.

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

Die Ansicht übergibt den Kontext (Liste der Bücher) standardmäßig als `object_list` und `book_list` Aliasse; beide funktionieren.

#### Bedingte Ausführung

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if)-, `else`- und `endif`-Templatetags, um zu prüfen, ob `book_list` definiert ist und nicht leer ist.
Wenn `book_list` leer ist, zeigt die `else`-Klausel einen Text an, der erklärt, dass keine Bücher zur Auflistung vorhanden sind.
Wenn `book_list` nicht leer ist, iterieren wir durch die Liste der Bücher.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die Bedingung oben prüft nur auf einen Fall, aber Sie können zusätzliche Bedingungen mit dem `elif`-Templatetag testen (zB `{% elif var2 %}`).
Weitere Informationen zu bedingten Operatoren finden Sie in: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal) und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Templatetags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### For-Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for)- und `endfor`-Templatetags, um durch die Buchliste zu iterieren, wie unten gezeigt.
Jede Iteration füllt die `book`-Templatenvariable mit Informationen für das aktuelle Listenelement.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie könnten auch das `{% empty %}`-Templatetag verwenden, um zu definieren, was passiert, wenn die Buchliste leer ist (obwohl unsere Vorlage es vorzieht, eine Bedingung zu verwenden):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Obwohl es hier nicht verwendet wird, erstellt Django innerhalb der Schleife auch andere Variablen, die Sie verwenden können, um die Iteration zu verfolgen.
Zum Beispiel können Sie die `forloop.last`-Variable testen, um die letzte Bedingung der Schleife zu erkennen.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes mit der "Punktnotation" zu (z.B. `book.title` und `book.author`), wobei der Text nach dem `book`-Element der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ in dem Modell aus unserer Vorlage heraus aufrufen – in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die Sie verwenden könnten, um den zugehörigen Detaildatensatz anzuzeigen. Dies funktioniert, vorausgesetzt, die Funktion hat keine Argumente (es gibt keine Möglichkeit, Argumente zu übergeben!)

> [!NOTE]
> Wir müssen ein wenig auf "Nebenwirkungen" achten, wenn wir Funktionen in Vorlagen aufrufen. Hier erhalten wir einfach eine URL, um sie anzuzeigen, aber eine Funktion kann so ziemlich alles tun – wir würden nicht wollen, dass unsere Datenbank gelöscht wird (zum Beispiel) nur durch das Rendern unserer Vorlage!

#### Aktualisieren der Basisvorlage

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Damit wird der Link auf allen Seiten aktiviert (wir können dies jetzt erfolgreich einfügen, da wir den "books"-URL-Mapper erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht es aus?

Sie können die Buchliste noch nicht erstellen, da uns noch eine Abhängigkeit fehlt – die URL-Zuordnung für die Buchdetailseiten, die benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir zeigen sowohl Listen- als auch Detailansichten nach dem nächsten Abschnitt.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen über ein bestimmtes Buch an, auf die über die URL `catalog/book/<id>` zugegriffen wird (wobei `<id>` der Primärschlüssel für das Buch ist). Zusätzlich zu den Feldern im `Book`-Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre) werden wir auch die Details der verfügbaren Exemplare (`BookInstances`) einschließlich des Status, des erwarteten Rückgabedatums, des Imprints und der ID auflisten. Dies ermöglicht es unseren Lesern nicht nur, etwas über das Buch zu erfahren, sondern auch zu bestätigen, ob/wann es verfügbar ist.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und fügen Sie den als '**book-detail**' bezeichneten Pfad ein, wie unten gezeigt.
Diese `path()`-Funktion definiert ein Muster, eine zugehörige generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_-Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches zu erfassen, das wir anzeigen möchten.
Die Syntax ist sehr einfach: Winkelklammern definieren den Teil der URL, der erfasst werden soll, und schließen den Namen der Variablen ein, die die Ansicht verwenden kann, um auf die erfassten Daten zuzugreifen.
Beispielsweise wird **\<something>** das markierte Muster erfassen und den Wert als Variable "something" an die Ansicht übergeben. Sie können den Variablennamen optional mit einer [Konverter-Spezifikation](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) versehen, die den Typ der Daten definiert (int, str, slug, uuid, path).

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenfolge sein muss und sie als Parameter namens `pk` (kurz für Primärschlüssel) an die Ansicht zu übergeben. Dies ist die ID, die zur eindeutigen Speicherung des Buches in der Datenbank verwendet wird, wie im Buchmodell definiert.

> [!NOTE]
> Wie bereits früher besprochen, ist unsere übereinstimmende URL tatsächlich `catalog/book/<digits>` (da wir uns in der **catalog**-Anwendung befinden, wird `/catalog/` angenommen).

> [!WARNING]
> Die generische klassenbasierte Detailansicht erwartet, dass ihr ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie einen beliebigen Parameternamen verwenden oder die Informationen in einem nicht benannten Argument übergeben.

#### Fortgeschrittenes Pfad-Matching/Reguläre Ausdrucksgrundlagen

> [!NOTE]
> Sie werden diesen Abschnitt nicht benötigen, um das Tutorial abzuschließen! Wir bieten ihn an, weil es in Ihrer Django-zentrierten Zukunft von Nutzen sein könnte, diese Option zu kennen.

Das von `path()` bereitgestellte Mustermatching ist einfach und nützlich für die (sehr häufigen) Fälle, in denen Sie nur _eine beliebige_ Zeichenfolge oder eine Zahl erfassen möchten. Wenn Sie eine differenziertere Filterung benötigen (z.B. um nur Zeichenfolgen zu filtern, die eine bestimmte Anzahl von Zeichen haben), können Sie die Methode [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) verwenden.

Diese Methode wird genauso wie `path()` verwendet, mit dem Unterschied, dass Sie ein Muster mithilfe eines [Regulären Ausdrucks](https://docs.python.org/3/library/re.html) angeben können. Das vorherige Beispiel hätte beispielsweise wie folgt geschrieben werden können:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich leistungsfähiges Werkzeug zur Mustermatching. Sie sind, ehrlich gesagt, ziemlich unintuitiv und können für Anfänger einschüchternd sein. Hier ist ein sehr kurzer Überblick!

Das erste, was Sie wissen sollten, ist, dass reguläre Ausdrücke normalerweise mit der Rohstringliteral-Syntax deklariert werden sollten (d.h. sie sind eingeschlossen, wie gezeigt: **r'\<dein regulärer Ausdruckstext geht hier rein>'**).

Die wichtigsten Teile der Syntax, die Sie kennen müssen, um Musterabgleiche zu deklarieren, sind:

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
      <td>Übereinstimmung mit dem Anfang des Textes</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Übereinstimmung mit dem Ende des Textes</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Übereinstimmung mit einer Ziffer (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Übereinstimmung mit einem Wortzeichen, z.B. jedem Groß- oder Kleinbuchstaben im
        Alphabet, einer Zahl oder dem Unterstrichzeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Übereinstimmung mit einem oder mehreren der vorhergehenden Zeichen. Um beispielsweise mit einer
        oder mehreren Ziffer übereinzustimmen, könnten Sie <code>\d+</code> verwenden. Um mit einem oder mehreren "a"
        Zeichen übereinzustimmen, könnten Sie <code>a+</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Übereinstimmung mit null oder mehr des vorhergehenden Zeichens. Um beispielsweise mit
        nichts oder einem Wort übereinzustimmen, könnten Sie <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Erfassen Sie den Teil des Musters innerhalb der Klammern. Alle erfassten Werte
        werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere Muster erfasst werden,
        werden die zugehörigen Parameter in der Reihenfolge geliefert,
        in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfassen Sie das Muster (angegeben durch ...) als eine benannte Variable (in diesem Fall
        "name"). Die erfassten Werte werden an die Ansicht mit dem angegebenen Namen
        übergeben. Ihre Ansicht muss daher einen Parameter mit demselben
        Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Übereinstimmung mit einem Zeichen aus der Menge. Zum Beispiel würde [abc] mit
        einem 'a' oder 'b' oder 'c' übereinstimmen. [-\w] wird mit dem '-' Zeichen
        oder einem Wortzeichen übereinstimmen.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können wörtlich genommen werden!

Betrachten wir ein paar echte Beispiele für Muster:

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
          Dies ist das RE, das in unserer URL-Zuordnung verwendet wird. Es stimmt mit einer Zeichenfolge überein, die
          <code>book/</code> zu Beginn der Zeile hat (<strong>^book/</strong>),
          dann eine oder mehrere Ziffern hat (<code>\d+</code>), und dann endet (mit keinen
          Nicht-Ziffer-Zeichen vor dem Zeilenendzeichen).
        </p>
        <p>
          Es erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und
          übergibt sie an die Ansicht in einem Parameter namens 'pk'.
          <strong>Die erfassten Werte werden immer als Zeichenfolge übergeben!</strong>
        </p>
        <p>
          Zum Beispiel würde dies mit <code>book/1234</code> übereinstimmen und eine
          Variable <code>pk='1234'</code> an die Ansicht senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies stimmt mit denselben URLs wie im vorhergehenden Fall überein. Die erfassten
        Informationen würden als ein unbenanntes Argument an die Ansicht gesendet.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies stimmt mit einer Zeichenfolge überein, die <code>book/</code> am Anfang der
          Zeile hat (<strong>^book/</strong>), dann hat sie ein oder mehrere Zeichen, die
          <em>entweder</em> ein '-' oder ein Wortzeichen sind
          (<strong>[-\w]+</strong>), und endet dann. Es erfasst auch diese Zeichenmenge
          und übergibt sie als Parameter namens 'stub' an die Ansicht.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für einen "Stub". Stubs sind URL-freundliche
          wortbasierte Primärschlüssel für Daten. Sie könnten einen Stub verwenden, wenn Sie
          möchten, dass Ihre Buch-URL informativer ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> anstelle von
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Muster in einem einzigen Match erfassen und somit viele verschiedene Informationen in einer URL kodieren.

> [!NOTE]
> Betrachten Sie es als Herausforderung, wie Sie eine URL codieren könnten, um alle Bücher aufzulisten, die in einem bestimmten Jahr, Monat, Tag veröffentlicht wurden, und den RE, der verwendet werden könnte, um sie abzugleichen.

#### Übermittlung zusätzlicher Optionen in Ihren URL-Zuordnungen

Ein Feature, das wir hier nicht verwendet haben, das Sie aber möglicherweise wertvoll finden, ist, dass Sie ein [Wörterbuch mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht übergeben können (durch das dritte unbenannte Argument der `path()`-Funktion). Diese Methode kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden und Daten übergeben möchten, um deren Verhalten in jedem Fall zu konfigurieren.

Zum Beispiel wird Django für eine Anfrage an `/myurl/halibut/` den `views.my_view(request, fish='halibut', my_template_name='some_path')`-Aufruf durchführen, wie im untenstehenden Pfad gezeigt.

```python
path('myurl/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Wörterbuchoptionen werden an die Ansicht als _benannte_ Argumente übergeben. Wenn Sie für ein Erfassungsmuster und einen Wörterbuchschlüssel **denselben Namen** verwenden, wird die Wörterbuchoption verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das war's! Alles, was Sie jetzt tun müssen, ist, eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird ihr die Datenbankinformationen für den spezifischen `Book`-Datensatz übergeben, die von der URL-Zuordnung extrahiert wurden. Innerhalb der Vorlage können Sie auf die Buchdetails mit der Vorlagenvariablen namens `object` ODER `book` zugreifen (d.h. generisch `the_model_name`).

Wenn Sie es benötigen, können Sie die verwendete Vorlage und den Namen des Kontextobjekts, der zur Referenzierung des Buches in der Vorlage verwendet wird, ändern. Sie können auch Methoden überschreiben, um beispielsweise zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, dann wird die generische klassenbasierte Detailansicht automatisch eine `Http404`-Ausnahme auslösen – in der Produktion wird dadurch automatisch eine entsprechende "Ressource nicht gefunden"-Seite angezeigt, die bei Bedarf angepasst werden kann.

Um Ihnen eine Vorstellung davon zu geben, wie dies funktioniert, zeigt das folgende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie die generische klassenbasierte Detailansicht **nicht** verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zuerst, den spezifischen Buchdatensatz aus dem Modell zu abrufen. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404`-Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" wurde. Der letzte Schritt besteht dann, wie üblich, darin, `render()` mit dem Vorlagennamen und den Buchdaten im `context`-Parameter (als Wörterbuch) aufzurufen.

Eine andere Möglichkeit, dies zu tun, wenn Sie keine generische Ansicht verwenden würden, wäre, die `get_object_or_404()`-Funktion aufzurufen.
Dies ist eine Abkürzung zum Auslösen einer `Http404`-Ausnahme, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detailansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und geben Sie ihr den unten stehenden Inhalt. Wie oben besprochen, ist dies der Standarddateiname für die Vorlage, die von der generischen klassenbasierten _Detailansicht_ erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

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

  <div style="margin-left:20px;margin-top:20px">
    <h4>Copies</h4>

    {% for copy in book.bookinstance_set.all %}
      <hr />
      <p
        class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
        \{{ copy.get_status_display }}
      </p>
      {% if copy.status != 'a' %}
        <p><strong>Due to be returned:</strong> \{{ copy.due_back }}</p>
      {% endif %}
      <p><strong>Imprint:</strong> \{{ copy.imprint }}</p>
      <p class="text-muted"><strong>Id:</strong> \{{ copy.id }}</p>
    {% endfor %}
  </div>
{% endblock %}
```

> [!NOTE]
> Der Autorenlink in der obigen Vorlage hat eine leere URL, weil wir noch keine Autorenseite erstellt haben, auf die verlinkt werden könnte.
> Sobald die Detailseite existiert, können wir ihre URL mit einer der beiden folgenden Methoden abrufen:
>
> - Verwenden Sie das `url`-Templatetag, um die 'author-detail'-URL (definiert in der URL-Zuordnung) zu reversen, und übergeben Sie die Autoreninstanz für das Buch:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die `get_absolute_url()`-Methode des Autorenmodells auf (dies führt denselben Reversevorgang durch):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Während beide Methoden im Wesentlichen dasselbe tun, wird `get_absolute_url()` empfohlen, weil es Ihnen hilft, konsistenteren und wartbaren Code zu schreiben (alle Änderungen müssen nur an einer Stelle vorgenommen werden: das Autorenmodell).

Obwohl ein wenig größer, wurde fast alles in dieser Vorlage bereits vorher beschrieben:

- Wir erweitern unsere Basisvorlage und überschreiben den "content"-Block.
- Wir verwenden bedingte Verarbeitung, um zu bestimmen, ob spezifischer Inhalt angezeigt wird oder nicht.
- Wir verwenden `for`-Schleifen, um durch Listen von Objekten zu iterieren.
- Wir greifen auf die Kontextfelder mit der Punktnotation zu (weil wir die Detail-Gesamtansicht verwendet haben, ist der Kontext als `book` benannt; wir könnten auch `object` verwenden)

Das erste Interessante, das wir bisher nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automagisch" erstellt, um die Menge der `BookInstance`-Datensätze zurückzugeben, die mit einem bestimmten `Book` assoziiert sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist notwendig, weil Sie ein `ForeignKey` (eins-zu-viele) Feld nur im "viele" Teil der Beziehung deklarieren (das `BookInstance`). Da Sie nichts tun, um die Beziehung im anderen ("eins") Modell zu deklarieren, hat es (`Book`) kein Feld, um Menge zugehöriger Datensätze zu erhalten. Um dieses Problem zu überwinden, erzeugt Django eine entsprechend benannte "Rückwärtssuch"-Funktion, die Sie verwenden können. Der Name der Funktion wird erstellt, indem der Modellname, wo der `ForeignKey` deklariert wurde, kleingeschrieben und `_set` angehängt wird (d.h. so wird die Funktion in `Book` erstellt: `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze abzurufen (der Standard). Während Sie die Methode `filter()` verwenden können, um eine Teilmenge von Datensätzen im Code zu erhalten, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente für Funktionen angeben können.
>
> Beachten Sie auch, dass Sie, wenn Sie keine Ordnung angeben (entweder in Ihrer klassenbasierten Ansicht oder in Ihrem Modell), Fehlermeldungen vom Entwicklungsserver wie diese erhalten werden:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Dies geschieht, weil das [Paginierungsobjekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass eine ORDER BY-Abfrage in Ihrer zugrundeliegenden Datenbank ausgeführt wird. Ohne diese kann es nicht garantieren, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat **Paginierung** (noch!) nicht behandelt, aber da Sie nicht `sort_by()` verwenden und ein Argument übergeben können (wie bei `filter()` oben beschrieben), müssen Sie sich zwischen drei Möglichkeiten entscheiden:
>
> 1. Fügen Sie eine `ordering`-Anweisung innerhalb einer `class Meta`-Deklaration in Ihrem Modell hinzu.
> 2. Fügen Sie ein `queryset`-Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu, das eine `order_by()`-Anweisung spezifiziert.
> 3. Fügen Sie eine `get_queryset`-Methode zu Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu und spezifizieren Sie ebenfalls die `order_by()`-Anweisung.
>
> Wenn Sie sich für eine `class Meta` für das `Author`-Modell entscheiden (wahrscheinlich nicht so flexibel wie das Anpassen der klassenbasierten Ansicht, aber einfach genug), werden Sie mit etwas wie diesem enden:
>
> ```python
> class Author(models.Model):
>     first_name = models.CharField(max_length=100)
>     last_name = models.CharField(max_length=100)
>     date_of_birth = models.DateField(null=True, blank=True)
>     date_of_death = models.DateField('Died', null=True, blank=True)
>
>     def get_absolute_url(self):
>         return reverse('author-detail', args=[str(self.id)])
>
>     def __str__(self):
>         return f'{self.last_name}, {self.first_name}'
>
>     class Meta:
>         ordering = ['last_name']
> ```
>
> Natürlich muss das Feld nicht `last_name` sein: es könnte auch ein anderes sein.
>
> Zu guter Letzt sollten Sie nach einem Attribut/Spalte sortieren, das tatsächlich einen Index (gleich oder nicht) auf Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich ist das hier nicht notwendig (wir gehen uns wahrscheinlich vorzeitig Sorgen mit so wenigen Büchern und Benutzern), aber es ist etwas, was Sie bei zukünftigen Projekten im Hinterkopf behalten sollten.

Das zweite interessante (und nicht offensichtliche) Ding in der Vorlage ist, wo wir den Status des Buches anzeigen ("verfügbar", "Wartung", etc.).
Aufmerksame Leser werden bemerken, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status anzuzeigen, im Code nicht anderswo erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [choices field](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist.
Django erstellt automatisch eine Methode `get_foo_display()` für jedes choice-Feld `foo` in einem Modell, die verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An dieser Stelle sollten wir alles erstellt haben, was benötigt wird, um sowohl die Buchliste als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autoren- oder Autorendetail-Links — Sie werden diese in der Herausforderung erstellen!

Klicken Sie auf den Link **Alle Bücher**, um die Liste der Bücher anzuzeigen.

![Buchlisten-Seite](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles korrekt eingerichtet ist, sollten Sie etwas wie den folgenden Screenshot sehen.

![Buchdetail-Seite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur einige wenige Datensätze haben, wird unsere Buchlisten-Seite gut aussehen. Sobald Sie jedoch mehrere zehn oder hundert Datensätze haben, wird die Seite immer länger zum Laden benötigen (und hat viel zu viel Inhalt, um ihn vernünftig zu durchsuchen). Die Lösung für dieses Problem besteht darin, Ihre Listenansichten zu paginieren, um die Anzahl der auf jeder Seite angezeigten Elemente zu reduzieren.

Django bietet eine hervorragende eingebaute Unterstützung für Paginierung. Noch besser ist, dass dies in die klassenbasierten, generischen Listenansichten integriert ist, sodass Sie nicht viel tun müssen, um es zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die `paginate_by`-Zeile hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung wird die Ansicht beginnen, die Daten, die sie an die Vorlage sendet, zu paginieren, sobald Sie mehr als 10 Datensätze haben.
Die verschiedenen Seiten werden mit GET-Parametern aufgerufen — um auf Seite 2 zuzugreifen, würden Sie die URL `/catalog/books/?page=2` verwenden.

### Vorlagen

Da die Daten jetzt paginiert sind, müssen wir die Unterstützung dafür in der Vorlage hinzufügen, um durch das Ergebnisset zu scrollen. Da wir möglicherweise alle Listenansichten paginieren möchten, fügen wir dies der Basisvorlage hinzu.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und suchen Sie den "content"-Block (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock sofort nach `{% endblock %}`. Der Code prüft zuerst, ob auf der aktuellen Seite die Paginierung aktiviert ist. Falls ja, fügt er entsprechende _weiter_ und _zurück_ Links hinzu (und die aktuelle Seitenzahl).

```django
{% block pagination %}
    {% if is_paginated %}
        <div class="pagination">
            <span class="page-links">
                {% if page_obj.has_previous %}
                    <a href="\{{ request.path }}?page=\{{ page_obj.previous_page_number }}">previous</a>
                {% endif %}
                <span class="page-current">
                    Page \{{ page_obj.number }} of \{{ page_obj.paginator.num_pages }}.
                </span>
                {% if page_obj.has_next %}
                    <a href="\{{ request.path }}?page=\{{ page_obj.next_page_number }}">next</a>
                {% endif %}
            </span>
        </div>
    {% endif %}
  {% endblock %}
```

Die `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects)-Objekt, das existiert, wenn auf der aktuellen Seite die Paginierung verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, vorherige Seiten, wie viele Seiten es gibt, etc., zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL für die Erstellung der Paginierungslinks zu erhalten. Dies ist hilfreich, da es unabhängig von dem Objekt ist, das wir paginieren.

Das war's!

### Wie sieht es aus?

Der folgende Screenshot zeigt, wie die Paginierung aussieht — wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie es einfacher testen, indem Sie die in der `paginate_by`-Zeile in Ihrer **catalog/views.py**-Datei angegebene Nummer verringern. Um das untenstehende Ergebnis zu erhalten, haben wir es auf `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, mit weiter/zurück Buttons je nachdem, auf welcher Seite Sie sind.

![Buchlisten-Seite - paginiert](book_list_paginated.png)

## Fordern Sie sich selbst heraus

Die Herausforderung in diesem Artikel besteht darin, die erforderlichen Ansichten für die Autorendetails und Listen zu erstellen, um das Projekt abzuschließen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Zuordnungen und Ansichten erforderliche Code sollte praktisch identisch mit den List- und Detailansichten für `Book` sein, die wir zuvor erstellt haben. Die Vorlagen werden unterschiedlich sein, aber ähnliches Verhalten aufweisen.

> [!NOTE]
>
> - Sobald Sie die URL-Zuordnung für die Autorenlisten-Seite erstellt haben, müssen Sie auch den **Alle Autoren**-Link in der Basisvorlage aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_der_basisvorlage) wie beim Update des **Alle Bücher**-Links.
> - Sobald Sie die URL-Zuordnung für die Autordetailseite erstellt haben, sollten Sie auch die [Vorlage der Buchdetailansicht](#erstellen_der_detailansichtsvorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, damit der Link auf das neue Autorendetail-Seite verweist (anstatt eine leere URL zu haben).
>   Der empfohlene Weg, dies zu tun, ist, `get_absolute_url()` auf dem Autorenmodell wie unten gezeigt aufzurufen.
>
>   ```django
>   <p>
>     <strong>Author:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten so aussehen wie die folgenden Screenshots.

![Autorenlisten-Seite](author_list_page_no_pagination.png)

![Autorendetail-Seite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist nun abgeschlossen!

In diesem Artikel haben wir gelernt, wie man die generischen klassenbasierten Listen- und Detailansichten verwendet und sie verwendet, um Seiten zu erstellen, um unsere Bücher und Autoren anzuzeigen. Unterwegs haben wir gelernt, wie man Musterabgleich mit regulären Ausdrücken durchführt und wie Sie Daten von URLs an Ihre Ansichten übergeben können. Wir haben auch ein paar weitere Tricks zur Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginiert, sodass unsere Listen auch dann überschaubar bleiben, wenn wir viele Datensätze haben.

In unseren nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen und damit Benutzerauthentifizierung, Berechtigungen, Sitzungen und Formulare zu demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Templatetags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}
