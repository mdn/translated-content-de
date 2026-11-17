---
title: "`row-rule-inset-junction-end` CSS property"
short-title: row-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/row-rule-inset-junction-end
l10n:
  sourceCommit: a8ef801e2065b729d1a227f2dbd44e46d2dd5c1b
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-inset-junction-end`** lässt sich die Endkante von Zeilenliniensegmenten versetzen, deren Endpunkte [Kreuzungsendpunkte](#kreuzungsendpunkte-verstehen) sind. Das sind Endpunkte an Lückenkreuzungen, an denen sich Liniensegmente schneiden.

{{InteractiveExample("CSS Demo: row-rule-inset-junction-end")}}

```css interactive-example-choice
row-rule-inset-junction-end: 0;
```

```css interactive-example-choice
row-rule-inset-junction-end: 0.5em;
```

```css interactive-example-choice
row-rule-inset-junction-end: 5px;
```

```css interactive-example-choice
row-rule-inset-junction-end: -50%;
```

```css interactive-example-choice
row-rule-inset-junction-end: overlap-join;
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
    <i>R</i>

    <i id="u">U</i>
    <i id="x">X</i>
    <i id="y">Y</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  rule: solid thick lightpink;
  row-rule-color: magenta;
  row-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: row-over-column;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#u {
  grid-row: 3 / 4;
  grid-column: 7 / 8;
}
#y {
  grid-row: 4 / 5;
  grid-column: 4 / 5;
}
#x {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 6 / 7;
  grid-row: 4 / 5;
}
```

## Syntax

```css
/* Keywords */
row-rule-inset-junction-end: overlap-join;

/* <length-percentage> values */
row-rule-inset-junction-end: 0;
row-rule-inset-junction-end: 1em;
row-rule-inset-junction-end: -5px;
row-rule-inset-junction-end: -25%;

/* Global values */
row-rule-inset-junction-end: inherit;
row-rule-inset-junction-end: initial;
row-rule-inset-junction-end: revert;
row-rule-inset-junction-end: revert-layer;
row-rule-inset-junction-end: unset;
```

### Werte

Für diese Eigenschaft wird ein einzelner Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass das Kreuzungssegment über die Spaltenlinie hinausragen soll. Der Wert entspricht der Hälfte des Werts von {{cssxref("column-gap")}} plus der Hälfte des verwendeten Werts von {{cssxref("column-rule-width")}}.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Kreuzungsendpunkt, dessen Bezugsgröße der Wert von `column-gap` ist.

## Beschreibung

Mit der Eigenschaft `row-rule-inset-junction-end` lassen sich [Endpunkte von Kreuzungssegmenten](#kreuzungsendpunkte-verstehen) am Ende von Zeilenliniensegmenten nach innen oder außen versetzen. Der Standardwert ist `0`. Positive Werte verkürzen das Segment, während negative Werte und das [Schlüsselwort `overlap-join`](#der-wert-overlap-join) es verlängern.

Zeilenlinien werden innerhalb einer Zeilenlücke als ein oder mehrere Segmente dargestellt. Solche Segmente liegen zwischen:

- Benachbarten Zeilen in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Zeilen in mehrspaltigen Layouts, die entstehen können, wenn {{cssxref("column-height")}} auf einen Wert vom Typ {{cssxref("&lt;length>")}} gesetzt ist.

Ob sich eine Zeilenlinie über mehrere Spalten erstreckt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("row-rule-break")}} fest. Unterbrechungen im Inneren zwischen Zeilenliniensegmenten haben die Größe von {{cssxref("column-gap")}}. Ein Kreuzungsendpunkt liegt am Ende jedes Zeilensegments vor, das an einer Lückenkreuzung endet, an der weitere Zeilen- oder Liniensegmente vorhanden sind.

Die Eigenschaft `row-rule-inset-junction-end` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die linken und rechten Kreuzungsendpunkte von Zeilensegmenten nach innen zu versetzen, können `row-rule-inset-junction-end` und die Eigenschaft {{cssxref("row-rule-inset-junction-start")}} über die Kurzschreibweise {{cssxref("row-rule-inset-junction")}} festgelegt werden.

- Um alle Endpunkte am Ende von Zeilensegmenten nach innen zu versetzen, können `row-rule-inset-junction-end` und die Eigenschaft {{cssxref("row-rule-inset-cap-end")}} über die Kurzschreibweise {{cssxref("row-rule-inset-end")}} festgelegt werden.

- Um die Kreuzungsendpunkte von Segmenten oben, unten, links und rechts nach innen zu versetzen, können die Kurzschreibweisen `row-rule-inset-junction` und {{cssxref("column-rule-inset-junction")}} über die Kurzschreibweise {{cssxref("rule-inset-junction")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden Varianten dieser Eigenschaft mit `-start`, `-cap` und `column-`, können über die Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Kreuzungsendpunkte verstehen

Ein _Kreuzungsendpunkt_ ist ein Segmentendpunkt an einer inneren Lücke, der an einer Lückenkreuzung endet, an der weitere Spalten- oder Zeilenliniensegmente vorhanden sind. Die Eigenschaft `row-rule-inset-junction-end` steuert den Versatz der Endkante von Zeilen-Kreuzungssegmenten nach innen oder außen. Dadurch lassen sich die Segmente verkürzen oder verlängern.

Längenwerte für `row-rule-inset-junction-end` versetzen Kreuzungssegmente um den angegebenen Wert nach innen. Prozentwerte beziehen sich auf die Größe von {{cssxref("column-gap")}}. Negative Werte erzeugen einen Versatz nach außen und verlängern das Ende des Kreuzungssegments. Mit `-50%` wird das Ende des Kreuzungssegments bis zur Mitte der benachbarten Spaltenlücke verlängert, unabhängig davon, wie breit diese ist.

In der folgenden Demonstration enden die Zeilenliniensegmente in allen Spalten außer der letzten an Kreuzungsendpunkten. Bei `row-rule-inset-junction-end: 16px` wird die rechte Seite, also das Ende, dieser Segmente um `16px` nach innen versetzt. Ändern Sie den `<length>`-Wert des Einzugs, um besser zu erkennen, welche Zeilensegmente an Kreuzungsendpunkten enden.

```html hidden live-sample___junctions live-sample___percents
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
  <li class="b">21</li>
  <li class="c">23</li>
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

