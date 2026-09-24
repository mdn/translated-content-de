---
title: "`rule-inset-cap` CSS property"
short-title: rule-inset-cap
slug: Web/CSS/Reference/Properties/rule-inset-cap
l10n:
  sourceCommit: 16bd5315b5fa374b4fa37e3c8907614c987f4275
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-inset-cap`** können die [Cap-Endpunkte](#understanding_cap_end) von Spalten- und Zeilenliniensegmenten um denselben Wert versetzt werden.

{{InteractiveExample("CSS Demo: rule")}}

<!-- negative example must come first -->

```css interactive-example-choice
rule-inset-cap: -20px;
```

```css interactive-example-choice
rule-inset-cap: 0;
```

```css interactive-example-choice
rule-inset-cap: 1em;
```

```css interactive-example-choice
rule-inset-cap: 100%;
```

```css interactive-example-choice
rule-inset-cap: overlap-join;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>

    <i id="y">Y</i>
    <i id="z">Z</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid thick magenta;
  column-rule-color: rebeccapurple;
  gap: 1em;
  rule-overlap: column-over-row;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#y {
  grid-column: 4 / 5;
  grid-row: 4 / 5;
}
#z {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 6 / 7;
  grid-row: 4 / 5;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-inset-cap")}}
- {{cssxref("row-rule-inset-cap")}}

## Syntax

```css
/* Keywords */
rule-inset-cap: overlap-join;

/* A <length-percentage> value */
rule-inset-cap: 0;
rule-inset-cap: 1em;
rule-inset-cap: -5px;
rule-inset-cap: -25%;

/* Two values */
rule-inset-cap: 0 20px;
rule-inset-cap: 1em -5px;
rule-inset-cap: overlap-join -25%;

/* Global values */
rule-inset-cap: inherit;
rule-inset-cap: initial;
rule-inset-cap: revert;
rule-inset-cap: revert-layer;
rule-inset-cap: unset;
```

### Werte

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Entspricht `0`.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte entsprechen für Caps am Rand des Containers `0`. Bei inneren Zwischenräumen beziehen sich Prozentwerte für Caps von Spaltensegmenten auf die Höhe des angrenzenden `row-gap` und für Caps von Zeilensegmenten auf die Breite des angrenzenden `column-gap`.

## Beschreibung

Mit der Kurzschreibweise `rule-inset-cap` können die Eigenschaften {{cssxref("row-rule-inset-cap")}} und {{cssxref("column-rule-inset-cap")}} in einer einzigen Deklaration auf dieselben Werte gesetzt werden. Dadurch werden die Cap-Endpunkte von Zeilen- und Spaltensegmenten um die angegebenen Werte eingerückt.

Wenn Sie einen Wert angeben, wird dieser sowohl für die Start- als auch für die End-Endpunkte der Cap-Segmente verwendet. Wenn Sie zwei Werte angeben, wird der erste Wert für die Start-Endpunkte der Zeilen- und Spalten-Cap-Segmente und der zweite Wert für deren End-Endpunkte verwendet.

Der Standardwert ist `0`, was bei Cap-Endpunkten `overlap-join` entspricht. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Die Eigenschaft `rule-inset-cap` kann zusammen mit {{cssxref("rule-inset-junction")}} über die Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `rule-inset-cap` die Endpunkte von Cap-Segmenten in Flex-Containern einrücken.

#### HTML

```html
<h1>Insetting cap endpoints</h1>
<article>
  <section>
    <h2>flex-direction: row</h2>
    <div class="flexbox">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
  <section>
    <h2>flex-direction: column</h2>
    <div class="flexbox column">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</article>
```

```html hidden
<p>
  <label
    >Change the size of the inset.
    <input type="range" min="-40" max="16" value="16" id="inset"
  /></label>
  <output id="o">16px</output>
</p>
```

