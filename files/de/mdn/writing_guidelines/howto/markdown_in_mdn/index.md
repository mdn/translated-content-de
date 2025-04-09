---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentation auf den MDN Web Docs zu schreiben. Wir haben uns für GitHub-Flavored Markdown (GFM) als Basis entschieden und Erweiterungen hinzugefügt, um die Anforderungen auf MDN zu erfüllen.

## Basis: GitHub-Flavored Markdown

Die Basis für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können für alles, was in dieser Seite nicht ausdrücklich festgelegt ist. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert ist.

Auf MDN erlauben wir nur Inline-Links. Dies ist der richtige Weg, um GFM-Links auf MDN zu schreiben:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

Dies ist ein falscher Weg, um Links auf MDN zu schreiben:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Code-Zäune" verwenden, um `<pre>`-Blöcke zu kennzeichnen. Der öffnende Code-Zaun kann von einem Text gefolgt werden, der als "Info-String" bezeichnet wird. Die Sprache des Codebeispiels muss unter Verwendung des ersten Wortes des Info-Strings festgelegt werden, und dies wird verwendet, um Syntax-Highlighting für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

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
    - `sql` - SeQueL-Befehle
    - `wat` - WebAssembly
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
- Eingabeaufforderungen
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
  - `hbs` - Handlebars-Vorlagen
  - `pug` - [Pug-Vorlagen](https://pugjs.org/api/getting-started.html) (die möglicherweise von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden)
- Andere
  - `plain` - Einfacher Text
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

Wenn das gewünschte Highlighting nicht in der Liste aufgeführt ist, sollten Sie den Codeblock als `plain` markieren. Zusätzliche Sprachen können im Prozess [auf GitHub besprochen](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

> [!NOTE]
> Verwenden Sie die Sprachkennung genau wie oben aufgeführt. Zum Beispiel ist `javascript` nicht erlaubt und Sie müssen `js` schreiben.

### Linting unterdrücken

Autoren können ein `-nolint`-Suffix zu jeder der Sprachkennungen hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten das entsprechende Syntax-Highlighting und werden vom Live-Beispielsystel erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierung darzustellen, die Linter oder Formatter nicht beheben sollten.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), mit denen Autoren zusätzliche Informationen zu einem Codeblock angeben können. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings angeben:

- `example-good`: Dieses Beispiel als ein gutes Beispiel (nachzuahmen) gestalten
- `example-bad`: Dieses Beispiel als ein schlechtes Beispiel (zu vermeiden) gestalten
- `hidden`: Diesen Codeblock auf der Seite nicht rendern. Dies ist für die Verwendung in Live-Beispielen.

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

### Diskussion Referenz

Dieses Problem wurde gelöst in:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Hinweise, Warnungen und Hinweise

Autoren können die [GFM-Alerts-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besondere Aufmerksamkeit auf Inhalte zu lenken. Es gibt drei Arten von Alerts: Hinweise, Warnungen und Hinweise.

> [!NOTE]
> MDN Web Docs unterstützten Alerts mit eigener Syntax vor der Unterstützung für GFM-Alerts und bezeichneten sie als "Noteblocks".
> MDN unterstützt nicht die folgenden GFM-Alerts: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um einen Hinweis hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um einen Hinweis hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Hinweise und Warnungen fügen dem Anfang der Ausgabe ein lokalisiertes **Hinweis:** oder **Warnung:** hinzu, während Hinweise dies nicht tun. Dies macht Hinweise zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

> [!WARNING]
> In der älteren MDN-Syntax wurde der Typ lokalisiert und dem ersten Absatz in Fettdruck hinzugefügt, z.B. `**Hinweis:** Foo bar` anstelle von `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird aus Migrationsgründen weiterhin unterstützt. Vermeiden Sie die Verwendung in neuer Dokumentation.

> [!WARNING]
> Aufgrund eines [Prettier-Bugs](https://github.com/prettier/prettier/issues/15479) kann die GFM-Alerts-Syntax derzeit nicht verwendet werden, wenn das erste Zeichen eines Hinweises oder einer Warnung ein Formatierungssymbol ist, wie beispielsweise ein Backquote, ein Sternchen, eine eckige oder geschweifte Klammer. In diesem Fall verwenden Sie die alte Syntax `> **Hinweis:**`. Autoren müssen den Inhalt nicht umformulieren, um den Formatter zu umgehen.

Mehrere Zeilen werden durch eine leere Blockzitatzeile auf die gleiche Weise wie normale Absätze erzeugt. Darüber hinaus werden mehrere Zeilen ohne Leerzeichen wie normale Markdown-Zeilen behandelt und verketten.

Das Blockzitat kann Codeblöcke oder andere Blockelemente enthalten.

### Beispiele

#### Hinweis

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

Dieses HTML wird als hervorgehobenes Feld gerendert:

> [!NOTE]
> So schreiben Sie einen Hinweis.
>
> Er kann mehrere Zeilen haben.

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

Dieses HTML wird als hervorgehobenes Feld gerendert:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Es kann mehrere Absätze haben.

#### Hinweise

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

Dieses HTML wird als hervorgehobenes Feld gerendert:

> [!CALLOUT]
>
> **So schreiben Sie einen Hinweis.**
>
> Er kann mehrere Absätze haben.

#### Hinweis mit einem Codeblock

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

Dieses HTML wird als mit einem Codeblock gerendert:

> [!NOTE]
> So schreiben Sie einen Hinweis.
>
> Er kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So geht's.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, aber von GFM nicht unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Das GFM `<ul>` enthält eine beliebige Anzahl von GFM `<li>`-Elementen auf oberster Ebene.
- Jedes dieser GFM `<li>`-Elemente auf oberster Ebene muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einziges GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " beginnt (ein Doppelpunkt gefolgt von einem Leerzeichen). Dieses Element kann Blockelemente enthalten, einschließlich Absätzen, Codeblöcken, eingebetteten Listen und Hinweisen.

Jedes dieser GFM `<li>`-Elemente auf oberster Ebene wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das GFM `<li>`-Element auf oberster Ebene wird als GFM `<li>`-Element analysiert, und sein interner Inhalt wird den Inhalt des `<dt>` darstellen, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht in das `<dt>` einbezogen wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element analysiert, und sein interner Inhalt wird den Inhalt des `<dd>` darstellen, mit Ausnahme des führenden ": ", das verworfen wird.

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

Definitionslisten, die mit dieser Syntax geschrieben wurden, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Es ist nicht möglich, mit dieser Syntax eine Liste mit mehr als einem aufeinander folgenden `<dt>`-Element oder mehr als einem aufeinander folgenden `<dd>`-Element zu schreiben: der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für die, die dies nicht tun, können Autoren auf Roh-HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzigen `<dd>`-Element verknüpfen muss, kann erwogen werden, diese als ein einziges `<dt>` bereitzustellen, das mehrere Begriffe enthält, getrennt durch Kommas, wie folgt:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut mit Tools funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Previews), während sie sich relativ einfach schreiben und parsen lässt.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN nutzen. Es gibt jedoch Zeiten, in denen GFM-Tabellen nicht unseren Anforderungen entsprechen:

- Die GFM-Syntax unterstützt nur einen Teil der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die als "Eigenschaftstabelle" bezeichnet wird und immer HTML ist.

Das allgemeine Prinzip ist, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf Roh-HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwenden).

### GFM-Tabellensyntax Stil

In der GFM-Tabellen-Syntax können Autoren führende und abschließende Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren jedoch diese Pipes einschließen. Außerdem müssen Autoren in den Zeilen abschließende Leerzeichen bereitstellen, sodass alle Zellen in einer Spalte im Klartext gleich lang sind.

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

Tabellen werden von Prettier formatiert, sodass Autoren auf Tools zurückgreifen, um Tabellen ordnungsgemäß zu formatieren.

### Wann HTML-Tabellen verwenden

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle, die als "Eigenschaftstabelle" bezeichnet wird.

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM verarbeitet keine GFM-Blockelemente in Tabellenzellen. Zum Beispiel können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine anderen Tabellenelemente als `<table>`, `<tr>`, `<th>` und `<td>`.
- GFM unterstützt keine Tabellenattribut wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen auf Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite von GFM-Tabellen

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII", "ASCII")}}-Kunst"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

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

In GFM sieht dies so aus:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Dies führt zu der folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine spezifische Art von Tabelle, die zum Anzeigen von strukturierten Eigenschaft-Wert-Inhalten auf einer Reihe von Seiten eines bestimmten Typs verwendet wird. Diese Tabellen haben zwei Spalten: die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, und die zweite Spalte listet ihre Werte für dieses bestimmte Element auf. Hier ist zum Beispiel die Eigenschaftstabelle für das [`PannerNode`](/de/docs/Web/API/PannerNode)-Interface:

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
      <td><code>"explizit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"Lautsprecher"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können nicht in GFM dargestellt werden, da sie eine Kopfspalte haben, daher sollten Autoren in diesem Fall HTML verwenden. Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Hoch- und Tiefstellen

Autoren können die HTML {{HTMLElement("sup")}}- und {{HTMLElement("sub")}}-Elemente verwenden, falls erforderlich, sollten jedoch nach Möglichkeit Alternativen verwenden. Insbesondere:

- Für Exponentialdarstellung nutzen Sie das Caret: `2^53`.
- Für Ordnungsarten wie 1<sup>st</sup> bevorzugen Sie Wörter wie "erster".
- Für Fußnoten markieren Sie die Fußnotenzitate nicht, z.B. `<sup>[1]</sup>`.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitenübersicht

Die _Seitenübersicht_ ist der erste "Inhalt"-Absatz einer Seite—der erste Text, der nach der Seite-Metadatenvorlage und allen [Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) oder [Seitenbannern](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) Makros erscheint.

Diese Zusammenfassung wird für Suchmaschinenoptimierung (SEO) genutzt und auch automatisch zusammen mit Seitenlisten durch einige Makros eingebunden. Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3923>.

## Makros

Autoren verwenden Makros im Text, um geläufige Verlinkungsmuster zu templaten oder um spezifische Code- oder Textblöcke einzubinden:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen.
