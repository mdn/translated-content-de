---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
short-title: "6: Generische Listen- und Detailansichten"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website um Listen- und Detailseiten für Bücher und Autoren. Hier lernen Sie über generische, klassenbasierte Views und zeigen, wie Sie den notwendigen Code für häufige Anwendungsfälle reduzieren können. Wir werden auch auf die URL-Verarbeitung näher eingehen und zeigen, wie man grundlegendes Musterabgleichen durchführen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Absolvierung aller vorhergehenden Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page">Django-Tutorial Teil 5: Erstellung unserer Startseite</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, wo und wie generische, klassenbasierte Views verwendet werden und wie Muster aus URLs extrahiert und die Informationen an die Views übergeben werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website abschließen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (oder, um präziser zu sein, wir zeigen, wie Sie die Buchseiten implementieren und Sie dazu bringen, die Autorenseiten selbst zu erstellen!)

Der Prozess ist ähnlich wie bei der Erstellung der Indexseite, die wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Karten, Views und Templates erstellen. Der Hauptunterschied liegt darin, dass wir bei den Detailseiten die zusätzliche Herausforderung haben werden, Informationen aus Mustern in der URL zu extrahieren und an die View zu übergeben. Für diese Seiten werden wir einen völlig anderen Typ von View demonstrieren: generische, klassenbasierte Listen- und Detailansichten. Diese können den erforderlichen View-Code erheblich reduzieren, was ihre Erstellung und Wartung erleichtert.

Der letzte Teil des Tutorials wird demonstrieren, wie Sie Ihre Daten paginieren, wenn Sie generische klassenbasierte Listenansichten verwenden.

## Buch-Liste-Seite

Die Buch-Liste-Seite wird eine Liste aller verfügbaren Buchdatensätze auf der Seite anzeigen, die über die URL: `catalog/books/` zugänglich ist. Die Seite zeigt für jeden Eintrag einen Titel und einen Autor an, wobei der Titel ein Hyperlink zur zugehörigen Buchdetailseite ist. Die Seite hat die gleiche Struktur und Navigation wie alle anderen Seiten auf der Site, und wir können daher die Basisschablone (**base_generic.html**) erweitern, die wir im vorherigen Tutorial erstellt haben.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile, die den Pfad für `'books/'` festlegt, wie unten gezeigt. Genau wie bei der Indexseite definiert diese `path()`-Funktion ein Muster, das mit der URL (**'books/'**) abgeglichen wird, eine View-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese bestimmte Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits `/catalog` übereinstimmt haben, sodass die View tatsächlich für die URL aufgerufen wird: `/catalog/books/`.

Die View-Funktion hat ein anderes Format als vorher — das liegt daran, dass diese View tatsächlich als Klasse implementiert wird. Wir werden von einer bestehenden generischen View-Funktion erben, die bereits den Großteil dessen tut, was wir von dieser View-Funktion erwarten, anstatt von Grund auf neu zu schreiben.

Bei Django-klassenbasierten Views greifen wir auf eine passende View-Funktion zu, indem wir die Klassenmethode `as_view()` aufrufen. Dadurch wird eine Instanz der Klasse erstellt und sichergestellt, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### View (klassenbasiert)

Wir könnten die Buchlisten-View ganz einfach als reguläre Funktion schreiben (genau wie unser vorheriges Index-View), die die Datenbank nach allen Büchern abfragt und dann `render()` aufruft, um die Liste an eine bestimmte Vorlage zu übergeben. Stattdessen werden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) verwenden — eine Klasse, die von einer bestehenden View erbt. Da die generische View bereits die meisten Funktionen implementiert und den Best Practices von Django folgt, können wir eine robustere Listenansicht mit weniger Code, weniger Wiederholung und letztendlich weniger Wartung erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das war's! Die generische View fragt die Datenbank ab, um alle Datensätze für das angegebene Modell (`Book`) zu erhalten, und rendert dann eine Vorlage, die sich unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** befindet (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste der Bücher mit der Template-Variablen `object_list` ODER `book_list` zugreifen (d.h. generell `<der Modellname>_list`).

