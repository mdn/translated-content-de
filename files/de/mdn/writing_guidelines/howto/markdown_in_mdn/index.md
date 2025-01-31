---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentationen in den MDN Web Docs zu schreiben. Wir haben GitHub-Flavored Markdown (GFM) als Grundlage gewählt und einige Erweiterungen hinzugefügt, um einige der Dinge zu unterstützen, die wir auf MDN tun müssen, die in GFM nicht sofort unterstützt werden.

## Grundlage: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich an die GFM-Spezifikation halten können für alles, was nicht ausdrücklich auf dieser Seite spezifiziert wird. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [inline links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [reference links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert wird.

Auf MDN erlauben wir nur Inline-Links.

Dies ist die korrekte Art, GFM-Links auf MDN zu schreiben:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

Dies ist eine inkorrekte Art, Links auf MDN zu schreiben:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Code fences" verwenden, um `<pre>`-Blöcke abzugrenzen. Der eröffnende Code fence kann von einem Text gefolgt werden, der als "info string" bezeichnet wird. Die Spezifikation besagt Folgendes:

> Das erste Wort des Info-Strings wird typischerweise verwendet, um die Sprache des Codesamples anzugeben und im class-Attribut des Codetags gerendert.

Es ist erlaubt, dass der Info-String mehrere Wörter enthält, wie zum Beispiel:

````md
```fee fi fo fum
// some example code
```
````

Bei MDN verwenden Autoren Code fences für Beispiel-Codeblöcke. Sie müssen die Sprache des Codesamples mit dem ersten Wort des Info-Strings angeben, und dies wird verwendet, um Syntaxhervorhebungen für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

