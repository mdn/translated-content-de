---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
short-title: "6: Generische Listen- und Detailansichten"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, indem Listen- und Detailseiten für Bücher und Autoren hinzugefügt werden. Hier lernen wir über generische, klassenbasierte Ansichten und zeigen, wie sie den Code, den Sie für häufige Anwendungsfälle schreiben müssen, reduzieren können. Wir gehen auch detaillierter auf URL-Handling ein und zeigen, wie man grundlegende Mustererkennung durchführt.

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
        Verstehen, wo und wie man generische, klassenbasierte Ansichten einsetzt und wie man Muster aus URLs extrahiert und die Informationen an Ansichten übergibt.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website vervollständigen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (oder genauer gesagt, wir zeigen, wie Sie die Buchseiten implementieren, und überlassen es Ihnen, die Autorenseiten selbst zu erstellen!)

Der Prozess ist dem Erstellen der Indexseite ähnlich, die wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Maps, Ansichten und Vorlagen erstellen. Der Hauptunterschied bei den Detailseiten besteht darin, dass wir die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und an die Ansicht zu übergeben. Für diese Seiten werden wir einen völlig anderen Ansichtstyp demonstrieren: generische, klassenbasierte Listen- und Detailansichten. Diese können den benötigten View-Code erheblich reduzieren und dessen Erstellung und Wartung erleichtern.

Der letzte Teil des Tutorials wird demonstrieren, wie Sie Ihre Daten paginieren, wenn Sie generische klassenbasierte Listenansichten verwenden.

## Buchlisten-Seite

