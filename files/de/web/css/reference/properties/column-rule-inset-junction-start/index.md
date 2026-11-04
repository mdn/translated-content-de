---
title: "`column-rule-inset-junction-start` CSS property"
short-title: column-rule-inset-junction-start
slug: Web/CSS/Reference/Properties/column-rule-inset-junction-start
l10n:
  sourceCommit: 068c46001316cf268128ab7a26b33fd5705cde1b
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-junction-start`** können die oberen Endpunkte von column-rule-Segmenten versetzt werden, wenn es sich dabei um [Kreuzungsendpunkte](#kreuzungsendpunkte_verstehen) handelt – also um Endpunkte an Lückenkreuzungen, an denen sich rule-Segmente schneiden.

{{InteractiveExample("CSS Demo: column-rule-inset-junction-start")}}

```css interactive-example-choice
column-rule-inset-junction-start: 0;
```

```css interactive-example-choice
column-rule-inset-junction-start: 0.5em;
```

```css interactive-example-choice
column-rule-inset-junction-start: 10px;
```

```css interactive-example-choice
column-rule-inset-junction-start: -100%;
```

```css interactive-example-choice
column-rule-inset-junction-start: overlap-join;
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
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  rule: solid thick lightpink;
  column-rule-color: magenta;
  column-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: column-over-row;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
}
#example-element i {
  background-color: #efefef;
  color: #333333;
  padding: 1em;
}
```

## Syntax

```css
/* Keywords */
column-rule-inset-junction-start: overlap-join;

/* <length-percentage> values */
column-rule-inset-junction-start: 0;
column-rule-inset-junction-start: 1em;
column-rule-inset-junction-start: -5px;
column-rule-inset-junction-start: -25%;

