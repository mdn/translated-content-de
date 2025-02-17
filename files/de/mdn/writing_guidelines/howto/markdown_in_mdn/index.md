---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentationen auf den MDN Web Docs zu schreiben. Wir haben GitHub-Flavored Markdown (GFM) als Grundlage gewählt und einige Erweiterungen hinzugefügt, um bestimmte Anforderungen auf MDN zu erfüllen, die in GFM nicht direkt unterstützt werden.

## Grundlage: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie auf die GFM-Spezifikation zurückgreifen können, wenn etwas auf dieser Seite nicht explizit beschrieben wird. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Linktypen:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an einer anderen Stelle im Dokument definiert wird.

Auf MDN verwenden wir ausschließlich Inline-Links.

Dies ist die korrekte Art, GFM-Links auf MDN zu schreiben:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

Dies ist eine falsche Art, Links auf MDN zu schreiben:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Code-Zäune" verwenden, um `<pre>`-Blöcke zu markieren. Der öffnende Code-Zaun kann von einem Text gefolgt werden, der als "Info-String" bezeichnet wird. Die Spezifikation besagt Folgendes:

> Das erste Wort des Info-Strings wird typischerweise verwendet, um die Sprache des Codebeispiels anzugeben und wird im `class`-Attribut des Code-Tags dargestellt.

Es ist zulässig, dass der Info-String mehrere Wörter enthält, wie:

````md
```fee fi fo fum
// some example code
```
````

Auf MDN verwenden Autoren Code-Zäune für Beispiel-Codeblöcke. Sie müssen die Sprache des Codebeispiels mit dem ersten Wort des Info-Strings angeben, was für die Syntaxhervorhebung des Blocks genutzt wird. Folgende Wörter werden unterstützt:

- Programmiersprachen
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-ähnliche Sprachen
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
  - Sonstige
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (OpenGL Shaders)
    - `sql` - SQL-Befehle
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
- Kommandozeilen
  - `bash` - Bash/Shell
  - `batch` - Batch (Windows Shell)
  - `powershell` - PowerShell
