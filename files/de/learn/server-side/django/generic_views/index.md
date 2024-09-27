---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
slug: Learn/Server-side/Django/Generic_views
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website, indem Listen- und Detailseiten für Bücher und Autoren hinzugefügt werden. Hier lernen Sie generische klassenbasierte Ansichten kennen und sehen, wie sie den Codeumfang für häufige Anwendungsfälle reduzieren können. Außerdem gehen wir detaillierter auf die URL-Verarbeitung ein und zeigen, wie man grundlegende Mustererkennung durchführt.

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
        Verstehen, wo und wie generische klassenbasierte Ansichten verwendet werden können, und wie Muster aus URLs extrahiert und die Informationen an Ansichten übergeben werden.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website vervollständigen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (oder genauer gesagt: Wir zeigen Ihnen, wie die Buchseiten implementiert werden, und geben Ihnen die Aufgabe, die Autorenseiten selbst zu erstellen).

Der Prozess ähnelt dem Erstellen der Indexseite, das wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Karten, Ansichten und Vorlagen erstellen. Der Hauptunterschied besteht darin, dass wir für die Detailseiten die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und an die Ansicht zu übergeben. Für diese Seiten werden wir einen völlig anderen Ansatzt für Ansichten demonstrieren: generische klassenbasierte Listen- und Detailansichten. Diese können den benötigten Code in der Ansicht erheblich reduzieren, was sie einfacher zu schreiben und zu warten macht.

Der letzte Teil des Tutorials zeigt, wie Sie Ihre Daten paginieren können, wenn Sie generische klassenbasierte Listenansichten verwenden.

## Buchlisten-Seite

Die Buchlisten-Seite zeigt eine Liste aller verfügbaren Buchdatensätze an, die über die URL `catalog/books/` abgerufen werden. Die Seite zeigt einen Titel und einen Autor für jeden Datensatz an, wobei der Titel ein Hyperlink zur zugehörigen Buchdetailseite ist. Die Seite hat die gleiche Struktur und Navigation wie alle anderen Seiten der Website, daher können wir die Basisvorlage (**base_generic.html**) erweitern, die wir im letzten Tutorial erstellt haben.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile, die den Pfad für `'books/'` festlegt, wie unten gezeigt. Genau wie bei der Indexseite definiert diese `path()`-Funktion ein Muster, das mit der URL (**'books/'**) übereinstimmen soll, eine Ansichts-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese spezielle Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits `/catalog` enthalten, sodass die Ansicht tatsächlich für die URL aufgerufen wird: `/catalog/books/`.

Die Ansichts-Funktion hat ein anderes Format als zuvor – dies liegt daran, dass diese Ansicht tatsächlich als Klasse implementiert wird. Wir erben von einer bestehenden generischen Ansichts-Funktion, die bereits den Großteil dessen tut, was wir von dieser Funktion erwarten, anstatt sie vollständig neu zu schreiben.

Für Django-klassenbasierte Ansichten greifen wir auf eine geeignete Ansichts-Funktion zu, indem wir die Klassenmethode `as_view()` aufrufen. Diese erledigt die gesamte Arbeit der Erstellung einer Klasseninstanz und stellt sicher, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht ganz einfach als reguläre Funktion schreiben (wie unsere vorherige Indexansicht), die die Datenbank nach allen Büchern abfragt und dann `render()` aufruft, um die Liste an eine angegebene Vorlage zu übergeben. Stattdessen verwenden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) – eine Klasse, die von einer vorhandenen Ansicht erbt. Da die generische Ansicht bereits die meisten benötigen Funktionalitäten implementiert und den Django Best Practices folgt, können wir eine robustere Listenansicht mit weniger Code, weniger Wiederholungen und letztendlich weniger Wartung erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code ans Ende der Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das war's! Die generische Ansicht wird die Datenbank abfragen, um alle Datensätze für das angegebene Modell (`Book`) zu erhalten, und dann eine Vorlage rendern, die sich unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** befindet (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste der Bücher mit der Vorlagenvariable namens `object_list` ODER `book_list` zugreifen (d.h. generisch `<der Modellname>_list`).

> [!NOTE]
> Dieser umständliche Pfad für den Vorlagenstandort ist kein Druckfehler – die generischen Ansichten suchen nach Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) im `/application_name/templates/`-Verzeichnis der Anwendung (`/catalog/templates/)`.

Sie können Attribute hinzufügen, um das oben beschriebene Standardverhalten zu ändern. Beispielsweise können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dasselbe Modell verwenden, oder Sie möchten möglicherweise einen anderen Namen für die Vorlagenvariable verwenden, wenn `book_list` für Ihren spezifischen Vorlagenanwendungsfall nicht intuitiv ist. Möglicherweise ist die nützlichste Variation, die Teilmenge der zurückgegebenen Ergebnisse zu ändern/filtern – anstatt also alle Bücher aufzulisten, könnten Sie beispielsweise die Top 5 Bücher auflisten, die von anderen Benutzern gelesen wurden.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methodenüberschreibung in klassenbasierten Ansichten

Auch wenn wir dies hier nicht tun müssen, können Sie einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die Methode `get_queryset()` überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Dies ist flexibler als nur das Festlegen des `queryset`-Attributs, wie wir es im vorhergehenden Codefragment getan haben (obwohl es in diesem Fall keinen wirklichen Vorteil gibt):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z.B. wird die Liste der Bücher standardmäßig übergeben). Das folgende Fragment zeigt, wie eine Variable namens `some_data` dem Kontext hinzugefügt wird (sie wäre dann als Vorlagenvariable verfügbar).

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

Beim Überschreiben ist es wichtig, dem oben verwendeten Muster zu folgen:

