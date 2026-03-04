---
title: column-height
slug: Web/CSS/Reference/Properties/column-height
l10n:
  sourceCommit: 04defe50e601cf53adde40c4bd652a7a4e6eae55
---

{{SeeCompatTable}}

Die **`column-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe der Spalten in einem [CSS mehrspaltigen Layout](/de/docs/Web/CSS/Guides/Multicol_layout) fest.

Die {{cssxref("columns")}} Kurzschreibweise kann verwendet werden, um die Werte der Eigenschaften `column-height`, {{cssxref("column-count")}} und {{cssxref("column-width")}} in einer einzigen Deklaration festzulegen.

## Syntax

```css
/* Keyword */
column-height: auto;

/* <length> value */
column-height: 300px;
column-height: 25em;
column-height: 70vh;

/* Global values */
column-height: inherit;
column-height: initial;
column-height: revert;
column-height: revert-layer;
column-height: unset;
```

### Werte

- `auto`
  - : Der Standardwert. Wenn der Inhaltscontainer eine festgelegte Höhe hat, wachsen die Inhaltsspalten bis zu dieser Höhe und überlaufen zur Seite, wenn der Inhalt nicht in den Container passt. Wenn der Inhaltscontainer keine festgelegte Höhe hat, wird der Inhalt gleichmäßig zwischen den im Container erzeugten Spalten verteilt.
- {{cssxref("&lt;length>")}}
  - : Die Höhe der Spalten. Muss nicht negativ sein.

## Beschreibung

Die Eigenschaft `column-height` legt die Höhe der Spalten in einem [mehrspaltigen Layout](/de/docs/Web/CSS/Guides/Multicol_layout) fest. Dies ist nützlich, um die Höhe der Spalten zur besseren Lesbarkeit zu begrenzen, wenn mehrere Spalten mit der Eigenschaft {{cssxref("column-count")}} oder {{cssxref("column-width")}} festgelegt werden.

Ohne `column-height`, wenn die Höhe des mehrspaltigen Inhalts die Höhe der Ansicht übersteigt, müssen Leser bis zum Ende einer Spalte scrollen und dann wieder nach oben zur nächsten Spalte zurückkehren. Eine mögliche Lösung wäre, eine feste Höhe für den Inhaltscontainer festzulegen. In diesem Fall werden jedoch überflüssige Spalten zur Seite überlaufen und Leser müssen in die Inline-Richtung scrollen, um den gesamten Inhalt zu lesen.

Die Eigenschaft `column-height` ermöglicht es zusammen mit {{cssxref("column-wrap")}}, eine bestimmte Höhe für die Spalten festzulegen und sie auf eine neue Reihe von Spalten umzubrechen, wenn der Rand des Containers erreicht wird.

Der Standardwert von `column-wrap` ist `auto`, was sich in `wrap` auflöst, wenn `column-height` auf einen `<length>` Wert gesetzt ist; `wrap` erlaubt es den Spalten mit fester Höhe, sich in mehrere Zeilen umzubrechen. Wenn `column-height` gleich `auto` ist, löst sich `column-wrap: auto` in `nowrap` auf, sodass die Spalten horizontal überlaufen, wenn eine feste Containerhöhe festgelegt ist. Aufgrund dieses Standardverhaltens müssen Sie die Eigenschaft `column-wrap` in der Regel nicht explizit festlegen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der Eigenschaft `column-height`, um ein umbrochenes Mehrspaltenlayout zu erstellen.

#### HTML

Wir fügen ein Gedicht von Dr. Seuss ein, welches ein {{htmlelement("ol")}} mit 28 {{htmlelement("li")}}s und anschließend den Namen des Autors in einem {{htmlelement("p")}} enthält.

```html
<ol>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  ...
</ol>
<p>-- Dr. Seuss</p>
```

```html hidden live-sample___basic-example
<ol>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
  <li>Yes. Some are red. And some are blue.</li>
  <li>Some are old. And some are new.</li>
  <li>Some are sad.</li>
  <li>And some are glad.</li>
  <li>And some are very, very bad.</li>
  <li>Why are they</li>
  <li>Sad and glad and bad?</li>
  <li>I do not know.</li>
  <li>Go ask your dad.</li>
  <li>Some are thin.</li>
  <li>And some are fat.</li>
  <li>The fat one has</li>
  <li>A yellow hat.</li>
  <li>From there to here, from here to there,</li>
  <li>Funny things</li>
  <li>Are everywhere.</li>
