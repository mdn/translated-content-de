---
title: "`rule-inset-junction` CSS property"
short-title: rule-inset-junction
slug: Web/CSS/Reference/Properties/rule-inset-junction
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`rule-inset-junction`** kann verwendet werden, um die [Verbindungspunkte](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#understanding_junction_endpoints) von Spalten- und Zeilen-Trennliniensegmenten um denselben Wert zu versetzen.

{{InteractiveExample("CSS Demo: rule-inset-junction")}}

```css interactive-example-choice
rule-inset-junction: 0;
```

```css interactive-example-choice
rule-inset-junction: 10px;
```

```css interactive-example-choice
rule-inset-junction: 0.5em -0.5em;
```

```css interactive-example-choice
rule-inset-junction: overlap-join;
```

```css interactive-example-choice
rule-inset-junction: overlap-join 10px;
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
  rule-break: intersection;
  gap: 1.5em;
  rule-overlap: column-over-row;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
}
#example-element i {
  background-color: #efefef;
  padding: 1em;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-inset-junction")}}
- {{cssxref("row-rule-inset-junction")}}

## Syntax

```css
/* Keywords */
rule-inset-junction: overlap-join;

/* <length-percentage> values */
rule-inset-junction: 0;
rule-inset-junction: 1em;
rule-inset-junction: -5px;
rule-inset-junction: -25%;

/* Two values */
rule-inset-junction: 0 1em;
rule-inset-junction: -5px -25%;
rule-inset-junction: overlap-join 10px;

/* Global values */
rule-inset-junction: inherit;
rule-inset-junction: initial;
rule-inset-junction: revert;
rule-inset-junction: revert-layer;
rule-inset-junction: unset;
```

### Werte

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass sich das Verbindungssegment über die Zeilen-Trennlinie erstrecken soll. Der resultierende Wert entspricht der Hälfte des Werts von {{cssxref("row-gap")}} zuzüglich der Hälfte des verwendeten Werts von {{cssxref("row-rule-width")}}.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Verbindungspunkt: bei Spaltensegmenten ist dies der Wert von `row-gap`, bei Zeilensegmenten der Wert von `column-gap`.

## Beschreibung

Mit der Kurzschreibweise `rule-inset-junction` lassen sich die Eigenschaften {{cssxref("row-rule-inset-junction")}} und {{cssxref("column-rule-inset-junction")}} in einer einzigen Deklaration festlegen. Dabei werden die Verbindungspunkte von Zeilen- und Spaltensegmenten um die angegebenen Werte eingerückt.

Wird ein Wert angegeben, werden beide Eigenschaften auf diesen Wert gesetzt. Werden zwei Werte angegeben, wird `-start` auf den ersten und `-end` auf den zweiten Wert gesetzt. Positive Werte verkürzen das Segment beziehungsweise rücken seine Endpunkte ein. Negative Werte und das [Schlüsselwort `overlap-join`](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-junction-end#understanding_junction_endpoints) verlängern es beziehungsweise verschieben seine Endpunkte nach außen. Der Standardwert ist `0`.

Um sowohl die Abschluss- als auch die Verbindungspunkte von Segmenten einzurücken, können die Kurzschreibweisen `rule-inset-junction` und {{cssxref("rule-inset-cap")}} über die Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `rule-inset-junction` die Endpunkte von Verbindungssegmenten in Flex-Containern einrücken.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine Trennlinie mit {{cssxref("rule")}} und setzen `rule-inset-junction` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid blue;

  rule-inset-junction: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column` auf `column`. Dadurch verläuft die Hauptachse des Flex-Containers vertikal, und die Elemente werden in Spalten statt in Zeilen angeordnet.

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
  @supports not (rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-junction property";
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
  containers[0].style.ruleInsetJunction = val;
  containers[1].style.ruleInsetJunction = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie: Besteht die Trennlinie aus einem einzigen Segment, das von einer Kante des Containers zur gegenüberliegenden Kante verläuft, hat dieses Segment zwei Abschlusspunkte und keine Verbindungspunkte. Eine Änderung des Werts von `rule-inset-junction` wirkt sich daher nicht auf solche Segmente aus.

### Mit Grid-Layout

Dieses Beispiel zeigt, wie Sie mit der Eigenschaft `rule-inset-junction` die Verbindungspunkte von Segmenten in einem Grid-Container um zwei unterschiedliche Werte einrücken.

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
  <li>17</li>
  <li>18</li>
  <li>19</li>
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

Wir machen das `<ul>`-Element zu einem Grid-Container, indem wir die Eigenschaft {{cssxref("display")}} auf `grid` setzen. Die Eigenschaft {{cssxref("grid-template-columns")}} legt fest, dass das Grid fünf Spalten hat. Mit der Eigenschaft {{cssxref("list-style-type")}} entfernen wir die Aufzählungszeichen und setzen die Abstände zwischen Zeilen und Spalten mit der Kurzschreibweise {{cssxref("gap")}} auf `20px`. Farbe, Breite und Linienstil aller Trennlinien legen wir mit der Kurzschreibweise {{cssxref("rule")}} fest. Anschließend ändern wir mit der Eigenschaft {{cssxref("row-rule-color")}} nur die Farbe der Zeilen-Trennlinien.

Mit der Eigenschaft {{cssxref("rule-break")}} unterbrechen wir die Trennlinien an jedem Schnittpunkt. Ohne diese Unterbrechungen gäbe es keine Verbindungssegmente, die wir gestalten könnten!

Schließlich verwenden wir die Eigenschaft `rule-inset-junction`, um den Anfang jedes Spalten-Verbindungssegments um `16px` einzurücken, das Ende jedoch nicht.

Außerdem legen wir fest, dass sich das sechste Grid-Element über drei Spalten erstreckt.

```css live-sample___junctions
ul {
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style-type: "";
  gap: 20px;
  rule: 10px solid olive;
  row-rule-color: palegoldenrod;
  rule-break: intersection;

  rule-inset-junction: 16px 0;
}

li:nth-of-type(7) {
  grid-column-end: span 3;
}
```

Das übrige CSS ist der Kürze halber ausgeblendet.

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
  @supports not (rule-inset-junction: 16px) {
    body::before {
      content: "Your browser doesn't support the rule-inset-junction property";
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
const cell = document.querySelector("li:nth-of-type(7)");
let text = "";
function update() {
  ul.style.ruleInsetJunction = text = `${startSize.value}px ${endSize.value}px`;
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

- Kurzschreibweise {{cssxref("rule-inset-cap")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
