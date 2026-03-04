---
title: column-wrap
slug: Web/CSS/Reference/Properties/column-wrap
l10n:
  sourceCommit: 04defe50e601cf53adde40c4bd652a7a4e6eae55
---

{{SeeCompatTable}}

Die **`column-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert das Umbruchverhalten von Überlaufspalten in einem [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout).

## Syntax

```css
/* Keywords */
column-wrap: auto;
column-wrap: nowrap;
column-wrap: wrap;

/* Global values */
column-wrap: inherit;
column-wrap: initial;
column-wrap: revert;
column-wrap: revert-layer;
column-wrap: unset;
```

### Werte

- `auto`
  - : Der Anfangswert. Wenn der Inhaltselement {{cssxref("column-height")}} auf eine {{cssxref("&lt;length>")}} gesetzt ist, löst sich `auto` in `wrap` auf, andernfalls in `nowrap`.
- `nowrap`
  - : Spalten laufen in der Inline-Richtung über.
- `wrap`
  - : Überlaufende Spalten werden in einer neuen Reihe in Blockrichtung platziert.

## Beschreibung

Die `column-wrap` Eigenschaft kann verwendet werden, um die Spalten eines [CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout) so einzurichten, dass sie in einer neuen Reihe umbrechen, wenn sie beginnen, die Spaltenbreite zu überlaufen. Dies ist nützlich, um bei Verwendung der Eigenschaften {{cssxref("column-count")}} oder {{cssxref("column-width")}} zur Einstellung mehrerer Spalten leserlichere Layouts zu erstellen.

Ohne `column-wrap` laufen überzählige Spalten zur Seite über, und Leser müssen in der Inline-Richtung scrollen, um den gesamten Inhalt zu lesen. Die {{cssxref("column-height")}} Eigenschaft ermöglicht zusammen mit `column-wrap`, eine spezifische Höhe für die Spalten festzulegen und sie in eine neue Spaltenreihe umzubrechen, wenn der Rand des Containers erreicht ist.

Der Standardwert für `column-wrap` ist `auto`, das sich in `wrap` auflöst, wenn `column-height` auf einen `<length>`-Wert gesetzt ist; `wrap` ermöglicht es den Spalten mit fester Höhe, auf mehrere Reihen umzubrechen. Wenn `column-height` gleich `auto` ist, löst sich `column-wrap: auto` in `nowrap` auf, was es den Spalten erlaubt, horizontal überzulaufen, wenn eine feste Containerhöhe eingestellt ist.

Aufgrund dieses Standardverhaltens ist es generell nicht notwendig, die `column-wrap` Eigenschaft explizit zu setzen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung der `column-wrap` Eigenschaft zur Erstellung eines umbrochenen Mehrspaltenlayouts durch Einstellen einer `column-height` Eigenschaft.

#### HTML

Wir verwenden ein Gedicht von Dr. Seuss in einem {{htmlelement("ol")}}, das 28 {{htmlelement("li")}}s enthält, gefolgt vom Namen des Autors in einem {{htmlelement("p")}}.

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

Wir definieren das `<ol>` als Mehrspalten-Container, indem wir die {{cssxref("column-width")}} Eigenschaft auf `150px` setzen, was bedeutet, dass der Container so viele Spalten wie möglich enthalten wird, wobei jede Spalte mindestens `150px` breit ist. Die {{cssxref("gap")}} Eigenschaft setzt einen horizontalen Abstand zwischen Spalten und einen vertikalen Abstand zwischen Spaltenreihen. Wir setzen dann die `column-height` auf `3em`, wodurch der Standardwert `auto` der `column-wrap` Eigenschaft in `wrap` aufgelöst wird, um umbrochene Spaltenreihen zu erstellen.

```css live-sample___basic-example
ol {
  column-width: 150px;
  gap: 2em;
  column-height: 3em;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "300")}}

### Vergleich von `wrap` und `nowrap`

