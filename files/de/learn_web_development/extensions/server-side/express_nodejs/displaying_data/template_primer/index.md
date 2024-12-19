---
title: Template-Einführung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Eine Vorlage ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert, mit Platzhaltern, die angeben, wo Daten eingefügt werden, wenn die Vorlage gerendert wird (in _Express_ werden Vorlagen als _Ansichten_ bezeichnet).

## Express-Vorlagenoptionen

Express kann mit vielen verschiedenen [Template Rendering Engines](https://expressjs.com/en/guide/using-template-engines.html) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (ehemals _Jade_) für unsere Vorlagen. Dies ist die beliebteste Node-Vorlagensprache und beschreibt sich selbst als eine "saubere, auf Leerzeichen-sensitive Syntax zum Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Vorlagensprachen verwenden unterschiedliche Ansätze zur Definition von Layout und Markierung von Platzhaltern für Daten — einige verwenden HTML zur Definition des Layouts, während andere unterschiedliche Markup-Formate verwenden, die in HTML umgewandelt werden können. Pug gehört zur zweiten Kategorie; es verwendet eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element darstellt und die Einrückung in den folgenden Zeilen verwendet wird, um Verschachtelungen darzustellen. Das Ergebnis ist eine Seitenbeschreibung, die direkt in HTML übersetzt wird, aber prägnanter ist und möglicherweise einfacher zu lesen.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es empfindlich auf Einrückung und Leerzeichen reagiert (wenn Sie an der falschen Stelle ein zusätzliches Leerzeichen hinzufügen, können Sie einen nicht hilfreichen Fehlercode erhalten). Sobald Sie jedoch Ihre Vorlagen eingerichtet haben, sind sie sehr leicht lesbar und wartbar.

## Vorlagenkonfiguration

Die _LocalLibrary_ wurde so konfiguriert, dass sie [Pug](https://pugjs.org/api/getting-started.html) verwendet, als wir [das Grundgerüst der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Sie sollten das Pug-Modul als Abhängigkeit in der Datei **package.json** der Website sehen und die folgenden Konfigurationseinstellungen in der Datei **app.js**. Die Einstellungen zeigen, dass wir Pug als View-Engine verwenden und dass _Express_ im **/views**-Unterverzeichnis nach Vorlagen suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie ins Views-Verzeichnis schauen, sehen Sie die .pug-Dateien für die Standardansichten des Projekts.
Diese umfassen die Ansicht für die Startseite (**index.pug**) und die Basistemplate (**layout.pug**), die wir mit unserem eigenen Inhalt ersetzen müssen.

```plain
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Vorlagensyntax

Die folgende Beispielvorlagendatei zeigt viele der nützlichsten Funktionen von Pug.

Das erste, was auffällt, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und die Einrückung verwendet wird, um verschachtelte Elemente anzuzeigen. Zum Beispiel ist das `body`-Element innerhalb eines `html`-Elements und die Absatz-Elemente (`p`) sind innerhalb des `body`-Elements etc. Nicht-verschachtelte Elemente (z.B. einzelne Absätze) stehen in separaten Zeilen.

```pug
doctype html
html(lang="en")
  head
    title= title
    script(type='text/javascript').
  body
    h1= title

    p This is a line with #[em some emphasis] and #[strong strong text] markup.
    p This line has un-escaped data: !{'<em> is emphasized</em>'} and escaped data: #{'<em> is not emphasized</em>'}.
      | This line follows on.
    p= 'Evaluated and <em>escaped expression</em>:' + title

    <!-- You can add HTML comments directly -->
    // You can add single line JavaScript comments and they are generated to HTML comments
    //- Introducing a single line JavaScript comment with "//-" ensures the comment isn't rendered to HTML

    p A line with a link
      a(href='/catalog/authors') Some link text
      |  and some extra text.

    #container.col
      if title
        p A variable named "title" exists.
      else
        p A variable named "title" does not exist.
      p.
        Pug is a terse and simple template language with a
        strong focus on performance and powerful features.

    h2 Generate a list

    ul
      each val in [1, 2, 3, 4, 5]
        li= val
```

Element-Attribute werden in Klammern nach ihrem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in durch Kommata oder Leerzeichen getrennten Listen von Paaren aus Attributnamen und Attributwerten festgelegt, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute werden _escaped_ (z.B. werden Zeichen wie `>` in ihre HTML-Code-Äquivalente wie `&gt;` umgewandelt), um JavaScript-Injection oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag von einem Gleichheitszeichen gefolgt wird, wird der folgende Text als JavaScript-_Ausdruck_ behandelt. Zum Beispiel wird im ersten Zeilenbeispiel unten der Inhalt des `h1`-Tags die _Variable_ `title` sein (entweder in der Datei definiert oder aus _Express_ in die Vorlage übergeben). In der zweiten Zeile ist der Absatzinhalt eine Textzeichenkette, die mit der Variablen `title` verkettet ist. In beiden Fällen ist das Standardverhalten, die Zeile zu _escapieren_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Vorlagen ist eine Variable, die verwendet, aber nicht aus Ihrem Express-Code übergeben (oder lokal definiert) wird, "undefined".
> Wenn Sie diese Vorlage ohne Übergeben einer `title`-Variable verwenden, würden die Tags erstellt, enthielten aber eine leere Zeichenkette.
> Wenn Sie undefinierte Variablen in bedingten Anweisungen verwenden, werden sie als `false` bewertet.
> Andere Vorlagensprachen erfordern möglicherweise, dass die in der Vorlage verwendeten Variablen definiert werden müssen.

Wenn kein Gleichheitszeichen nach dem Tag steht, wird der Inhalt als reiner Text behandelt. Innerhalb des reinen Texts können Sie mit `#{}` und `!{}` respektivisch escapierte und nicht escapierte Daten einfügen, wie unten gezeigt. Außerdem können Sie rohes HTML innerhalb des reinen Texts hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie möchten fast immer Daten von Benutzern escapen (via **`#{}`** Syntax). Daten, denen vertraut werden kann (z.B. generierte Datensätze, etc.) können ohne Escaping der Werte angezeigt werden.

Sie können das Zeichen Rohr ('**|**') am Anfang einer Zeile verwenden, um auf "[reinen Text](https://pugjs.org/language/plain-text.html)" zu deuten. Beispielsweise wird der unten gezeigte zusätzliche Text in derselben Zeile wie das vorhergehende Anker angezeigt, aber nicht verlinkt.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug erlaubt es Ihnen, mit `if`, `else`, `else if` und `unless` bedingte Operationen auszuführen — zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen-/Iteration-Operationen mit `each-in` oder `while` Syntax durchführen. Im folgenden Codefragment haben wir ein Array durchlaufen, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=' zur Interpretation von "val" als Variable unten. Der Wert, über den Sie iterieren, kann auch als Variable in die Vorlage übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die im Output gerendert werden können oder nicht, je nachdem, wie Sie es wünschen), Mixins zur Erstellung wiederverwendbarer Codeblöcke, Fallanweisungen und viele andere Funktionen. Für detailliertere Informationen siehe [Die Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Vorlagen erweitern

Auf einer Website ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschließlich standardisiertem HTML-Markup für Kopfzeile, Fußzeile, Navigation usw. Anstatt Entwickler zu zwingen, diesen "Boilerplate" in jeder Seite zu duplizieren, ermöglicht Ihnen _Pug_, eine Basistemplate zu deklarieren und diese dann zu erweitern, wobei nur die Teile ersetzt werden, die sich für jede spezifische Seite unterscheiden.

Zum Beispiel sieht die Basistemplate **layout.pug**, die in unserem [Skeleton-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt wurde, wie folgt aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Das `block`-Tag wird verwendet, um Abschnitte von Inhalten zu kennzeichnen, die in einer abgeleiteten Vorlage ersetzt werden können (wenn der Block nicht neu definiert wird, wird seine Implementierung in der Basisklasse verwendet).

Das Standard-**index.pug** (erstellt für unser Skeleton-Projekt) zeigt, wie wir die Basistemplate überschreiben. Das `extends`-Tag identifiziert die zu verwendende Basistemplate, und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts anzugeben, den wir überschreiben werden.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Die LocalLibrary Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
