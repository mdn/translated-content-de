---
title: "Django Tutorial Teil 6: Generische Listen- und Detailansichten"
slug: Learn/Server-side/Django/Generic_views
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website um Listen- und Detailseiten für Bücher und Autoren. Hier lernen Sie generische klassenbasierte Ansichten kennen und erfahren, wie diese helfen können, den Code zu reduzieren, den Sie für häufige Anwendungsfälle schreiben müssen. Wir werden auch das URL-Handling detaillierter betrachten und zeigen, wie Sie grundlegende Mustererkennung durchführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschluss aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Home_page">Django Tutorial Teil 5: Erstellen unserer Startseite</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wo und wie Sie generische klassenbasierte Ansichten verwenden und wie Sie Muster aus URLs extrahieren und die Informationen an Ansichten weitergeben.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website abschließen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (oder genauer gesagt, wir zeigen Ihnen, wie Sie die Buchseiten implementieren, und Sie erstellen die Autorenseiten selbst).

Der Vorgang ähnelt dem Erstellen der Index-Seite, das wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Karten, Ansichten und Vorlagen erstellen. Der Hauptunterschied besteht darin, dass wir für die Detailseiten die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und an die Ansicht weiterzugeben. Für diese Seiten werden wir einen völlig anderen Ansichtstyp demonstrieren: generische klassenbasierte Listen- und Detailansichten. Diese können die Menge an benötigtem Ansichtscode erheblich reduzieren, sodass sie leichter zu schreiben und zu pflegen sind.

Der letzte Teil des Tutorials demonstriert, wie Sie Ihre Daten paginieren können, wenn Sie generische klassenbasierte Listenansichten verwenden.

## Buchlistenseite

Die Buchlistenseite zeigt eine Liste aller verfügbaren Buchdatensätze auf der Seite an, die über die URL `catalog/books/` zugänglich ist. Die Seite zeigt einen Titel und einen Autor für jeden Eintrag, wobei der Titel ein Hyperlink zu der zugehörigen Buchdetailseite ist. Die Seite hat die gleiche Struktur und Navigation wie alle anderen Seiten auf der Seite, und wir können daher das Basistemplate (**base_generic.html**) erweitern, das wir im vorherigen Tutorial erstellt haben.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile, die den Pfad für `'books/'` festlegt, wie unten gezeigt. Genau wie bei der Indexseite definiert diese `path()` Funktion ein Muster, das mit der URL (**'books/'**) abgeglichen wird, eine Ansichts-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese spezielle Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits `/catalog` übereinstimmen, sodass die Ansicht tatsächlich für die URL aufgerufen wird: `/catalog/books/`.

Die Ansichts-Funktion hat ein anderes Format als zuvor – das liegt daran, dass diese Ansicht als Klasse implementiert wird. Wir werden eine bestehende generische Ansichts-Funktion erben, die bereits das meiste von dem tut, was wir von dieser Ansichts-Funktion erwarten, anstatt unsere eigene von Grund auf neu zu schreiben.

Bei Django klassenbasierten Ansichten greifen wir auf eine geeignete Ansichts-Funktion zu, indem wir die Klassenmethode `as_view()` aufrufen. Dies erledigt die gesamte Arbeit, eine Instanz der Klasse zu erstellen und sicherzustellen, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht ziemlich leicht als reguläre Funktion schreiben (genau wie unsere vorherige Indexansicht), die die Datenbank nach allen Büchern abfragen und dann `render()` aufrufen würde, um die Liste an ein bestimmtes Template zu übergeben. Stattdessen werden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) verwenden — eine Klasse, die von einer bestehenden Ansicht erbt. Da die generische Ansicht bereits die meiste Funktionalität implementiert, die wir benötigen und den Best Practices von Django folgt, werden wir in der Lage sein, eine robustere Listenansicht mit weniger Code, weniger Wiederholungen und letztendlich weniger Wartungsaufwand zu erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das war's! Die generische Ansicht wird die Datenbank abfragen, um alle Datensätze für das angegebene Modell (`Book`) zu erhalten und dann eine Vorlage rendern, die sich unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** befindet (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste der Bücher mit der Template-Variable namens `object_list` ODER `book_list` zugreifen (d.h. generisch `<der Modellname>_list`).

