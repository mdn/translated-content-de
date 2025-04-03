---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
short-title: "6: Generische Listen- und Detailansichten"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website um Listen- und Detailseiten für Bücher und Autoren. Hier lernen wir generische, klassenbasierte Ansichten kennen und zeigen, wie sie den Code reduzieren können, den Sie für häufige Anwendungsfälle schreiben müssen. Außerdem gehen wir detailliert auf URL-Verarbeitung ein und zeigen, wie man grundlegende Mustererkennung durchführt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page">Django-Tutorial Teil 5: Erstellen unserer Startseite</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis, wann und wie generische, klassenbasierte Ansichten verwendet werden, sowie wie Muster aus URLs extrahiert und Informationen an Ansichten übergeben werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website abschließen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (genauer gesagt, wir zeigen Ihnen, wie Sie die Buchseiten implementieren, und fordern Sie auf, die Autorenseiten selbst zu erstellen!).

Der Prozess ist dem Erstellen der Indexseite ähnlich, den wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Karten, Ansichten und Vorlagen erstellen. Der Hauptunterschied bei den Detailseiten besteht darin, dass wir die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und an die Ansicht zu übergeben. Für diese Seiten demonstrieren wir einen völlig anderen Ansatzt von Ansichten: generische, klassenbasierte Listen- und Detailansichten. Diese können die Menge an benötigtem Ansichtscode erheblich reduzieren und so das Schreiben und Warten vereinfachen.

Der letzte Teil des Tutorials zeigt, wie Sie Ihre Daten paginieren können, wenn Sie generische klassenbasierte Listenansichten verwenden.

## Buchliste Seite

Die Buchliste-Seite zeigt eine Liste aller verfügbaren Buchdatensätze auf der Seite an, die über die URL `catalog/books/` aufgerufen wird. Die Seite zeigt für jeden Datensatz einen Titel und einen Autor an, wobei der Titel ein Hyperlink zur zugehörigen Buchdetailseite ist. Die Seite wird die gleiche Struktur und Navigation wie alle anderen Seiten der Website haben, und wir können daher die Basisvorlage (**base_generic.html**) erweitern, die wir im vorherigen Tutorial erstellt haben.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile ein, die den Pfad für `'books/'` festlegt, wie unten gezeigt. Genau wie bei der Index-Seite definiert diese `path()` Funktion ein Muster, das mit der URL abgeglichen wird (**'books/'**), eine Ansichts-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese spezielle Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits `/catalog` enthalten, also wird die Ansicht tatsächlich für die URL: `/catalog/books/` aufgerufen.

Die Ansichts-Funktion hat ein anderes Format als zuvor - das liegt daran, dass diese Ansicht tatsächlich als Klasse implementiert wird. Wir erben von einer vorhandenen generischen Ansichts-Funktion, die bereits das meiste tut, was wir von dieser Ansichts-Funktion erwarten, anstatt unsere eigene von Grund auf neu zu schreiben.

Für Django klassenbasierte Ansichten greifen wir auf eine geeignete Ansichts-Funktion zu, indem wir die Klassenmethode `as_view()` aufrufen. Dies erledigt die gesamte Arbeit, eine Instanz der Klasse zu erstellen und sicherzustellen, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlist-Ansicht ganz einfach als reguläre Funktion schreiben (genau wie unsere vorherige Indexansicht), die die Datenbank nach allen Büchern abfragen und dann `render()` aufrufen würde, um die Liste an eine bestimmte Vorlage zu übergeben. Stattdessen verwenden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) — eine Klasse, die von einer bestehenden Ansicht erbt. Da die generische Ansicht bereits die meisten der benötigten Funktionen implementiert und den Best-Practice-Standard von Django befolgt, werden wir in der Lage sein, eine robustere Listenansicht mit weniger Code, weniger Wiederholungen und letztendlich weniger Wartungsaufwand zu erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code unten in die Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das war's! Die generische Ansicht wird die Datenbank abfragen, um alle Datensätze für das angegebene Modell (`Book`) zu erhalten und dann eine Vorlage rendert, die sich unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** befindet (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste der Bücher mit der Template-Variable namens `object_list` ODER `book_list` zugreifen (d.h. generisch `<the model name>_list`).