- Holen Sie sich zuerst den vorhandenen Kontext von unserer Superklasse.
- Fügen Sie dann Ihre neuen Kontextinformationen hinzu.
- Geben Sie dann den neuen (aktualisierten) Kontext zurück.

> [!NOTE]
> Weitere Beispiele für das, was Sie tun können, finden Sie unter [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation).

### Erstellen der Listenansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text ein. Wie oben besprochen, ist dies die Standardvorlagendatei, die von der generischen klassenbasierten Listenansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Vorlagen für generische Ansichten sind wie alle anderen Vorlagen (obwohl sich der Kontext/die Informationen, die an die Vorlage übergeben werden, natürlich unterscheiden können). Wie bei unserer _index_-Vorlage erweitern wir unsere Basisvorlage in der ersten Zeile und ersetzen dann den Block namens `content`.

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

Die Ansicht übergibt standardmäßig den Kontext (Liste der Bücher) als `object_list` und `book_list`-Aliases; beide funktionieren.

#### Bedingte Ausführung

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else` und `endif`-Vorlagentags, um zu überprüfen, ob die `book_list` definiert ist und nicht leer ist. Wenn `book_list` leer ist, zeigt die `else`-Klausel einen Text an, der erklärt, dass keine Bücher aufzulisten sind. Wenn `book_list` nicht leer ist, durchlaufen wir die Liste der Bücher.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die Bedingung oben prüft nur auf einen Fall, aber Sie können zusätzliche Bedingungen mit dem `elif`-Vorlagentag testen (z.B. `{% elif var2 %}`). Weitere Informationen zu bedingten Operatoren finden Sie unter: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal) und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Vorlagentags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumente).

#### Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor`-Vorlagentags, um die Buchliste zu durchlaufen, wie unten gezeigt. Jede Iteration füllt die `book`-Vorlagenvariable mit Informationen für den aktuellen Listenpunkt.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie könnten auch das `{% empty %}`-Vorlagentag verwenden, um zu definieren, was passieren soll, wenn die Buchliste leer ist (obwohl unsere Vorlage sich dafür entscheidet, eine Bedingung zu verwenden):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Obwohl es hier nicht verwendet wird, erstellt Django innerhalb der Schleife auch andere Variablen, die Sie verwenden können, um die Iteration zu verfolgen. Zum Beispiel können Sie die `forloop.last`-Variable testen, um eine bedingte Verarbeitung beim letzten Durchlauf der Schleife durchzuführen.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes mit der "Punktsyntax" zu (z.B. `book.title` und `book.author`), wobei der Text, der dem `book`-Element folgt, der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell aus unserer Vorlage aufrufen – in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die Sie verwenden könnten, um den zugehörigen Datensatz anzuzeigen. Dies funktioniert, solange die Funktion keine Argumente hat (es gibt keine Möglichkeit, Argumente zu übergeben!)

> [!NOTE]
> Wir müssen beim Aufrufen von Funktionen in Vorlagen ein wenig auf "Seiteneffekte" achten. Hier erhalten wir lediglich eine URL zum Anzeigen, aber eine Funktion kann fast alles tun — wir möchten zum Beispiel nicht unsere Datenbank löschen, nur indem wir unsere Vorlage rendern!

