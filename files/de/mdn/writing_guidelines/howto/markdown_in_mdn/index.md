---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentationen auf MDN Web Docs zu schreiben.
Wir haben uns für GitHub-Flavored Markdown (GFM) als Basis entschieden und Erweiterungen hinzugefügt, um die Anforderungen von MDN zu unterstützen.

## Basislinie: GitHub-Flavored Markdown

Die Basis für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich bei allem, was auf dieser Seite nicht ausdrücklich spezifiziert ist, auf die GFM-Spezifikation beziehen können. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Linktypen:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert ist.

Auf MDN erlauben wir nur Inline-Links.
So schreiben Sie GFM-Links auf MDN korrekt:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

So schreiben Sie Links auf MDN nicht korrekt:

```md example-bad
[Macarons][macaron] are delicious but tricky to make.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Code-Zäune" verwenden, um `<pre>`-Blöcke zu kennzeichnen. Der eröffnende Code-Zaun kann von einem Text gefolgt werden, der "Info-String" genannt wird. Die Sprache des Codebeispiels muss mit dem ersten Wort des Info-Strings angegeben werden, und dies wird verwendet, um Syntaxhervorhebung für den Block bereitzustellen. Die folgenden Worte werden unterstützt:

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
- Stile
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
- Kommandozeilenbefehle
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

Wenn die gewünschte Hervorhebung nicht in der obigen Liste enthalten ist, sollten Sie den Codeblock als `plain` kennzeichnen.
Zusätzliche Sprachen können im [auf GitHub diskutierten Prozess](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

> [!NOTE]
> Verwenden Sie den Sprachbezeichner genau so, wie er oben aufgelistet ist. Zum Beispiel ist `javascript` nicht erlaubt und Sie müssen `js` schreiben.

### Unterdrückung der Prüfung

Autoren können ein `-nolint`-Suffix zu einem der Sprachbezeichner hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten eine angemessene Syntaxhervorhebung und werden vom Live-Beispielsystem erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen zu zeigen, die von Lintern oder Formatierern nicht korrigiert werden sollen.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die es Autoren erlauben, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings bereitstellen:

- `example-good`: Übersicht als gutes Beispiel stilisieren (ein zu befolgendes)
- `example-bad`: Übersicht als schlechtes Beispiel stilisieren (ein zu vermeidendes)
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

Diese werden gerendert als:

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

## Hinweise, Warnungen und Kallouts

Autoren können die [GFM-Alert-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besonderen Inhalt hervorzuheben. Es gibt drei Arten von Alerts: Hinweise, Warnungen und Kallouts.

> [!NOTE]
> MDN Web Docs unterstützte Alerts mit seiner eigenen Syntax vor der Unterstützung für GFM-Alerts und bezeichnete sie als "Notizen".
> MDN unterstützt die folgenden GFM-Alerts nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt keine `[!CALLOUT]`.

- Um eine Anmerkung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um einen Kallout hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Hinweise und Warnungen fügen am Anfang der Ausgabe ein lokalisiertes **Hinweis:** oder **Warnung:** hinzu, während Kallouts dies nicht tun. Dies macht Kallouts eine gute Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

Mehrere Zeilen werden in gleicher Weise wie normale Absätze durch eine leere Zeile des Blockzitats erzeugt. Außerdem werden mehrere Zeilen ohne Leerzeichen ebenfalls als normale Markdown-Zeilen behandelt und verkettet.

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

Dieses HTML wird als hervorgehobenes Feld gerendert:

> [!NOTE]
> Dies ist, wie man eine Anmerkung schreibt.
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

Dieses HTML wird als hervorgehobenes Feld gerendert:

> [!WARNING]
> Dies ist, wie man eine Warnung schreibt.
>
> Es kann mehrere Absätze haben.

#### Kallouts

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

Dieses HTML wird als hervorgehobenes Feld gerendert:

> [!CALLOUT]
>
> **Dies ist, wie man einen Kallout schreibt.**
>
> Es kann mehrere Absätze haben.

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

Dies erzeugt das folgende HTML:

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
> Dies ist, wie man eine Anmerkung schreibt.
>
> Es kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Genau so.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig im gesamten MDN verwendet, aber von GFM nicht unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM-unsortierten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Das GFM-`<ul>` enthält eine beliebige Anzahl von Top-Level-GFM-`<li>`-Elementen.
- Jedes dieser Top-Level-GFM-`<li>`-Elemente muss als letztes Element ein GFM-`<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einziges GFM-`<li>`-Element enthalten, dessen Textinhalt mit ": " (einem Doppelpunkt gefolgt von einem Leerzeichen) beginnen muss. Dieses Element kann Blockelemente enthalten, einschließlich Absätze, Codeblöcke, eingebettete Listen und Anmerkungen.

