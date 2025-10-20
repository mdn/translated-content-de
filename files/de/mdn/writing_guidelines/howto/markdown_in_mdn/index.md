---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 3b003007865d83102b89489dfc25525f56f8afae
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentationen auf den MDN Web Docs zu schreiben.
Wir haben GitHub-Flavored Markdown (GFM) als Grundlage gewählt und Erweiterungen hinzugefügt, um die Dinge zu unterstützen, die wir auf MDN benötigen.

## Grundlage: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie die GFM-Spezifikation für alles, was auf dieser Seite nicht explizit spezifiziert ist, heranziehen können. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Linktypen:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Link-Text angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert ist.

Auf MDN verwenden wir bevorzugt Inline-Links, da sie einfacher zu lesen und zu pflegen sind, ohne den Kontext zu verlieren. Dies ist die bevorzugte Art, Links auf MDN zu schreiben:

```md
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

In bestimmten Situationen sind jedoch Referenz-Links aufgrund ihrer Kompaktheit besser geeignet.
Zum Beispiel können breite Tabellen durch diese Verkürzung leichter überprüft und bearbeitet werden.

```md
| Name                 | Features                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| [Macarons][macarons] | Delicious but tricky to make. Add more class to a tea party than almost any other confectionary. |
| [Biscotti][biscotti] | Crisp and easier to make.                                                                        |

[macarons]: https://en.wikipedia.org/wiki/Macaron
[biscotti]: https://en.wikipedia.org/wiki/Biscotti
```

In den seltenen Fällen, in denen es notwendig ist, Referenz-Links zu verwenden, stellen Sie bitte sicher, dass sie unmittelbar im Kontext folgen, in dem sie verwendet werden.

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Code-Grenzen" verwenden, um `<pre>` Blöcke abzugrenzen. Die öffnende Code-Grenze kann von einem Text gefolgt werden, der als "Info-String" bezeichnet wird. Die Sprache des Codebeispiels muss mit dem ersten Wort des Info-Strings angegeben werden, und dies wird verwendet, um die Syntaxhervorhebung für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

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
    - `glsl` - GLSL (OpenGL Shader)
    - `sql` - SeQueL-Kommandos
    - `wat` - WebAssembly
    - `webidl` - Web Interface Definition Language
- Stilierung
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

Wenn die gewünschte Hervorhebung nicht in der obigen Liste enthalten ist, sollten Sie den Codeblock als `plain` markieren.
Zusätzliche Sprachen können im Prozess [auf GitHub diskutiert](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefragt werden.

> [!NOTE]
> Verwenden Sie den Sprachbezeichner genau so, wie er oben aufgeführt ist. Zum Beispiel ist `javascript` nicht erlaubt und Sie müssen `js` schreiben.

### Linting unterdrücken

Autoren können ein Suffix `-nolint` an jeden der Sprachbezeichner anhängen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten eine geeignete Syntaxhervorhebung und werden vom Live-Beispielsystem erkannt, jedoch von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen zu zeigen, die Linters oder Formatierer nicht beheben sollten.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen über einen Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings bereitstellen:

- `example-good`: Stil dieses Beispiel als gutes Beispiel (eines, dem man folgen sollte)
- `example-bad`: Stil dieses Beispiel als schlechtes Beispiel (eines, das man vermeiden sollte)
- `hidden`: Rendert diesen Codeblock nicht auf der Seite. Dies ist für Live-Beispiele gedacht.

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

Dieses Thema wurde gelöst in:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Hinweise, Warnungen und Callouts

Autoren können die [GFM-Alerts-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um spezielle Aufmerksamkeit auf Inhalte zu lenken. Es gibt drei Arten von Alerts: Hinweise, Warnungen und Callouts.

> [!NOTE]
> Die MDN Web Docs unterstützten früher Alerts mit ihrer eigenen Syntax und bezeichneten sie als "Notizblöcke".
> MDN unterstützt die folgenden GFM-Alerts nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Notiz hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um ein Callout hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Hinweise und Warnungen fügen dem Anfang der Ausgabe eine lokalisierte **Hinweis:** oder **Warnung:** hinzu, während Callouts dies nicht tun. Dies macht Callouts zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

Mehrzeilen werden durch eine leere Blockzitat-Zeile in gleicher Weise wie normale Absätze erzeugt. Weiterhin werden Mehrzeilen ohne Leerzeichen auch wie normale Markdown-Zeilen behandelt und verknüpft.

Das Blockzitat kann Codeblöcke oder andere Blockelemente enthalten.

### Beispiele

#### Hinweis

```md
> [!NOTE]
> This is how you write a note.
>
> It can have multiple lines.
```

Dies erzeugt folgendes HTML:

```html
<div class="notecard note">
  <p><strong>Note:</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten gerendert:

> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann mehrere Zeilen haben.

#### Warnungen

```md
> [!WARNING]
> This is how you write a warning.
>
> It can have multiple paragraphs.
```

Dies erzeugt folgendes HTML:

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten gerendert:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann mehrere Absätze haben.

#### Callouts

```md
> [!CALLOUT]
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.
```

Dies erzeugt folgendes HTML:

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten gerendert:

> [!CALLOUT]
>
> **So schreiben Sie ein Callout.**
>
> Es kann mehrere Absätze haben.

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

Dies erzeugt folgendes HTML:

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
> So schreiben Sie eine Notiz.
>
> Sie kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Wie das.

### Diskussion Referenz

Dieses Thema wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, aber nicht von GFM unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Das GFM `<ul>` enthält eine beliebige Anzahl von GFM `<li>`-Elementen auf oberster Ebene.
- Jedes dieser GFM `<li>`-Elemente auf oberster Ebene muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einziges GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " (Doppelpunkt gefolgt von einem Leerzeichen) beginnen muss. Dieses Element kann Blockelemente enthalten, einschließlich Absätze, Codeblöcke, eingebettete Listen und Notizen.

Jedes dieser GFM `<li>`-Elemente auf oberster Ebene wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das GFM `<li>`-Element auf oberster Ebene wird als GFM `<li>`-Element geparst und sein interner Inhalt bildet den Inhalt des `<dt>`, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht zum `<dt>` gehört.
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

In GFM/CommonMark würde dies folgendes HTML erzeugen:

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

Auf MDN würde dies folgendes HTML erzeugen:

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

Definitionslisten, die mit diesem Syntax geschrieben sind, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: Der Parser wird dies als Fehler behandeln. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für diejenigen, die dies nicht tun, können Autoren auf rohen HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzelnen `<dd>` verbinden muss, sollten sie diese als ein einzelnes `<dt>` bereitstellen, das mehrere Begriffe enthält, getrennt durch Kommas, wie dieses:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut genug mit Werkzeugen funktioniert, die CommonMark erwarten (z. B. Prettier oder GitHub-Vorschauen), während sie relativ einfach zu schreiben und zu parsen ist.

### Diskussion Referenz

Dieses Thema wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN nutzen. Es gibt jedoch Zeiten, in denen GFM-Tabellen unsere Bedürfnisse nicht erfüllen:

- Die GFM-Syntax unterstützt nur eine Teilmenge der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle breiter als 150 Zeichen wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, genannt "Eigenschaftentabelle", die ihre eigene CSS-Klasse hat und deshalb immer HTML ist.

Das allgemeine Prinzip ist, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf rohes HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann HTML-Tabellen verwenden](#wann_html-tabellen_verwenden).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren jedoch diese Pipes einfügen. Außerdem müssen Autoren Leerzeichen nach den Zeilen bereitstellen, damit alle Zellen in einer Spalte im Klartext dieselbe Länge haben.

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

Tabellen werden von Prettier formatiert, sodass Autoren sich darauf verlassen, dass die Werkzeuge Tabellen ordnungsgemäß formatieren.

### Wann HTML-Tabellen verwenden

Es gibt drei Hauptumstände, in denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle namens "Eigenschaftstabelle" verwenden.

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM parst keine GFM-Blockelemente in Tabellenzellen. Zum Beispiel können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine Tabellenelemente außer `<table>`, `<tr>`, `<th>` und `<td>`.
- GFM unterstützt keine Tabellenelement-Attribute wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite der GFM-Tabelle

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM eine "{{Glossary("ASCII", "ASCII")}} art" Herangehensweise an Tabellen verwendet, die nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

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

Dies führt uns zur folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine spezielle Art von Tabellen, die für die Anzeige von strukturiertem Eigenschaft-Wert-Inhalt auf einer Reihe von Seiten eines bestimmten Typs verwendet werden. Diese Tabellen haben zwei Spalten: die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, und die zweite Spalte listet ihre Werte für dieses spezielle Element auf. Zum Beispiel, hier ist die Eigenschaftstabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode) Schnittstelle:

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

Diese Seiten können nicht in GFM dargestellt werden, da sie eine Kopfspalte haben, daher sollten Autoren in diesem Fall HTML verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"` Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussion Referenz

Dieses Thema wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Hoch- und Tiefstellung

Autoren können die HTML {{HTMLElement("sup")}}- und {{HTMLElement("sub")}}-Elemente verwenden, wenn nötig, sollten jedoch nach Möglichkeit Alternativen verwenden. Insbesondere:

- Für Exponentiation verwenden Sie den Zirkumflex: `2^53`.
- Für ordinalen Ausdrücke wie 1<sup>st</sup>, bevorzugen Sie Wörter wie "erst".
- Für Fußnoten markieren Sie die Fußnotenverweise nicht, z.B. `<sup>[1]</sup>`.

### Diskussion Referenz

Dieses Thema wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalt"-Absatz auf einer Seite – der erste Text, der nach den Seitenmetadaten und allen [Seitenelementen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) oder [Seitenelement-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) erscheint.

Diese Zusammenfassung wird für Suchmaschinenoptimierung (SEO) verwendet und auch automatisch zusammen mit Seitenlisten von einigen Makros einbezogen.
Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussion Referenz

Dieses Thema wurde gelöst in <https://github.com/mdn/content/issues/3923>.

## Makros

Schreiber verwenden Makros in der Prosa für das Templating häufig genutzter Verlinkungsmuster oder um spezielle Codeabschnitte oder Texte einzuschließen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Sehen Sie [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen.
