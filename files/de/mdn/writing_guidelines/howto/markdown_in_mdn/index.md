---
title: Anleitung zum Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentationen auf MDN Web Docs zu erstellen. Wir haben uns für GitHub-Flavored Markdown (GFM) als Basis entschieden und einige Erweiterungen hinzugefügt, um einige Dinge zu unterstützen, die wir auf MDN benötigen und die nicht direkt in GFM unterstützt werden.

## Grundlage: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können für alles, was auf dieser Seite nicht explizit spezifiziert ist. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert ist.

Auf MDN erlauben wir nur Inline-Links.

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

In GFM und CommonMark können Autoren "Code-Zäune" verwenden, um `<pre>`-Blöcke zu kennzeichnen. Der öffnende Code-Zaun kann von einem Text gefolgt werden, der als "Info-String" bezeichnet wird. Die Spezifikation besagt Folgendes:

> Das erste Wort des Info-Strings wird typischerweise verwendet, um die Sprache des Codebeispiels zu spezifizieren und wird im `class`-Attribut des `<code>`-Tags angezeigt.

Es ist zulässig, dass der Info-String mehrere Wörter enthält, wie zum Beispiel:

````md
```fee fi fo fum
// some example code
```
````

Auf MDN werden Autoren Code-Zäune für Beispiel-Codeblöcke verwenden. Sie müssen die Sprache des Codebeispiels durch das erste Wort des Info-Strings angeben, und dies wird verwendet, um Syntaxhervorhebung für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

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
  - `handlebars` - Handlebars-Vorlagen
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

