---
title: "`column-rule-inset-junction` CSS property"
short-title: column-rule-inset-junction
slug: Web/CSS/Reference/Properties/column-rule-inset-junction
l10n:
  sourceCommit: 068c46001316cf268128ab7a26b33fd5705cde1b
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`column-rule-inset-junction`** kann verwendet werden, um sowohl den oberen als auch den unteren Endpunkt von Spaltenliniensegmenten zu versetzen, die [Kreuzungsendpunkte](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#understanding_junction_endpoints) sind. Das sind Endpunkte an Kreuzungen von Abständen, an denen sich Liniensegmente schneiden.

{{InteractiveExample("CSS Demo: column-rule-inset-junction")}}

```css interactive-example-choice
column-rule-inset-junction: 0;
```

```css interactive-example-choice
column-rule-inset-junction: 10px;
```

```css interactive-example-choice
column-rule-inset-junction: 0.5em -0.5em;
```

```css interactive-example-choice
column-rule-inset-junction: overlap-join;
```

```css interactive-example-choice
column-rule-inset-junction: overlap-join 10px;
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

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-inset-junction-end")}}
- {{cssxref("column-rule-inset-junction-start")}}

## Syntax

```css
/* Keywords */
column-rule-inset-junction: overlap-join;

/* <length-percentage> values */
column-rule-inset-junction: 0;
column-rule-inset-junction: 1em;
column-rule-inset-junction: -5px;
column-rule-inset-junction: -25%;

/* Two values */
column-rule-inset-junction: 0 1em;
column-rule-inset-junction: -5px -25%;
column-rule-inset-junction: overlap-join 10px;

/* Global values */
column-rule-inset-junction: inherit;
column-rule-inset-junction: initial;
column-rule-inset-junction: revert;
column-rule-inset-junction: revert-layer;
column-rule-inset-junction: unset;
```

### Werte

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass sich das Kreuzungssegment über die Zeilenlinie erstrecken soll. Der Wert entspricht der Hälfte des Werts von {{cssxref("row-gap")}} plus der Hälfte des verwendeten Werts von {{cssxref("row-rule-width")}}.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Kreuzungsendpunkt, der dem Wert von `row-gap` entspricht.

## Beschreibung

Mit der Kurzschreibweise `column-rule-inset-junction` lassen sich die Eigenschaften {{cssxref("column-rule-inset-junction-start")}} und {{cssxref("column-rule-inset-junction-end")}} festlegen. Dadurch können sowohl der obere als auch der untere Endpunkt von Spaltenliniensegmenten an Kreuzungen nach innen oder außen versetzt werden.

Wird ein Wert angegeben, erhalten beide Eigenschaften diesen Wert. Werden zwei Werte angegeben, erhält `-start` den ersten und `-end` den zweiten Wert. Positive Werte verkürzen das Segment, indem sie seine Endpunkte nach innen versetzen. Negative Werte und das [Schlüsselwort `overlap-join`](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#the_overlap-join_value) verlängern es, indem sie die Endpunkte nach außen versetzen. Der Standardwert ist `0`.

Die Eigenschaft `column-rule-inset-junction` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Kreuzungsendpunkte von Spalten- und Zeilensegmenten nach innen zu versetzen, können die Kurzschreibweisen `column-rule-inset-junction` und {{cssxref("row-rule-inset-junction")}} über die Kurzschreibweise {{cssxref("rule-inset-junction")}} festgelegt werden.

- Um sowohl die äußeren Endpunkte als auch die Kreuzungsendpunkte von Spaltensegmenten nach innen zu versetzen, können die Kurzschreibweisen `column-rule-inset-junction` und {{cssxref("column-rule-inset-cap")}} über die Kurzschreibweise {{cssxref("column-rule-inset")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden `-cap`- und `-row`-Endpunkte, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `column-rule-inset-junction` verwendet wird, um die Endpunkte von Spaltensegmenten an Kreuzungen in Flex-Containern nach innen zu versetzen.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren mit {{cssxref("rule")}} eine hellblaue Linie für die Zeilen- und Spaltenabstände und überschreiben anschließend {{cssxref("column-rule-color")}}, um die Linien in den Spaltenabständen auf ein dunkleres `blue` zu setzen. Außerdem setzen wir die Eigenschaft {{cssxref("rule-overlap")}} auf `column-over-row`, damit Spaltensegmente über Zeilensegmenten gezeichnet werden, wenn sie sich überlappen. Schließlich setzen wir `column-rule-inset-junction` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: column-over-row;

  column-rule-inset-junction: 16px;
}
```

Für den Container `.column` setzen wir außerdem {{cssxref("flex-direction")}} auf `column`. Dadurch verläuft die Hauptachse des Flex-Containers vertikal über die Seite, und die Elemente werden in Spalten statt in Zeilen angeordnet.

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
  @supports not (column-rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction property";
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
  containers[0].style.columnRuleInsetJunction = val;
  containers[1].style.columnRuleInsetJunction = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass diese Eigenschaft nur Spaltenlinien betrifft, die in mehrere Segmente aufgeteilt sind. Besteht eine Spaltenlinie aus einem einzigen Segment, das sich über die Höhe des Containers erstreckt, hat dieses Segment zwei äußere Endpunkte und keine Kreuzungsendpunkte. Änderungen am Wert von `column-rule-inset-junction` wirken sich dann nicht darauf aus.

### Mit Grid-Layout

Dieses Beispiel zeigt, wie Sie mit der Eigenschaft `column-rule-inset-junction` den oberen und den unteren Endpunkt von Kreuzungssegmenten in einem Grid-Container um unterschiedliche Werte nach innen versetzen.

#### HTML

Wir verwenden ein {{htmlelement("ul")}}-Element als Container mit mehreren {{htmlelement("li")}}-Kindelementen, die jeweils zu einem Grid-Element werden.

```html live-sample___junctions
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
```

```html hidden live-sample___junctions
<p>
  <label
    >Change the <code>-start</code> value.
    <input type="range" min="-40" max="40" value="16" id="start" data-unit="px"
  /></label>
  <output id="og">16px</output>
</p>
<p>
  <label
    >Change the <code>-end</code> value.
    <input type="range" min="-40" max="40" value="0" id="end" data-unit="px"
  /></label>
  <output id="ow">0px</output>
</p>
```

#### CSS

Wir machen das `<ul>` zu einem Grid-Container, indem wir die Eigenschaft {{cssxref("display")}} auf `grid` setzen. Die Eigenschaft {{cssxref("grid-template-columns")}} legt fest, dass das Grid sechs Spalten hat. Mit {{cssxref("list-style-type")}} entfernen wir die Aufzählungszeichen und setzen die Zeilen- und Spaltenabstände mit der Kurzschreibweise {{cssxref("gap")}} auf `20px`. Farbe, Breite und Linienstil aller Linien legen wir mit der Kurzschreibweise {{cssxref("rule")}} fest. Anschließend ändern wir mit der Eigenschaft {{cssxref("row-rule-color")}} nur die Farbe der Zeilenlinien.

Mit der Eigenschaft {{cssxref("column-rule-break")}} unterbrechen wir die Spaltenlinien an jeder Kreuzung. Würden die Spaltenlinien nicht unterbrochen, gäbe es keine Spaltensegmente an Kreuzungen, die gestaltet werden könnten!

Schließlich setzen wir mit der Eigenschaft `column-rule-inset-junction` den Einzug am Anfang jedes Spaltensegments an einer Kreuzung auf `16px`, während das Ende nicht nach innen versetzt wird.

Außerdem legen wir fest, dass sich das sechste Grid-Element über drei Spalten erstreckt.

```css live-sample___junctions
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: "";
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  column-rule-break: intersection;

  column-rule-inset-junction: 16px 0;
}

li:nth-of-type(8) {
  grid-column-end: span 3;
}
```

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

```css hidden live-sample___junctions
ul {
  border: 1px solid;
  place-items: center;
  width: 95vw;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 2em 1em;
  width: 100%;
  box-sizing: border-box;
}
li:nth-of-type(8) {
  background-color: transparent;
}

li code {
  display: block;
  margin: 0 auto;
  text-align: left;
  width: 30vw;
}
output {
  font-family: monospace;
}
input {
  accent-color: olive;
}
@layer no-support {
  @supports not (column-rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden live-sample___junctions
const ul = document.querySelector("ul");
const startSize = document.getElementById("start");
const og = document.getElementById("og");
const endSize = document.getElementById("end");
const ow = document.getElementById("ow");
const cell = document.querySelector("li:nth-of-type(8)");
let text = "";
function update() {
  ul.style.columnRuleInsetJunction =
    text = `${startSize.value}px ${endSize.value}px`;
  cell.innerHTML = `<code>rule-inset-cap: ${text};</code>`;
}

update();

startSize.addEventListener("input", () => {
  og.innerText = `${startSize.value}px`;
  update();
});

endSize.addEventListener("input", () => {
  ow.innerText = `${endSize.value}px`;
  update();
});
```

#### Ergebnis

{{EmbedLiveSample("junctions", "", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-junction-start")}}
- Kurzschreibweise {{cssxref("column-rule-inset")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("column-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