> [!NOTE]
> Dieser umständliche Pfad für den Vorlage-Standort ist kein Druckfehler — die generischen Ansichten suchen nach Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) im `/application_name/templates/` Verzeichnis der Anwendung (`/catalog/templates/`).

Sie können Attribute hinzufügen, um das Standardverhalten oben zu ändern. Zum Beispiel können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dieses gleiche Modell verwenden, oder Sie möchten möglicherweise einen anderen Vorlagenvariablennamen verwenden, wenn `book_list` für Ihre spezielle Vorlagenanwendung nicht intuitiv ist. Wahrscheinlich die nützlichste Variation besteht darin, den Teil der zurückgegebenen Ergebnisse zu ändern/filtern — anstatt also alle Bücher aufzulisten, können Sie die Top 5 Bücher auflisten, die von anderen Nutzern gelesen wurden.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methoden in klassenbasierten Ansichten überschreiben

Obwohl wir das hier nicht tun müssen, können Sie auch einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die Methode `get_queryset()` überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Dies ist flexibler als nur das Festlegen des `queryset` Attributs, wie wir es im vorherigen Codefragment getan haben (obwohl es in diesem Fall keinen wirklichen Vorteil gibt):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir können auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z.B. die Büchereiste wird standardmäßig übergeben). Das untenstehende Fragment zeigt, wie Sie eine Variable namens `some_data` zum Kontext hinzufügen (sie wäre dann als Vorlagenvariable verfügbar).

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

Wenn Sie dies tun, ist es wichtig, das oben verwendete Muster zu befolgen:

- Zuerst den vorhandenen Kontext von unserer Superklasse erhalten.
- Dann Ihre neuen Kontextinformationen hinzufügen.
- Dann den neuen (aktualisierten) Kontext zurückgeben.

> [!NOTE]
> Schauen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation) für viele weitere Beispiele an, was Sie tun können.

### Erstellen der Listenansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text hinein. Wie oben besprochen, ist dies die Standardvorlagendatei, die von der generischen klassenbasierten Listenansicht (für ein Modell namens `Book` in einer Anwendung namens `catalog`) erwartet wird.

Vorlagen für generische Ansichten sind genauso wie andere Vorlagen (obwohl sich der übergebene Kontext/die Informationen unterscheiden können).
Wie bei unserer _index_ Vorlage erweitern wir unsere Basistemplate in der ersten Zeile und ersetzen dann den Block namens `content`.

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

Die Ansicht übergibt den Kontext (Liste der Bücher) standardmäßig als `object_list` und `book_list` Aliase; beide funktionieren.

#### Bedingte Ausführung

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else` und `endif` Vorlagen-Tags, um zu überprüfen, ob `book_list` definiert und nicht leer ist.
Wenn `book_list` leer ist, zeigt die `else`-Anweisung Text an, der erklärt, dass es keine Bücher zum Auflisten gibt.
Wenn `book_list` nicht leer ist, iterieren wir durch die Liste der Bücher.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die Bedingung oben prüft nur auf einen Fall, aber Sie können zusätzliche Bedingungen mit dem `elif` Vorlagen-Tag testen (z.B. `{% elif var2 %}`).
Weitere Informationen zu bedingten Operatoren finden Sie unter: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal) und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Vorlagen-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### For-Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor` Vorlagen-Tags, um durch die Buchliste zu iterieren, wie unten gezeigt.
Jede Iteration füllt die `book` Vorlagenvariable mit Informationen für das aktuelle Listenelement.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie können auch das `{% empty %}` Vorlagen-Tag verwenden, um festzulegen, was passiert, wenn die Buchliste leer ist (obwohl unsere Vorlage anstelle dessen eine Bedingung verwendet):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Auch wenn hier nicht verwendet, innerhalb der Schleife erstellt Django auch andere Variablen, die Sie verwenden können, um die Iteration zu verfolgen.
Zum Beispiel können Sie die Variable `forloop.last` testen, um im letzten Durchlauf der Schleife eine bedingte Verarbeitung durchzuführen.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes mithilfe der "punktierten Notation" zu (z.B. `book.title` und `book.author`), wobei der Text nach dem `book` Element der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell aus unserer Vorlage heraus aufrufen — in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die Sie zur Anzeige des zugehörigen Detaildatensatzes verwenden könnten. Dies funktioniert, sofern die Funktion keine Argumente hat (es gibt keine Möglichkeit, Argumente zu übergeben!).

