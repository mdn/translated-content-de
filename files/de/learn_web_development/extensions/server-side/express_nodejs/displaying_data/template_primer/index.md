---
title: Vorlage Einführung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

Eine Vorlage ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert und Platzhalter verwendet, um darzustellen, wo Daten eingefügt werden, wenn die Vorlage gerendert wird (in _Express_ werden Vorlagen als _Views_ bezeichnet).

## Express Vorlagenoptionen

Express kann mit vielen verschiedenen [Vorlagen-Rendering-Engines](https://expressjs.com/en/guide/using-template-engines.html) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (ehemals bekannt als _Jade_) für unsere Vorlagen. Dies ist die beliebteste Node-Vorlagensprache und beschreibt sich selbst als eine "saubere, leerzeichenempfindliche Syntax zum Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Vorlagensprachen nutzen unterschiedliche Ansätze zur Definition von Layouts und zur Markierung von Platzhaltern für Daten – einige verwenden HTML zur Definition des Layouts, während andere verschiedene Markup-Formate verwenden, die zu HTML transpiliert werden können. Pug gehört zur zweiten Kategorie; es verwendet eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element darstellt und Einrückungen in den nachfolgenden Zeilen zur Darstellung von Verschachtelungen verwendet werden. Das Ergebnis ist eine Seitendefinition, die direkt in HTML übersetzt wird, aber kürzer und möglicherweise einfacher zu lesen ist.

> [!NOTE]
> Ein Nachteil der Verwendung von _Pug_ ist, dass es empfindlich auf Einrückungen und Leerzeichen reagiert (wenn Sie ein zusätzliches Leerzeichen an der falschen Stelle hinzufügen, erhalten Sie möglicherweise einen wenig hilfreichen Fehlercode). Sobald Sie jedoch Ihre Vorlagen erstellt haben, sind sie sehr einfach zu lesen und zu warten.

## Template-Konfiguration

Die _LocalLibrary_ wurde so konfiguriert, dass sie [Pug](https://pugjs.org/api/getting-started.html) verwendet, als wir [das Gerüst der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). Sie sollten das Pug-Modul als Abhängigkeit in der **package.json**-Datei der Website sehen und die folgenden Konfigurationseinstellungen in der **app.js**-Datei. Die Einstellungen sagen uns, dass wir pug als View-Engine verwenden und dass _Express_ im **/views**-Unterverzeichnis nach Vorlagen suchen soll.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Im Ansichtsverzeichnis finden Sie die .pug-Dateien für die Standardansichten des Projekts.
Dazu gehören die Ansicht für die Startseite (**index.pug**) und die Basistemplate (**layout.pug**), die wir durch unseren eigenen Inhalt ersetzen müssen.

```plain
/express-locallibrary-tutorial  # the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Template-Syntax

Die folgende Beispieldatei zeigt viele der nützlichsten Funktionen von Pug.

Das Erste, was auffällt, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und Einrückungen verwendet werden, um verschachtelte Elemente anzuzeigen. So ist zum Beispiel das `body`-Element innerhalb eines `html`-Elements und Absatzelemente (`p`) befinden sich innerhalb des `body`-Elements usw. Nicht verschachtelte Elemente (z. B. einzelne Absätze) stehen in separaten Zeilen.

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

Elementattribute werden in Klammern nach dem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in komma- oder leerzeichengetrennten Listen der Paare von Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute werden _escaped_ (z. B. werden Zeichen wie `>` in ihre HTML-Code-Äquivalente wie `&gt;` umgewandelt), um JavaScript-Injektionen oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag von einem Gleichheitszeichen gefolgt wird, wird der nachfolgende Text als JavaScript-_Ausdruck_ behandelt. So wird zum Beispiel im ersten Satz unten der Inhalt des `h1`-Tags die _Variable_ `title` (entweder in der Datei definiert oder von Express in die Vorlage übergegeben). In der zweiten Zeile ist der Absatzinhalt ein Textstring, der mit der `title`-Variable verkettet ist. In beiden Fällen ist das Standardverhalten, die Zeile zu _escapen_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Vorlagen ist eine Variable, die verwendet, aber nicht in Ihrem Express-Code (oder lokal) definiert wurde, "undefined".
> Wenn Sie diese Vorlage verwenden, ohne eine `title`-Variable zu übergeben, werden die Tags erstellt, enthalten jedoch einen leeren String.
> Wenn Sie undefinierte Variablen in Bedingungsausdrücken verwenden, werten sie zu `false` aus.
> Andere Vorlagensprachen erfordern möglicherweise, dass Variablen, die in der Vorlage verwendet werden, definiert sein müssen.

Wenn nach dem Tag kein Gleichheitszeichen steht, wird der Inhalt als Klartext behandelt. Innerhalb des Klartextes können Sie escapte und nicht escapte Daten mit der `#{}`- und `!{}`-Syntax einfügen, wie unten gezeigt. Sie können auch rohes HTML innerhalb des Klartexts hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie werden fast immer Daten von Benutzern escapen wollen (über die **`#{}`**-Syntax). Daten, die vertrauenswürdig sind (z. B. generierte Aufzählungen von Datensätzen), können ohne das Escaping der Werte angezeigt werden.

Sie können das Zeichen Rohrleitung ('**|**') am Anfang einer Zeile verwenden, um "[Klartext](https://pugjs.org/language/plain-text.html)" anzuzeigen. Zum Beispiel wird der unten gezeigte zusätzliche Text auf der gleichen Linie wie der vorherige Anker angezeigt, jedoch nicht verlinkt.

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

Sie können auch Schleifen-/Iterationsoperationen mit der `each-in`- oder `while`-Syntax durchführen. Im untenstehenden Codefragment haben wir durch ein Array iteriert, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=', um "val" als Variable unten zu evaluieren. Der Wert, über den Sie iterieren, kann auch als Variable in die Vorlage übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die im Ausgang angezeigt oder nicht angezeigt werden können, je nach Ihrer Wahl), Mixins, um wiederverwendbare Codeblöcke zu erstellen, case-Anweisungen und viele andere Funktionen. Für detailliertere Informationen siehe [Die Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Vorlagen erweitern

Auf einer Website ist es üblich, dass alle Seiten eine gemeinsame Struktur haben, einschliesslich HTML-Standardmarkup für Kopf, Fußzeile, Navigation usw. Anstatt Entwickler zu zwingen, dieses "Boilerplate" auf jeder Seite zu duplizieren, ermöglicht _Pug_ es Ihnen, eine Basistemplate zu deklarieren und dann zu erweitern, wobei nur die Teile ersetzt werden, die für jede spezifische Seite anders sind.

Zum Beispiel sieht das Basistemplate **layout.pug** in unserem [Skeleton-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) so aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Das `block`-Tag wird verwendet, um Inhaltsabschnitte zu kennzeichnen, die in einer abgeleiteten Vorlage ersetzt werden können (wenn der Block nicht neu definiert wird, wird seine Implementierung in der Basisklasse verwendet).

Das Standard-**index.pug** (erstellt für unser Skeleton-Projekt) zeigt, wie wir das Basistemplate überschreiben. Das `extends`-Tag identifiziert die zu verwendende Basistemplate, und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts anzugeben, den wir überschreiben werden.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Zurückkehren zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Weiter zum nächsten Unterartikel von Teil 5: [Das LocalLibrary-Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
