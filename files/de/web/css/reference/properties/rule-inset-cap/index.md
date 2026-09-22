---
title: "`rule-inset-cap` CSS property"
short-title: rule-inset-cap
slug: Web/CSS/Reference/Properties/rule-inset-cap
l10n:
  sourceCommit: 2c2390b77141b960cac32c1843dac4d907e9c6c2
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibeigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-inset-cap`** kann verwendet werden, um den Anfang und das Ende der [Endpunkte von Abschlusssegmenten](#understanding_cap_end) von Spalten- und Zeilentrennlinien zu versetzen.

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

/* Global values */
rule-inset-cap: inherit;
rule-inset-cap: initial;
rule-inset-cap: revert;
rule-inset-cap: revert-layer;
rule-inset-cap: unset;
```

### Werte

Für diese Eigenschaft können die folgenden Werte angegeben werden:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Versatzes an. Prozentwerte werden für Abschlusssegmente am Rand des Containers zu `0` aufgelöst. Bei inneren Abständen beziehen sich Prozentwerte für Endpunkte von Spaltensegmenten auf die Höhe des benachbarten `row-gap` und für Endpunkte von Zeilensegmenten auf die Breite des benachbarten `column-gap`.

## Beschreibung

Die Kurzschreibeigenschaft `rule-inset-cap` legt die Eigenschaften {{cssxref("column-rule-inset-cap")}} und {{cssxref("row-rule-inset-cap")}} fest und versetzt die Endpunkte von Abschlusssegmenten um die angegebenen Werte nach innen. Positive Werte verkürzen die Segmente, negative Werte verlängern sie.

Die Eigenschaft `rule-inset-cap` kann zusammen mit der Eigenschaft {{cssxref("rule-inset-junction")}} über die Kurzschreibeigenschaft {{cssxref("rule-inset")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `rule-inset-cap` die Endpunkte von Abschlusssegmenten in Flex-Containern nach innen versetzen.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Mit {{cssxref("rule")}} definieren wir hellblaue Trennlinien für die Zeilen- und Spaltenabstände. Anschließend überschreiben wir mit {{cssxref("column-rule-color")}} die Farbe der vertikalen Trennlinien durch ein dunkleres `blue`. Abschließend setzen wir `rule-inset-cap` auf `16px`.

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

Für den Container `.column` legen wir außerdem {{cssxref("flex-direction")}} fest, damit seine Elemente in Spalten statt in Zeilen angeordnet werden. Die übrigen CSS-Stile und der Code für die Interaktivität des Formulars sind der Kürze halber ausgeblendet.

```css
.column {
  flex-direction: column;
}
```

```css hidden
body {
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

Ändern Sie die Größe des Versatzes.

### Innere Abschlusssegmente

Dieses Beispiel zeigt, wie Sie mit `rule-inset-cap` die Endpunkte von Abschlusssegmenten in einem Grid-Container nach innen versetzen und wie die Eigenschaft {{cssxref("rule-visibility-items")}} innere Endpunkte zu Endpunkten von Abschlusssegmenten machen kann.

#### HTML

Wir verwenden eine ungeordnete Liste ({{htmlelement("ul")}}) als Container für mehrere Listenelemente ({{htmlelement("li")}}).

Außerdem fügen wir ein {{htmlelement("select")}}-Element mit einer {{htmlelement("option")}} für jedes Schlüsselwort von `rule-visibility-items` sowie ein {{htmlelement("input")}}-Element vom Typ {{HTMLElement("input/range", "range")}} hinzu.

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

Wir erstellen einen Grid-Container, indem wir {{cssxref("display")}} auf grid setzen, mit {{cssxref("grid-template-columns")}} sechs Spalten erstellen und einen {{cssxref("gap")}} von `20px` hinzufügen. Mit der Eigenschaft {{cssxref("rule")}} definieren wir die Trennlinien und überschreiben deren Farbe für Zeilen mit {{cssxref("row-rule-color")}}. Wir setzen {{cssxref("rule-break")}} so, dass die Trennlinien an jeder Kreuzung unterbrochen werden und eigenständige Segmente entstehen. {{cssxref("rule-visibility-items")}} setzen wir ausdrücklich auf den Standardwert `normal`. Anschließend versetzen wir mit `rule-inset-cap` alle Endpunkte von Abschlusssegmenten um `16px` nach innen.

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
```

Die übrigen CSS-Stile und der Code für die Interaktivität des Formulars sind der Kürze halber ausgeblendet.

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

Wählen Sie im Dropdown-Menü `between` aus, damit Trennliniensegmente nur dann gezeichnet werden, wenn beide angrenzenden Grid-Bereiche ein Grid-Element enthalten. Dadurch entstehen innere Abschlusssegmente. Ändern Sie anschließend den Versatzwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibeigenschaft {{cssxref("column-rule-inset-cap")}}
- Kurzschreibeigenschaft {{cssxref("row-rule-inset-cap")}}
- Kurzschreibeigenschaft {{cssxref("column-rule-inset")}}
- Kurzschreibeigenschaft {{cssxref("row-rule-inset")}}
- Kurzschreibeigenschaft {{cssxref("rule-inset-start")}}
- Kurzschreibeigenschaft {{cssxref("rule-inset")}}
- Kurzschreibeigenschaft {{cssxref("rule-break")}}\
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibeigenschaft {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
