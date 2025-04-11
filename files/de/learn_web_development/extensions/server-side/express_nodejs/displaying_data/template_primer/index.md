---
title: Vorlagen-Einführung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Eine Vorlage ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert, mit Platzhaltern, die anzeigen, wo Daten eingesetzt werden, wenn die Vorlage gerendert wird (in _Express_ werden Vorlagen als _Views_ bezeichnet).

## Express-Vorlagenoptionen

Express kann mit vielen verschiedenen [Vorlagen-Rendering-Engines](https://expressjs.com/en/guide/using-template-engines.html) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (ehemals bekannt als _Jade_) für unsere Vorlagen. Dies ist die beliebteste Node-Vorlagensprache und beschreibt sich selbst als eine "saubere, auf Leerzeichen empfindliche Syntax zum Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Vorlagensprachen verwenden unterschiedliche Ansätze zur Definition von Layout und Markierung von Platzhaltern für Daten – einige verwenden HTML zur Definition des Layouts, während andere verschiedene Markup-Formate verwenden, die in HTML umgewandelt werden können. Pug gehört zur zweiten Kategorie; es nutzt eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element darstellt und Einrückungen in nachfolgenden Zeilen die Verschachtelung darstellen. Das Ergebnis ist eine Seitenbeschreibung, die direkt in HTML übersetzt wird, aber kürzer und möglicherweise leichter zu lesen ist.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es empfindlich auf Einrückungen und Leerzeichen reagiert (wenn Sie an der falschen Stelle ein zusätzliches Leerzeichen hinzufügen, erhalten Sie möglicherweise einen unklaren Fehlercode). Wenn Sie jedoch Ihre Vorlagen eingerichtet haben, sind diese sehr leicht zu lesen und zu warten.

## Vorlagenkonfiguration

Die _LocalLibrary_ wurde so konfiguriert, dass sie [Pug](https://pugjs.org/api/getting-started.html) verwendet, als wir [die Grundstruktur der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Sie sollten das Pug-Modul als Abhängigkeit in der **package.json**-Datei der Website sowie die folgenden Konfigurationseinstellungen in der **app.js**-Datei sehen. Die Einstellungen geben an, dass wir Pug als View-Engine verwenden und dass _Express_ im **/views** Unterverzeichnis nach Vorlagen suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie im Verzeichnis views nachsehen, werden Sie die .pug-Dateien für die Standard-Views des Projekts finden. Diese beinhalten die View für die Startseite (**index.pug**) und die Basistemplate (**layout.pug**), die wir mit unserem eigenen Inhalt ersetzen müssen.

```plain
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Templatesyntax

Die Beispielvorlagendatei unten zeigt viele von Pugs nützlichsten Funktionen.

Das erste, was zu beachten ist, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und Einrückungen verwenden, um verschachtelte Elemente anzuzeigen. So ist beispielsweise das `body`-Element innerhalb eines `html`-Elements und Absatz-Elemente (`p`) sind innerhalb des `body`-Elements, usw. Nicht verschachtelte Elemente (z. B. einzelne Absätze) stehen auf separaten Zeilen.

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

Elementattribute werden in Klammern nach ihrem zugehörigen Element definiert. Innerhalb der Klammern sind die Attribute in durch Kommata oder Leerzeichen getrennten Listen der Paare von Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute werden _escapet_ (z. B. werden Zeichen wie `>` in ihre HTML-Code-Äquivalente wie `&gt;` umgewandelt), um JavaScript-Injektionen oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag mit einem Gleichheitszeichen gefolgt wird, wird der folgende Text als JavaScript-_Ausdruck_ behandelt. So wird zum Beispiel im ersten Zeile darunter der Inhalt des `h1`-Tags die _Variable_ `title` sein (entweder in der Datei definiert oder aus Express in die Vorlage übergeben). In der zweiten Zeile ist der Absatzinhalt eine Textzeichenkette, die mit der `title`-Variable verkettet ist. In beiden Fällen besteht das Standardverhalten darin, die Zeile zu _escapen_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Vorlagen ist eine Variable, die verwendet, aber nicht aus Ihrem Express-Code übergeben (oder lokal definiert) wird, "undefined".
> Wenn Sie diese Vorlage ohne Übergabe einer `title`-Variablen verwenden, würden die Tags erstellt, aber sie würden einen leeren String enthalten.
> Wenn Sie undefinierte Variablen in bedingten Anweisungen verwenden, werden sie als `false` ausgewertet.
> Andere Vorlagensprachen erfordern möglicherweise, dass die in der Vorlage verwendeten Variablen definiert sein müssen.

Gibt es kein Gleichheitszeichen nach dem Tag, wird der Inhalt als Klartext behandelt. Innerhalb des Klartexts können Sie escapte und unescapte Daten mit der Syntax `#{}` bzw. `!{}` einfügen, wie unten gezeigt. Sie können auch rohen HTML innerhalb des Klartexts hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie werden fast immer die Daten von Benutzern escapen wollen (über die **`#{}`**-Syntax). Daten, denen vertraut werden kann (z. B. generierte Zählungen von Datensätzen, usw.), können angezeigt werden, ohne die Werte zu escapen.

Sie können das Pipe-Zeichen ('**|**') zu Beginn einer Zeile verwenden, um "[Klartext](https://pugjs.org/language/plain-text.html)" anzuzeigen. Zum Beispiel wird der unten gezeigte zusätzliche Text auf derselben Zeile wie der vorhergehende Anker angezeigt, aber nicht verlinkt.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug ermöglicht es Ihnen, bedingte Operationen mit `if`, `else`, `else if` und `unless` durchzuführen – zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen-/Iterationsoperationen mit `each-in` oder `while`-Syntax ausführen. Im folgenden Codefragment haben wir durch ein Array iteriert, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=' zur Auswertung der "val" als Variable unten. Der Wert, den Sie iterieren, kann auch als Variable in die Vorlage übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die im Output gerendert werden können – oder nicht – je nach Ihrer Wahl), Mixins, um wiederverwendbare Codeblöcke zu erstellen, Case-Anweisungen und viele andere Features. Für detailliertere Informationen siehe [Die Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Vorlagen erweitern

Auf einer Website ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschließlich standardisierter HTML-Markups für den Kopf, den Fußbereich, die Navigation usw. Anstatt Entwickler zu zwingen, diesen "Boilerplate" auf jeder Seite zu duplizieren, erlaubt _Pug_, eine Basistemplate zu deklarieren und diese zu erweitern, wobei nur die Teile ersetzt werden, die für jede spezifische Seite unterschiedlich sind.

Zum Beispiel sieht die Basistemplate **layout.pug**, die in unserem [Grundprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt wurde, folgendermaßen aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Das `block`-Tag wird verwendet, um Inhaltsbereiche zu markieren, die in einer abgeleiteten Vorlage ersetzt werden können (wenn der Block nicht neu definiert wird, wird seine Implementierung in der Basisklasse verwendet).

Die Standard-**index.pug** (für unser Grundprojekt erstellt) zeigt, wie wir die Basistemplate überschreiben. Das `extends`-Tag identifiziert die zu verwendende Basistemplate, und dann verwenden wir `block section_name`, um den neuen Inhalt des Bereichs anzugeben, den wir überschreiben werden.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Die LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
