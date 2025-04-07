---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentation auf MDN Web Docs zu schreiben. Wir haben uns für GitHub-Flavored Markdown (GFM) als Grundlage entschieden und Erweiterungen hinzugefügt, um die Anforderungen von MDN zu unterstützen.

## Grundlage: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Dies bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können, wenn etwas auf dieser Seite nicht ausdrücklich angegeben ist. GFM ist wiederum eine Erweiterung von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel unmittelbar nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert wird.

Auf MDN erlauben wir nur Inline-Links. Dies ist die korrekte Vorgehensweise, um GFM-Links auf MDN zu schreiben:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

Dies ist eine inkorrekte Vorgehensweise, um Links auf MDN zu schreiben:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Codezaun" verwenden, um `<pre>`-Blöcke zu markieren. Der öffnende Codezaun kann von einem Text gefolgt werden, der als "Info-String" bezeichnet wird. Die Sprache des Codebeispiels muss mit dem ersten Wort des Info-Strings angegeben werden, und diese wird verwendet, um die Syntaxhervorhebung für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

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
  - `sql` - SQL Datenbank
  - `ignore` - Gitignore Datei
  - `apacheconf` - Apache-Konfiguration
  - `nginx` - NGINX-Konfiguration
- Vorlagen
  - `django` - Django-Vorlagen
  - `svelte` - Svelte-Vorlagen
  - `hbs` - Handlebars-Vorlagen
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

Wenn die von Ihnen gewünschte Hervorhebung nicht in der obigen Liste enthalten ist, sollten Sie den Codeblock als `plain` markieren. Zusätzliche Sprachen können im Prozess [auf GitHub diskutiert](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) werden.

> [!NOTE]
> Verwenden Sie den Sprachidentifier genau wie oben aufgeführt. Zum Beispiel ist `javascript` nicht erlaubt, Sie müssen `js` schreiben.

### Linting unterdrücken

Autoren können ein `-nolint`-Suffix zu jedem der Sprachidentifier hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Codeblöcke wie dieser erhalten eine entsprechende Syntaxhervorhebung und werden vom Live-Beispiel-System erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen anzuzeigen, die Linter oder Formatierer nicht beheben sollten.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen über einen Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings bereitstellen:

- `example-good`: Dieser Beispielstil wird als gutes Beispiel (zur Nachahmung) angezeigt.
- `example-bad`: Dieser Beispielstil wird als schlechtes Beispiel (zu vermeiden) angezeigt.
- `hidden`: Dieser Codeblock wird auf der Seite nicht gerendert. Dies wird für Live-Beispiele verwendet.

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

## Hinweise, Warnungen und Hinweise