- Konfigurations-/Datendateien
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
  - `pug` - [Pug-Templates](https://pugjs.org/api/getting-started.html) (die möglicherweise von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden)
- Sonstige
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

Falls die gewünschte Syntaxhervorhebung nicht oben gelistet ist, sollten Sie den Codeblock mit `plain` markieren. Zusätzliche Sprachen können über den [Diskussionsprozess auf GitHub](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

### Unterdrückung der Linter-Prüfung

Autoren können ein `-nolint`-Suffix zu einem beliebigen Sprachidentifikator hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten die passende Syntaxhervorhebung und werden vom Live-Beispiels-System erkannt, aber von Linter- oder Formatierungswerkzeugen wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen zu zeigen, die von Linter- oder Formatierungswerkzeugen nicht korrigiert werden sollen.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die Autoren zusätzliche Informationen zu einem Codeblock angeben lassen. Auf MDN werden Info-Strings in Klassenamen konvertiert.

Autoren können einen der folgenden Info-Strings angeben:

- `example-good`: Stile dieses Beispiel als gutes Beispiel (nachzuahmen).
- `example-bad`: Stile dieses Beispiel als schlechtes Beispiel (zu vermeiden).
- `hidden`: Rendere diesen Codeblock nicht auf der Seite. Dies ist für die Verwendung in Live-Beispielen gedacht.

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

Diese werden wie folgt gerendert:

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

### Diskussionsreferenz

Dieses Thema wurde abschließend behandelt in:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Hinweise, Warnungen und Hervorhebungen

Authors können die [GFM-Alert-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um spezifische Inhalte hervorzuheben. Es gibt drei Arten von Alerts: Hinweise, Warnungen und Hervorhebungen.

> [!NOTE]
> MDN Web Docs unterstützten Alerts früher mit einer eigenen Syntax, die als "Noteblocks" bezeichnet wurde.
> MDN unterstützt die folgenden GFM-Alert-Typen nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Notiz hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um eine Hervorhebung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Hinweise und Warnungen fügen eine lokalisierte **Hinweis:**- oder **Warnung:**-Markierung am Anfang der Ausgabe hinzu, während Hervorhebungen dies nicht tun. Dies macht Hervorhebungen geeignet, wenn ein Autor einen benutzerdefinierten Titel angeben möchte.

> [!WARNING]
> In der älteren MDN-Syntax wurde der Typ lokalisiert und in den ersten Absatz in Fettdruck eingefügt, z.B. `**Hinweis:** Foo bar` anstelle von `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird weiterhin für Migrationszwecke unterstützt. Vermeiden Sie deren Verwendung in neuer Dokumentation.

> [!WARNING]
> Derzeit kann aufgrund eines [Prettier-Bugs](https://github.com/prettier/prettier/issues/15479) die GFM-Alert-Syntax nicht verwendet werden, falls das erste Zeichen einer Notiz oder Warnung ein Formatierungssymbol ist, wie ein Backtick, ein Sternchen, eine eckige oder geschweifte Klammer. Verwenden Sie in diesem Fall die ältere Syntax `> **Hinweis:**`. Autoren sind nicht verpflichtet, den Inhalt umzuformulieren, um den Formatter zu umgehen.

Weitere Absätze innerhalb eines Blockzitats werden durch eine leere Zeile getrennt. Ebenso werden mehrere Zeilen ohne Leerzeichen wie normale Markdown-Zeilen behandelt und zusammengefügt.

Das Blockzitat kann Codeblöcke oder andere Blockelemente enthalten.

### Beispiele

#### Hinweis

```md
> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.
```

Das erzeugt folgendes HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

Dieses HTML wird als hervorgehobene Box angezeigt:

> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann aus mehreren Zeilen bestehen.

#### Warnungen

```md
> [!WARNING]
> This is how you write a warning.
>
> It can have multiple paragraphs.
```

Das erzeugt folgendes HTML:

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als hervorgehobene Box angezeigt:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann aus mehreren Absätzen bestehen.

#### Hervorhebungen

```md
> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.
```

Das erzeugt folgendes HTML:

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als hervorgehobene Box angezeigt:

> [!CALLOUT]
>
> **So schreiben Sie eine Hervorhebung.**
>
> Sie kann aus mehreren Absätzen bestehen.

#### Hinweis mit Codeblock

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

Das erzeugt folgendes HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

Dieses HTML wird wie folgt mit einem Codeblock gerendert:

> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann Codeblöcke enthalten.
>
> ```js
> const s = "Ich bin in einem Codeblock";
> ```
>
> Genau so.

### Diskussionsreferenz

Dieses Thema wurde abschließend behandelt in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig in MDN verwendet, sind jedoch nicht in GFM unterstützt. MDN führt ein eigenes Format für Definitionslisten ein, das eine modifizierte Form einer GFM-ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM-`<ul>`-Liste enthält beliebig viele oberste GFM-`<li>`-Elemente.
- Jedes dieser obersten GFM-`<li>`-Elemente muss als letztes Element eine verschachtelte GFM-`<ul>`-Liste enthalten.
- Diese verschachtelte `"<ul>`-Liste muss ein einzelnes GFM-`<li>`-Element enthalten, dessen Textinhalt mit ": " (Doppelpunkt gefolgt von einem Leerzeichen) beginnt. Dieses Element kann Blockelemente, einschließlich Absätze, Codeblöcke, eingebettete Listen und Hinweise, enthalten.

Jedes dieser obersten GFM-`<li>`-Elemente wird in ein `<dt>`/`<dd>`-Paar transformiert, wie folgt:

- Das oberste GFM-`<li>`-Element wird als GFM-`<li>`-Element geparst und sein interner Inhalt bildet den Inhalt des `<dt>`, mit Ausnahme der letzten verschachtelten `<ul>`-Liste, die nicht in das `<dt>` aufgenommen wird.
- Das `<li>`-Element in der letzten verschachtelten `<ul>`-Liste wird als GFM-`<li>`-Element analysiert und sein interner Inhalt bildet den Inhalt des `<dd>`, außer dem führenden ": ", das verworfen wird.

Beispielsweise erzeugt dies ein `<dl>`:

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

In GFM/CommonMark ergibt dies folgendes HTML:

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

Auf MDN ergibt dies folgendes HTML:

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

Definitionslisten, die mit dieser Syntax geschrieben sind, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu erstellen: Der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für die wenigen Fälle, in denen dies nicht der Fall ist, können Autoren auf reines HTML zurückgreifen.

Dies ist nicht zulässig:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzelnen `<dd>` verknüpfen muss, können diese als einzelnes `<dt>` bereitgestellt werden, das mehrere Begriffe enthält, getrennt durch Kommas, z. B. so:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Die Begründung für die hier beschriebene Syntax ist, dass sie gut mit Werkzeugen funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Previews), während sie relativ einfach zu schreiben und zu parsen ist.

### Diskussionsreferenz

Dieses Thema wurde abschließend behandelt in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN verwenden. Es gibt jedoch Situationen, in denen GFM-Tabellen unsere Anforderungen nicht erfüllen:

- Die GFM-Syntax unterstützt nur einen Teil der Funktionen, die in HTML verfügbar sind. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle namens "Properties Table", die ihre eigene CSS-Klasse hat und daher immer HTML ist.

Das Prinzip lautet also, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf reines HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwenden).

### Stil der GFM-Tabellensyntax

In der GFM-Tabellensyntax können Autoren die führenden und abschließenden Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren jedoch diese Pipes einschließen. Zusätzlich müssen Autoren am Ende der Zeilen Leerzeichen hinzufügen, damit alle Zellen in einer Spalte im Klartext dieselbe Länge haben.

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

Glücklicherweise wird die Tabellenformatierung von Prettier automatisch korrigiert, sodass sich die Autoren auf Prettier verlassen können, um ihre Tabellen korrekt zu formatieren.

### Wann HTML-Tabellen verwenden

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Tabellentyp namens "Properties Table".

#### Tabellenfunktionen, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM parst keine GFM-Blockelemente in Tabellenzellen. Beispielsweise kann in einer Tabellenzelle keine Liste verwendet werden.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine weiteren Tabellenelemente über `<table>`, `<tr>`, `<th>` und `<td>` hinaus.
- GFM unterstützt keine Attribute von Tabellenelementen wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte die Tabelle in HTML geschrieben werden.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies die GFM-Syntax ebenfalls ausschließen würde.

#### Maximale Breite von GFM-Tabellen

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII", "ASCII")}}-Art"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn die Tabellenzeilen zu lang werden. Betrachten Sie die folgende Tabelle:

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

In GFM sieht dies wie folgt aus:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Daraus ergibt sich die folgende Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle._

#### Properties Tables

Properties Tables sind eine spezielle Art von Tabelle, die zum Anzeigen von strukturierten Eigenschaft-Wert-Inhalten über eine Reihe von Seiten eines bestimmten Typs verwendet wird. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, die zweite Spalte listet deren Werte für dieses spezifische Element auf. Zum Beispiel sieht die Properties Table für das [`PannerNode`](/de/docs/Web/API/PannerNode)-Interface wie folgt aus:

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
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können nicht in GFM dargestellt werden, da sie eine Kopfspalte haben. Autoren sollten daher in diesem Fall HTML verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren die Klasse `"properties"` auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Thema wurde abschließend behandelt in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Superscript und Subscript

Autoren können bei Bedarf die HTML {{HTMLElement("sup")}} und {{HTMLElement("sub")}}-Elemente verwenden, sollten jedoch, wenn möglich, Alternativen verwenden. Insbesondere:

- Für Exponentiation verwenden Sie das Zirkumflex: `2^53`.
- Für Ordinalzahlen wie 1<sup>st</sup> bevorzugen Sie Formulierungen wie "erster".
- Für Fußnoten markieren Sie keine Fußnotenzeichen, z. B. `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Thema wurde abschließend behandelt in <https://github.com/mdn/content/issues/4578>.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalts"-Absatz auf einer Seite — der erste Text, der nach den Metadaten der Seite und allen [Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) oder [Banner-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) erscheint.

Diese Zusammenfassung wird sowohl für die Suchmaschinenoptimierung (SEO) verwendet als auch automatisch zusammen mit Seitenlisten von einigen Makros eingebunden. Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussionsreferenz

Dieses Thema wurde abschließend behandelt in <https://github.com/mdn/content/issues/3923>.

## KumaScript

Autoren können KumaScript-Makroaufrufe in Fließtext einfügen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property
sets the margin area on all four sides of an element. It is a shorthand for
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
and \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

The top and bottom margins have no effect on replaced inline elements, such as
\{{HTMLElement("span")}} or \{{HTMLElement("code")}}.
```

Weitere Informationen zu Makros finden Sie unter [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).