#### CSS

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}} für die Zeilen- und Spaltenzwischenräume und überschreiben anschließend {{cssxref("column-rule-color")}}, um die vertikalen Zwischenräume mit einem dunkleren `blue` zu gestalten. Schließlich setzen wir `rule-inset-cap` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  rule-inset-cap: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column`, damit dessen Elemente in Spalten statt in Zeilen angeordnet werden. Der Kürze halber sind die übrigen CSS-Stile und der Code, der das Formular interaktiv macht, ausgeblendet.

```css
.column {
  flex-direction: column;
}
```

```css hidden
h1,
article {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}
article {
  display: flex;
  gap: 5vw;
  rule: 1px solid black;
  width: 90vw;
  margin: auto;
}
section {
  flex-basis: 45vw;
}
.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  height: 30px;
}
output {
  display: inline-block;
  width: 2em;
}
p {
  margin-top: 2.5em;
}
@layer no-support {
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-cap property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const inset = document.getElementById("inset");
const containers = document.querySelectorAll(".flexbox");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  const val = `${inset.value}px`;
  containers[0].style.ruleInsetCap = val;
  containers[1].style.ruleInsetCap = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "300")}}

Ändern Sie die Größe des Einzugs.

### Zwei Werte festlegen

#### HTML

```html hidden
<p>
  <label
    >Change the <code>row-rule-inset-cap</code> value.
    <input type="range" min="-40" max="40" value="40" id="row" data-unit="px"
  /></label>
  <output id="og">40px</output>
</p>
<p>
  <label
    >Change the <code>column-rule-inset-cap</code> value.
    <input type="range" min="-40" max="40" value="-40" id="col" data-unit="px"
  /></label>
  <output id="ow">-40px</output>
</p>
```