> [!NOTE]
> Dieser unangenehme Pfad für den Vorlagen-Speicherort ist kein Druckfehler — die generischen Ansichten suchen nach Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) innerhalb des `/application_name/templates/` Verzeichnisses der Anwendung (`/catalog/templates/`).

Sie können Attribute hinzufügen, um das Standardverhalten oben zu ändern. Zum Beispiel können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dasselbe Modell verwenden, oder Sie möchten einen anderen Namen für die Template-Variable verwenden, wenn `book_list` für Ihren speziellen Vorlagenanwendungsfall nicht intuitiv ist. Möglicherweise ist die nützlichste Variation, die Untergruppe der zurückgegebenen Ergebnisse zu ändern/filtern - anstatt alle Bücher aufzulisten, könnten Sie die Top 5 Bücher auflisten, die von anderen Benutzern gelesen wurden.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methodenüberschreibung in klassenbasierten Ansichten

Auch wenn wir es hier nicht brauchen, können Sie auch einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die `get_queryset()` Methode überschreiben, um die zurückgegebene Liste der Datensätze zu ändern. Dies ist flexibler, als nur das `queryset` Attribut wie im vorhergehenden Codefragment zu setzen (obwohl es in diesem Fall keinen wirklichen Nutzen gibt):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z. B. wird die Liste der Bücher standardmäßig übergeben). Das folgende Fragment zeigt, wie man eine Variable namens `some_data` zum Kontext hinzufügt (sie wäre dann als Template-Variable verfügbar).

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

Bei diesem Vorgehen ist es wichtig, dem oben verwendeten Muster zu folgen:

- Zuerst den bestehenden Kontext von unserer Superklasse abrufen.
- Dann Ihre neuen Kontextinformationen hinzufügen.
- Dann den neuen (aktualisierten) Kontext zurückgeben.

> [!NOTE]
> Schauen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation) an für viele weitere Beispiele, was Sie tun können.

### Erstellen der Listenansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den folgenden Text hinein. Wie oben besprochen, ist dies die Standardvorlagendatei, die von der generischen klassenbasierten Listenansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Vorlagen für generische Ansichten sind genau wie alle anderen Vorlagen (obwohl der Kontext/Informationen, die an die Vorlage übergeben werden, unterschiedlich sein kann).
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

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else`, und `endif` Template-Tags, um zu überprüfen, ob `book_list` definiert wurde und nicht leer ist. Wenn `book_list` leer ist, zeigt die `else`-Anweisung einen Text an, der erklärt, dass keine Bücher aufgelistet werden. Wenn `book_list` nicht leer ist, durchlaufen wir die Liste der Bücher.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die Bedingung oben prüft nur auf einen Fall, aber Sie können zusätzliche Bedingungen mit dem `elif` Template-Tag testen (z. B. `{% elif var2 %}`). Für weitere Informationen über bedingte Operatoren siehe: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal), und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### For-Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor` Template-Tags, um durch die Buchliste zu schleifen, wie unten gezeigt. Jede Iteration füllt die `book` Template-Variable mit Informationen für das aktuelle Listenelement.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie können auch das `{% empty %}` Template-Tag verwenden, um zu definieren, was passiert, wenn die Buchliste leer ist (auch wenn unsere Vorlage stattdessen eine Bedingung verwendet):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Obwohl hier nicht verwendet, erstellt Django innerhalb der Schleife auch andere Variablen, die Sie zur Verfolgung der Iteration verwenden können. Beispielweise können Sie die `forloop.last` Variable testen, um eine bedingte Verarbeitung beim letzten Durchlauf der Schleife durchzuführen.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor zeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes mit der "Punktnotation" zu (z. B. `book.title` und `book.author`), wobei der Text, der dem `book` Element folgt, der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell innerhalb unserer Vorlage aufrufen — in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die Sie verwenden können, um den zugehörigen Detaildatensatz anzuzeigen. Dies funktioniert, vorausgesetzt, die Funktion hat keine Argumente (es gibt keine Möglichkeit, Argumente zu übergeben!)

