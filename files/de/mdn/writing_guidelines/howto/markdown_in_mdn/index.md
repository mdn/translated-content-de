---
title: Wie man in Markdown schreibt
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 487085d8bbd6d80719e6c28ade98563479727df7
---

{{MDNSidebar}}

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentation auf MDN Web Docs zu schreiben. Wir haben GitHub-Flavored Markdown (GFM) als Basis gewählt und einige Erweiterungen hinzugefügt, um einige der Dinge zu unterstützen, die wir auf MDN tun müssen und die in GFM nicht sofort unterstützt werden.

## Basis: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können, wenn etwas nicht explizit auf dieser Seite spezifiziert ist. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument festgelegt wird.

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

In GFM und CommonMark können Autoren "Code-Zäune" verwenden, um `<pre>`-Blöcke zu kennzeichnen. Der öffnende Code-Zaun kann von etwas Text gefolgt werden, der als "info string" bezeichnet wird. Die Spezifikation besagt Folgendes:

> Das erste Wort des Info-Strings wird typischerweise verwendet, um die Sprache des Code-Beispiels anzugeben und wird im Klassenattribut des Code-Tags angezeigt.

Es ist zulässig, dass der Info-String mehrere Wörter enthält, wie zum Beispiel:

````md
```fee fi fo fum
// some example code
```
````

Auf MDN werden Autoren Code-Zäune für Beispiel-Codeblöcke verwenden. Sie müssen die Sprache des Code-Beispiels mit dem ersten Wort des Info-Strings angeben, und dies wird zur Bereitstellung der Syntaxhervorhebung für den Block verwendet. Die folgenden Wörter werden unterstützt:

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
    - `sql` - SQL-Befehle
    - `wasm` - WebAssembly
    - `webidl` - Web Interface Definition Language
