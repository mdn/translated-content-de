---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
slug: Learn/Server-side/Django/Generic_views
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website, indem Listen- und Detailseiten für Bücher und Autoren hinzugefügt werden. Hier lernen wir generische, klassenbasierte Ansichten kennen und zeigen, wie sie die Menge an Code reduzieren können, die für gängige Anwendungsfälle geschrieben werden muss. Wir werden auch die URL-Verarbeitung ausführlicher behandeln und zeigen, wie grundlegendes Musterabgleich durchgeführt wird.

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
        Zu verstehen, wann und wie generische, klassenbasierte Ansichten verwendet werden und wie Muster aus URLs extrahiert werden und die Informationen an Ansichten übergeben werden.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website abschließen, indem Listen- und Detailseiten für Bücher und Autoren hinzugefügt werden (genauer gesagt, wir zeigen Ihnen, wie Sie die Buchseiten implementieren, und lassen Sie die Autorenseiten selbst erstellen!)

Der Prozess ähnelt dem Erstellen der Indexseite, wie wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Karten, Ansichten und Vorlagen erstellen. Der Hauptunterschied besteht darin, dass wir bei den Detailseiten die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und an die Ansicht zu übergeben. Für diese Seiten demonstrieren wir einen völlig anderen Ansichts-Typ: generische, klassenbasierte Listen- und Detailansichten. Diese können den benötigen View-Code signifikant reduzieren, was sie einfacher zu schreiben und zu warten macht.

Der letzte Teil des Tutorials zeigt, wie man Daten paginiert, wenn generische, klassenbasierte Listenansichten verwendet werden.

## Buchlistenseite

Die Buchlistenseite zeigt eine Liste aller verfügbaren Buchdatensätze auf der Seite an, die über die URL `catalog/books/` abgerufen werden. Die Seite zeigt einen Titel und Autor für jeden Datensatz, wobei der Titel ein Hyperlink zur zugehörigen Buchdetailseite ist. Die Seite hat dieselbe Struktur und Navigation wie alle anderen Seiten der Website, und wir können daher die Basisvorlage (**base_generic.html**) erweitern, die wir im vorherigen Tutorial erstellt haben.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und kopieren Sie die Zeile, die den Pfad für `'books/'` festlegt, wie unten gezeigt. Genau wie bei der Indexseite definiert diese `path()` Funktion ein Muster, das mit der URL (**'books/'**) übereinstimmt, eine Ansichts-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese spezielle Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits mit `/catalog` übereingestimmt haben, sodass die Ansicht tatsächlich für die URL `/catalog/books/` aufgerufen wird.

Die Ansichts-Funktion hat ein anderes Format als zuvor - das liegt daran, dass diese Ansicht tatsächlich als Klasse implementiert wird. Wir werden von einer bestehenden generischen Ansichts-Funktion erben, die bereits das meiste von dem tut, was wir von dieser Ansichts-Funktion erwarten, anstatt unsere eigene von Grund auf neu zu schreiben.

Für klassenbasierte Django-Ansichten rufen wir eine geeignete Ansichts-Funktion auf, indem wir die Klassenmethode `as_view()` aufrufen. Dies erledigt die gesamte Arbeit der Erstellung einer Instanz der Klasse und stellt sicher, dass die richtigen Handler-Methoden für eingehende HTTP-Anfragen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht recht einfach als normale Funktion schreiben (genau wie unsere vorherige Indexansicht), die die Datenbank nach allen Büchern abfragt und dann `render()` aufruft, um die Liste an eine angegebene Vorlage zu übergeben. Stattdessen werden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) verwenden - eine Klasse, die von einer bestehenden Ansicht erbt. Da die generische Ansicht bereits die meisten der benötigten Funktionalitäten implementiert und den Django-Best-Practice folgt, werden wir in der Lage sein, eine robustere Listenansicht mit weniger Code, weniger Wiederholung und letztendlich weniger Wartungsaufwand zu erstellen.

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das ist es! Die generische Ansicht fragt die Datenbank ab, um alle Datensätze für das angegebene Modell (`Book`) abzurufen und rendert dann eine Vorlage, die sich unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** befindet (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Liste der Bücher mit der Template-Variable `object_list` ODER `book_list` zugreifen (d.h. generisch "`<der Modellsname>_list`").

> [!NOTE]
> Dieser umständliche Pfad für den Standort der Vorlage ist kein Druckfehler - die generischen Ansichten suchen nach Vorlagen unter `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) innerhalb des `/application_name/templates/` Verzeichnisses der Anwendung (`/catalog/templates/).

