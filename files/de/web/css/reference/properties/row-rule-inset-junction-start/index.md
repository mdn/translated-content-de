---
title: "`row-rule-inset-junction-start` CSS property"
short-title: row-rule-inset-junction-start
slug: Web/CSS/Reference/Properties/row-rule-inset-junction-start
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-inset-junction-start`** lässt sich die Startkante von Zeilenliniensegmenten versetzen, deren Endpunkte [Kreuzungsendpunkte](#understanding_junction_start) sind – also Endpunkte an Lückenkreuzungen, an denen sich Liniensegmente schneiden.

{{InteractiveExample("CSS Demo: row-rule-inset-junction-start")}}

```css interactive-example-choice
row-rule-inset-junction-start: 0;
```

```css interactive-example-choice
row-rule-inset-junction-start: 0.5em;
```

```css interactive-example-choice
row-rule-inset-junction-start: 5px;
```

```css interactive-example-choice
row-rule-inset-junction-start: -50%;
```

```css interactive-example-choice
row-rule-inset-junction-start: overlap-join;
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
row-rule-inset-junction-start: overlap-join;

/* <length-percentage> values */
row-rule-inset-junction-start: 0;
row-rule-inset-junction-start: 1em;
row-rule-inset-junction-start: -5px;
row-rule-inset-junction-start: -25%;

/* Global values */
row-rule-inset-junction-start: inherit;
row-rule-inset-junction-start: initial;
row-rule-inset-junction-start: revert;
row-rule-inset-junction-start: revert-layer;
row-rule-inset-junction-start: unset;
```

### Werte

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass das Segment an der Kreuzung über die Spaltenlinie hinausreichen soll. Der Wert ergibt sich aus der Hälfte des Werts von {{cssxref("column-gap")}} plus der Hälfte des verwendeten Werts von {{cssxref("column-rule-width")}}.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Kreuzungsendpunkt, dessen Bezugsgröße der Wert von `column-gap` ist.

## Beschreibung

Mit der Eigenschaft `row-rule-inset-junction-start` lassen sich [Kreuzungsendpunkte von Segmenten](#understanding_junction_start) am Anfang von Zeilenliniensegmenten nach innen oder außen versetzen. Der Standardwert ist `0`. Positive Werte verkürzen das Segment, während negative Werte und das [Schlüsselwort `overlap-join`](#the_overlap-join_value) es verlängern.

Zeilenlinien werden innerhalb einer Zeilenlücke als ein oder mehrere Segmente gezeichnet. Solche Segmente befinden sich zwischen:

- Benachbarten Zeilen in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Zeilen in mehrspaltigen Layouts, die auftreten können, wenn {{cssxref("column-height")}} auf einen {{cssxref("&lt;length>")}}-Wert gesetzt ist.

Ob sich eine Zeilenlinie über mehrere Spalten erstreckt oder in mehrere Segmente aufgeteilt wird, bestimmt die Eigenschaft {{cssxref("row-rule-break")}}. Unterbrechungen zwischen Zeilenliniensegmenten haben die Größe von {{cssxref("column-gap")}}. Ein Kreuzungsanfang liegt am Anfang jedes Zeilenliniensegments vor, dessen Anfang an einer Lückenkreuzung mit weiteren Zeilen- oder Liniensegmenten liegt.

Die Eigenschaft `row-rule-inset-junction-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl die linken als auch die rechten Kreuzungsendpunkte von Zeilenliniensegmenten einzurücken, können `row-rule-inset-junction-start` und die Eigenschaft {{cssxref("row-rule-inset-junction-end")}} über die Kurzschreibweise {{cssxref("row-rule-inset-junction")}} gesetzt werden.

- Um die Anfangsendpunkte aller Zeilenliniensegmente einzurücken, können `row-rule-inset-junction-start` und die Eigenschaft {{cssxref("row-rule-inset-cap-start")}} über die Kurzschreibweise {{cssxref("row-rule-inset-start")}} gesetzt werden.

- Um die oberen, unteren, linken und rechten Kreuzungsendpunkte von Segmenten einzurücken, können die Kurzschreibweisen `row-rule-inset-junction` und {{cssxref("column-rule-inset-junction")}} über die Kurzschreibweise {{cssxref("rule-inset-junction")}} gesetzt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden `-end`-, `-cap`- und `column-`-Eigenschaften, können über die Kurzschreibweise {{cssxref("rule-inset")}} gesetzt werden.

### Kreuzungsendpunkte verstehen

Ein _Kreuzungsendpunkt eines Segments_ ist ein Segmentendpunkt an einer inneren Lücke, der an einer Lückenkreuzung beginnt, an der weitere Spalten- oder Zeilenliniensegmente vorhanden sind. Die Eigenschaft `row-rule-inset-junction-start` steuert den Einzug der Startkante von Zeilenliniensegmenten an Kreuzungen und ermöglicht es, die Segmente zu verkürzen oder zu verlängern.

Längenwerte für `row-rule-inset-junction-start` rücken Segmente an Kreuzungen um den angegebenen Wert ein. Prozentwerte beziehen sich auf die Größe von {{cssxref("column-gap")}}. Negative Werte erzeugen einen Versatz nach außen und verlängern den Anfang des Segments an der Kreuzung. Bei `-50%` reicht der Anfang des Segments bis zur Mitte der angrenzenden Spaltenlücke – unabhängig davon, wie breit diese ist.

