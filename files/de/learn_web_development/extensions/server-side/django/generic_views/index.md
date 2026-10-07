---
title: "Django-Tutorial Teil 6: Generische Listen- und Detailansichten"
short-title: "6: Generische Listen- und Detailansichten"
slug: Learn_web_development/Extensions/Server-side/Django/Generic_views
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website um Listen- und Detailseiten für Bücher und Autoren. Sie lernen generische klassenbasierte Ansichten kennen und erfahren, wie diese den Codeumfang für häufige Anwendungsfälle reduzieren können. Außerdem betrachten wir die Verarbeitung von URLs genauer und zeigen, wie sich einfache Mustervergleiche durchführen lassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Themen des Tutorials, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page">Django-Tutorial Teil 5: Erstellen unserer Startseite</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wo und wie generische klassenbasierte Ansichten eingesetzt werden und wie Muster aus URLs extrahiert und die Informationen an Ansichten übergeben werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In diesem Tutorial vervollständigen wir die erste Version der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website, indem wir Listen- und Detailseiten für Bücher und Autoren hinzufügen. Genauer gesagt zeigen wir Ihnen, wie Sie die Buchseiten implementieren, und lassen Sie die Autorenseiten selbst erstellen!

Der Ablauf ähnelt dem Erstellen der Indexseite, das wir im vorherigen Tutorial gezeigt haben. Wir müssen weiterhin URL-Zuordnungen, Ansichten und Templates erstellen. Der wichtigste Unterschied besteht darin, dass wir für die Detailseiten zusätzlich Informationen aus Mustern in der URL extrahieren und an die Ansicht übergeben müssen. Für diese Seiten stellen wir einen völlig anderen Ansichtstyp vor: generische klassenbasierte Listen- und Detailansichten. Diese können den erforderlichen Ansichtscode erheblich reduzieren und sind dadurch einfacher zu schreiben und zu pflegen.

Im letzten Teil des Tutorials zeigen wir, wie Sie Daten bei der Verwendung generischer klassenbasierter Listenansichten paginieren.

## Buchlistenseite

Die Buchlistenseite zeigt eine Liste aller verfügbaren Bucheinträge und ist über die URL `catalog/books/` erreichbar. Für jeden Eintrag zeigt die Seite den Titel und den Autor an; der Titel ist ein Hyperlink zur zugehörigen Buchdetailseite. Die Seite erhält dieselbe Struktur und Navigation wie alle anderen Seiten der Website. Daher können wir das Basis-Template (**base_generic.html**) erweitern, das wir im vorherigen Tutorial erstellt haben.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie die Zeile hinzu, die den Pfad für `'books/'` festlegt, wie unten gezeigt.
Wie bei der Indexseite definiert diese `path()`-Funktion ein Muster, mit dem die URL abgeglichen wird (**'books/'**), eine Ansichtsfunktion, die bei einer Übereinstimmung aufgerufen wird (`views.BookListView.as_view()`), und einen Namen für diese Zuordnung.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Wie im vorherigen Tutorial erläutert, muss die URL bereits mit `/catalog` übereingestimmt haben. Die Ansicht wird also tatsächlich für die URL `/catalog/books/` aufgerufen.

Die Ansichtsfunktion hat ein anderes Format als zuvor – denn diese Ansicht wird als Klasse implementiert. Statt eine eigene Ansichtsfunktion von Grund auf zu schreiben, erben wir von einer vorhandenen generischen Ansicht, die bereits den Großteil der gewünschten Funktionalität bereitstellt.

Bei klassenbasierten Django-Ansichten erhalten wir die passende Ansichtsfunktion durch Aufrufen der Klassenmethode `as_view()`. Diese erstellt eine Instanz der Klasse und stellt sicher, dass bei eingehenden HTTP-Anfragen die richtigen Handler-Methoden aufgerufen werden.

### Ansicht (klassenbasiert)

Wir könnten die Buchlistenansicht problemlos als reguläre Funktion schreiben (wie unsere bisherige Indexansicht). Sie würde alle Bücher aus der Datenbank abfragen und dann `render()` aufrufen, um die Liste an ein bestimmtes Template zu übergeben. Stattdessen verwenden wir eine generische klassenbasierte Listenansicht (`ListView`) – eine Klasse, die von einer vorhandenen Ansicht erbt. Da die generische Ansicht bereits den Großteil der benötigten Funktionalität implementiert und den Best Practices von Django folgt, können wir mit weniger Code und weniger Wiederholungen eine robustere Listenansicht erstellen, die letztlich weniger Pflege erfordert.

Öffnen Sie **catalog/views.py** und fügen Sie den folgenden Code am Ende der Datei ein:

