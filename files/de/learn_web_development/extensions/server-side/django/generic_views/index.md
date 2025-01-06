---
title: "Django Tutorial Teil 6: Generische Listen- und Detailansichten"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, indem es Listen- und Detailseiten für Bücher und Autoren hinzufügt. Hier lernen wir über generische, klassenbasierte Ansichten und zeigen, wie sie den Code reduzieren können, den Sie für häufige Anwendungsfälle schreiben müssen. Außerdem werden wir die URL-Verarbeitung genauer besprechen und zeigen, wie grundlegende Mustererkennung durchgeführt wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page">Django Tutorial Teil 5: Erstellung unserer Homepage</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wo und wie generische, klassenbasierte Ansichten verwendet werden können und wie Informationen aus URLs extrahiert und an Ansichten übergeben werden können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

In diesem Tutorial werden wir die erste Version der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website vervollständigen, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen (oder genauer gesagt, wir zeigen Ihnen, wie Sie die Buchseiten implementieren können, und lassen Sie die Autorenseiten selbst erstellen!)

Der Prozess ähnelt der Erstellung der Übersichtsseite, die wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Karten, Ansichten und Vorlagen erstellen. Der Hauptunterschied besteht darin, dass wir für die Detailseiten die zusätzliche Herausforderung haben, Informationen aus Mustern in der URL zu extrahieren und an die Ansicht zu übergeben. Für diese Seiten werden wir eine völlig andere Art von Ansicht demonstrieren: generische klassenbasierte Listen- und Detailansichten. Diese können die Menge des benötigten View-Codes erheblich reduzieren, wodurch sie leichter zu schreiben und zu warten sind.

Der letzte Teil des Tutorials zeigt, wie Sie Ihre Daten paginieren, wenn Sie generische klassenbasierte Listenansichten verwenden.

## Buchliste Seite

Die Buchliste-Seite zeigt eine Liste aller verfügbaren Buchdatensätze auf der Seite an, die über die URL: `catalog/books/` aufgerufen wird. Die Seite zeigt einen Titel und den Autor für jeden Datensatz an, wobei der Titel ein Hyperlink zur zugehörigen Buchdetailseite ist. Die Seite hat dieselbe Struktur und Navigation wie alle anderen Seiten der Website, und wir können daher die Basistemplate (**base_generic.html**) erweitern, die wir im vorherigen Tutorial erstellt haben.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie die Zeile ein, die den Pfad für `'books/'` festlegt, wie unten gezeigt. Genau wie für die Übersichtsseite definiert diese `path()` Funktion ein Muster, das mit der URL abgeglichen wird (**'books/'**), eine View-Funktion, die aufgerufen wird, wenn die URL übereinstimmt (`views.BookListView.as_view()`), und einen Namen für diese spezifische Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial besprochen, muss die URL bereits `/catalog` übereinstimmen, sodass die Ansicht tatsächlich für die URL aufgerufen wird: `/catalog/books/`.

Die View-Funktion hat ein anderes Format als zuvor – das liegt daran, dass diese View tatsächlich als Klasse implementiert wird. Wir werden von einer bestehenden generischen View-Funktion erben, die bereits das meiste tut, was wir von dieser View-Funktion erwarten, anstatt unsere eigene von Grund auf neu zu schreiben.

Für Django klassenbasierte Views greifen wir auf eine passende View-Funktion zu, indem wir die Klassenmethode `as_view()` aufrufen. Dies erledigt die gesamte Arbeit, eine Instanz der Klasse zu erstellen und sicherzustellen, dass die richtigen Handler-Methoden für eingehende HTTP-Anforderungen aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht ganz einfach als reguläre Funktion schreiben (genau wie unsere vorherige Übersichtsansicht), die die Datenbank nach allen Büchern abfragt und dann `render()` aufruft, um die Liste an eine angegebene Vorlage zu übergeben. Stattdessen verwenden wir jedoch eine klassenbasierte generische Listenansicht (`ListView`) — eine Klasse, die von einer bestehenden Ansicht erbt. Da die generische Ansicht bereits die meiste Funktionalität implementiert, die wir benötigen, und den Django-Best Practices folgt, können wir eine robustere Listenansicht mit weniger Code, weniger Wiederholung und letztendlich weniger Wartung erstellen.

