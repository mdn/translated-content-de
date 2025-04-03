---
title: Wie man in Markdown schreibt
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 6d54d3150f745b8c10cf739b24cb3d48ef6a53c4
---

Diese Seite beschreibt, wie wir Markdown nutzen, um Dokumentationen auf MDN Web Docs zu erstellen.
Wir haben uns für GitHub-Flavored Markdown (GFM) als Grundlage entschieden und Erweiterungen hinzugefügt, um die Funktionen zu unterstützen, die wir auf MDN benötigen.

## Grundlage: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können, falls etwas auf dieser Seite nicht explizit spezifiziert ist. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [inline links](https://github.github.com/gfm/#inline-link), bei denen das Ziel unmittelbar nach dem Linktext angegeben wird.
- [reference links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert ist.

Auf MDN erlauben wir nur Inline-Links.
Dies ist der korrekte Weg, um GFM-Links auf MDN zu schreiben:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

Dies ist ein inkorrekter Weg, um Links auf MDN zu schreiben:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "code fences" verwenden, um `<pre>`-Blöcke zu markieren. Der öffnende Code-Zaun kann von einem Text gefolgt werden, der als "info string" bezeichnet wird.
Das erste Wort des Info-Strings wird typischerweise verwendet, um die Sprache des Code-Beispiels zu spezifizieren und wird im Attribut der Klasse des Code-Tags wiedergegeben.

Der Info-String kann mehrere Wörter enthalten:

````md
```fee fi fo fum
// some example code
```
````

Auf MDN verwenden Autoren Code-Zaun für Beispiel-Codeblöcke. Sie müssen die Sprache des Code-Beispiels mithilfe des ersten Wortes des Info-Strings spezifizieren, und dies wird verwendet, um die Syntaxhervorhebung für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

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
- Befehlszeilen
  - `bash` - Bash/Shell
  - `batch` - Batch (Windows Shell)
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
  - `pug` - [Pug-Templates](https://pugjs.org/api/getting-started.html) (die möglicherweise von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden)
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

Falls die gewünschte Hervorhebung nicht oben aufgeführt ist, sollten Sie den Codeblock als `plain` auszeichnen.
Zusätzliche Sprachen können im [auf GitHub diskutierten](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) Prozess angefragt werden.

### Linting unterdrücken

Autoren können ein `-nolint`-Suffix zu einem der Sprachbezeichner hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten die entsprechende Syntaxhervorhebung und werden vom Live-Beispielsystem erkannt, werden jedoch von Linter oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen zu zeigen, die Linter oder Formatierer nicht korrigieren sollten.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings angeben:

- `example-good`: dieses Beispiel als ein gutes Beispiel stilisieren (eines, dem man folgen sollte)
- `example-bad`: dieses Beispiel als ein schlechtes Beispiel stilisieren (eines, das man vermeiden sollte)
- `hidden`: diesen Codeblock nicht auf der Seite rendern. Dies ist für die Verwendung in Live-Beispielen gedacht.

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

Diese werden dargestellt als:

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

## Hinweise, Warnungen und besondere Anmerkungen

Autoren können die [GFM-Warnsyntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besondere Aufmerksamkeit auf Inhalte zu lenken. Es gibt drei Arten von Warnungen: Hinweise, Warnungen und besondere Anmerkungen.

> [!NOTE]
> MDN Web Docs unterstützten vorher Warnungen mit eigener Syntax und bezeichnete sie als "Noteblocks".
> MDN unterstützt die folgenden GFM-Warnungen nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Notiz zu erstellen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um eine besondere Anmerkung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Hinweise und Warnungen fügen am Anfang der Ausgabe ein lokalisiertes **Hinweis:** oder **Warnung:** hinzu, während besondere Anmerkungen dies nicht tun. Dies macht sie zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel verwenden möchte.

> [!WARNING]
> In der älteren MDN-Syntax war der Typ lokalisiert und wurde im ersten Absatz in Fettdruck hinzugefügt, z.B., `**Hinweis:** Foo bar` anstelle von `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird aus Migrationszwecken weiterhin unterstützt. Vermeiden Sie es, sie in neuer Dokumentation zu verwenden.

> [!WARNING]
> Derzeit kann aufgrund eines [Prettier-Bugs](https://github.com/prettier/prettier/issues/15479) die GFM-Warnsyntax nicht verwendet werden, wenn das erste Zeichen einer Anmerkung oder Warnung ein Formatierungssymbol ist, wie ein Backquote, ein Sternchen, eine eckige Klammer oder eine geschweifte Klammer. In diesem Fall verwenden Sie statt dessen die alte Syntax `> **Hinweis:**`. Autoren müssen den Inhalt nicht umformulieren, um den Formatierer zu umgehen.

Mehrere Zeilen werden durch eine leere Blockzitatzeile auf dieselbe Weise wie normale Absätze erzeugt. Darüber hinaus werden mehrere Zeilen ohne Leerzeichen auch wie normale Markdown-Zeilen behandelt und zusammengeführt.

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

Dieses HTML wird als hervorgehobener Kasten dargestellt:

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

Dieses HTML wird als hervorgehobener Kasten dargestellt:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann mehrere Absätze haben.

#### Besondere Anmerkungen

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

Dieses HTML wird als hervorgehobener Kasten dargestellt:

> [!CALLOUT]
>
> **So schreiben Sie eine besondere Anmerkung.**
>
> Sie kann mehrere Absätze haben.

#### Hinweis, der einen Codeblock enthält

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

Dieses HTML wird wie ein Codeblock dargestellt:

> [!NOTE]
> So schreiben Sie einen Hinweis.
>
> Er kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So wie das.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, aber von GFM nicht unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM-unordered list ({{HTMLElement("ul")}}) ist. In diesem Format:

- Der GFM `<ul>` enthält beliebig viele oberste GFM `<li>` Elemente.
- Jedes dieser obersten `<li>` Elemente muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte, verschachtelte `<ul>` muss ein einzelnes `<li>`-Element enthalten, dessen Textinhalt mit ": " (ein Doppelpunkt gefolgt von einem Leerzeichen) beginnen muss. Dieses Element kann Blockelemente enthalten, einschließlich Absätzen, Codeblöcken, eingebetteten Listen und Hinweisen.

Jedes dieser obersten GFM `<li>`-Elemente wird in ein `<dt>`/`<dd>`-Paar transformiert, wie folgt:

- Das oberste GFM `<li>`-Element wird als GFM `<li>`-Element geparst und sein interner Inhalt umfasst den Inhalt des `<dt>`, mit Ausnahme des abschließenden verschachtelten `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element geparst und sein interner Inhalt umfasst den Inhalt des `<dd>`, mit Ausnahme des führenden ": ", das verworfen wird.

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

Definitionslisten, die mit dieser Syntax geschrieben wurden, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: Der Parser wird dies als Fehler behandeln. Wir gehen davon aus, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren und für diejenigen, die dies nicht tun, können Autoren auf rohes HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzelnen `<dd>`-Element verknüpfen muss, kann er sie als ein einzelnes `<dt>` angeben, das mehrere Begriffe enthält, getrennt durch Kommata, wie dies:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut genug mit Tools funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), während sie gleichzeitig relativ einfach zu schreiben und zu parsen ist.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN verwenden. Es gibt jedoch Zeiten, in denen GFM-Tabellen unsere Bedürfnisse nicht erfüllen:

- Die GFM-Syntax unterstützt nur einen Teil der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine besondere Art von Tabelle, die als "Eigenschaftentabelle" bezeichnet wird und daher immer HTML verwendet.

Das allgemeine Prinzip lautet, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf rohes HTML zurückgreifen, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann man HTML-Tabellen verwenden sollte](#wann_man_html-tabellen_verwenden_sollte).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren jedoch diese Pipes hinzufügen. Zusätzlich müssen Autoren in den Zeilen abschließende Leerzeichen bereitstellen, sodass alle Zellen in einer Spalte im Klartext gleich lang sind.

Das bedeutet, MDN-Autoren müssen diesen Stil verwenden:

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

Tabellen werden von Prettier formatiert, daher verlassen sich Autoren auf Werkzeuge, um Tabellen ordnungsgemäß zu formatieren.

### Wann man HTML-Tabellen verwenden sollte

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle von GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle namens "Eigenschaftentabelle".

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfzeile haben.
- GFM parst keine GFM-Blockelemente in Tabellenzellen. Beispielsweise können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine anderen Tabellenelemente außer `<table>`, `<tr>`, `<th>`, und `<td>`.
- GFM unterstützt keine Attribute von Tabellenelementen wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite von GFM-Tabellen

Auch wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII", "ASCII")}}-Kunst"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

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

Das führt uns zur folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftentabellen

Eigenschaftentabellen sind eine spezielle Art von Tabelle, die zur Anzeige von strukturierten Eigenschaft-Wert-Inhalten über eine Reihe von Seiten eines bestimmten Typs verwendet wird. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Überschriftsspalte und listet die Eigenschaften auf, und die zweite Spalte listet deren Werte für dieses spezielle Element auf. Zum Beispiel, hier ist die Eigenschaftentabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle:

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
      <th scope="row">Anzahl der Kanäle</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können in GFM nicht dargestellt werden, da sie eine Überschriftsspalte haben, daher sollten Autoren in diesem Fall HTML verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren die Klasse `"properties"` zur Tabelle hinzufügen:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Hoch- und Tiefgestellte Zeichen

Autoren können die HTML-Elemente {{HTMLElement("sup")}} und {{HTMLElement("sub")}} verwenden, falls erforderlich, sollten jedoch nach Möglichkeit Alternativen verwenden. Insbesondere:

- Für Exponentiation verwenden Sie das Dachzeichen: `2^53`.
- Für Ordinalausdrücke wie 1<sup>st</sup> bevorzugen Sie Begriffe wie "erster".
- Für Fußnoten markieren Sie die Fußnotenverweise nicht, z.B., `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalt"-Absatz auf einer Seite—der erste Text, der nach der Seitenmetadaten und etwaigen [sidebar](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) oder [page banner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators)-Makros erscheint.

Diese Zusammenfassung wird für die Suchmaschinenoptimierung (SEO) verwendet und auch automatisch neben Seitenlistungen von einigen Makros eingeschlossen.
Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3923>.

## Makros

Autoren verwenden Makros in Prosa für das Vorlagen von häufigen Verknüpfungsmustern oder um spezifische Code- oder Textblöcke einzufügen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Weitere Informationen finden Sie unter [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).