> [!NOTE]
> Wir müssen beim Aufrufen von Funktionen in Vorlagen ein wenig auf "Seiteneffekte" achten. Hier bekommen wir einfach eine URL angezeigt, aber eine Funktion kann so ziemlich alles tun — wir möchten nicht, dass unsere Datenbank gelöscht wird (zum Beispiel), nur indem wir unsere Vorlage rendern!

#### Aktualisieren der Basistemplate

Öffnen Sie die Basistemplate (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Dadurch wird der Link auf allen Seiten aktiviert (wir können dies jetzt erfolgreich einfügen, da wir den "Bücher"-URL-Mapper erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht es aus?

Sie können die Buchliste noch nicht erstellen, da uns noch eine Abhängigkeit fehlt — der URL-Mapper für die Buchdetailseiten, der erforderlich ist, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir zeigen sowohl die Listen- als auch die Detailansichten nach dem nächsten Abschnitt.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen zu einem bestimmten Buch an, die über die URL `catalog/book/<id>` zugänglich sind (wobei `<id>` der Primärschlüssel für das Buch ist). Neben den Feldern im `Book` Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre) listen wir auch die Details der verfügbaren Exemplare (`BookInstances`) auf, einschließlich des Status, des erwarteten Rückgabedatums, des Impressums und der ID. Dies ermöglicht es unseren Lesern nicht nur, über das Buch zu erfahren, sondern auch zu bestätigen, ob/wann es verfügbar ist.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad namens '**book-detail**' hinzu.
Diese `path()` Funktion definiert ein Muster, eine zugeordnete generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_ Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches zu erfassen, das wir sehen möchten.
Die Syntax ist sehr einfach: Mit spitzen Klammern wird der Teil der URL definiert, der erfasst werden soll, wobei der Name der Variablen angegeben ist, die die Ansicht verwenden kann, um auf die erfassten Daten zuzugreifen.
Zum Beispiel **\<etwas>** erfasst das markierte Muster und übergibt den Wert an die Ansicht als Variable "etwas". Sie können optional dem Variablennamen eine [Konverterspezifikation](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Datentyp (int, str, slug, uuid, path) definiert.

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenkette sein muss, und sie an die Ansicht als Parameter namens `pk` (kurz für Primärschlüssel) zu übergeben. Dies ist die ID, die zur eindeutigen Speicherung des Buches in der Datenbank verwendet wird, wie im Buchmodell definiert.

> [!NOTE]
> Wie bereits besprochen, ist unsere übereinstimmende URL tatsächlich `catalog/book/<digits>` (weil wir uns in der **catalog** Anwendung befinden, wird `/catalog/` angenommen).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_, dass ihr ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parameternamen verwenden oder die Information in einem unbenannten Argument übergeben.

#### Erweitertes Pfad-Matching/Einführung in reguläre Ausdrücke

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir bieten es an, weil das Wissen über diese Option für Ihre zukunftsgerichtete Django-Nutzung wahrscheinlich nützlich sein wird.

Das Muster-Matching, das von `path()` bereitgestellt wird, ist einfach und nützlich für die (sehr häufigen) Fälle, in denen Sie einfach _jedes_ Zeichen oder jede Zahl erfassen möchten. Wenn Sie eine raffiniertere Filterung benötigen (z.B. um nur Zeichenfolgen zu filtern, die eine bestimmte Anzahl von Zeichen haben), können Sie die [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) Methode verwenden.

Diese Methode wird genau wie `path()` verwendet, außer dass sie Ihnen erlaubt, ein Muster mit einem [Regulären Ausdruck](https://docs.python.org/3/library/re.html) zu spezifizieren. Zum Beispiel könnte der vorherige Pfad wie unten gezeigt geschrieben werden:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Werkzeug zur Mustererkennung. Sie sind, offen gesagt, ziemlich unintuitiv und können für Anfänger einschüchternd sein. Unten ist eine sehr kurze Einführung!

Das Erste, was Sie wissen müssen, ist, dass reguläre Ausdrücke normalerweise mit der Raw-String-Literal-Syntax deklariert werden sollten (d.h. sie werden wie gezeigt eingeschlossen: **r'\<Ihr regulärer Ausdruckstext>'**).

Die Hauptteile der Syntax, die Sie für die Deklaration der Mustergleichungen benötigen, sind:

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
      <td>Beginnt am Anfang des Textes abzugleichen</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Endet am Ende des Textes abzugleichen</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Stimmt mit einer Ziffer überein (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Stimmt mit einem Wortzeichen überein, z.B. einem beliebigen Groß- oder Kleinbuchstaben im Alphabet, einer Ziffer oder dem Unterstrichzeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Stimmt mit einem oder mehreren der vorangegangenen Zeichen überein. Um zum Beispiel eine oder mehrere Ziffern abzugleichen, würden Sie <code>\d+</code> verwenden. Um eine oder mehrere "a" Zeichen abzugleichen, könnten Sie <code>a+</code> verwenden
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Stimmt mit null oder mehr der vorangegangenen Zeichen überein. Um zum Beispiel nichts oder ein Wort abzugleichen, könnten Sie <code>\w*</code> verwenden
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Erfasst den Teil des Musters innerhalb der Klammern. Alle erfassten Werte werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere Muster erfasst werden, werden die zugehörigen Parameter in der Reihenfolge geliefert, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfasst das Muster (angezeigt durch ...) als eine benannte Variable (in diesem Fall "name"). Die erfassten Werte werden an die Ansicht mit dem angegebenen Namen übergeben. Ihre Ansicht muss daher einen Parameter mit demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Stimmt mit einem Zeichen aus der Menge überein. Zum Beispiel stimmt [abc] mit 'a' oder 'b' oder 'c' überein. [-\w] stimmt mit dem '-' Zeichen oder einem beliebigen Wortzeichen überein.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können wörtlich interpretiert werden!

Betrachten wir einige echte Beispiele für Muster:

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
          Dies ist der reguläre Ausdruck, der in unserem URL-Mapper verwendet wird. Er stimmt mit einer Zeichenkette überein, die
          <code>book/</code> am Beginn der Zeile hat (<strong>^book/</strong>),
          dann eine oder mehrere Ziffern (<code>\d+</code>), und dann enden (ohne
          nicht-ziffernartige Zeichen) vor dem Endmarker.
        </p>
        <p>
          Er erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und
          übergibt sie an die Ansicht in einem Parameter namens 'pk'.
          <strong>Die erfassten Werte werden immer als String übergeben!</strong>
        </p>
        <p>
          Zum Beispiel würde dies <code>book/1234</code> entsprechen und eine
          Variable <code>pk='1234'</code> an die Ansicht senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies entspricht denselben URLs wie im vorangegangenen Fall. Die erfassten
        Informationen würden als unbenanntes Argument an die Ansicht weitergegeben.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies stimmt mit einer Zeichenkette ab, die <code>book/</code> am Beginn der
          Zeile (<strong>^book/</strong>) hat, dann ein oder mehrere Zeichen, die
          <em>entweder</em> ein '-' oder ein Wortzeichen sind
          (<strong>[-\w]+</strong>), und dann endet. Es erfasst auch diese Menge von
          Zeichen und übergibt sie an die Ansicht in einem Parameter namens 'stub'.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für ein "Stub". Stubs sind
          URL-freundliche, auf Wörtern basierende Primärschlüssel für Daten. Sie
          könnten einen Stub verwenden, wenn Sie möchten, dass Ihre Buch-URL informativer
          ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> statt
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Muster in einem Match erfassen und daher viele verschiedene Informationen in einer URL kodieren.

> [!NOTE]
> Als Herausforderung überlegen Sie, wie Sie eine URL codieren könnten, um alle in einem bestimmten Jahr, Monat, Tag veröffentlichten Bücher aufzulisten, und den regulären Ausdruck, der verwendet werden könnte, um sie zu erfassen.

#### Zusätzliche Optionen in Ihren URL-Karten übergeben

Eine Funktion, die wir hier nicht verwendet haben, die Sie jedoch als wertvoll empfinden könnten, besteht darin, ein [Wörterbuch mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht zu übergeben (mittels des dritten unbenannten Arguments der `path()` Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden und Daten weitergeben möchten, um ihr Verhalten in jedem Fall zu konfigurieren.

Zum Beispiel, für den folgenden Pfad, für eine Anfrage an `/my-url/halibut/` wird Django `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Wörterbuchoptionen werden als _benannte_ Argumente an die Ansicht übergeben. Wenn Sie denselben Namen für sowohl ein erfassendes Muster als auch einen Wörterbuchschlüssel verwenden, wird die Wörterbuchoption verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das war's! Alles, was Sie jetzt tun müssen, ist eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird ihr die Datenbankinformationen für den spezifischen `Book` Datensatz übergeben, der vom URL-Mapper extrahiert wurde. Innerhalb der Vorlage können Sie auf die Buchdetails mit der Template-Variable namens `object` ODER `book` zugreifen (d.h. generisch `the_model_name`).

Falls erforderlich, können Sie die verwendete Vorlage und den Namen des Kontextobjekts ändern, um auf das Buch in der Vorlage zu verweisen. Sie können auch Methoden überschreiben, um z.B. zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was geschieht, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, wird die generische klassenbasierte Detailansicht automatisch eine `Http404` Ausnahme auslösen — in der Produktion wird automatisch eine entsprechende "Ressource nicht gefunden" Seite angezeigt, die Sie bei Bedarf anpassen können.

Nur um Ihnen eine Ahnung davon zu geben, wie dies funktioniert, demonstriert das untenstehende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie die generische klassenbasierte Detailansicht **nicht** verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zunächst, den spezifischen Buchdatensatz aus dem Modell zu erhalten. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404` Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" wurde. Der letzte Schritt besteht dann, wie üblich, darin, `render()` mit dem Vorlagennamen und den Buchdaten im `context` Parameter aufzurufen (als Wörterbuch).

Eine andere Möglichkeit, dies zu tun, wenn Sie keine generische Ansicht verwenden, wäre, die Funktion `get_object_or_404()` aufzurufen.
Dies ist eine Abkürzung, um eine `Http404` Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detailansicht Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und geben Sie ihr den untenstehenden Inhalt. Wie oben besprochen, ist dies der Standardvorlage-Dateiname, der von der generischen klassenbasierten _Detail_ Ansicht (für ein Modell namens `Book` in einer Anwendung namens `catalog`) erwartet wird.

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
> Der Autoren-Link in der obigen Vorlage hat eine leere URL, da wir noch keine Autorendetailseite erstellt haben, auf die verwiesen werden kann.
> Sobald die Detailseite existiert, können wir ihre URL mit einer der beiden folgenden Ansätzen erhalten:
>
> - Verwenden Sie das `url` Vorlagen-Tag, um die 'author-detail' URL (definiert im URL-Mapper) zu reversen, indem Sie die Autor-Instanz für das Buch übergeben:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die `get_absolute_url()` Methode des Autorenmodells auf (dies führt die gleiche Revering-Operation aus):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Während beide Methoden effektiv dasselbe tun, wird `get_absolute_url()` bevorzugt, weil es Ihnen hilft, konsistenten und wartbaren Code zu schreiben (Änderungen müssen nur an einer Stelle vorgenommen werden: dem Autorenmodell).

Wenn auch etwas größer, wurde fast alles in dieser Vorlage bereits beschrieben:

- Wir erweitern unsere Basistemplate und überschreiben den "content" Block.
- Wir nutzen bedingte Verarbeitung, um zu bestimmen, ob bestimmter Inhalt angezeigt wird oder nicht.
- Wir nutzen `for`-Schleifen, um durch Listen von Objekten zu iterieren.
- Wir greifen auf die Kontextfelder mit der Punktnotation zu (da wir die generische Detailansicht genutzt haben, wird der Kontext `book` genannt; wir könnten auch `object` verwenden)

Das erste interessante, was wir noch nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automatisch konstruiert", um die Menge der `BookInstance` Datensätze zurückzugeben, die mit einem bestimmten `Book` assoziiert sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist erforderlich, weil Sie ein `ForeignKey` (eins-zu-viele) Feld nur auf der Seite "viele" der Beziehung deklarieren (die `BookInstance`). Da Sie nichts tun, um die Beziehung im anderen (d.h. "einem") Modell zu deklarieren, hat es (das `Book`) kein Feld, um die Menge der zugehörigen Datensätze zu erhalten. Um dieses Problem zu überwinden, konstruiert Django eine entsprechend benannte "Rückwärtssuchensfunktion", die Sie verwenden können. Der Name der Funktion wird durch die Kleinschreibung des Modellnamens, wo der `ForeignKey` deklariert wurde, gefolgt von `_set` konstruiert (d.h. die in `Book` erstellte Funktion ist `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze zu erhalten (der Standard). Während Sie die `filter()` Methode im Code verwenden können, um eine Teilmenge von Datensätzen zu erhalten, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente an Funktionen übergeben können.
>
> Denken Sie auch daran, dass wenn Sie keine Reihenfolge (auf Ihrer klassenbasierten Ansicht oder Ihrem Modell) definieren, Sie auch Fehler vom Entwicklungsserver wie diesen hier sehen werden:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Dies passiert, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass auf Ihrer zugrunde liegenden Datenbank irgendeine ORDER BY-Ausführung durchgeführt wird. Ohne dies kann es sich nicht sicher sein, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat **Paginierung** noch nicht abgedeckt (noch nicht!), aber da Sie `sort_by()` nicht verwenden und ein Parameter übergeben können (wie bei `filter()` oben beschrieben), müssen Sie zwischen drei Optionen wählen:
>
> 1. Ein `ordering` innerhalb einer `class Meta`-Deklaration in Ihrem Modell hinzufügen.
> 2. Ein `queryset` Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzufügen und ein `order_by()` spezifizieren.
> 3. Eine `get_queryset` Methode zu Ihrer benutzerdefinierten klassenbasierten Ansicht hinzufügen und auch das `order_by()` spezifizieren.
>
> Wenn Sie sich dafür entscheiden, ein `class Meta` für das `Author` Modell hinzuzufügen (wahrscheinlich nicht so flexibel wie das Anpassen der klassenbasierten Ansicht, aber einfach genug), erhalten Sie etwas wie dieses:
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
> Natürlich muss das Feld nicht `last_name` sein: es könnte jedes andere sein.
>
> Zuletzt, aber nicht weniger wichtig, sollten Sie nach einem Attribut/Spalte sortieren, das/die tatsächlich einen Index (einzigartig oder nicht) auf Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich wird das hier nicht notwendig sein (wir sind wahrscheinlich zu weit voraus mit so wenigen Büchern und Benutzern), aber es ist etwas, was man für zukünftige Projekte im Hinterkopf behalten sollte.

Das zweite interessante (und nicht offensichtliche) in der Vorlage ist, wo wir den Status-Text für jedes Buchexemplar anzeigen ("verfügbar", "Wartung", usw.).
Aufmerksame Leser werden feststellen, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text zu erhalten, in dem Code nicht an anderer Stelle erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [Wahlfeld](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist.
Django erstellt automatisch eine Methode `get_foo_display()` für jedes Wahlfeld `foo` in einem Modell, die verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um sowohl die Buchlistenseite als auch die Buchdetailseite anzuzeigen. Führen Sie den Server aus (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autoren- oder Autorendetail-Links — Sie werden diese in der Herausforderung erstellen!

Klicken Sie auf den Link **Alle Bücher**, um die Liste der Bücher anzuzeigen.

![Buchlistenseite](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles richtig eingerichtet ist, sollten Sie etwas Ähnliches wie der folgende Screenshot sehen.

![Buchdetailseite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur ein paar Datensätze haben, sieht unsere Buchlistenseite gut aus. Wenn Sie jedoch in die Zehner oder Hunderte von Datensätzen gehen, wird die Seite immer länger zum Laden brauchen (und viel zu viel Inhalt haben, um sie sinnvoll zu durchsuchen). Die Lösung für dieses Problem besteht darin, Paginierung zu Ihren Listenansichten hinzuzufügen, um die Anzahl der auf jeder Seite angezeigten Elemente zu reduzieren.

Django hat eine hervorragende eingebaute Unterstützung für die Paginierung. Noch besser, dies ist in die generischen klassenbasierten Listenansichten integriert, sodass Sie nicht viel tun müssen, um es zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die `paginate_by` Zeile hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung wird die Ansicht, sobald Sie mehr als 10 Datensätze haben, mit der Paginierung der Daten beginnen, die an die Vorlage gesendet werden.
Die unterschiedlichen Seiten werden mit GET-Parametern abgerufen — um auf Seite 2 zuzugreifen, würden Sie die URL `/catalog/books/?page=2` verwenden.

### Vorlagen

Da nun die Daten paginiert sind, müssen wir die Unterstützung hinzufügen, um in der Vorlage durch das Ergebnisset zu blättern. Da wir alle Listenansichten paginieren möchten, werden wir dies zur Basistemplate hinzufügen.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und finden Sie den "content block" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock unmittelbar nach dem `{% endblock %}` hinein. Der Code überprüft zunächst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Wenn ja, fügt er _nächste_ und _vorherige_ Links hinzu (und die aktuelle Seitennummer).

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

Das `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) Objekt, das existieren wird, wenn Paginierung auf der aktuellen Seite verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, vorherige Seiten, die Anzahl der Seiten usw. zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL für die Erstellung der Paginierungslinks zu erhalten. Dies ist nützlich, weil es unabhängig von dem Objekt ist, das wir paginieren.

Das war's!

### Wie sieht es aus?

Der Screenshot unten zeigt, wie die Paginierung aussieht — falls Sie nicht mehr als 10 Titel in die Datenbank eingegeben haben, können Sie dies leichter testen, indem Sie die Zahl, die in der `paginate_by` Zeile in Ihrer **catalog/views.py** Datei angegeben wurde, senken. Um das untenstehende Ergebnis zu erzielen, haben wir es auf `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, wobei je nach Seite, auf der Sie sich befinden, die nächsten/vorherigen Links angezeigt werden.

![Buchlistenseite - mit Paginierung](book_list_paginated.png)

## Fordern Sie sich selbst heraus

Die Herausforderung in diesem Artikel besteht darin, die Autoren-Detail- und Listenansichten zu erstellen, die erforderlich sind, um das Projekt abzuschließen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Mapper und die Ansichten erforderliche Code sollte nahezu identisch mit den `Book` Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden unterschiedlich sein, zeigen aber ein ähnliches Verhalten.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenlistenseite erstellt haben, müssen Sie auch den **Alle Autoren** Link in der Basistemplate aktualisieren.
>   Folgen Sie demselben [Prozess](#aktualisieren_der_basistemplate), den wir durchgeführt haben, als wir den **Alle Bücher** Link aktualisiert haben.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansichtsvorlage](#erstellen_der_detailansicht_vorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, sodass der Autorenlink auf Ihre neue Autorendetailseite verweist (anstatt auf eine leere URL).
>   Der empfohlene Weg, dies zu tun, besteht darin, `get_absolute_url()` auf dem Autorenmodell aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Autor:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten ungefähr so wie die untenstehenden Screenshots aussehen.

![Autorenlistenseite](author_list_page_no_pagination.png)

![Autorendetailseite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist jetzt vollständig!

In diesem Artikel haben wir gelernt, wie man generische klassenbasierte Listen- und Detailansichten verwendet, und diese genutzt, um Seiten für unsere Bücher und Autoren zu erstellen. Auf dem Weg haben wir gelernt, wie man regelmäßige Ausdrücke für Mustererkennung nutzt und wie Sie Daten aus URLs an Ihre Ansichten weitergeben können. Wir haben auch ein paar weitere Tricks für die Verwendung von Vorlagen gelernt. Schließlich haben wir gezeigt, wie Sie Listenansichten paginieren können, sodass unsere Listen auch dann handhabbar bleiben, wenn wir viele Datensätze haben.

In unseren nächsten Artikeln werden wir diese Bibliothek um die Unterstützung von Benutzerkonten erweitern und dabei Benutzerauthentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Vorlagen-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}