> [!NOTE]
> Wir müssen ein wenig vorsichtig sein, was "Seiteneffekte" beim Aufrufen von Funktionen in Vorlagen angeht. Hier bekommen wir nur eine URL angezeigt, aber eine Funktion kann so gut wie alles tun - wir würden nicht wollen, dass unsere Datenbank gelöscht wird (zum Beispiel) nur durch das Rendern unserer Vorlage!

#### Aktualisieren der Basisvorlage

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Dadurch wird der Link auf allen Seiten aktiviert (wir können dies jetzt erfolgreich in Betrieb nehmen, da wir den "books"-URL-Mapping erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht es aus?

Sie werden die Bücherliste noch nicht ablehnen können, da uns noch eine Abhängigkeit fehlt — das URL-Mapping für die Buchdetailseiten, das benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir zeigen sowohl Listen- als auch Detailansichten nach dem nächsten Abschnitt.

## Buchdetailseite

Die Buchdetailseite wird Informationen über ein bestimmtes Buch anzeigen, zugänglich über die URL `catalog/book/<id>` (wobei `<id>` der Primärschlüssel für das Buch ist). Zusätzlich zu den Feldern im `Book` Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre), listen wir auch die Details der verfügbaren Kopien (`BookInstances`) auf, einschließlich Status, erwartetes Rückgabedatum, Impressum und ID. Dies ermöglicht unseren Lesern nicht nur, Informationen über das Buch zu erfahren, sondern auch zu bestätigen, ob/wann es verfügbar ist.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad mit dem Namen '**book-detail**' hinzu. Diese `path()` Funktion definiert ein Muster, eine zugehörige generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_ Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches zu erfassen, das wir sehen möchten. Die Syntax ist sehr einfach: spitze Klammern definieren den Teil der URL, der erfasst werden soll, und umschließen den Namen der Variablen, auf den die Ansicht zugreifen kann, um die erfassten Daten zu nutzen. Zum Beispiel, **\<something>**, wird das markierte Muster erfassen und den Wert als Variable "something" an die Ansicht übergeben. Sie können optional den Variablennamen mit einer [Konverter-Spezifikation](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Datentyp (int, str, slug, uuid, path) definiert.

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenkette sein muss, und übergeben sie als Parameter namens `pk` (kurz für Primärschlüssel) an die Ansicht. Dies ist die ID, die verwendet wird, um das Buch eindeutig in der Datenbank zu speichern, wie im Buchmodell definiert.

> [!NOTE]
> Wie bereits besprochen, ist unsere übereinstimmende URL tatsächlich `catalog/book/<digits>` (da wir uns in der **catalog** Anwendung befinden wird, `/catalog/` angenommen).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_, dass ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parameternamen verwenden oder die Informationen in einem unbenannten Argument übergeben.

#### Fortgeschrittene Pfadabgleichung/Reguläre Ausdruck Einführung

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir stellen ihn zur Verfügung, weil dieses Wissen wahrscheinlich in Ihrer Django-zentrierten Zukunft nützlich sein wird.

Das durch `path()` bereitgestellte Musterabgleich ist einfach und nützlich für die (sehr häufigen) Fälle, in denen Sie einfach _irgendeine_ Zeichenkette oder Zahl erfassen möchten. Wenn Sie eine verfeinerte Filterung benötigen (zum Beispiel, um nur Zeichenketten zu filtern, die eine bestimmte Anzahl von Zeichen haben), dann können Sie die [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) Methode verwenden.

Diese Methode wird einfach wie `path()` verwendet, außer dass sie es Ihnen ermöglicht, ein Muster mit einem [Regulären Ausdruck](https://docs.python.org/3/library/re.html) anzugeben. Zum Beispiel könnte der vorherige Pfad wie unten gezeigt geschrieben werden:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Werkzeug zur Musterabbildung. Sie sind, ehrlich gesagt, ziemlich unintuitiv und können für Anfänger einschüchternd sein. Unten ist eine sehr kurze Einführung!

Das erste, was Sie wissen sollten, ist, dass reguläre Ausdrücke normalerweise mithilfe des Literalsyntax für rohe Zeichenketten deklariert werden sollten (d.h. sie werden wie folgt eingeklammert: **r'\<Ihr regulärer Ausdrucktext hier>'**).

Die Hauptteile der Syntax, die Sie zum Deklarieren der Musterabgleiche benötigen, sind:

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
      <td>Anfang des Textes</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Ende des Textes</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Eine Ziffer (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Ein Wortzeichen, z. B. ein beliebiges Zeichen im Alphabet in Groß- oder Kleinschreibung, eine Ziffer oder der Unterstrich (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Eins oder mehr des vorherigen Zeichens. Zum Beispiel, um eine oder mehr Ziffern zu treffen, würden Sie <code>\d+</code> verwenden.
        Um eine oder mehr "a" Zeichen zu treffen, könnten Sie <code>a+</code> verwenden
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Null oder mehr des vorherigen Zeichens. Um zum Beispiel nichts oder ein Wort zu treffen, könnten Sie <code>\w*</code> verwenden
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Erfasst den Teil des Musters in den Klammern. Alle erfassten Werte werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere Muster erfasst werden,
        werden die damit verbundenen Parameter in der Reihenfolge geliefert, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfasst das Muster (in diesem Fall...), die als named variable (in diesem Fall "name").
        Die erfassten Werte werden an die Ansicht mit dem angegebenen Namen übergeben. Ihre Ansicht muss daher einen Parameter mit dem gleichen Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Übereinstimmung mit einem Zeichen im Satz. Zum Beispiel wird [abc] auf 'a' oder 'b' oder 'c' passen. [-\w] wird auf das '-' Zeichen oder ein Wort Zeichen passen.
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
          Dies ist der RE, den wir in unserem URL-Mapping verwendet haben.
          Es entspricht einer Zeichenfolge, die <code>book/</code> am Anfang der Zeile hat (**^book/**), dann eine oder mehrere Ziffern (<code>\d+</code>), und dann endet (ohne weitere Nicht-Ziffern-Zeichen vor dem Zeilenendezeichen).
        </p>
        <p>
          Außerdem erfasst es alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und übergibt diese an die Ansicht in einem Parameter namens 'pk'.
          <strong>Die erfassten Werte werden immer als Zeichenkette übergeben!</strong>
        </p>
        <p>
          Dieses würde zum Beispiel dem <code>book/1234</code> entsprechen und eine Variable <code>pk='1234'</code> an die Ansicht senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies entspricht den gleichen URLs wie im vorhergehenden Fall. Die erfassten Informationen würden jedoch als unbenanntes Argument an die Ansicht gesendet werden.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies entspricht einer Zeichenfolge, die <code>book/</code> am Anfang der Zeile (**^book/**) hat, dann ein oder mehrere Zeichen, die <em>entweder</em> einer '-' oder
          einem Wortzeichen (<strong>[-\w]+</strong>) entsprechen und dann endet.
          Außerdem erfasst es diese Menge an Zeichen und übergibt sie an die Ansicht in einem Parameter namens 'stub'.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für eine "Stub". Stubs sind URL-freundliche auf Worten basierende Primärschlüssel für Daten.
          Sie könnten ein Stub verwenden, wenn Sie möchten, dass Ihre Buch-URL informativer ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> anstelle von <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Muster in einem Match erfassen und dadurch in einer URL viele verschiedene Informationen kodieren.

> [!NOTE]
> Als Herausforderung: Überlegen Sie, wie Sie eine URL kodieren könnten, um alle Bücher aufzulisten, die in einem bestimmten Jahr, Monat, Tag veröffentlicht wurden, und welche RE dafür verwendet werden könnte.

#### Übergeben zusätzlicher Optionen in Ihren URL-Zuordnungen

Eine Funktion, die wir hier nicht verwendet haben, die sich aber als nützlich erweisen könnte, ist, dass Sie der Ansicht ein [Dictionary mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) übergeben können (mithilfe des dritten unbenannten Arguments der `path()` Funktion). Dies kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden möchten und Konfigurationsdaten übergeben wollen, um das Verhalten zu steuern.

Zum Beispiel, für eine Anfrage zu `/my-url/halibut/`, wird Django die `views.my_view(request, fish='halibut', my_template_name='some_path')` aufgerufen.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Benannte erfasste Muster und Dictionary-Optionen werden an die Ansicht als _benannte_ Argumente übergeben. Wenn Sie denselben Namen sowohl für ein erfasstes Muster als auch einen Dictionary-Schlüssel verwenden, wird die Dictionary-Option verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py**, und kopieren Sie den folgenden Code unten in die Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das ist alles! Alles, was Sie jetzt tun müssen, ist eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird der Vorlage die Datenbankinformationen für den spezifischen `Book` Datensatz übergeben, der durch das URL-Mapping extrahiert wird. Innerhalb der Vorlage können Sie auf die Buchdetails mit der Template-Variable namens `object` ODER `book` (d.h. generisch `the_model_name`) zugreifen.

Falls erforderlich, können Sie die verwendete Vorlage und den Namen des Kontextobjekts ändern, das zum Referenzieren des Buchs in der Vorlage verwendet wird. Sie können Methoden auch überschreiben, um z. B. zusätzliche Informationen an den Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, löst die generische klassenbasierte Detailansicht automatisch eine `Http404` Ausnahme aus — in der Produktion wird automatisch eine entsprechend angepasste "Resource not found" Seite angezeigt, die bei Bedarf angepasst werden kann.

Um Ihnen eine Vorstellung davon zu geben, wie das funktioniert, zeigt das folgende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie NICHT die generische klassenbasierte Detailansicht verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zuerst den spezifischen Buchdatensatz aus dem Modell abzurufen. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404` Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" wird. Der letzte Schritt besteht dann wie gewohnt darin, `render()` mit dem Vorlagennamen und den Buchdaten im `context` Parameter (als Dictionary) aufzurufen.

Eine weitere Möglichkeit, dies zu tun, wenn Sie keine generische Ansicht verwenden, wäre die Funktion `get_object_or_404()` aufzurufen. Dies ist eine Abkürzung, um eine `Http404` Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detailansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und geben Sie ihr den unten aufgeführten Inhalt. Wie oben besprochen, ist dies der Standardvorlagen-Dateiname, den die generische klassenbasierte _Detail_ Ansicht erwartet (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

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
> Der Autor-Link in der oben stehenden Vorlage hat eine leere URL, weil wir noch keine Autor-Detailseite erstellt haben, auf die verwiesen werden kann.
> Sobald die Detailseite existiert, können wir ihre URL mit einer dieser beiden Ansätze erhalten:
>
> - Verwenden Sie das `url` Template-Tag, um die 'author-detail' URL (im URL-Mapping definiert) umzukehren und übergeben Sie die Autoreninstanz für das Buch:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die `get_absolute_url()` Methode des Autor-Modells auf (dies führt dieselbe Umkehroperation durch):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Obwohl beide Methoden effektiv dasselbe tun, wird `get_absolute_url()` bevorzugt, weil es Ihnen hilft, konsistenteren und wartungsfreundlicheren Code zu schreiben (Änderungen müssen nur an einer Stelle vorgenommen werden: dem Autor-Modell).

Obwohl etwas größer, wurde fast alles in dieser Vorlage bereits zuvor beschrieben:

- Wir erweitern unsere Basisvorlage und überschreiben den "content"-Block.
- Wir verwenden konditionale Verarbeitung, um zu bestimmen, ob spezifischer Inhalt angezeigt wird oder nicht.
- Wir verwenden `for` Schleifen, um durch Listen von Objekten zu schleifen.
- Wir greifen mit der Punktnotation auf die Kontextfelder zu (weil wir die generische Detailansicht verwenden, wird der Kontext als `book` benannt; wir könnten auch `object` verwenden).

Das erste interessante, was wir bisher nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automagisch" erstellt, um die Gruppe von `BookInstance` Datensätzen zurückzugeben, die mit einem bestimmten `Book` assoziiert sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode wird benötigt, weil Sie nur auf der "viele" Seite der Beziehung (dem `BookInstance`) ein `ForeignKey` (eins-zu-viele) Feld deklarieren. Da Sie nichts tun, um die Beziehung im anderen ("einen") Modell zu deklarieren, hat es (das `Book`) kein Feld, um die Gruppe der zugeordneten Datensätze zu erhalten. Um dieses Problem zu lösen, erstellt Django eine entsprechend benannte "Reverse Lookup"-Funktion, die Sie verwenden können. Der Name der Funktion wird erstellt, indem der Modellname, wo das `ForeignKey` deklariert wurde, klein geschrieben wird, gefolgt von `_set` (d.h. dem `Book` wird die Funktion `bookinstance_set()` erstellt).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze zu erhalten (standardmäßig). Während Sie die `filter()` Methode verwenden können, um eine Teilmenge der Datensätze im Code zu erhalten, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente für Funktionen angeben können.
>
> Seien Sie auch vorsichtig, wenn Sie keine Reihenfolge definieren (bei Ihrer klassenbasierten Ansicht oder Modell), sehen Sie Fehlermeldungen vom Entwicklungsserver wie diese:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Das passiert, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass ein ORDER BY auf Ihrer zugrunde liegenden Datenbank ausgeführt wird.
> Ohne dies kann es nicht sicherstellen, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat **Pagination** noch nicht behandelt, aber da Sie `sort_by()` nicht verwenden können und ein Parameter (das gleiche wie bei `filter()` oben beschrieben) übergeben können, müssen Sie zwischen drei Optionen wählen:
>
> 1. Fügen Sie in Ihrer Modellansicht eine `ordering` innerhalb einer `class Meta` -Deklaration hinzu.
> 2. Fügen Sie ein `queryset` Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu, und geben Sie ein `order_by()` an.
> 3. Fügen Sie eine `get_queryset` Methode zu Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu und geben Sie ebenfalls das `order_by()` an.
>
> Wenn Sie sich entscheiden, mit einer `class Meta` für das `Author` Modell (wahrscheinlich nicht so flexibel wie das Anpassen der klassenbasierten Ansicht, aber einfach genug), würden Sie mit so etwas enden:
>
> ```python
> class Author(models.Model):
>     first_name = models.CharField(max_length=100)
>     last_name = models.CharField(max_length=100)
>     date_of_birth = models.DateField(null=True, blank=True)
>     date_of_death = models.DateField('Gestorben', null=True, blank=True)
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
> Natürlich muss es nicht `last_name` sein: es könnte auch ein anderes Feld sein.
>
> Zuletzt aber nicht zuletzt, sollten Sie nach einem Attribut/Spalte sortieren, das tatsächlich einen Index (einzigartig oder nicht) auf Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden.
> Natürlich wird dies hier nicht notwendig sein (wir sind wahrscheinlich etwas voraus mit so wenigen Büchern und Benutzern), aber es ist etwas, das es wert ist, bei zukünftigen Projekten beachtet zu werden.

Das zweite interessante (und nicht offensichtliche) an der Vorlage ist, wo wir den Status-Text für jede Buchinstanz anzeigen ("verfügbar", "Wartung", etc.). Aufmerksame Leser werden feststellen, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text zu erhalten, nicht an anderer Stelle im Code erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [Choices-Feld](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist. Django erstellt automatisch eine Methode `get_foo_display()` für jedes Choices-Feld `foo` in einem Modell, die verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was nötig ist, um sowohl die Buchliste als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autoren- oder Autoren-Detail-Links — die werden Sie in der Herausforderung erstellen!

Klicken Sie auf den **Alle Bücher**-Link, um die Liste der Bücher anzuzeigen.

![Book List Page](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles korrekt eingerichtet ist, sollten Sie etwas wie den folgenden Screenshot sehen.

![Book Detail Page](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur ein paar Datensätze haben, wird unsere Buchlistenseite gut aussehen. Wenn Sie jedoch in die Zehner oder Hunderte von Datensätzen kommen, wird die Seite immer länger zum Laden brauchen (und viel zu viel Inhalt haben, um ihn vernünftig zu durchsuchen). Die Lösung für dieses Problem besteht darin, Paginierung zu Ihrer Listenansicht hinzuzufügen, wodurch die Anzahl der auf jeder Seite angezeigten Elemente reduziert wird.

Django hat hervorragende eingebaute Unterstützung für die Paginierung. Noch besser: Diese ist in den generischen klassenbasierten Listenansichten integriert, so dass Sie nicht viel tun müssen, um sie zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die `paginate_by` Zeile hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung wird die Ansicht, sobald Sie mehr als 10 Datensätze haben, beginnen, die Daten, die sie an die Vorlage sendet, zu paginieren. Die verschiedenen Seiten werden über GET-Parameter aufgerufen — um auf Seite 2 zuzugreifen, verwenden Sie die URL `/catalog/books/?page=2`.

### Vorlagen

Da die Daten jetzt paginiert sind, müssen wir die Vorlage so erweitern, dass sie durch das Ergebnisset gescrollt werden kann. Da wir möglicherweise alle Listenansichten paginieren wollen, werden wir dies in die Basisvorlage hinzufügen.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und finden Sie den "content block" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock direkt nach dem `{% endblock %}`. Der Code prüft zuerst, ob auf der aktuellen Seite die Paginierung aktiviert ist. Wenn ja, fügt er _next_ und _previous_ Links entsprechend hinzu (und die aktuelle Seitennummer).

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

Der `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) Objekt, das existiert, wenn auf der aktuellen Seite Paginierung verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, die vorherigen Seiten, wie viele Seiten es gibt, etc. zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL für die Erstellung der Paginierungslinks zu erhalten. Dies ist nützlich, weil es unabhängig von dem Objekt ist, das wir paginieren.

Das ist alles!

### Wie sieht es aus?

Der unten gezeigte Screenshot zeigt, wie die Paginierung aussieht - wenn Sie nicht mehr als 10 Titel in Ihrer Datenbank eingegeben haben, können Sie es leichter testen, indem Sie die in der `paginate_by` Zeile in Ihrer **catalog/views.py** Datei angegebene Zahl senken. Für das untenstehende Ergebnis haben wir es auf `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, mit nächsten/vorherigen Links, die je nach der aktuellen Seite angezeigt werden.

![Buch Listenseite - paginiert](book_list_paginated.png)

## Stellen Sie sich selbst auf die Probe

Die Herausforderung in diesem Artikel besteht darin, die erforderlichen Autorendetail- und Listenansichten zu erstellen, um das Projekt zu vervollständigen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem primären Schlüsselfeld namens `<id>`

Der für die URL-Zuordnungen und die Ansichten erforderliche Code sollte nahezu identisch mit den `Book` Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden anders sein, aber ein ähnliches Verhalten aufweisen.

> [!NOTE]
>
> - Sobald Sie die URL-Zuordnung für die Autorenlistenseite erstellt haben, müssen Sie den **Alle Autoren** Link in der Basisvorlage aktualisieren.
>   Folgen Sie dem [gleichen Verfahren](#aktualisieren_der_basisvorlage), wie wir es getan haben, als wir den **Alle Bücher** Link aktualisierten.
> - Sobald Sie die URL-Zuordnung für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansichtsvorlage](#erstellen_der_detailansichtsvorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) so aktualisieren, dass der Autorenlink auf Ihre neue Autorendetailseite zeigt (anstelle einer leeren URL).
>   Der empfohlene Weg, dies zu tun, ist `get_absolute_url()` auf dem Autorenmodell aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Autor:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten so aussehen wie die untenstehenden Screenshots.

![Autorenliste Seite](author_list_page_no_pagination.png)

![Autorendetailseite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist nun abgeschlossen!

In diesem Artikel haben wir gelernt, wie man die generischen klassenbasierten Listen- und Detailansichten verwendet und mit ihnen Seiten erstellt, um unsere Bücher und Autoren anzuzeigen. Auf dem Weg dorthin haben wir über Mustererkennung mit regulären Ausdrücken gelernt und wie Sie Daten von URLs an Ihre Ansichten übergeben können. Wir haben auch ein paar weitere Tricks im Zusammenhang mit der Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginieren kann, sodass unsere Listen auch bei vielen Datensätzen handhabbar bleiben.

In unseren nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen, und dabei Benutzer-Authentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeblicks](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Anfragen erstellen > Verknüpfte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
