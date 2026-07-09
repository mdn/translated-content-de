---
title: Template-Einführung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Ein Template ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert, mit Platzhaltern, die angeben, wo Daten eingefügt werden, wenn das Template gerendert wird (in _Express_ werden Templates als _Views_ bezeichnet).

## Express Template-Auswahl

Express kann mit vielen verschiedenen [Template Rendering Engines](https://expressjs.com/en/guide/using-template-engines/) verwendet werden. In diesem Tutorial nutzen wir [Pug](https://pugjs.org/api/getting-started.html) (früher bekannt als _Jade_) für unsere Templates. Dies ist die beliebteste Template-Sprache für Node und beschreibt sich selbst als eine "saubere, abstands-sensitive Syntax, um HTML zu schreiben, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Template-Sprachen verwenden unterschiedliche Ansätze zur Definition von Layouts und zur Markierung von Platzhaltern für Daten—einige verwenden HTML zur Definition des Layouts, während andere unterschiedliche Markup-Formate nutzen, die in HTML umgewandelt werden können. Pug gehört zu der zweiten Kategorie; es verwendet eine _Repräsentation_ von HTML, bei der das erste Wort in einer Zeile in der Regel ein HTML-Element darstellt, und die Einrückung in den folgenden Zeilen verwendet wird, um Verschachtelungen darzustellen. Das Ergebnis ist eine Seitenbeschreibung, die direkt in HTML übersetzt wird, aber kürzer und möglicherweise leichter lesbar ist.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es sensibel auf Einrückungen und Leerzeichen reagiert (wenn Sie an der falschen Stelle ein zusätzliches Leerzeichen einfügen, kann es zu einem wenig hilfreichen Fehlercode kommen). Sobald Sie jedoch Ihre Templates erstellt haben, sind sie sehr einfach zu lesen und zu warten.

## Template-Konfiguration

Die _LocalLibrary_ wurde konfiguriert, um [Pug](https://pugjs.org/api/getting-started.html) zu verwenden, als wir die [Skeleton-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Sie sollten das Pug-Modul als Abhängigkeit in der **package.json**-Datei der Website sehen und die folgenden Konfigurationseinstellungen in der **app.js**-Datei. Diese Einstellungen zeigen uns, dass wir Pug als View-Engine verwenden und dass _Express_ Templates im **/views** Unterverzeichnis suchen sollte.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie im Views-Verzeichnis nachsehen, werden Sie die .pug-Dateien für die Standardansichten des Projekts finden. Dazu gehören die Ansicht für die Startseite (**index.pug**) und das Basistemplate (**layout.pug**), das wir mit eigenen Inhalten ersetzen müssen.

```plain
/express-locallibrary-tutorial  # the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Template-Syntax

Die folgende Beispielfilendatei zeigt viele der nützlichsten Funktionen von Pug.

Das Erste, was auffällt, ist, dass die Datei die Struktur einer typischen HTML-Datei widerspiegelt, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und die Einrückung verwendet wird, um verschachtelte Elemente darzustellen. So befindet sich beispielsweise das `body`-Element in einem `html`-Element, und Absatz-Elemente (`p`) befinden sich im `body`-Element usw. Nicht verschachtelte Elemente (z.B. einzelne Absätze) sind in separaten Zeilen.

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

Elementattribute werden in Klammern nach dem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in Komma- oder Leerzeichen-getrennten Listen der Paare von Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute werden _escapet_ (z.B. werden Zeichen wie `>` in ihre HTML-Code-Äquivalente wie `&gt;` umgewandelt), um JavaScript-Injections oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag von einem Gleichheitszeichen gefolgt wird, wird der folgende Text als JavaScript-_Ausdruck_ behandelt. So wird im ersten Beispiel unten der Inhalt des `h1`-Tags die _Variable_ `title` sein (entweder in der Datei definiert oder aus Express in das Template übergeben). In der zweiten Zeile ist der Absatzinhalt ein Textstring, der mit der `title`-Variable verknüpft ist. In beiden Fällen wird standardmäßig die Zeile _escapet_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Vorlagen ist eine Variable, die verwendet, aber nicht von Ihrem Express-Code übergeben (oder lokal definiert) wird, "undefiniert".
> Wenn Sie diese Vorlage verwenden, ohne eine `title`-Variable zu übergeben, werden die Tags erstellt, enthalten jedoch eine leere Zeichenkette.
> Wenn Sie nicht definierte Variablen in bedingten Anweisungen verwenden, werden sie zu `false` ausgewertet.
> Andere Vorlage-Sprachen könnten verlangen, dass Variablen, die in der Vorlage verwendet werden, definiert sein müssen.

Wenn nach dem Tag kein Gleichheitszeichen folgt, wird der Inhalt als reiner Text behandelt. Innerhalb des reinen Textes können Sie escapede und nicht escapede Daten mithilfe der Syntax `#{}` und `!{}` einfügen, wie unten gezeigt. Sie können auch rohes HTML innerhalb des reinen Textes hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie möchten fast immer Daten von Benutzern escapen (über die **`#{}`**-Syntax). Daten, die vertrauenswürdig sind (z.B. generierte Zähler von Datensätzen usw.), können angezeigt werden, ohne die Werte zu escapen.

Sie können das Pipe-Zeichen ('**|**') am Anfang einer Zeile verwenden, um "[reinen Text](https://pugjs.org/language/plain-text.html)" anzuzeigen. Der im Beispiel gezeigte zusätzliche Text wird zum Beispiel auf derselben Zeile wie der vorhergehende Anker angezeigt, wird jedoch nicht verlinkt.

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

Sie können auch Schleifen-/Iterionsoperationen mithilfe der `each-in`- oder `while`-Syntax durchführen. Im Codefragment unten haben wir ein Array durchlaufen, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=' um die "val" als Variable zu evaluieren. Der Wert, den Sie durchlaufen, kann auch als Variable in das Template übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die je nach Wunsch im Ausgabe- oder nicht gerendert werden können), Mixins zur Erstellung wiederverwendbarer Codeblöcke, case-Anweisungen und viele andere Funktionen. Weitere detaillierte Informationen finden Sie in den [Pug-Dokumenten](https://pugjs.org/api/getting-started.html).

## Templates erweitern

Über eine Website hinweg ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschließlich der Standard-HTML-Auszeichnung für Kopfzeile, Fußzeile, Navigation usw. Anstatt Entwickler dazu zu zwingen, diesen "Boilerplate" in jeder Seite zu duplizieren, ermöglicht es _Pug_, ein Basistemplate zu deklarieren und es dann zu erweitern, wobei nur die Teile ersetzt werden, die für jede spezifische Seite unterschiedlich sind.

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

Das `block`-Tag wird verwendet, um Abschnitte von Inhalten zu markieren, die in einem abgeleiteten Template ersetzt werden können (wenn der Block nicht neu definiert wird, wird die Implementierung in der Basisklasse verwendet).

Das Standard-**index.pug** (erstellt für unser Skeleton-Projekt) zeigt, wie wir das Basistemplate überschreiben. Das `extends`-Tag identifiziert das zu verwendende Basistemplate, und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts anzugeben, den wir überschreiben werden.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Wechseln Sie zum nächsten Unterartikel von Teil 5: [Das LocalLibrary Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