Die Buchlisten-Seite zeigt eine Liste aller verfügbaren Buchdatensätze auf der Seite, die über die URL: `catalog/books/` aufgerufen wird. Die Seite zeigt den Titel und den Autor für jeden Datensatz an, wobei der Titel ein Hyperlink zur zugehörigen Buchdetailseite ist. Die Seite hat die gleiche Struktur und Navigation wie alle anderen Seiten der Website, und wir können daher die Basistemplate (**base_generic.html**) aus dem vorherigen Tutorial erweitern.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile für den Pfad `'books/'`, wie unten gezeigt.
Wie bei der Indexseite definiert diese `path()`-Funktion ein Muster, das mit der URL (**'books/'**) abgeglichen werden soll, eine Ansichts-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`) und einen Namen für diese spezielle Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits mit `/catalog` übereinstimmen, sodass die Ansicht tatsächlich für die URL `/catalog/books/` aufgerufen wird.

Die Ansichts-Funktion hat ein anderes Format als zuvor — das liegt daran, dass diese Ansicht tatsächlich als Klasse implementiert wird. Wir erben von einer bestehenden generischen Ansichts-Funktion, die bereits das meiste tut, was wir von dieser Ansichts-Funktion erwarten, anstatt unsere eigene von Grund auf zu schreiben.

Für Django klassenbasierte Ansichten greifen wir auf eine geeignete Ansichts-Funktion zu, indem wir die Klassenmethode `as_view()` aufrufen. Diese erledigt die gesamte Arbeit, ein Instanz der Klasse zu erstellen und sicherzustellen, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht ganz einfach als reguläre Funktion schreiben (wie unsere vorherige Indexansicht), die die Datenbank nach allen Büchern abfragt und dann `render()` aufruft, um die Liste an eine bestimmte Vorlage weiterzuleiten. Stattdessen werden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) verwenden — eine Klasse, die von einer bestehenden Ansicht erbt. Da die generische Ansicht bereits den Großteil der benötigten Funktionalität implementiert und den Django-Best-Practices folgt, können wir eine robustere Listenansicht mit weniger Code, weniger Wiederholungen und letztendlich weniger Wartungsaufwand erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code am Ende der Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das ist alles! Die generische Ansicht wird die Datenbank abfragen, um alle Datensätze für das angegebene Modell (`Book`) abzurufen und dann eine Vorlage an **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** zu rendern (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste von Büchern mit der Vorlagenvariablen `object_list` ODER `book_list` zugreifen (d.h. generisch `<der Modellname>_list`).

> [!NOTE]
> Dieser ungewöhnliche Pfad für den Vorlagenpfad ist kein Druckfehler — die generischen Ansichten suchen nach Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) im Verzeichnis `/application_name/templates/` der Anwendung (`/catalog/templates/`).

Sie können Attribute hinzufügen, um das Standardverhalten zu ändern. Zum Beispiel können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dasselbe Modell verwenden, oder Sie möchten vielleicht einen anderen Vorlagenvariablennamen verwenden, wenn `book_list` für Ihren speziellen Vorlagenanwendungsfall nicht intuitiv ist. Möglicherweise ist die nützlichste Variation das Ändern/Filtern des Ergebnissatzes, der zurückgegeben wird — anstatt alle Bücher aufzulisten, möchten Sie möglicherweise die 5 am häufigsten gelesenen Bücher anderer Benutzer auflisten.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Überschreiben von Methoden in klassenbasierten Ansichten

Während wir dies hier nicht tun müssen, können Sie auch einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die Methode `get_queryset()` überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Dies ist flexibler, als nur das Attribut `queryset` zu setzen, wie wir es im vorhergehenden Codefragment getan haben (obwohl es in diesem Fall keinen wirklichen Vorteil bringt):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z. B. die Liste der Bücher wird standardmäßig übergeben). Das Fragment unten zeigt, wie man eine Variable namens `some_data` zum Kontext hinzufügt (sie wäre dann als Vorlagenvariable verfügbar).

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

Es ist wichtig, dem oben verwendeten Muster zu folgen:

- Zuerst den bestehenden Kontext von unserer Superklasse abrufen.
- Dann Ihre neuen Kontextinformationen hinzufügen.
- Dann den neuen (aktualisierten) Kontext zurückgeben.

> [!NOTE]
> Sehen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation) für viele weitere Beispiele an, was man tun kann.

### Erstellen der List View Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text hinein. Wie oben diskutiert, ist dies die standardmäßige Vorlagendatei, die von der generischen klassenbasierten Listenansicht erwartet wird (für ein Modell mit dem Namen `Book` in einer Anwendung mit dem Namen `catalog`).

Vorlagen für generische Ansichten sind wie alle anderen Vorlagen (obwohl natürlich der Kontext/die Informationen, die an die Vorlage übergeben werden, unterschiedlich sein können).
Wie bei unserer _Index_-Vorlage erweitern wir unsere Basistemplate in der ersten Zeile und ersetzen dann den Block mit dem Namen `content`.

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

Die Ansicht übergibt den Kontext (Liste der Bücher) standardmäßig als `object_list` und `book_list` Aliase; beide werden funktionieren.

#### Bedingte Ausführung

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if)-, `else`- und `endif`-Vorlagen-Tags, um zu prüfen, ob das `book_list` definiert ist und nicht leer ist.
Wenn `book_list` leer ist, zeigt die `else`-Klausel einen Text an, der erklärt, dass keine Bücher aufzulisten sind.
Wenn `book_list` nicht leer ist, durchlaufen wir die Bücherliste.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die Bedingung oben prüft nur einen Fall, aber man kann zusätzliche Bedingungen mithilfe des `elif`-Vorlagen-Tags testen (z. B. `{% elif var2 %}`).
Weitere Informationen zu Bedingungsoperatoren finden Sie unter: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal), und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Vorlagen-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for)- und `endfor`-Vorlagen-Tags, um die Buchliste zu durchlaufen, wie unten gezeigt.
Jede Iteration füllt die `book`-Vorlagenvariable mit Informationen für das aktuelle Listenelement.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Man könnte auch das `{% empty %}`-Vorlagen-Tag verwenden, um zu definieren, was passiert, wenn die Buchliste leer ist (obwohl unsere Vorlage stattdessen eine Bedingung verwendet):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Obwohl hier nicht verwendet, erstellt Django innerhalb der Schleife auch andere Variablen, die Sie zur Verfolgung der Iteration verwenden können.
Zum Beispiel können Sie die `forloop.last`-Variable testen, um bei der letzten Schleifenausführung eine bedingte Verarbeitung durchzuführen.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor zeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes unter Verwendung der „Punktnotation“ zu (z.B. `book.title` und `book.author`), wobei der Text, der dem `book`-Objekt folgt, der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell aus unserer Vorlage heraus aufrufen — in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die Sie verwenden könnten, um den zugehörigen Detaildatensatz anzuzeigen. Dies funktioniert, sofern die Funktion keine Argumente hat (es gibt keine Möglichkeit, Argumente zu übergeben!)

> [!NOTE]
> Wir müssen beim Aufrufen von Funktionen in Vorlagen vorsichtig mit „Seiteneffekten“ sein. Hier erhalten wir nur eine anzuzeigende URL, aber eine Funktion kann fast alles tun — wir möchten nicht, dass unsere Datenbank gelöscht wird, nur weil wir unsere Vorlage rendern!

#### Aktualisieren Sie die Basistemplate

Öffnen Sie die Basistemplate (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Dadurch wird der Link auf allen Seiten aktiviert (wir können dies jetzt erfolgreich umsetzen, da wir den "Bücher"-URL-Mapping erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht es aus?

Sie werden die Bücherliste noch nicht aufbauen können, da uns noch eine Abhängigkeit fehlt — die URL-Zuordnung für die Buchdetailseiten, die benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir zeigen sowohl Listen- als auch Detailansichten nach dem nächsten Abschnitt.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen zu einem bestimmten Buch an und wird über die URL `catalog/book/<id>` aufgerufen (wobei `<id>` der Primärschlüssel für das Buch ist). Neben Feldern im `Book`-Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre) werden wir auch die Details der verfügbaren Exemplare (`BookInstances`) auflisten, einschließlich Status, voraussichtlichem Rückgabedatum, Vermerk und ID. Dies ermöglicht unseren Lesern nicht nur, mehr über das Buch zu erfahren, sondern auch zu bestätigen, ob/wann es verfügbar ist.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad namens '**book-detail**' hinzu.
Diese `path()`-Funktion definiert ein Muster, eine zugeordnete generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_-Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches zu erfassen, das wir sehen möchten.
Die Syntax ist sehr einfach: Winkelklammern definieren den Teil der URL, der erfasst werden soll, und schließen den Namen der Variablen ein, die die Ansicht verwenden kann, um auf die erfassten Daten zuzugreifen.
Zum Beispiel, **\<something>**, erfasst das markierte Muster und übergibt den Wert als Variable "something" an die Ansicht. Optional können Sie den Variablennamen mit einer [Konverterangabe](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Typ der Daten definiert (int, str, slug, uuid, path).

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenfolge sein muss und sie als Parameter mit dem Namen `pk` (kurz für Primärschlüssel) an die Ansicht zu übergeben. Dies ist die ID, die verwendet wird, um das Buch eindeutig in der Datenbank zu speichern, wie im Buchmodell definiert.

> [!NOTE]
> Wie zuvor besprochen, wird unsere übereinstimmende URL tatsächlich als `catalog/book/<digits>` angezeigt (da wir in der **catalog** Anwendung sind, wird `/catalog/` angenommen).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_, dass ihr ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parameternamen verwenden oder die Informationen in einem nicht benannten Argument übergeben.

#### Erweitertes Pfad-Matching/Regulärer Ausdrücke Primer

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir bieten ihn an, weil es vermutlich in Ihrer Django-zentrierten Zukunft nützlich sein wird zu wissen, dass es diese Option gibt.

Das Pattern-Matching, das durch `path()` bereitgestellt wird, ist einfach und nützlich für die (sehr gängigen) Fälle, in denen Sie einfach _beliebige_ Zeichenfolgen oder Ganzzahlen erfassen möchten. Wenn Sie eine verfeinerte Filterung benötigen (zum Beispiel, um nur Zeichenfolgen mit einer bestimmten Anzahl von Zeichen zu filtern), dann können Sie die [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) Methode verwenden.

Diese Methode wird genauso wie `path()` verwendet, außer dass Sie ein Muster mit einem [regulären Ausdruck](https://docs.python.org/3/library/re.html) angeben können. Zum Beispiel könnte der vorherige Pfad wie unten gezeigt geschrieben werden:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Werkzeug zum Matching von Mustern. Sie sind zugegebenermaßen ziemlich unintuitiv und können für Anfänger einschüchternd sein. Unten ist ein sehr kurzer Primer!

Das Erste, was Sie wissen sollten, ist, dass reguläre Ausdrücke normalerweise mit der Roh-String-Literal-Syntax deklariert werden sollten (d.h. sie sind wie gezeigt eingeschlossen: **r'\<ihr regulärer Ausdruckstext geht hier>'**).

Die Hauptteile der Syntax, die Sie zum Deklarieren von Pattern-Matching benötigen, sind:

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
      <td>Einen Ziffer (0, 1, 2, … 9) abgleichen</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Ein Wortzeichen abgleichen, z.B. ein beliebiges Groß- oder Kleinbuchstabe
        im Alphabet, eine Ziffer oder das Unterstrich-Zeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Ein oder mehrere des vorherigen Zeichens abgleichen. Zum Beispiel, um eine
        oder mehrere Ziffern abzugleichen, könnten Sie <code>\d+</code> verwenden.
        Um ein oder mehrere "a" Zeichen abzugleichen, könnten Sie <code>a+</code>
        verwenden.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Null oder mehr des vorherigen Zeichens abgleichen. Zum Beispiel, um
        nichts oder ein Wort abzugleichen, könnten Sie <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Den Teil des Musters innerhalb der Klammern erfassen. Alle erfassten Werte
        werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere
        Muster erfasst werden, werden die zugeordneten Parameter in der
        Reihenfolge übergeben, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfassen Sie das Muster (angegeben durch ...) als benannte Variable (in
        diesem Fall "name"). Die erfassten Werte werden mit dem angegebenen Namen
        an die Ansicht übergeben. Ihre Ansicht muss daher einen Parameter mit
        demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Auf ein Zeichen im Set abgleichen. Zum Beispiel, [abc] wird auf 'a' oder
        'b' oder 'c' abgleichen. [-\w] wird auf das '-' Zeichen oder ein
        Wortzeichen abgleichen.
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
          Dies ist das RE, das in unserem URL-Mapper verwendet wird. Es passt
          zu einer Zeichenfolge, die mit <code>book/</code> am Zeilenanfang
          beginnt (<strong>^book/</strong>), dann eine oder mehrere Ziffern
          hat (<code>\d+</code>), und dann endet (ohne dass vor dem Zeilenendezeichen
          Nicht-Ziffern vorhanden sind).
        </p>
        <p>
          Es erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und
          übergibt sie an die Ansicht in einem Parameter namens 'pk'.
          <strong>Die erfassten Werte werden immer als Zeichenfolge übergeben!</strong>
        </p>
        <p>
          Zum Beispiel würde dies auf <code>book/1234</code> passen und eine
          Variable <code>pk='1234'</code> an die Ansicht senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies passt zu den gleichen URLs wie der vorhergehende Fall. Die erfassten
        Informationen würden als unbenannter Parameter an die Ansicht gesendet.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies passt zu einer Zeichenfolge, die mit <code>book/</code> am
          Zeilenanfang beginnt (<strong>^book/</strong>), dann ein oder mehrere
          Zeichen hat, die entweder ein '-' oder ein Wortzeichen sind
          (<strong>[-\w]+</strong>), und dann endet. Es erfasst auch diesen
          Zeichensatz und übergibt ihn an die Ansicht in einem Parameter namens
          'stub'.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für einen "Stub". Stubs sind
          URL-freundliche, wortbasierte Primärschlüssel für Daten. Sie könnten
          einen Stub verwenden, wenn Sie möchten, dass Ihre Buch-URL informativer
          ist. Zum Beispiel <code>/catalog/book/the-secret-garden</code> anstelle
          von <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Muster in einem Abgleich erfassen und dadurch eine Menge verschiedener Informationen in einer URL kodieren.

> [!NOTE]
> Als Herausforderung überlegen Sie, wie Sie eine URL kodieren könnten, um alle Bücher aufzulisten, die in einem bestimmten Jahr, Monat, Tag herausgegeben wurden, und das RE, das verwendet werden könnte, um sie abzugleichen.

#### Übergeben zusätzlicher Optionen in Ihren URL-Maps

Eine Funktion, die wir hier nicht verwendet haben, aber die Sie möglicherweise wertvoll finden, ist, dass Sie ein [Wörterbuch mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht übergeben können (mithilfe des dritten unbenannten Arguments der `path()`-Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden und Daten zur Konfiguration ihres Verhaltens in jedem Fall übergeben möchten.

Zum Beispiel, gegeben der unten gezeigten Pfad, wird Django für eine Anfrage an `/my-url/halibut/` `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Wörterbuchoptionen werden als _benannte_ Argumente an die Ansicht übergeben. Wenn Sie denselben Namen sowohl für ein Erfassungsmuster als auch einen Wörterbuchschlüssel verwenden, wird die Wörterbuchoption verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das ist es! Alles, was Sie jetzt tun müssen, ist eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird es mit den Datenbankinformationen für den spezifischen `Book` Datensatz, der vom URL-Mapper extrahiert wird, übergeben. Innerhalb der Vorlage können Sie auf die Buchdetails mit der Vorlagenvariable namens `object` ODER `book` zugreifen (d.h. generisch `the_model_name`).