Dieses Beispiel zeigt ein Mehrspaltenlayout, das den Unterschied zwischen den `wrap` und `nowrap` Werten demonstriert, indem es Ihnen ermöglicht, den `column-wrap` Wert des Spaltencontainers zwischen diesen beiden umzuschalten. Das Ergebnis ist ein Layout, das dynamisch zwischen horizontalem und vertikalem Scrollen wechselt.

#### HTML und JavaScript

Das Markup dieses Beispiels enthält mehrere Absätze des Inhalts, die von den MDN HTML-, CSS- und JavaScript-Startseiten entnommen wurden, und ein JavaScript-gestütztes [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element, um den `column-wrap` Eigenschaftswert des Containers zwischen `nowrap` und `wrap` umzuschalten. Der HTML- und JavaScript-Code wurde der Kürze halber ausgeblendet.

```html hidden live-sample___wrap-nowrap
<form>
  <label for="set-wrap"
    >Set <code>column-wrap</code> to <code>wrap</code></label
  >
  <input type="checkbox" id="set-wrap" />
</form>
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

```js hidden live-sample___wrap-nowrap
const checkbox = document.getElementById("set-wrap");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.style.columnWrap = "wrap";
  } else {
    document.body.style.columnWrap = "nowrap";
  }
});
```

#### CSS

Wir machen das {{htmlelement("body")}} Element zu einem Mehrspalten-Container, indem wir die {{cssxref("column-count")}} auf `3` setzen. Wir setzen dann ein {{cssxref("gap")}} von `3em 2em`, was einen `3em` Abstand zwischen den Reihen und einen `2em` Abstand zwischen den Spalten ergibt.

Wir setzen dann eine `column-height` von `90vh`, wodurch die Spalten fast so hoch wie das Ansichtsfenster werden. Wir setzen auch `column-wrap` auf `nowrap`, was dazu führt, dass überflüssige Inhaltsspalten horizontal überlaufen. Dies ist erforderlich, da der anfängliche `column-wrap` Wert `auto` ist, welcher sich in `wrap` auflöst, wenn `column-height` auf einen `<length>`-Wert gesetzt ist.

Das Kontrollkästchen schaltet die `column-wrap` Eigenschaft zwischen `nowrap` und `wrap` um. Wenn auf `wrap` gesetzt, laufen die überzähligen Inhaltsspalten vertikal in neue Reihen von Spalten über und schaffen so das vertikale Layout. Der `column-height` Wert führt dazu, dass jede Spaltenreihe das Ansichtsfenster ausfüllt.

```css live-sample___wrap-nowrap
body {
  column-count: 3;
  gap: 3em 2em;
  padding: 0 2em;
  column-height: 90vh;
  column-wrap: nowrap;
}
```

Anschließend setzen wir die {{cssxref("column-span")}} Eigenschaft des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) Elements auf `all`, damit die Überschrift alle Spalten überspannt, und setzen die {{cssxref("margin-top")}} Eigenschaft des ersten {{htmlelement("p")}} auf `0`, damit sie mit der Oberkante der Spalten übereinstimmt.

```css live-sample___wrap-nowrap
h1 {
  column-span: all;
}

p:first-of-type {
  margin-top: 0;
}
```

```css hidden live-sample___wrap-nowrap
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  line-height: 1.5;
}

@supports not (column-wrap: wrap) {
  body::before {
    content: "Your browser does not support the 'column-wrap' property.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}

form {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 5px;
  border: 1px solid black;
}
```

#### Ergebnis

{{EmbedLiveSample("wrap-nowrap", "100%", "400")}}

Schalten Sie das Kontrollkästchen um, um den Wert der `column-wrap` Eigenschaft zu ändern und zwischen horizontalem und vertikalem Scrollen zu wechseln. Wenn `column-wrap` auf `nowrap` gesetzt ist, laufen die Spalten horizontal über; wenn `column-wrap` auf `wrap` gesetzt ist, werden neue Spaltenreihen vertikal hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}} Kurzschrift
- {{Cssxref("column-height")}}
- [CSS Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