```html hidden live-sample___junctions
<p>
  <label
    >Change the size of the inset.
    <input type="range" min="-20" max="16" value="16" id="inset" data-unit="px"
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
      min="-200"
      max="100"
      value="50"
      id="inset"
      data-unit="%"
  /></label>
  <output id="o">50%</output>
</p>
```

```css hidden live-sample___junctions live-sample___percents
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: none;
  gap: 20px;
  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: row-over-column;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-junction-end: 16px;

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
.b {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
.c {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
@layer no-support {
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-end property";
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
  row-rule-inset-junction-end: 100%;
  row-rule-style: inset;
}
```

```js hidden live-sample___junctions live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetJunctionEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
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

{{EmbedLiveSample("junctions", "", "400")}}

Die Eigenschaft {{cssxref("rule-break")}} ist auf `intersection` gesetzt. Dadurch werden alle Zeilen- und Spaltensegmente an jeder Lückenkreuzung unterbrochen. Standardmäßig grenzt das Ende jedes inneren Zeilensegments an eine Spaltenlücke. Der Standardwert der Eigenschaft `row-rule-inset-junction-end` ist `0`.

Ändern Sie den Wert des Einzugs. Beachten Sie, dass sich bei einer Änderung des Eigenschaftswerts nur die rechten Enden der Zeilensegmente in der Mitte des Rasters verändern. Die Segmentendpunkte an den Containern verändern sich nicht: Sie sind _äußere Endpunkte_ und werden von der Eigenschaft `row-rule-inset-junction-end` nicht beeinflusst.

Wählen Sie `between` als Wert für `rule-visibility-items`. Dieser Wert bewirkt, dass Linien in Lückensegmenten nur dargestellt werden, wenn in beiden angrenzenden Bereichen Elemente vorhanden sind. Das Zeilenliniensegment zwischen `17` und `23` endet nun an einer inneren Kreuzung, an der keine weiteren Liniensegmente vorhanden sind: Das Ende dieses Zeilensegments ist ein _äußerer Segmentendpunkt_ und wird von der Eigenschaft `row-rule-inset-junction-end` nicht beeinflusst. Mit der Eigenschaft `row-rule-inset-cap-end` lässt sich dieser Segmentendpunkt nach innen versetzen.

Beim Wert `around` werden Linien in Lückensegmenten dargestellt, wenn sich in mindestens einem der beiden angrenzenden Bereiche ein Element befindet. In diesem Beispiel wurden keine Kreuzungsendpunkte zu äußeren Segmentendpunkten, aber einige äußere Segmente wurden nicht gezeichnet.

### Der Wert `overlap-join`

Der Wert `overlap-join` verlängert das Ende innerer Segmente so, dass es mit der gegenüberliegenden Kante der kreuzenden Spaltenlinie abschließt. Der Wert entspricht der Hälfte der Größe von {{cssxref("column-gap")}} (wodurch das Segment bis zur Mitte der Lücke reicht) plus der Hälfte der Breite der Spaltenlinie. Wenn `row-rule-inset-junction-end` auf das Schlüsselwort `overlap-join` gesetzt ist, reichen die Kreuzungssegmente am Ende in die Spaltenlücke hinein, bis sie die gegenüberliegende Kante der dort dargestellten Spaltenlinie erreichen und sich mit ihr verbinden.

Im folgenden interaktiven Beispiel ist `row-rule-inset-junction-end` auf `overlap-join` gesetzt:

```html hidden
<p>
  <label
    >Change the <code>column-gap</code>.
    <input type="range" min="10" max="40" value="40" id="gap" data-unit="px"
  /></label>
  <output id="og">40px</output>
