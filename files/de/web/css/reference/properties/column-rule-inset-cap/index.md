---
title: "`column-rule-inset-cap` CSS property"
short-title: column-rule-inset-cap
slug: Web/CSS/Reference/Properties/column-rule-inset-cap
l10n:
  sourceCommit: b60c5dad8cf10d8492f2aff491abb40bf1851b03
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`column-rule-inset-cap`** kann verwendet werden, um die [Kappenendpunkte](#kappenendpunkte-verstehen) von Spaltenliniensegmenten an der Anfangs- und Endkante des Containers sowie an Endpunkten zu verschieben, an denen die Segmente keine anderen Zeilen- oder Spaltensegmente schneiden.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
column-rule-inset-cap: -20px;
```

```css interactive-example-choice
column-rule-inset-cap: 0;
```

```css interactive-example-choice
column-rule-inset-cap: 1em;
```

```css interactive-example-choice
column-rule-inset-cap: 100%;
```

```css interactive-example-choice
column-rule-inset-cap: overlap-join;
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
  rule: solid thick rebeccapurple;
  column-rule-color: magenta;
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

- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-cap-start")}}

## Syntax

```css
/* Keywords */
column-rule-inset-cap: overlap-join;

/* <length-percentage> values */
column-rule-inset-cap: 0;
column-rule-inset-cap: 1em;
column-rule-inset-cap: -5px;
column-rule-inset-cap: -25%;

/* Two values */
column-rule-inset-cap: overlap-join 1em;
column-rule-inset-cap: -5px -25%;

/* Global values */
column-rule-inset-cap: inherit;
column-rule-inset-cap: initial;
column-rule-inset-cap: revert;
column-rule-inset-cap: revert-layer;
column-rule-inset-cap: unset;
```

### Werte

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. [Prozentwerte](#prozentwerte-verstehen) beziehen sich auf die Breite des kreuzenden Abstands: Für Segmentendpunkte an Abstandskreuzungen ist dies die Breite von `row-gap`, für Endpunkte am Containerrand ist sie `0`.

## Beschreibung

Mit der Kurzschreibweise `column-rule-inset-cap` lassen sich die Eigenschaften {{cssxref("column-rule-inset-cap-end")}} und {{cssxref("column-rule-inset-cap-start")}} festlegen. So können die Anfangs- und Endkanten von [Kappenendpunkten der Segmente](#kappenendpunkte-verstehen) mit einer einzigen Deklaration nach innen oder außen verschoben werden.

Wird ein Wert angegeben, erhalten beide Eigenschaften diesen Wert. Werden zwei Werte angegeben, erhält `-start` den ersten und `-end` den zweiten Wert. Der Standardwert ist `0`, was bei Kappenendpunkten `overlap-join` entspricht. Positive Werte verkürzen das Segment durch einen Einzug, während negative Werte es durch eine Verschiebung nach außen verlängern.

Spaltenlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente verlaufen zwischen:

- benachbarten Spalten in CSS-Grid-Layouts;
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`;
- Spalten in mehrspaltigen Layouts.

Ob eine Spaltenlinie mehrere Zeilen überspannt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Unterbrechungen im Inneren zwischen Spaltenliniensegmenten haben die Größe von {{cssxref("row-gap")}}.

Längenwerte für `column-rule-inset-cap` rücken Segmente um den angegebenen Wert ein. Negative Längenwerte verschieben sie nach außen, sodass Kappensegmente an den Endkanten über die obere und untere Kante des Containers hinausragen. Prozentwerte für Kappensegmente an den Endkanten beziehen sich auf `0` und haben daher keine Wirkung.

Bei innenliegenden Segmenten beziehen sich [Prozentwerte](#prozentwerte-verstehen) auf die Größe von {{cssxref("row-gap")}}. Mit `-50%` reicht das Segment bis zur Mitte des Abstands, mit `-100%` über den gesamten Abstand.

Die Eigenschaft `column-rule-inset-cap` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Enden aller Spaltensegmente einzurücken, können `column-rule-inset-cap` und {{cssxref("column-rule-inset-junction")}} gemeinsam über die Kurzschreibweise {{cssxref("column-rule-inset")}} festgelegt werden.

- Um alle Kappenendpunkte von Zeilen und Spalten einzurücken, können `column-rule-inset-cap` und {{cssxref("row-rule-inset-cap")}} gemeinsam über die Kurzschreibweise {{cssxref("rule-inset-cap")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden `-junction`- und `row-`-Eigenschaften, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Kappenendpunkte verstehen

Ein _Kappenendpunkt eines Segments_ ist jeder Segmentendpunkt, der kein Kreuzungsendpunkt ist. Dazu gehören Endpunkte an den Kanten des Inhaltsbereichs eines Containers sowie Endpunkte an einer Abstandskreuzung, an der keine weiteren Zeilen- oder Spaltensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap` kann das obere, das untere oder beide Enden von Spaltensegmenten an der oberen und unteren Kante des Containers sowie Segmentenden an innenliegenden Kreuzungen ohne weitere Segmente verkürzen oder verlängern.

Kappensegmente von Spalten werden durch die {{cssxref("rule-visibility-items")}}-Eigenschaften beeinflusst. Diese bestimmen, ob Zeilen- und Spaltenliniensegmente in Abständen neben leeren Bereichen gezeichnet werden. Wenn Sie den Wert von `auto` auf `between` oder `around` ändern, können zusätzliche innenliegende Kappensegmente entstehen.

In der folgenden Demonstration beginnen die Spaltensegmente in der obersten Zeile oben an Kappenendpunkten; die Spaltensegmente in der untersten Zeile enden unten an Kappenendpunkten. Bei `column-rule-inset-cap: 16px` werden alle Kappenendpunkte der Spaltensegmente um `16px` eingerückt. Ändern Sie den `<length>`-Wert des Einzugs, um besser zu erkennen, welche Segmente an Kappenendpunkten beginnen oder enden.

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
  <li>15</li>
  <li>16</li>
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
    <input type="range" min="-40" max="16" value="16" id="inset" data-unit="px"
  /></label>
  <output id="o">16px</output>
</p>
```

```html hidden live-sample___percents
<p>
  <label
    >Change the size of the inset.
    <input
      type="range"
      min="-450"
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
  column-rule: 10px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  column-rule-inset-cap: 16px;

  border: 1px solid;
}
ul {
  place-items: center;
  width: 95vw;
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
@layer no-support {
  @supports not (column-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap property";
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
  column-rule-inset-cap: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(2, solid), double";
  } else if (visibility.value === "around") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value === "around") {
    ul.style.columnRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "300")}}

Ändern Sie den Einzug. Bei `0px` schließen die Enden der Spaltenlinien bündig mit der oberen und unteren Kante des Containers ab. Dies ist die Standardeinstellung. Bei `-32px` werden die Segmente um `32px` nach außen verschoben, sodass die Linien `32px` über die Kante des Containers hinaus gezeichnet werden. Da Spaltenlinien das Box-Modell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien in einem Abstandssegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält. Die oberen Enden der obersten Segmente bleiben Kappenendpunkte. Die unteren Enden der Spaltenliniensegmente mit doppelter Linienart, die bei `rule-visibility-items: around` erscheinen, sind dagegen keine Kappenendpunkte. Stattdessen enden die unteren Segmente der letzten beiden Spaltenlinien an _Kreuzungen_: innenliegenden Abständen, in denen Zeilenliniensegmente vorhanden sind. Daher wirkt sich `column-rule-inset-cap` nicht auf diese Segmentendpunkte aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien nur dann in Abstandssegmenten gezeichnet, wenn beide angrenzenden Bereiche ein Element enthalten. In diesem Beispiel endet die untere Zeilenlinie am dritten Spaltenabstand; ihr letztes Segment liegt zwischen `9` und `16`. Die dritte Spaltenlinie, die als Doppellinie dargestellt wird, endet unten an einem innenliegenden Abstand. Da dort ein Zeilenliniensegment vorhanden ist, endet dieses Spaltensegment nicht an einem Kappenendpunkt und wird somit nicht von `column-rule-inset-cap` beeinflusst. Die letzten beiden Spaltenlinien enden dagegen an innenliegenden Abständen ohne weitere Liniensegmente. Ihre Endpunkte sind daher Kappenendpunkte und werden von `column-rule-inset-cap` beeinflusst.

### Prozentwerte verstehen

Worauf sich ein Prozentwert bezieht, hängt von der Position des Endpunkts ab. Bei innenliegenden Endpunkten beziehen sich Prozentwerte auf die Breite des Abstands, den der Kappenendpunkt berührt. In der Regel ist dies {{cssxref("row-gap")}} zuzüglich etwaiger zusätzlicher Abstände, die durch Werte von {{cssxref("align-content")}} entstehen. Bei Endpunkten am Containerrand beziehen sich Prozentwerte auf `0`. Beispielsweise wird `column-rule-inset-cap: 50%` an einer innenliegenden Kappe zu einem Wert aufgelöst, der der Hälfte der Kreuzungsabstandsgröße entspricht, und an den Containerrändern zu `0`.

Dieses Beispiel ist nicht fehlerhaft. Wenn `rule-visibility-items` auf `normal` gesetzt ist, grenzt jeder Kappenendpunkt einer Spaltenlinie an die obere oder untere Kante des Containers. Daher bezieht sich jeder angegebene Prozentwert auf `0`.

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Spaltenlinien enden am Containerrand, sodass jeder Prozentwert zu `0` aufgelöst wird. Die letzten beiden Spaltenlinien, die als Doppellinien dargestellt werden, enden an innenliegenden Abständen mit Zeilenliniensegmenten. Daher sind diese Enden keine Kappenendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die ersten beiden Spaltenlinien, die als helle und dunkle Linien dargestellt werden, enden am Containerrand und haben daher einen Einzug von `0`. Die dritte Spaltenlinie, die als Doppellinie dargestellt wird, endet an einem innenliegenden Abstand mit einem Zeilenliniensegment. Ihr Ende ist somit kein Kappenendpunkt. Die letzten beiden Spaltenlinien, die als durchgezogene Linien dargestellt werden, enden an innenliegenden Abständen ohne weitere Liniensegmente. Deshalb bezieht sich ihre prozentuale Verschiebung auf die Breite von {{cssxref("row-gap")}}, die in diesem Fall `20px` beträgt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-cap` die Kappenendpunkte von Spaltenliniensegmenten in Flex-Containern einrücken.

#### HTML

```html
<h1>Insetting cap column rule endpoints</h1>
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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mit {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine `lightblue`-{{cssxref("rule")}}, die sowohl Zeilen- als auch Spaltenabstände zeichnet, und überschreiben anschließend mit {{cssxref("column-rule-color")}} die Farbe der Spaltenlinien mit einem dunkleren `blue`. Zum Schluss setzen wir `column-rule-inset-cap` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column`, um die Hauptachse des Flex-Containers zu ändern und die Elemente in Spalten statt in Zeilen anzuordnen.

```css
.column {
  flex-direction: column;
}
```

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

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
  @supports not (column-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap property";
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
  containers[0].style.columnRuleInsetCap = val;
  containers[1].style.columnRuleInsetCap = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass die Spaltensegmente nur an ihren Kappenendpunkten länger oder kürzer werden – also an den Enden, die keine anderen Spalten- oder Zeilensegmente schneiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-cap-start")}}
- Kurzschreibweise {{cssxref("column-rule-inset")}}
- Kurzschreibweise {{cssxref("row-rule-inset-cap")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("column-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