#### Aktualisieren der Basisvorlage

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Dadurch wird der Link auf allen Seiten aktiviert (wir können dies jetzt erfolgreich implementieren, da wir den "books" URL-Mapper erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht es aus?

Sie können die Buchliste noch nicht erstellen, da uns noch eine Abhängigkeit fehlt — der URL-Mapper für die Buchdetailseiten, der benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir zeigen sowohl Listen- als auch Detailansichten im nächsten Abschnitt.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen zu einem bestimmten Buch an, auf die über die URL `catalog/book/<id>` zugegriffen wird (wobei `<id>` der Primärschlüssel für das Buch ist). Zusätzlich zu den Feldern im `Book`-Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre) werden wir auch die Details der verfügbaren Kopien (`BookInstances`) auflisten, einschließlich des Status, des erwarteten Rückgabedatums, des Imprints und der ID. Dies ermöglicht es unseren Lesern nicht nur, etwas über das Buch zu erfahren, sondern auch zu überprüfen, ob/wann es verfügbar ist.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad mit dem Namen '**book-detail**' hinzu. Diese `path()`-Funktion definiert ein Muster, eine zugeordnete generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den `book-detail`-Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches zu erfassen, das wir sehen möchten. Die Syntax ist sehr einfach: Winkelklammern definieren den Teil der URL, der erfasst werden soll, und umschließen den Namen der Variablen, die die Ansicht verwenden kann, um auf die erfassten Daten zuzugreifen. Zum Beispiel erfasst **\<something>** das markierte Muster und übergibt den Wert als Variable "something" an die Ansicht. Optional können Sie dem Variablennamen eine [Konverter-Spezifikation](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Datentyp definiert (int, str, slug, uuid, path).

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenkette sein muss und geben sie an die Ansicht als Parameter mit dem Namen `pk` weiter (kurz für Primärschlüssel). Dies ist die ID, die verwendet wird, um das Buch eindeutig in der Datenbank zu speichern, so wie es im Book Model definiert ist.

> [!NOTE]
> Wie bereits besprochen, wird unsere übereinstimmende URL tatsächlich `catalog/book/<digits>` sein (da wir uns in der **catalog**-Anwendung befinden, wird `/catalog/` vorausgesetzt).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_, dass ein Parameter mit dem Namen **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parameternamen verwenden oder die Informationen in einem unbenannten Argument übergeben.

#### Erweiterte Pfadübereinstimmung/Regulärer-Ausdruck-Grundlagen

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir stellen ihn zur Verfügung, weil es wahrscheinlich nützlich sein wird, diese Option in Ihrer Django-zentrierten Zukunft zu kennen.

Der von `path()` bereitgestellte Mustervergleich ist einfach und nützlich für die (sehr häufigen) Fälle, in denen Sie nur _irgendeine_ Zeichenkette oder Zahl erfassen möchten. Wenn Sie eine feinere Filterung benötigen (z.B. um nur Zeichenfolgen zu filtern, die eine bestimmte Anzahl von Zeichen haben), können Sie die [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path)-Methode verwenden.

Diese Methode wird genauso wie `path()` verwendet, erlaubt es Ihnen jedoch, ein Muster mit einem [Regulären Ausdruck](https://docs.python.org/3/library/re.html) anzugeben. Zum Beispiel könnte der vorherige Pfad wie unten gezeigt geschrieben werden:

````python
re_path(r'^book/(?P<pk>\d+)

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Werkzeug zur Mustererkennung. Sie sind, ehrlich gesagt, ziemlich unintuitiv und können Anfänger einschüchtern. Unten finden Sie eine sehr kurze Einführung!

Das erste, was Sie wissen sollten, ist, dass reguläre Ausdrücke normalerweise unter Verwendung der Rohzeichenfolgenliteralsyntax deklariert werden sollten (d.h. sie werden wie folgt umschlossen: **r'\<ihr Bearbeitungstext für regulären Ausdruck>'**).

Die Hauptteile der Syntax, die Sie für die Deklaration der Mustererkennungen wissen müssen, sind:

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
      <td>Mit dem Anfang des Textes abgleichen</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Mit dem Ende des Textes abgleichen</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Eine Ziffer abgleichen (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Ein Wortzeichen abgleichen, z.B. eines der Buchstaben des Alphabets, Ziffer oder das Unterstrichzeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Ein oder mehr der vorangehenden Zeichen abgleichen. Um beispielsweise ein oder mehr Ziffern abzugleichen, würden Sie <code>\d+</code> verwenden. Um ein oder mehr "a"-Zeichen abzugleichen, könnten Sie <code>a+</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Null oder mehr der vorangehenden Zeichen abgleichen. Um beispielsweise nichts oder ein Wort abzugleichen, könnten Sie <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Den Teil des Musters innerhalb der Klammern erfassen. Alle erfassten Werte werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere Muster erfasst werden, werden die zugehörigen Parameter in der Reihenfolge bereitgestellt, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfassen Sie das Muster (angezeigt durch ...), als benannte Variable (in diesem Fall "name"). Die erfassten Werte werden mit dem angegebenen Namen an die Ansicht übergeben. Ihre Ansicht muss daher einen Parameter mit demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Übereinstimmung gegen ein Zeichen im Set. Beispielsweise stimmt [abc] mit 'a' oder 'b' oder 'c' überein. [-\w] stimmt mit dem '-' Zeichen oder einem beliebigen Wortzeichen überein.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können buchstäblich genommen werden!

Betrachten wir einige reale Beispiele für Muster:

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
          Dies ist das RE, das in unserem URL-Mapper verwendet wird. Es stimmt mit einer Zeichenfolge überein, die
          <code>book/</code> am Anfang der Zeile (<strong>^book/</strong>) hat,
          dann eine oder mehr Ziffern (<code>\d+</code>) hat und dann endet (ohne dass vor dem Endedzeichen Nicht-Ziffern-Zeichen stehen).
        </p>
        <p>
          Es erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und übergibt sie der Ansicht in einem Parameter mit dem Namen 'pk'.
          <strong>Die erfassten Werte werden immer als Zeichenkette übergeben!</strong>
        </p>
        <p>
          Zum Beispiel würde diese Übereinstimmung <code>book/1234</code> treffen und eine Variable <code>pk='1234'</code> an die Ansicht senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies stimmt mit denselben URLs wie der vorherige Fall über ein. Die erfassten Informationen würden als unbenanntes Argument an die Ansicht gesendet.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies stimmt mit einer Zeichenfolge überein, die <code>book/</code> am Anfang der Zeile (<strong>^book/</strong>) hat, dann ein oder mehrere Zeichen hat, die <em>entweder</em> ein '-' oder ein Wortzeichen (<strong>[-\w]+</strong>) sind, und dann endet. Es erfasst auch diese Zeichensetzung und übergibt sie der Ansicht in einem Parameter mit dem Namen 'stub'.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für einen "Stub". Stubs sind URL-freundliche, wortbasierte Primärschlüssel für Daten. Sie könnten einen Stub verwenden, wenn Sie möchten, dass Ihre Buch-URL informativer ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> anstelle von
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Muster in einer Übereinstimmung erfassen und somit viele Informationen in einer URL kodieren.

> [!NOTE]
> Als Herausforderung könnten Sie überlegen, wie Sie eine URL kodieren würden, um alle Bücher anzuzeigen, die in einem bestimmten Jahr, Monat oder Tag veröffentlicht wurden, und das RE, das zur Übereinstimmung verwendet werden könnte.

#### Übergeben zusätzlicher Optionen in Ihren URL-Karten

Eine Funktion, die wir hier nicht verwendet haben, die Sie jedoch als wertvoll erachten könnten, ist, dass Sie ein [Dictionary mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht übergeben können (unter Verwendung des dritten unbenannten Arguments an die `path()`-Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden möchten und Daten übergeben, um ihr Verhalten in jedem Fall zu konfigurieren.

Zum Beispiel wird Django für die unten gezeigte Route bei einer Anfrage an `/myurl/halibut/` `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

```python
path('myurl/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
````

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Dictionary-Optionen werden als _benannte_ Argumente an die Ansicht übergeben. Wenn Sie denselben Namen für sowohl ein Erfassungsmuster als auch einen Dictionary-Schlüssel verwenden, wird die Dictionary-Option verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code ans Ende der Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das war's! Alles, was Sie jetzt tun müssen, ist, eine Vorlage mit dem Namen **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird ihr die Datenbankinformationen für den spezifischen `Book`-Datensatz übergeben, der vom URL-Mapper extrahiert wurde. Innerhalb der Vorlage können Sie auf die Details des Buches mit der Vorlagenvariable namens `object` ODER `book` (d.h. generisch `the_model_name`) zugreifen.

Wenn nötig, können Sie die verwendete Vorlage und den Namen des Kontextobjekts, das verwendet wird, um auf das Buch in der Vorlage zuzugreifen, ändern. Sie können auch Methoden überschreiben, um z. B. zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, wird die generische klassenbasierte Detailansicht automatisch eine `Http404`-Ausnahme auslösen – im Produktivbetrieb wird dann automatisch eine entsprechende "Ressource nicht gefunden"-Seite angezeigt, die Sie bei Bedarf anpassen können.

Um Ihnen einen Einblick zu geben, wie dies funktioniert, zeigt das untenstehende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie **nicht** die generische klassenbasierte Detailansicht verwenden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zuerst, den spezifischen Buchdatensatz aus dem Modell zu erhalten. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404`-Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" wurde. Der letzte Schritt ist dann wie gewohnt, `render()` mit dem Vorlagennamen und den Buchdaten im `context`-Parameter (als Dictionary) aufzurufen.

Eine andere Möglichkeit, dies zu tun, wenn Sie keine generische Ansicht verwenden, besteht darin, die Funktion `get_object_or_404()` aufzurufen. Dies ist eine Abkürzung, um eine `Http404`-Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detailansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und fügen Sie den folgenden Inhalt ein. Wie oben besprochen, ist dies der Standardvorlagenname, der von der generischen klassenbasierten _Detail_-Ansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

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
> Der Autorenlink in der obigen Vorlage hat eine leere URL, da wir noch keine Autorendetailseite erstellt haben, auf die verwiesen werden kann.
> Sobald die Detailseite existiert, können wir die URL mit einer der beiden folgenden Methoden abrufen:
>
> - Verwenden Sie das `url`-Vorlagentag, um die 'author-detail'-URL (die im URL-Mapper definiert ist) umzukehren, indem Sie die Autoreninstanz für das Buch übergeben:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die Methode `get_absolute_url()` des Autorenmodells auf (dies führt denselben Umkehrungsprozess durch):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Obwohl beide Methoden im Wesentlichen dasselbe tun, wird `get_absolute_url()` bevorzugt, da es Ihnen hilft, konsistenteren und wartungsfreundlicheren Code zu schreiben (Änderungen müssen nur an einer Stelle vorgenommen werden: dem Autorenmodell).

Obwohl etwas umfangreicher, wurde fast alles in dieser Vorlage bereits beschrieben:

- Wir erweitern unsere Basisvorlage und überschreiben den "content"-Block.
- Wir verwenden bedingte Verarbeitung, um zu bestimmen, ob spezielle Inhalte angezeigt werden sollen oder nicht.
- Wir verwenden `for`-Schleifen, um Listen von Objekten zu durchlaufen.
- Wir greifen mit der Punktsyntax auf die Kontextfelder zu (da wir die generische Detailansicht verwenden, wird der Kontext als `book` bezeichnet; wir könnten auch `object` verwenden).

Das erste interessante, was wir bisher noch nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automatisch" erstellt, um die Menge der `BookInstance`-Datensätze zu einem bestimmten `Book` zurückzugeben.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode wird benötigt, da Sie ein `ForeignKey` (eins zu viele) -Feld nur im "Viele"-Teil der Beziehung (bei der `BookInstance`) deklarieren. Da Sie nichts tun, um die Beziehung im anderen ("Eins")-Modell zu deklarieren, hat es (`Book`) kein Feld, um die Menge der zugehörigen Datensätze zu erhalten. Um dieses Problem zu überwinden, erstellt Django eine entsprechend benannte "Reverse-Lookup"-Funktion, die Sie verwenden können. Der Name der Funktion wird erstellt, indem der Modellname, in dem der `ForeignKey` deklariert wurde, kleingeschrieben und `_set` angehängt wird (d.h. die im `Book` erstellte Funktion ist `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze zu erhalten (der Standard). Während Sie die `filter()`-Methode verwenden können, um eine Teilmenge der Datensätze im Code abzurufen, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente an Funktionen übergeben können.
>
> Beachten Sie auch, dass Sie Fehler vom Entwicklungsserver wie diesen sehen werden, wenn Sie keine Ordnung festlegen (in Ihrer klassenbasierten Ansicht oder Ihrem Modell):
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Das passiert, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass eine SORTIERUNGSREIHENFOLGE bei Ihrer zugrunde liegenden Datenbank ausgeführt wird. Ohne diese kann es nicht sicher sein, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat **Pagination** noch nicht behandelt, aber da Sie `sort_by()` nicht verwenden und ein Parameter übergeben können (gleiches gilt für `filter()`, wie oben beschrieben), müssen Sie zwischen drei Optionen wählen:
>
> 1. Fügen Sie eine `ordering` in eine `class Meta`-Deklaration in Ihrem Modell ein.
> 2. Fügen Sie ein `queryset`-Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu, das ein `order_by()` angibt.
> 3. Fügen Sie eine `get_queryset`-Methode in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu und geben Sie ebenfalls `order_by()` an.
>
> Wenn Sie sich entscheiden, eine `class Meta` für das `Author`-Modell zu verwenden (wahrscheinlich nicht so flexibel wie das Anpassen der klassenbasierten Ansicht, aber einfach genug), werden Sie so etwas wie folgt erhalten:
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
> Natürlich muss das Feld nicht `last_name` sein: Es könnte auch ein anderes sein.
>
> Zuletzt sollten Sie nach einem Attribut/einer Spalte sortieren, das/die tatsächlich einen Index (eindeutig oder nicht) auf Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich wird dies hier nicht nötig sein (wir behandeln wahrscheinlich vorzeitig mit so wenigen Büchern und Benutzern), aber dies ist etwas, das es wert ist, für zukünftige Projekte beachtet zu werden.

Das zweite interessante (und nicht offensichtliche) in der Vorlage ist, wo wir den Status-Text für jede Buchinstanz anzeigen ("verfügbar", "Wartung" usw.). Aufmerksame Leser werden feststellen, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text zu erhalten, nirgendwo anders im Code erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [choices field](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist. Django erstellt automatisch eine Methode `get_foo_display()` für jedes `choices field` `foo` in einem Modell, die verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um sowohl die Buchlisten- als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autoren- oder Autorendetail-Links – Sie erstellen diese in der Herausforderung!

Klicken Sie auf den **Alle Bücher**-Link, um die Liste der Bücher anzuzeigen.

![Buchlisten-Seite](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles richtig eingerichtet ist, sollten Sie etwas wie den folgenden Screenshot sehen.

![Buchdetailseite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur einige Datensätze haben, wird Ihre Buchlisten-Seite großartig aussehen. Wenn Sie jedoch in die Zehner- oder Hundertereinträge gehen, wird die Seite zunehmend länger zum Laden benötigen (und viel zu viele Inhalte haben, um sie sinnvoll durchzusehen). Die Lösung für dieses Problem ist, die Paginierung in Ihre Listenansichten einzufügen, um die Anzahl der auf jeder Seite angezeigten Elemente zu reduzieren.

Django hat eine hervorragende eingebaute Unterstützung für die Paginierung. Noch besser ist, dass dies in den generischen klassenbasierten Listenansichten integriert ist, sodass Sie nicht viel tun müssen, um es zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py**, und fügen Sie die `paginate_by`-Zeile hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung wird die Ansicht, sobald Sie mehr als 10 Datensätze haben, mit der Paginierung der Daten beginnen, die sie an die Vorlage sendet. Die verschiedenen Seiten werden mit GET-Parametern aufgerufen — um auf Seite 2 zuzugreifen, würden Sie die URL `/catalog/books/?page=2` verwenden.

### Vorlagen

Jetzt, da die Daten paginiert sind, müssen wir der Vorlage Unterstützung hinzufügen, um durch die Ergebnismenge zu scrollen. Da wir alle Listenansichten paginieren möchten, fügen wir dies der Basisvorlage hinzu.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und finden Sie den "content block" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock direkt nach dem `{% endblock %}`. Der Code prüft zuerst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Wenn ja, werden die _nächsten_ und _vorherigen_ Links wie gewünscht hinzugefügt (und die Seitenzahl).

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

Das `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects)-Objekt, das existiert, wenn Paginierung auf der aktuellen Seite verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, vorherige Seiten, wie viele Seiten es gibt, usw. zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL zu erhalten, um die Paginierungslinks zu erstellen. Dies ist nützlich, da es unabhängig von dem Objekt ist, das wir paginieren.

Das ist alles!

### Wie sieht es aus?

Der folgende Screenshot zeigt, wie die Paginierung aussieht — wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie dies leichter testen, indem Sie die in der `paginate_by`-Zeile in Ihrer **catalog/views.py**-Datei angegebene Zahl senken. Um das folgende Ergebnis zu erzielen, haben wir es zu `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, mit nächsten/vorherigen Links, je nachdem, auf welcher Seite Sie sich befinden.

![Buchlisten-Seite - paginiert](book_list_paginated.png)

## Fordern Sie sich heraus

Die Herausforderung in diesem Artikel besteht darin, die benötigten Autorendetail- und Listenansichten zu erstellen, um das Projekt abzuschließen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Mapper und die Ansichten erforderliche Code sollte fast identisch mit den `Book`-Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden unterschiedlich sein, teilen jedoch ähnliches Verhalten.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenlistenseite erstellt haben, müssen Sie auch den **Alle Autoren**-Link in der Basisvorlage aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_der_basisvorlage) wie beim Aktualisieren des **Alle Bücher**-Links.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansichtsvorlage](#erstellen_der_detailansichtsvorlage) aktualisieren (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**), sodass der Autorenlink auf Ihre neue Autorendetailseite verweist (anstelle einer leeren URL).
>   Der empfohlene Weg, dies zu tun, ist, `get_absolute_url()` am Autorenmodell so aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Autor:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten etwa wie die untenstehenden Screenshots aussehen.

![Autorlisten-Seite](author_list_page_no_pagination.png)

![Autorendetailseite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist jetzt abgeschlossen!

In diesem Artikel haben wir gelernt, wie man generische klassenbasierte Listen- und Detailansichten verwendet und sie benutzt, um Seiten zum Anzeigen unserer Bücher und Autoren zu erstellen. Wir haben unterwegs über Mustererkennung mit regulären Ausdrücken gelernt und gesehen, wie man Daten von URLs an Ansichten übertragen kann. Wir haben auch einige weitere Tricks zur Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginiert, so dass unsere Listen auch bei vielen Datensätzen handhabbar bleiben.

In unseren nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen, und dabei Benutzer-Authentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Vorlagentags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}, views.BookDetailView.as_view(), name='book-detail'),

````

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Werkzeug zur Mustererkennung. Sie sind, ehrlich gesagt, ziemlich unintuitiv und können Anfänger einschüchtern. Unten finden Sie eine sehr kurze Einführung!

Das erste, was Sie wissen sollten, ist, dass reguläre Ausdrücke normalerweise unter Verwendung der Rohzeichenfolgenliteralsyntax deklariert werden sollten (d.h. sie werden wie folgt umschlossen: **r'\<ihr Bearbeitungstext für regulären Ausdruck>'**).

Die Hauptteile der Syntax, die Sie für die Deklaration der Mustererkennungen wissen müssen, sind:

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
      <td>Mit dem Anfang des Textes abgleichen</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Mit dem Ende des Textes abgleichen</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Eine Ziffer abgleichen (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Ein Wortzeichen abgleichen, z.B. eines der Buchstaben des Alphabets, Ziffer oder das Unterstrichzeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Ein oder mehr der vorangehenden Zeichen abgleichen. Um beispielsweise ein oder mehr Ziffern abzugleichen, würden Sie <code>\d+</code> verwenden. Um ein oder mehr "a"-Zeichen abzugleichen, könnten Sie <code>a+</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Null oder mehr der vorangehenden Zeichen abgleichen. Um beispielsweise nichts oder ein Wort abzugleichen, könnten Sie <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Den Teil des Musters innerhalb der Klammern erfassen. Alle erfassten Werte werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere Muster erfasst werden, werden die zugehörigen Parameter in der Reihenfolge bereitgestellt, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfassen Sie das Muster (angezeigt durch ...), als benannte Variable (in diesem Fall "name"). Die erfassten Werte werden mit dem angegebenen Namen an die Ansicht übergeben. Ihre Ansicht muss daher einen Parameter mit demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Übereinstimmung gegen ein Zeichen im Set. Beispielsweise stimmt [abc] mit 'a' oder 'b' oder 'c' überein. [-\w] stimmt mit dem '-' Zeichen oder einem beliebigen Wortzeichen überein.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können buchstäblich genommen werden!

Betrachten wir einige reale Beispiele für Muster:

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
          Dies ist das RE, das in unserem URL-Mapper verwendet wird. Es stimmt mit einer Zeichenfolge überein, die
          <code>book/</code> am Anfang der Zeile (<strong>^book/</strong>) hat,
          dann eine oder mehr Ziffern (<code>\d+</code>) hat und dann endet (ohne dass vor dem Endedzeichen Nicht-Ziffern-Zeichen stehen).
        </p>
        <p>
          Es erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und übergibt sie der Ansicht in einem Parameter mit dem Namen 'pk'.
          <strong>Die erfassten Werte werden immer als Zeichenkette übergeben!</strong>
        </p>
        <p>
          Zum Beispiel würde diese Übereinstimmung <code>book/1234</code> treffen und eine Variable <code>pk='1234'</code> an die Ansicht senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies stimmt mit denselben URLs wie der vorherige Fall über ein. Die erfassten Informationen würden als unbenanntes Argument an die Ansicht gesendet.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies stimmt mit einer Zeichenfolge überein, die <code>book/</code> am Anfang der Zeile (<strong>^book/</strong>) hat, dann ein oder mehrere Zeichen hat, die <em>entweder</em> ein '-' oder ein Wortzeichen (<strong>[-\w]+</strong>) sind, und dann endet. Es erfasst auch diese Zeichensetzung und übergibt sie der Ansicht in einem Parameter mit dem Namen 'stub'.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für einen "Stub". Stubs sind URL-freundliche, wortbasierte Primärschlüssel für Daten. Sie könnten einen Stub verwenden, wenn Sie möchten, dass Ihre Buch-URL informativer ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> anstelle von
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Muster in einer Übereinstimmung erfassen und somit viele Informationen in einer URL kodieren.

> [!NOTE]
> Als Herausforderung könnten Sie überlegen, wie Sie eine URL kodieren würden, um alle Bücher anzuzeigen, die in einem bestimmten Jahr, Monat oder Tag veröffentlicht wurden, und das RE, das zur Übereinstimmung verwendet werden könnte.

#### Übergeben zusätzlicher Optionen in Ihren URL-Karten

Eine Funktion, die wir hier nicht verwendet haben, die Sie jedoch als wertvoll erachten könnten, ist, dass Sie ein [Dictionary mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht übergeben können (unter Verwendung des dritten unbenannten Arguments an die `path()`-Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden möchten und Daten übergeben, um ihr Verhalten in jedem Fall zu konfigurieren.

Zum Beispiel wird Django für die unten gezeigte Route bei einer Anfrage an `/myurl/halibut/` `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

![](13-5164e253.md)

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Dictionary-Optionen werden als _benannte_ Argumente an die Ansicht übergeben. Wenn Sie denselben Namen für sowohl ein Erfassungsmuster als auch einen Dictionary-Schlüssel verwenden, wird die Dictionary-Option verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code ans Ende der Datei:

![](14-65e8d94b.md)

Das war's! Alles, was Sie jetzt tun müssen, ist, eine Vorlage mit dem Namen **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird ihr die Datenbankinformationen für den spezifischen `Book`-Datensatz übergeben, der vom URL-Mapper extrahiert wurde. Innerhalb der Vorlage können Sie auf die Details des Buches mit der Vorlagenvariable namens `object` ODER `book` (d.h. generisch `the_model_name`) zugreifen.

Wenn nötig, können Sie die verwendete Vorlage und den Namen des Kontextobjekts, das verwendet wird, um auf das Buch in der Vorlage zuzugreifen, ändern. Sie können auch Methoden überschreiben, um z. B. zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, wird die generische klassenbasierte Detailansicht automatisch eine `Http404`-Ausnahme auslösen – im Produktivbetrieb wird dann automatisch eine entsprechende "Ressource nicht gefunden"-Seite angezeigt, die Sie bei Bedarf anpassen können.

Um Ihnen einen Einblick zu geben, wie dies funktioniert, zeigt das untenstehende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie **nicht** die generische klassenbasierte Detailansicht verwenden.

![](15-0701dde0.md)

Die Ansicht versucht zuerst, den spezifischen Buchdatensatz aus dem Modell zu erhalten. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404`-Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" wurde. Der letzte Schritt ist dann wie gewohnt, `render()` mit dem Vorlagennamen und den Buchdaten im `context`-Parameter (als Dictionary) aufzurufen.

Eine andere Möglichkeit, dies zu tun, wenn Sie keine generische Ansicht verwenden, besteht darin, die Funktion `get_object_or_404()` aufzurufen. Dies ist eine Abkürzung, um eine `Http404`-Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

![](16-6d9e3800.md)

### Erstellen der Detailansichtsvorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und fügen Sie den folgenden Inhalt ein. Wie oben besprochen, ist dies der Standardvorlagenname, der von der generischen klassenbasierten _Detail_-Ansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

![](17-42dd7391.md)

> [!NOTE]
> Der Autorenlink in der obigen Vorlage hat eine leere URL, da wir noch keine Autorendetailseite erstellt haben, auf die verwiesen werden kann.
> Sobald die Detailseite existiert, können wir die URL mit einer der beiden folgenden Methoden abrufen:
>
> - Verwenden Sie das `url`-Vorlagentag, um die 'author-detail'-URL (die im URL-Mapper definiert ist) umzukehren, indem Sie die Autoreninstanz für das Buch übergeben:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die Methode `get_absolute_url()` des Autorenmodells auf (dies führt denselben Umkehrungsprozess durch):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Obwohl beide Methoden im Wesentlichen dasselbe tun, wird `get_absolute_url()` bevorzugt, da es Ihnen hilft, konsistenteren und wartungsfreundlicheren Code zu schreiben (Änderungen müssen nur an einer Stelle vorgenommen werden: dem Autorenmodell).

Obwohl etwas umfangreicher, wurde fast alles in dieser Vorlage bereits beschrieben:

- Wir erweitern unsere Basisvorlage und überschreiben den "content"-Block.
- Wir verwenden bedingte Verarbeitung, um zu bestimmen, ob spezielle Inhalte angezeigt werden sollen oder nicht.
- Wir verwenden `for`-Schleifen, um Listen von Objekten zu durchlaufen.
- Wir greifen mit der Punktsyntax auf die Kontextfelder zu (da wir die generische Detailansicht verwenden, wird der Kontext als `book` bezeichnet; wir könnten auch `object` verwenden).

Das erste interessante, was wir bisher noch nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automatisch" erstellt, um die Menge der `BookInstance`-Datensätze zu einem bestimmten `Book` zurückzugeben.

![](18-316dedb3.md)

Diese Methode wird benötigt, da Sie ein `ForeignKey` (eins zu viele) -Feld nur im "Viele"-Teil der Beziehung (bei der `BookInstance`) deklarieren. Da Sie nichts tun, um die Beziehung im anderen ("Eins")-Modell zu deklarieren, hat es (`Book`) kein Feld, um die Menge der zugehörigen Datensätze zu erhalten. Um dieses Problem zu überwinden, erstellt Django eine entsprechend benannte "Reverse-Lookup"-Funktion, die Sie verwenden können. Der Name der Funktion wird erstellt, indem der Modellname, in dem der `ForeignKey` deklariert wurde, kleingeschrieben und `_set` angehängt wird (d.h. die im `Book` erstellte Funktion ist `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze zu erhalten (der Standard). Während Sie die `filter()`-Methode verwenden können, um eine Teilmenge der Datensätze im Code abzurufen, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente an Funktionen übergeben können.
>
> Beachten Sie auch, dass Sie Fehler vom Entwicklungsserver wie diesen sehen werden, wenn Sie keine Ordnung festlegen (in Ihrer klassenbasierten Ansicht oder Ihrem Modell):
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Das passiert, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass eine SORTIERUNGSREIHENFOLGE bei Ihrer zugrunde liegenden Datenbank ausgeführt wird. Ohne diese kann es nicht sicher sein, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat **Pagination** noch nicht behandelt, aber da Sie `sort_by()` nicht verwenden und ein Parameter übergeben können (gleiches gilt für `filter()`, wie oben beschrieben), müssen Sie zwischen drei Optionen wählen:
>
> 1. Fügen Sie eine `ordering` in eine `class Meta`-Deklaration in Ihrem Modell ein.
> 2. Fügen Sie ein `queryset`-Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu, das ein `order_by()` angibt.
> 3. Fügen Sie eine `get_queryset`-Methode in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu und geben Sie ebenfalls `order_by()` an.
>
> Wenn Sie sich entscheiden, eine `class Meta` für das `Author`-Modell zu verwenden (wahrscheinlich nicht so flexibel wie das Anpassen der klassenbasierten Ansicht, aber einfach genug), werden Sie so etwas wie folgt erhalten:
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
> Natürlich muss das Feld nicht `last_name` sein: Es könnte auch ein anderes sein.
>
> Zuletzt sollten Sie nach einem Attribut/einer Spalte sortieren, das/die tatsächlich einen Index (eindeutig oder nicht) auf Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich wird dies hier nicht nötig sein (wir behandeln wahrscheinlich vorzeitig mit so wenigen Büchern und Benutzern), aber dies ist etwas, das es wert ist, für zukünftige Projekte beachtet zu werden.

Das zweite interessante (und nicht offensichtliche) in der Vorlage ist, wo wir den Status-Text für jede Buchinstanz anzeigen ("verfügbar", "Wartung" usw.). Aufmerksame Leser werden feststellen, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text zu erhalten, nirgendwo anders im Code erscheint.

![](19-f8a8dcd3.md)

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [choices field](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist. Django erstellt automatisch eine Methode `get_foo_display()` für jedes `choices field` `foo` in einem Modell, die verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um sowohl die Buchlisten- als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autoren- oder Autorendetail-Links – Sie erstellen diese in der Herausforderung!

Klicken Sie auf den **Alle Bücher**-Link, um die Liste der Bücher anzuzeigen.

![Buchlisten-Seite](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles richtig eingerichtet ist, sollten Sie etwas wie den folgenden Screenshot sehen.

![Buchdetailseite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur einige Datensätze haben, wird Ihre Buchlisten-Seite großartig aussehen. Wenn Sie jedoch in die Zehner- oder Hundertereinträge gehen, wird die Seite zunehmend länger zum Laden benötigen (und viel zu viele Inhalte haben, um sie sinnvoll durchzusehen). Die Lösung für dieses Problem ist, die Paginierung in Ihre Listenansichten einzufügen, um die Anzahl der auf jeder Seite angezeigten Elemente zu reduzieren.

Django hat eine hervorragende eingebaute Unterstützung für die Paginierung. Noch besser ist, dass dies in den generischen klassenbasierten Listenansichten integriert ist, sodass Sie nicht viel tun müssen, um es zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py**, und fügen Sie die `paginate_by`-Zeile hinzu, wie unten gezeigt.

![](20-a786c98a.md)

Mit dieser Ergänzung wird die Ansicht, sobald Sie mehr als 10 Datensätze haben, mit der Paginierung der Daten beginnen, die sie an die Vorlage sendet. Die verschiedenen Seiten werden mit GET-Parametern aufgerufen — um auf Seite 2 zuzugreifen, würden Sie die URL `/catalog/books/?page=2` verwenden.

### Vorlagen

Jetzt, da die Daten paginiert sind, müssen wir der Vorlage Unterstützung hinzufügen, um durch die Ergebnismenge zu scrollen. Da wir alle Listenansichten paginieren möchten, fügen wir dies der Basisvorlage hinzu.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und finden Sie den "content block" (wie unten gezeigt).

![](21-6d5988a8.md)

Kopieren Sie den folgenden Paginierungsblock direkt nach dem `{% endblock %}`. Der Code prüft zuerst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Wenn ja, werden die _nächsten_ und _vorherigen_ Links wie gewünscht hinzugefügt (und die Seitenzahl).

![](22-34d8beb2.md)

Das `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects)-Objekt, das existiert, wenn Paginierung auf der aktuellen Seite verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, vorherige Seiten, wie viele Seiten es gibt, usw. zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL zu erhalten, um die Paginierungslinks zu erstellen. Dies ist nützlich, da es unabhängig von dem Objekt ist, das wir paginieren.

Das ist alles!

### Wie sieht es aus?

Der folgende Screenshot zeigt, wie die Paginierung aussieht — wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie dies leichter testen, indem Sie die in der `paginate_by`-Zeile in Ihrer **catalog/views.py**-Datei angegebene Zahl senken. Um das folgende Ergebnis zu erzielen, haben wir es zu `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, mit nächsten/vorherigen Links, je nachdem, auf welcher Seite Sie sich befinden.

![Buchlisten-Seite - paginiert](book_list_paginated.png)

## Fordern Sie sich heraus

Die Herausforderung in diesem Artikel besteht darin, die benötigten Autorendetail- und Listenansichten zu erstellen, um das Projekt abzuschließen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Mapper und die Ansichten erforderliche Code sollte fast identisch mit den `Book`-Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden unterschiedlich sein, teilen jedoch ähnliches Verhalten.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenlistenseite erstellt haben, müssen Sie auch den **Alle Autoren**-Link in der Basisvorlage aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_der_basisvorlage) wie beim Aktualisieren des **Alle Bücher**-Links.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansichtsvorlage](#erstellen_der_detailansichtsvorlage) aktualisieren (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**), sodass der Autorenlink auf Ihre neue Autorendetailseite verweist (anstelle einer leeren URL).
>   Der empfohlene Weg, dies zu tun, ist, `get_absolute_url()` am Autorenmodell so aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Autor:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten etwa wie die untenstehenden Screenshots aussehen.

![Autorlisten-Seite](author_list_page_no_pagination.png)

![Autorendetailseite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist jetzt abgeschlossen!

In diesem Artikel haben wir gelernt, wie man generische klassenbasierte Listen- und Detailansichten verwendet und sie benutzt, um Seiten zum Anzeigen unserer Bücher und Autoren zu erstellen. Wir haben unterwegs über Mustererkennung mit regulären Ausdrücken gelernt und gesehen, wie man Daten von URLs an Ansichten übertragen kann. Wir haben auch einige weitere Tricks zur Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginiert, so dass unsere Listen auch bei vielen Datensätzen handhabbar bleiben.

In unseren nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen, und dabei Benutzer-Authentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Vorlagentags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}
````