</ol>
<p>--Dr. Seuss</p>
```

#### CSS

Wir definieren das `<ol>` als Mehrspaltencontainer, indem wir die Eigenschaft {{cssxref("column-width")}} auf `150px` setzen, was bedeutet, dass der Container so viele Spalten wie möglich enthalten wird, von denen jede mindestens `150px` breit ist. Die Eigenschaft {{cssxref("gap")}} von `2em` setzt einen horizontalen Abstand zwischen den Spalten und einen vertikalen Abstand zwischen den Reihen von Spalten. Wir setzen dann die `column-height` auf `2em`, was dazu führt, dass der Standardwert der Eigenschaft `column-wrap` von `auto` in `wrap` aufgelöst wird, um umbrochene Reihen von Spalten zu erstellen.

```css live-sample___basic-example
ol {
  column-width: 150px;
  gap: 2em;
  column-height: 3em;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "300")}}

### Scroll-fixierte Spalten

Dieses Beispiel kombiniert ein umbrochenes Mehrspaltenlayout mit [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap), um eine benutzerfreundliche Erfahrung zu schaffen, bei der jede Scroll-Aktion eine neue Reihe von Spalten ordentlich innerhalb der gesamten Höhe des Ansichtsfensters für komfortables Lesen einrastet.

#### HTML

Das HTML, das mehrere Absätze mit Inhalten von den MDN-HTML-, CSS- und JavaScript-Startseiten enthält, wurde der Kürze halber ausgeblendet.