> [!NOTE]
> Dieser umständliche Pfad für den Standort der Vorlage ist kein Druckfehler — die generischen Views suchen nach Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) im `/application_name/templates/` Verzeichnis der Anwendung (`/catalog/templates/`).

Sie können Attribute hinzufügen, um das Standardverhalten oben zu ändern. Beispielsweise können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dieses gleiche Modell verwenden, oder Sie möchten möglicherweise einen anderen Namen für die Template-Variable verwenden, wenn `book_list` für Ihren spezifischen Gebrauch nicht intuitiv ist. Die wahrscheinlich nützlichste Variante ist, den zurückgegebenen Teil der Ergebnisse zu ändern/filtern — anstelle aller Bücher könnten Sie beispielsweise die Top 5 Bücher anzeigen lassen, die von anderen Benutzern gelesen wurden.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Überschreiben von Methoden in klassenbasierten Views

Während wir dies hier nicht tun müssen, können Sie auch einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die `get_queryset()` Methode überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Dies ist flexibler, als nur das `queryset` Attribut zu setzen, wie wir es im vorangegangenen Codefragment getan haben (obwohl es in diesem Fall keinen wirklichen Vorteil bringt):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z. B. wird die Liste der Bücher standardmäßig übergeben). Das folgende Fragment zeigt, wie Sie eine Variable namens `some_data` zum Kontext hinzufügen können (sie wäre dann als Template-Variable verfügbar).

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

Bei diesem Vorgehen ist es wichtig, das oben verwendete Muster zu befolgen:

- Zuerst den bestehenden Kontext von unserer Superklasse übernehmen.
- Dann Ihre neuen Kontextinformationen hinzufügen.
- Dann den neuen (aktualisierten) Kontext zurückgeben.

> [!NOTE]
> Schauen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation) für viele weitere Beispiele an, was Sie tun können.

### Erstellung der List View-Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text hinein. Wie oben besprochen, handelt es sich um die Standardvorlage, die von der generischen klassenbasierten Listenansicht (für ein Modell namens `Book` in einer Anwendung namens `catalog`) erwartet wird.

Vorlagen für generische Ansichten sind wie alle anderen Vorlagen (obwohl natürlich die an die Vorlage übergebenen Kontexte/Informationen variieren können).
Wie bei unserer _Index_-Vorlage erweitern wir unsere Basisschablone in der ersten Zeile und ersetzen dann den Block namens `content`.

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

Die View übergibt den Kontext (Liste der Bücher) standardmäßig als `object_list` und `book_list`-Aliase; beide funktionieren.

#### Bedingte Ausführung

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else`, und `endif` Template-Tags, um zu prüfen, ob `book_list` definiert und nicht leer ist.
Wenn `book_list` leer ist, dann zeigt die `else`-Klausel einen Text an, der erklärt, dass es keine Bücher zu listen gibt.
Wenn `book_list` nicht leer ist, dann iterieren wir durch die Liste der Bücher.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die oben stehende Bedingung prüft nur einen Fall, aber Sie können zusätzliche Bedingungen mit dem `elif`-Template-Tag testen (z. B. `{% elif var2 %}`).
Weitere Informationen zu bedingten Operatoren finden Sie hier: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#{%if%}), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal), und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### For-Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor` Template-Tags, um durch die Buchliste zu schleifen, wie unten gezeigt.
Jede Iteration füllt die `book` Template-Variable mit Informationen für das aktuelle Listenelement.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie könnten auch das `{% empty %}` Template-Tag verwenden, um zu definieren, was passiert, wenn die Buchliste leer ist (obwohl unsere Vorlage sich für die Verwendung einer Bedingung entscheidet):

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
Zum Beispiel können Sie die `forloop.last`-Variable testen, um eine bedingte Verarbeitung durchzuführen, wenn die Schleife das letzte Mal durchläuft.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes mit der "Punktnotation" zu (z. B. `book.title` und `book.author`), wobei der Text, der dem `book`-Artikel folgt, der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell aus unseren Vorlagen heraus aufrufen — in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die Sie verwenden könnten, um den zugehörigen Datensatz im Detail anzuzeigen. Dies funktioniert, vorausgesetzt, die Funktion hat keine Argumente (es gibt keine Möglichkeit, Argumente zu übergeben!)