Unser HTML enthält eine ungeordnete Liste ({{htmlelement("ul")}}) mit neun Listenelementen ({{htmlelement("li")}}):

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
</ul>
```

Die Benutzeroberfläche zur Auswahl verschiedener Werte und das JavaScript für die Interaktivität sind der Kürze halber ausgeblendet.

#### CSS

Wir erstellen einen Grid-Container, indem wir {{cssxref("display")}} auf grid setzen, mit {{cssxref("grid-template-columns")}} vier Spalten erstellen und einen {{cssxref("gap")}} von `30px` hinzufügen. Mit den Eigenschaften {{cssxref("row-rule")}} und {{cssxref("column-rule")}} definieren wir die Linien. Anschließend verwenden wir `rule-inset-cap`, um die Start-Endpunkte der Cap-Segmente um `40px` einzurücken und die End-Endpunkte mit `-40px` nach außen zu versetzen.

Außerdem legen wir fest, dass sich das sechste Grid-Element über zwei Spalten erstreckt.

```css
ul {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 30px;
  row-rule: 16px solid olive;
  column-rule: 10px solid palegoldenrod;

  rule-inset-cap: 40px -40px;
}
li:nth-of-type(6) {
  grid-column-end: span 2;
}
```

```css hidden
ul {
  width: calc(95vw - 80px);
  border: 1px solid;
  list-style-type: none;
  margin: auto;
  padding: 0;
  place-items: center;
}
li {
  place-content: center;
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 5vw;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(6) {
  padding: 2em 0;
}
li code {
  display: block;
  margin: 0 auto;
  text-align: left;
  background-color: #fcfcfc;
  width: calc(47.5vw - 40px);
}
output {
  font-family: monospace;
}
input {
  accent-color: olive;
}
@layer no-support {
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-cap property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const ul = document.querySelector("ul");
const rowSize = document.getElementById("row");
const og = document.getElementById("og");
const colSize = document.getElementById("col");
const ow = document.getElementById("ow");
const cell = document.querySelector("li:nth-of-type(6)");
let text = "";
const update = function () {
  ul.style.ruleInsetCap = text = `${rowSize.value}px ${colSize.value}px`;
  cell.innerHTML = `<code>rule-inset-cap: ${text};</code>`;
};

update();

rowSize.addEventListener("input", () => {
  og.innerText = `${rowSize.value}px`;
  update();
});

colSize.addEventListener("input", () => {
  ow.innerText = `${colSize.value}px`;
  update();
});
```

#### Ergebnis

{{EmbedLiveSample("Setting two value", "", "500")}}

Ändern Sie die Einzugswerte für die Start- und End-Endpunkte der Cap-Segmente.

### Innere Cap-Segmente

Dieses Beispiel zeigt, wie Sie mit `rule-inset-cap` die Endpunkte von Cap-Segmenten in einem Grid-Container einrücken und wie die Eigenschaft {{cssxref("rule-visibility-items")}} innere Endpunkte zu Cap-Endpunkten machen kann.

#### HTML

Als Container für mehrere Listenelemente ({{htmlelement("li")}}) verwenden wir eine ungeordnete Liste ({{htmlelement("ul")}}).

Außerdem fügen wir ein {{htmlelement("select")}}-Element mit jeweils einem {{htmlelement("option")}}-Element für jedes `rule-visibility-items`-Schlüsselwort sowie ein {{htmlelement("input")}}-Element vom Typ {{HTMLElement("input/range", "range")}} hinzu.

```html live-sample___caps
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
</ul>

<p>
  <label
    ><code>rule-visibility-items</code> value <code>
    <select id="visibility">
      <option>all</option>
      <option>between</option>
      <option>around</option>
      <option selected>normal</option>
  </select>
  </label>
</p>

<p>
  <label
    >Change the inset size.
    <input type="range" min="-40" max="16" value="0" id="inset" data-unit="px"
  /></label>
  <output id="o"></output>
</p>
```

#### CSS

Wir erstellen einen Grid-Container, indem wir {{cssxref("display")}} auf grid setzen, mit {{cssxref("grid-template-columns")}} sechs Spalten erstellen und einen {{cssxref("gap")}} von `20px` hinzufügen. Mit der Eigenschaft {{cssxref("rule")}} definieren wir die Linien und überschreiben die Farbe der Zeilenlinien mit {{cssxref("row-rule-color")}}. Wir setzen {{cssxref("rule-break")}} so, dass die Linien an jeder Kreuzung unterbrochen werden und jedes Liniensegment eigenständig ist. {{cssxref("rule-visibility-items")}} setzen wir ausdrücklich auf den Standardwert `normal`. Anschließend verwenden wir `rule-inset-cap`, um alle Cap-Endpunkte um `16px` einzurücken.

Außerdem lassen wir das siebte Listenelement mithilfe der Eigenschaft {{cssxref("grid-column-end")}} über zwei Spalten reichen.

```css
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  rule-break: intersection;
  rule-visibility-items: normal;

  rule-inset-cap: 16px;
}

li:nth-of-type(7) {
  grid-column-end: span 2;
}
```

Der Kürze halber sind die übrigen CSS-Stile und der Code, der das Formular interaktiv macht, ausgeblendet.

```css hidden
ul {
  place-items: center;
  padding: 0;
  list-style-type: none;
  border: 1px solid;
  margin: 40px;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(n + 9) {
  grid-row: 3 / 4;
}
li:nth-of-type(n + 12) {
  grid-row: 4 / 5;
}
li:nth-of-type(10) {
  grid-column: 5/6;
}
li:nth-of-type(11) {
  grid-column: 6/7;
}

li:nth-of-type(15) {
  grid-area: 4 / 5 / 5 / 6;
}
li:nth-of-type(16) {
  grid-area: 4 / 6 / 5 / 7;
}
li:nth-of-type(17) {
  display: none;
  grid-area: 5 / 6 / 6 / 7;
}
@layer no-support {
  @supports not (rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-cap property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.ruleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});

visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
});
```

#### Ergebnis

{{EmbedLiveSample("Inner cap segments", "", "400")}}

Wählen Sie im Dropdown-Menü `between` aus, damit Liniensegmente nur dann gezeichnet werden, wenn beide angrenzenden Grid-Bereiche ein Grid-Element enthalten. Dadurch entstehen innere Cap-Segmente. Ändern Sie nun den Einzug, um zu erkennen, welche Segmentendpunkte Cap-Endpunkte sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-cap")}}-Kurzschreibweise
- {{cssxref("row-rule-inset-cap")}}-Kurzschreibweise
- {{cssxref("column-rule-inset")}}-Kurzschreibweise
- {{cssxref("row-rule-inset")}}-Kurzschreibweise
- {{cssxref("rule-inset-start")}}-Kurzschreibweise
- {{cssxref("rule-inset")}}-Kurzschreibweise
- {{cssxref("rule-break")}}-Kurzschreibweise\
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS-Zwischenräume](/de/docs/Web/CSS/Guides/Gaps)
