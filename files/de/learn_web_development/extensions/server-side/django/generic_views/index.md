---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
short-title: "6: Generische Listen- und Detailansichten"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website um Listen- und Detailseiten für Bücher und Autoren. Hier lernen wir die generischen, klassenbasierten Ansichten kennen und zeigen, wie sie die Menge an Code, die Sie für häufige Anwendungsfälle schreiben müssen, reduzieren können. Zudem gehen wir tiefer auf die URL-Behandlung ein und zeigen, wie man grundlegendes Musterabgleichen durchführt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page">Django-Tutorial Teil 5: Unsere Startseite erstellen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wo und wie man generische klassenbasierte Ansichten verwendet und wie man Muster aus URLs extrahiert und die Informationen an Ansichten übergibt.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website vervollständigen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (oder genauer gesagt, wir zeigen Ihnen, wie Sie die Buchseiten implementieren können, und geben Ihnen die Möglichkeit, die Autorenseiten selbst zu erstellen!)

Der Prozess ähnelt der Erstellung der Indexseite, die wir im vorherigen Tutorial gezeigt haben. Wir müssen immer noch URL-Karten, Ansichten und Vorlagen erstellen. Der Hauptunterschied ist, dass wir für die Detailseiten die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und sie an die Ansicht weiterzugeben. Für diese Seiten werden wir einen völlig anderen Typ von Ansicht demonstrieren: generische klassenbasierte Listen- und Detailansichten. Diese können die Menge des benötigten Ansichten-Codes erheblich reduzieren, wodurch sie einfacher zu schreiben und zu pflegen sind.

Der letzte Teil des Tutorials zeigt, wie man seine Daten paginiert, wenn man generische klassenbasierte Listenansichten verwendet.

## Buchlistenseite

Die Buchlistenseite wird eine Liste aller verfügbaren Buchdatensätze anzeigen, die über die URL `catalog/books/` zugänglich ist. Die Seite wird für jeden Datensatz einen Titel und einen Autor anzeigen, wobei der Titel ein Hyperlink zur zugehörigen Buchdetailseite ist. Die Seite hat die gleiche Struktur und Navigation wie alle anderen Seiten auf der Website, daher können wir die Basisschablone (**base_generic.html**) verwenden, die wir im vorherigen Tutorial erstellt haben.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile, die den Pfad für `'books/'` festlegt, wie unten gezeigt. Genau wie bei der Indexseite definiert diese `path()`-Funktion ein Muster, das mit der URL (**'books/'**) abgeglichen wird, eine Ansichts-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese spezielle Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits `/catalog` übereinstimmt haben, sodass die Ansicht tatsächlich für die URL aufgerufen wird: `/catalog/books/`.

Die Ansichts-Funktion hat ein anderes Format als zuvor — das liegt daran, dass diese Ansicht tatsächlich als Klasse implementiert wird. Wir werden von einer bestehenden generischen Ansichts-Funktion erben, die bereits das meiste von dem, was wir für diese Ansichts-Funktion benötigen, erledigt, anstatt unsere eigene von Grund auf neu zu schreiben.

Für Django-klassenbasierte Ansichten greifen wir auf eine geeignete Ansichts-Funktion zu, indem wir die Klassenmethode `as_view()` aufrufen. Diese erledigt die gesamte Arbeit, eine Instanz der Klasse zu erstellen und sicherzustellen, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht problemlos als reguläre Funktion schreiben (genau wie unsere vorherige Indexansicht), die die Datenbank nach allen Büchern abfragt und dann `render()` aufruft, um die Liste an eine spezifizierte Vorlage zu übergeben. Stattdessen werden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) verwenden — eine Klasse, die von einer bestehenden Ansicht erbt. Da die generische Ansicht bereits die meisten der benötigten Funktionen implementiert und den Best Practices von Django folgt, können wir eine robustere Listenansicht mit weniger Code, weniger Wiederholung und letztendlich weniger Wartung erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das war's! Die generische Ansicht wird die Datenbank abfragen, um alle Datensätze für das spezifizierte Modell (`Book`) zu erhalten, und dann eine Vorlage rendern, die sich unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** befindet (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste der Bücher mit der Vorlagenvariable `object_list` ODER `book_list` zugreifen (d.h. generisch `<der Modellname>_list`).

