---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 49f3eb321cf6a491c3bcef1c3590f9bf6f90c9b8
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentationen auf MDN Web Docs zu schreiben. Wir haben GitHub-Flavored Markdown (GFM) als Grundlage gewählt und Erweiterungen hinzugefügt, um die Dinge zu unterstützen, die wir auf MDN benötigen.

## Grundlage: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Dies bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können, wenn etwas auf dieser Seite nicht ausdrücklich angegeben ist. GFM ist wiederum ein Superset von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [inline links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [reference links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert ist.

Auf MDN bevorzugen wir die Verwendung von Inline-Links, da sie leichter zu lesen und zu pflegen sind, ohne den Kontext zu verlieren. Dies ist die bevorzugte Methode zum Schreiben von Links auf MDN:

```md
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

In bestimmten Situationen sind Referenz-Links aufgrund ihrer Kompaktheit jedoch angemessener. Beispielsweise kann das Verkleinern breiter Tabellen deren Überprüfung und Bearbeitung erleichtern.

```md
| Name                 | Features                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| [Macarons][macarons] | Delicious but tricky to make. Add more class to a tea party than almost any other confectionary. |
| [Biscotti][biscotti] | Crisp and easier to make.                                                                        |

[macarons]: https://en.wikipedia.org/wiki/Macaron
[biscotti]: https://en.wikipedia.org/wiki/Biscotti
```

In seltenen Fällen, in denen die Verwendung von Referenzlinks notwendig ist, stellen Sie bitte sicher, dass sie unmittelbar dem Kontext folgen, in dem sie verwendet werden.

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "code fences" verwenden, um `<pre>`-Blöcke zu kennzeichnen. Der öffnende Codezaun kann von einem Text gefolgt werden, der als "info string" bezeichnet wird. Die Sprache des Codebeispiels muss mit dem ersten Wort des Info-Strings angegeben werden, und diese wird verwendet, um Syntaxhervorhebungen für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

- Programmiersprachen
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-ähnliche
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
- Befehlszeilen
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
  - `pug` - [Pug-Vorlagen](https://pugjs.org/api/getting-started.html) (die von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden können)
- Andere
  - `plain` - Reiner Text
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

Falls die gewünschte Hervorhebung nicht in der obigen Liste enthalten ist, sollten Sie den Codeblock als `plain` markieren. Zusätzliche Sprachen können im [auf GitHub besprochenen Prozess](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

> [!NOTE]
> Verwenden Sie den Sprachbezeichner genau so, wie oben angegeben. Zum Beispiel ist `javascript` nicht erlaubt und Sie müssen `js` schreiben.

### Linting unterdrücken

Autoren können ein `-nolint`-Suffix zu einem der Sprachbezeichner hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten eine entsprechende Syntaxhervorhebung und werden vom Live-Sample-System erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen anzuzeigen, die Linters oder Formatierer nicht korrigieren sollen.

### Zusätzliche Klassen (info strings)

GFM unterstützt [info strings](https://github.github.com/gfm/#info-string), die Autoren erlauben, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden info strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings angeben:

- `example-good`: Dieses Beispiel als gutes Beispiel (zur Nachahmung) stilisieren
- `example-bad`: Dieses Beispiel als schlechtes Beispiel (zu vermeiden) stilisieren
- `hidden`: Diesen Codeblock nicht auf der Seite rendern. Dies ist für die Verwendung in Live-Beispielen.

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

Dieses Problem wurde gelöst in:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Hinweise, Warnungen und Hervorhebungen

Autoren können die [GFM-Notiz-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um spezielle Aufmerksamkeit auf Inhalte zu lenken. Es gibt drei Arten von Hinweisen: Notizen, Warnungen und Hervorhebungen.

> [!NOTE]
> MDN Web Docs unterstützten zuvor eigene Syntax für Hinweise und nannten sie "Notizblöcke".
> MDN unterstützt nicht die folgenden GFM-Hinweise: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt keine `[!CALLOUT]`-Hinweise.

- Um eine Notiz hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um eine Hervorhebung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Notizen und Warnungen fügen einen lokalisierten **Hinweis:** oder **Warnung:** an den Anfang der Ausgabe hinzu, während Hervorhebungen dies nicht tun. Dies macht Hervorhebungen zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

Mehrere Zeilen werden durch eine leere BlockZitat-Zeile auf die gleiche Weise wie normale Absätze erzeugt. Außerdem werden mehrere Zeilen ohne Leerzeichen auch wie normale Markdown-Zeilen behandelt und zusammengefügt.

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
> Das ist, wie Sie einen Hinweis schreiben.
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
> Das ist, wie Sie eine Warnung schreiben.
>
> Sie kann mehrere Absätze haben.

#### Hervorhebungen

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
> **So schreiben Sie eine Hervorhebung.**
>
> Sie kann mehrere Absätze haben.

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
> Das ist, wie Sie einen Hinweis schreiben.
>
> Es kann Codeblöcke enthalten.
>
> ```js
> const s = "Ich bin in einem Codeblock";
> ```
>
> So in der Art.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, aber von GFM nicht unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM `<ul>` enthält eine beliebige Anzahl von obersten GFM `<li>`-Elementen.
- Jedes dieser obersten GFM `<li>`-Elemente muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einzelnes GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " beginnt (ein Doppelpunkt gefolgt von einem Leerzeichen). Dieses Element kann Blockelemente enthalten, einschließlich Absätzen, Codeblöcken, eingebetteten Listen und Notizen.

Jedes dieser obersten GFM `<li>`-Elemente wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das oberste GFM `<li>`-Element wird als GFM `<li>`-Element geparst und sein interner Inhalt bildet den Inhalt des `<dt>`, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element geparst und sein interner Inhalt bildet den Inhalt des `<dd>`, mit Ausnahme des führenden ": ", das verworfen wird.

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

Definitionslisten, die mit diesem Syntax geschrieben sind, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit diesem Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: Der Parser wird dies als Fehler behandeln. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für diejenigen, die dies nicht tun, können Autoren auf reines HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Einträge mit einem einzelnen `<dd>`-Eintrag verknüpfen muss, sollten Sie sie als einen einzelnen `<dt>` angeben, der mehrere Begriffe hält, getrennt durch Kommata, wie folgt:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebenen Syntax ist, dass es gut genug mit Werkzeugen funktioniert, die CommonMark erwarten (zum Beispiel, Prettier oder GitHub-Vorschauen), während es relativ einfach zu schreiben und zu parsen ist.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax für das Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN verwenden. Es gibt jedoch Zeiten, in denen GFM-Tabellen nicht unseren Bedürfnissen entsprechen:

- Die GFM-Syntax unterstützt nur eine Teilmenge der in HTML verfügbaren Funktionen. Wenn Sie Tabelleneigenschaften verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die als "Eigenschaftstabelle" bezeichnet wird und ihre eigene CSS-Klasse hat und daher immer HTML ist.

Das allgemeine Prinzip ist, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf reines HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwenden).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren die führenden und nachgestellten Pipes für Zeilen weglassen. Jedoch müssen MDN-Autoren diese Pipes der Lesbarkeit halber einfügen. Außerdem müssen Autoren nachgestellte Leerzeichen in Zeilen angeben, sodass alle Zellen in einer Spalte im Klartext die gleiche Länge haben.

Das bedeutet, MDN Autoren müssen diesen Stil verwenden:

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

Tabellen werden von Prettier formatiert, daher verlassen sich Autoren auf Tools, um Tabellen richtig zu formatieren.

### Wann HTML-Tabellen verwenden

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen statt GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle namens "Eigenschaftstabelle" erstellen.

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM wird GFM-Blockelemente in Tabellenzellen nicht parsen. Beispielsweise können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine anderen Tabellenelemente außer `<table>`, `<tr>`, `<th>`, und `<td>`.
- GFM unterstützt keine Tabellenattributen wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite von GFM-Tabellen

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII", "ASCII")}}-Kunst"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

```html
<table>
  <thead>
    <tr>
      <th>A heading 1</th>
      <th>A heading 2</th>
      <th>A heading 3</th>
      <th>A heading 4</th>
      <th>A heading 5</th>
      <th>A heading 6</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Something shortish</td>
      <td>
        Something much longer that really goes into a lot of detail about
        something, so much so that the table formatting starts to look bad in
        GFM format.
      </td>
      <td>Something shortish</td>
      <td>
        Another cell with lots of text in it, that also really goes into a lot
        of detail about something, so much so that the table formatting starts
        to look bad in GFM format.
      </td>
      <td>Something shortish</td>
      <td>Something shortish</td>
    </tr>
  </tbody>
