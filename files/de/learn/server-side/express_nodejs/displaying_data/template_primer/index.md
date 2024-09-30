---
title: Template Primer
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Ein Template ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert, mit Platzhaltern, die anzeigen, wo Daten beim Rendern des Templates eingefügt werden (in _Express_ werden Templates als _Views_ bezeichnet).

## Express-Template-Auswahl

Express kann mit vielen verschiedenen [Template-Rendering-Engines](https://expressjs.com/en/guide/using-template-engines.html) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (ehemals bekannt als _Jade_) für unsere Templates. Dies ist die beliebteste Node-Template-Sprache und beschreibt sich selbst als eine "saubere, whitespace-sensitive Syntax zum Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Template-Sprachen verwenden unterschiedliche Ansätze zur Definition von Layouts und zur Markierung von Platzhaltern für Daten – einige verwenden HTML, um das Layout zu definieren, während andere verschiedene Markup-Formate verwenden, die in HTML transpiliert werden können. Pug gehört zur zweiten Kategorie; es verwendet eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element darstellt, und Einrückungen in den folgenden Zeilen verwendet werden, um Verschachtelungen darzustellen. Das Ergebnis ist eine Seitendefinition, die direkt in HTML übersetzt wird, aber präziser und möglicherweise leichter lesbar ist.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es empfindlich auf Einrückungen und Leerzeichen reagiert (wenn Sie an der falschen Stelle ein zusätzliches Leerzeichen hinzufügen, erhalten Sie möglicherweise einen wenig hilfreichen Fehlercode). Sobald Sie jedoch Ihre Templates erstellt haben, sind sie sehr leicht lesbar und zu pflegen.

## Template-Konfiguration

Die _LocalLibrary_ wurde so konfiguriert, dass sie [Pug](https://pugjs.org/api/getting-started.html) verwendet, als wir [die Grundgerüst-Website erstellt haben](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website). Sie sollten das pug-Modul als Abhängigkeit in der **package.json**-Datei der Website sehen und die folgenden Konfigurationseinstellungen in der **app.js**-Datei. Die Einstellungen geben an, dass wir pug als View-Engine verwenden und dass _Express_ im **/views**-Unterverzeichnis nach Templates suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie in das views-Verzeichnis schauen, sehen Sie die .pug-Dateien für die Standard-Views des Projekts. Dazu gehören die View für die Startseite (**index.pug**) und das Basistemplate (**layout.pug**), das wir mit unseren eigenen Inhalten ersetzen müssen.

```plain
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Template-Syntax

Die folgende Beispiel-Template-Datei zeigt viele der nützlichsten Funktionen von Pug.

Das erste, was man bemerkt, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und Einrückungen verwendet werden, um verschachtelte Elemente anzuzeigen. So befindet sich beispielsweise das `body`-Element innerhalb eines `html`-Elements und Absatz-Elemente (`p`) befinden sich im `body`-Element, usw. Nicht-verschachtelte Elemente (z.B. einzelne Absätze) stehen auf separaten Zeilen.

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

Element-Attribute werden in Klammern nach ihrem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in Komma- oder Leerzeichen-getrennten Listen aus Paaren von Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute werden _escaped_ (z.B. Zeichen wie `>` werden in ihre HTML-Code-Äquivalente wie `&gt;` umgewandelt), um JavaScript-Injection oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn einem Tag ein Gleichheitszeichen folgt, wird der folgende Text als JavaScript-_Ausdruck_ behandelt. Zum Beispiel wird im ersten unten dargestellten Beispiel der Inhalt des `h1`-Tags die _Variable_ `title` sein (entweder in der Datei definiert oder von Express in das Template übergeben). Im zweiten Beispiel ist der Absatzinhalt eine Zeichenkette, die mit der `title`-Variablen verkettet wird. In beiden Fällen ist das Standardverhalten, die Zeile zu _escapen_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Templates ist eine Variable, die verwendet, aber nicht von Ihrem Express-Code übergeben (oder lokal definiert) wird, "undefined".
> Wenn Sie dieses Template ohne Übergabe einer `title`-Variablen verwenden würden, würden die Tags erstellt, aber einen leeren Zeichenfolgenwert enthalten.
> Wenn Sie undefinierte Variablen in Bedingungsanweisungen verwenden, werden diese als `false` ausgewertet.
> Andere Template-Sprachen können erfordern, dass Variablen, die im Template verwendet werden, definiert sein müssen.

Wenn nach dem Tag kein Gleichheitszeichen folgt, wird der Inhalt als einfacher Text behandelt. Innerhalb des einfachen Textes können Sie mittels der `#{}`- und `!{}`-Syntax entsprechend geescapte und ungeescapte Daten einfügen, wie unten gezeigt. Sie können auch rohes HTML in den einfachen Text einfügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie möchten fast immer Benutzerdaten escapen (über die **`#{}`**-Syntax). Daten, die vertrauenswürdig sind (z.B. generierte Zählungen von Datensätzen, etc.), können angezeigt werden, ohne die Werte zu escapen.

Sie können das Pipe-Zeichen ('**|**') am Anfang einer Zeile verwenden, um "[plain text](https://pugjs.org/language/plain-text.html)" anzuzeigen. Zum Beispiel wird der unten gezeigte zusätzliche Text in derselben Zeile wie der vorhergehende Anker angezeigt, aber nicht verlinkt.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug erlaubt es Ihnen, bedingte Operationen mit `if`, `else`, `else if` und `unless` auszuführen — zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen/Iterationsoperationen mit der `each-in` oder `while`-Syntax durchführen. Im untenstehenden Codefragment haben wir durch ein Array iteriert, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=', um den "val" als Variable auszuführen. Der Wert, über den Sie iterieren, kann ebenfalls als Variable in das Template übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die in der Ausgabe gerendert werden können – oder nicht – je nachdem, was Sie wählen), Mixins zum Erstellen wiederverwendbarer Codeblöcke, Fallunterscheidungen und viele andere Funktionen. Für detaillierte Informationen siehe [Die Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Templates erweitern

Auf einer Website ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschließlich standardmäßiger HTML-Markups für Kopf, Fußzeile, Navigation usw. Anstatt Entwickler zu zwingen, dieses "Boilerplate" auf jeder Seite zu duplizieren, erlaubt es _Pug_, ein Basistemplate zu deklarieren und es dann zu erweitern, wobei nur die Teile ersetzt werden, die für jede spezifische Seite anders sind.

Zum Beispiel sieht das Basistemplate **layout.pug** in unserem [Skeleton-Projekt](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) so aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Der `block`-Tag wird verwendet, um Inhaltsabschnitte zu markieren, die in einem abgeleiteten Template ersetzt werden können (wenn der Block nicht neu definiert wird, wird seine Implementierung in der Basisklasse verwendet).

Das Standard-**index.pug** (erstellt für unser Skeleton-Projekt) zeigt, wie wir das Basistemplate überschreiben. Der `extends`-Tag identifiziert das zu verwendende Basistemplate, und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts anzugeben, den wir überschreiben.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Kehren Sie zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data) zurück.
- Gehen Sie zum nächsten Unterartikel von Teil 5: [Das Basis-Template der LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