Jedes dieser Top-Level-GFM-`<li>`-Elemente wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das Top-Level-GFM-`<li>`-Element wird als GFM-`<li>`-Element analysiert und sein interner Inhalt umfasst den Inhalt des `<dt>`, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM-`<li>`-Element analysiert und sein interner Inhalt umfasst den Inhalt des `<dd>`, mit Ausnahme des führenden ": ", das verworfen wird.

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

Definitionslisten, die mit dieser Syntax geschrieben sind, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: Der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für diejenigen, die dies nicht tun, können Autoren auf reines HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzelnen `<dd>`-Element verknüpfen muss, sollten diese als ein einzelnes `<dt>` bereitgestellt werden, das mehrere Begriffe hält, getrennt durch Kommas, wie folgt:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut genug mit Werkzeugen funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), während sie relativ einfach zu schreiben und zu parsen ist.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN verwenden. Es gibt jedoch Zeiten, wenn GFM-Tabellen nicht unseren Bedürfnissen entsprechen:

- Die GFM-Syntax unterstützt nur ein Subset der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen benötigen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle namens "Eigenschaften-Tabelle", die ihre eigene CSS-Klasse hat und daher immer HTML ist.

Das allgemeine Prinzip lautet also, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf reines HTML zurückgreifen, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwendet_werden_sollten).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren diese Pipes jedoch einschließen. Außerdem müssen Autoren in den Zeilen abschließende Leerzeichen bereitstellen, sodass alle Zellen in einer Spalte im Klartext gleich lang sind.

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

Tabellen werden von Prettier formatiert, daher verlassen sich Autoren darauf, dass Werkzeuge die Tabellen richtig formatieren.

### Wann HTML-Tabellen verwendet werden sollten

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle namens "Eigenschaften-Tabelle".

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM wird keine GFM-Blockelemente in Tabellenzellen analysieren. Zum Beispiel kann man keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen bekommen.
- GFM unterstützt keine anderen Tabellenelemente außer `<table>`, `<tr>`, `<th>`, und `<td>`.
- GFM unterstützt keine Tabellenelementattribute wie `colspan`, `rowspan`, oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite von GFM-Tabellen

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "ASCII-Kunst"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

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

In GFM sieht das folgendermaßen aus:

```md
| A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
| Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Dies führt uns zu der folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaften-Tabellen

Eigenschaften-Tabellen sind eine spezielle Art von Tabelle, die zum Anzeigen strukturierter Eigenschaft-Wert-Inhalte über eine Reihe von Seiten eines bestimmten Typs verwendet werden. Diese Tabellen haben zwei Spalten: die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, und die zweite Spalte listet ihre Werte für dieses bestimmte Element auf. Zum Beispiel, hier ist die Eigenschaften-Tabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode) Schnittstelle:

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
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können in GFM nicht dargestellt werden, da sie eine Kopfspalte haben, daher sollten Autoren HTML in diesem Fall verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Hoch- und Tiefstellung

Autoren können die HTML-{{HTMLElement("sup")}}- und {{HTMLElement("sub")}}-Elemente verwenden, sofern notwendig, sollten jedoch nach Möglichkeit Alternativen verwenden. Insbesondere:

- Zum Potenzieren verwenden Sie das Caret: `2^53`.
- Für Ordinalzahlen wie 1<sup>st</sup> bevorzugen Sie Wörter wie "erstens".
- Für Fußnoten markieren Sie die Fußnotenzeichen nicht, z. B. `<sup>[1]</sup>`.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalt"-Absatz auf einer Seite—der erste Text, der nach den Seiten-Stammdaten und allen [Sidebar](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) oder [Seitenbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) Makros erscheint.

Diese Zusammenfassung wird für Suchmaschinenoptimierung (SEO) verwendet und wird auch automatisch neben Seitenlisten von einigen Makros eingefügt.
Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussion Referenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3923>.

## Makros

Autoren verwenden Makros im Fließtext für das Vorlagen von häufigen Verlinkungen oder um bestimmte Code- oder Textblöcke einzuschließen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Weitere Informationen finden Sie unter [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).