Wenn nötig, können Sie die verwendete Vorlage und den Namen des Kontextobjekts ändern, das verwendet wird, um auf das Buch in der Vorlage zuzugreifen. Sie können auch Methoden überschreiben, um beispielsweise zusätzliche Informationen an den Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, dann wird die generische klassenbasierte Detailansicht automatisch eine `Http404`-Ausnahme werfen — in der Produktion wird dies automatisch eine entsprechende "Ressource nicht gefunden"-Seite anzeigen, die bei Bedarf angepasst werden kann.

Nur um Ihnen eine Vorstellung davon zu geben, wie dies funktioniert, zeigt das folgende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie nicht die generische klassenbasierte Detailansicht verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zunächst, den spezifischen Buchdatensatz aus dem Modell zu holen. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404`-Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" wurde. Der letzte Schritt ist dann, wie üblich, `render()` mit dem Vorlagennamen und den Buchdaten im `context`-Parameter (als Wörterbuch) aufzurufen.

Eine andere Möglichkeit, dies zu tun, wenn Sie keine generische Ansicht verwenden, wäre, die Funktion `get_object_or_404()` aufzurufen.
Dies ist eine Abkürzung, um eine `Http404`-Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detail View Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und geben Sie ihr den untenstehenden Inhalt. Wie oben besprochen, ist dies der standardmäßige Vorlagendateiname, der von der generischen klassenbasierten _Detail_ Ansicht erwartet wird (für ein Modell mit dem Namen `Book` in einer Anwendung mit dem Namen `catalog`).

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
> Der Autorenlink in der oben stehenden Vorlage hat eine leere URL, da wir noch keine Autorendetailseite erstellt haben, zu der verlinkt werden soll.
> Sobald die Detailseite existiert, können wir ihre URL mit einer der beiden folgenden Ansätze erhalten:
>
> - Verwenden Sie das `url`-Vorlagen-Tag, um die 'author-detail' URL rückgängig zu machen (die im URL-Mapper definiert ist), indem Sie die Autoreninstanz für das Buch übergeben:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die Methode `get_absolute_url()` des Autorenmodells auf (dies führt die gleiche Umkehrungsoperation aus):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Während beide Methoden im Wesentlichen dasselbe tun, wird `get_absolute_url()` bevorzugt, da es Ihnen hilft, konsistenteren und wartungsfreundlicheren Code zu schreiben (Änderungen müssen nur an einer Stelle vorgenommen werden: dem Autorenmodell).

Obwohl es ein wenig größer ist, wurde fast alles in dieser Vorlage bereits beschrieben:

- Wir erweitern unsere Basistemplate und überschreiben den "content"-Block.
- Wir verwenden bedingte Verarbeitung, um zu bestimmen, ob spezifische Inhalte angezeigt werden sollen oder nicht.
- Wir verwenden `for`-Schleifen, um durch Listen von Objekten zu iterieren.
- Wir greifen mit der Punktnotation auf die Kontextfelder zu (da wir die generische Detailansicht verwendet haben, heißt der Kontext `book`; wir könnten auch `object` verwenden).

Das erste Interessante, das wir noch nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automatisch" erstellt, um die Menge der `BookInstance`-Datensätze zurückzugeben, die mit einem bestimmten `Book` verbunden sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist erforderlich, da Sie ein `ForeignKey` (eins-zu-viele) Feld nur auf der "vielen" Seite der Beziehung erklären (dem `BookInstance`). Da Sie nichts tun, um die Beziehung im anderen ("einen") Modell zu deklarieren, hat es (das `Book`) kein Feld, um die Menge der zugehörigen Datensätze abzurufen. Um dieses Problem zu umgehen, erstellt Django eine entsprechend benannte "Reverse Lookup"-Funktion, die Sie verwenden können. Der Name der Funktion wird erstellt, indem der Modellname, bei dem das `ForeignKey` deklariert wurde, klein geschrieben wird, gefolgt von `_set` (d.h. so lautet die in `Book` erstellte Funktion `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze abzurufen (standardmäßig). Während Sie die `filter()`-Methode verwenden können, um einen Teil der Datensätze im Codeabzurufen, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente an Funktionen übergeben können.
>
> Seien Sie auch vorsichtig, wenn Sie keine Sortierung (in Ihrer klassenbasierten Ansicht oder Ihrem Modell) definieren, werden Sie auch Fehler vom Entwicklungsserver wie diesen sehen:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Dies geschieht, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass eine ORDER BY-Anweisung in Ihrer zugrunde liegenden Datenbank ausgeführt wird. Ohne sie kann es nicht sicher sein, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat **Pagination** noch nicht behandelt, aber da Sie `sort_by()` und keinen Parameter verwenden können (wie oben beschrieben mit `filter()`), müssen Sie zwischen drei Optionen wählen:
>
> 1. Fügen Sie ein `ordering` innerhalb einer `class Meta` Deklaration in Ihrem Modell hinzu.
> 2. Fügen Sie ein `queryset` Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu, das ein `order_by()` spezifiziert.
> 3. Fügen Sie eine `get_queryset` Methode zu Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu und spezifizieren auch das `order_by()`.
>
> Wenn Sie sich für eine `class Meta` für das `Author`-Modell entscheiden (wahrscheinlich nicht so flexibel wie die Anpassung der klassenbasierten Ansicht, aber einfach genug), erhalten Sie etwas wie das Folgende:
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
> Natürlich muss das Feld nicht `last_name` sein: Es könnte ein beliebiges anderes sein.
>
> Zuletzt, aber nicht zuletzt, sollten Sie nach einem Attribut/Spalte sortieren, das tatsächlich einen Index (eindeutig oder nicht) in Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich wird dies hier nicht notwendig sein (wir gehen hier wahrscheinlich mit so wenigen Büchern und Benutzern ein bisschen zu weit voraus), aber es ist etwas, das Sie in zukünftigen Projekten berücksichtigen sollten.

