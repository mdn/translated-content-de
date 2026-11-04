---
title: "`row-rule-inset-junction-end` CSS property"
short-title: row-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/row-rule-inset-junction-end
l10n:
  sourceCommit: 068c46001316cf268128ab7a26b33fd5705cde1b
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-inset-junction-end`** lässt sich die Endkante von Zeilenliniensegmenten verschieben, die [Endpunkte an Kreuzungen](#endpunkte-an-kreuzungen-verstehen) sind. Das sind Endpunkte an Lückenkreuzungen, an denen sich Liniensegmente schneiden.

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

Diese Eigenschaft wird mit einem einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass sich das Segment an der Kreuzung über die Spaltenlinie erstrecken soll. Der Wert entspricht der Hälfte des Werts von {{cssxref("column-gap")}} zuzüglich der Hälfte des verwendeten Werts von {{cssxref("column-rule-width")}}.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Endpunkt an der Kreuzung, also auf den Wert von `column-gap`.

## Beschreibung

Mit der Eigenschaft `row-rule-inset-junction-end` lassen sich [Endpunkte an Kreuzungen](#endpunkte-an-kreuzungen-verstehen) am Ende von Zeilenliniensegmenten nach innen oder außen verschieben. Der Standardwert ist `0`. Positive Werte verkürzen das Segment, während negative Werte und das [Schlüsselwort `overlap-join`](#der-wert-overlap-join) es verlängern.

Zeilenlinien werden innerhalb einer Zeilenlücke als ein oder mehrere Segmente gezeichnet. Solche Segmente liegen zwischen:

- benachbarten Zeilen in CSS-Grid-Layouts;
- benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`;
- benachbarten Zeilen in mehrspaltigen Layouts, die vorhanden sein können, wenn {{cssxref("column-height")}} auf einen {{cssxref("&lt;length>")}}-Wert gesetzt ist.

Ob eine Zeilenlinie mehrere Spalten überspannt oder in mehrere Segmente aufgeteilt wird, legt die Eigenschaft {{cssxref("row-rule-break")}} fest. Unterbrechungen zwischen Zeilenliniensegmenten innerhalb des Layouts haben die Größe von {{cssxref("column-gap")}}. Ein Endpunkt an einer Kreuzung liegt am Ende eines Zeilensegments vor, wenn das Segment an einer Lückenkreuzung endet, an der weitere Zeilen- oder Liniensegmente vorhanden sind.

Die Eigenschaft `row-rule-inset-junction-end` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Endpunkte an Kreuzungen sowohl auf der linken als auch auf der rechten Seite von Zeilensegmenten einzurücken, können `row-rule-inset-junction-end` und {{cssxref("row-rule-inset-junction-start")}} mit der Kurzschreibweise {{cssxref("row-rule-inset-junction")}} festgelegt werden.

- Um alle am Ende liegenden Endpunkte von Zeilensegmenten einzurücken, können `row-rule-inset-junction-end` und {{cssxref("row-rule-inset-cap-end")}} mit der Kurzschreibweise {{cssxref("row-rule-inset-end")}} festgelegt werden.

- Um die Endpunkte an Kreuzungen oben, unten, links und rechts einzurücken, können die Kurzschreibweisen `row-rule-inset-junction` und {{cssxref("column-rule-inset-junction")}} mit der Kurzschreibweise {{cssxref("rule-inset-junction")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der `-start`-, `-cap`- und `column-`-Entsprechungen dieser Eigenschaft, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Endpunkte an Kreuzungen verstehen

Ein _Segmentendpunkt an einer Kreuzung_ ist ein Endpunkt an einer inneren Lücke, der an einer Lückenkreuzung endet, an der weitere Spaltenlinien- oder Zeilenliniensegmente vorhanden sind. Die Eigenschaft `row-rule-inset-junction-end` steuert den Einzug der Endkante solcher Zeilensegmente, sodass die Segmente verkürzt oder verlängert werden können.

Längenwerte für `row-rule-inset-junction-end` rücken die Endpunkte an Kreuzungen um den angegebenen Wert ein. Prozentwerte beziehen sich auf die Größe von {{cssxref("column-gap")}}. Negative Werte verschieben den Endpunkt nach außen und verlängern so das Segment. Mit `-50%` wird das Ende des Segments bis zur Mitte der benachbarten Spaltenlücke verlängert, unabhängig davon, wie breit diese ist.

In der folgenden Demonstration enden die Zeilenliniensegmente in allen Spalten außer der letzten an Kreuzungen. Bei `row-rule-inset-junction-end: 16px` wird das rechte Ende dieser Segmente um `16px` eingerückt. Ändern Sie den `<length>`-Wert für den Einzug, um besser zu erkennen, welche Zeilensegmente an Kreuzungen enden.

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
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else if (visibility.value == "around") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value == "around") {
    ul.style.rowRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("junctions", "", "400")}}