</p>
<p>
  <label
    >Change the <code>column-rule-width</code>.
    <input type="range" min="0" max="40" value="16" id="rrw" data-unit="px"
  /></label>
  <output id="ow">16px</output>
</p>

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
  <li>10</li>
</ul>
```

```css hidden
ul {
  display: grid;
  grid-template-columns: repeat(4, auto);
  list-style-type: none;
  gap: 30px;
  row-rule: 16px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: row-over-column;
  rule-visibility-items: around;
  row-rule-break: intersection;
  row-rule-inset-junction-end: overlap-join;
  border: 1px solid;
}
ul {
  place-items: center;
  margin: auto;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 2em;
  width: 100%;
  box-sizing: border-box;
}
@layer no-support {
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-end property";
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
const gapSize = document.getElementById("gap");
const og = document.getElementById("og");
const ruleWidth = document.getElementById("rrw");
const ow = document.getElementById("ow");

gapSize.addEventListener("input", () => {
  og.innerText = ul.style.columnGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.columnRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

Ändern Sie die Größe von {{cssxref("column-rule-width")}} und {{cssxref("column-gap")}}. Beachten Sie, dass das Ende des Zeilensegments unabhängig von der Breite der Lücke oder der Spaltenlinie immer über die Spaltenlinie hinaus verlängert wird. Der Endpunkt schließt dabei mit der gegenüberliegenden Kante der in der Lücke dargestellten Spaltenlinie ab.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-junction-end` die Endkante von Zeilen-Kreuzungssegmenten in Flex-Containern nach innen versetzen.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den beiden Containern besteht darin, dass der zweite zusätzlich die Klasse `column` hat.

```html
<h1>Insetting junction row rule endpoints</h1>
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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren mit {{cssxref("rule")}} hellblaue Linien für die Spalten- und Zeilenlücken und überschreiben anschließend {{cssxref("row-rule-color")}}, um die Zeilenlücken mit einem dunkleren `blue` zu gestalten. Schließlich setzen wir `row-rule-inset-junction-end` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-junction-end: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column` auf `column`. Dadurch ändert sich die Hauptachse des Flex-Containers, sodass die Elemente in Spalten statt in Zeilen angeordnet werden.

```css
.column {
  flex-direction: column;
}
```

Das übrige CSS ist der Kürze halber ausgeblendet.

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
  @supports not (row-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-end property";
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
  containers[0].style.rowRuleInsetJunctionEnd = val;
  containers[1].style.rowRuleInsetJunctionEnd = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass diese Eigenschaft nur Zeilenlinien beeinflusst, die in mehrere Segmente unterteilt sind. Besteht eine Zeilenlinie aus einem einzigen Segment, das sich über die gesamte Breite des Containers erstreckt, hat dieses Segment zwei äußere Endpunkte und keine Kreuzungsendpunkte. Änderungen am Wert von `row-rule-inset-junction-end` haben dann keine Auswirkungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("row-rule-inset-junction-start")}}
- Kurzschreibweise {{cssxref("row-rule-inset-junction")}}
- Kurzschreibweise {{cssxref("row-rule-inset")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("row-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
