---
title: "`row-rule-inset-cap` CSS property"
short-title: row-rule-inset-cap
slug: Web/CSS/Reference/Properties/row-rule-inset-cap
l10n:
  sourceCommit: b60c5dad8cf10d8492f2aff491abb40bf1851b03
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`row-rule-inset-cap`** kann verwendet werden, um die [Kappenendpunkte](#kappenendpunkte-verstehen) von Zeilenliniensegmenten am linken und rechten Rand des Containers sowie Endpunkte zu verschieben, an denen die Segmente keine anderen Spalten- oder Zeilensegmente schneiden.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-inset-cap: -20px;
```

```css interactive-example-choice
row-rule-inset-cap: 0;
```

```css interactive-example-choice
row-rule-inset-cap: 1em;
```

```css interactive-example-choice
row-rule-inset-cap: 100%;
```

```css interactive-example-choice
row-rule-inset-cap: overlap-join;
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

    <i id="r">R</i>
    <i id="z">Z</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid thick rebeccapurple;
  row-rule-color: magenta;
  gap: 0.5em;
  rule-overlap: row-over-column;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#r {
  grid-column: 5 / 6;
  grid-row: 3 / 4;
}
#z {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 5 / 6;
  grid-row: 5 / 6;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}

## Syntax

```css
/* Keywords */
row-rule-inset-cap: overlap-join;

/* <length-percentage> values */
row-rule-inset-cap: 0;
row-rule-inset-cap: 1em;
row-rule-inset-cap: -5px;
row-rule-inset-cap: -25%;

/* Two values */
row-rule-inset-cap: overlap-join 1em;
row-rule-inset-cap: -5px -25%;

/* Global values */
row-rule-inset-cap: inherit;
row-rule-inset-cap: initial;
row-rule-inset-cap: revert;
row-rule-inset-cap: revert-layer;
row-rule-inset-cap: unset;
```

### Werte

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. [Prozentwerte](#prozentwerte-verstehen) beziehen sich auf die Breite des kreuzenden Abstands: an Segmentendpunkten bei Schnittpunkten von Abständen ist dies die Breite von `column-gap`, an Endpunkten am Containerrand ist sie `0`.

## Beschreibung

Mit der Kurzschreibweise `row-rule-inset-cap` können die Eigenschaften {{cssxref("row-rule-inset-cap-start")}} und {{cssxref("row-rule-inset-cap-end")}} festgelegt werden. So lassen sich die linken und rechten Ränder von [Kappenendpunkten der Segmente](#kappenendpunkte-verstehen) mit einer einzigen Deklaration nach innen oder außen verschieben.

Wird ein Wert angegeben, erhalten beide Eigenschaften diesen Wert. Werden zwei Werte angegeben, erhält `-start` den ersten und `-end` den zweiten Wert. Der Standardwert ist `0`, was bei Kappenendpunkten `overlap-join` entspricht. Positive Werte verkürzen das Segment, indem sie seine Endpunkte nach innen verschieben; negative Werte verlängern es, indem sie die Endpunkte nach außen verschieben.

Zeilenlinien werden innerhalb eines Zeilenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente treten zwischen folgenden Elementen auf:

- Benachbarten Zeilen in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Zeilen in mehrspaltigen Layouts, die vorhanden sein können, wenn {{cssxref("column-height")}} auf einen {{cssxref("&lt;length>")}}-Wert gesetzt ist.

Ob sich eine Zeilenlinie über mehrere Spalten erstreckt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("row-rule-break")}} fest. Unterbrechungen zwischen Zeilenliniensegmenten im Inneren entsprechen im Allgemeinen der Größe von {{cssxref("column-gap")}}.

`row-rule-inset-cap`-Werte als Längenangabe verschieben die Segmentendpunkte um den angegebenen Wert nach innen. Negative Längenangaben verschieben sie nach außen. Dadurch wird das Segment breiter, und Kappensegmente am linken und rechten Rand des Containers ragen über dessen Rand hinaus.