Wenn die gewünschte Hervorhebung nicht oben aufgeführt ist, sollten Sie den Codeblock als `plain` markieren.
Zusätzliche Sprachen können im [auf GitHub diskutierten Prozess](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefragt werden.

### Linting unterdrücken

Autoren können ein `-nolint`-Suffix an jeden der Sprachidentifier anhängen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten eine entsprechende Syntaxhervorhebung und werden vom Live-Beispielsystem erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternatives Format zu zeigen, das Linter oder Formatierer nicht korrigieren sollten.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings bereitstellen:

- `example-good`: Dieses Beispiel als gutes Beispiel (eines zum Folgen) stylen
- `example-bad`: Dieses Beispiel als schlechtes Beispiel (eines zum Vermeiden) stylen
- `hidden`: diesen Codeblock auf der Seite nicht rendern. Dies ist für die Verwendung in Live-Beispielen gedacht.

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

Dieses Problem wurde in folgenden Quellen gelöst:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Hinweise, Warnungen und Anmerkungen

Autoren können die [GFM Alerts-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besondere Aufmerksamkeit auf Inhalte zu lenken. Es gibt drei Arten von Hinweisen: Notizen, Warnungen und Anmerkungen.

> [!NOTE]
> MDN Web Docs unterstützten Hinweise mit ihrer eigenen Syntax vor Unterstützung für GFM Alerts und bezeichneten sie als "noteblocks".
> MDN unterstützt die folgenden GFM-Hinweise nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Notiz hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um eine Anmerkung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Notizen und Warnungen fügen im lokalen Kontext ein **Hinweis:** oder **Warnung:** am Anfang des Outputs hinzu, während Anmerkungen dies nicht tun. Dies macht Anmerkungen zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel bereitstellen möchte.

> [!WARNING]
> In der älteren MDN-Syntax wurde der Typ lokalisiert und dem ersten Absatz in Fettschrift hinzugefügt, d.h. `**Hinweis:** Foo bar` anstelle von `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird aus Migrationsgründen weiterhin unterstützt. Vermeiden Sie die Verwendung in neuer Dokumentation.

> [!WARNING]
> Aufgrund eines [Prettier Bugs](https://github.com/prettier/prettier/issues/15479) kann die GFM Alerts-Syntax derzeit nicht verwendet werden, wenn das erste Zeichen einer Notiz oder Warnung ein Formatierungssymbol ist, wie z.B. ein Rückstrich, ein Sternchen, eine eckige Klammer oder eine geschweifte Klammer. In diesem Fall verwenden Sie die alte Syntax `> **Hinweis:**` stattdessen. Autoren müssen den Inhalt nicht umformulieren, um den Formatter zu umgehen.

Mehrere Zeilen werden durch eine leere Blockzitat-Zeile auf die gleiche Weise wie normale Absätze erzeugt. Außerdem werden mehrere Zeilen ohne Abstand wie normale Markdown-Zeilen behandelt und zusammengeführt.

Der Blockquote kann Codeblöcke oder andere Blockelemente enthalten.

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

Dieses HTML wird als hervorgehobener Kasten gerendert:

> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann mehrere Zeilen enthalten.

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

Dieses HTML wird als hervorgehobener Kasten gerendert:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann mehrere Absätze enthalten.

#### Anmerkungen

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

Dieses HTML wird als hervorgehobener Kasten gerendert:

> [!CALLOUT]
>
> **So schreiben Sie eine Anmerkung.**
>
> Sie kann mehrere Absätze enthalten.

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

Dieses HTML wird wie mit einem Codeblock gerendert:

> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So.

### Diskussionsreferenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/3483> gelöst.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, aber nicht von GFM unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM `<ul>` enthält eine beliebige Anzahl von obersten GFM `<li>`-Elementen.
- Jedes dieser obersten GFM `<li>`-Elemente muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte geschachtelte `<ul>` muss ein einzelnes GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " (ein Doppelpunkt gefolgt von einem Leerzeichen) beginnen muss. Dieses Element kann Blockelemente enthalten, einschließlich Absätze, Codeblöcke, eingebettete Listen und Notizen.

Jedes dieser obersten GFM `<li>`-Elemente wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das oberste GFM `<li>`-Element wird als GFM `<li>`-Element analysiert und sein interner Inhalt bildet den Inhalt des `<dt>`, mit Ausnahme des letzten geschachtelten `<ul>`, das nicht im `<dt>` enthalten ist.
- Das `<li>`-Element im letzten geschachtelten `<ul>` wird als GFM `<li>`-Element analysiert und sein interner Inhalt bildet den Inhalt des `<dd>`, mit Ausnahme des führenden ": ", das verworfen wird.

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

Definitionslisten, die mit dieser Syntax geschrieben sind, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: Der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren und für diejenigen, die dies nicht tun, können Autoren auf Roh-HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzigen `<dd>`-Element verbinden muss, sollten sie diese als ein einzelnes `<dt>` bereitstellen, das mehrere Begriffe enthält, getrennt durch Kommas, wie folgt:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Die Begründung für die hier beschriebene Syntax ist, dass sie gut genug mit Werkzeugen funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), während sie relativ einfach zu schreiben und zu analysieren ist.

### Diskussionsreferenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/4367> gelöst.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN nutzen. Allerdings gibt es Zeiten, in denen GFM-Tabellen unseren Anforderungen nicht genügen:

- Die GFM-Syntax unterstützt nur einen Teil der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen verwenden müssen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die als "Eigenschaftstabelle" bezeichnet wird und eine eigene CSS-Klasse hat und daher immer HTML ist.

Das allgemeine Prinzip ist, dass Autoren die GFM Markdown-Syntax verwenden sollten, wenn sie können, und auf Roh-HTML zurückgreifen, wenn sie müssen oder wenn HTML besser lesbar ist. Weitere Informationen finden Sie unter [Wann man HTML-Tabellen verwendet](#wann_man_html-tabellen_verwendet).

### GFM-Tabellen-Syntax-Stil

In der GFM-Tabellensyntax können Autoren führende und abschließende senkrechte Striche für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren jedoch diese Striche einschließen. Außerdem müssen Autoren nachlaufende Leerzeichen in Reihen bereitstellen, sodass alle Zellen in einer Spalte im Klartext die gleiche Länge haben.

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

Zum Glück wird die Tabellenformatierung von Prettier automatisch korrigiert, sodass Autoren sich darauf verlassen können, dass Prettier ihre Tabellen korrekt formatiert.

### Wann man HTML-Tabellen verwendet

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle, eine "Eigenschaftstabelle".

#### Tabellenfunktionen, die nicht in GFM unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen können keine Kopfspalte haben.
- GFM verarbeitet keine GFM-Blockelemente in Tabellenzellen. Zum Beispiel können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine Tabellenelemente außer `<table>`, `<tr>`, `<th>` und `<td>`.
- GFM unterstützt keine Tabellenelement-Attribute wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine der nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Bitte beachten Sie, dass wir die generelle Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite der GFM-Tabelle

Auch wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII", "ASCII")}} Art"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

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

Eigenschaftstabellen sind eine spezifische Art von Tabellen, die zum Anzeigen von strukturierten Eigenschaft-Wert-Inhalten über eine Reihe von Seiten eines bestimmten Typs verwendet werden. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, die zweite Spalte listet ihre Werte für dieses bestimmte Element auf. Zum Beispiel, hier ist die Eigenschaftstabelle für das [`PannerNode`](/de/docs/Web/API/PannerNode)-Interface:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingaben</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgaben</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalzählung Modus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauswertung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können nicht in GFM dargestellt werden, da sie eine Kopfspalte haben, daher sollten Autoren in diesem Fall HTML verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren der Tabelle die `"properties"`-Klasse hinzufügen:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> und <https://github.com/mdn/content/issues/7898#issuecomment-913265900> gelöst.

## Hoch- und Tiefstellung

Autoren können die HTML-Elemente {{HTMLElement("sup")}} und {{HTMLElement("sub")}} verwenden, wenn nötig, sollten jedoch nach Möglichkeit Alternativen verwenden. Insbesondere:

- Für Exponentiation verwenden Sie das Caret: `2^53`.
- Für Ordnungszahlen wie 1<sup>st</sup> bevorzugen Sie Wörter wie "erstens".
- Für Fußnoten markieren Sie die Fußnotenreferenzen nicht, z.B. `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/4578> gelöst.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalts"-Absatz auf einer Seite—der erste Text, der nach dem Seiten-Front-Matter und nach möglichen [Seitenleiste](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#sidebar_generation) oder [Seitenbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators)-Makros erscheint.

Diese Zusammenfassung wird für die Suchmaschinenoptimierung (SEO) verwendet und wird auch automatisch zusammen mit Seitenlisten durch einige Makros eingeschlossen.
Der erste Absatz sollte daher sowohl knapp als auch informativ sein.

### Diskussionsreferenz

Dieses Thema wurde in <https://github.com/mdn/content/issues/3923> gelöst.

## KumaScript

Autoren können KumaScript-Makroaufrufe im Fließtext hinzufügen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property
sets the margin area on all four sides of an element. It is a shorthand for
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
and \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

The top and bottom margins have no effect on replaced inline elements, such as
\{{HTMLElement("span")}} or \{{HTMLElement("code")}}.
```

Mehr Informationen zu Makros finden Sie unter [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros).