Das zweite Interessante (und nicht Offensichtliche) in der Vorlage ist, wo wir den Status-Text für jedes Buchinstanz anzeigen ("verfügbar", "Wartung" usw.).
Aufmerksame Leser werden bemerken, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text zu erhalten, im restlichen Code nicht erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, da `BookInstance.status` ein [Auswahlfeld](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist.
Django erstellt automatisch eine Methode `get_foo_display()` für jedes Auswahlfeld `foo` in einem Modell, die verwendet werden kann, um den aktuellen Wert des Felds zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um sowohl die Buchlisten- als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autoren- oder Autorendetail-Links — Sie erstellen diese in der Herausforderung!

Klicken Sie auf den Link **Alle Bücher**, um die Liste der Bücher anzuzeigen.

![Buchlisten-Seite](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles korrekt eingerichtet ist, sollten Sie etwas wie den folgenden Screenshot sehen.

![Buchdetail-Seite](book_detail_page_no_pagination.png)

## Pagination

Wenn Sie nur ein paar Datensätze haben, sieht unsere Buchlisten-Seite gut aus. Wenn Sie jedoch in die Zehner- oder Hunderterbereiche von Datensätzen gelangen, wird die Seite immer langsamer geladen (und hat zu viel Inhalt, um sinnvoll durchstöbert zu werden). Die Lösung für dieses Problem besteht darin, Ihrer Listenansicht eine Pagination hinzuzufügen, um die Anzahl der angezeigten Elemente auf jeder Seite zu reduzieren.

Django bietet ausgezeichnete integrierte Unterstützung für Pagination. Noch besser ist, dass dies in die generischen klassenbasierten Listenansichten integriert ist, sodass Sie nicht viel tun müssen, um es zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die `paginate_by` Zeile hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung beginnt die Ansicht, die Daten, die sie an die Vorlage sendet, zu paginieren, sobald Sie mehr als 10 Datensätze haben.
Die verschiedenen Seiten werden mit Hilfe von GET-Parametern aufgerufen — um auf Seite 2 zuzugreifen, verwenden Sie die URL `/catalog/books/?page=2`.

### Vorlagen

Da die Daten nun paginiert sind, müssen wir die Unterstützung für die Vorlage hinzufügen, um durch das Ergebnis-Set zu blättern. Da wir möglicherweise alle Listenansichten paginieren möchten, fügen wir dies der Basistemplate hinzu.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und finden Sie den "content block" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Pagination-Block direkt nach dem `{% endblock %}`. Der Code überprüft zunächst, ob auf der aktuellen Seite eine Pagination aktiviert ist. Wenn ja, fügt er _nächste_ und _vorherige_ Links hinzu, wie es angemessen ist (und die aktuelle Seitenzahl).

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

Das `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects)-Objekt, das existiert, wenn auf der aktuellen Seite eine Pagination verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, vorherige Seiten, wie viele Seiten es gibt, usw. zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL für die Erstellung der Pagination-Links zu erhalten. Das ist nützlich, weil es unabhängig von dem Objekt ist, das wir paginieren.

Das ist alles!

### Wie sieht es aus?

Der Screenshot unten zeigt, wie die Pagination aussieht — wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie es einfacher testen, indem Sie die in der Zeile `paginate_by` in Ihrer **catalog/views.py** Datei angegebene Zahl verringern. Um das untenstehende Ergebnis zu erhalten, haben wir es auf `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, mit nächsten/vorherigen Links, die je nachdem, auf welcher Seite Sie sich befinden, angezeigt werden.

![Buchlisten-Seite - paginiert](book_list_paginated.png)

## Testen Sie sich selbst

Die Herausforderung in diesem Artikel besteht darin, die Autorendetail- und Listenansichten zu erzeugen, die erforderlich sind, um das Projekt abzuschließen. Diese sollten über die folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld mit dem Namen `<id>`

Der für die URL-Matcher und die Ansichten erforderliche Code sollte fast identisch mit dem der `Book`-Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden unterschiedlich sein, aber ähnliches Verhalten aufweisen.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenlisten-Seite erstellt haben, müssen Sie auch den **Alle Autoren** Link auf der Basistemplate aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_sie_die_basistemplate), wie wir es getan haben, als wir den **Alle Bücher** Link aktualisiert haben.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansichtsvorlage](#erstellen_der_detail_view_vorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, sodass der Autorenlink auf Ihre neue Autorendetailseite zeigt (anstatt eine leere URL zu sein).
>   Der empfohlene Weg, dies zu tun, ist die Methode `get_absolute_url()` des Autorenmodells aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Autor:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten in etwa wie die unten stehenden Screenshots aussehen.

![Autorenlisten-Seite](author_list_page_no_pagination.png)

![Autorendetail-Seite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist nun abgeschlossen!

In diesem Artikel haben wir gelernt, wie man die generischen, klassenbasierten Listen- und Detailansichten verwendet und sie genutzt, um Seiten zum Anzeigen unserer Bücher und Autoren zu erstellen. Unterwegs haben wir gelernt, wie man mit regulären Ausdrücken Muster erkennt und wie man Daten von URLs an seine Ansichten übergibt. Wir haben auch ein paar weitere Tricks zur Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginiert, sodass unsere Listen überschaubar sind, selbst wenn wir viele Datensätze haben.

In unseren nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen, und damit Benutzer-Authentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Vorlagen-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Pagination](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