Sie können Attribute hinzufügen, um das Standardverhalten oben zu ändern. Zum Beispiel können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dasselbe Modell verwenden, oder Sie möchten vielleicht einen anderen Namen für die Template-Variable verwenden, wenn `book_list` nicht intuitiv für Ihren speziellen Vorlagen-Anwendungsfall ist. Möglicherweise ist die nützlichste Variation, die zurückgegebenen Ergebnismengen zu ändern/zu filtern - anstatt alle Bücher aufzulisten, könnten Sie z.B. die Top 5 Bücher auflisten, die von anderen Benutzern gelesen wurden.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # Ihr eigener Name für die Liste als Template-Variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Holen Sie sich 5 Bücher, die den Titel "war" enthalten
    template_name = 'books/my_arbitrary_template_name_list.html'  # Geben Sie Ihren eigenen Vorlagennamen/-standort an
```

#### Methoden in klassenbasierten Ansichten überschreiben

Während wir das hier nicht tun müssen, können Sie auch einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die `get_queryset()` Methode überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Das ist flexibler als nur das `queryset` Attribut zu setzen, wie wir es im vorangegangenen Codefragment getan haben (obwohl es in diesem Fall keinen wirklichen Vorteil bietet):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Holen Sie sich 5 Bücher, die den Titel "war" enthalten
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z.B. wird die Liste der Bücher standardmäßig übergeben). Das folgende Fragment zeigt, wie man eine Variable namens "`some_data`" in den Kontext aufnimmt (es wäre dann als Template-Variable verfügbar).

```python
class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Rufen Sie zuerst die Basisimplementierung auf, um den Kontext zu erhalten
        context = super(BookListView, self).get_context_data(**kwargs)
        # Erstellen Sie beliebige Daten und fügen Sie sie dem Kontext hinzu
        context['some_data'] = 'Dies sind nur einige Daten'
        return context
```

Wenn Sie dies tun, ist es wichtig, das oben verwendete Muster zu befolgen:

- Holen Sie sich zuerst den vorhandenen Kontext von unserer Superklasse.
- Fügen Sie dann Ihre neuen Kontextinformationen hinzu.
- Geben Sie dann den neuen (aktualisierten) Kontext zurück.

> [!NOTE]
> Schauen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django Docs) an für viele weitere Beispiele dessen, was Sie tun können.

### Erstellen der Listenansichts-Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text hinein. Wie oben besprochen, ist dies die Standardvorlagendatei, die von der generischen klassenbasierten Listenansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Vorlagen für generische Ansichten sind wie jede andere Vorlage (auch wenn der an die Vorlage übergebene Kontext/unterschiedlicherweise Informationen unterschiedlich sein können).
Wie bei unserer _index_ Vorlage erweitern wir unsere Basisvorlage in der ersten Zeile und ersetzen dann den Block namens `content`.

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

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else`, und `endif` Template-Tags, um zu überprüfen, ob die `book_list` definiert wurde und nicht leer ist. Wenn `book_list` leer ist, zeigt die `else` Klausel einen Text an, der erklärt, dass es keine Bücher zu listen gibt. Wenn `book_list` nicht leer ist, dann iterieren wir durch die Liste der Bücher.