> [!NOTE]
> Wir müssen ein wenig vorsichtig sein mit "Nebenwirkungen" beim Aufruf von Funktionen in Vorlagen. Hier holen wir uns nur eine URL zum Anzeigen, aber eine Funktion kann so ziemlich alles tun — wir würden zum Beispiel nicht wollen, dass unsere Datenbank gelöscht wird, nur weil wir unsere Vorlage rendern!

#### Aktualisieren der Basisschablone

Öffnen Sie die Basisschablone (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Dies aktiviert den Link auf allen Seiten (wir können dies nun erfolgreich umsetzen, da wir den "Bücher"-URL-Mapper erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht das aus?

Sie werden die Buchliste noch nicht erstellen können, da uns noch eine Abhängigkeit fehlt — die URL-Zuordnung für die Buchdetailseiten, die benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir werden sowohl die Listen- als auch die Detailansichten nach dem nächsten Abschnitt zeigen.

## Buch-Detailseite

Die Buchdetailseite wird Informationen über ein bestimmtes Buch anzeigen, die über die URL `catalog/book/<id>` (wobei `<id>` der Primärschlüssel für das Buch ist) zugänglich ist. Zusätzlich zu den Feldern im `Book`-Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre), listen wir auch die Details der verfügbaren Exemplare (`BookInstances`) einschließlich des Status, des erwarteten Rückgabedatums, des Aufdrucks und der ID auf. Dies ermöglicht unseren Lesern nicht nur, mehr über das Buch zu erfahren, sondern auch zu überprüfen, ob/wann es verfügbar ist.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten dargestellten Pfad namens '**book-detail**' hinzu.
Diese `path()` Funktion definiert ein Muster, eine zugeordnete generische, klassenbasierte Detail-Ansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_ Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches zu erfassen, das wir sehen möchten.
Die Syntax ist sehr einfach: spitze Klammern definieren den Teil der URL, der erfasst werden soll, und schließen den Namen der Variablen ein, auf die die Ansicht zugreifen kann, um die erfassten Daten zu erhalten.
Zum Beispiel, **\<something>**, wird das markierte Muster erfassen und den Wert als Variable „something“ an die Ansicht übergeben.
Sie können dem Variablennamen optional eine [Umwandler-Spezifikation](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Datentyp (int, str, slug, uuid, path) definiert.

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenfolge sein muss, und übergeben sie als Parameter namens `pk` (Abkürzung für Primärschlüssel) an die Ansicht. Dies ist die ID, die zur eindeutigen Speicherung des Buchs in der Datenbank verwendet wird, wie im Buch-Modell definiert.

> [!NOTE]
> Wie bereits diskutiert, ist unsere übereinstimmende URL tatsächlich `catalog/book/<digits>` (weil wir uns in der **catalog** Anwendung befinden, wird `/catalog/` angenommen).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_, dass ihr ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parameternamen verwenden oder die Informationen sogar in einem unbenannten Argument übergeben.

#### Fortgeschrittenes Pfadmatching/Reguläre Ausdrücke Primer

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir stellen ihn zur Verfügung, weil es nützlich sein kann, diese Option in Ihrer zukunftigen Arbeit mit Django zu kennen.

Das Musterabgleich, das von `path()` bereitgestellt wird, ist einfach und nützlich für die (sehr üblichen) Fälle, in denen Sie nur _jede_ Zeichenfolge oder ganze Zahl erfassen möchten. Wenn Sie eine feinere Filterung benötigen (zum Beispiel, um nur Zeichenfolgen mit einer bestimmten Anzahl von Zeichen zu filtern), können Sie die [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) Methode verwenden.

Diese Methode wird genauso wie `path()` verwendet, außer dass Sie ein Muster mit einem [Regulären Ausdruck](https://docs.python.org/3/library/re.html) spezifizieren können. Zum Beispiel hätte der vorherige Pfad wie unten gezeigt geschrieben werden können:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Werkzeug für die Mustermapping. Sie sind, ehrlich gesagt, ziemlich unintuitiv und können für Anfänger einschüchternd sein. Unten ist eine sehr kurze Einführung!

Das Erste, was Sie wissen sollten, ist, dass reguläre Ausdrücke normalerweise unter Verwendung der Raw-String-Literal-Syntax deklariert werden sollten (d.h. sie sind eingeschlossen wie gezeigt: **r'\<Ihr regulärer Ausdruckstext gehört hier hin>'**).

Die Hauptteile der Syntax, die Sie für die Deklaration der Musterabgleiche wissen müssen, sind:

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
      <td>Anfang des Textes matchen</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Ende des Textes matchen</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Eine Ziffer matchen (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Ein Wortzeichen matchen, z.B. einen beliebigen Groß- oder Kleinbuchstaben im
        Alphabet, eine Ziffer oder das Unterstrichzeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Eins oder mehr des vorhergehenden Zeichens matchen. Zum Beispiel, um
        eine oder mehr Ziffern zu matchen, verwenden Sie <code>\d+</code>. Um ein oder mehr „a“
        Zeichen zu matchen, könnten Sie <code>a+</code> verwenden
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Null oder mehr des vorhergehenden Zeichens matchen. Zum Beispiel, um
        nichts oder ein Wort zu matchen, könnten Sie <code>\w*</code> verwenden
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Zum Matchen wird der Teil des Musters innerhalb der Klammern erfasst. Jegliche erfassten Werte
        werden als unbenannte Parameter an die View übergeben (wenn mehrere Muster
        erfasst werden, werden die zugehörigen Parameter in der Reihenfolge
        geliefert, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfassen Sie das Muster (angezeigt durch ...), als eine benannte
        Variable (in diesem Fall "name"). Die erfassten Werte werden an die
        View mit dem angegebenen Namen übergeben. Ihre View muss daher einen
        Parameter mit demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Matchen gegen ein Zeichen im Set. Zum Beispiel [abc] wird 'a' oder 'b'
        oder 'c' matchen. [-\w] wird das '-' Zeichen oder jedes Wortzeichen
        matchen.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können buchstäblich genommen werden!

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
          Dies ist der reguläre Ausdruck, der in unserem URL-Mapper verwendet wird. Es matcht eine Zeichenfolge, die
          <code>book/</code> am Anfang der Zeile hat (<strong>^book/</strong>),
          dann eine oder mehr Ziffern (<code>\d+</code>) und dann endet (ohne
          Nicht-Ziffernzeichen vor dem Zeilenendzeichen).
        </p>
        <p>
          Es erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und
          übergibt sie an die View in einem Parameter namens 'pk'.
          <strong>Die erfassten Werte werden immer als eine Zeichenfolge übergeben!</strong>
        </p>
        <p>
          Zum Beispiel würde dies mit <code>book/1234</code> übereinstimmen und eine
          Variable <code>pk='1234'</code> an die View senden.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies matcht dieselben URLs wie im vorherigen Fall. Die erfassten
        Informationen würden als ein unbenanntes Argument an die View gesendet.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies entspricht einer Zeichenfolge, die <code>book/</code> am Anfang der
          Zeile hat (<strong>^book/</strong>), dann ein oder mehrere Zeichen,
          die <em>entweder</em> ein '-' oder ein Wortzeichen sind
          (<strong>[-\w]+</strong>) und dann endet. Es erfasst auch diesen
          Zeichensatz und übergibt ihn an die View in einem Parameter namens 'stub'.
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

Sie können mehrere Muster in einem Match erfassen und daher viele verschiedene Informationen in einer URL kodieren.

> [!NOTE]
> Als Herausforderung überlegen Sie, wie Sie eine URL kodieren könnten, um alle im bestimmten Jahr, Monat, Tag veröffentlichten Bücher aufzulisten, und der reguläre Ausdruck, der verwendet werden könnte, um es zu matchen.

#### Zusätzliche Optionen in Ihren URL-Karten übergeben

Eine Funktion, die wir hier nicht verwendet haben, die Sie jedoch als wertvoll erachten, besteht darin, dass Sie der View ein [Wörterbuch mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) übergeben können (mithilfe des dritten unbenannten Arguments der `path()`-Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden möchten und Daten zur Konfiguration ihres Verhaltens in jedem Fall übergeben.

Zum Beispiel, beim unten gezeigten Pfad, wird für eine Anfrage an `/my-url/halibut/` Django `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Wörterbuchoptionen werden als _benannte_ Argumente an die View übergeben. Wenn Sie denselben Namen für sowohl ein erfasstes Muster als auch einen Wörterbuchschlüssel verwenden, dann wird die Wörterbuchoption verwendet.

### View (klassenbasiert)

Öffnen Sie **catalog/views.py**, und kopieren Sie den folgenden Code an das Ende der Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das war's! Alles, was Sie jetzt tun müssen, ist eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die View wird ihr die Datenbankinformationen für den spezifischen `Book`-Datensatz übergeben, der vom URL-Mapper extrahiert wurde. Innerhalb der Vorlage können Sie auf die Buchdetails mit der Template-Variablen `object` ODER `book` zugreifen (d.h. im Allgemeinen `the_model_name`).

Falls erforderlich, können Sie die verwendete Vorlage und den Namen des Kontextobjekts ändern, das zum Referenzieren des Buches in der Vorlage verwendet wird. Sie können auch Methoden überschreiben, um beispielsweise zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn der angeforderte Datensatz nicht existiert, wird die generische, klassenbasierte Detailansicht automatisch eine `Http404` Ausnahme auslösen — in der Produktion wird dies automatisch eine passende "Ressource nicht gefunden"-Seite anzeigen, die Sie falls gewünscht anpassen können.

Nur um Ihnen eine Vorstellung davon zu geben, wie dies funktioniert, zeigt das folgende Codefragment, wie Sie die klassenbasierte View als Funktion implementieren würden, wenn Sie die generische klassenbasierte Detailansicht **nicht** verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die View versucht zuerst, den spezifischen Buchdatensatz aus dem Modell zu holen. Wenn dies fehlschlägt, sollte die View eine `Http404` Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" ist. Der letzte Schritt besteht dann, wie üblich, darin, `render()` mit dem Vorlagennamen und den Buchdaten im `context`-Parameter (als Wörterbuch) aufzurufen.

Ein anderer Weg, wie Sie dies tun könnten, wenn Sie keine generische View verwenden würden, wäre die Verwendung der `get_object_or_404()` Funktion.
Dies ist eine Abkürzung, um eine `Http404` Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellung der Detailansicht-Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und fügen Sie den untenstehenden Inhalt ein. Wie oben besprochen, ist dies der Standardvorlagen-Dateiname, der von der generischen klassenbasierten _Detail_-Ansicht (für ein Modell namens `Book` in einer Anwendung namens `catalog`) erwartet wird.

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
> Der Autorenlink in der obigen Vorlage hat eine leere URL, weil wir noch keine Autorenspezifikationsseite erstellt haben, auf die verlinkt werden soll.
> Sobald die Detailansicht existiert, können wir deren URL mit einer der beiden Ansätze erhalten:
>
> - Verwenden Sie das `url` Template-Tag, um die 'author-detail' URL (im URL-Mapper definiert) umzuwandeln, wobei Sie ihr die Autoreninstanz des Buches übergeben:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die `get_absolute_url()` Methode des Autorenmodells auf (dies führt denselben Umwandlungsvorgang aus):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Obwohl beide Methoden effektiv dasselbe bewirken, wird `get_absolute_url()` bevorzugt, weil es Ihnen hilft, beständiger und wartungsfreundlicher zu schreiben (alle Änderungen müssen nur an einer Stelle vorgenommen werden: im Autorenmodell).

Obwohl es etwas größer ist, wurde fast alles in dieser Vorlage bereits beschrieben:

- Wir erweitern unsere Basisschablone und überschreiben den "content"-Block.
- Wir verwenden bedingte Verarbeitung, um zu bestimmen, ob bestimmter Inhalt angezeigt werden soll oder nicht.
- Wir verwenden `for`-Schleifen, um durch Listen von Objekten zu iterieren.
- Wir greifen auf die Kontextfelder mit der Punktnotation zu (weil wir die generische Detailansicht verwenden, wird der Kontext `book` genannt; wir könnten auch `object` verwenden)

Das erste interessante Ding, das wir bisher nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django automatisch erstellt, um die `BookInstance`-Datensätze zu liefern, die mit einem bestimmten `Book` verbunden sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist nötig, da Sie ein `ForeignKey`- (eins-zu-viele-) Feld nur auf der "vielen" Seite der Beziehung deklarieren (der `BookInstance`). Da Sie nichts tun, um die Beziehung im anderen (dem "einen") Modell zu deklarieren, hat es (das `Book`) kein Feld, um die Menge der zugehörigen Datensätze zu erhalten. Um dieses Problem zu überwinden, erstellt Django eine passend benannte "Rückwärtssuch"-Funktion, die Sie verwenden können. Der Name der Funktion wird durch die Kleinschreibung des Modellnamens, wo das `ForeignKey` deklariert wurde, gefolgt von `_set` konstruiert (d.h. die Funktion, die in `Book` erstellt wird, ist `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze zu erhalten (die Standardeinstellung). Während Sie die `filter()`-Methode verwenden können, um einen Teil der Datensätze im Code zu erhalten, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente an Funktionen übergeben können.
>
> Seien Sie auch vorsichtig, dass wenn Sie keine Reihenfolge (auf Ihrer klassenbasierten View oder Ihrem Modell) definieren, bekommen Sie auch Fehlermeldungen vom Entwicklungsserver wie diese:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Das geschieht, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass einige ORDER BY-Anweisungen auf Ihrer zugrunde liegenden Datenbank ausgeführt werden. Ohne dies kann es nicht garantieren, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat noch **keine Paginierung** behandelt (noch nicht!), aber da Sie bei `sort_by()` kein Parameter übergeben können (dasselbe gilt für `filter()` wie oben beschrieben), müssen Sie zwischen drei Möglichkeiten wählen:
>
> 1. Ein `ordering` in einer `class Meta`-Erklärung in Ihrem Modell hinzufügen.
> 2. Einen `queryset`-Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzufügen, der mit einem `order_by()` spezifiziert wird.
> 3. Eine `get_queryset`-Methode zu Ihrer benutzerdefinierten klassenbasierten Ansicht hinzufügen, wo auch das `order_by()` angegeben wird.
>
> Wenn Sie sich entscheiden, mit einer `class Meta` für das `Author` Modell zu gehen (wahrscheinlich nicht so flexibel wie die Anpassung der klassenbasierten Ansicht, aber leicht genug), werden Sie am Ende etwas wie dies haben:
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
> Natürlich muss das Feld nicht `last_name` sein: es könnte jedes andere sein.
>
> Zuletzt, aber nicht zuletzt, Sie sollten nach einem Attribut oder Spalte sortieren, das tatsächlich einen Index (eindeutig oder nicht) auf Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich wird dies hier nicht notwendig sein (wir gehen wahrscheinlich voraus mit so wenigen Büchern und Benutzern), aber es ist etwas, das Sie für zukünftige Projekte im Hinterkopf behalten sollten.

Das zweite interessante (und nicht offensichtliche) Ding in der Vorlage ist, wo wir den Status-Text für jedes Buch-Exemplar anzeigen ("verfügbar", "Wartung", usw.).
Aufmerksame Leser werden bemerken, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text zu erhalten, an anderer Stelle im Code nicht angezeigt wird.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [Auswahlfeld](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist.
Django erstellt automatisch eine Methode `get_foo_display()` für jedes Auswahlfeld `foo` in einem Modell, die verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, was nötig ist, um sowohl die Buchliste als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser auf `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autoren- oder Autorenspezifikationslinks — Sie werden diese in der Herausforderung erstellen!

Klicken Sie auf den **Alle Bücher** Link, um die Liste der Bücher anzuzeigen.

![Book List Page](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles korrekt eingerichtet ist, sollten Sie etwas ähnlich dem folgenden Screenshot sehen.

![Book Detail Page](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur einige wenige Datensätze haben, wird unsere Buchlisten-Seite gut aussehen. Wenn Sie jedoch in die Zehner oder Hunderter von Datensätzen kommen, wird die Seite nach und nach länger zum Laden benötigen (und viel zu viel Inhalt zum sinnvollen Durchsuchen haben). Die Lösung für dieses Problem ist es, Paginierung zu Ihren Listenansichten hinzuzufügen, um die Anzahl der auf jeder Seite angezeigten Elemente zu reduzieren.

Django bietet hervorragende integrierte Unterstützung für die Paginierung. Noch besser ist, dass dies in die generischen, klassenbasierten Listenansichten integriert ist, sodass Sie nicht viel tun müssen, um es zu aktivieren!

### Views

Öffnen Sie **catalog/views.py** und fügen Sie die `paginate_by` Zeile hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung wird die Ansicht die Daten, die an die Vorlage gesendet werden, paginieren, sobald Sie mehr als 10 Datensätze haben.
Die verschiedenen Seiten sind über GET Parameter zugänglich — um auf Seite 2 zuzugreifen, würden Sie die URL `/catalog/books/?page=2` verwenden.

### Vorlagen

Jetzt, da die Daten paginiert sind, müssen wir der Vorlage die Unterstützung hinzufügen, um durch den Ergebnissatz zu blättern. Da wir möglicherweise alle Listenansichten paginieren möchten, werden wir dies zur Basisschablone hinzufügen.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und finden Sie den "content block" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock direkt nach dem `{% endblock %}`. Der Code prüft zuerst, ob die Pagination auf der aktuellen Seite aktiviert ist. Falls ja, fügt er _nächste_ und _vorherige_ Links, wie angemessen, hinzu (und die aktuelle Seitennummer).

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

Das `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) Objekt, das existiert, wenn die Paginierung auf der aktuellen Seite verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, vorherige Seiten, wie viele es gibt, usw. zu bekommen.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL für die Erstellung der Paginierungslinks zu erhalten. Dies ist nützlich, da es unabhängig vom Objekt ist, das wir paginieren.

Das war's!

### Wie sieht es aus?

Der Screenshot unten zeigt, wie die Paginierung aussieht — wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie es einfacher testen, indem Sie die in der `paginate_by` Zeile Ihrer Datei **catalog/views.py** angegebene Zahl senken. Um das unten stehende Ergebnis zu erhalten, haben wir es auf `paginate_by = 2` geändert.

Die Paginierungslinks werden unten auf der Seite angezeigt, wobei nächste/vorherige Links je nach auf welcher Seite Sie sich befinden, angezeigt werden.

![Buch Listen Seite - paginiert](book_list_paginated.png)

## Fordern Sie sich selbst heraus

Die Herausforderung in diesem Artikel besteht darin, die erforderlichen Autoren-Detail- und List Views zu erstellen, um das Projekt abzuschließen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den speziellen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Mapper und die Views benötigte Code sollte dem, den wir oben für die `Book`-Listen und Detailansichten erstellt haben, praktisch identisch sein. Die Vorlagen sind unterschiedlich, weisen jedoch ein ähnliches Verhalten auf.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenliste erstellt haben, müssen Sie auch den **Alle Autoren** Link in der Basisschablone aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_der_basisschablone), den wir verwendet haben, um den **Alle Bücher** Link zu aktualisieren.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buch Detailansicht Vorlage](#erstellung_der_detailansicht-vorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, so dass der Autorenlink auf Ihre neue Autorendetailseite zeigt (anstatt eine leere URL zu sein).
>   Der empfohlene Weg, dies zu tun, ist `get_absolute_url()` beim Autorenmodell aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Author:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten etwas wie die untenstehenden Screenshots aussehen.

![Autor Listen Seite](author_list_page_no_pagination.png)

![Autor Detail Seite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist nun vollständig!

In diesem Artikel haben wir gelernt, wie man die generischen klassenbasierten Listen- und Detailansichten verwendet und sie benutzt, um Seiten zu erstellen, um unsere Bücher und Autoren anzuzeigen. Auf dem Weg haben wir über Musterabgleich mit regulären Ausdrücken gelernt, und wie Sie Daten von URLs an Ihre Views übergeben können. Wir haben auch einige weitere Tricks für die Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginiert, sodass unsere Listen handhabbar sind, auch wenn wir viele Datensätze haben.

In unseren nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen und dabei Benutzerauthentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
