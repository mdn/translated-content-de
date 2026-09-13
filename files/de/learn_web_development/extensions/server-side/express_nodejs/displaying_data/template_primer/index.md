---
title: Vorlagenleitfaden
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

Eine Vorlage ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert, mit Platzhaltern, die angeben, wo Daten eingefügt werden, wenn die Vorlage gerendert wird (in _Express_ werden Vorlagen als _Ansichten_ bezeichnet).

## Express-Vorlagenoptionen

Express kann mit vielen verschiedenen [Vorlagen-Render-Engines](https://expressjs.com/en/guide/using-template-engines/) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (vormals bekannt als _Jade_) für unsere Vorlagen. Dies ist die beliebteste Node-Vorlagensprache und beschreibt sich selbst als eine "saubere, whitespace-sensitive Syntax zum Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Vorlagensprachen verwenden unterschiedliche Ansätze zur Definition von Layouts und zur Kennzeichnung von Platzhaltern für Daten — einige verwenden HTML zur Definition des Layouts, während andere verschiedene Markup-Formate verwenden, die in HTML kompiliert werden können. Pug gehört zur zweiten Kategorie; es verwendet eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element darstellt, und Einrückungen in den folgenden Zeilen zur Darstellung von Verschachtelungen verwendet werden. Das Ergebnis ist eine Seitenbeschreibung, die direkt in HTML übersetzt wird, aber prägnanter und vermutlich einfacher zu lesen ist.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es anfällig für Einrückungen und Leerzeichen ist (wenn Sie an der falschen Stelle ein zusätzliches Leerzeichen hinzufügen, kann ein unverständlicher Fehlercode auftreten). Sobald Sie jedoch Ihre Vorlagen erstellt haben, sind sie sehr leicht zu lesen und zu pflegen.

## Vorlagenkonfiguration

Die _LocalLibrary_ wurde so konfiguriert, dass sie [Pug](https://pugjs.org/api/getting-started.html) verwendet, als wir [die Skelett-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Sie sollten das Pug-Modul als Abhängigkeit in der **package.json**-Datei der Website sehen sowie die folgenden Konfigurationseinstellungen in der **app.js**-Datei. Die Einstellungen teilen uns mit, dass wir Pug als Ansichts-Engine verwenden und dass _Express_ nach Vorlagen im **/views** Unterverzeichnis suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie im Ansichtsverzeichnis nachsehen, werden Sie die .pug-Dateien für die Standardansichten des Projekts sehen.
Diese beinhalten die Ansicht für die Startseite (**index.pug**) und die Basisschablone (**layout.pug**), die wir mit unserem eigenen Inhalt ersetzen müssen.

```plain
/express-locallibrary-tutorial  # the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Vorlagensyntax

Die unten stehende Beispieldatei zeigt viele der nützlichsten Funktionen von Pug.

Das Erste, das auffällt, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und Einrückungen verwendet werden, um verschachtelte Elemente anzuzeigen. So befindet sich zum Beispiel das `body`-Element innerhalb eines `html`-Elements, und Absatz-Elemente (`p`) befinden sich innerhalb des `body`-Elements usw. Nicht verschachtelte Elemente (z. B. einzelne Absätze) stehen in separaten Zeilen.

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

Elementattribute werden in Klammern hinter ihrem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in einem durch Kommas oder Leerzeichen getrennten Listen der Paare aus Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width')`

Die Werte aller Attribute werden _escaped_ (z. B. werden Zeichen wie `>` in ihre entsprechenden HTML-Codeäquivalente wie `&gt;` konvertiert), um JavaScript-Injektionen oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag von einem Gleichheitszeichen gefolgt wird, wird der folgende Text als JavaScript-_Expression_ behandelt. So wird beispielsweise im ersten unten stehenden Fall der Inhalt des `h1`-Tags von der _Variable_ `title` bestimmt (entweder in der Datei definiert oder aus Express in die Vorlage übergeben). In der zweiten Zeile wird der Absatzinhalt aus einer Textzeichenkette, die mit der `title`-Variable verkettet ist, gebildet. In beiden Fällen ist das Standardverhalten, die Zeile zu _escapen_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Vorlagen ist eine Variable, die verwendet aber nicht aus Ihrem Express-Code übergeben wird (oder lokal definiert ist), "undefiniert".
> Wenn Sie diese Vorlage ohne Weitergabe einer `title`-Variablen verwendet hätten, würden die Tags erstellt, enthielten jedoch eine leere Zeichenkette.
> Wenn Sie undefinierte Variablen in Bedingungsaussagen verwenden, werden sie als `false` ausgewertet.
> Andere Vorlagensprachen können verlangen, dass Variablen, die in der Vorlage verwendet werden, definiert werden müssen.

Wenn nach dem Tag kein Gleichheitszeichen steht, wird der Inhalt als einfacher Text behandelt. Innerhalb des einfachen Texts können Sie gespeicherte und ungespeicherte Daten mit der Syntax `#{}` und `!{}` einfügen, wie unten gezeigt. Sie können auch rohes HTML innerhalb des einfachen Texts hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie möchten fast immer Benutzerdaten escapen (über die **`#{}`**-Syntax). Daten, die vertrauenswürdig sind (z. B. generierte Zähler von Datensätzen usw.), können angezeigt werden, ohne die Werte zu escapen.

Sie können das Pipe-Zeichen ('**|**') am Anfang einer Zeile verwenden, um "[einfachen Text](https://pugjs.org/language/plain-text.html)" anzugeben. Zum Beispiel wird der unten gezeigte zusätzliche Text auf derselben Zeile wie der vorhergehende Anker angezeigt, aber nicht verlinkt.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug ermöglicht Ihnen die Durchführung von bedingten Operationen mit `if`, `else`, `else if` und `unless` — zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen-/Iterationsoperationen mit `each-in` oder `while`-Syntax durchführen. Im unten stehenden Codefragment haben wir durch ein Array geschleift, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=', um "val" als Variable darunter auszuwerten). Der Wert, über den Sie iterieren, kann auch als Variable in die Vorlage eingebracht werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die im Output dargestellt werden können — oder nicht, je nachdem, wie Sie es wählen), Mixins zur Erstellung wiederverwendbarer Codeblöcke, Fallunterscheidungen und viele andere Funktionen. Für detailliertere Informationen siehe [Die Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Erweiterung von Vorlagen

Auf einer Website ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschließlich standardisierter HTML-Markups für Kopfzeile, Fußzeile, Navigation usw. Anstatt die Entwickler zu zwingen, diese "Boilerplate" auf jeder Seite zu duplizieren, erlaubt es _Pug_, eine Basisvorlage zu deklarieren und dann diese zu erweitern, nur die Teile zu ersetzen, die für jede spezifische Seite unterschiedlich sind.

Zum Beispiel sieht die im [Skelettprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellte Basisvorlage **layout.pug** so aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Das `block`-Tag wird verwendet, um Abschnitte von Inhalten zu markieren, die in einer abgeleiteten Vorlage ersetzt werden können (wenn der Block nicht neu definiert wird, wird die Implementierung der Basisklasse verwendet).

Die Standard-**index.pug** (erstellt für unser Skelettprojekt) zeigt, wie wir die Basisvorlage überschreiben. Das `extends`-Tag identifiziert die zu verwendende Basisvorlage, und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts anzuzeigen, den wir überschreiben werden.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Die LocalLibrary-Basisvorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
