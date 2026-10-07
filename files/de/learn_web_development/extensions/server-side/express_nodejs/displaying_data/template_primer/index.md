---
title: Einführung in Templates
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

Ein Template ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei festlegt. Platzhalter kennzeichnen, wo beim Rendern des Templates Daten eingefügt werden (in _Express_ werden Templates als _Views_ bezeichnet).

## Template-Optionen für Express

Express kann mit vielen verschiedenen [Template-Engines](https://expressjs.com/en/guide/using-template-engines/) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (früher _Jade_) für unsere Templates. Pug ist die beliebteste Template-Sprache für Node und beschreibt sich selbst als eine „übersichtliche, einrückungssensitive Syntax zum Schreiben von HTML, die stark von [Haml](https://haml.info/) beeinflusst ist“.

Template-Sprachen verwenden unterschiedliche Ansätze, um Layouts zu definieren und Platzhalter für Daten zu kennzeichnen: Manche verwenden HTML für das Layout, andere nutzen Markup-Formate, die in HTML umgewandelt werden können. Pug gehört zur zweiten Gruppe. Es verwendet eine _Darstellung_ von HTML, bei der das erste Wort einer Zeile normalerweise ein HTML-Element bezeichnet. Einrückungen in den folgenden Zeilen zeigen die Verschachtelung an. Das Ergebnis ist eine Seitendefinition, die sich direkt in HTML übersetzen lässt, aber kompakter und möglicherweise leichter zu lesen ist.

> [!NOTE]
> Ein Nachteil von _Pug_ ist seine Empfindlichkeit gegenüber Einrückungen und Leerzeichen. Ein zusätzliches Leerzeichen an der falschen Stelle kann zu einer wenig hilfreichen Fehlermeldung führen. Sobald Ihre Templates stehen, lassen sie sich jedoch sehr leicht lesen und pflegen.

## Template-Konfiguration

_LocalLibrary_ wurde für die Verwendung von [Pug](https://pugjs.org/api/getting-started.html) konfiguriert, als wir die [Grundstruktur der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Das Modul pug sollte in der Datei **package.json** der Website als Abhängigkeit aufgeführt sein. In **app.js** sollten Sie außerdem die folgenden Konfigurationseinstellungen finden. Sie legen fest, dass wir pug als View-Engine verwenden und _Express_ im Unterverzeichnis **/views** nach Templates suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Im Verzeichnis views finden Sie die .pug-Dateien für die Standard-Views des Projekts.
Dazu gehören die View für die Startseite (**index.pug**) und das Basis-Template (**layout.pug**), deren Inhalt wir durch unseren eigenen ersetzen werden.

```plain
/express-locallibrary-tutorial  # the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Template-Syntax

Die folgende Beispiel-Template-Datei zeigt viele der nützlichsten Funktionen von Pug.

Zunächst fällt auf, dass die Datei die Struktur einer typischen HTML-Datei abbildet: Das erste Wort in (fast) jeder Zeile ist ein HTML-Element, und Einrückungen kennzeichnen verschachtelte Elemente. So befindet sich beispielsweise das Element `body` innerhalb eines Elements `html`, während Absatzelemente (`p`) innerhalb von `body` stehen. Nicht ineinander verschachtelte Elemente, etwa einzelne Absätze, stehen in separaten Zeilen.

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

Elementattribute werden in Klammern hinter dem zugehörigen Element definiert. Innerhalb der Klammern stehen Paare aus Attributnamen und Attributwerten, die durch Kommas oder Leerzeichen getrennt sind, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width')`

Die Werte aller Attribute werden _escaped_ (beispielsweise wird `>` in die entsprechende HTML-Zeichenreferenz `&gt;` umgewandelt), um JavaScript-Injection oder Cross-Site-Scripting-Angriffe zu verhindern.

Steht hinter einem Tag ein Gleichheitszeichen, wird der folgende Text als JavaScript-_Ausdruck_ behandelt. In der ersten der folgenden Zeilen ist der Inhalt des Tags `h1` beispielsweise die _Variable_ `title` (die entweder in der Datei definiert oder von Express an das Template übergeben wird). In der zweiten Zeile besteht der Absatzinhalt aus einer Textzeichenfolge, die mit der Variablen `title` verkettet wird. In beiden Fällen wird die Zeile standardmäßig _escaped_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Templates ist eine Variable „undefined“, wenn sie verwendet, aber weder von Ihrem Express-Code übergeben noch lokal definiert wurde.
> Wenn Sie dieses Template verwenden, ohne eine Variable `title` zu übergeben, werden die Tags erstellt, enthalten aber eine leere Zeichenfolge.
> Verwenden Sie undefinierte Variablen in bedingten Anweisungen, werden sie als `false` ausgewertet.
> Andere Template-Sprachen verlangen möglicherweise, dass im Template verwendete Variablen definiert sind.

Steht hinter dem Tag kein Gleichheitszeichen, wird der Inhalt als reiner Text behandelt. In diesen Text können Sie mit der Syntax `#{}` beziehungsweise `!{}` escaped und unescaped Daten einfügen, wie unten gezeigt. Sie können dem Text auch direkt HTML hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Daten von Benutzern sollten Sie fast immer escapen (mit der Syntax **`#{}`**). Vertrauenswürdige Daten, beispielsweise generierte Anzahlen von Datensätzen, können ohne Escaping der Werte angezeigt werden.

Mit dem Pipe-Zeichen ('**|**') am Anfang einer Zeile können Sie „[reinen Text](https://pugjs.org/language/plain-text.html)“ kennzeichnen. Der unten gezeigte zusätzliche Text wird beispielsweise in derselben Zeile wie der vorangehende Link angezeigt, gehört aber nicht zum Link.

```pug
a(href='http://someurl/') Link text
| Plain text
```

In Pug können Sie bedingte Anweisungen mit `if`, `else`, `else if` und `unless` verwenden, zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Auch Schleifen und Iterationen sind mit der Syntax `each-in` oder `while` möglich. Im folgenden Codeausschnitt durchlaufen wir ein Array, um eine Liste von Variablen anzuzeigen. Beachten Sie die Verwendung von 'li=', um „val“ als Variable auszuwerten. Der Wert, über den Sie iterieren, kann dem Template ebenfalls als Variable übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt außerdem Kommentare (die Sie wahlweise in der Ausgabe rendern können), Mixins zum Erstellen wiederverwendbarer Codeblöcke, case-Anweisungen und viele weitere Funktionen. Ausführlichere Informationen finden Sie in der [Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Templates erweitern

Üblicherweise haben alle Seiten einer Website eine gemeinsame Struktur, einschließlich standardisiertem HTML-Markup für Head, Footer, Navigation und andere Bereiche. Damit Entwickler diesen Standardcode nicht auf jeder Seite wiederholen müssen, können Sie in _Pug_ ein Basis-Template definieren und erweitern. Dabei ersetzen Sie nur die Teile, die sich auf der jeweiligen Seite unterscheiden.

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

Mit dem Tag `block` werden Inhaltsabschnitte gekennzeichnet, die in einem abgeleiteten Template ersetzt werden können. Wird ein Block nicht neu definiert, wird seine Implementierung aus dem Basis-Template verwendet.

Die standardmäßige **index.pug** (die für unser Grundgerüstprojekt erstellt wurde) zeigt, wie wir das Basis-Template überschreiben. Das Tag `extends` gibt das zu verwendende Basis-Template an. Anschließend kennzeichnen wir mit `block section_name` den neuen Inhalt des Abschnitts, den wir überschreiben möchten.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Kehren Sie zu [Express-Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data) zurück.
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Das Basis-Template von LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
