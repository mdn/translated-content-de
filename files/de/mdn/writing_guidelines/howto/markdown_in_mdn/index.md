---
title: Anleitung zur Verwendung von Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 487085d8bbd6d80719e6c28ade98563479727df7
---

{{MDNSidebar}}

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentation für die MDN Web Docs zu schreiben. Wir haben GitHub-Flavored Markdown (GFM) als Basis gewählt und einige Erweiterungen hinzugefügt, um Dinge zu unterstützen, die wir auf MDN tun müssen, die nicht direkt in GFM unterstützt werden.

## Basis: GitHub-Flavored Markdown

Die Basis für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können, wenn etwas nicht ausdrücklich auf dieser Seite spezifiziert ist. GFM wiederum ist eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert wird.

Auf MDN erlauben wir nur Inline-Links.

So schreibt man GFM-Links korrekt auf MDN:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

So schreibt man Links auf MDN nicht korrekt:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Codezungen" verwenden, um `<pre>`-Blöcke zu markieren. Die öffnende Codezunge kann von einem Text gefolgt werden, der als "Infostring" bezeichnet wird. Die Spezifikation gibt Folgendes an:

> Das erste Wort des Infostrings wird typischerweise verwendet, um die Sprache des Codebeispiels anzugeben und im Klassenattribut des `<code>`-Tags wiedergegeben.

Es ist zulässig, dass der Infostring mehrere Wörter enthält, wie zum Beispiel:

````md
```fee fi fo fum
// some example code
```
````

Auf MDN verwenden Autoren Codezungen für Beispiel-Codeblöcke. Sie müssen die Sprache des Codebeispiels mithilfe des ersten Wortes des Infostrings angeben, was für die Syntaxhervorhebung des Blockes verwendet wird. Die folgenden Wörter werden unterstützt:

- Programmiersprachen
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-artig
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
  - Weitere
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (OpenGL-Shaders)
    - `sql` - SeQueL-Befehle
    - `wasm` - WebAssembly
    - `webidl` - Web Interface Definition Language
- Styling
  - `css` - CSS
  - `scss` - Sass (SCSS)
  - `less` - Less
- Markup
  - `html` - HTML
  - `svg` - SVG
  - `xml` - XML
  - `mathml` - MathML
  - `md` - Markdown
  - `latex` - LaTeX
- Befehlszeilen
  - `bash` - Bash/Shell
  - `batch` - Batch (Windows-Shell)
  - `powershell` - PowerShell
- Konfigurations-/Dateidaten
  - `json` - JSON
  - `ini` - INI
  - `yaml` - YAML
  - `toml` - TOML
  - `sql` - SQL-Datenbank
  - `ignore` - Gitignore-Datei
  - `apacheconf` - Apache-Konfiguration
  - `nginx` - NGINX-Konfiguration
