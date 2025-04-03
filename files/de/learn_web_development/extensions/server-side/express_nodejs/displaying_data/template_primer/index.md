---
title: Template Einführung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Ein Template ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert, mit Platzhaltern, die repräsentieren, wo Daten beim Rendern des Templates eingefügt werden (in _Express_ werden Templates als _Views_ bezeichnet).

## Express Template-Optionen

Express kann mit vielen verschiedenen [Template-Rendering-Engines](https://expressjs.com/en/guide/using-template-engines.html) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (früher bekannt als _Jade_) für unsere Templates. Dies ist die beliebteste Node-Template-Sprache und beschreibt sich selbst als eine "saubere, whitespace-sensitive Syntax für das Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Template-Sprachen verwenden unterschiedliche Ansätze zum Definieren von Layouts und Markieren von Platzhaltern für Daten. Einige verwenden HTML zur Definition des Layouts, während andere verschiedene Markup-Formate verwenden, die in HTML transpiliert werden können. Pug gehört zur zweiten Kategorie; es verwendet eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element ist, und Einrückungen in den folgenden Zeilen werden verwendet, um Verschachtelungen darzustellen. Das Ergebnis ist eine Seitendefinition, die direkt in HTML übersetzt wird, aber prägnanter und möglicherweise leichter zu lesen ist.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es empfindlich auf Einrückungen und Whitespace reagiert (wenn Sie an der falschen Stelle ein zusätzliches Leerzeichen einfügen, erhalten Sie möglicherweise einen wenig hilfreichen Fehlercode). Wenn Sie jedoch Ihre Templates eingerichtet haben, sind sie sehr leicht zu lesen und zu warten.

## Template-Konfiguration

Die _LocalLibrary_ wurde konfiguriert, um [Pug](https://pugjs.org/api/getting-started.html) zu verwenden, als wir [das Skelett der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Sie sollten das pug-Modul als Abhängigkeit in der **package.json**-Datei der Website sehen sowie die folgenden Konfigurationseinstellungen in der **app.js**-Datei. Die Einstellungen zeigen uns, dass wir pug als View-Engine verwenden und dass _Express_ die Templates im **/views**-Unterverzeichnis suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie im views-Verzeichnis nachsehen, sehen Sie die .pug-Dateien für die Standardansichten des Projekts. Diese beinhalten die Ansicht für die Startseite (**index.pug**) und das Basistemplate (**layout.pug**), das wir mit eigenem Inhalt ersetzen müssen.

```plain
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Template-Syntax

Die folgende Beispiel-Template-Datei zeigt viele der nützlichsten Funktionen von Pug.

Das erste, was auffällt, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und Einrückungen verwendet werden, um verschachtelte Elemente anzuzeigen. So befindet sich beispielsweise das `body`-Element innerhalb eines `html`-Elements, und Absatz-Elemente (`p`) befinden sich innerhalb des `body`-Elements usw. Nicht verschachtelte Elemente (z. B. einzelne Absätze) befinden sich in getrennten Zeilen.

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

Element-Attribute werden in Klammern nach ihrem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in kommagetrennten oder leerzeichenseparierten Listen der Paare aus Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute werden _escaped_ (d.h. Zeichen wie `>` werden in ihre HTML-Code-Entsprechungen wie `&gt;` umgewandelt), um JavaScript-Injektionen oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag vom Gleichheitszeichen gefolgt wird, wird der folgende Text als JavaScript-_Ausdruck_ behandelt. So wird beispielsweise im ersten Zeil unten der Inhalt des `h1`-Tags die _Variable_ `title` sein (entweder im File definiert oder beim Template-Aufruf von Express übergeben). In der zweiten Zeile ist der Absatzinhalt ein Textstring, der mit der `title`-Variablen verkettet wird. In beiden Fällen ist das Standardverhalten, die Zeile zu _escapen_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Templates ist eine Variable, die verwendet, aber nicht von Ihrem Express-Code übergeben (oder lokal definiert) wird, "undefined".
> Wenn Sie dieses Template verwenden, ohne eine `title`-Variable zu übergeben, würden die Tags erstellt, aber einen leeren String enthalten.
> Wenn Sie undefinierte Variablen in bedingten Anweisungen verwenden, dann werten sie zu `false` aus.
> Andere Template-Sprachen können erfordern, dass die im Template verwendeten Variablen definiert sein müssen.

Wenn kein Gleichheitszeichen nach dem Tag vorhanden ist, wird der Inhalt als Klartext behandelt. Innerhalb des Klartextes können Sie escapte und unescapte Daten unter Verwendung der Syntax `#{}` und `!{}` einfügen, wie unten gezeigt. Sie können auch rohes HTML innerhalb des Klartextes hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie möchten fast immer Daten von Benutzern escapen (über die **`#{}`**-Syntax). Daten, denen vertraut werden kann (z. B. generierte Datensatzzählungen usw.), können angezeigt werden, ohne die Werte zu escapen.

Sie können das Pipe-Symbol ('**|**') am Anfang einer Zeile verwenden, um "[Plain Text](https://pugjs.org/language/plain-text.html)" anzuzeigen. Beispielsweise wird der zusätzliche Text, der unten gezeigt wird, in derselben Zeile wie der vorhergehende Anker angezeigt, aber nicht verlinkt.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug ermöglicht es Ihnen, bedingte Operationen mit `if`, `else`, `else if` und `unless` durchzuführen — zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen/Iterationsoperationen mit der `each-in`- oder `while`-Syntax durchführen. Im untenstehenden Codefragment haben wir durch ein Array iteriert, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=' zur Auswertung des "val" als Variable unten. Der Wert, über den Sie iterieren, kann auch als Variable an das Template übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die in der Ausgabe gerendert werden können — oder nicht —, je nach Ihrer Wahl), Mixins zur Erstellung wiederverwendbarer Codeblöcke, Fallunterscheidungen und viele andere Funktionen. Für detailliertere Informationen siehe [Die Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Templates erweitern

Über eine Website hinweg ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschließlich standardmäßiger HTML-Markup für den Kopf, Fußzeile, Navigation usw. Anstatt Entwickler dazu zu zwingen, dieses "Boilerplate" auf jeder Seite zu duplizieren, erlaubt _Pug_ Ihnen, ein Basistemplate zu deklarieren und es dann zu erweitern, wobei nur die Teile ersetzt werden, die für jede spezifische Seite anders sind.

Zum Beispiel sieht das Basistemplate **layout.pug**, das in unserem [Skeleton-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) erstellt wurde, so aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Das `block`-Tag wird verwendet, um Inhaltsabschnitte zu markieren, die in einem abgeleiteten Template ersetzt werden können (wenn der Block nicht neu definiert wird, wird seine Implementierung in der Basisklasse verwendet).

Die Standard-**index.pug** (erstellt für unser Skeleton-Projekt) zeigt, wie wir das Basistemplate überschreiben. Das `extends`-Tag identifiziert das zu verwendende Basistemplate, und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts anzugeben, den wir überschreiben.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Das LocalLibrary Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