- Stil
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
- Befehlsaufforderungen
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
  - `pug` - [Pug-Vorlagen](https://pugjs.org/api/getting-started.html) (die von [Express](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden können)
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

Wenn das von Ihnen gewünschte Highlighting nicht oben aufgeführt ist, sollten Sie den Codeblock als `plain` auszeichnen.
Zusätzliche Sprachen können im auf [GitHub diskutierten Prozess](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

### Linting unterdrücken

Autoren können ein `-nolint`-Suffix zu einem der Sprach-IDs hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten entsprechende Syntaxhervorhebung und werden vom Live-Beispielsystem erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen anzuzeigen, die Linter oder Formatierer nicht korrigieren sollen.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings bereitstellen:

- `example-good`: Dieses Beispiel als gutes Beispiel darstellen (eines, dem man folgen sollte)
- `example-bad`: Dieses Beispiel als schlechtes Beispiel darstellen (eines, das man vermeiden sollte)
- `hidden`: Diesen Codeblock nicht auf der Seite anzeigen. Dies wird für Live-Beispiele verwendet.

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

## Hinweise, Warnungen und Anmerkungen

Autoren können die [GFM-Alerts-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besonderen Wert auf den Inhalt zu legen. Es gibt drei Arten von Alerts: Hinweise, Warnungen und Anmerkungen.

> [!NOTE]
> MDN Web Docs unterstützte Alerts mit einer eigenen Syntax vor der Unterstützung von GFM-Alerts und bezeichnete sie als "Noteblocks".
> MDN unterstützt die folgenden GFM-Alerts nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um einen Hinweis hinzuzufügen, erstellen Sie ein Blockquote, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockquote, dessen erste Zeile `[!WARNING]` ist.
- Um eine Anmerkung hinzuzufügen, erstellen Sie ein Blockquote, dessen erste Zeile `[!CALLOUT]` ist.

Hinweise und Warnungen werden einen lokalisierten **Hinweis:** oder **Warnung:** am Anfang der Ausgabe hinzufügen, während Anmerkungen dies nicht tun werden. Dies macht Anmerkungen zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

> [!WARNING]
> In der älteren MDN-Syntax wurde der Typ lokalisiert und dem ersten Absatz in Fettschrift hinzugefügt, d.h. `**Hinweis:** Foo bar` anstelle von `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird aus Migrationsgründen weiterhin unterstützt. Vermeiden Sie es, sie in neuer Dokumentation zu verwenden.

> [!WARNING]
> Derzeit kann aufgrund eines [Prettier-Bugs](https://github.com/prettier/prettier/issues/15479) die GFM-Alerts-Syntax nicht verwendet werden, wenn das erste Zeichen einer Notiz oder Warnung ein Formatierungssymbol ist, wie ein Backquote, ein Sternchen, eine eckige Klammer oder eine geschweifte Klammer. In diesem Fall verwenden Sie stattdessen die alte Syntax `> **Hinweis:**`. Autoren müssen den Inhalt nicht umformulieren, um den Formatierer zu umgehen.

Mehrere Zeilen werden durch eine leere Blockzitatzeile auf die gleiche Weise wie normale Absätze erzeugt. Mehrere Zeilen ohne Leerzeichen werden ebenfalls wie normale Markdown-Zeilen behandelt und verkettet.

Das Blockquote kann Codeblöcke oder andere Blockelemente enthalten.

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
> Sie kann mehrere Absätze haben.

#### Anmerkungen

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
> **So schreiben Sie eine Anmerkung.**
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

Dieses HTML wird mit einem Codeblock gerendert:

> [!NOTE]
> So schreiben Sie einen Hinweis.
>
> Er kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So in etwa.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, aber von GFM nicht unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM `<ul>` enthält eine beliebige Anzahl von GFM `<li>`-Elementen auf oberster Ebene.
- Jedes dieser GFM `<li>`-Elemente auf oberster Ebene muss, als sein letztes Element, ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einzelnes GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " (einem Doppelpunkt gefolgt von einem Leerzeichen) beginnen muss. Dieses Element kann Blockelemente enthalten, einschließlich Absätzen, Codeblöcken, eingebetteten Listen und Hinweisen.

Jedes dieser GFM `<li>`-Element auf oberster Ebene wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das GFM `<li>`-Element auf oberster Ebene wird als GFM `<li>`-Element geparst und sein interner Inhalt wird den Inhalt des `<dt>` bilden, außer das letzte verschachtelte `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element geparst und sein interner Inhalt wird den Inhalt des `<dd>` bilden, außer dem führenden ": ", das verworfen wird.

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

Definitionslisten, die unter Verwendung dieser Syntax geschrieben sind, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Unter Verwendung dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für diejenigen, die dies nicht tun, können Autoren auf reines HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Items mit einem einzelnen `<dd>` verknüpfen muss, sollten diese als ein einzelnes `<dt>` bereitgestellt werden, das mehrere Begriffe enthält, durch Kommas getrennt, wie folgt:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Der Grund für die hier beschriebene Syntax ist, dass sie gut mit Tools funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), während sie noch relativ einfach zu schreiben und zu parsen ist.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN verwenden. Es gibt jedoch Zeiten, in denen GFM-Tabellen nicht unseren Bedürfnissen entsprechen:

- Die GFM-Syntax unterstützt nur eine Teilmenge der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die "Eigenschaftstabelle" genannt wird und ihre eigene CSS-Klasse hat und daher immer HTML ist.

Das allgemeine Prinzip ist, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf reines HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann man HTML-Tabellen verwendet](#wann_man_html-tabellen_verwendet).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende Pipes für Zeilen weglassen. Zur besseren Lesbarkeit müssen MDN-Autoren jedoch diese Pipes einfügen. Darüber hinaus müssen Autoren in den Zeilen führende Leerzeichen bereitstellen, sodass alle Zellen in einer Spalte in Klartext die gleiche Länge haben.

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

Glücklicherweise wird die Tabellenformatierung von Prettier automatisch korrigiert, sodass Autoren sich auf Prettier verlassen können, um ihre Tabellen korrekt zu formatieren.

### Wann man HTML-Tabellen verwendet

Es gibt drei Hauptumstände, in denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle, die "Eigenschaftstabelle" genannt wird.

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbegrenzungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Header-Spalte haben.
- GFM wird keine GFM-Blockelemente in Tabellenzellen parsen. Zum Beispiel kann man keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen bekommen.
- GFM unterstützt keine Tabellenelemente über `<table>`, `<tr>`, `<th>` und `<td>` hinaus.
- GFM unterstützt keine Tabellenelementattribute wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eines der nicht unterstützten Features verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite einer GFM-Tabelle

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "[ASCII](/de/docs/Glossary/ASCII)-Art"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellendaten lang werden. Betrachten Sie die folgende Tabelle:

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

In einem Fall wie diesem wäre es besser, HTML zu verwenden.

Das führt uns zu der folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine spezielle Art von Tabelle, die dazu verwendet wird, strukturierte Eigenschaftenwertinhalte über eine Reihe von Seiten eines bestimmten Typs darzustellen. Diese Tabellen haben zwei Spalten: die erste Spalte ist die Kopfzeile und listet die Eigenschaften auf, und die zweite Spalte listet ihre Werte für dieses bestimmte Element auf. Zum Beispiel, hier ist die Eigenschaftstabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle:

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
      <th scope="row">Kanalzählung</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können nicht in GFM dargestellt werden, da sie eine Kopfzeile haben, sodass Autoren in diesem Fall HTML verwenden sollten.
Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Superscript und Subscript

Autoren können die HTML-{{HTMLElement("sup")}}- und {{HTMLElement("sub")}}-Elemente verwenden, wenn nötig, sollten aber Alternativen benutzen, wenn möglich. Insbesondere:

- Für Potenzierung verwenden Sie das Caret-Zeichen: `2^53`.
- Für ordinale Ausdrücke wie 1<sup>st</sup> bevorzugen Sie Wörter wie "erst".
- Für Fußnoten markieren Sie die Fußnotenzeichen nicht aus, z.B. `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalts"-Absatz auf einer Seite—der erste Text, der nach dem Seitenmeta und etwaigen [Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#sidebar_generation) oder [Seitenbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) Makros erscheint.

Diese Zusammenfassung wird für die Suchmaschinenoptimierung (SEO) verwendet und auch automatisch zusammen mit Seitenlisten von einigen Makros eingebunden.
Der erste Absatz sollte daher sowohl kurz als auch informativ sein.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3923>.

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

Siehe [Using macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für mehr Informationen zu Makros.
