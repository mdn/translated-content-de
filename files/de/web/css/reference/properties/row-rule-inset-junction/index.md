---
title: "`row-rule-inset-junction` CSS property"
short-title: row-rule-inset-junction
slug: Web/CSS/Reference/Properties/row-rule-inset-junction
l10n:
  sourceCommit: 068c46001316cf268128ab7a26b33fd5705cde1b
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`row-rule-inset-junction`** kann verwendet werden, um sowohl den linken als auch den rechten Endpunkt von Zeilentrennliniensegmenten zu versetzen, wenn es sich dabei um [Knotenendpunkte](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#understanding_junction_endpoints) handelt – also um Endpunkte an Lückenknoten, an denen sich Trennliniensegmente schneiden.

{{InteractiveExample("CSS Demo: row-rule-inset-junction")}}

```css interactive-example-choice
row-rule-inset-junction: 0;
```

```css interactive-example-choice
row-rule-inset-junction: 10px;
```

```css interactive-example-choice
row-rule-inset-junction: 0.5em -0.5em;
```

```css interactive-example-choice
row-rule-inset-junction: overlap-join;
```

```css interactive-example-choice
row-rule-inset-junction: overlap-join 10px;
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
  row-rule-color: magenta;
  row-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: row-over-column;
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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("row-rule-inset-junction-end")}}
- {{cssxref("row-rule-inset-junction-start")}}

## Syntax

```css
/* Keywords */
row-rule-inset-junction: overlap-join;

/* <length-percentage> values */
row-rule-inset-junction: 0;
row-rule-inset-junction: 1em;
row-rule-inset-junction: -5px;
row-rule-inset-junction: -25%;

/* Two values */
row-rule-inset-junction: 0 1em;
row-rule-inset-junction: -5px -25%;
row-rule-inset-junction: overlap-join 10px;

/* Global values */
row-rule-inset-junction: inherit;
row-rule-inset-junction: initial;
row-rule-inset-junction: revert;
row-rule-inset-junction: revert-layer;
row-rule-inset-junction: unset;
```

### Werte

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Legt fest, dass sich das Knotensegment über die Spaltentrennlinie erstrecken soll. Der resultierende Wert entspricht der Hälfte des {{cssxref("column-gap")}}-Werts plus der Hälfte des verwendeten {{cssxref("column-rule-width")}}-Werts.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Knotenendpunkt, dessen Wert dem `column-gap`-Wert entspricht.

## Beschreibung

Mit der Kurzschreibweise `row-rule-inset-junction` lassen sich die Eigenschaften {{cssxref("row-rule-inset-junction-start")}} und {{cssxref("row-rule-inset-junction-end")}} festlegen. Dadurch werden sowohl die Anfangs- als auch die Endkante der Knotenendpunkte von Zeilentrennliniensegmenten eingerückt oder nach außen verschoben. Diese Endpunkte befinden sich links und rechts der Segmente (beziehungsweise rechts und links bei Sprachen mit Schreibrichtung von rechts nach links).

Wenn ein Wert angegeben wird, erhalten beide Eigenschaften diesen Wert. Bei zwei Werten wird `-start` auf den ersten und `-end` auf den zweiten Wert gesetzt. Positive Werte verkürzen das Segment (rücken es ein), während negative Werte und das [Schlüsselwort `overlap-join`](/de/docs/Web/CSS/Reference/Properties/row-rule-inset-junction-end#the_overlap-join_value) es verlängern (nach außen verschieben). Der Standardwert ist `0`.

Die Eigenschaft `row-rule-inset-junction` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Knotenendpunkte sowohl von Zeilen- als auch von Spaltentrennliniensegmenten einzurücken, können `row-rule-inset-junction` und die Kurzschreibweise {{cssxref("column-rule-inset-junction")}} gemeinsam über die Kurzschreibweise {{cssxref("rule-inset-junction")}} festgelegt werden.

- Um sowohl die äußeren Endpunkte als auch die Knotenendpunkte von Zeilentrennliniensegmenten einzurücken, können `row-rule-inset-junction` und die Kurzschreibweise {{cssxref("row-rule-inset-cap")}} gemeinsam über die Kurzschreibweise {{cssxref("row-rule-inset")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden `-cap`- und `-column`-Eigenschaften, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-junction` die Kanten von Zeilenknotensegmenten in Flex-Containern einrücken.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren mit {{cssxref("rule")}} hellblaue Trennlinien für die Zeilen- und Spaltenlücken und überschreiben anschließend {{cssxref("row-rule-color")}}, um die Trennlinien in den Zeilenlücken auf ein dunkleres `blue` zu setzen. Außerdem setzen wir {{cssxref("rule-overlap")}} auf `row-over-column`, damit Zeilensegmente bei Überlappungen über den Spaltensegmenten gezeichnet werden. Schließlich setzen wir `row-rule-inset-junction` auf `16px`, sodass Anfang und Ende denselben Wert erhalten.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;
  rule-overlap: row-over-column;

  row-rule-inset-junction: 16px;
}
```

Für den Container `.column` setzen wir außerdem {{cssxref("flex-direction")}} auf `column`. Dadurch verläuft die Hauptachse des Flex-Containers vertikal über die Seite, und die Elemente werden in Spalten statt in Zeilen angeordnet.

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
  @supports not (row-rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction property";
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
  containers[0].style.rowRuleInsetJunction = val;
  containers[1].style.rowRuleInsetJunction = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass diese Eigenschaft nur Zeilentrennlinien betrifft, die in mehrere Segmente aufgeteilt sind. Besteht eine Zeilentrennlinie aus einem einzigen Segment, das sich über die gesamte Breite des Containers erstreckt, hat dieses Segment zwei äußere Endpunkte und keine Knotenendpunkte. Änderungen am Wert von `row-rule-inset-junction` wirken sich dann nicht darauf aus.

### Mit Grid-Layout

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-junction` die Anfangs- und Endpunkte von Zeilenknotensegmenten in einem Grid-Container um unterschiedliche Werte einrücken.

