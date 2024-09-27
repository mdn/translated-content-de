---
title: Template Primer
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Ein Template ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert, mit Platzhaltern, die angeben, wo Daten eingefügt werden, wenn das Template gerendert wird (in _Express_ werden Templates als _Views_ bezeichnet).

## Template-Auswahl in Express

Express kann mit vielen verschiedenen [Template-Rendering-Engines](https://expressjs.com/en/guide/using-template-engines.html) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (früher bekannt als _Jade_) für unsere Templates. Dies ist die beliebteste Node-Template-Sprache und beschreibt sich selbst als eine "saubere, auf Leerzeichen empfindliche Syntax für das Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Templatesprachen verwenden unterschiedliche Ansätze zur Definition von Layouts und zur Markierung von Platzhaltern für Daten — einige verwenden HTML zur Definition des Layouts, während andere verschiedene Markup-Formate verwenden, die in HTML transpiliert werden können. Pug gehört zur zweiten Kategorie; es verwendet eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element darstellt und Einrückungen in nachfolgenden Zeilen zur Darstellung von Verschachtelungen verwendet werden. Das Ergebnis ist eine Seitenbeschreibung, die direkt in HTML übersetzt wird, aber prägnanter und möglicherweise leichter lesbar ist.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es empfindlich auf Einrückungen und Leerzeichen reagiert (wenn Sie an der falschen Stelle ein zusätzliches Leerzeichen hinzufügen, kann ein unklarer Fehlercode auftreten). Sobald Sie jedoch Ihre Templates erstellt haben, sind sie sehr leicht zu lesen und zu pflegen.

## Template-Konfiguration

Die _LocalLibrary_ wurde konfiguriert, um [Pug](https://pugjs.org/api/getting-started.html) zu verwenden, als wir die [Skelett-Website erstellt haben](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website). Sie sollten das Pug-Modul als Abhängigkeit in der **package.json** Datei der Website sehen und die folgenden Konfigurationseinstellungen in der **app.js** Datei. Die Einstellungen sagen uns, dass wir Pug als View-Engine verwenden und dass _Express_ nach Templates im **/views** Unterverzeichnis suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie in das Views-Verzeichnis schauen, sehen Sie die .pug-Dateien für die Standardansichten des Projekts. Dazu gehören die Ansicht für die Startseite (**index.pug**) und das Basistemplate (**layout.pug**), die wir mit unserem eigenen Inhalt ersetzen müssen.

```plain
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Template-Syntax

Das folgende Beispiel-Template zeigt viele der nützlichsten Funktionen von Pug.

Das erste, was zu beachten ist, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und Einrückungen verwendet werden, um verschachtelte Elemente zu kennzeichnen. So ist zum Beispiel das `body`-Element in einem `html`-Element enthalten, und Paragrafen-Elemente (`p`) befinden sich innerhalb des `body`-Elements usw. Nicht verschachtelte Elemente (z. B. einzelne Paragrafen) stehen in getrennten Zeilen.

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

Elementattribute werden in Klammern nach ihrem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in durch Kommas oder Leerzeichen getrennten Listen der Paare von Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute werden _escaped_ (z. B. werden Zeichen wie `>` in ihre HTML-Code-Äquivalente wie `&gt;` umgewandelt), um JavaScript-Injektion oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag vom Gleichheitszeichen gefolgt wird, wird der nachfolgende Text als JavaScript-_Ausdruck_ behandelt. So wird beispielsweise im ersten unten angegebenen Satz der Inhalt des `h1`-Tags die _Variable_ `title` sein (entweder in der Datei definiert oder von Express an das Template übergeben). Im zweiten Satz ist der Absatzinhalt eine Textzeichenkette, die mit der `title`-Variable verknüpft ist. In beiden Fällen ist das Standardverhalten, die Zeile zu _escapen_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Templates ist eine Variable, die verwendet, aber nicht aus Ihrem Express-Code übergeben (oder lokal definiert) wird, "undefined".
> Wenn Sie dieses Template verwenden, ohne eine `title`-Variable zu übergeben, würden die Tags erstellt, enthalten jedoch eine leere Zeichenkette.
> Wenn Sie nicht definierte Variablen in bedingten Anweisungen verwenden, werden sie als `false` bewertet.
> Andere Templatesprachen können erfordern, dass im Template verwendete Variablen definiert werden müssen.

Wenn nach dem Tag kein Gleichheitszeichen steht, wird der Inhalt als reiner Text behandelt. Innerhalb des reinen Textes können Sie escapede und unescapede Daten mit der `#{}` und `!{}`-Syntax einfügen, wie unten gezeigt. Sie können auch rohes HTML innerhalb des reinen Textes hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie werden fast immer Daten von Benutzern escapen wollen (über die **`#{}`**-Syntax). Daten, die vertrauenswürdig sind (z. B. generierte Zählungen von Datensätzen usw.), können ohne Escape der Werte angezeigt werden.

Sie können das Pipe-Zeichen ('**|**') am Anfang einer Zeile verwenden, um "[reinen Text](https://pugjs.org/language/plain-text.html)" anzuzeigen. Zum Beispiel wird der unten gezeigte zusätzliche Text in derselben Zeile wie der vorhergehende Anker angezeigt, aber nicht verlinkt.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug erlaubt Ihnen, bedingte Operationen mit `if`, `else`, `else if` und `unless` durchzuführen — zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen/Iterationsoperationen mit der `each-in` oder `while` Syntax ausführen. Im folgenden Codefragment haben wir durch ein Array geschleift, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=' zur Bewertung der "val" als Variable unten. Der Wert, über den Sie iterieren, kann auch als Variable an das Template übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die, je nachdem wie Sie es wählen, im Output gerendert werden oder nicht), Mixins zur Erstellung wiederverwendbarer Codeblöcke, Fall-Anweisungen und viele andere Funktionen. Weitere detaillierte Informationen finden Sie in [Den Pug-Dokumenten](https://pugjs.org/api/getting-started.html).

## Erweitern von Templates

Auf einer Website ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschließlich standardisierter HTML-Markierungen für Kopf, Fußzeile, Navigation usw. Anstatt Entwickler zu zwingen, diese "Boilerplate" auf jeder Seite zu duplizieren, ermöglicht _Pug_ es Ihnen, ein Basistemplate zu deklarieren und es dann zu erweitern, wobei nur die Teile ersetzt werden, die für jede spezifische Seite unterschiedlich sind.

Zum Beispiel sieht das Basistemplate **layout.pug**, das in unserem [Skelettprojekt](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) erstellt wurde, folgendermaßen aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Das `block`-Tag wird verwendet, um Bereiche mit Inhalten zu kennzeichnen, die in einem abgeleiteten Template ersetzt werden können (wenn der Block nicht neu definiert wird, wird seine Implementierung in der Basisklasse verwendet).

Das Standard-**index.pug** (erzeugt für unser Skelettprojekt) zeigt, wie wir das Basistemplate überschreiben. Das `extends`-Tag identifiziert das zu verwendende Basistemplate, und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts zu kennzeichnen, den wir überschreiben werden.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Das LocalLibrary-Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