```html hidden live-sample___scroll-snapped live-sample___column-playground
<h1>HTML, CSS, and JavaScript summaries</h1>
<p>
  <strong>HTML</strong> (HyperText Markup Language) is the most basic building
  block of the Web. It defines the meaning and structure of web content. Other
  technologies besides HTML are generally used to describe a web page's
  appearance (CSS) or behavior (JavaScript).
</p>
<p>
  "Hypertext" refers to links that connect web pages to one another, either
  within a single website or between websites. Links are a fundamental aspect of
  the Web. By uploading content to the Internet and linking it to pages created
  by other people, you become an active participant in the World Wide Web.
</p>
<p>
  HTML uses "markup" to annotate text, images, and other content for display in
  a Web browser. HTML markup includes special "elements" such as
  <a href="/en-US/docs/Web/HTML/Reference/Elements/head"
    ><code>&lt;head&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/title"
    ><code>&lt;title&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/body"
    ><code>&lt;body&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/header"
    ><code>&lt;header&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/footer"
    ><code>&lt;footer&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/article"
    ><code>&lt;article&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/section"
    ><code>&lt;section&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/p"><code>&lt;p&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/div"
    ><code>&lt;div&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/span"
    ><code>&lt;span&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/img"
    ><code>&lt;img&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/aside"
    ><code>&lt;aside&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/audio"
    ><code>&lt;audio&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/canvas"
    ><code>&lt;canvas&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/datalist"
    ><code>&lt;datalist&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/details"
    ><code>&lt;details&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/embed"
    ><code>&lt;embed&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/nav"
    ><code>&lt;nav&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/search"
    ><code>&lt;search&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/output"
    ><code>&lt;output&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/progress"
    ><code>&lt;progress&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/video"
    ><code>&lt;video&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/ul"
    ><code>&lt;ul&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/ol"
    ><code>&lt;ol&gt;</code></a
  >,
  <a href="/en-US/docs/Web/HTML/Reference/Elements/li"
    ><code>&lt;li&gt;</code></a
  >
  and many others.
</p>
<p>
  An HTML element is set off from other text in a document by "tags", which
  consist of the element name surrounded by <code>&lt;</code> and
  <code>&gt;</code>. The name of an element inside a tag is case-insensitive.
  That is, it can be written in uppercase, lowercase, or a mixture. For example,
  the <code>&lt;title&gt;</code> tag can be written as
  <code>&lt;Title&gt;</code>, <code>&lt;TITLE&gt;</code>, or in any other way.
  However, the convention and recommended practice is to write tags in
  lowercase.
</p>

<hr />

<p>
  <strong>Cascading Style Sheets</strong> (<strong>CSS</strong>) is a
  <a href="/en-US/docs/Web/API/StyleSheet">stylesheet</a> language used to
  describe the presentation of a document written in
  <a href="/en-US/docs/Web/HTML">HTML</a> or
  <a href="/en-US/docs/Web/XML/Guides/XML_introduction">XML</a> (including XML
  dialects such as <a href="/en-US/docs/Web/SVG">SVG</a>,
  <a href="/en-US/docs/Web/MathML">MathML</a> or
  <a href="/en-US/docs/Glossary/XHTML">XHTML</a>). CSS describes how elements
  should be rendered on screen, on paper, in speech, or on other media.
</p>
<p>
  CSS is among the core languages of the <strong>open web</strong> and is
  standardized across web browsers according to
  <a href="https://www.w3.org/Style/CSS/#specs" class="external" target="_blank"
    >W3C specifications</a
  >. Previously, the development of various parts of CSS specification was done
  synchronously, which allowed the versioning of the latest recommendations. You
  might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3
  or a CSS4; rather, everything is now just "CSS" with individual CSS modules
  having version numbers.
</p>
<p>
  After CSS 2.1, the scope of the specification increased significantly and the
  progress on different CSS modules started to differ so much, that it became
  more effective to
  <a
    href="https://www.w3.org/Style/CSS/current-work"
    class="external"
    target="_blank"
    >develop and release recommendations separately per module</a
  >. Instead of versioning the CSS specification, W3C now periodically takes a
  snapshot of
  <a href="https://www.w3.org/TR/css/" class="external" target="_blank"
    >the latest stable state of the CSS specification</a
  >
  and individual modules progress. CSS modules now have version numbers, or
  levels, such as
  <a
    href="https://drafts.csswg.org/css-color-5/"
    class="external"
    target="_blank"
    >CSS Color Module Level 5</a
  >.
</p>

<hr />

<p>
  <strong>JavaScript</strong> (<strong>JS</strong>) is a lightweight interpreted
  (or
  <a href="/en-US/docs/Glossary/Just_In_Time_Compilation"
    >just-in-time compiled</a
  >) programming language with
  <a href="/en-US/docs/Glossary/First-class_Function">first-class functions</a>.
  While it is most well-known as the scripting language for Web pages,
  <a
    href="https://en.wikipedia.org/wiki/JavaScript#Other_usage"
    class="external"
    target="_blank"
    >many non-browser environments</a
  >
  also use it, such as <a href="/en-US/docs/Glossary/Node.js">Node.js</a>,
  <a href="https://couchdb.apache.org/" class="external" target="_blank"
    >Apache CouchDB</a
  >
  and
  <a
    href="https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/"
    class="external"
    target="_blank"
    >Adobe Acrobat</a
  >. JavaScript is a
  <a href="/en-US/docs/Glossary/Prototype-based_programming">prototype-based</a
  >, <a href="/en-US/docs/Glossary/Garbage_collection">garbage-collected</a>,
  <a href="/en-US/docs/Glossary/Dynamic_typing">dynamic</a> language, supporting
  multiple paradigms such as imperative, functional, and object-oriented.
</p>
<p>
  JavaScript's dynamic capabilities include runtime object construction,
  variable parameter lists, function variables, dynamic script creation (via
  <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval"
    ><code>eval</code></a
  >), object introspection (via
  <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
    ><code>for...in</code></a
  >
  and
  <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods"
    ><code>Object</code> utilities</a
  >), and source-code recovery (JavaScript functions store their source text and
  can be retrieved through
  <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString"
    ><code>toString()</code></a
  >).
</p>
<p>
  This section is dedicated to the JavaScript language itself, and not the parts
  that are specific to Web pages or other host environments. For information
  about <a href="/en-US/docs/Glossary/API">APIs</a> that are specific to Web
  pages, please see <a href="/en-US/docs/Web/API">Web APIs</a> and
  <a href="/en-US/docs/Glossary/DOM">DOM</a>.
</p>
<p>
  The standards for JavaScript are the
  <a href="https://tc39.es/ecma262/" class="external" target="_blank"
    >ECMAScript Language Specification</a
  >
  (ECMA-262) and the
  <a href="https://tc39.es/ecma402/" class="external" target="_blank"
    >ECMAScript Internationalization API specification</a
  >
  (ECMA-402). As soon as one browser implements a feature, we try to document
  it. This means that cases where some
  <a href="https://github.com/tc39/proposals" class="external" target="_blank"
    >proposals for new ECMAScript features</a
  >
  have already been implemented in browsers, documentation and examples in MDN
  articles may use some of those new features. Most of the time, this happens
  between the
  <a href="https://tc39.es/process-document/" class="external" target="_blank"
    >stages</a
  >
  3 and 4, and is usually before the spec is officially published.
</p>
<p>
  Do not confuse JavaScript with the
  <a
    href="https://en.wikipedia.org/wiki/Java_(programming_language)"
    class="external"
    target="_blank"
    >Java programming language</a
  >
  — <strong>JavaScript is <em>not</em> "Interpreted Java"</strong>. Both "Java"
  and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S.
  and other countries. However, the two programming languages have very
  different syntax, semantics, and use.
</p>
<p>
  JavaScript documentation of core language features (pure
  <a
    href="/en-US/docs/Web/JavaScript/Reference/JavaScript_technologies_overview"
    >ECMAScript</a
  >, for the most part) includes the following:
</p>
```