```python
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

Das ist alles! Die generische Ansicht fragt alle Einträge für das angegebene Modell (`Book`) aus der Datenbank ab und rendert dann das Template unter **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** (das wir weiter unten erstellen). Im Template können Sie über die Template-Variable `object_list` ODER `book_list` auf die Buchliste zugreifen (allgemein also `<the model name>_list`).

> [!NOTE]
> Dieser umständliche Pfad zum Template ist kein Druckfehler: Generische Ansichten suchen innerhalb des Verzeichnisses `/application_name/templates/` der Anwendung (hier `/catalog/templates/`) nach Templates unter `/application_name/the_model_name_list.html` (hier `catalog/book_list.html`).

Sie können Attribute hinzufügen, um das oben beschriebene Standardverhalten zu ändern. Beispielsweise können Sie eine andere Template-Datei angeben, wenn mehrere Ansichten dasselbe Modell verwenden, oder einen anderen Namen für die Template-Variable wählen, falls `book_list` für Ihren Anwendungsfall nicht intuitiv ist. Besonders nützlich ist es, die zurückgegebene Ergebnismenge zu ändern oder zu filtern: Statt alle Bücher aufzulisten, könnten Sie beispielsweise die fünf meistgelesenen Bücher anderer Benutzer anzeigen.

```python
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

#### Methoden in klassenbasierten Ansichten überschreiben

Obwohl das hier nicht nötig ist, können Sie auch einige Klassenmethoden überschreiben.

Beispielsweise können wir die Methode `get_queryset()` überschreiben, um die Liste der zurückgegebenen Einträge zu ändern. Das ist flexibler, als lediglich das Attribut `queryset` zu setzen, wie wir es im vorherigen Codeausschnitt getan haben (auch wenn dies hier keinen wirklichen Vorteil bietet):

```python
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
```

Wir könnten auch `get_context_data()` überschreiben, um zusätzliche Kontextvariablen an das Template zu übergeben (die Buchliste wird beispielsweise standardmäßig übergeben). Der folgende Ausschnitt zeigt, wie Sie dem Kontext eine Variable namens `some_data` hinzufügen. Sie steht anschließend als Template-Variable zur Verfügung.

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

Dabei ist es wichtig, das oben gezeigte Vorgehen einzuhalten:

- Rufen Sie zuerst den vorhandenen Kontext von der Oberklasse ab.
- Fügen Sie dann Ihre neuen Kontextinformationen hinzu.
- Geben Sie anschließend den neuen (aktualisierten) Kontext zurück.

> [!NOTE]
> Unter [Integrierte generische klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation) finden Sie viele weitere Beispiele für die Möglichkeiten.