Die Eigenschaft {{cssxref("rule-break")}} ist auf `intersection` gesetzt. Dadurch werden alle Zeilen- und Spaltensegmente an jeder Lückenkreuzung unterbrochen; standardmäßig grenzt das Ende jedes inneren Zeilensegments an eine Spaltenlücke. Der Standardwert von `row-rule-inset-junction-end` ist `0`.

Ändern Sie den Einzugswert. Beachten Sie, dass sich bei einer Wertänderung nur die rechten Enden der Zeilensegmente in der Mitte des Grids ändern. Die Segmentendpunkte an den Containerrändern bleiben unverändert: Sie sind _äußere Endpunkte_ und werden von `row-rule-inset-junction-end` nicht beeinflusst.

Wählen Sie `between` als Wert für `rule-visibility-items`. Dadurch werden Linien in Lückensegmenten nur gezeichnet, wenn beide angrenzenden Bereiche Elemente enthalten. Das Zeilenliniensegment zwischen `17` und `23` endet nun an einer inneren Kreuzung, an der keine weiteren Liniensegmente vorhanden sind. Das Ende dieses Zeilensegments ist damit ein _äußerer Segmentendpunkt_ und wird von `row-rule-inset-junction-end` nicht beeinflusst. Mit der Eigenschaft `row-rule-inset-cap-end` lässt sich dieser Segmentendpunkt einrücken.

Der Wert `around` bewirkt, dass Linien in Lückensegmenten gezeichnet werden, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält. In diesem Beispiel wurden keine Endpunkte an Kreuzungen zu äußeren Segmentendpunkten, aber einige äußere Segmente wurden nicht gezeichnet.

### Der Wert `overlap-join`

Der Wert `overlap-join` verlängert die Enden innerer Segmente so, dass sie mit der gegenüberliegenden Kante der kreuzenden Spaltenlinie abschließen. Der Wert entspricht der Hälfte der Größe von {{cssxref("column-gap")}} – womit sich das Segment bis zur Mitte der Lücke erstreckt – zuzüglich der Hälfte der Breite der Spaltenlinie. Wenn `row-rule-inset-junction-end` auf `overlap-join` gesetzt ist, reichen die Segmentenden an Kreuzungen in die Spaltenlücke hinein und treffen auf die gegenüberliegende Kante der dort gezeichneten Spaltenlinie.

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

Ändern Sie die Werte von {{cssxref("column-rule-width")}} und {{cssxref("column-gap")}}. Beachten Sie, dass sich das Ende des Zeilensegments unabhängig von der Breite der Lücke oder der Spaltenlinie stets über die Spaltenlinie erstreckt und mit deren gegenüberliegender Kante abschließt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich mit `row-rule-inset-junction-end` die Endkanten von Zeilensegmenten an Kreuzungen in Flex-Containern einrücken lassen.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Spalten- als auch in Zeilenlücken gezeichnet wird. Anschließend überschreiben wir {{cssxref("row-rule-color")}}, sodass die Dekorationen in den Zeilenlücken im dunkleren `blue` erscheinen. Zum Schluss setzen wir `row-rule-inset-junction-end` auf `16px`.

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

Außerdem setzen wir {{cssxref("flex-direction")}} für den `.column`-Container auf `column`. Dadurch ändert sich die Hauptachse des Flex-Containers, und die Elemente werden in Spalten statt in Zeilen angeordnet.

```css
.column {
  flex-direction: column;
}
```

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

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

Ändern Sie die Größe des Einzugs. Beachten Sie, dass diese Eigenschaft nur Zeilenlinien beeinflusst, die in mehrere Segmente aufgeteilt sind. Besteht eine Zeilenlinie aus einem einzigen Segment, das sich über die Breite des Containers erstreckt, hat dieses Segment zwei äußere Endpunkte und keine Endpunkte an Kreuzungen. Änderungen am Wert von `row-rule-inset-junction-end` wirken sich dann nicht aus.

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