- Templates
  - `django` - Django-Templates
  - `svelte` - Svelte-Templates
  - `handlebars` - Handlebars-Templates
  - `pug` - [Pug-Templates](https://pugjs.org/api/getting-started.html) (die möglicherweise von [Express](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden)
- Weitere
  - `plain` - Klartext
  - `diff` - Diff-Datei
  - `http` - HTTP-Header
  - `regex` - Regex
  - `uri` - URIs und URLs

Zum Beispiel:

````md
```js
const greeting = "I will get JavaScript syntax highlighting";
```
````

Wenn die gewünschte Hervorhebung nicht in der obigen Liste aufgeführt ist, sollten Sie den Codeblock als `plain` kennzeichnen. Zusätzliche Sprachen können im Prozess [diskutiert auf GitHub](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

### Linting unterdrücken

Autoren können ein `-nolint`-Suffix zu einem der Sprachidentifikatoren hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten die entsprechende Syntaxhervorhebung und werden vom Live-Beispielsystem erkannt, aber von Linter oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen zu zeigen, die Linter oder Formatierer nicht beheben sollten.

### Zusätzliche Klassen (Infostrings)

GFM unterstützt [Infostrings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden Infostrings in Klassennamen umgewandelt.

Autoren können einen der folgenden Infostrings angeben:

- `example-good`: Dieses Beispiel als gutes Beispiel (eines, dem man folgen sollte) stilisieren
- `example-bad`: Dieses Beispiel als schlechtes Beispiel (eines, das man vermeiden sollte) stilisieren
- `hidden`: Diesen Codeblock auf der Seite nicht anzeigen. Dies wird in Live-Beispielen verwendet.

Zum Beispiel:

````md
```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

```js hidden
const greeting = "I'm a secret greeting";
```
````

Diese werden wie folgt dargestellt:

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

### Diskussion Referenz

Dieses Thema wurde in folgendem Forum gelöst:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Anmerkungen, Warnungen und Hinweise

Autoren können die [GFM-Alarmsyntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besonders auf Inhalte aufmerksam zu machen. Es gibt drei Arten von Alarmen: Anmerkungen, Warnungen und Hinweise.

> [!NOTE]
> MDN Web Docs unterstützten Alarme mit ihrer eigenen Syntax, bevor Unterstützung für GFM-Alarme eingeführt wurde, und nannten sie "Notizblöcke".
> MDN unterstützt die folgenden GFM-Alarme nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Anmerkung hinzuzufügen, erstellen Sie ein Zitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Zitat, dessen erste Zeile `[!WARNING]` ist.
- Um einen Hinweis hinzuzufügen, erstellen Sie ein Zitat, dessen erste Zeile `[!CALLOUT]` ist.

Anmerkungen und Warnungen fügen dem Anfang der Ausgabe eine lokalisierte **Anmerkung:** oder **Warnung:** hinzu, während Hinweise dies nicht tun. Dies macht Hinweise zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

> [!WARNING]
> Im älteren MDN-Syntax wurde der Typ lokalisiert und dem ersten Absatz in Fettschrift hinzugefügt, z.B. `**Anmerkung:** Foo bar` anstelle von `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird zur Migration immer noch unterstützt. Vermeiden Sie die Verwendung in neuer Dokumentation.

> [!WARNING]
> Derzeit kann aufgrund eines [Prettier-Bugs](https://github.com/prettier/prettier/issues/15479) die GFM-Alarmsyntax nicht verwendet werden, wenn das erste Zeichen einer Anmerkung oder Warnung ein Formatierungssymbol ist, wie ein Backquote, Sternchen, eckige Klammer oder geschweifte Klammer. In diesem Fall verwenden Sie die alte Syntax `> **Anmerkung:**`. Autoren sind nicht verpflichtet, den Inhalt umzuformulieren, um den Formatierer zu umgehen.

Mehrere Zeilen werden durch eine leere Blockzitierzeile in der gleichen Weise wie normale Absätze erzeugt. Außerdem werden mehrere Zeilen ohne Leerzeichen auch wie normale Markdown-Zeilen behandelt und zusammengefügt.

Das Blockzitat kann Codeblöcke oder andere Blockelemente enthalten.

### Beispiele

#### Anmerkung

```md
> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.
```

Dies erzeugt das folgende HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten dargestellt:

> [!NOTE]
> So schreiben Sie eine Anmerkung.
>
> Sie kann mehrere Zeilen haben.

#### Warnungen

```md
> [!WARNING]
> This is how you write a warning.
>
> It can have multiple paragraphs.
```

Dies erzeugt das folgende HTML:

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten dargestellt:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann mehrere Absätze haben.

#### Hinweise

```md
> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.
```

Dies erzeugt das folgende HTML:

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten dargestellt:

> [!CALLOUT]
>
> **So schreiben Sie einen Hinweis.**
>
> Er kann mehrere Absätze haben.

#### Anmerkung, die einen Codeblock enthält

Dieses Beispiel enthält einen Codeblock.

````md
> [!NOTE]
> This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Like that.
````

Dies erzeugt das folgende HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

Dieses HTML wird mit einem Codeblock dargestellt:

> [!NOTE]
> So schreiben Sie eine Anmerkung.
>
> Sie kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So sieht das aus.

### Diskussion Referenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/3483> gelöst.

## Definitionslisten

Definitionslisten werden auf MDN häufig verwendet, aber nicht von GFM unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM-ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM `<ul>` enthält eine beliebige Anzahl von GFM `<li>`-Elementen der obersten Ebene.
- Jedes dieser GFM `<li>`-Elemente der obersten Ebene muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einziges GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " (Doppelpunkt gefolgt von einem Leerzeichen) beginnen muss. Dieses Element kann Blockelemente enthalten, einschließlich Absätze, Codeblöcke, eingebettete Listen und Anmerkungen.

Jedes dieser GFM `<li>`-Elemente der obersten Ebene wird als `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das GFM `<li>`-Element der obersten Ebene wird als GFM `<li>`-Element geparst und sein interner Inhalt bildet den Inhalt des `<dt>`, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht in den `<dt>` aufgenommen wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element geparst und sein interner Inhalt bildet den Inhalt des `<dd>`, wobei der führende ": " verworfen wird.

Zum Beispiel, dies ist ein `<dl>`:

````md
- term1

  - : My description of term1

- `term2`

  - : My description of term2

    It can have multiple paragraphs, and code blocks too:

    ```js
    const thing = 1;
    ```
````

In GFM/CommonMark würde dies das folgende HTML erzeugen:

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: My description of term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: My description of term2</p>
        <p>It can have multiple paragraphs, and code blocks too:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

Auf MDN würde dies das folgende HTML erzeugen:

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>My description of term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>My description of term2</p>
    <p>It can have multiple paragraphs, and code blocks too:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

Definitionslisten, die mit dieser Syntax geschrieben sind, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Anhand dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: Der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für diejenigen, die dies nicht tun, können Autoren auf rohe HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzigen `<dd>`-Element verknüpfen muss, stellen Sie sie als ein einzelnes `<dt>`-Element bereit, das mehrere Begriffe enthält, getrennt durch Kommas, wie dieses:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut mit Tools funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), während sie relativ einfach zu schreiben und zu parsen ist.

### Diskussion Referenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/4367> gelöst.

## Tabellen

GFM bietet eine Syntax zur Erstellung von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN nutzen. Es gibt jedoch Zeiten, in denen GFM-Tabellen nicht unseren Anforderungen entsprechen:

- Die GFM-Syntax unterstützt nur einen Teil der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die von GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die als "Eigenschaftentabelle" bezeichnet wird, die ihre eigene CSS-Klasse hat und daher immer HTML ist.

Das allgemeine Prinzip ist, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf rohes HTML zurückgreifen sollten, wenn sie müssen, oder wenn HTML lesbarer ist. Für weitere Informationen siehe [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwenden).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren diese Pipes jedoch einschließen. Darüber hinaus müssen die Autoren nachlaufende Leerzeichen in Zeilen bereitstellen, sodass alle Zellen in einer Spalte in Klartext gleich lang sind.

Das heißt, MDN-Autoren müssen diesen Stil verwenden:

```md example-good
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --------- | --------- |
| cell 1    | cell 2    | cell 3    |
| cell 4    | cell 5    | cell 6    |
```

und nicht diesen Stil:

```md-nolint example-bad
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --- |----------------------|
| cell 1 | cell 2 | cell 3 |
cell 4 | cell 5 | cell 6
```

Glücklicherweise wird die Tabellenformatierung von Prettier automatisch korrigiert, sodass sich Autoren auf Prettier verlassen können, um ihre Tabellen richtig zu formatieren.

### Wann HTML-Tabellen verwenden

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle namens "Eigenschaftstabelle".

#### Tabellenfunktionen, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM parst keine GFM-Blockelemente in Tabellenzellen. Sie können beispielsweise keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen dürfen keine Klassen zugewiesen bekommen.
- GFM unterstützt keine anderen Tabellenelemente als `<table>`, `<tr>`, `<th>` und `<td>`.
- GFM unterstützt keine Attribute von Tabellenelementen wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximalbreite von GFM-Tabellen

Auch wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII", "ASCII")}} Art"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn sich die Tabellenspalten in die Länge ziehen. Betrachten Sie die folgende Tabelle:

```html
<table>
  <tr>
    <th>A heading 1</th>
    <th>A heading 2</th>
    <th>A heading 3</th>
    <th>A heading 4</th>
    <th>A heading 5</th>
    <th>A heading 6</th>
  </tr>
  <tr>
    <td>Something shortish</td>
    <td>
      Something much longer that really goes into a lot of detail about
      something, so much so that the table formatting starts to look bad in GFM
      format.
    </td>
    <td>Something shortish</td>
    <td>
      Another cell with lots of text in it, that also really goes into a lot of
      detail about something, so much so that the table formatting starts to
      look bad in GFM format.
    </td>
    <td>Something shortish</td>
    <td>Something shortish</td>
  </tr>
</table>
```

In GFM sieht das so aus:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Dies führt uns zu folgender Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine spezifische Art von Tabelle, die für die Anzeige von strukturierten Eigenschaft-Wert-Inhalten auf einer Reihe von Seiten eines bestimmten Typs verwendet wird. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, und die zweite Spalte listet ihre Werte für dieses bestimmte Element auf. Zum Beispiel hier die Eigenschaftentabelle für das [`PannerNode`](/de/docs/Web/API/PannerNode)-Interface:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalzählmodus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können nicht in GFM dargestellt werden, da sie eine Kopfspalte haben, daher sollten Autoren HTML in diesem Fall verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussion Referenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900> gelöst.

## Hoch- und Tiefstellen

Autoren können bei Bedarf die HTML-Elemente {{HTMLElement("sup")}} und {{HTMLElement("sub")}} verwenden, sollten jedoch nach Möglichkeit Alternativen nutzen. Insbesondere:

- Zur Potenzschreibung verwenden Sie das Zirkumflex: `2^53`.
- Bei Ordnungszahlen wie 1<sup>st</sup> verwenden Sie vorzugsweise Wörter wie "erst".
- Für Fußnoten markieren Sie die Fußnotenzeichen nicht, z.B. `<sup>[1]</sup>`.

### Diskussion Referenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/4578> gelöst.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalt"-Absatz auf einer Seite—der erste Text, der nach den Front-Matter der Seite und nach allen [Sidebar](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#sidebar_generation) oder [Seitenbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) Makros erscheint.

Diese Zusammenfassung wird zur Suchmaschinenoptimierung (SEO) verwendet und wird auch automatisch zusammen mit Seitenaufrufen durch einige Makros einbezogen.
Der erste Absatz sollte daher sowohl kurz als auch informativ sein.

### Diskussion Referenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/3923> gelöst.

## KumaScript

Autoren können KumaScript-Makroaufrufe in Prosainhalten einfügen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property
sets the margin area on all four sides of an element. It is a shorthand for
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
and \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

The top and bottom margins have no effect on replaced inline elements, such as
\{{HTMLElement("span")}} or \{{HTMLElement("code")}}.
```

Siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen zu Makros.