Öffnen Sie **catalog/views.py** und fügen Sie den folgenden Code am Ende der Datei ein:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das war's! Die generische Ansicht wird die Datenbank abfragen, um alle Datensätze für das angegebene Modell (`Book`) abzurufen, und dann eine Vorlage rendern, die sich unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** befindet (die wir unten erstellen werden). Innerhalb der Vorlage können Sie auf die Bücherliste mit der Template-Variable `object_list` ODER `book_list` zugreifen (d. h. generisch `<der Modellname>_list`).

> [!NOTE]
> Dieser umständliche Pfad zur Vorlagenlokation ist kein Druckfehler — die generischen Ansichten suchen nach Vorlagen in `/application_name/the_model_name_list.html` (`catalog/book_list.html` in diesem Fall) innerhalb des `/application_name/templates/` Verzeichnisses der Anwendung (`/catalog/templates/`).

Sie können Attribute hinzufügen, um das Standardverhalten oben zu ändern. Beispielsweise können Sie eine andere Vorlagendatei angeben, wenn Sie mehrere Ansichten haben, die dasselbe Modell verwenden, oder Sie möchten möglicherweise einen anderen Template-Variablennamen verwenden, wenn `book_list` für Ihren speziellen Vorlagenanwendungsfall nicht intuitiv ist. Wahrscheinlich die nützlichste Variante besteht darin, die Teilmenge der zurückgegebenen Ergebnisse zu ändern/filtern — anstatt also alle Bücher aufzulisten, könnten Sie beispielsweise die Top-5 Bücher auflisten, die von anderen Benutzern gelesen wurden.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methodenüberschreibung in klassenbasierten Ansichten

Obwohl wir dies hier nicht tun müssen, können Sie auch einige der Klassenmethoden überschreiben.

Zum Beispiel können wir die `get_queryset()` Methode überschreiben, um die Liste der zurückgegebenen Datensätze zu ändern. Dies ist flexibler, als nur das `queryset` Attribut zu setzen, wie wir es im vorhergehenden Codefragment getan haben (obwohl es in diesem Fall keinen echten Vorteil gibt):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an die Vorlage zu übergeben (z. B. wird die Liste der Bücher standardmäßig übergeben). Das folgende Fragment zeigt, wie man eine Variable namens `some_data` zum Kontext hinzufügt (sie wäre dann als template variable verfügbar).

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

- Holen Sie sich zuerst den bestehenden Kontext von unserer Superklasse.
- Fügen Sie dann Ihre neuen Kontextinformationen hinzu.
- Dann geben Sie den neuen (aktualisierten) Kontext zurück.

> [!NOTE]
> Sehen Sie sich [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation) für viele weitere Beispiele an, was Sie tun können.

### Erstellen der List View Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und kopieren Sie den untenstehenden Text hinein. Wie oben besprochen, ist dies die standardmäßige Vorlagendatei, die von der generischen klassenbasierten Ansicht erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Vorlagen für generische Ansichten sind wie alle anderen Vorlagen (obwohl sich natürlich der Kontext/die Informationen, die an die Vorlage übergeben werden, unterscheiden können).
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

Die Ansicht übergibt den Kontext (Liste der Bücher) standardmäßig als `object_list` und `book_list` Aliase; beide werden funktionieren.

#### Bedingte Verarbeitung