In der folgenden Demonstration beginnen die Zeilenliniensegmente in allen Spalten außer der ersten mit Kreuzungsendpunkten. Mit `row-rule-inset-junction-start: 16px` wird die linke Kante beziehungsweise die Startkante dieser Segmente um `16px` eingerückt. Ändern Sie den `<length>`-Wert für den Einzug, um besser zu erkennen, welche Zeilenliniensegmente an Kreuzungsendpunkten beginnen.

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
  <li class="a">18</li>
  <li class="b">21</li>
  <li class="c">24</li>
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
  row-rule-inset-junction-start: 16px;

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
.a {
  grid-column: 6 / 7;
  grid-row: 3 / 4;
}
.b {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
.c {
  grid-column: 6 / 7;
  grid-row: 4 / 5;
}
@layer no-support {
  @supports not (row-rule-inset-junction-start: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-start property";
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
  row-rule-inset-junction-start: 100%;
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
    ul.style.rowRuleInsetJunctionStart = `${inset.value}${inset.dataset["unit"]}`;
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

Die Eigenschaft {{cssxref("rule-break")}} ist auf `intersection` gesetzt. Dadurch werden alle Zeilen- und Spaltenliniensegmente an jeder Lückenkreuzung unterbrochen. Standardmäßig grenzt der Anfang jedes inneren Zeilenliniensegments an eine Spaltenlücke. Der Standardwert der Eigenschaft `row-rule-inset-junction-start` ist `0`.

Ändern Sie den Einzugswert. Beachten Sie, dass sich bei einer Änderung des Eigenschaftswerts nur die Anfänge der Zeilenliniensegmente im Inneren des Grids ändern. Die Segmentendpunkte an den Containerrändern ändern sich nicht: Sie sind _äußere Endpunkte_ und werden von der Eigenschaft `row-rule-inset-junction-start` nicht beeinflusst.

Wählen Sie `between` als Wert für `rule-visibility-items`. Dieser Wert bewirkt, dass Linien in Lückensegmenten nur gezeichnet werden, wenn sich in beiden angrenzenden Bereichen Elemente befinden. Das Zeilenliniensegment zwischen `18` und `24` beginnt nun an einer inneren Kreuzung, an der kein weiteres Liniensegment vorhanden ist. Der Anfang dieses Zeilenliniensegments ist daher ein _äußerer Segmentendpunkt_ und wird von der Eigenschaft `row-rule-inset-junction-start` nicht beeinflusst. Mit der Eigenschaft `row-rule-inset-cap-start` lässt sich dieser Segmentendpunkt einrücken.

Der Wert `around` zeichnet Linien in Lückensegmenten, wenn sich in mindestens einem der beiden angrenzenden Bereiche ein Element befindet. In diesem Beispiel wurden keine Kreuzungsendpunkte zu äußeren Segmentendpunkten, aber einige Segmente wurden nicht gezeichnet.

### Der Wert `overlap-join`

Der Wert `overlap-join` versetzt den Anfang innerer Segmente nach außen, sodass er an der gegenüberliegenden Kante der gekreuzten Spaltenlinie ausgerichtet ist. Der Wert ergibt sich aus der halben Größe von {{cssxref("column-gap")}} – wodurch das Segment bis zur Mitte der Lücke reicht – plus der halben Breite der Spaltenlinie. Wenn `row-rule-inset-junction-start` auf das Schlüsselwort `overlap-join` gesetzt ist, reichen die Segmentanfänge an Kreuzungen in die Spaltenlücke hinein, bis sie auf die gegenüberliegende Kante der dort gezeichneten Spaltenlinie treffen und sich mit ihr „verbinden“.

Im folgenden interaktiven Beispiel ist `row-rule-inset-junction-start` auf `overlap-join` gesetzt:

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
  row-rule-inset-junction-start: overlap-join;
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
  @supports not (row-rule-inset-junction-start: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-start property";
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

Ändern Sie die Werte von {{cssxref("column-rule-width")}} und {{cssxref("column-gap")}}. Beachten Sie, dass der Anfang des Zeilenliniensegments unabhängig von der Größe der Lücke oder der Spaltenlinie stets über die Spaltenlinie hinaus verlängert wird. Der Endpunkt ist dabei an der gegenüberliegenden Kante der in der Lücke gezeichneten Spaltenlinie ausgerichtet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-junction-start` die Startkante von Zeilenliniensegmenten an Kreuzungen in Flex-Containern einrücken.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren mit {{cssxref("rule")}} eine hellblaue Linie für Spalten- und Zeilenlücken und überschreiben anschließend mit {{cssxref("row-rule-color")}} die Farbe der Zeilenlinien mit einem dunkleren `blue`. Schließlich setzen wir `row-rule-inset-junction-start` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-junction-start: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den `.column`-Container auf `column`. Dadurch ändert sich die Hauptachse des Flex-Containers, sodass die Elemente in Spalten statt in Zeilen angeordnet werden.

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
  @supports not (row-rule-inset-junction-start: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction-start property";
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
  containers[0].style.rowRuleInsetJunctionStart = val;
  containers[1].style.rowRuleInsetJunctionStart = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass diese Eigenschaft nur Zeilenlinien beeinflusst, die in mehrere Segmente aufgeteilt sind. Besteht eine Zeilenlinie aus einem einzigen Segment, das sich über die Breite des Containers erstreckt, hat dieses Segment zwei äußere Endpunkte und keine Kreuzungsendpunkte. Änderungen am Wert von `row-rule-inset-junction-start` wirken sich dann nicht darauf aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("row-rule-inset-junction-end")}}
- Kurzschreibweise {{cssxref("row-rule-inset-junction")}}
- Kurzschreibweise {{cssxref("row-rule-inset")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("row-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