```django
{% if book_list %}
  <!-- Code hier, um die Bücher aufzulisten -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die Bedingung oben überprüft nur einen Fall, aber Sie können zusätzliche Bedingungen testen, indem Sie das `elif` Template-Tag verwenden (z.B. `{% elif var2 %}`).
Für weitere Informationen über bedingte Operatoren sehen Sie: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal), und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django Docs).

#### For-Schleifen

Das Template verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor` Template-Tags, um die Buchliste zu durchlaufen, wie unten gezeigt. Jede Iteration befüllt die `book` Template-Variable mit Informationen für das aktuelle Listenitem.

```django
{% for book in book_list %}
  <li><!-- Code hier, um Informationen aus jedem Buchartikel zu erhalten --></li>
{% endfor %}
```

Sie könnten auch das `{% empty %}` Template-Tag verwenden, um zu definieren, was passiert, wenn die Buchliste leer ist (obwohl unsere Vorlage stattdessen eine Bedingung wählt):

```django
<ul>
  {% for book in book_list %}
    <li><!-- Code hier, um Informationen aus jedem Buchartikel zu erhalten --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Während sie hier nicht verwendet wird, erstellt Django innerhalb der Schleife auch andere Variablen, die Sie zur Verfolgung der Iteration verwenden können. Beispielsweise können Sie die `forloop.last` Variable testen, um die letzte Schleifeniteration bedingt zu verarbeiten.

#### Zugriff auf Variablen

Der Code in der Schleife erstellt ein Listenelement für jedes Buch, das sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor zeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes mithilfe der "Punktnotation" zu (z.B. `book.title` und `book.author`), wobei der Text, der dem `book` Element folgt, der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell von innerhalb unserer Vorlage aus aufrufen - in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, die Sie verwenden könnten, um den zugehörigen Detaildatensatz anzuzeigen. Dies funktioniert, vorausgesetzt, die Funktion hat keine Argumente (es gibt keine Möglichkeit, Argumente zu übergeben!)

> [!NOTE]
> Wir müssen ein wenig vorsichtig mit "Seiteneffekten" sein, wenn wir Funktionen in Vorlagen aufrufen. Hier holen wir uns nur eine URL zur Anzeige, aber eine Funktion kann fast alles tun - wir möchten nicht unsere Datenbank löschen (zum Beispiel) nur durch das Rendern unserer Vorlage!

#### Aktualisieren der Basisvorlage

Öffnen Sie die Basisvorlage (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Dadurch wird der Link auf allen Seiten aktiviert (wir können dies erfolgreich platzieren, nachdem wir den URL-Mapper "books" erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht es aus?

Sie werden die Buchliste noch nicht bauen können, da uns noch eine Abhängigkeit fehlt - der URL-Mapper für die Buchdetailseiten, der benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir zeigen sowohl Listen- als auch Detailansichten nach dem nächsten Abschnitt.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen über ein bestimmtes Buch an, die über die URL `catalog/book/<id>` abgerufen werden (wobei `<id>` der Primärschlüssel für das Buch ist). Zusätzlich zu den Feldern im `Book` Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre) werden wir auch die Details der verfügbaren Exemplare (`BookInstances`) einschließlich Status, voraussichtliches Rückgabedatum, Impressum und ID auflisten. Dies ermöglicht es unseren Lesern nicht nur, etwas über das Buch zu erfahren, sondern auch zu überprüfen, ob/wann es verfügbar ist.

### URL-Mapping

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad namens '**book-detail**' hinzu. Diese `path()` Funktion definiert ein Muster, eine zugeordnete generische, klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_ Pfad verwendet das URL-Muster eine spezielle Syntax, um die spezifische ID des Buches zu erfassen, das wir sehen möchten. Die Syntax ist sehr einfach: Winkelklammern definieren den Teil der URL, der erfasst werden soll und den Namen der Variablen, die die Ansicht verwenden kann, um auf die erfassten Daten zuzugreifen. Zum Beispiel, **\<something>**, wird das markierte Muster erfassen und den Wert als Variable "something" an die Ansicht übergeben. Sie können optional den Variablennamen mit einer [Konverter-Spezifikation](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Datentyp (int, str, slug, uuid, path) definiert.

In diesem Fall verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenfolge sein muss und übergeben diese an die Ansicht als Parameter namens `pk` (kurz für Primärschlüssel). Dies ist die ID, die verwendet wird, um das Buch eindeutig in der Datenbank zu speichern, wie im Buchmodell definiert.

> [!NOTE]
> Wie bereits besprochen, ist unsere übereinstimmende URL tatsächlich `catalog/book/<digits>` (weil wir uns in der **catalog** Anwendung befinden, wird `/catalog/` angenommen).

> [!WARNING]
> Die generische, klassenbasierte Detailansicht _erwartet_, dass ihr ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parameternamen verwenden, oder die Informationen in einem unbenannten Argument übergeben.

#### Erweiterte Pfadübereinstimmung/Einführung in reguläre Ausdrücke

> [!NOTE]
> Sie werden diesen Abschnitt nicht benötigen, um das Tutorial abzuschließen! Wir bieten ihn an, weil es wahrscheinlich nützlich ist, diese Option für Ihre Django-zentrierte Zukunft zu kennen.

Die Mustererkennung, die von `path()` bereitgestellt wird, ist einfach und nützlich für die (sehr häufigen) Fälle, in denen Sie lediglich _irgendeine_ Zeichenfolge oder Zahl erfassen möchten. Wenn Sie eine feinere Filterung benötigen (zum Beispiel, um nur Zeichenfolgen zu filtern, die eine bestimmte Anzahl an Zeichen enthalten), können Sie die Methode [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) verwenden.

Diese Methode wird genauso wie `path()` verwendet, außer dass sie Ihnen erlaubt, ein Muster mit einem [Regulären Ausdruck](https://docs.python.org/3/library/re.html) zu spezifizieren. Zum Beispiel könnte der vorherige Pfad wie unten gezeigt geschrieben werden:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Musterabbildungswerkzeug. Sie sind, gelinde gesagt, ziemlich unintuitiv und können für Anfänger einschüchternd sein. Unten ist eine sehr kurze Einführung!

Das erste, was Sie wissen sollten, ist, dass reguläre Ausdrücke normalerweise mit dem Syntax für rohe Zeichenfolgenliterale deklariert werden sollten (d.h. sie sind umschlossen wie gezeigt: **r'\<Ihr Regulärer Ausdruck Text geht hier>'**).

Die wichtigsten Teile der Syntax, die Sie für die Deklaration der Mustererkennung benötigen, sind:

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
        Übereinstimmung mit einem Wortzeichen, z.B. einem beliebigen Groß- oder
        Kleinbuchstaben im Alphabet, einer Ziffer oder dem Unterstrich-Zeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Übereinstimmung mit einem oder mehreren der vorangehenden Zeichen.
        Um z.B. mit einer oder mehr Ziffer(n) zu übereinstimmen, würden Sie
        <code>\d+</code> verwenden. Um mit einem oder mehreren "a" Zeichen
        zu übereinstimmen, könnten Sie <code>a+</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Übereinstimmung mit null oder mehr des vorangehenden Zeichens. Um z.B.
        mit nichts oder einem Wort übereinzustimmen, können Sie <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Erfassen Sie den Teil des Musters innerhalb der Klammern. Jegliche
        erfassten Werte werden als unbenannte Parameter an die Ansicht übergeben
        (wenn mehrere Muster erfasst werden, werden die zugehörigen
        Parameter in der Reihenfolge übergeben, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfassen Sie das Muster (angegeben durch ...) als eine benannte Variable (in
        diesem Fall "name"). Die erfassten Werte werden der Ansicht mit dem angegebenen
        Namen übergeben. Ihre Ansicht muss daher einen Parameter mit demselben Namen
        deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Übereinstimmung mit einem Zeichen im Set. Zum Beispiel wird [abc] mit
        'a' oder 'b' oder 'c' übereinstimmen. [-\w] wird mit dem '-' Zeichen
        oder einem beliebigen Wortzeichen übereinstimmen.
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
          Dies ist das RE, das in unserem URL-Mapper verwendet wird. Es stimmt mit
          einer Zeichenfolge überein, die <code>book/</code> am Anfang der Zeile
          <strong>^book/</strong> hat, dann eine oder mehrere Ziffern
          <code>\d+</code> hat und dann endet (mit keinen Nicht-Ziffern Zeichen
          vor dem Endmarker der Linie).
        </p>
        <p>
          Es erfasst auch alle Ziffern
          <strong>(?P&#x3C;pk>\d+)</strong> und übergibt diese als Variable 'pk'
          an die Ansicht.
          <strong>Die erfassten Werte werden immer als Zeichenfolge übergeben!</strong>
        </p>
        <p>
          Zum Beispiel wäre dies <code>book/1234</code> und überträgt eine Variable
          <code>pk='1234'</code> zur Ansicht.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dies stimmt mit denselben URLs wie im vorherigen Fall überein. Die erfasste
        Information würde als unbenannte Argumente an die Ansicht übergeben werden.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies stimmt mit einer Zeichenfolge überein, die <code>book/</code> am
          Anfang der Zeile hat (<strong>^book/</strong>), dann über ein oder
          mehr Zeichen verfügt, die entweder "-" oder ein Wortzeichen sind
          (<strong>[-\w]+</strong>), und dann endet. Es erfasst diesen Satz
          von Zeichen und übergibt sie an die Ansicht in einer Variable namens 'stub'.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für einen "Stub". Stubs sind
          URL-freundliche, wortbasierte Primärschlüssel für Daten. Sie könnten
          einen Stub verwenden, wenn Sie möchten, dass Ihre Buch-URL
          informativer ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> anstatt
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können mehrere Muster in einem Match erfassen und daher viele verschiedene Informationen in eine URL kodieren.

> [!NOTE]
> Als Herausforderung überlegen Sie, wie Sie eine URL kodieren könnten, um alle in einem bestimmten Jahr, Monat, Tag veröffentlichten Bücher aufzulisten, und das RE, das verwendet werden könnte, um es zu erfassen.

#### Zusätzliche Optionen in Ihren URL-Karten übergeben

Ein Merkmal, das wir hier nicht verwendet haben, aber das für Sie nützlich sein könnte, ist, dass Sie der Ansicht ein [Wörterbuch mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) übergeben können (mithilfe des dritten unbenannten Arguments der `path()` Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden möchten und Daten übergeben möchten, um das Verhalten in jedem Fall zu konfigurieren.

Zum Beispiel, bei Verwendung des folgenden Pfads, ruft Django für eine Anfrage an `/myurl/halibut/` `views.my_view(request, fish='halibut', my_template_name='some_path')` auf.

```python
path('myurl/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte Mustererfassungen als auch Wörterbuchoptionen werden als _benannte_ Argumente an die Ansicht übergeben. Wenn Sie den **gleichen Namen** für ein Erfassungsmuster und einen Wörterbuchschlüssel verwenden, wird die Wörterbuchoption verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und kopieren Sie den folgenden Code an das Ende der Datei:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das ist es! Alles, was Sie jetzt tun müssen, ist, eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird die Datenbankinformationen für den spezifischen `Book` Datensatz an die Vorlage übergeben, die vom URL-Mapping extrahiert wurde. Innerhalb der Vorlage können Sie auf die Buchdetails mit der Template-Variable `object` ODER `book` zugreifen (d.h. generisch "`the_model_name`").

Wenn nötig, können Sie die verwendete Vorlage ändern und den Namen des Kontextobjekts, das zum Referenzieren des Buches in der Vorlage verwendet wird. Sie können auch Methoden überschreiben, um beispielsweise zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, wird die generische klassenbasierte Detailansicht für Sie automatisch eine `Http404` Ausnahme auslösen - in der Produktion wird dies automatisch eine entsprechende "Ressource nicht gefunden" Seite anzeigen, die Sie bei Bedarf anpassen können.

Um Ihnen eine Vorstellung davon zu geben, wie das funktioniert, zeigt das folgende Codefragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie **nicht** die generische klassenbasierte Detailansicht verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zunächst, den spezifischen Buchdatensatz aus dem Modell zu erhalten. Wenn dies fehlschlägt, sollte die Ansicht eine `Http404` Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" ist. Der letzte Schritt besteht dann, wie üblich, darin, `render()` mit dem Vorlagennamen und den Buchdaten im `context` Parameter (als Wörterbuch) aufzurufen.

Eine andere Möglichkeit, dies zu tun, wenn Sie keine generische Ansicht verwenden, wäre, die `get_object_or_404()` Funktion aufzurufen. Dies ist eine Abkürzung, um eine `Http404` Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detailansichts-Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und geben Sie ihr den folgenden Inhalt. Wie oben besprochen, ist dies der Standardvorlagen-Dateiname, der von der generischen klassenbasierten _Detail_ Ansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Title: \{{ book.title }}</h1>

  <p><strong>Author:</strong> <a href="">\{{ book.author }}</a></p>
  <!-- Autorendetail-Link noch nicht definiert -->
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
> Der Autor-Link in der Vorlage oben hat eine leere URL, weil wir noch keine Autorendetailseite erstellt haben, zu der verlinkt werden kann. Sobald die Detailseite existiert, können wir ihre URL mit einer der beiden folgenden Methoden abrufen:
>
> - Verwenden Sie das `url` Template-Tag, um die 'author-detail' URL (im URL-Mapper definiert) rückwärts zu suchen, und übergeben Sie ihr die Autoreninstanz für das Buch:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die `get_absolute_url()` Methode des Autorenmodells auf (hier wird dasselbe Rückwärtsverfahren angewendet):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Auch wenn beide Methoden effektiv dasselbe tun, wird `get_absolute_url()` bevorzugt, weil es Ihnen hilft, konsistentere und wartung effizientere Code zu schreiben (Änderungen müssen nur an einer Stelle vorgenommen werden: im Autorenmodell).

Obwohl sie etwas umfangreicher ist, wurde fast alles in dieser Vorlage bereits beschrieben:

- Wir erweitern unsere Basisvorlage und überschreiben den "content" Block.
- Wir verwenden bedingte Verarbeitung, um zu bestimmen, ob ein bestimmter Inhalt angezeigt werden soll oder nicht.
- Wir verwenden `for` Schleifen, um durch Listen von Objekten zu iterieren.
- Wir greifen über die Punktnotation auf die Felder des Kontexts zu (weil wir die Detailansicht der generischen Ansicht verwendet haben, heißt der Kontext `book`; wir könnten auch "`object`" verwenden).

Das erste interessante, bisher nicht gesehene, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automatisch" konstruiert, um die Menge von `BookInstance` Datensätzen zurückzugeben, die mit einem bestimmten `Book` assoziiert sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- Code, um über jede Kopie/Instanz eines Buches zu iterieren -->
{% endfor %}
```

Diese Methode ist notwendig, da Sie ein `ForeignKey` (eins-zu-mehr) Feld nur auf der "viele" Seite der Beziehung deklarieren (das `BookInstance`). Da Sie nichts tun, um die Beziehung im anderen Modell ("eins") zu deklarieren, hat dieses (das `Book`) kein Feld, um die Menge der zugehörigen Datensätze zu erhalten. Um dieses Problem zu lösen, konstruiert Django eine entsprechend benannte "Rückwärtsabfrage"-Funktion, die Sie verwenden können. Der Name der Funktion wird durch Kleinschreibung des Modellnamens, bei dem das `ForeignKey` deklariert wurde, gefolgt von `_set` konstruiert (d.h. die im `Book` erstellte Funktion ist `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()` für alle Datensätze (der Standard). Während Sie die `filter()` Methode verwenden können, um eine Teilmenge von Datensätzen im Code zu erhalten, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente an Funktionen übergeben können.
>
> Beachten Sie auch, dass Sie Fehler vom Entwicklungsserver sehen werden, wie diesen, wenn Sie keine Reihenfolge definieren (auf Ihrer klassenbasierten Ansicht oder dem Modell):
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Dies passiert, weil das [Paginator Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass `orderby` auf Ihrer zugrunde liegenden Datenbank ausgeführt wird. Andernfalls kann es nicht sicher sein, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat keine **Paginierung** behandelt (noch nicht!), aber da Sie `sort_by()` nicht verwenden und ein Parameter übergeben können (ähnlich wie bei `filter()` oben beschrieben), müssen Sie zwischen drei Optionen wählen:
>
> 1. Fügen Sie ein `ordering` innerhalb einer `class Meta` Deklaration in Ihrem Modell hinzu.
> 2. Fügen Sie ein `queryset` Attribut in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu, spezifizieren Sie ein `order_by()`.
> 3. Fügen Sie eine `get_queryset` Methode in Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu und spezifizieren Sie auch das `order_by()`.
>
> Wenn Sie sich entscheiden, ein `class Meta` für das `Author` Modell hinzuzufügen (vielleicht nicht so flexibel wie das Anpassen der klassenbasierten Ansicht, aber einfach), würden Sie das wahrscheinlich mit einem Code wie diesem beenden:
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
> Natürlich muss das Feld nicht `last_name` sein: es könnte jedes andere Feld sein.
>
> Zu guter Letzt sollten Sie nach einem Attribut/Spalte sortieren, die tatsächlich einen Index (einzigartig oder nicht) in Ihrer Datenbank hat, um Leistungsprobleme zu vermeiden. Natürlich wird dies hier nicht nötig sein (wir kommen wahrscheinlich mit so wenigen Büchern und Benutzern etwas zu weit voraus), aber es ist etwas, das in zukünftigen Projekten zu beachten ist.

Das zweite interessante (und nicht offensichtliche) in der Vorlage ist, wo wir den Status-Text für jedes Bücherexemplar ("verfügbar", "in Wartung", etc.) anzeigen. Aufmerksame Leser werden feststellen, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Statustext zu erhalten, an keiner anderen Stelle im Code erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, da `BookInstance.status` ein [choices Feld](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist. Django erstellt automatisch eine Methode `get_FOO_display()` für jedes choices Feld "`Foo`" in einem Modell, die verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht es aus?

An diesem Punkt sollten wir alles erstellt haben, um sowohl die Buchlisten- als auch die Buchdetailseiten anzuzeigen. Führen Sie den Server (`python3 manage.py runserver`) aus und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch nicht auf Autor- oder Autorendetail-Links - Sie werden diese in der Herausforderung erstellen!

Klicken Sie auf den **Alle Bücher** Link, um die Liste der Bücher anzuzeigen.

![Buchlisten-Seite](book_list_page_no_pagination.png)

Klicken Sie dann auf einen Link zu einem Ihrer Bücher. Wenn alles korrekt eingerichtet ist, sollten Sie etwas wie im folgenden Screenshot sehen.

![Buchdetail-Seite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur ein paar Datensätze haben, wird unsere Buchlistenseite gut aussehen. Wenn Sie jedoch in die Zehner- oder Hunderterbereiche von Datensätzen kommen, wird die Seite zunehmend länger dauern, bis sie geladen ist (und hat viel zu viel Inhalt, um sinnvoll durchsucht zu werden). Die Lösung dieses Problems besteht darin, Paginierung zu Ihren Listenansichten hinzuzufügen, wodurch die Anzahl der Elemente auf jeder Seite reduziert wird.

Django hat hervorragende eingebaute Unterstützung für die Paginierung. Noch besser ist, dass dies in die generischen, klassenbasierten Listenansichten eingebaut ist, sodass Sie nicht viel tun müssen, um es zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die Zeile `paginate_by` hinzu, wie unten gezeigt.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung beginnt die Ansicht, die Daten zu paginieren, die sie an die Vorlage sendet, sobald Sie mehr als 10 Datensätze haben. Die verschiedenen Seiten werden über GET-Parameter aufgerufen - um auf Seite 2 zuzugreifen, verwenden Sie die URL `/catalog/books/?page=2`.

### Vorlagen

Nun, da die Daten paginiert sind, müssen wir die Vorlage unterstützen, um durch den Ergebnissatz zu scrollen. Da wir möglicherweise alle Listenansichten paginieren wollen, fügen wir dies in die Basisvorlage ein.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und suchen Sie den "content block" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock sofort nach dem `{% endblock %}`. Der Code überprüft zuerst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Wenn ja, fügt er _nächste_ und _vorherige_ Links wie angemessen hinzu (und die aktuelle Seitennummer).

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

Das `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) Objekt, das existieren wird, wenn Paginierung auf der aktuellen Seite verwendet wird. Es ermöglicht Ihnen, alle Informationen über die aktuelle Seite, vorhergehende Seiten, wie viele Seiten es gibt, etc. zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle Seiten-URL zur Erstellung der Paginierungslinkes zu erhalten. Dies ist nützlich, weil sie unabhängig von dem Objekt ist, das wir paginieren.