</table>
```

In GFM sieht dies so aus:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Dies führt uns zu der folgenden Richtlinie: _wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaften-Tabellen

Eigenschaften-Tabellen sind eine spezielle Art von Tabelle, die zur Anzeige von strukturieren Eigenschaft-Wert-Inhalten auf einer Reihe von Seiten eines bestimmten Typs verwendet wird. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfzeilenspalte und listet die Eigenschaften auf, während die zweite Spalte deren Werte für diesen bestimmten Posten auflistet. Beispielsweise finden Sie hier die Eigenschaften-Tabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle:

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
      <th scope="row">Kanalzählungsmodus</th>
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

Diese Seiten können nicht in GFM repräsentiert werden, weil sie eine Kopfspalte haben, also sollten Autoren HTML in diesem Fall verwenden. Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Hoch- und Tiefschreiben

Autoren können die HTML-Elemente {{HTMLElement("sup")}} und {{HTMLElement("sub")}} bei Bedarf verwenden, sollten jedoch nach Möglichkeit Alternativen einsetzen. Insbesondere:

- Zur Potenzierung verwenden Sie das Dach: `2^53`.
- Für ordinale Ausdrücke wie 1<sup>st</sup> ziehen Sie Begriffe wie "erst" vor.
- Für Fußnoten markieren Sie nicht die Fußnotenreferenzen, z.B.: `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalt"-Absatz auf einer Seite—der erste Text, der nach dem Seitenkopf und eventuell vorhandenen [Seitenleiste](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) oder [Seitenbannern](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) erscheint.

Diese Zusammenfassung wird für die Suchmaschinenoptimierung (SEO) verwendet und auch automatisch neben Seitenauflistungen von einigen Makros bereitgestellt. Der erste Absatz sollte daher sowohl knapp als auch informativ sein.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3923>.

## Makros

Autoren verwenden Makros im Fließtext, um häufige Verknüpfungsmuster zu templatisieren oder um bestimmte Code- oder Textblöcke einzuschließen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Siehe [Verwenden von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen.
