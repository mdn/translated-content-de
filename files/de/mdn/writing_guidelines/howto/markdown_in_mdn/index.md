---
title: Wie man in Markdown schreibt
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 487085d8bbd6d80719e6c28ade98563479727df7
---

{{MDNSidebar}}

Diese Seite beschreibt, wie wir Markdown verwenden, um Dokumentation auf den MDN Web Docs zu verfassen. Wir haben GitHub-Flavored Markdown (GFM) als Basis gewählt und einige Erweiterungen hinzugefügt, um einige der Dinge zu unterstützen, die wir auf MDN tun müssen und die nicht direkt von GFM unterstützt werden.

## Basis: GitHub-Flavored Markdown

Die Basis für MDN Markdown ist GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Das bedeutet, dass Sie auf die GFM-Spezifikation für alles, was nicht ausdrücklich auf dieser Seite spezifiziert ist, verweisen können. GFM ist wiederum eine Obermenge von CommonMark (<https://spec.commonmark.org/>).

## Links

Die GFM-Spezifikation definiert zwei grundlegende Arten von Links:

- [inline links](https://github.github.com/gfm/#inline-link), bei denen das Ziel direkt nach dem Linktext angegeben wird.
- [reference links](https://github.github.com/gfm/#reference-link), bei denen das Ziel an anderer Stelle im Dokument definiert wird.

Auf MDN erlauben wir nur Inline-Links.

Dies ist die korrekte Art, GFM-Links auf MDN zu schreiben:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) sind köstlich, aber schwierig zuzubereiten.
```

Dies ist eine inkorrekte Art, Links auf MDN zu schreiben:

```md example-bad
[Macarons][macaron] sind köstlich, aber schwierig zuzubereiten.

[macaron]: https://en.wikipedia.org/wiki/Macaron
```

## Beispiel-Codeblöcke

In GFM und CommonMark können Autoren "code fences" verwenden, um `<pre>`-Blöcke zu markieren. Das öffnende Code-Fence kann von einem Text gefolgt werden, der als "info string" bezeichnet wird. Die Spezifikation besagt Folgendes:

> Das erste Wort des Info-Strings wird typischerweise verwendet, um die Sprache des Codebeispiels anzugeben und wird im class-Attribut des Code-Tags gerendert.

Es ist zulässig, dass der Info-String mehrere Wörter enthält, wie:

````md
```fee fi fo fum
// some example code
```
````

Auf MDN werden Autoren Code-Fences für Beispiel-Codeblöcke verwenden. Sie müssen die Sprache des Codebeispiels mit dem ersten Wort des Info-Strings angeben, und dies wird verwendet, um Syntax-Highlighting für den Block bereitzustellen. Die folgenden Wörter werden unterstützt:

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
    - `glsl` - GLSL (OpenGL Shader)
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
- Templates
  - `django` - Django-Templates
  - `svelte` - Svelte-Templates
  - `handlebars` - Handlebars-Templates
  - `pug` - [Pug-Templates](https://pugjs.org/api/getting-started.html) (kann von [Express](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer) verwendet werden)
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

Wenn das gewünschte Highlighting nicht in der obigen Liste enthalten ist, sollten Sie den Codeblock als `plain` markieren. Zusätzliche Sprachen können im [auf GitHub diskutierten Verfahren](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366) angefordert werden.

### Unterdrückung von Linting

Autoren können ein `-nolint`-Suffix zu einem der Sprachkennungen hinzufügen:

````md-nolint
```html-nolint
<p>
I will not be linted.
</p>
```
````

Solche Codeblöcke erhalten das passende Syntax-Highlighting und werden vom Live-Sample-System erkannt, aber von Lintern oder automatischen Formatierern wie Prettier ignoriert. Autoren sollten dieses Suffix verwenden, um ungültigen Code oder alternative Formatierungen zu zeigen, die von Lintern oder Formatierern nicht behoben werden sollten.

### Zusätzliche Klassen (info strings)

GFM unterstützt [info strings](https://github.github.com/gfm/#info-string), die es Autoren ermöglichen, zusätzliche Informationen über einen Codeblock bereitzustellen. Auf MDN werden Info-Strings in Klassennamen umgewandelt.

Autoren können einen der folgenden Info-Strings angeben:

- `example-good`: Dieses Beispiel als gutes Beispiel stilisieren (eines, dem gefolgt werden sollte)
- `example-bad`: Dieses Beispiel als schlechtes Beispiel stilisieren (eines, das vermieden werden sollte)
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

### Diskussionsreferenz

Dieses Problem wurde gelöst in:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Hinweise, Warnungen und Hinweise

Autoren können die [GFM alerts syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) verwenden, um besonderen Inhalt hervorzuheben. Es gibt drei Arten von Alerts: Notizen, Warnungen und Hinweise.

> [!NOTE]
> MDN Web Docs unterstützten Alerts mit ihrer eigenen Syntax vor der Unterstützung für GFM-Alerts und bezeichneten sie als "noteblocks".
> MDN unterstützt nicht die folgenden GFM-Alerts: `[!TIP]`, `[!CAUTION]`, `[!IMPORTANT]`.
> GFM unterstützt `[!CALLOUT]` nicht.

- Um eine Notiz hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!NOTE]` ist.
- Um eine Warnung hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!WARNING]` ist.
- Um einen Hinweis hinzuzufügen, erstellen Sie ein Blockzitat, dessen erste Zeile `[!CALLOUT]` ist.

Notizen und Warnungen fügen einen lokalisierten **Hinweis:** oder **Warnung:** an den Anfang der Ausgabe, während Hinweise dies nicht tun. Dies macht Hinweise zu einer guten Wahl, wenn ein Autor einen benutzerdefinierten Titel angeben möchte.

> [!WARNING]
> In der älteren MDN-Syntax wurde der Typ lokalisiert und dem ersten Absatz in fettem Text hinzugefügt, also `**Hinweis:** Foo bar` anstelle von `[!NOTE] ⏎ Foo bar`.
>
> Die ältere Syntax wird weiterhin für Migrationszwecke unterstützt. Vermeiden Sie deren Verwendung in neuer Dokumentation.

> [!WARNING]
> Derzeit kann aufgrund eines [Prettier-Bugs](https://github.com/prettier/prettier/issues/15479) die GFM-Alert-Syntax nicht verwendet werden, wenn das erste Zeichen einer Notiz oder Warnung ein Formatierungssymbol ist, wie ein Rückwärtsapostroph, Sternchen, eckige Klammer oder geschweifte Klammer. In diesem Fall verwenden Sie die alte Syntax `> **Hinweis:**` stattdessen. Autoren müssen den Inhalt nicht umformulieren, um den Formatter zu umgehen.

Mehrere Zeilen werden durch eine leere Blockzitat-Zeile auf die gleiche Weise wie normale Absätze erzeugt. Weiterhin werden mehrere Zeilen ohne Leerzeichen auch wie normale Markdown-Zeilen behandelt und zusammengefügt.

Das Blockzitat kann Codeblöcke oder andere Blockelemente enthalten.

### Beispiele

#### Hinweis

```md
> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann mehrere Zeilen haben.
```

Dies produziert das folgende HTML:

```html
<div class="notecard note">
  <p><strong>Hinweis:</strong> So schreiben Sie eine Notiz.</p>
  <p>Sie kann mehrere Zeilen haben.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten angezeigt:

> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann mehrere Zeilen haben.

#### Warnungen

```md
> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann mehrere Absätze haben.
```

Dies produziert das folgende HTML:

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreiben Sie eine Warnung.</p>
  <p>Sie kann mehrere Absätze haben.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten angezeigt:

> [!WARNING]
> So schreiben Sie eine Warnung.
>
> Sie kann mehrere Absätze haben.

#### Hinweise

```md
> [!CALLOUT]
>
> **So schreiben Sie einen Hinweis.**
>
> Er kann mehrere Absätze haben.
```

Dies produziert das folgende HTML:

```html
<div class="callout">
  <p><strong>So schreiben Sie einen Hinweis.</strong></p>
  <p>Er kann mehrere Absätze haben.</p>
</div>
```

Dieses HTML wird als hervorgehobener Kasten angezeigt:

> [!CALLOUT]
>
> **So schreiben Sie einen Hinweis.**
>
> Er kann mehrere Absätze haben.

#### Hinweis mit einem Codeblock

Dieses Beispiel enthält einen Codeblock.

````md
> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So wie das.
````

Dies produziert das folgende HTML:

```html
<div class="notecard note">
  <p><strong>Hinweis:</strong> So schreiben Sie eine Notiz.</p>
  <p>Sie kann Codeblöcke enthalten.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>So wie das.</p>
</div>
```

Dieses HTML wird mit einem Codeblock angezeigt:

> [!NOTE]
> So schreiben Sie eine Notiz.
>
> Sie kann Codeblöcke enthalten.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> So wie das.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3483>.

## Definitionslisten

Definitionslisten werden häufig auf MDN verwendet, sind aber nicht von GFM unterstützt. MDN führt ein benutzerdefiniertes Format für Definitionslisten ein, das eine modifizierte Form einer GFM-Markierungsliste ({{HTMLElement("ul")}}) ist. In diesem Format:

- Die GFM `<ul>` enthält eine beliebige Anzahl von obersten GFM `<li>`-Elementen.
- Jedes dieser oberen GFM `<li>`-Elemente muss als letztes Element ein GFM `<ul>`-Element enthalten.
- Dieses letzte verschachtelte `<ul>` muss ein einzelnes GFM `<li>`-Element enthalten, dessen Textinhalt mit ": " (ein Doppelpunkt gefolgt von einem Leerzeichen) beginnen muss. Dieses Element darf Blockelemente enthalten, einschließlich Absätze, Codeblöcke, eingebettete Listen und Notizen.

Jedes dieser oberen GFM `<li>`-Elemente wird in ein Paar `<dt>`/`<dd>` umgewandelt, wie folgt:

- Das oberste GFM `<li>`-Element wird als GFM `<li>`-Element geparst und seine internen Inhalte bilden den Inhalt des `<dt>`, mit Ausnahme des letzten verschachtelten `<ul>`, das nicht im `<dt>` enthalten sein wird.
- Das `<li>`-Element im letzten verschachtelten `<ul>` wird als GFM `<li>`-Element geparst und seine internen Inhalte bilden den Inhalt des `<dd>`, mit Ausnahme des führenden ": ", das verworfen wird.

Zum Beispiel ist dies ein `<dl>`:

````md
- term1

  - : Meine Beschreibung des term1

- `term2`

  - : Meine Beschreibung des term2

    Es kann mehrere Absätze haben und auch Codeblöcke enthalten:

    ```js
    const thing = 1;
    ```
````

In GFM/CommonMark würde dies das folgende HTML ergeben:

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: Meine Beschreibung des term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: Meine Beschreibung des term2</p>
        <p>Es kann mehrere Absätze haben und auch Codeblöcke enthalten:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

Auf MDN würde dies das folgende HTML ergeben:

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>Meine Beschreibung des term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>Meine Beschreibung des term2</p>
    <p>Es kann mehrere Absätze haben und auch Codeblöcke enthalten:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

Definitionslisten, die mit dieser Syntax geschrieben werden, müssen aus Paaren von `<dt>`/`<dd>`-Elementen bestehen. Mit dieser Syntax ist es nicht möglich, eine Liste mit mehr als einem aufeinanderfolgenden `<dt>`-Element oder mehr als einem aufeinanderfolgenden `<dd>`-Element zu schreiben: Der Parser behandelt dies als Fehler. Wir erwarten, dass fast alle Definitionslisten auf MDN mit dieser Einschränkung funktionieren, und für diejenigen, die dies nicht tun, können Autoren auf Roh-HTML zurückgreifen.

Dies ist nicht erlaubt:

```md example-bad
- `param1`, `param2`, `param3`
  - : Meine Beschreibung von `param1`
  - : Meine Beschreibung von `param2`
  - : Meine Beschreibung von `param3`
```

Als Lösung für Fälle, in denen ein Autor mehrere `<dt>`-Elemente mit einem einzelnen `<dd>`-Element verknüpfen muss, sollten sie diese als einzelnes `<dt>`, das mehrere Begriffe enthält, bereitstellen, getrennt durch Kommata, wie folgt:

```md example-good
- `param1`, `param2`, `param3`
  - : Meine Beschreibung von Parametern 1, 2 und 3
```

Die Begründung für die hier beschriebene Syntax ist, dass sie gut genug mit Tools funktioniert, die CommonMark erwarten (zum Beispiel Prettier oder GitHub-Vorschauen), während sie relativ einfach zu schreiben und zu parsen ist.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4367>.

## Tabellen

GFM bietet eine Syntax zur Erstellung von [Tabellen](https://github.github.com/gfm/#tables-extension-), die wir auf MDN nutzen. Es gibt jedoch Zeiten, in denen GFM-Tabellen unseren Anforderungen nicht genügen:

- Die GFM-Syntax unterstützt nur einen Untersatz der verfügbaren Funktionen in HTML. Wenn Sie tabellenbezogene Funktionen verwenden müssen, die von GFM nicht unterstützt werden, verwenden Sie HTML für die Tabelle.
- Wenn die GFM-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle.
- Wir unterstützen eine spezielle Art von Tabelle, die als "Eigenschaftstabelle" bezeichnet wird, die ihre eigene CSS-Klasse hat und daher immer HTML ist.

Das allgemeine Prinzip ist, dass Autoren die GFM-Markdown-Syntax verwenden sollten, wenn sie können, und auf Roh-HTML zurückgreifen sollten, wenn sie müssen oder wenn HTML lesbarer ist. Weitere Informationen finden Sie unter [Wann man HTML-Tabellen verwenden sollte](#wann_man_html-tabellen_verwenden_sollte).

### GFM Tabellen-Syntax-Stil

In der GFM-Tabellen-Syntax können Autoren führende und nachgestellte Pipes für Zeilen weglassen. Aus Gründen der Lesbarkeit müssen MDN-Autoren jedoch diese Pipes einfügen. Darüber hinaus müssen Autoren nachgestellte Leerzeichen in Zeilen bereitstellen, sodass alle Zellen in einer Spalte in Klartext dieselbe Länge haben.

Das heißt, MDN-Autoren müssen diesen Stil verwenden:

```md example-good
| Überschrift 1 | Überschrift 2 | Überschrift 3 |
| ------------- | ------------- | ------------- |
| zelle 1       | zelle 2       | zelle 3       |
| zelle 4       | zelle 5       | zelle 6       |
```

und nicht diesen Stil:

```md-nolint example-bad
| Überschrift 1 | Überschrift 2 | Überschrift 3 |
| ------------- | --- |----------------------|
| zelle 1 | zelle 2 | zelle 3 |
zelle 4 | zelle 5 | zelle 6
```

Glücklicherweise wird die Tabellenformatierung von Prettier automatisch korrigiert, sodass Autoren sich auf Prettier verlassen können, um ihre Tabellen richtig zu formatieren.

### Wann man HTML-Tabellen verwenden sollte

Es gibt drei Hauptumstände, unter denen Autoren HTML-Tabellen anstelle der GFM-Syntax verwenden sollten:

1. Die Tabelle verwendet Funktionen, die in GFM nicht unterstützt werden (siehe unten).
2. Die GFM-Tabelle wäre zu breit, um lesbar zu sein.
3. Der Autor möchte eine spezielle Art von Tabelle, die als "Eigenschaftstabelle" bezeichnet wird.

#### Tabellenmerkmale, die nicht von GFM unterstützt werden

Die Hauptbeschränkungen der GFM-Tabellensyntax sind:

- GFM-Tabellen müssen eine Kopfzeile haben.
- GFM-Tabellen dürfen keine Kopfspalte haben.
- GFM wird GFM-Blockelemente in Tabellenzellen nicht parsen. Beispielsweise können Sie keine Liste in einer Tabellenzelle haben.
- GFM-Tabellen können keine Klassen zugewiesen werden.
- GFM unterstützt keine anderen Tabelelemente als `<table>`, `<tr>`, `<th>`, und `<td>`.
- GFM unterstützt keine Tabellenelementattribute wie `colspan`, `rowspan` oder `scope`.

Wenn ein Autor eines der nicht unterstützten Merkmale verwenden muss, sollte er die Tabelle in HTML schreiben.

Beachten Sie, dass wir die allgemeine Verwendung von `<caption>`-Elementen in Tabellen nicht empfehlen, da dies auch die GFM-Syntax ausschließen würde.

#### Maximale Breite einer GFM-Tabelle

Selbst wenn eine Tabelle in GFM geschrieben werden könnte, ist es manchmal besser, HTML zu verwenden, da GFM einen "{{Glossary("ASCII")}} kunstbasierten" Ansatz für Tabellen verwendet, der nicht lesbar ist, wenn Tabellenzeilen lang werden. Betrachten Sie die folgende Tabelle:

```html
<table>
  <tr>
    <th>Eine Überschrift 1</th>
    <th>Eine Überschrift 2</th>
    <th>Eine Überschrift 3</th>
    <th>Eine Überschrift 4</th>
    <th>Eine Überschrift 5</th>
    <th>Eine Überschrift 6</th>
  </tr>
  <tr>
    <td>Etwas Kurzes</td>
    <td>
      Etwas viel Längeres, das wirklich detailliert auf etwas eingeht, so sehr, dass die Formatierung der Tabelle im GFM-Format schlecht aussieht.
    </td>
    <td>Etwas Kurzes</td>
    <td>
      Eine weitere Zelle mit viel Text, die ebenfalls detailliert auf etwas eingeht, so sehr, dass die Formatierung der Tabelle im GFM-Format schlecht aussieht.
    </td>
    <td>Etwas Kurzes</td>
    <td>Etwas Kurzes</td>
  </tr>
</table>
```

In GFM wird dies so aussehen:

```md
| Eine Überschrift 1 | Eine Überschrift 2                                                                                                                             | Eine Überschrift 3 | Eine Überschrift 4                                                                                                                                                | Eine Überschrift 5 | Eine Überschrift 6 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| Etwas Kurzes       | Etwas viel Längeres, das wirklich detailliert auf etwas eingeht, so sehr, dass die Formatierung der Tabelle im GFM-Format schlecht aussieht. | Etwas Kurzes       | Eine weitere Zelle mit viel Text, die ebenfalls detailliert auf etwas eingeht, so sehr, dass die Formatierung der Tabelle im GFM-Format schlecht aussieht. | Etwas Kurzes       | Etwas Kurzes       |
```

In einem solchen Fall wäre es besser, HTML zu verwenden.

Dies führt uns zu der folgenden Richtlinie: _Wenn die Markdown-Darstellung der Tabelle mehr als 150 Zeichen breit wäre, verwenden Sie HTML für die Tabelle_.

#### Eigenschaftstabellen

Eigenschaftstabellen sind eine spezifische Art von Tabelle, die speziell dafür verwendet wird, strukturierte Eigenschaften-Inhalt über eine Gruppe von Seiten eines bestimmten Typs anzuzeigen. Diese Tabellen haben zwei Spalten: Die erste Spalte ist die Kopfzeile und listet die Eigenschaften auf, und die zweite Spalte listet ihre Werte für dieses spezielle Element auf. Zum Beispiel hier die Eigenschaftstabelle für das {{domxref("PannerNode")}}-Interface:

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
      <td><code>"explizit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"lautsprecher"</code></td>
    </tr>
  </tbody>
</table>

Diese Seiten können im GFM nicht dargestellt werden, da sie eine Kopfspalte haben, also sollten Autoren in diesem Fall HTML verwenden.
Um das spezielle Styling zu erhalten, sollten Autoren die `"properties"`-Klasse auf die Tabelle anwenden:

```html
<table class="properties"></table>
```

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342>, und <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Hoch- und Tiefstellungen

Autoren können die HTML {{HTMLElement("sup")}} und {{HTMLElement("sub")}}-Elemente verwenden, wenn nötig, sollten aber Alternativen verwenden, wenn möglich. Besonders:

- Für Exponentierung verwenden Sie das Caret-Zeichen: `2^53`.
- Für Ordinalausdrücke wie 1<sup>st</sup>, bevorzugen Sie Wörter wie "erstens".
- Für Fußnoten markieren Sie keine Fußnotennachweise, z.B. `<sup>[1]</sup>`.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/4578>.

## Seitensummen

Die _Seitensumme_ ist der erste "Inhalts"-Absatz auf einer Seite—der erste Text, der nach dem Seiten-Front-Matter und allen [Sidebar](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#sidebar_generation) oder [Page Banner](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#page_or_section_header_indicators) Makros erscheint.

Diese Zusammenfassung wird für die Suchmaschinenoptimierung (SEO) verwendet und wird auch automatisch zusammen mit Seitenlisten von einigen Makros eingefügt. Der erste Absatz sollte daher sowohl knapp als auch informativ sein.

### Diskussionsreferenz

Dieses Problem wurde gelöst in <https://github.com/mdn/content/issues/3923>.

## KumaScript

Autoren können KumaScript-Makroaufrufe in Prosa-Inhalte einbinden:

```md
Die **`margin`** [CSS](/de/docs/Web/CSS) Eigenschaft
legt den Randbereich auf allen vier Seiten eines Elements fest. Es ist eine Kurzform für
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
und \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

Die oberen und unteren Ränder haben keinen Effekt auf ersetzte Inline-Elemente, wie
\{{HTMLElement("span")}} oder \{{HTMLElement("code")}}.
```

Siehe [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros) für weitere Informationen zu Makros.