> [!NOTE]
> Dieser umständliche Pfad für den Speicherort der Vorlage ist kein Tippfehler — die generischen Ansichten suchen Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) innerhalb des Verzeichnisses `/application_name/templates/` der Anwendung (`/catalog/templates/`).

Sie können Attribute hinzufügen, um das Standardverhalten oben zu ändern. Zum Beispiel können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten benötigen, die dieses gleiche Modell verwenden, oder Sie möchten einen anderen Vorlagenvariablennamen verwenden, wenn `book_list` für Ihren speziellen Vorlagenverwendungsfall nicht intuitiv ist. Möglicherweise ist die nützlichste Variation das Ändern/Filtern der Teilmenge der zurückgegebenen Ergebnisse — anstatt alle Bücher aufzulisten, könnten Sie beispielsweise die Top 5 der von anderen Nutzern gelesenen Bücher auflisten.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methoden in klassenbasierten Ansichten überschreiben

Während wir dies hier nicht tun müssen, können Sie auch einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die Methode `get_queryset()` überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Dies ist flexibler als nur das Festlegen des `queryset`-Attributs, wie wir es im vorhergehenden Codefragment getan haben (auch wenn es in diesem Fall keinen wirklichen Vorteil gibt):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z.B. die Liste der Bücher wird standardmäßig übergeben). Das unten stehende Fragment zeigt, wie man eine Variable namens `some_data` zum Kontext hinzufügt (sie wäre dann als Vorlagenvariable verfügbar).

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

- Zuerst den bestehenden Kontext von unserer Superklasse abrufen.
- Dann Ihre neuen Kontextinformationen hinzufügen.
- Dann den neuen (aktualisierten) Kontext zurückgeben.

> [!NOTE]
> Sehen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumente) für viele weitere Beispiele an, was Sie tun können.

### Erstellen der Listenansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text hinein. Wie oben besprochen, ist dies die Standardvorlagendatei, die von der generischen klassenbasierten Listenansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Vorlagen für generische Ansichten sind wie alle anderen Vorlagen (obwohl sich natürlich der an die Vorlage übergebene Kontext/Informationen unterscheiden kann). Wie bei unserer _Index_-Vorlage erweitern wir unsere Basisschablone in der ersten Zeile und ersetzen dann den Block namens `content`.

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

Die Ansicht gibt den Kontext (Liste der Bücher) standardmäßig als `object_list` und `book_list` Aliase weiter; beide funktionieren.

#### Bedingte Ausführung

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else` und `endif` Vorlagentags, um zu überprüfen, ob `book_list` definiert ist und nicht leer ist. Wenn `book_list` leer ist, zeigt die `else`-Klausel einen Text an, der erklärt, dass es keine aufzulistenden Bücher gibt. Wenn `book_list` nicht leer ist, iterieren wir durch die Liste der Bücher.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die obige Bedingung überprüft nur einen Fall, aber Sie können zusätzliche Bedingungen mit dem `elif` Vorlagentag testen (z.B. `{% elif var2 %}`). Weitere Informationen zu bedingten Operatoren finden Sie unter: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal), und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Vorlagentags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor` Vorlagentags, um durch die Buchliste zu schleifen, wie unten gezeigt. Jede Iteration füllt die `book` Vorlagenvariable mit Informationen für das aktuelle Listenelement auf.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie könnten auch das `{% empty %}` Vorlagentag verwenden, um zu definieren, was passiert, wenn die Buchliste leer ist (obwohl unsere Vorlage sich entscheidet, stattdessen eine Bedingung zu verwenden):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Obwohl dies hier nicht verwendet wird, wird innerhalb der Schleife Django auch andere Variablen erstellen, die Sie verwenden können, um die Iteration zu verfolgen. Beispielsweise können Sie die `forloop.last` Variable testen, um eine bedingte Verarbeitung beim letzten Durchlauf der Schleife durchzuführen.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes unter Verwendung der "Dot-Notation" zu (z.B. `book.title` und `book.author`), wobei der Text nach dem `book`-Element der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell direkt in unserer Vorlage aufrufen — in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die verwendet werden könnte, um den zugehörigen Detaildatensatz anzuzeigen. Dies funktioniert, sofern die Funktion keine Argumente hat (es gibt keine Möglichkeit, Argumente zu übergeben!).