#### CSS

Wir beginnen, indem wir {{cssxref("column-width")}} auf dem {{htmlelement("body")}} Element festlegen, um die bevorzugte Breite für die Spalten zu definieren. Ein {{cssxref("gap")}} von `3em 2em` führt zu einem `3em` Abstand zwischen den Reihen und einem `2em` Abstand zwischen den Spalten. Die {{cssxref("column-rule")}} fügt eine Linie in die Mitte des Abstands zwischen den Spalten hinzu. Die `column-height` von `95vh` macht die Spalten fast so hoch wie das Ansichtsfenster.

Wir setzen {{cssxref("column-wrap")}} explizit auf `wrap` als Erinnerung an das angewandte Umbruchverhalten. Wir hätten den Wert auf `auto` setzen oder die Eigenschaft ganz weglassen können, da `column-wrap` standardmäßig in `wrap` aufgelöst wird, wenn `column-height` auf einen `<length>` Wert gesetzt ist.

```css live-sample___scroll-snapped
body {
  column-width: 150px;
  column-rule: 2px solid red;
  gap: 3em 2em;
  padding: 0 2em;
  column-height: 95vh;
  column-wrap: wrap;
}
```

Als Nächstes setzen wir die {{cssxref("column-span")}} Eigenschaft des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Elements auf `all`, um die Überschrift über alle Spalten zu erstrecken, und setzen die {{cssxref("margin-top")}} Eigenschaft des ersten {{htmlelement("p")}} auf `0`, damit es sich mit dem oberen Rand der Spalten ausrichtet.

```css live-sample___scroll-snapped live-sample___column-playground
h1 {
  column-span: all;
}

p:first-of-type {
  margin-top: 0;
}
```

