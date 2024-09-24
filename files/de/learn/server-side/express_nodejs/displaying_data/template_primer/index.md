---
title: Vorlage Grundkurs
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Eine Vorlage ist eine Textdatei, die die _Struktur_ oder das Layout einer Ausgabedatei definiert. Platzhalter werden verwendet, um Orte zu kennzeichnen, an denen Daten bei der Darstellung der Vorlage eingefügt werden (in _Express_ werden Vorlagen als _Views_ bezeichnet).

## Express Vorlagenoptionen

Express kann mit vielen verschiedenen [Vorlagen-Render-Engines](https://expressjs.com/en/guide/using-template-engines.html) verwendet werden. In diesem Tutorial verwenden wir [Pug](https://pugjs.org/api/getting-started.html) (früher bekannt als _Jade_) für unsere Vorlagen. Dies ist die beliebteste Node-Vorlagensprache und beschreibt sich selbst als eine "saubere, auf Leerzeichen-sensitive Syntax zum Schreiben von HTML, stark beeinflusst von [Haml](https://haml.info/)".

Verschiedene Vorlagensprachen verwenden unterschiedliche Ansätze zur Definition des Layouts und zur Markierung von Datenplatzhaltern—einige verwenden HTML zur Definition des Layouts, während andere verschiedene Markup-Formate verwenden, die in HTML umgewandelt werden können. Pug gehört zur zweiten Kategorie; es verwendet eine _Darstellung_ von HTML, bei der das erste Wort in jeder Zeile normalerweise ein HTML-Element darstellt und Einrückungen in nachfolgenden Zeilen zur Darstellung von Verschachtelungen verwendet werden. Das Ergebnis ist eine Seitendefinition, die direkt in HTML übersetzt wird, aber prägnanter und möglicherweise leichter lesbar ist.

> [!NOTE]
> Ein Nachteil bei der Verwendung von _Pug_ ist, dass es empfindlich auf Einrückungen und Leerzeichen reagiert (wenn Sie an einer Stelle ein zusätzliches Leerzeichen hinzufügen, erhalten Sie möglicherweise einen unklaren Fehlercode). Sobald Sie jedoch Ihre Vorlagen erstellt haben, sind sie sehr leicht zu lesen und zu warten.

## Vorlagenkonfiguration

Die _LocalLibrary_ wurde so konfiguriert, dass sie [Pug](https://pugjs.org/api/getting-started.html) verwendet, als wir [das Gerüst der Website erstellt haben](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website). Sie sollten das Pug-Modul als Abhängigkeit in der **package.json** Datei der Website sehen und die folgenden Konfigurationseinstellungen in der **app.js** Datei. Die Einstellungen zeigen uns, dass wir Pug als View-Engine verwenden und dass _Express_ nach Vorlagen im **/views** Unterverzeichnis suchen sollte.

```js
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Wenn Sie in das views-Verzeichnis schauen, werden Sie die .pug-Dateien für die Standardansichten des Projekts sehen.
Diese beinhalten die Ansicht für die Homepage (**index.pug**) und die Basisschablone (**layout.pug**), die wir mit unserem eigenen Inhalt ersetzen müssen.

```plain
/express-locallibrary-tutorial  //das Projekt-Root-Verzeichnis
  /views
    error.pug
    index.pug
    layout.pug
```

## Vorlagensyntax

Die folgende Beispielvorlagendatei zeigt viele der nützlichsten Funktionen von Pug.

Das erste, was auffällt, ist, dass die Datei die Struktur einer typischen HTML-Datei abbildet, wobei das erste Wort in (fast) jeder Zeile ein HTML-Element ist und Einrückungen verwendet werden, um verschachtelte Elemente anzuzeigen. So befindet sich zum Beispiel das `body`-Element innerhalb eines `html`-Elements, und die Absatz-Elemente (`p`) befinden sich innerhalb des `body`-Elements usw. Nicht verschachtelte Elemente (z.B. einzelne Absätze) stehen in separaten Zeilen.

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

Elementattribute werden in Klammern nach dem zugehörigen Element definiert. Innerhalb der Klammern werden die Attribute in durch Komma oder Leerzeichen getrennten Listen von Paaren von Attributnamen und Attributwerten definiert, zum Beispiel:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

Die Werte aller Attribute sind _escaped_ (z.B. werden Zeichen wie `>` in ihre HTML-Code-Äquivalente wie `&gt;` konvertiert), um JavaScript-Injektionen oder Cross-Site-Scripting-Angriffe zu verhindern.

Wenn ein Tag von einem Gleichheitszeichen gefolgt wird, wird der folgende Text als JavaScript-_Ausdruck_ behandelt. So wird zum Beispiel in der ersten Zeile unten der Inhalt des `h1`-Tags die _Variable_ `title` sein (entweder im Datei definiert oder in die Vorlage von Express übergeben). In der zweiten Zeile ist der Inhalt des Absatzes eine Textzeichenfolge, die mit der `title`-Variable verkettet ist. In beiden Fällen ist das Standardverhalten, die Zeile zu _escapen_.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

> [!NOTE]
> In Pug-Vorlagen ist eine Variable, die verwendet wird, aber nicht aus Ihrem Express-Code übergeben (oder lokal definiert) wird, "undefined".
> Wenn Sie diese Vorlage verwenden, ohne eine `title`-Variable zu übergeben, werden die Tags erstellt, aber sie enthalten eine leere Zeichenfolge.
> Wenn Sie nicht definierte Variablen in bedingten Anweisungen verwenden, werden diese als `false` ausgewertet.
> Andere Vorlagensprachen erfordern möglicherweise, dass Variablen, die in der Vorlage verwendet werden, definiert sein müssen.

Wenn nach dem Tag kein Gleichheitszeichen steht, wird der Inhalt als Klartext behandelt. Innerhalb des Klartextes können Sie mithilfe der Syntax `#{}` und `!{}` jeweils escapte und unescapte Daten einfügen, wie unten gezeigt. Sie können auch Roh-HTML innerhalb des Klartextes hinzufügen.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> [!NOTE]
> Sie werden fast immer Daten von Benutzern escapen wollen (via der **`#{}`**-Syntax). Daten, denen Sie vertrauen können (z.B. generierte Anzahl von Datensätzen usw.), können ohne Escape der Werte angezeigt werden.

Sie können das Pipe-Zeichen ('**|**') am Anfang einer Zeile verwenden, um "[Plaintext](https://pugjs.org/language/plain-text.html)" anzuzeigen. Zum Beispiel wird der unten dargestellte Zusatztext auf derselben Zeile wie der vorhergehende Anker angezeigt, aber nicht verlinkt.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug erlaubt es, bedingte Operationen mit `if`, `else`, `else if` und `unless` durchzuführen—zum Beispiel:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

Sie können auch Schleifen/Iteration-Operationen mit `each-in` oder `while` Syntax durchführen. Im untenstehenden Codefragment haben wir durch ein Array iteriert, um eine Liste von Variablen anzuzeigen (beachten Sie die Verwendung von 'li=', um das "val" als Variable zu evaluieren). Der Wert, über den Sie iterieren, kann auch als Variable in die Vorlage übergeben werden!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

Die Syntax unterstützt auch Kommentare (die in der Ausgabe gerendert werden können—oder nicht—je nachdem, wie Sie sich entscheiden), Mixins zur Erstellung wiederverwendbarer Codeblöcke, Fallunterscheidungen und viele andere Funktionen. Für detailliertere Informationen siehe [Die Pug-Dokumentation](https://pugjs.org/api/getting-started.html).

## Erweiterung von Vorlagen

Auf einer Website ist es üblich, dass alle Seiten eine gemeinsame Struktur aufweisen, einschließlich standardmäßiger HTML-Markup für den Kopfbereich, Fußzeile, Navigation usw. Anstatt Entwickler zu zwingen, dieses "Boilerplate" in jeder Seite zu duplizieren, erlaubt es _Pug_, eine Basisschablone zu deklarieren und dann zu erweitern, indem nur die Teile ersetzt werden, die sich für jede spezifische Seite unterscheiden.

Zum Beispiel sieht die Basisschablone **layout.pug**, die in unserem [Skeleton-Projekt](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) erstellt wurde, folgendermaßen aus:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

Das `block`-Tag wird verwendet, um Inhaltsabschnitte zu markieren, die in einer abgeleiteten Vorlage ersetzt werden können (wenn der Block nicht neu definiert wird, wird sein Inhalt in der Basisklasse verwendet).

Die Standard **index.pug** (erstellt für unser Skeleton-Projekt) zeigt, wie wir die Basisschablone überschreiben. Das `extends`-Tag identifiziert die zu verwendende Basisschablone und dann verwenden wir `block section_name`, um den neuen Inhalt des Abschnitts zu kennzeichnen, den wir überschreiben werden.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Nächste Schritte

- Gehen Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Das LocalLibrary-Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