- Programmiersprachen
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-ähnlich
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
  - Andere
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (OpenGL Shaders)
    - `sql` - SeQueL-Kommandos
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
- Kommandoeingaben
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
- Vorlagen
  - `django` - Django-Vorlagen
  - `svelte` - Svelte-Vorlagen
  - `handlebars` - Handlebars-Vorlagen
  - `pug` - [Pug-Vorlagen](https://pugjs.org/api/getting-started.html) (die von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden können)
- Andere
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

Wenn die gewünschte Hervorhebung nicht oben aufgeführt ist, sollten Sie den Codeblock als `plain` markieren.
Zusätzliche Sprachen können im Prozess [auf GitHub angefragt werden](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

### Linting unterdrücken

Autoren können einem der Sprachkennungen ein `-nolint` Suffix hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Codeblöcke wie dieser erhalten die entsprechende Syntaxhervorhebung und werden vom Live-Beispiels-System erkannt, aber sie werden von Lintern oder automatischen Formatierwerkzeugen wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen anzuzeigen, die Linter oder Formatierer nicht beheben sollen.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [info strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings angeben:

- `example-good`: dieses Beispiel als gutes Beispiel (dem man folgen sollte) stilisieren
- `example-bad`: dieses Beispiel als schlechtes Beispiel (das man vermeiden sollte) stilisieren
- `hidden`: diesen Codeblock auf der Seite nicht rendern. Dies ist für die Verwendung in Live-Beispielen bestimmt.

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

Diese werden gerendert als:

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

### Diskussionsreferenz

Dieses Problem wurde gelöst in:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Anmerkungen, Warnungen und Hinweiskästen

Autoren können die [GFM alerts syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um aufmerksam auf Inhalte zu machen. Es gibt drei Arten von Hinweisen: Anmerkungen, Warnungen und Hinweiskästen.

> [!NOTE]
> MDN Web Docs unterstützte Warnungen mit seiner eigenen Syntax vor der Unterstützung von GFM alerts und bezeichnete sie als "noteblocks".
> MDN unterstützt die folgenden GFM alerts nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Anmerkung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um einen Hinweiskasten hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Anmerkungen und Warnungen fügen am Anfang der Ausgabe ein lokalisiertes **Note:** oder **Warning:** hinzu, während Hinweiskästen dies nicht tun. Dies macht Hinweiskästen zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

> [!WARNING]
> In der älteren MDN-Syntax wurde der Typ lokalisiert und dem ersten Absatz in fett gedrucktem Text hinzugefügt, z. B. `**Note:** Foo bar` anstatt `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird aus Migrationszwecken weiterhin unterstützt. Vermeiden Sie die Verwendung in neuer Dokumentation.

> [!WARNING]
> Derzeit kann aufgrund eines [Prettier-Fehlers](https://github.com/prettier/prettier/issues/15479) die GFM alert syntax nicht verwendet werden, wenn das erste Zeichen einer Anmerkung oder Warnung ein Formatierungssymbol ist, wie ein Backquote, ein Asterisk, eine eckige Klammer oder eine geschweifte Klammer. Verwenden Sie in diesem Fall die alte Syntax `> **Note:**`. Autoren müssen den Inhalt nicht umformulieren, um den Formatierer zu umgehen.

Mehrere Zeilen werden durch eine leere Blockzitat-Zeile auf dieselbe Weise wie normale Absätze erzeugt. Außerdem werden mehrere Zeilen ohne Leerzeichen auch wie normale Markdown-Zeilen behandelt und zusammengefügt.

Das Blockzitat kann Codeblöcke oder andere Blockelemente enthalten.

### Beispiele

#### Anmerkung

```md
> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.
```

Dies wird das folgende HTML erzeugen:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

Dieses HTML wird als ein hervorgehobenes Feld gerendert:

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

Dies wird das folgende HTML erzeugen:

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als ein hervorgehobenes Feld gerendert:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann mehrere Absätze haben.

#### Hinweiskästen

```md
> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.
```

Dies wird das folgende HTML erzeugen:

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als ein hervorgehobenes Feld gerendert:

> [!CALLOUT]
>
> **So schreiben Sie einen Hinweiskasten.**
>
> Er kann mehrere Absätze haben.

#### Anmerkung mit einem Codeblock

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

Dies wird das folgende HTML erzeugen:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

Dieses HTML wird mit einem Codeblock gerendert:

> [!NOTE]
> So schreiben Sie eine Anmerkung.
>
> Sie kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So etwas.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/3483> gelöst.

## Definitionslisten

Definitionslisten werden bei MDN häufig verwendet, werden jedoch von GFM nicht unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form von GFM-Unsortierten Listen ({{HTMLElement("ul")}}) ist. In diesem Format:

- Der GFM `<ul>` enthält beliebig viele Top-Level-GFM-`<li>`-Elemente.
- Jedes dieser Top-Level-GFM-`<li>`-Elemente muss als dessen finales Element ein GFM-`<ul>`-Element enthalten.
- Dieses finale verschachtelte `<ul>` muss ein einzelnes GFM-`<li>`-Element enthalten, dessen Textinhalt mit ": " beginnen muss (ein Doppelpunkt gefolgt von einem Leerzeichen). Dieses Element kann Blockelemente enthalten, einschließlich Absätze, Codeblöcke, eingebettete Listen und Anmerkungen.

Jedes dieser Top-Level-GFM-`<li>`-Elemente wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das Top-Level-GFM-`<li>`-Element wird als GFM-`<li>`-Element geparst und dessen interner Inhalt wird den Inhalt des `<dt>` bilden, mit Ausnahme des finalen verschachtelten `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im finalen verschachtelten `<ul>` wird als GFM-`<li>`-Element geparst und dessen interner Inhalt wird den Inhalt des `<dd>` bilden, mit Ausnahme des vorangestellten ": ", das verworfen wird.

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

Definitionslisten, die mit dieser Syntax geschrieben wurden, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: der Parser wird dies als Fehler behandeln. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für diejenigen, die dies nicht tun, können Autoren auf rohes HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzigen `<dd>`-Element verknüpfen muss, ziehen Sie in Betracht, diese als ein einzelnes `<dt>` bereitzustellen, das mehrere Begriffe enthält, die durch Kommas getrennt sind, wie dies:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut funktioniert mit Werkzeugen, die CommonMark erwarten (wie zum Beispiel Prettier oder GitHub-Vorschauen), während sie relativ einfach zu schreiben und zu parsen ist.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/4367> gelöst.

## Tabellen

GFM bietet eine Syntax zur Erstellung von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir in MDN verwenden. Es gibt jedoch Zeiten, in denen GFM-Tabellen nicht unseren Bedürfnissen entsprechen:

- Die GFM-Syntax unterstützt nur eine Teilmenge der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die als "Eigenschaften-Tabelle" bezeichnet wird und eine eigene CSS-Klasse hat, weshalb sie immer HTML ist.

Das allgemeine Prinzip lautet, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und zu rohem HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwenden).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren diese Pipes jedoch einfügen. Darüber hinaus müssen Autoren für die Zeilen abschließende Leerzeichen bereitstellen, sodass alle Zellen in einer Spalte im Klartext gleich lang sind.

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

Glücklicherweise wird die Tabellenformatierung von Prettier automatisch korrigiert, sodass sich Autoren auf Prettier verlassen können, um ihre Tabellen korrekt zu formatieren.

### Wann HTML-Tabellen verwenden

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um im Klartext lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle verwenden, die als "Eigenschaftentabelle" bezeichnet wird.

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Header-Spalte haben.
- GFM wird GFM-Blockelemente in Tabellenzellen nicht parsen. Zum Beispiel können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine Tabellenelemente über `<table>`, `<tr>`, `<th>` und `<td>` hinaus.
- GFM unterstützt keine Tabellenattributen wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließt.

#### Maximale Breite der GFM-Tabelle

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, sollte manchmal besser HTML verwenden, weil GFM einen "{{Glossary("ASCII", "ASCII")}} Art" Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

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

In GFM wird dies so aussehen:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Dies führt uns zum folgenden Leitfaden: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine spezifische Art von Tabelle, die verwendet wird, um strukturierte Eigenschaft-Wert-Inhalte über eine Reihe von Seiten eines bestimmten Typs anzuzeigen. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfzeilenspalte und listet die Eigenschaften auf, und die zweite Spalte listet ihre Werte für diesen bestimmten Artikel auf. Zum Beispiel, hier ist die Eigenschaftstabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode) Schnittstelle:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
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
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können nicht in GFM dargestellt werden, da sie eine Kopfzeilenspalte haben, also sollten Autoren in diesem Fall HTML verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> und <https://github.com/mdn/content/issues/7898#issuecomment-913265900> gelöst.

## Hoch- und Tiefstellungen

Autoren können die HTML-{{HTMLElement("sup")}} und {{HTMLElement("sub")}}-Elemente verwenden, wenn nötig, sollten aber Alternativen verwenden, wenn möglich. Insbesondere:

- Für Exponentiation verwenden Sie das Caret: `2^53`.
- Für ordinale Ausdrücke wie 1<sup>st</sup> bevorzugen Sie Worte wie "erstens".
- Für Fußnoten markieren Sie die Fußnotenzeichen nicht, z. B. `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/4578> gelöst.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalts"-Absatz auf einer Seite—der erste Text, der nach der Seiten-Front-Matter und eventuellen [Sidebar](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#sidebar_generation) oder [Seitenbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) Makros erscheint.

Diese Zusammenfassung wird für die Suchmaschinenoptimierung (SEO) verwendet und auch automatisch neben Seitenlisten von einigen Makros aufgenommen.
Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/3923> gelöst.

## KumaScript

Autoren können KumaScript-Makroaufrufe in Prosa-Inhalte einfügen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property
sets the margin area on all four sides of an element. It is a shorthand for
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
and \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

The top and bottom margins have no effect on replaced inline elements, such as
\{{HTMLElement("span")}} or \{{HTMLElement("code")}}.
```

Siehe [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen zu Makros.