### Template für die Listenansicht erstellen

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html** und fügen Sie den folgenden Text ein. Wie oben erläutert, ist dies die Template-Datei, die die generische klassenbasierte Listenansicht standardmäßig erwartet (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

Templates für generische Ansichten funktionieren wie alle anderen Templates (auch wenn sich der an das Template übergebene Kontext beziehungsweise die Informationen natürlich unterscheiden können).
Wie beim _Index_-Template erweitern wir in der ersten Zeile unser Basis-Template und ersetzen anschließend den Block namens `content`.

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

Die Ansicht übergibt den Kontext (die Buchliste) standardmäßig unter den Aliasnamen `object_list` und `book_list`; beide funktionieren.

#### Bedingte Ausführung

Wir verwenden die Template-Tags [`if`](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), `else` und `endif`, um zu prüfen, ob `book_list` definiert und nicht leer ist.
Wenn `book_list` leer ist, zeigt der `else`-Zweig einen Text an, der erklärt, dass keine Bücher aufgelistet werden können.
Wenn `book_list` nicht leer ist, durchlaufen wir die Buchliste.

```django
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Die obige Bedingung prüft nur einen Fall. Mit dem Template-Tag `elif` können Sie jedoch weitere Bedingungen prüfen (z. B. `{% elif var2 %}`).
Weitere Informationen zu bedingten Operatoren finden Sie unter [if](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#if), [ifequal/ifnotequal](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifequal-and-ifnotequal) und [ifchanged](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#ifchanged) in [Integrierte Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation).

#### For-Schleifen

Das Template verwendet die Template-Tags [for](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#for) und `endfor`, um die Buchliste wie unten gezeigt zu durchlaufen.
Bei jedem Durchlauf wird die Template-Variable `book` mit den Informationen des aktuellen Listeneintrags belegt.

```django
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

Mit dem Template-Tag `{% empty %}` könnten Sie außerdem festlegen, was bei einer leeren Buchliste geschieht (unser Template verwendet stattdessen allerdings eine Bedingung):

```django
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Django erstellt innerhalb der Schleife außerdem weitere Variablen, mit denen Sie die Durchläufe nachverfolgen können; wir verwenden sie hier jedoch nicht.
Beispielsweise können Sie die Variable `forloop.last` prüfen, um beim letzten Schleifendurchlauf eine bedingte Verarbeitung auszuführen.

#### Auf Variablen zugreifen

Der Code innerhalb der Schleife erstellt für jedes Buch einen Listeneintrag, der sowohl den Titel (als Link zur noch zu erstellenden Detailansicht) als auch den Autor anzeigt.

```django
<a href="\{{ book.get_absolute_url }}">\{{ book.title }}</a> (\{{book.author}})
```

Auf die _Felder_ des zugehörigen Bucheintrags greifen wir mit der „Punktnotation“ zu (z. B. `book.title` und `book.author`). Der Text nach `book` ist dabei der Feldname, wie er im Modell definiert ist.

Wir können aus unserem Template heraus auch _Funktionen_ des Modells aufrufen. Hier rufen wir `Book.get_absolute_url()` auf, um eine URL zu erhalten, mit der sich der zugehörige Detaileintrag anzeigen lässt. Das funktioniert, sofern die Funktion keine Argumente benötigt (Argumente lassen sich nicht übergeben!).

> [!NOTE]
> Beim Aufrufen von Funktionen in Templates sollten Sie auf „Nebeneffekte“ achten. Hier rufen wir lediglich eine URL für die Anzeige ab, aber eine Funktion kann fast alles tun – wir möchten beispielsweise nicht allein durch das Rendern unseres Templates die Datenbank löschen!

#### Basis-Template aktualisieren

Öffnen Sie das Basis-Template (**/django-locallibrary-tutorial/catalog/templates/_base_generic.html_**) und fügen Sie **{% url 'books' %}** wie unten gezeigt als URL für den Link **Alle Bücher** ein. Dadurch funktioniert der Link auf allen Seiten (nachdem wir nun die URL-Zuordnung für „books“ erstellt haben).

```django
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

### Wie sieht das Ergebnis aus?

Sie können die Buchliste noch nicht aufrufen, weil eine Abhängigkeit fehlt: die URL-Zuordnung für die Buchdetailseiten. Sie wird benötigt, um Hyperlinks zu einzelnen Büchern zu erstellen. Nach dem nächsten Abschnitt zeigen wir sowohl die Listen- als auch die Detailansicht.

## Buchdetailseite

Die Buchdetailseite zeigt Informationen zu einem bestimmten Buch an und ist über die URL `catalog/book/<id>` erreichbar (wobei `<id>` der Primärschlüssel des Buchs ist). Zusätzlich zu den Feldern des Modells `Book` (Autor, Zusammenfassung, ISBN, Sprache und Genre) listen wir auch die Details der verfügbaren Exemplare (`BookInstances`) auf, einschließlich Status, voraussichtlichem Rückgabedatum, Impressum und ID. So können Leser nicht nur mehr über das Buch erfahren, sondern auch prüfen, ob beziehungsweise wann es verfügbar ist.

### URL-Zuordnung

Öffnen Sie **/catalog/urls.py** und fügen Sie den unten gezeigten Pfad mit dem Namen '**book-detail**' hinzu.
Diese `path()`-Funktion definiert ein Muster, eine zugehörige generische klassenbasierte Detailansicht und einen Namen.

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Für den Pfad _book-detail_ verwendet das URL-Muster eine besondere Syntax, um die ID des Buchs zu erfassen, das wir anzeigen möchten.
Die Syntax ist sehr einfach: Spitze Klammern kennzeichnen den zu erfassenden Teil der URL und umschließen den Namen der Variablen, über die die Ansicht auf die erfassten Daten zugreifen kann.
Beispielsweise erfasst **\<something>** den markierten Teil und übergibt dessen Wert als Variable „something“ an die Ansicht. Optional können Sie dem Variablennamen eine [Konverterangabe](https://docs.djangoproject.com/en/5.0/topics/http/urls/#path-converters) voranstellen, die den Datentyp festlegt (int, str, slug, uuid, path).

Hier verwenden wir `'<int:pk>'`, um die Buch-ID zu erfassen, die das vom Konverter erwartete Format haben muss, und sie der Ansicht als Parameter namens `pk` zu übergeben (kurz für „primary key“, also Primärschlüssel). Mit dieser ID wird das Buch in der Datenbank eindeutig gespeichert, wie im Modell `Book` definiert.

> [!NOTE]
> Wie bereits erläutert, lautet unsere abgeglichene URL tatsächlich `catalog/book/<digits>` (da wir uns in der Anwendung **catalog** befinden, wird `/catalog/` vorausgesetzt).

> [!WARNING]
> Die generische klassenbasierte Detailansicht _erwartet_ einen Parameter namens **pk**. Wenn Sie eine eigene funktionsbasierte Ansicht schreiben, können Sie den Parameternamen frei wählen oder die Information sogar als unbenanntes Argument übergeben.

#### Einführung in erweiterten Pfadabgleich und reguläre Ausdrücke

> [!NOTE]
> Sie benötigen diesen Abschnitt nicht, um das Tutorial abzuschließen! Wir haben ihn aufgenommen, weil diese Möglichkeit bei Ihrer zukünftigen Arbeit mit Django wahrscheinlich nützlich sein wird.

Der Mustervergleich mit `path()` ist einfach und für die sehr häufigen Fälle geeignet, in denen Sie lediglich _eine beliebige_ Zeichenfolge oder Ganzzahl erfassen möchten. Wenn Sie genauer filtern müssen (beispielsweise nur Zeichenfolgen mit einer bestimmten Anzahl von Zeichen zulassen möchten), können Sie die Methode [re_path()](https://docs.djangoproject.com/en/5.0/ref/urls/#django.urls.re_path) verwenden.

Diese Methode wird genauso wie `path()` verwendet, erlaubt jedoch die Angabe eines Musters mithilfe eines [regulären Ausdrucks](https://docs.python.org/3/library/re.html). Der vorherige Pfad hätte beispielsweise wie folgt geschrieben werden können:

```python
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

_Reguläre Ausdrücke_ sind ein außerordentlich leistungsfähiges Werkzeug für Mustervergleiche. Offen gesagt sind sie nicht besonders intuitiv und können auf Anfänger einschüchternd wirken. Deshalb folgt eine sehr kurze Einführung!

Zunächst sollten Sie wissen, dass reguläre Ausdrücke normalerweise mit der Syntax für Raw-String-Literale deklariert werden sollten (also wie hier gezeigt eingeschlossen sind: **r'\<your regular expression text goes here>'**).

Die wichtigsten Syntaxbestandteile, die Sie zum Definieren von Mustern kennen sollten, sind:

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
      <td>Entspricht dem Anfang des Textes</td>
    </tr>
    <tr>
      <td>$</td>
      <td>Entspricht dem Ende des Textes</td>
    </tr>
    <tr>
      <td>\d</td>
      <td>Entspricht einer Ziffer (0, 1, 2, … 9)</td>
    </tr>
    <tr>
      <td>\w</td>
      <td>
        Entspricht einem Wortzeichen, z. B. einem Groß- oder Kleinbuchstaben,
        einer Ziffer oder dem Unterstrich (_)
      </td>
    </tr>
    <tr>
      <td>+</td>
      <td>
        Entspricht einem oder mehreren Vorkommen des vorangehenden Zeichens.
        Für eine oder mehrere Ziffern verwenden Sie beispielsweise
        <code>\d+</code>. Für ein oder mehrere „a“ verwenden Sie <code>a+</code>.
      </td>
    </tr>
    <tr>
      <td>*</td>
      <td>
        Entspricht null oder mehreren Vorkommen des vorangehenden Zeichens.
        Um beispielsweise keine Zeichen oder ein Wort zu erfassen, können Sie
        <code>\w*</code> verwenden.
      </td>
    </tr>
    <tr>
      <td>( )</td>
      <td>
        Erfasst den Teil des Musters innerhalb der Klammern. Alle erfassten Werte
        werden als unbenannte Parameter an die Ansicht übergeben (wenn mehrere
        Muster erfasst werden, werden die zugehörigen Parameter in der Reihenfolge
        übergeben, in der die Erfassungen deklariert wurden).
      </td>
    </tr>
    <tr>
      <td>(?P&#x3C;<em>name</em>>...)</td>
      <td>
        Erfasst das durch ... angegebene Muster als benannte Variable (hier
        „name“). Die erfassten Werte werden unter dem angegebenen Namen an
        die Ansicht übergeben. Ihre Ansicht muss daher einen Parameter mit
        demselben Namen deklarieren!
      </td>
    </tr>
    <tr>
      <td>[ ]</td>
      <td>
        Entspricht einem Zeichen aus der angegebenen Menge. Beispielsweise
        entspricht [abc] einem 'a', 'b' oder 'c'. [-\w] entspricht einem '-'
        oder einem beliebigen Wortzeichen.
      </td>
    </tr>
  </tbody>
</table>

Die meisten anderen Zeichen können wörtlich interpretiert werden!

Betrachten wir einige konkrete Beispielmuster:

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
          Dies ist der reguläre Ausdruck, den wir in unserer URL-Zuordnung
          verwenden. Er entspricht einer Zeichenfolge, die am Zeilenanfang
          <code>book/</code> enthält (<strong>^book/</strong>), gefolgt von einer
          oder mehreren Ziffern (<code>\d+</code>), und danach endet (ohne
          Nicht-Ziffern vor der Markierung des Zeilenendes).
        </p>
        <p>
          Außerdem erfasst er alle Ziffern <strong>(?P&#x3C;pk>\d+)</strong>
          und übergibt sie der Ansicht als Parameter namens 'pk'.
          <strong>Erfasste Werte werden immer als Zeichenfolge übergeben!</strong>
        </p>
        <p>
          Beispielsweise würde das Muster auf <code>book/1234</code> passen
          und die Variable <code>pk='1234'</code> an die Ansicht übergeben.
        </p>
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(\d+)$'</strong></td>
      <td>
        Dieses Muster entspricht denselben URLs wie im vorherigen Fall.
        Die erfasste Information würde als unbenanntes Argument an die
        Ansicht übergeben.
      </td>
    </tr>
    <tr>
      <td><strong>r'^book/(?P&#x3C;stub>[-\w]+)$'</strong></td>
      <td>
        <p>
          Dieses Muster entspricht einer Zeichenfolge, die am Zeilenanfang
          <code>book/</code> enthält (<strong>^book/</strong>), gefolgt von
          einem oder mehreren Zeichen, die <em>entweder</em> ein '-' oder ein
          Wortzeichen sind (<strong>[-\w]+</strong>), und danach endet.
          Außerdem erfasst es diese Zeichen und übergibt sie der Ansicht
          als Parameter namens 'stub'.
        </p>
        <p>
          Dies ist ein recht typisches Muster für einen „Stub“. Stubs sind
          URL-freundliche, aus Wörtern gebildete Primärschlüssel für Daten.
          Sie können einen Stub verwenden, wenn die URL eines Buchs
          aussagekräftiger sein soll, beispielsweise
          <code>/catalog/book/the-secret-garden</code> statt
          <code>/catalog/book/33</code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

Sie können innerhalb eines einzigen Mustervergleichs mehrere Teile erfassen und dadurch viele verschiedene Informationen in einer URL kodieren.

> [!NOTE]
> Überlegen Sie als Übung, wie Sie eine URL kodieren könnten, um alle Bücher aufzulisten, die in einem bestimmten Jahr, Monat und an einem bestimmten Tag erschienen sind, und mit welchem regulären Ausdruck Sie diese URL abgleichen könnten.

#### Zusätzliche Optionen in URL-Zuordnungen übergeben

Eine Funktion, die wir hier noch nicht verwendet haben, die Sie aber nützlich finden könnten, ist die Übergabe eines [Dictionary mit zusätzlichen Optionen](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options) an die Ansicht (über das dritte unbenannte Argument der Funktion `path()`). Dieser Ansatz kann hilfreich sein, wenn Sie dieselbe Ansicht für mehrere Ressourcen verwenden und jeweils Daten übergeben möchten, um ihr Verhalten zu konfigurieren.

Beim unten gezeigten Pfad würde Django beispielsweise für eine Anfrage an `/my-url/halibut/` die Funktion `views.my_view(request, fish='halibut', my_template_name='some_path')` aufrufen.

```python
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

> [!NOTE]
> Sowohl benannte erfasste Muster als auch Dictionary-Optionen werden als _benannte_ Argumente an die Ansicht übergeben. Wenn Sie für ein erfasstes Muster und einen Dictionary-Schlüssel **denselben Namen** verwenden, wird die Dictionary-Option verwendet.

### Ansicht (klassenbasiert)

Öffnen Sie **catalog/views.py** und fügen Sie den folgenden Code am Ende der Datei ein:

```python
class BookDetailView(generic.DetailView):
    model = Book
```

Das ist alles! Sie müssen jetzt nur noch das Template **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** erstellen. Die Ansicht übergibt ihm dann die Datenbankinformationen für den `Book`-Eintrag, dessen ID aus der URL-Zuordnung extrahiert wurde. Im Template können Sie über die Template-Variable `object` ODER `book` auf die Buchdetails zugreifen (allgemein also `the_model_name`).

Bei Bedarf können Sie das verwendete Template und den Namen des Kontextobjekts ändern, über das im Template auf das Buch zugegriffen wird. Sie können auch Methoden überschreiben, um dem Kontext beispielsweise weitere Informationen hinzuzufügen.

#### Was passiert, wenn der Eintrag nicht existiert?

Wenn ein angeforderter Eintrag nicht existiert, löst die generische klassenbasierte Detailansicht automatisch eine `Http404`-Ausnahme aus. In der Produktionsumgebung wird dadurch automatisch eine passende Seite für „Ressource nicht gefunden“ angezeigt, die Sie bei Bedarf anpassen können.

Damit Sie eine Vorstellung davon bekommen, wie das funktioniert, zeigt der folgende Codeausschnitt, wie Sie die klassenbasierte Ansicht als Funktion implementieren würden, wenn Sie **keine** generische klassenbasierte Detailansicht verwendeten.

```python
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Die Ansicht versucht zunächst, den entsprechenden Bucheintrag aus dem Modell abzurufen. Schlägt dies fehl, sollte sie eine `Http404`-Ausnahme auslösen, um anzuzeigen, dass das Buch „nicht gefunden“ wurde. Abschließend wird wie üblich `render()` mit dem Template-Namen und den Buchdaten im Parameter `context` (als Dictionary) aufgerufen.

Wenn Sie keine generische Ansicht verwenden, können Sie alternativ die Funktion `get_object_or_404()` aufrufen.
Sie ist eine Kurzform, um eine `Http404`-Ausnahme auszulösen, falls der Eintrag nicht gefunden wird.

```python
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
```

### Template für die Detailansicht erstellen

Erstellen Sie die HTML-Datei **/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html** mit dem folgenden Inhalt. Wie oben erläutert, ist dies der Dateiname, den die generische klassenbasierte _Detailansicht_ standardmäßig erwartet (für ein Modell namens `Book` in einer Anwendung namens `catalog`).

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
> Der Autorenlink im obigen Template hat eine leere URL, weil wir noch keine Autorendetailseite erstellt haben, auf die er verweisen könnte.
> Sobald die Detailseite existiert, können wir ihre URL auf zwei Arten abrufen:
>
> - Verwenden Sie das Template-Tag `url`, um die in der URL-Zuordnung definierte URL 'author-detail' aufzulösen, und übergeben Sie dabei die Autoreninstanz des Buchs:
>
>   ```django
>   <a href="{% url 'author-detail' book.author.pk %}">\{{ book.author }}</a>
>   ```
>
> - Rufen Sie die Methode `get_absolute_url()` des Autorenmodells auf (sie führt dieselbe Auflösung aus):
>
>   ```django
>   <a href="\{{ book.author.get_absolute_url }}">\{{ book.author }}</a>
>   ```
>
> Beide Methoden bewirken praktisch dasselbe. `get_absolute_url()` ist jedoch vorzuziehen, weil Sie damit konsistenteren und leichter wartbaren Code schreiben können (Änderungen sind nur an einer Stelle nötig: im Autorenmodell).

Auch wenn dieses Template etwas länger ist, wurde fast alles darin bereits beschrieben:

- Wir erweitern unser Basis-Template und überschreiben den Block „content“.
- Wir verwenden bedingte Verarbeitung, um zu entscheiden, ob bestimmte Inhalte angezeigt werden.
- Wir verwenden `for`-Schleifen, um Listen von Objekten zu durchlaufen.
- Wir greifen mit der Punktnotation auf Kontextfelder zu (weil wir die generische Detailansicht verwenden, heißt der Kontext `book`; wir könnten auch `object` verwenden).

Die erste interessante Funktion, die wir noch nicht gesehen haben, ist `book.bookinstance_set.all()`. Django erstellt diese Methode automatisch, um die Menge der `BookInstance`-Einträge zurückzugeben, die einem bestimmten `Book` zugeordnet sind.

```django
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

Diese Methode ist nötig, weil Sie ein `ForeignKey`-Feld (Eins-zu-viele) nur auf der „Viele“-Seite der Beziehung deklarieren (bei `BookInstance`). Da Sie die Beziehung im anderen Modell (auf der „Eins“-Seite) nicht deklarieren, besitzt dieses Modell (`Book`) kein Feld, über das es die zugehörigen Einträge abrufen könnte. Um dieses Problem zu lösen, erstellt Django eine passend benannte Funktion für den „Reverse Lookup“, die Sie verwenden können. Der Funktionsname entsteht, indem der Name des Modells, in dem der `ForeignKey` deklariert wurde, in Kleinbuchstaben geschrieben und `_set` angehängt wird (die in `Book` erstellte Funktion heißt also `bookinstance_set()`).

> [!NOTE]
> Hier verwenden wir `all()`, um alle Einträge abzurufen (die Standardeinstellung). Im Code können Sie mit der Methode `filter()` eine Teilmenge der Einträge abrufen. Direkt in Templates geht das jedoch nicht, weil Sie Funktionen dort keine Argumente übergeben können.
>
> Beachten Sie außerdem: Wenn Sie keine Sortierreihenfolge festlegen (in Ihrer klassenbasierten Ansicht oder Ihrem Modell), gibt der Entwicklungsserver auch Fehler wie diesen aus:
>
> ```plain
> [29/May/2017 18:37:53] "GET /catalog/books/?page=1 HTTP/1.1" 200 1637
> /foo/local_library/venv/lib/python3.5/site-packages/django/views/generic/list.py:99: UnorderedObjectListWarning: Pagination may yield inconsistent results with an unordered object_list: <QuerySet [<Author: Ortiz, David>, <Author: H. McRaven, William>, <Author: Leigh, Melinda>]>
>   allow_empty_first_page=allow_empty_first_page, **kwargs)
> ```
>
> Das passiert, weil das [Paginator-Objekt](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects) erwartet, dass für die zugrunde liegende Datenbank eine ORDER BY-Sortierung ausgeführt wird. Ohne sie kann es nicht sicherstellen, dass die zurückgegebenen Einträge tatsächlich in der richtigen Reihenfolge stehen!
>
> Dieses Tutorial hat **Paginierung** (noch!) nicht behandelt. Da Sie `sort_by()` nicht mit einem Parameter aufrufen können (genauso wenig wie das oben beschriebene `filter()`), haben Sie drei Möglichkeiten:
>
> 1. Fügen Sie in einer `class Meta`-Deklaration Ihres Modells ein `ordering` hinzu.
> 2. Fügen Sie Ihrer eigenen klassenbasierten Ansicht ein `queryset`-Attribut hinzu, in dem Sie ein `order_by()` angeben.
> 3. Fügen Sie Ihrer eigenen klassenbasierten Ansicht eine `get_queryset`-Methode hinzu und geben Sie darin ebenfalls `order_by()` an.
>
> Wenn Sie sich für `class Meta` im Modell `Author` entscheiden (vermutlich weniger flexibel als die Anpassung der klassenbasierten Ansicht, aber recht einfach), könnte das Ergebnis so aussehen:
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
> Natürlich muss das Feld nicht `last_name` sein; es kann jedes andere Feld sein.
>
> Nicht zuletzt sollten Sie nach einem Attribut beziehungsweise einer Spalte sortieren, für das beziehungsweise die in Ihrer Datenbank ein Index existiert (unabhängig davon, ob dieser eindeutig ist), um Leistungsprobleme zu vermeiden. Hier ist das natürlich nicht nötig (bei so wenigen Büchern und Benutzern greifen wir wahrscheinlich schon etwas vor), aber für künftige Projekte sollten Sie es im Hinterkopf behalten.

Der zweite interessante (und weniger offensichtliche) Aspekt des Templates betrifft die Anzeige des Statustextes für jedes Buchexemplar („available“, „maintenance“ usw.).
Aufmerksamen Lesern wird auffallen, dass die Methode `BookInstance.get_status_display()`, mit der wir den Statustext abrufen, an keiner anderen Stelle im Code vorkommt.

```django
 <p class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
 \{{ copy.get_status_display }} </p>
```

Diese Funktion wird automatisch erstellt, weil `BookInstance.status` ein [Feld mit Auswahlmöglichkeiten](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices) ist.
Django erstellt für jedes solche Feld `foo` in einem Modell automatisch eine Methode `get_foo_display()`, mit der sich der aktuelle Wert des Felds als Anzeigetext abrufen lässt.

## Wie sieht das Ergebnis aus?

An diesem Punkt sollten wir alles erstellt haben, was zur Anzeige der Buchlisten- und Buchdetailseiten erforderlich ist. Starten Sie den Server (`python3 manage.py runserver`) und öffnen Sie `http://127.0.0.1:8000/` in Ihrem Browser.

> [!WARNING]
> Klicken Sie noch nicht auf Links zu Autoren oder Autorendetails – diese erstellen Sie erst in der Übung!

Klicken Sie auf den Link **Alle Bücher**, um die Buchliste anzuzeigen.

![Buchlistenseite](book_list_page_no_pagination.png)

Klicken Sie dann auf den Link zu einem Ihrer Bücher. Wenn alles richtig eingerichtet ist, sollten Sie ungefähr Folgendes sehen:

![Buchdetailseite](book_detail_page_no_pagination.png)

## Paginierung

Wenn Sie nur wenige Einträge haben, sieht unsere Buchlistenseite gut aus. Sobald es jedoch Dutzende oder Hunderte Einträge werden, lädt die Seite zunehmend langsamer (und enthält viel zu viele Inhalte, um sie sinnvoll durchzusehen). Die Lösung besteht darin, Ihre Listenansichten zu paginieren und so die Anzahl der auf jeder Seite angezeigten Einträge zu reduzieren.

Django bietet hervorragende integrierte Unterstützung für die Paginierung. Noch besser: Sie ist bereits in generische klassenbasierte Listenansichten eingebaut, sodass Sie nur wenig tun müssen, um sie zu aktivieren!

### Ansichten

Öffnen Sie **catalog/views.py** und fügen Sie die unten gezeigte Zeile mit `paginate_by` hinzu.

```python
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
```

Mit dieser Ergänzung beginnt die Ansicht, die an das Template übergebenen Daten zu paginieren, sobald mehr als zehn Einträge vorhanden sind.
Die einzelnen Seiten werden über GET-Parameter aufgerufen – für Seite 2 verwenden Sie beispielsweise die URL `/catalog/books/?page=2`.

### Templates

Da die Daten nun paginiert sind, müssen wir dem Template eine Möglichkeit hinzufügen, durch die Ergebnisseiten zu navigieren. Weil wir möglicherweise alle Listenansichten paginieren möchten, fügen wir diese Funktion dem Basis-Template hinzu.

Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/_base_generic.html_** und suchen Sie den „content“-Block (wie unten gezeigt).

```django
{% block content %}{% endblock %}
```

Fügen Sie den folgenden Paginierungsblock direkt nach `{% endblock %}` ein. Der Code prüft zunächst, ob die Paginierung auf der aktuellen Seite aktiviert ist. Falls ja, fügt er passende Links für _nächste_ und _vorherige_ Seiten hinzu (sowie die aktuelle Seitennummer).

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

`page_obj` ist ein [Paginator](https://docs.djangoproject.com/en/5.0/topics/pagination/#paginator-objects)-Objekt, das vorhanden ist, wenn die aktuelle Seite paginiert wird. Darüber können Sie Informationen zur aktuellen Seite, zu vorherigen Seiten, zur Anzahl der Seiten und mehr abrufen.

Mit `\{{ request.path }}` rufen wir die URL der aktuellen Seite ab, um die Paginierungslinks zu erstellen. Das ist nützlich, weil es unabhängig vom paginierten Objekt funktioniert.

Das ist alles!

### Wie sieht das Ergebnis aus?

Der folgende Screenshot zeigt die Paginierung. Wenn Sie noch nicht mehr als zehn Titel in Ihre Datenbank eingetragen haben, können Sie sie einfacher testen, indem Sie den Wert in der `paginate_by`-Zeile Ihrer Datei **catalog/views.py** verringern. Für das unten gezeigte Ergebnis haben wir ihn auf `paginate_by = 2` geändert.

Die Paginierungslinks erscheinen am unteren Seitenrand. Je nachdem, auf welcher Seite Sie sich befinden, werden Links zur nächsten beziehungsweise vorherigen Seite angezeigt.

![Paginierte Buchlistenseite](book_list_paginated.png)

## Übung

Ihre Aufgabe in diesem Artikel besteht darin, die Listen- und Detailansichten für Autoren zu erstellen, die zum Abschluss des Projekts erforderlich sind. Sie sollen unter den folgenden URLs erreichbar sein:

- `catalog/authors/` — Die Liste aller Autoren.
- `catalog/author/<id>` — Die Detailansicht für den Autor mit dem Primärschlüssel `<id>`.

Der Code für die URL-Zuordnungen und Ansichten sollte nahezu identisch mit den oben erstellten Listen- und Detailansichten für `Book` sein. Die Templates unterscheiden sich, verhalten sich aber ähnlich.

> [!NOTE]
>
> - Nachdem Sie die URL-Zuordnung für die Autorenlistenseite erstellt haben, müssen Sie auch den Link **Alle Autoren** im Basis-Template aktualisieren.
>   Gehen Sie dabei [genauso vor](#basis-template_aktualisieren) wie beim Aktualisieren des Links **Alle Bücher**.
> - Nachdem Sie die URL-Zuordnung für die Autorendetailseite erstellt haben, sollten Sie außerdem das [Template der Buchdetailansicht](#template_für_die_detailansicht_erstellen) (**/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html**) aktualisieren, damit der Autorenlink auf Ihre neue Autorendetailseite verweist (statt eine leere URL zu haben).
>   Empfohlen wird, wie unten gezeigt `get_absolute_url()` für das Autorenmodell aufzurufen.
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

Herzlichen Glückwunsch – die grundlegende Funktionalität unserer Bibliothek ist nun fertig!

In diesem Artikel haben Sie gelernt, generische klassenbasierte Listen- und Detailansichten zu verwenden, und damit Seiten zur Anzeige unserer Bücher und Autoren erstellt. Dabei haben Sie Mustervergleiche mit regulären Ausdrücken kennengelernt und erfahren, wie Sie Daten aus URLs an Ansichten übergeben. Außerdem haben Sie einige weitere Möglichkeiten zur Verwendung von Templates kennengelernt. Schließlich haben wir gezeigt, wie Sie Listenansichten paginieren, damit die Listen auch bei vielen Einträgen übersichtlich bleiben.

In den nächsten Artikeln erweitern wir die Bibliothek um Benutzerkonten und behandeln dabei Benutzerauthentifizierung, Berechtigungen, Sessions und Formulare.

## Siehe auch

- [Integrierte generische klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-display/) (Django-Dokumentation)
- [Generische Anzeigeansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-display/) (Django-Dokumentation)
- [Einführung in klassenbasierte Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/intro/) (Django-Dokumentation)
- [Integrierte Template-Tags und Filter](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/) (Django-Dokumentation)
- [Paginierung](https://docs.djangoproject.com/en/5.0/topics/pagination/) (Django-Dokumentation)
- [Abfragen erstellen > Verknüpfte Objekte](https://docs.djangoproject.com/en/5.0/topics/db/queries/#related-objects) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django")}}