Wir verwenden die [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else` und `endif` Template-Tags, um zu überprüfen, ob die `book_list` definiert und nicht leer ist.
Wenn `book_list` leer ist, zeigt die `else` Klausel einen Text an, der erklärt, dass es keine Bücher aufzulisten gibt.
Wenn `book_list` nicht leer ist, durchlaufen wir die Liste der Bücher.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Bisher wird nur der Fall geprüft ob gar keine Datensätze vorhanden sind, aber Sie können auf zusätzliche Bedingungen prüfen, indem Sie das `elif` Template-Tag verwenden (z. B. `{% elif var2 %}`).
Weitere Informationen zu bedingten Operatoren finden Sie unter: [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal) und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### For-Schleifen

Die Vorlage verwendet die [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor` Template-Tags, um durch die Buchliste zu schleifen, wie unten gezeigt.
Jede Iteration füllt die `book` Template-Variable mit Informationen für das aktuelle Listenelement.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Sie könnten auch das `{% empty %}` Template-Tag verwenden, um zu definieren, was passiert, wenn die Buchliste leer ist (auch wenn unsere Vorlage stattdessen eine Bedingung verwendet):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Auch wenn hier nicht verwendet, erstellt Django innerhalb der Schleife weitere Variablen, die Sie zur Nachverfolgung der Iteration verwenden können.
Zum Beispiel können Sie die Variable `forloop.last` testen, um eine bedingte Verarbeitung beim letzten Durchlauf der Schleife durchzuführen.

#### Zugriff auf Variablen

Der Code innerhalb der Schleife erstellt für jedes Buch ein Listenelement, das sowohl den Titel (als einen Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Wir greifen auf die _Felder_ des zugehörigen Buchdatensatzes mithilfe der "Punktnotation" zu (z. B. `book.title` und `book.author`), wobei der Text nach dem `book` Element der Feldname ist (wie im Modell definiert).

Wir können auch _Funktionen_ im Modell aus unserer Vorlage heraus aufrufen — in diesem Fall rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, mit der Sie den zugehörigen Detaildatensatz anzeigen könnten. Dies funktioniert, vorausgesetzt, die Funktion hat keine Argumente (es gibt keinen Weg, Argumente zu übergeben!)

> [!NOTE]
> Wir müssen bei der Verwendung von Funktionen in Vorlagen etwas vorsichtig hinsichtlich "Nebeneffekten" sein. Hier bekommen wir nur eine URL angezeigt, aber eine Funktion kann so ziemlich alles tun — wir möchten nicht unsere Datenbank löschen (zum Beispiel) nur durch das Rendern unserer Vorlage!

#### Aktualisieren der Basistemplate

Öffnen Sie die Basistemplate (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** in den URL-Link für **Alle Bücher** ein, wie unten gezeigt. Dies wird den Link auf allen Seiten aktivieren (wir können dies jetzt erfolgreich einfügen, da wir den "books" URL-Mapping erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht das aus?

Sie können die Buchliste noch nicht erstellen, da uns noch eine Abhängigkeit fehlt — die URL-Zuordnung für die Buchdetailseiten, die benötigt wird, um Hyperlinks zu einzelnen Büchern zu erstellen. Wir werden sowohl Listen- als auch Detailansichten nach dem nächsten Abschnitt zeigen.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen über ein bestimmtes Buch an, auf das über die URL `catalog/book/<id>` zugegriffen wird (wobei `<id>` der Primärschlüssel für das Buch ist). Zusätzlich zu den Feldern im `Book` Modell (Autor, Zusammenfassung, ISBN, Sprache und Genre) listen wir auch die Details der verfügbaren Exemplare (`BookInstances`) einschließlich des Statuses, des erwarteten Rückgabedatums, des Druckvermerks und der ID auf. Dies ermöglicht unseren Lesern nicht nur Informationen über das Buch zu erfahren, sondern auch zu bestätigen, ob/wann es verfügbar ist.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad namens '**book-detail**' hinzu.
Diese `path()` Funktion definiert ein Muster, eine zugehörige generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den _book-detail_ Pfad verwendet das URL-Muster eine besondere Syntax, um die spezifische ID des Buches zu erfassen, das wir sehen möchten.
Die Syntax ist sehr einfach: Winkelklammern definieren den Teil der URL, der erfasst werden soll, wobei sie den Namen der Variablen einschließen, die die Ansicht verwenden kann, um auf die erfassten Daten zuzugreifen.
Zum Beispiel, **\<etwas>**, wird das markierte Muster erfassen und den Wert als Variable "etwas" an die Ansicht übergeben. Sie können optional dem Variablennamen eine [Konverter-Spezifikation](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Datentyp definiert (int, str, slug, uuid, path).

In diesem Fall verwenden wir `'<int:pk>'` um die Buch-ID zu erfassen, die eine speziell formatierte Zeichenkette sein muss und sie als Parameter namens `pk` an die Ansicht zu übergeben (kurz für Primärschlüssel). Dies ist die ID, die verwendet wird, um das Buch eindeutig in der Datenbank zu speichern, wie im Buchmodell definiert.

> [!NOTE]
> Wie bereits erwähnt, lautet unsere übereinstimmende URL tatsächlich `catalog/book/<digits>` (da wir uns in der **catalog** Anwendung befinden, wird `/catalog/` angenommen).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_, dass ein Parameter namens **pk** übergeben wird. Wenn Sie Ihre eigene Funktionsansicht schreiben, können Sie jeden beliebigen Parameternamen verwenden oder die Informationen in einem unbenannten Argument übergeben.

#### Erweiterte Pfad-Matching/Reguläre Ausdrücke Primer

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir bieten ihn an, weil es wahrscheinlich nützlich ist, diese Option in Ihrer Django-zentrierten Zukunft zu kennen.

Das durch `path()` bereitgestellte Muster-Matching ist einfach und nützlich für die (sehr häufigen) Fälle, in denen Sie einfach _irgendeine_ Zeichenkette oder eine Zahl erfassen möchten. Wenn Sie eine feinere Filterung benötigen (z. B. um nur Zeichenketten zu filtern, die eine bestimmte Anzahl von Zeichen haben), können Sie die [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) Methode verwenden.

Diese Methode wird genauso verwendet wie `path()`, außer dass Sie mit ihr ein Muster mit einem [regulären Ausdruck](https://docs.python.org/3/library/re.html) angeben können. Zum Beispiel könnte Der vorherige Pfad wie unten gezeigt geschrieben worden sein:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein unglaublich mächtiges Werkzeug zur Mustererkennung. Sie sind, ehrlich gesagt, ziemlich unübersichtlich und können Anfänger einschüchtern. Unten finden Sie einen sehr kurzen Primer!

Das erste, was Sie wissen müssen, ist, dass reguläre Ausdrücke normalerweise mit der Syntax für rohe Zeichenfolgenliterale deklariert werden sollten (d. h. sie werden wie gezeigt umfasst: **r'\<Ihr regulärer Ausdruckstext>'**).

Die Hauptteile der Syntax, die Sie wissen müssen, um die Musterübereinstimmungen zu deklarieren, sind:

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
        Übereinstimmung mit einem Wortzeichen, z. B. einem beliebigen Groß- oder Kleinbuchstaben im
        Alphabet, Ziffer oder dem Unterstrich-Zeichen (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Übereinstimmung mit einem oder mehreren der vorhergehenden Zeichen. Zum Beispiel, um mit einer
        oder mehreren Ziffern übereinzustimmen, würden Sie <code>\d+</code> verwenden. Um mit einem oder mehreren "a"
        Zeichen zu übereinstimmen, könnten Sie <code>a+</code> verwenden
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Übereinstimmung mit null oder mehr des vorhergehenden Zeichens. Zum Beispiel, um mit
        nichts oder einem Wort übereinzustimmen, könnten Sie <code>\w*</code> verwenden
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Erfassen des Teils des Musters innerhalb der Klammern. Alle erfassten Werte
        werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere Muster
        erfasst werden, werden die zugehörigen Parameter in der Reihenfolge übertragen,
        in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfasst das Muster (angezeigt durch ...) als benannte Variable (in diesem Fall
        "name"). Die erfassten Werte werden mit dem angegebenen Namen an die Ansicht übergeben.
        Ihre Ansicht muss daher einen Parameter mit demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Übereinstimmung mit einem Zeichen in der Menge. Zum Beispiel, [abc] stimmt mit
        'a' oder 'b' oder 'c'. [-\w] stimmt mit dem '-' Zeichen oder einem Wortzeichen überein.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können wortwörtlich genommen werden!

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
          Dies ist der reguläre Ausdruck, der in unserer URL-Zuordnung verwendet wird. Er stimmt mit einer Zeichenfolge überein, die
          <code>book/</code> am Anfang der Zeile (<strong>^book/</strong>),
          gefolgt von einer oder mehreren Ziffern (<code>\d+</code>), und dann endet (mit keinen
          Nicht-Ziffern-Zeichen vor dem Endmarker der Zeile).
        </p>
        <p>
          Er erfasst auch alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong> und
          übergibt sie als Variable 'pk' an die Ansicht.
          <strong>Die erfassten Werte werden immer als Zeichenkette übergeben!</strong>
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
        Dies stimmt mit denselben URLs überein wie der vorherige Fall. Die erfassten
        Informationen würden als ein unbenanntes Argument an die Ansicht gesendet.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dies stimmt mit einer Zeichenfolge überein, die <code>book/</code> am Anfang der
          Zeile (<strong>^book/</strong>) hat, gefolgt von einem oder mehreren Zeichen, die
          <em>entweder</em> ein '-' oder ein Wortzeichen sind
          (<strong>[-\w]+</strong>), und dann endet. Es erfasst auch diese Gruppe von
          Zeichen und übergibt sie als Variable 'stub' an die Ansicht.
        </p>
        <p>
          Dies ist ein ziemlich typisches Muster für einen "Stub". Stubs sind URL-freundliche
          wortbasierte Primärschlüssel für Daten. Sie könnten einen Stub verwenden, wenn Sie wollten,
          dass Ihre Buch-URL informativer ist. Zum Beispiel
          <code>/catalog/book/the-secret-garden</code> anstelle von
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können in einer Übereinstimmung mehrere Muster erfassen und somit viele unterschiedliche Informationen in einer URL kodieren.

> [!NOTE]
> Überlegen Sie sich als Herausforderung, wie Sie eine URL kodieren könnten, um alle Bücher aufzulisten, die in einem bestimmten Jahr, Monat und Tag veröffentlicht wurden, und das RegEx, das verwendet werden könnte, um dies zu erreichen.

#### Übergeben zusätzlicher Optionen in Ihren URL-Zuordnungen

Eine Funktion, die wir hier nicht genutzt haben, aber die Sie als wertvoll empfinden könnten, ist, dass Sie [ein Wörterbuch mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht übergeben können (unter Verwendung des dritten unbenannten Arguments für die `path()` Funktion). Dieser Ansatz kann nützlich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden und Daten übergeben möchten, um deren Verhalten in jedem Fall zu konfigurieren.

Zum Beispiel wird Django bei dem unten gezeigten Pfad für eine Anfrage an `/my-url/halibut/` `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Wörterbuchoptionen werden als _benannte_ Argumente an die Ansicht übergeben. Wenn Sie für sowohl ein erfasstes Muster als auch einen Wörterbuchschlüssel denselben Namen verwenden, wird die Wörterbuchoption verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und fügen Sie den folgenden Code am Ende der Datei ein:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das war's! Alles, was Sie jetzt tun müssen, ist eine Vorlage namens **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** zu erstellen, und die Ansicht wird ihr die Datenbankinformationen für den spezifischen `Book`-Datensatz übergeben, der vom URL-Mapping extrahiert wurde. Innerhalb der Vorlage können Sie die Details des Buches mit der Template-Variable `object` ODER `book` (d. h. generisch `the_model_name`) zugreifen.

Wenn nötig, können Sie die verwendete Vorlage und den Namen des Kontextobjekts, das in der Vorlage auf das Buch referenziert, ändern. Sie können auch Methoden überschreiben, z. B. um zusätzliche Informationen zum Kontext hinzuzufügen.

#### Was passiert, wenn der Datensatz nicht existiert?

Wenn ein angeforderter Datensatz nicht existiert, wird von der generischen klassenbasierten Detailansicht automatisch eine `Http404` Ausnahme ausgelöst — in der Produktion wird dies automatisch eine entsprechende "Ressource nicht gefunden" Seite anzeigen, die, falls gewünscht, angepasst werden kann.

Um Ihnen eine Vorstellung davon zu geben, wie dies funktioniert, zeigt das folgende Code-Fragment, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie **nicht** die generische klassenbasierte Detailansicht verwenden würden.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zunächst, den spezifischen Buchdatensatz aus dem Modell abzurufen. Sollte dies fehlschlagen, sollte die Ansicht eine `Http404` Ausnahme auslösen, um anzuzeigen, dass das Buch "nicht gefunden" wurde. Der letzte Schritt besteht dann, wie üblich, darin, `render()` mit dem Template-Namen und den Buchdaten im `context` Parameter (als Wörterbuch) aufzurufen.

Eine andere Möglichkeit, dies zu tun, wenn Sie nicht die generische Ansicht verwenden würden, wäre, die Funktion `get_object_or_404()` aufzurufen.
Dies ist eine Abkürzung, um eine `Http404` Ausnahme auszulösen, wenn der Datensatz nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Erstellen der Detail-View-Vorlage

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** und geben Sie den untenstehenden Inhalt ein. Wie oben besprochen, ist dies der standardmäßige Vorlagendateiname, der von der generischen klassenbasierten _Detail_View_ erwartet wird (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

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
> Der Autorenlink in der obigen Vorlage hat eine leere URL, da wir noch keine Autorendetailseite zum Verlinken erstellt haben.
> Sobald die Detailseite existiert, können wir deren URL mit einer dieser zwei Methoden erhalten:
>
> - Verwenden Sie das `url` Template-Tag, um die 'author-detail' URL (definiert im URL-Mapping) rückzuübersetzen, und übergeben Sie ihm die Autoreninstanz für das Buch:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die `get_absolute_url()` Methode des Autorenmodells auf (dies führt dieselbe Rückübersetzung durch):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Obwohl beide Methoden effektiv dasselbe tun, wird `get_absolute_url()` bevorzugt, da es Ihnen hilft, konsistentere und wartbare Code zu schreiben (alle Änderungen müssten nur an einer Stelle durchgeführt werden: dem Autorenmodell).

Obwohl etwas größer, wurde fast alles in dieser Vorlage bereits beschrieben:

- Wir erweitern unsere Basistemplate und überschreiben den "content" Block.
- Wir verwenden bedingte Verarbeitung, um zu bestimmen, ob bestimmte Inhalte angezeigt werden sollen oder nicht.
- Wir verwenden `for` Schleifen, um durch Listen von Objekten zu laufen.
- Wir greifen mithilfe der Punktnotation auf die Kontextfelder zu (weil wir die generische Detailansicht verwendet haben, ist der Kontext mit `book` benannt; wir könnten auch `object` verwenden).

Das erste interessante, was wir bisher nicht gesehen haben, ist die Funktion `book.bookinstance_set.all()`. Diese Methode wird von Django "automatisch" erstellt, um die Menge der `BookInstance` Datensätze zurückzugeben, die mit einem bestimmten `Book` verknüpft sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist notwendig, da Sie ein `ForeignKey` (eins-zu-viele) Feld nur auf der "viele" Seite der Beziehung deklarieren (der `BookInstance`). Da Sie nichts tun, um die Beziehung im anderen ("eins") Modell zu deklarieren, hat es (das `Book`) kein Feld, um die Menge der zugehörigen Datensätze abzurufen. Um dieses Problem zu umgehen, konstruiert Django eine angemessen benannte "Rückwärtssuche" Funktion, die Sie verwenden können. Der Name der Funktion wird durch Kleinschreiben des Modellnamens, bei dem das `ForeignKey` deklariert wurde, plus `_set` erstellt (d. h. die Funktion, die in `Book` erstellt wird, ist `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Datensätze zu erhalten (der Standard). Obwohl Sie die `filter()` Methode im Code verwenden können, um eine Teilmenge von Datensätzen zu erhalten, können Sie dies nicht direkt in Vorlagen tun, da Sie keine Argumente für Funktionen spezifizieren können.
>
> Seien Sie sich auch bewusst, dass Sie, wenn Sie keine Reihenfolge für Ihre klassenbasierte Ansicht oder Ihr Modell definieren, auch Fehler vom Entwicklungsserver sehen werden, wie dieser:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Dies passiert, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass ein ORDER BY auf Ihrer zugrunde liegenden Datenbank ausgeführt wird. Ohne es kann nicht sichergestellt werden, dass die zurückgegebenen Datensätze tatsächlich in der richtigen Reihenfolge sind!
>
> Dieses Tutorial hat **Paginierung** (noch!) nicht behandelt, aber da Sie `sort_by()` nicht verwenden und ein Parameter angeben können (dasselbe gilt für `filter()` oben beschrieben), müssen Sie zwischen drei Optionen wählen:
>
> 1. Fügen Sie eine `ordering` Anweisung innerhalb einer `class Meta` Deklaration auf Ihrem Modell hinzu.
> 2. Fügen Sie ein `queryset` Attribut in Ihre benutzerdefinierte klassenbasierte Ansicht hinzu und spezifizieren Sie ein `order_by()`.
> 3. Fügen Sie eine `get_queryset` Methode zu Ihrer benutzerdefinierten klassenbasierten Ansicht hinzu und spezifizieren Sie auch das `order_by()`.
>
> Wenn Sie entscheiden, zu einer `class Meta` für das `Author` Modell zu gehen (vielleicht nicht so flexibel wie die Anpassung der klassenbasierten Ansicht, aber einfach genug), werden Sie etwas derart haben:
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
> Natürlich muss das Feld nicht `last_name` sein: Es könnte jedes andere sein.
>
> Zu guter Letzt sollten Sie eine Sortierung nach einem Attribut/Spalte durchführen, das tatsächlich ein Index (einzigartig oder nicht) in Ihrer Datenbank enthält, um Performance-Probleme zu vermeiden. Natürlich wird dies hier nicht notwendig sein (wir kommen wahrscheinlich mit so wenigen Büchern und Benutzern voran), aber es ist etwas, was man für zukünftige Projekte im Hinterkopf behalten sollte.

Das zweite interessante (und nicht offensichtliche) in der Vorlage ist, wo wir den Status-Text für jedes Buch-Exemplar anzeigen ("verfügbar", "Instandhaltung" etc.).
Aufmerksame LeserInnen werden bemerken, dass die Methode `BookInstance.get_status_display()`, die wir verwenden, um den Status-Text abzurufen, nicht anderswo im Code erscheint.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [Auswahlfeld](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist.
Django erstellt automatisch eine Methode `get_foo_display()` für jedes Auswahlfeld `foo` in einem Modell, das verwendet werden kann, um den aktuellen Wert des Feldes zu erhalten.

## Wie sieht das aus?

An diesem Punkt sollten wir alles erstellt haben, was benötigt wird, um sowohl die Buchliste als auch die Buchdetailseiten anzuzeigen. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie Ihren Browser unter `http://127.0.0.1:8000/`.

> [!WARNING]
> Klicken Sie noch auf keine Autor- oder Autodetail-Links — diese werden Sie in der Herausforderung erstellen!

Klicken Sie auf den **Alle Bücher** Link, um die Liste der Bücher anzuzeigen.

![Book List Page](book_list_page_no_pagination.png)

Klicken Sie dann auf einen der Bücherlinks. Wenn alles korrekt eingerichtet ist, sollten Sie so etwas wie den folgenden Screenshot sehen.

![Book Detail Page](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur ein paar Datensätze haben, wird unsere Buchlisten-Seite gut aussehen. Allerdings wird die Seite, sobald Sie in die Dutzende oder Hunderte von Datensätzen gehen, zunehmend länger laden (und zu viel Inhalt haben, um ihn sinnvoll zu durchsuchen). Die Lösung für dieses Problem besteht darin, Paginierung zu Ihren Listenansichten hinzuzufügen, sodass die Anzahl der auf jeder Seite angezeigten Elemente reduziert wird.

Django hat eine hervorragende integrierte Unterstützung für die Paginierung. Noch besser ist, dass dies in die generischen klassenbasierten Listenansichten integriert ist, sodass Sie nicht viel tun müssen, um sie zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die Zeile `paginate_by` wie unten gezeigt hinzu.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung beginnt die Ansicht, sobald Sie mehr als 10 Datensätze haben, die Daten zu paginieren, die sie an die Vorlage sendet.
Die verschiedenen Seiten werden mit GET-Parametern aufgerufen — um auf Seite 2 zuzugreifen, würden Sie die URL `/catalog/books/?page=2` verwenden.

### Vorlagen

Da die Daten jetzt paginiert sind, müssen wir die Vorlage hinzufügen, um durch die Ergebnismenge zu blättern. Da wir möglicherweise alle Listenansichten paginieren möchten, werden wir dies zur Basistemplate hinzufügen.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und suchen Sie den "Content-Block" (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Kopieren Sie den folgenden Paginierungsblock unmittelbar nach `{% endblock %}`. Der Code überprüft zuerst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Wenn ja, werden -next- und -previous-Links entsprechend hinzugefügt (sowie die aktuelle Seitenzahl).

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

Der `page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) Objekt, das existiert, wenn auf der aktuellen Seite eine Paginierung verwendet wird. Es erlaubt Ihnen, alle Informationen über die aktuelle Seite, vorherige Seiten, wie viele Seiten es gibt etc. zu erhalten.

Wir verwenden `\{{ request.path }}`, um die aktuelle URL für die Erstellung der Paginierungslinks zu bekommen. Dies ist nützlich, da es unabhängig vom paginierten Objekt bleibt.

Das ist alles!

### Wie sieht es aus?

Der folgende Screenshot zeigt, wie die Paginierung aussieht — wenn Sie nicht mehr als 10 Titel in Ihre Datenbank eingegeben haben, können Sie dies einfacher testen, indem Sie die angegebene Zahl in der `paginate_by` Zeile in Ihrer **catalog/views.py** Datei senken. Um das untenstehende Ergebnis zu erhalten, haben wir es auf `paginate_by = 2` geändert.

Die Paginierungslinks werden unten angezeigt, mit next/previous Links, abhängig davon, auf welcher Seite Sie sich befinden.

![Book List Page - paginiert](book_list_paginated.png)

## Fordern Sie sich selbst heraus

Die Herausforderung in diesem Artikel besteht darin, die erforderlichen Autoren-Detail- und Listenansichten zu erstellen, um das Projekt abzuschließen. Diese sollten unter den folgenden URLs verfügbar gemacht werden:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den spezifischen Autor mit einem Primärschlüsselfeld namens `<id>`

Der für die URL-Mapper und die Ansichten benötigte Code sollte nahezu identisch mit den `Book` Listen- und Detailansichten sein, die wir oben erstellt haben. Die Vorlagen werden unterschiedlich sein, zeigen aber ähnliches Verhalten.

> [!NOTE]
>
> - Sobald Sie den URL-Mapper für die Autorenliste erstellt haben, müssen Sie auch den **Alle Autoren** Link in der Basistemplate aktualisieren.
>   Folgen Sie dem [gleichen Prozess](#aktualisieren_der_basistemplate) wie wir, als wir den **Alle Bücher** Link aktualisiert haben.
> - Sobald Sie den URL-Mapper für die Autorendetailseite erstellt haben, sollten Sie auch die [Buchdetailansichtsvorlage](#erstellen_der_detail-view-vorlage) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, sodass der Autorenlink auf Ihre neue Autorendetailseite verweist (anstatt eine leere URL zu sein).
>   Der empfohlene Weg, dies zu tun, besteht darin, die `get_absolute_url()` Methode im Autorenmodell aufzurufen, wie unten gezeigt.
>
>   ```django
>   <p>
>     <strong>Author:</strong>
>     <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   </p>
>   ```

Wenn Sie fertig sind, sollten Ihre Seiten ungefähr wie die untenstehenden Screenshots aussehen.

![Autor Liste-Seite](author_list_page_no_pagination.png)

![Autor Detail-Seite](author_detail_page_no_pagination.png)

## Zusammenfassung

Herzlichen Glückwunsch, unsere grundlegende Bibliotheksfunktionalität ist jetzt abgeschlossen!

In diesem Artikel haben wir gelernt, wie man generische klassenbasierte Listen- und Detailansichten verwendet und sie dazu eingesetzt, Seiten für unsere Bücher und Autoren zu erstellen. Auf dem Weg haben wir über Mustererkennung mit regulären Ausdrücken gelernt und wie man Daten aus URLs an Ihre Ansichten übergeben kann. Wir haben auch ein paar weitere Tricks zur Verwendung von Vorlagen gelernt. Zuletzt haben wir gezeigt, wie man Listenansichten paginiert, damit unsere Listen selbst dann handhabbar sind, wenn wir viele Datensätze haben.

In den nächsten Artikeln werden wir diese Bibliothek erweitern, um Benutzerkonten zu unterstützen, und dabei Benutzer-Authentifizierung, Berechtigungen, Sitzungen und Formulare demonstrieren.

## Siehe auch

- [Eingebaute klassenbasierte generische Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Ansichts-Ansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Eingebaute Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verwandte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