#### HTML

Wir verwenden das Element {{htmlelement("ul")}} als Container mit mehreren {{htmlelement("li")}}-Kindelementen, die jeweils zu einem Grid-Element werden.

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
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
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

Wir machen das `<ul>`-Element zu einem Grid-Container, indem wir {{cssxref("display")}} auf `grid` setzen. Mit {{cssxref("grid-template-columns")}} legen wir fest, dass das Grid sechs Spalten hat. Über {{cssxref("list-style-type")}} entfernen wir die Aufzählungszeichen und setzen mit der Kurzschreibweise {{cssxref("gap")}} die Zeilen- und Spaltenlücken auf `20px`. Farbe, Breite und Linienstil aller Trennlinien legen wir mit der Kurzschreibweise {{cssxref("rule")}} fest. Anschließend ändern wir mit {{cssxref("column-rule-color")}} nur die Farbe der Spaltentrennlinien.

Mit {{cssxref("row-rule-break")}} unterbrechen wir die Zeilentrennlinien an jedem Schnittpunkt. Ohne diese Unterbrechungen gäbe es keine Zeilenknotensegmente, die gestaltet werden könnten!

Schließlich legen wir mit `row-rule-inset-junction` fest, dass der Anfang jedes Zeilenknotensegments um `16px` eingerückt wird, das Ende jedoch nicht.

Außerdem legen wir fest, dass sich das sechste Grid-Element über drei Spalten erstreckt.

```css live-sample___junctions live-sample___percents
ul {
  display: grid;
  grid-template-columns: repeat(6, auto);
  list-style-type: "";
  gap: 20px;
  rule: 10px solid olive;
  column-rule-color: palegoldenrod;
  row-rule-break: intersection;

  row-rule-inset-junction: 16px 0;
}

li:nth-of-type(8) {
  grid-column-end: span 3;
}
```

Das übrige CSS ist der Kürze halber ausgeblendet.

```css hidden live-sample___junctions live-sample___percents
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
  @supports not (row-rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-junction property";
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
  ul.style.rowRuleInsetJunction =
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

{{EmbedLiveSample("junctions", "", "500")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise {{cssxref("column-rule-inset-junction")}}
- Kurzschreibweise {{cssxref("row-rule-inset-cap")}}
- Kurzschreibweise {{cssxref("row-rule-inset")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("row-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