Autoren können die [GFM-Alarm-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besonders auf Inhalte hinzuweisen. Es gibt drei Arten von Warnungen: Hinweise, Warnungen und Callouts.

> [!NOTE]
> MDN Web Docs hat Alarme mit ihrer eigenen Syntax unterstützt, bevor es Unterstützung für GFM-Alarme gab, und sie als "Notizblöcke" bezeichnet.
> MDN unterstützt die folgenden GFM-Alarme nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um einen Hinweis hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um einen Callout hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Hinweise und Warnungen fügen einen lokalisierten **Hinweis:** oder **Warnung:** am Anfang der Ausgabe hinzu, während Callouts dies nicht tun. Dies macht Callouts zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

> [!WARNING]
> In der älteren MDN-Syntax wurde der Typ lokalisiert und dem ersten Absatz in fettem Text hinzugefügt, also `**Hinweis:** Foo bar` statt `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird aus Migrationsgründen weiterhin unterstützt. Vermeiden Sie ihre Verwendung in neuer Dokumentation.

> [!WARNING]
> Aufgrund eines [Prettier-Bugs](https://github.com/prettier/prettier/issues/15479) kann die GFM-Alarm-Syntax derzeit nicht verwendet werden, wenn das erste Zeichen eines Hinweises oder einer Warnung ein Formatierungssymbol ist, wie z.B. ein Backquote, Sternchen, eckige Klammer oder geschweifte Klammer. In diesem Fall verwenden Sie die alte Syntax `> **Hinweis:**` stattdessen. Autoren müssen den Inhalt nicht umformulieren, um die Einschränkung des Formatierers zu umgehen.

Mehrere Zeilen werden wie bei normalen Absätzen durch eine leere Blockzitatzeile produziert. Außerdem werden mehrere Zeilen ohne Leerzeichen wie normale Markdown-Zeilen behandelt und verkettet.

Das Blockzitat kann Codeblöcke oder andere Blockelemente enthalten.

### Beispiele

#### Hinweis

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

Dieses HTML wird als hervorgehobenes Kästchen gerendert:

> [!NOTE]
> So schreiben Sie einen Hinweis.
>
> Es kann mehrere Zeilen haben.

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

Dieses HTML wird als hervorgehobenes Kästchen gerendert:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Es kann mehrere Absätze haben.

#### Callouts

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

Dieses HTML wird als hervorgehobenes Kästchen gerendert:

> [!CALLOUT]
>
> **So schreiben Sie einen Callout.**
>
> Es kann mehrere Absätze haben.

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

Dies erzeugt das folgende HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

Dieses HTML wird wie ein Codeblock gerendert:

> [!NOTE]
> So schreiben Sie einen Hinweis.
>
> Es kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So wie das.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, aber von GFM nicht unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM `<ul>` enthält eine beliebige Anzahl von GFM `<li>`-Elementen auf oberster Ebene.
- Jedes dieser GFM `<li>`-Elemente auf oberster Ebene muss am Ende ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einzelnes GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " (einem Doppelpunkt, gefolgt von einem Leerzeichen) beginnen muss. Dieses Element kann Blockelemente, einschließlich Absätze, Codeblöcke, eingebettete Listen und Notizen enthalten.

Jedes dieser GFM `<li>`-Elemente auf oberster Ebene wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das GFM `<li>`-Element auf oberster Ebene wird als GFM `<li>`-Element analysiert und sein interner Inhalt bildet den Inhalt des `<dt>`, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element analysiert und sein interner Inhalt bildet den Inhalt des `<dd>`, außer dem führenden ": ", das verworfen wird.

Beispielsweise ist dies ein `<dl>`:

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

Mit diesem Syntax muss die Definitionsliste aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für solche, die dies nicht tun, können Autoren auf reines HTML zurückgreifen.

Dies ist nicht zulässig:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzigen `<dd>`-Element verknüpfen muss, sollten diese als einzelnes `<dt>`-Element bereitgestellt werden, das mehrere Begriffe enthält, getrennt durch Kommas, so:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut mit Tools funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), während sie relativ einfach zu schreiben und zu analysieren ist.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN verwenden. Es gibt jedoch Zeiten, in denen GFM-Tabellen nicht unseren Anforderungen entsprechen:

- Die GFM-Syntax unterstützt nur ein Unterset der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, genannt "Eigenschaftstabelle", die ihre eigene CSS-Klasse hat und daher immer HTML ist.

Das allgemeine Prinzip lautet, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wann immer sie können, und auf HTML zurückgreifen sollten, wenn es notwendig ist oder wenn HTML besser lesbar ist. Für weitere Informationen siehe [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwenden).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende senkrechte Striche für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren diese senkrechten Striche jedoch einfügen. Darüber hinaus müssen Autoren Leerzeichen am Ende der Zeilen bereitstellen, damit alle Zellen in einer Spalte im Klartext die gleiche Länge haben.

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

Tabellen werden von Prettier formatiert, sodass Autoren sich auf Tools verlassen, um Tabellen korrekt zu formatieren.

### Wann HTML-Tabellen verwenden

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle von GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle namens "Eigenschaftstabelle".

#### Tabellenfunktionen, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM analysiert keine GFM-Blockelemente in Tabellenzellen. Beispielsweise können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine anderen Tabellenelemente als `<table>`, `<tr>`, `<th>` und `<td>`.
- GFM unterstützt keine Tabellenelementattribute wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite von GFM-Tabellen

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, weil GFM einen "{{Glossary("ASCII", "ASCII")}}-Art"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

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

In GFM wird sie so aussehen:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Dies führt uns zur folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle._

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine spezifische Art von Tabelle, die zum Anzeigen von strukturierten Eigenschaft-Wert-Inhalten über einen Satz von Seiten eines bestimmten Typs verwendet wird. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, und die zweite Spalte listet deren Werte für dieses bestimmte Element auf. Beispielsweise ist hier die Eigenschaftstabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle:

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
      <th scope="row">Kanalanzahl-Modus</th>
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

Diese Seiten können in GFM nicht dargestellt werden, da sie eine Kopfspalte haben, daher sollten Autoren in diesem Fall HTML verwenden. Um das spezielle Styling zu erhalten, sollten Autoren die Klasse `"properties"` auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Hoch- und Tiefstellung

Autoren können bei Bedarf die HTML-Elemente {{HTMLElement("sup")}} und {{HTMLElement("sub")}} verwenden, sollten jedoch nach Möglichkeit Alternativen verwenden. Insbesondere:

- Für Potenzierung verwenden Sie das Caret: `2^53`.
- Für Ordnungszahlen wie 1<sup>st</sup> bevorzugen Sie Wörter wie "erste".
- Für Fußnoten markieren Sie die Fußnotenreferenzen nicht, z.B. `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalts"-Absatz auf einer Seite—der erste Text, der nach den Seitenmetadaten und den [Sidebar](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)- oder [Seitenbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators)-Macros erscheint.

Diese Zusammenfassung wird für Suchmaschinenoptimierung (SEO) verwendet und auch automatisch neben Seitenauflistungen von einigen Makros aufgenommen. Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3923>.

## Makros

Autoren verwenden in der Prosa Makros zum Erstellen von Vorlagen für gängige Verlinkungsmuster oder zum Einfügen bestimmter Code- oder Textblöcke:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen.
