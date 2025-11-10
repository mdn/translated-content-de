---
title: Anleitung zum Schreiben in Markdown
short-title: Schreiben in Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentation auf den MDN Web Docs zu schreiben. Wir haben uns für GitHub-Flavored Markdown (GFM) als Basis entschieden und Erweiterungen hinzugefügt, um die Funktionen zu unterstützen, die wir auf MDN benötigen.

## Basis: GitHub-Flavored Markdown

Die Grundlage für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie sich auf die GFM-Spezifikation beziehen können, wenn etwas nicht explizit auf dieser Seite spezifiziert ist. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [Inline-Links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [Referenz-Links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert ist.

Auf MDN ziehen wir Inline-Links vor, da sie einfacher zu lesen und zu warten sind, ohne den Kontext zu verlieren. Dies ist die bevorzugte Methode zum Schreiben von Links auf MDN:

```md
[Macarons](https://en.wikipedia.org/wiki/Macaron) are delicious but tricky to make.
```

In bestimmten Situationen sind jedoch Referenz-Links aufgrund ihrer Kompaktheit geeigneter. Zum Beispiel kann das Schrumpfen breiter Tabellen das Überprüfen und Bearbeiten erleichtern.

```md
| Name                 | Features                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| [Macarons][macarons] | Delicious but tricky to make. Add more class to a tea party than almost any other confectionary. |
| [Biscotti][biscotti] | Crisp and easier to make.                                                                        |

[macarons]: https://en.wikipedia.org/wiki/Macaron
[biscotti]: https://en.wikipedia.org/wiki/Biscotti
```

In seltenen Fällen, in denen der Einsatz von Referenz-Links notwendig ist, stellen Sie bitte sicher, dass sie unmittelbar nach dem Kontext, in dem sie verwendet werden, folgen.

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "Codezäune" verwenden, um `<pre>`-Blöcke abzugrenzen. Der öffnende Codezaun kann von einem Text gefolgt werden, der als "Info-String" bezeichnet wird. Die Sprache des Codebeispiels muss mit dem ersten Wort des Info-Strings angegeben werden, und dies wird verwendet, um die Syntaxhervorhebung für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

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
- Templates
  - `django` - Django-Templates
  - `svelte` - Svelte-Templates
  - `hbs` - Handlebars-Templates
  - `pug` - [Pug-Templates](https://pugjs.org/api/getting-started.html) (die von [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden können)
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

Wenn die gewünschte Syntaxhervorhebung nicht oben aufgeführt ist, sollten Sie den Codeblock als `plain` kennzeichnen. Zusätzliche Sprachen können über den Prozess [auf GitHub besprochen](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

> [!NOTE]
> Verwenden Sie die Sprachkennzeichnung genau wie oben angegeben. Zum Beispiel ist `javascript` nicht erlaubt und Sie müssen `js` schreiben.

### Unterdrückung der Linter-Prüfung

Autoren können ein `-nolint`-Suffix an jede der Sprachkennzeichnungen anhängen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten die entsprechende Syntaxhervorhebung und werden vom Live-Beispielsystem erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen zu zeigen, die Linters oder Formatierer nicht korrigieren sollen.

### Zusätzliche Klassen (Info-Strings)

GFM unterstützt [Info-Strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen zu einem Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassenamen umgewandelt.

Autoren können einen der folgenden Info-Strings angeben:

- `example-good`: Dieser Beispielcode wird als gutes Beispiel (zum Nachahmen) gestylt.
- `example-bad`: Dieser Beispielcode wird als schlechtes Beispiel (zum Vermeiden) gestylt.
- `hidden`: Dieser Codeblock wird auf der Seite nicht dargestellt. Dies wird in Live-Beispielen verwendet.

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

Autoren können die [GFM Alerts-Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um Inhalte besonders hervorzuheben. Es gibt drei Arten von Alerts: Hinweise, Warnungen und Hervorhebungen.

> [!NOTE]
> MDN Web Docs haben Alerts vorher mit einer eigenen Syntax unterstützt und nannten sie "Notizblöcke".
> MDN unterstützt die folgenden GFM Alerts nicht: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Notiz hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um eine Hervorhebung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Notizen und Warnungen fügen der Ausgabe ein lokalisiertes **Hinweis:** oder **Warnung:** am Anfang hinzu, während Hervorhebungen dies nicht tun. Dies macht Hervorhebungen zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel angeben möchte.

Mehrere Zeilen werden durch eine leere Blockzitat-Zeile im gleichen Stil wie normale Absätze erzeugt. Darüber hinaus werden mehrere Zeilen ohne Leerzeichen auch wie normale Markdown-Zeilen behandelt und zusammengefügt.

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

Dieses HTML wird als hervorgehobenes Feld dargestellt:

> [!NOTE]
> So schreibt man einen Hinweis.
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

Dieses HTML wird als hervorgehobenes Feld dargestellt:

> [!WARNING]
> So schreibt man eine Warnung.
>
> Es kann mehrere Absätze haben.

#### Hervorhebungen

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

Dieses HTML wird als hervorgehobenes Feld dargestellt:

> [!CALLOUT]
>
> **So schreibt man eine Hervorhebung.**
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

Dieses HTML wird mit einem Codeblock dargestellt:

> [!NOTE]
> So schreibt man einen Hinweis.
>
> Es kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So geht das.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/3483> gelöst.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, sind aber nicht in GFM unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM ungeordneten Liste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM `<ul>` enthält eine beliebige Anzahl von obersten GFM `<li>`-Elementen.
- Jedes dieser obersten GFM `<li>`-Elemente muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einzelnes GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " (Doppelpunkt gefolgt von einem Leerzeichen) beginnt. Dieses Element kann Blockelemente enthalten, einschließlich Absätzen, Codeblöcken, eingebetteten Listen und Hinweisen.

Jedes dieser obersten GFM `<li>`-Elemente wird in ein `<dt>`/`<dd>`-Paar umgewandelt, wie folgt:

- Das oberste GFM `<li>`-Element wird als GFM `<li>`-Element geparst und seine internen Inhalte bilden den Inhalt des `<dt>`, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element geparst und seine internen Inhalte bilden den Inhalt des `<dd>`, außer dem führenden ": ", das verworfen wird.

Zum Beispiel, das ist ein `<dl>`:

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

Definitionslisten, die mit dieser Syntax geschrieben wurden, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: der Parser wird dies als Fehler behandeln. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung arbeiten werden, und für diejenigen, die dies nicht tun, können Autoren auf rohes HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : My description of `param1`
  - : My description of `param2`
  - : My description of `param3`
```

Als Workaround für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzigen `<dd>`-Element verknüpfen muss, ziehen Sie in Betracht, sie als ein einziges `<dt>` zu schreiben, das mehrere Begriffe hält, getrennt durch Kommas, wie folgt:

```md example-good
- `param1`, `param2`, `param3`
  - : My description of params 1, 2, and 3
```

Die Begründung für die hier beschriebene Syntax ist, dass sie gut genug mit Werkzeugen funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), und gleichzeitig relativ einfach zu schreiben und zu parsen ist.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/4367> gelöst.

## Tabellen

GFM bietet eine Syntax zum Erstellen von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN verwenden. Es gibt jedoch Zeiten, in denen GFM-Tabellen nicht unseren Anforderungen entsprechen:

- Die GFM-Syntax unterstützt nur einen Teil der in HTML verfügbaren Funktionen. Wenn Sie Tabellenfunktionen benötigen, die in GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle breiter als 150 Zeichen wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die als "Eigenschaftstabelle" bezeichnet wird und durch eine eigene CSS-Klasse ausgezeichnet ist und daher immer HTML ist.

Das allgemeine Prinzip ist daher, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf rohes HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann man HTML-Tabellen verwenden sollte](#wann_man_html-tabellen_verwenden_sollte).

### GFM-Tabellensyntax-Stil

In der GFM-Tabellensyntax können Autoren führende und nachfolgende Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren jedoch diese Pipes einschließen. Außerdem müssen Autoren nachfolgende Leerzeichen in Zeilen bereitstellen, damit alle Zellen in einer Spalte im Klartext die gleiche Länge haben.

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

Tabellen werden von Prettier formatiert, sodass sich Autoren auf Tools verlassen, um Tabellen korrekt zu formatieren.

### Wann man HTML-Tabellen verwenden sollte

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Schreiber möchte eine spezielle Tabellenart verwenden, die als "Eigenschaftstabelle" bezeichnet wird.

#### Tabelleneigenschaften, die in GFM nicht unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen können keine Kopfspalte haben.
- GFM parst keine GFM-Blockelemente in Tabellenzellen. Sie können zum Beispiel keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine Tabellenelemente über `<table>`, `<tr>`, `<th>` und `<td>` hinaus.
- GFM unterstützt keine Tabellenelementattribute wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eine dieser nicht unterstützten Funktionen verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dadurch auch die GFM-Syntax ausgeschlossen würde.

#### GFM-Tabellen maximale Breite

Auch wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII", "ASCII")}}-Kunst"-Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn sich Tabellenzeilen verlängern. Betrachten Sie die folgende Tabelle:

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

Dies führt uns zu der folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle breiter als 150 Zeichen wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine bestimmte Art von Tabelle, die verwendet wird, um strukturierten Eigenschaft-Wert-Inhalt über eine Reihe von Seiten eines bestimmten Typs anzuzeigen. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfspalte und listet die Eigenschaften auf, und die zweite Spalte listet deren Werte für dieses bestimmte Element auf. Zum Beispiel, hier ist die Eigenschaftstabelle für die [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle:

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

Diese Seiten können nicht in GFM dargestellt werden, weil sie eine Kopfspalte haben, daher sollten Autoren HTML in diesem Fall verwenden. Um die spezielle Formatierung zu erhalten, sollten die Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> und <https://github.com/mdn/content/issues/7898#issuecomment-913265900> gelöst.

## Hoch- und Tiefstellung

Autoren können die HTML-Elemente {{HTMLElement("sup")}} und {{HTMLElement("sub")}} bei Bedarf verwenden, sollten jedoch nach Möglichkeit Alternativen verwenden. Insbesondere:

- Für Exponentiation verwenden Sie das Zirkumflexzeichen: `2^53`.
- Für Ordinalausdrücke wie 1<sup>st</sup> bevorzugen Sie Wörter wie "erster".
- Bei Fußnoten markieren Sie nicht die Fußnotenzeichen, z. B. `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/4578> gelöst.

## Seitenzusammenfassung

Die _Seitenzusammenfassung_ ist der erste "Inhalt"-Absatz auf einer Seite—der erste Text, der nach der Seitenkopf- und jeder [Seitenleiste](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) oder [Seitenbanner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) Makros erscheint.

Diese Zusammenfassung wird für die Suchmaschinenoptimierung (SEO) verwendet und auch automatisch zusammen mit Seitenaufzählungen von einigen Makros eingeschlossen. Der erste Absatz sollte daher sowohl prägnant als auch informativ sein.

### Diskussionsreferenz

Dieses Problem wurde in <https://github.com/mdn/content/issues/3923> gelöst.

## Makros

Autoren verwenden Makros in Prosa für die Vorlagen von gemeinsamen Verlinkungsmustern oder um spezifische Code- oder Textblöcke einzuschließen:

```md
The **`margin`** [CSS](/en-US/docs/Web/CSS) property sets the margin area on all four sides of an element.
It is a shorthand for \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}}, and \{{cssxref("margin-left")}}.
…
```

Siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen.