Das ist es!

### Wie sieht es aus?

Der Screenshot unten zeigt, wie die Paginierung aussieht - wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie es leichter testen, indem Sie die Zahl, die in der Zeile `paginate_by` in Ihrer **catalog/views.py** Datei angegeben ist, verringern. Um das untenstehende Ergebnis zu erhalten, haben wir es in `paginate_by = 2` geändert.

Die Paginierungslinke werden unten angezeigt, mit nächsten/vorherigen Linken, die je nach aktueller Seite angezeigt werden.

![Buchlisten-Seite - paginiert](book_list_paginated.png)

## Fordern Sie sich heraus

Die Herausforderung in diesem Artikel besteht darin, die erforderlichen Autorendetail- und Listenansichten zu erstellen, um das Projekt abzuschließen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Mappings und die Ansichten erforderliche Code sollte nahezu identisch mit den `Book` Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden unterschiedlich sein, aber ein ähnliches Verhalten teilen.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenlisten-Seite erstellt haben, müssen Sie auch den **Alle Autoren** Link in der Basisvorlage aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_der_basisvorlage) wie beim Aktualisieren des **Alle Bücher** Links.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansicht Vorlage](#erstellen_der_detailansichts-vorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, damit der Autorenlink auf Ihre neue Autorendetailseite verweist (anstatt eine leere URL zu sein).
>   Der empfohlene Weg, dies zu tun, ist, `get_absolute_url()` im Autorenmodell aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Author:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten etwa wie die folgenden Bildschirmfotos aussehen.

![Autorenlisten-Seite](author_list_page_no_pagination.png)

![Autorendetail-Seite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist nun vollständig!

In diesem Artikel haben wir gelernt, wie man die generischen, klassenbasierten Listen- und Detailansichten verwendet und sie benutzt, um Seiten zu erstellen, um unsere Bücher und Autoren anzuzeigen. Auf dem Weg haben wir etwas über Mustererkennung mit regulären Ausdrücken gelernt und wie Sie Daten aus URLs an Ihre Ansichten übergeben können. Wir haben auch ein paar weitere Tricks für die Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginiert, sodass unsere Listen überschaubar bleiben selbst bei vielen Datensätzen.

In unseren nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen, und dabei Benutzer-Authentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django Docs)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django Docs)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django Docs)
- [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django Docs)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django Docs)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/Home_page", "Learn/Server-side/Django/Sessions", "Learn/Server-side/Django")}}