> [!NOTE]
> Wir müssen ein wenig auf "Seiteneffekte" achten, wenn wir Funktionen in Vorlagen aufrufen. Hier haben wir lediglich eine URL abzurufen, aber eine Funktion kann fast alles tun — wir würden nicht möchten, dass unsere Datenbank gelöscht wird (zum Beispiel), nur weil wir unsere Vorlage rendern!

#### Aktualisieren der Basisschablone

Öffnen Sie die Basisschablone (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in die URL-Verknüpfung für **Alle Bücher** ein, wie unten dargestellt. Dadurch wird der Link auf allen Seiten aktiviert (wir können dies jetzt erfolgreich einfügen, da wir den "Bücher" URL-Mapping erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht es aus?

Sie werden die Buchliste noch nicht anzeigen können, da uns noch eine Abhängigkeit fehlt — das URL-Mapping für die Buchdetailseiten, das benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir zeigen sowohl Listen- als auch Detailansichten nach dem nächsten Abschnitt.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen über ein bestimmtes Buch an, das über die URL `catalog/book/<id>` (wobei `<id>` der Primärschlüssel des Buches ist) zugänglich ist. Zusätzlich zu den Feldern im `Book`-Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre) listen wir auch die Details der verfügbaren Exemplare (`BookInstances`) auf, einschließlich Status, erwartetes Rückgabedatum, Impressum und ID. Dies ermöglicht es unseren Lesern, nicht nur etwas über das Buch zu erfahren, sondern auch festzustellen, ob bzw. wann es verfügbar ist.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad namens '**book-detail**' hinzu. Diese `path()`-Funktion definiert ein Muster, eine zugeordnete generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_ Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches, das wir sehen möchten, zu erfassen. Die Syntax ist sehr einfach: Winkelklammern definieren den Teil der URL, der erfasst werden soll, wobei der Name der Variablen, die die Ansicht verwenden kann, um auf die erfassten Daten zuzugreifen, eingeschlossen wird. Zum Beispiel wird **\<something>** das markierte Muster erfassen und den Wert der Ansicht als Variable "something" übergeben. Sie können optional den Variablennamen einem [Konverterspezifizierung](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, der die Art der Daten definiert (int, str, slug, uuid, path).

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die als speziell formatiierter String direkt an die Ansicht als Parameter namens `pk` (kurz für Primärschlüssel) übergeben wird. Dies ist die ID, die verwendet wird, um das Buch eindeutig in der Datenbank zu speichern, wie im Buch-Modell definiert.

> [!NOTE]
> Wie zuvor besprochen, ist unsere übereinstimmende URL tatsächlich `catalog/book/<Zahlen>` (weil wir uns in der **catalog**-Anwendung befinden, wird `/catalog/` vorausgesetzt).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_, dass ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parametername verwenden oder die Informationen tatsächlich in einem nicht benannten Argument übergeben.

#### Fortgeschrittene Pfadübereinstimmung/Überblick über reguläre Ausdrücke

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir bieten ihn an, weil es wahrscheinlich nützlich ist, von dieser Option in Ihrer Django-zentrierten Zukunft zu wissen.

Das durch `path()` bereitgestellte Muster-Matching ist einfach und nützlich für die (sehr häufigen) Fälle, in denen man einfach _jede_ Zeichenfolge oder ganze Zahl erfassen möchte. Wenn Sie eine raffiniertere Filterung benötigen (zum Beispiel, nur Zeichenfolgen mit einer bestimmten Anzahl von Zeichen zu filtern), können Sie die Methode [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) verwenden.

Diese Methode wird genau wie `path()` verwendet, ermöglicht es Ihnen jedoch, ein Muster mit einem [regulären Ausdruck](https://docs.python.org/3/library/re.html) anzugeben. Zum Beispiel könnte der vorherige Pfad wie unten gezeigt geschrieben werden:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich leistungsfähiges Werkzeug zur Muster-Mapping. Sie sind, offen gesagt, ziemlich unintuitiv und können für Anfänger einschüchternd sein. Unten ist eine sehr kurze Einführung!

Das erste, was man wissen muss, ist, dass reguläre Ausdrücke üblicherweise unter Verwendung der Rohstring-Literal-Syntax deklariert werden sollten (sie werden wie gezeigt eingeschlossen: **r'\<Ihr regulärer Ausdruckstext geht hier>'**).

Die wichtigsten Teile der Syntax, die Sie für die Deklaration der Mustererfassungen benötigen, sind:

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
      <td>Anfang des Textes abgleichen</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Ende des Textes abgleichen</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Eine Ziffer abgleichen (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Ein Wortzeichen abgleichen, z.B. ein beliebiges Groß- oder Kleinbuchstabenzeichen im
        Alphabet, Ziffer oder das Unterstrich-Zeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Eins oder mehr der vorherigen Zeichen abgleichen. Um zum Beispiel eins oder mehr Ziffern
        abzugleichen, würden Sie <code>\d+</code> verwenden. Um ein oder mehr "a"
        Buchstaben abzugleichen, könnten Sie <code>a+</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Null oder mehr der vorherigen Zeichen abgleichen. Um zum Beispiel nichts oder ein Wort
        abzugleichen, könnten Sie <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Den Teil des Musters innerhalb der Klammern erfassen. Alle erfassten Werte
        werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere Muster
        erfasst werden, werden die zugehörigen Parameter in der Reihenfolge bereitgestellt,
        in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Das Muster (angegeben durch ...) als benannte Variable erfassen (in diesem Fall
        "name"). Die erfassten Werte werden der Ansicht mit dem angegebenen Namen
        übergeben. Ihre Ansicht muss daher ein Parameter mit demselben
        Namen deklariert haben!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Abgleich gegen ein Zeichen im Set. Zum Beispiel wird [abc] auf
        'a' oder 'b' oder 'c' passen; [-\w] wird auf das '-' Zeichen oder auf ein Wortzeichen passen.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können wortwörtlich genommen werden!

Betrachten wir einige reale Beispiele von Mustern:

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
          Dies ist der RE, der in unserem URL-Mapper verwendet wird. Er gleicht eine Zeichenfolge ab, die
          <code>book/</code> am Anfang der Zeile ist (<strong>^book/</strong>),
          dann eins oder mehr Ziffern ( <code>\d+</code>) ,
          und dann endet (ohne nicht-ziffernartige Zeichen vor dem Zeilenendemarkierung).
        </p>
        <p>
          Es erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und
          übergibt sie an die Ansicht in einem Parameter namens 'pk'.
          <strong>Die erfassten Werte werden immer als Zeichenkette übergeben!</strong>
        </p>
        <p>
          Zum Beispiel, würde er auf <code>book/1234</code> passen und eine
          Variable <code>pk='1234'</code> an die Ansicht senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies passt auf die gleichen URLs wie im vorhergehenden Fall. Die erfassten
        Informationen würden als unbenanntes Argument an die Ansicht übergeben.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies passt auf eine Zeichenfolge, die has <code>book/</code> am Anfang der
          Zeile (<strong>^book/</strong>), dann ein oder mehr Zeichen hat, die
          _entweder_ ein '-' oder ein Wortzeichen sind
          (<strong>[-\w]+</strong>), und dann endet. Es erfasst auch diese Zeichenkette
          und übergibt sie an die Ansicht in einem Parameter namens 'stub'.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für einen "Stub". Stubs sind URL-freundliche
          wortbasierte Primärschlüssel für Daten. Sie könnten ein Stub verwenden,
          wenn Sie möchten, dass Ihre Buch-URL informativer ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> statt
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Mustererfassungen in einem Match erfassen und somit viele verschiedene Informationen in einer URL kodieren.

> [!NOTE]
> Als Herausforderung überlegen Sie sich, wie Sie eine URL codieren könnten, um alle Bücher aufzulisten, die in einem bestimmten Jahr, Monat, Tag veröffentlicht wurden und dem RE, das verwendet werden könnte, um es abzugleichen.

#### Übergeben zusätzlicher Optionen in Ihre URL-Mappings

Ein Merkmal, das wir hier nicht verwendet haben, das Sie jedoch als wertvoll erachten könnten, ist, dass Sie ein [Wörterbuch mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht übergeben können (unter Verwendung des dritten unbenannten Arguments der `path()`-Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden möchten und Daten übergeben möchten, um deren Verhalten in jedem Fall zu konfigurieren.

Zum Beispiel wird Django für den unten gezeigten Pfad bei einer Anfrage an `/my-url/halibut/` `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Wörterbuchoptionen werden der Ansicht als _benannte_ Argumente übergeben. Wenn Sie **denselben Namen** sowohl für ein erfasstes Muster als auch einen Wörterbuchschlüssel verwenden, wird die Wörterbuchoption verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das war's! Alles, was Sie noch tun müssen, ist eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird ihr die Datenbankinformationen für den spezifischen `Book`-Datensatz übermitteln, die vom URL-Mapping extrahiert wurden. Innerhalb der Vorlage können Sie auf die Buchdetails mit der Vorlagenvariablen `object` ODER `book` zugreifen (d.h. generisch `the_model_name`).

Falls nötig, können Sie die verwendete Vorlage ändern und den Namen des Kontextobjekts ändern, das in der Vorlage auf das Buch verweist. Sie können auch Methoden überschreiben, um zum Beispiel zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, wird die generische klassenbasierte Detailansicht automatisch eine `Http404`-Ausnahme auslösen — in der Produktion wird dies automatisch eine entsprechende "Ressource nicht gefunden"-Seite anzeigen, die Sie falls gewünscht anpassen können.

Nur um Ihnen eine Vorstellung davon zu geben, wie dies funktioniert, zeigt das folgende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie die generische klassenbasierte Detailansicht **nicht** verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zuerst, den spezifischen Buchdatensatz aus dem Modell zu bekommen. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404`-Ausnahme erheben, um anzuzeigen, dass das Buch "nicht gefunden" wurde. Der letzte Schritt besteht dann, wie üblich, darin, `render()` mit dem Vorlagennamen und den Buchdaten im `Kontext`-Parameter (als Wörterbuch) aufzurufen.

Eine andere Methode, dies zu tun, wenn Sie keine generische Ansicht verwenden, wäre, die Funktion `get_object_or_404()` aufzurufen. Dies ist eine Abkürzung, um eine `Http404`-Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detailansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und geben Sie ihr den unten stehenden Inhalt. Wie oben besprochen, ist dies der Standardvorlagendateiname, der von der generischen klassenbasierten _Detail_-Ansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

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
> Der Autorenlink in der oben stehenden Vorlage hat eine leere URL, da wir noch keine Detailseite für Autoren erstellt haben, auf die sie verlinkt werden kann.
> Sobald die Detailseite existiert, können wir ihre URL auf zwei Arten erhalten:
>
> - Verwenden Sie das `url` Vorlagentag, um die 'author-detail'-URL (definiert im URL-Mapper) umzukehren, dabei das Autor-Instanz-Objekt für das Buch übergebend:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die Methode `get_absolute_url()` des Autoren-Modells auf (dies führt die gleiche Umkehrung durch):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Obwohl beide Methoden effektiv dasselbe tun, wird `get_absolute_url()` bevorzugt, da es hilft, konsistenten und wartbaren Code zu schreiben (Änderungen müssen nur an einer Stelle vorgenommen werden: im Autorenmodell).

Obwohl etwas umfangreicher, wurde in dieser Vorlage fast alles bereits erklärt:

- Wir erweitern unsere Basisschablone und überschreiben den "content"-Block.
- Wir verwenden bedingte Verarbeitung, um festzustellen, ob bestimmter Inhalt angezeigt werden soll oder nicht.
- Wir verwenden `for`-Schleifen, um durch Objektlisten zu schleifen.
- Wir greifen auf die Kontextfelder mit der Punktnotation zu (da wir die generische Detailansicht verwendet haben, ist der Kontext `book` benannt; wir könnten auch `object` verwenden)

Das erste interessante Ding, das wir vorher nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird "automatisch" von Django erstellt, um die Menge der `BookInstance`-Datensätze zurückzugeben, die mit einem bestimmten `Book` verbunden sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist erforderlich, weil Sie ein `ForeignKey` (eins-zu-viele) Feld nur auf der "viele"-Seite der Beziehung (die `BookInstance`) deklarieren. Da Sie nichts tun, um die Beziehung im anderen ("einen") Modell zu deklarieren, hat es (das `Book`) kein Feld, um die Menge der zugehörigen Datensätze abzurufen. Um dieses Problem zu überwinden, erstellt Django eine angemessen benannte "umgekehrte Suchfunktion", die Sie verwenden können. Der Name der Funktion wird durch Anwenden des Modellnamens (in Kleinbuchstaben), gefolgt von `_set`, konstruiert (d.h. die Funktion, die im `Book` erstellt wird, ist `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze abzurufen (der Standard). Während Sie die `filter()`-Methode verwenden können, um eine Teilmenge von Datensätzen im Code zu erhalten, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente an Funktionen übergeben können.
>
> Beachten Sie auch, dass Sie Fehler von dem Entwicklungsserver sehen werden, wenn Sie keine Ordnung (entweder auf Ihrer klassenbasierter Ansicht oder dem Modell) definieren wie zum Beispiel dieser:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Das passiert, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass in Ihrem zugrundeliegenden Datenbanksystem ein ORDER BY ausgeführt wird. Ohne dies kann es nicht sicherstellen, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge vorliegen!
>
> Dieses Tutorial hat **Paginierung** (noch!) nicht behandelt, aber da Sie `sort_by()` nicht verwenden und einen Parameter übergeben können (dasselbe wie `filter()` oben beschrieben), müssen Sie zwischen drei Optionen wählen:
>
> 1. Ein `ordering` innerhalb einer `class Meta`-Deklaration in Ihrem Modell hinzufügen.
> 2. Ein `queryset`-Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzufügen, das ein `order_by()` spezifiziert.
> 3. Eine `get_queryset`-Methode in Ihre benutzerdefinierte klassenbasierte Ansicht hinzufügen und dabei auch `order_by()` spezifizieren.
>
> Wenn Sie sich entscheiden, eine `class Meta` für das `Author`-Modell zu verwenden (wahrscheinlich nicht so flexibel wie die Anpassung der klassenbasierten Ansicht, aber einfach genug), würden Sie mit so etwas wie diesem enden:
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
> Natürlich muss das Feld nicht `last_name` sein: es kann jedes andere Feld sein.
>
> Zuletzt aber nicht zuletzt sollten Sie nach einem Attribut/Spalte sortieren, das/die tatsächlich einen Index (eindeutig oder nicht) in Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich wird dies hier nicht notwendig sein (wir sind wahrscheinlich mit so wenigen Büchern und Benutzern unserer Zeit voraus), aber es ist etwas, an das Sie für zukünftige Projekte denken sollten.

Das zweite interessante (und nicht offensichtliche) Ding in der Vorlage ist, wo wir den Status-Text für jedes Buch-Exemplar anzeigen ("verfügbar", "in Wartung", etc.).
Aufmerksame Leser werden bemerken, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text zu bekommen, nicht im Rest des Codes erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [Choices-Feld](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist.
Django erstellt automatisch eine Methode `get_foo_display()` für jedes Choices-Feld `foo` in einem Modell, das verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um sowohl die Buchlisten- als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf einen Autor oder einen Autorendetail-Link — diese werden Sie in der Herausforderung erstellen!

Klicken Sie auf den **Alle Bücher**-Link, um die Liste der Bücher anzuzeigen.

![Buchlistenseite](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles korrekt eingerichtet ist, sollten Sie etwas wie den folgenden Screenshot sehen.

![Buchdetailseite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur ein paar Datensätze haben, wird unsere Buchlistenseite gut aussehen. Wenn Sie jedoch in den Bereich der Zehner oder Hunderter von Datensätzen kommen, wird die Seite immer länger zum Laden brauchen (und wird zu viel Inhalt haben, um sie sinnvoll durchzusehen). Die Lösung für dieses Problem ist, Paginierung zu Ihren Listenansichten hinzuzufügen, wodurch die Anzahl der auf jeder Seite angezeigten Elemente reduziert wird.

Django hat eine ausgezeichnete eingebaute Unterstützung für Paginierung. Noch besser: Diese ist in die generischen klassenbasierten Listenansichten integriert, sodass Sie nicht viel tun müssen, um dies zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die `paginate_by`-Zeile hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung wird die Ansicht, sobald Sie mehr als 10 Datensätze haben, beginnen, die Daten zu paginieren, die sie an die Vorlage sendet.
Die verschiedenen Seiten werden unter Verwendung von GET-Parametern aufgerufen — um auf Seite 2 zuzugreifen, würde man die URL `/catalog/books/?page=2` verwenden.

### Vorlagen

Da die Daten jetzt paginiert sind, müssen wir die Unterstützung zu der Vorlage hinzufügen, um durch den Ergebnissatz zu blättern. Da wir möglicherweise alle Listenansichten paginieren möchten, fügen wir dies zur Basisschablone hinzu.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und finden Sie den "Inhaltsblock" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock unmittelbar nach dem `{% endblock %}`. Der Code überprüft zuerst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Wenn ja, fügt er _nächste_ und _vorherige_ Links falls zutreffend hinzu (sowie die aktuelle Seitennummer).

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

Der `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects)-Objekt, der existiert, wenn Paginierung auf der aktuellen Seite verwendet wird. Er erlaubt es Ihnen, alle Informationen über die aktuelle Seite zu erhalten, vorherige Seiten, wie viele Seiten es gibt, etc.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL zu bekommen, um die Paginierungslinks zu erstellen. Dies ist nützlich, da es unabhängig von dem Objekt ist, das wir paginieren.

Das war es!

### Wie sieht es aus?

Der Screenshot unten zeigt, wie die Paginierung aussieht — wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie dies einfacher testen, indem Sie die in der Linie der `paginate_by` angegebenen Zahl in Ihrer **catalog/views.py**-Datei senken. Um das unten gezeigte Ergebnis zu erhalten, haben wir es auf `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, wobei je nach der Seite, auf der Sie sich befinden, nächste/vorherige Links angezeigt werden.

![Buchlistenseite - paginiert](book_list_paginated.png)

## Fordern Sie sich heraus

Die Herausforderung in diesem Artikel besteht darin, die Autorendetails und Listenansichten zu erstellen, die erforderlich sind, um das Projekt abzuschließen. Diese sollten unter folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Mappings und die Ansichten erforderliche Code sollte praktisch identisch mit den `Book`-Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden unterschiedlich sein, aber ähnliches Verhalten aufweisen.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenlistenseite erstellt haben, müssen Sie auch den **Alle Autoren**-Link in der Basisschablone aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_der_basisschablone), wie wir es beim Aktualisieren des **Alle Bücher**-Links getan haben.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansichtsvorlage](#erstellen_der_detailansichtsvorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, sodass der Autorenlink zu Ihrer neuen Autorendetailseite zeigt (anstatt zu einer leeren URL).
>   Die empfohlene Methode dafür ist das Aufrufen von `get_absolute_url()` im Autorenmodell, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Autor:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten ungefähr wie die unten stehenden Screenshots aussehen.

![Autorenlistenseite](author_list_page_no_pagination.png)

![Autorendetailseite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist jetzt vollständig!

In diesem Artikel haben wir gelernt, wie man die generischen klassenbasierten Listen- und Detailansichten verwendet und wie man damit Ansichtsseiten für unsere Bücher und Autoren erstellt. Auf dem Weg haben wir gelernt, wie man Musterabgleich mit regulären Ausdrücken durchführt und Daten von URLs an Ihre Ansichten übermittelt. Wir haben auch ein paar weitere Tricks zum Verwenden von Vorlagen gelernt. Schließlich haben wir gezeigt, wie man Listenansichten paginiert, damit unsere Listen auch dann handhabbar bleiben, wenn wir viele Datensätze haben.

In unseren nächsten Artikeln erweitern wir diese Bibliothek, um Benutzerkonten zu unterstützen, und zeigen dabei Benutzerautorisierung, Berechtigungen, Sitzungen und Formulare.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumente)
- [Generische Display-Ansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumente)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumente)
- [Eingebaute Vorlagentags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumente)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumente)
- [Anfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