/* Global values */
column-rule-inset-junction-start: inherit;
column-rule-inset-junction-start: initial;
column-rule-inset-junction-start: revert;
column-rule-inset-junction-start: revert-layer;
column-rule-inset-junction-start: unset;
```

### Werte

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass sich das Kreuzungssegment über die row-rule erstrecken soll. Der Wert ergibt sich aus der Hälfte des {{cssxref("row-gap")}}-Werts plus der Hälfte des verwendeten {{cssxref("row-rule-width")}}-Werts.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Versatzes an. Prozentwerte beziehen sich auf den Kreuzungsendpunkt, dessen Bezugsgröße der `row-gap`-Wert ist.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-junction-start` können [Endpunkte von Kreuzungssegmenten](#kreuzungsendpunkte_verstehen) am oberen Ende von column-rule-Segmenten nach innen oder außen versetzt werden. Der Standardwert ist `0`. Positive Werte verkürzen das Segment, während negative Werte und [das Schlüsselwort `overlap-join`](#the_overlap-join_value) es verlängern.

Column-rules werden innerhalb einer Spaltenlücke als ein oder mehrere Segmente gezeichnet. Segmente treten zwischen folgenden Elementen auf:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Spalten in mehrspaltigen Layouts.

Ob sich eine column-rule über mehrere Zeilen erstreckt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Innere Unterbrechungen zwischen column-rule-Segmenten entsprechen in ihrer Größe dem Wert von {{cssxref("row-gap")}}. Ein Kreuzungsendpunkt befindet sich am oberen Ende jedes Spaltensegments, dessen oberes Ende an einer Lückenkreuzung liegt, an der weitere Spalten- oder rule-Segmente vorhanden sind.

Die Eigenschaft `column-rule-inset-junction-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die oberen und unteren Kreuzungsendpunkte von Spaltensegmenten nach innen zu versetzen, können `column-rule-inset-junction-start` und {{cssxref("column-rule-inset-junction-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-junction")}} festgelegt werden.

- Um alle oberen Endpunkte von Spaltensegmenten nach innen zu versetzen, können `column-rule-inset-junction-start` und {{cssxref("column-rule-inset-cap-start")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-start")}} festgelegt werden.

- Um die oberen, unteren, linken und rechten Kreuzungsendpunkte von Segmenten nach innen zu versetzen, können die Kurzschreibweisen `column-rule-inset-junction` und {{cssxref("row-rule-inset-junction")}} mit der Kurzschreibweise {{cssxref("rule-inset-junction")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der dieser Eigenschaft entsprechenden Varianten mit `-start`, `-cap` und `row-`, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Kreuzungsendpunkte verstehen

Ein _Endpunkt eines Kreuzungssegments_ ist ein Segmentendpunkt an einer inneren Lücke, der an einer Lückenkreuzung endet, an der weitere rule- oder Spaltensegmente vorhanden sind. Die Eigenschaft `column-rule-inset-junction-start` steuert den Versatz der oberen Kante von Spalten-Kreuzungssegmenten. Dadurch können die Segmente verkürzt oder verlängert werden.

Längenwerte für `column-rule-inset-junction-start` versetzen Segmente um den angegebenen Wert nach innen. Negative Längenwerte bewirken einen Versatz nach außen und verlängern das obere Ende des Kreuzungssegments. Prozentwerte beziehen sich auf die Größe von {{cssxref("row-gap")}}. Mit `-50%` wird das obere Ende des Kreuzungssegments bis zur Mitte der Zeilenlücke oberhalb des Segments verlängert, unabhängig davon, wie breit die Zeilenlücke ist.

In der folgenden Demonstration beginnen die column-rule-Segmente in den letzten beiden Zeilen an Kreuzungsendpunkten. Wenn `column-rule-inset-junction-start: 16px` festgelegt ist, werden die oberen Enden dieser Segmente um `16px` nach innen versetzt. Ändern Sie den `<length>`-Wert für den Versatz, um besser zu erkennen, welche Spaltensegmente an Kreuzungsendpunkten beginnen.

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

```html hidden live-sample___junctions
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

```css hidden live-sample___junctions live-sample___percents
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
  column-rule-inset-junction-start: 16px;

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
  @supports not (column-rule-inset-junction-start: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-start property";
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
  column-rule-inset-junction-start: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___junctions live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetJunctionStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
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

{{EmbedLiveSample("junctions", "", "300")}}

Wenn Sie `0px` als Wert festlegen, liegen die Anfänge der column-rules auf einer Höhe mit dem oberen Rand der Zeile und grenzen an die Zeilenlücke. Dies ist die Standardeinstellung. Beachten Sie, dass sich bei einer Änderung des Eigenschaftswerts nur die oberen Enden der Segmente in der Mitte des Grids ändern. Die Segmente in der ersten Zeile ändern sich nicht: Ihre Endpunkte sind _Cap-Endpunkte_ und werden von der Eigenschaft `column-rule-inset-junction-start` nicht beeinflusst.

Wählen Sie `around` und `between` als Werte für `rule-visibility-items` aus. Bei `around` werden rules in einem Lückensegment gezeichnet, wenn ein Element mindestens einen der beiden angrenzenden Bereiche belegt. Bei `between` werden rules in Lückensegmenten nur dann gezeichnet, wenn Elemente beide angrenzenden Bereiche belegen. Endet ein rule-Segment an einer inneren Kreuzung, an der keine weiteren rule-Segmente vorhanden sind, handelt es sich bei seinem Endpunkt um einen _Cap-Endpunkt_. Dieser wird von der Eigenschaft `column-rule-inset-junction-start` nicht beeinflusst.

### Der Wert `overlap-join`

Der Wert `overlap-join` verlängert das obere Ende innerer Segmente nach außen, sodass es auf einer Höhe mit der Oberkante der kreuzenden row-rule liegt. Der Wert ergibt sich aus der Hälfte der Größe von {{cssxref("row-gap")}} (wodurch das Segment bis zur Mitte der Lücke reicht) plus der Hälfte der Breite der row-rule.

Wenn `column-rule-inset-junction-start` auf das Schlüsselwort `overlap-join` gesetzt ist, reichen die Enden der Kreuzungssegmente nach oben in die Zeilenlücke hinein, bis sie auf die Oberkante der dort gezeichneten row-rule treffen und sich mit ihr verbinden.

Im folgenden interaktiven Beispiel ist `column-rule-inset-junction-start` auf `overlap-join` gesetzt:

```html hidden
<p>
  <label
    >Change the <code>row-gap</code>.
    <input type="range" min="10" max="40" value="30" id="gap" data-unit="px"
  /></label>
  <output id="og">30px</output>
</p>
<p>
  <label
    >Change the <code>row-rule-width</code>.
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
  column-rule: 16px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: around;
  column-rule-break: intersection;
  column-rule-inset-junction-start: overlap-join;
  border: 1px solid;
}
ul {
  place-items: center;
  width: 70vw;
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
  @supports not (column-rule-inset-junction-start: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-start property";
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
  og.innerText = ul.style.rowGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.rowRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

Ändern Sie die Werte von {{cssxref("row-rule-width")}} und {{cssxref("row-gap")}}. Beachten Sie, dass das obere Ende des Spaltensegments unabhängig von der Größe der Lücke oder der Breite der row-rule stets so weit verlängert wird, dass es auf einer Höhe mit der Oberkante der in der Lücke gezeichneten row-rule liegt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `column-rule-inset-junction-start` festgelegt wird, um die Anfangskante von Spalten-Kreuzungssegmenten in Flex-Containern nach innen zu versetzen.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den beiden Containern besteht darin, dass der zweite zusätzlich die Klasse `column` hat.

```html
<h1>Insetting junction column rule endpoints</h1>
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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Zeilen- als auch in Spaltenlücken gezeichnet wird. Anschließend überschreiben wir {{cssxref("column-rule-color")}} und legen für die Dekoration der Spaltenlücken ein dunkleres `blue` fest. Außerdem setzen wir die Eigenschaft {{cssxref("rule-overlap")}} auf `row-over-column`, damit die Spaltensegmente bei Überlappungen unter den Zeilensegmenten gezeichnet werden. Schließlich setzen wir `column-rule-inset-junction-start` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: row-over-column;

  column-rule-inset-junction-start: 16px;
}
```

Für den Container `.column` setzen wir außerdem {{cssxref("flex-direction")}} auf `column`. Dadurch verläuft die Hauptachse des Flex-Containers vertikal, und die Elemente werden in Spalten statt in Zeilen angeordnet.

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
  @supports not (column-rule-inset-junction-start: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-start property";
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
  containers[0].style.columnRuleInsetJunctionStart = val;
  containers[1].style.columnRuleInsetJunctionStart = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Versatzes. Beachten Sie, dass in dem Beispiel, in dem die column-rule aus einem einzigen Segment besteht, das von unten nach unten verläuft, dieses Segment zwei Cap-Endpunkte und keine Kreuzungsendpunkte hat. Eine Änderung des Werts von `column-rule-inset-junction-start` wirkt sich daher nicht auf dieses Beispiel aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-junction-end")}}
- {{cssxref("column-rule-inset-junction")}}-Kurzschreibweise
- {{cssxref("column-rule-inset")}}-Kurzschreibweise
- {{cssxref("rule-inset")}}-Kurzschreibweise
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}}-Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