Schließlich fügen wir Scroll-Snapping hinzu, indem wir {{cssxref("scroll-snap-type")}} auf `y mandatory` auf dem {{htmlelement("html")}} Element setzen und {{cssxref("scroll-snap-align")}} auf `start` auf den {{cssxref("::column")}} Pseudo-Elementen, die jede generierte Spalte darstellen. Dies bewirkt, dass sich der Inhalt bei jedem Scrollen an die Oberseite einer neuen Spalte anpasst.

```css live-sample___scroll-snapped
html {
  scroll-snap-type: y mandatory;
}

::column {
  scroll-snap-align: start;
}
```

```css hidden live-sample___scroll-snapped live-sample___column-playground
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  line-height: 1.5;
}

@supports not (column-height: 15em) {
  body::before {
    content: "Your browser does not support the 'column-height' property.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("scroll-snapped", "100%", "400")}}

Versuchen Sie, den Inhalt zu scrollen. Beachten Sie, wie jede neue Reihe von Spalten den Bildschirm füllt und wie der Inhalt bei jedem Scrollen sauber an die Oberseite einer neuen Reihe anschnappt.

### `column-height` und `column-count` Spielplatz

Dieses Beispiel baut auf dem vorherigen auf, indem es zwei Bereichsschieber einschließt, die es Ihnen ermöglichen, die Spaltenanzahl und die Spaltenhöhe des mehrspaltigen Layouts anzupassen.

#### HTML und JavaScript

Das HTML ist dasselbe wie im vorherigen Beispiel, mit der Ergänzung eines Formulars, das zwei [`<input="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Elemente enthält, die die Werte von `column-count` und `column-height` über JavaScript aktualisieren. Das HTML und JavaScript wurden der Kürze halber ausgeblendet.

```html hidden live-sample___column-playground
<form>
  <div>
    <label for="columns">
      <code>column-count <output id="columns-output">3</output></code>
    </label>
    <input type="range" min="3" max="6" value="3" id="columns" />
  </div>
  <div>
    <label for="column-height">
      <code>column-height <output id="column-height-output">20em</output></code>
    </label>
    <input type="range" min="10" max="30" value="20" id="column-height" />
  </div>
</form>
```

```js hidden live-sample___column-playground
const columnsRange = document.getElementById("columns");
const columnsOutput = document.getElementById("columns-output");
const columnHeightRange = document.getElementById("column-height");
const columnHeightOutput = document.getElementById("column-height-output");

columnsRange.addEventListener("input", () => {
  document.body.style.columnCount = columnsRange.value;
  columnsOutput.textContent = columnsRange.value;
});

columnHeightRange.addEventListener("input", () => {
  document.body.style.columnHeight = `${columnHeightRange.value}em`;
  columnHeightOutput.textContent = `${columnHeightRange.value}em`;
});
```

#### CSS

Wir spezifizieren die {{cssxref("column-rule")}} und {{cssxref("gap")}} mit denselben Werten wie im vorherigen Beispiel. Wir spezifizieren keine `column-width`; stattdessen erstellen wir ein mehrspaltiges Layout mit der Eigenschaft {{cssxref("column-count")}}, indem wir die Anzahl der Spalten und die Höhe der Spaltenreihen interaktiv mit JavaScript festlegen. Scroll-Snapping ist in diesem Beispiel nicht enthalten.

```css live-sample___column-playground
body {
  column-count: 3;
  column-height: 20em;
  column-rule: 2px solid red;
  gap: 3em 2em;
  padding: 0 2em;
}
```

```css hidden live-sample___column-playground
form {
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  position: fixed;
  bottom: 1px;
  right: 1px;
}

form div {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
}
```

#### Ergebnis

{{EmbedLiveSample("column-playground", "100%", "400")}}

Passen Sie die Anzahl der Spalten und die Spaltenhöhe an, um die Auswirkungen dieser Eigenschaften zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}} Kurzschreibweise
- {{Cssxref("column-wrap")}}
- [CSS mehrspaltiges Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