[Prozentwerte](#prozentwerte-verstehen) beziehen sich bei inneren Segmenten auf die Größe von {{cssxref("column-gap")}}. Mit `-50%` reicht das Segment bis zur Mitte des Abstands, mit `-100%` über den gesamten Abstand. Bei Kappensegmenten am Containerrand beziehen sich Prozentwerte auf `0`; dort haben sie daher keine Auswirkung auf die Endpunkte.

Die Eigenschaft `row-rule-inset-cap` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die linke und rechte Seite aller Zeilensegmente nach innen zu verschieben, können `row-rule-inset-cap` und {{cssxref("row-rule-inset-junction")}} mit der Kurzschreibweise {{cssxref("row-rule-inset")}} festgelegt werden.

- Um die Kappenendpunkte von Zeilen- und Spaltensegmenten nach innen zu verschieben, können `row-rule-inset-cap` und {{cssxref("column-rule-inset-cap")}} mit der Kurzschreibweise {{cssxref("rule-inset-cap")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden Endpunkte für `-junction` und `column-`, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Kappenendpunkte verstehen

Ein _Kappenendpunkt eines Segments_ ist jeder Segmentendpunkt, der kein Endpunkt an einem Schnittpunkt ist. Dazu gehören Endpunkte an den Rändern des Inhaltsbereichs des Containers sowie Endpunkte an einem Schnittpunkt von Abständen, an dem keine weiteren Spalten- oder Zeilensegmente vorhanden sind.

Mit `row-rule-inset-cap` lassen sich Anfang und Ende von Zeilenlinien am Containerrand sowie Anfang und Ende innerer Zeilensegmente, an denen keine weiteren Segmente vorhanden sind, nach außen oder innen verschieben.

Kappensegmente werden von den {{cssxref("rule-visibility-items")}}-Eigenschaften beeinflusst. Diese legen fest, ob Zeilen- und Spaltenliniensegmente in Abständen neben leeren Bereichen gezeichnet werden. Wird der Wert von `auto` auf `between` oder `around` geändert, können zusätzliche innere Kappensegmente entstehen.

In der folgenden Demonstration enden die Zeilen links und rechts am Containerrand mit Kappenendpunkten. Durch `row-rule-inset-cap: -32px` werden diese Endpunkte um `32px` nach außen verschoben. Ändern Sie den `<length>`-Wert, um besser zu erkennen, welche Segmente an Kappenendpunkten beginnen oder enden.

```html hidden live-sample___caps live-sample___percents
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
```

```html hidden live-sample___caps
<p>
  <label
    >Change the size of the inset.
    <input
      type="range"
      min="-40"
      max="16"
      value="-32"
      id="inset"
      data-unit="px"
  /></label>
  <output id="o">-32px</output>
</p>
```

```html hidden live-sample___percents
<p>
  <label
    >Change the size of the inset.
    <input
      type="range"
      min="-200"
      max="100"
      value="100"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">100%</output>
</p>
```

```css hidden live-sample___caps live-sample___percents
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: none;
  gap: 20px;
  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-cap: -32px;

  border: 1px solid;
  margin: auto 40px;
}
ul {
  place-items: center;
  padding: 0;
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
li:nth-of-type(n + 13) {
  grid-row: 4 / 5;
}
li:nth-of-type(12),
li:nth-of-type(16) {
  grid-column: 5/6;
}
li:nth-of-type(17) {
  grid-column: 6/7;
}
@layer no-support {
  @supports not (row-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css hidden live-sample___percents
ul {
  row-rule-inset-cap: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else if (visibility.value === "around") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value === "around") {
    ul.style.rowRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "380")}}

Mit `0px` liegen die Enden der Zeilenlinien auf dem linken und rechten Containerrand. Dies ist der Standardwert.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien nur in solchen Abstandssegmenten gezeichnet, bei denen beide angrenzenden Bereiche Elemente enthalten. Am Anfangsrand des Containers befinden sich weiterhin Kappenendpunkte von Zeilenlinien, am Endrand dagegen nicht mehr. Die dritte Zeilenlinie, die als Doppellinie dargestellt wird, hat zwei zusätzliche Kappenendpunkte: am Ende des Segments zwischen `11` und `15` und am Anfang des Segments zwischen `12` und `16`. An diese Endpunkte grenzen keine anderen Liniensegmente; daher werden sie von der Eigenschaft `row-rule-inset-cap-start` beeinflusst.

Der Wert `around` der Eigenschaft `rule-visibility-items`, bei dem Linien in einem Abstandssegment gezeichnet werden, sobald einer der angrenzenden Bereiche ein Element enthält, erzeugt in diesem Fall keine zusätzlichen Kappenendpunkte. Alle inneren Segmentendpunkte liegen an Schnittpunkten mit Spaltensegmenten. Dadurch entstehen Endpunkte an Schnittpunkten statt Kappenendpunkte. Endpunkte an Schnittpunkten können mit der Kurzschreibweise {{cssxref("row-rule-inset-junction")}} nach innen verschoben werden.

### Prozentwerte verstehen

Auf welche Länge sich ein Prozentwert bezieht, hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite des Abstands am Kappenendpunkt: Grenzt der Endpunkt an einen Linienabstand, ist dies {{cssxref("column-gap")}} zuzüglich etwaiger zusätzlicher Abstände aufgrund der Einstellungen für {{cssxref("justify-content")}}. Am Containerrand beträgt die Bezugsgröße `0`. Beispielsweise wird `row-rule-inset-cap: 50%` an einem inneren Kappenendpunkt zu der Hälfte der Größe des Abstands am Schnittpunkt aufgelöst, also zur Hälfte des `column-gap`-Werts, und am Containerrand zu `0`.

Dieses Beispiel ist nicht in Segmente unterteilt. Wenn `rule-visibility-items` auf `normal` gesetzt ist, grenzt jeder Kappenendpunkt einer Zeilenlinie an den linken oder rechten Containerrand. Daher bezieht sich jeder angegebene Prozentwert auf `0`.

{{EmbedLiveSample("percents", "", "380")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Zeilen beginnen und die erste sowie die letzte Zeile enden am Containerrand. Prozentwerte für diese Kappenendpunkte von Zeilensegmenten werden zu `0` aufgelöst. Alle anderen Segmente enden an inneren Abständen, an denen Spaltenliniensegmente vorhanden sind. Diese Endpunkte der Zeilensegmente sind daher keine Kappenendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Wie in der vorherigen Demonstration erzeugt dieser Wert zwei innere Kappenendpunkte: Die rechte Seite des Segments zwischen den Elementen `11` und `15` und die linke Seite des Segments zwischen den Elementen `12` und `16` treffen wiederum auf keine anderen Liniensegmente. Bei diesen beiden Kappenendpunkten bezieht sich die prozentuale Verschiebung auf die Breite von {{cssxref("column-gap")}}, die hier `20px` beträgt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `row-rule-inset-cap` verwendet wird, um die Kappenendpunkte von Zeilenliniensegmenten in Flex-Containern nach innen zu verschieben.

#### HTML

```html
<h1>Insetting cap row rule endpoints</h1>
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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine `lightblue`-farbene {{cssxref("rule")}}, um die Spalten- und Zeilenabstände zu gestalten. Anschließend überschreiben wir {{cssxref("row-rule-color")}} und legen für die Linien in den Zeilenabständen das dunklere `blue` fest. Schließlich setzen wir `row-rule-inset-cap` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column`, um die Hauptachse des Flex-Containers zu ändern. Dadurch werden die Elemente in Spalten statt in Zeilen angeordnet.

```css
.column {
  flex-direction: column;
}
```

Das übrige CSS ist der Kürze halber ausgeblendet.

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
  width: 100vw;
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
  @supports not (row-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden live-sample___basic
const inset = document.getElementById("inset");
const containers = document.querySelectorAll(".flexbox");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  const val = `${inset.value}px`;
  containers[0].style.rowRuleInsetCap = val;
  containers[1].style.rowRuleInsetCap = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass die Zeilensegmente nur an ihren Kappenendpunkten länger oder kürzer werden – links, rechts oder an beiden Seiten. Das sind die Endpunkte, die keine anderen Zeilen- oder Spaltensegmente schneiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}
- Kurzschreibweise {{cssxref("row-rule-inset")}}
- Kurzschreibweise {{cssxref("column-rule-inset-cap")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("row-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
