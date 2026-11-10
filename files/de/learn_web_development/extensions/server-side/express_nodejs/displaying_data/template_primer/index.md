---
title: Einführung in Templates
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Ein Template ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei festlegt. Platzhalter kennzeichnen, wo beim Rendern des Templates Daten eingefügt werden (in _Express_ werden Templates als _Views_ bezeichnet).

## Template-Optionen in Express

Express kann mit vielen verschiedenen [Template-Engines](https://expressjs.com/en/guide/using-template-engines/) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (früher _Jade_) für unsere Templates. Pug ist die beliebteste Template-Sprache für Node und beschreibt sich selbst als eine „übersichtliche, whitespace-sensitive Syntax zum Schreiben von HTML, die stark von [Haml](https://haml.info/) beeinflusst ist“.

Template-Sprachen verwenden unterschiedliche Ansätze, um Layouts zu definieren und Platzhalter für Daten zu kennzeichnen: Einige verwenden HTML für das Layout, andere nutzen Markup-Formate, die sich in HTML umwandeln lassen. Pug gehört zur zweiten Gruppe. Es verwendet eine _Darstellung_ von HTML, bei der das erste Wort einer Zeile normalerweise ein HTML-Element bezeichnet. Einrückungen in den folgenden Zeilen zeigen die Verschachtelung an. Das Ergebnis ist eine Seitendefinition, die sich direkt in HTML übersetzen lässt, dabei aber kompakter und möglicherweise leichter zu lesen ist.

> [!NOTE]
> Ein Nachteil von _Pug_ ist, dass es empfindlich auf Einrückungen und Leerzeichen reagiert (ein zusätzliches Leerzeichen an der falschen Stelle kann zu einer wenig hilfreichen Fehlermeldung führen). Sobald Ihre Templates stehen, lassen sie sich jedoch sehr einfach lesen und pflegen.

## Template-Konfiguration

Die _LocalLibrary_ wurde für die Verwendung von [Pug](https://pugjs.org/api/getting-started.html) konfiguriert, als wir die [Grundstruktur der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Das pug-Modul sollte in der Datei **package.json** der Website als Abhängigkeit aufgeführt sein. In der Datei **app.js** sollten außerdem die folgenden Konfigurationseinstellungen stehen. Sie legen fest, dass wir pug als View-Engine verwenden und _Express_ im Unterverzeichnis **views/** nach Templates suchen soll.

```js
// View engine setup
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "pug");
```

Im Verzeichnis views finden Sie die .pug-Dateien für die Standard-Views des Projekts.
Dazu gehören die View für die Startseite (**index.pug**) und das Basis-Template (**layout.pug**), deren Inhalt wir durch unseren eigenen ersetzen werden.

```plain
express-locallibrary-tutorial
├── views
│   ├── error.pug
│   ├── index.pug
│   └── layout.pug
...
```

## Template-Syntax

Die folgende Beispiel-Template-Datei zeigt viele der nützlichsten Funktionen von Pug.

Zunächst fällt auf, dass die Datei die Struktur einer typischen HTML-Datei abbildet: Das erste Wort in (fast) jeder Zeile ist ein HTML-Element, und Einrückungen kennzeichnen verschachtelte Elemente. So befindet sich beispielsweise das `body`-Element innerhalb eines `html`-Elements und Absatz-Elemente (`p`) befinden sich innerhalb des `body`-Elements. Nicht ineinander verschachtelte Elemente (z. B. einzelne Absätze) stehen in separaten Zeilen.

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

Elementattribute werden in Klammern nach dem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute als durch Kommas oder Leerzeichen getrennte Paare aus Attributnamen und Attributwerten angegeben, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width')`

Die Werte aller Attribute werden _escaped_ (beispielsweise werden Zeichen wie `>` in ihre HTML-Code-Entsprechungen wie `&gt;` umgewandelt), um JavaScript-Injection oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn auf ein Tag ein Gleichheitszeichen folgt, wird der anschließende Text als JavaScript-_Ausdruck_ behandelt. In der ersten Zeile unten ist der Inhalt des `h1`-Tags beispielsweise die _Variable_ `title` (die entweder in der Datei definiert oder von Express an das Template übergeben wird). In der zweiten Zeile besteht der Absatzinhalt aus einer Zeichenfolge, die mit der Variable `title` verknüpft wird. In beiden Fällen wird die Zeile standardmäßig _escaped_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> Eine Variable, die in einem Pug-Template verwendet, aber nicht von Ihrem Express-Code übergeben (oder lokal definiert) wurde, ist „undefined“.
> Wenn Sie dieses Template verwenden, ohne eine `title`-Variable zu übergeben, werden die Tags erstellt, enthalten aber eine leere Zeichenfolge.
> Wenn Sie undefinierte Variablen in bedingten Anweisungen verwenden, werden sie als `false` ausgewertet.
> Andere Template-Sprachen verlangen möglicherweise, dass im Template verwendete Variablen definiert sein müssen.

Wenn nach dem Tag kein Gleichheitszeichen steht, wird der Inhalt als Klartext behandelt. In Klartext können Sie mit der Syntax `#{}` beziehungsweise `!{}` escaped und nicht escaped Daten einfügen, wie unten gezeigt. Sie können auch direktes HTML in den Klartext einfügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Daten von Benutzern sollten Sie fast immer escapen (mit der Syntax **`#{}`**). Vertrauenswürdige Daten (z. B. berechnete Anzahlen von Datensätzen) können angezeigt werden, ohne die Werte zu escapen.

Mit dem Pipe-Zeichen ('**|**') am Anfang einer Zeile können Sie „[Klartext](https://pugjs.org/language/plain-text.html)“ kennzeichnen. Der unten gezeigte zusätzliche Text wird beispielsweise in derselben Zeile wie der vorangehende Link angezeigt, gehört aber nicht zum Link.

```pug
a(href='http://someurl/') Link text
| Plain text
```

In Pug können Sie bedingte Anweisungen mit `if`, `else`, `else if` und `unless` verwenden – zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen beziehungsweise Iterationen mit der Syntax `each-in` oder `while` ausführen. Im folgenden Codeausschnitt durchlaufen wir ein Array, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=', um „val“ als Variable auszuwerten). Der Wert, über den iteriert wird, kann dem Template ebenfalls als Variable übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt außerdem Kommentare (die Sie nach Wunsch in der Ausgabe rendern lassen können oder nicht), Mixins zum Erstellen wiederverwendbarer Codeblöcke, case-Anweisungen und viele weitere Funktionen. Weitere Informationen finden Sie in der [Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Templates erweitern

Üblicherweise haben alle Seiten einer Website eine gemeinsame Struktur, einschließlich des standardmäßigen HTML-Markups für den head, den Footer, die Navigation usw. Statt Entwickler dazu zu zwingen, diesen wiederkehrenden Code auf jeder Seite zu duplizieren, können Sie in _Pug_ ein Basis-Template definieren und es anschließend erweitern. Dabei ersetzen Sie nur die Teile, die sich auf der jeweiligen Seite unterscheiden.

Das Basis-Template **layout.pug**, das in unserem [Grundgerüstprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt wurde, sieht beispielsweise so aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Mit dem `block`-Tag werden Inhaltsbereiche gekennzeichnet, die in einem abgeleiteten Template ersetzt werden können (wenn der Block nicht neu definiert wird, bleibt seine Implementierung aus dem Basis-Template erhalten).

Die standardmäßige **index.pug** (die für unser Grundgerüstprojekt erstellt wurde) zeigt, wie wir das Basis-Template überschreiben. Das `extends`-Tag gibt das zu verwendende Basis-Template an. Anschließend kennzeichnen wir mit `block section_name` den neuen Inhalt des Bereichs, den wir überschreiben möchten.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
