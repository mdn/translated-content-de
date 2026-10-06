---
title: "`row-rule-inset-junction` CSS property"
short-title: row-rule-inset-junction
slug: Web/CSS/Reference/Properties/row-rule-inset-junction
l10n:
  sourceCommit: 6602973eb32c6d871ea61b15079681875f4d9166
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`row-rule-inset-junction`** kann verwendet werden, um sowohl den linken als auch den rechten Endpunkt von Zeilen-Regelsegmenten zu versetzen, die [Verbindungsendpunkte](#understanding_junction_endpoints) sind. Das sind Endpunkte an Schnittstellen von Zwischenräumen, an denen sich Regelsegmente kreuzen.

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
  padding: 1em;
}
```

## Bestandteile

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
  - : Gibt an, dass das Verbindungssegment über die Spaltenregel hinausreichen soll. Daraus ergibt sich die Hälfte des Werts von {{cssxref("column-gap")}} plus die Hälfte des verwendeten Werts von {{cssxref("column-rule-width")}}.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Verbindungsendpunkt, der durch den Wert von `column-gap` bestimmt wird.

## Beschreibung

Mit der Kurzschreibweise `row-rule-inset-junction` können Sie die Eigenschaften {{cssxref("row-rule-inset-junction-start")}} und {{cssxref("row-rule-inset-junction-end")}} festlegen. Dadurch werden sowohl die Anfangs- als auch die Endkante von Verbindungssegment-Endpunkten am linken und rechten Ende von Zeilen-Regelsegmenten nach innen oder außen versetzt. Bei Sprachen mit Schreibrichtung von rechts nach links ist die Reihenfolge umgekehrt.

Wenn ein Wert angegeben wird, werden beide Eigenschaften auf diesen Wert gesetzt. Werden zwei Werte angegeben, erhält `-start` den ersten und `-end` den zweiten Wert. Positive Werte verkürzen das Segment durch einen Einzug nach innen; negative Werte und das [Schlüsselwort `overlap-join`](/de/docs/Web/CSS/Reference/Properties/row-rule-inset-junction-end#the_overlap-join_value) verlängern es durch einen Versatz nach außen. Der Standardwert ist `0`.

Die Eigenschaft `row-rule-inset-junction` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Verbindungsendpunkte von Zeilen- und Spaltensegmenten nach innen zu versetzen, können Sie `row-rule-inset-junction` zusammen mit der Kurzschreibweise {{cssxref("column-rule-inset-junction")}} über die Kurzschreibweise {{cssxref("rule-inset-junction")}} festlegen.

- Um sowohl die äußeren Endpunkte als auch die Verbindungsendpunkte von Zeilensegmenten nach innen zu versetzen, können Sie `row-rule-inset-junction` zusammen mit der Kurzschreibweise {{cssxref("row-rule-inset-cap")}} über die Kurzschreibweise {{cssxref("row-rule-inset")}} festlegen.

Alle Segmentendpunkte, einschließlich der `-cap`- und `-column`-Entsprechungen dieser Eigenschaft, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-junction` die Kanten von Verbindungssegmenten in Flex-Containern nach innen versetzen.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}} für die Zwischenräume zwischen Spalten und Zeilen. Anschließend überschreiben wir {{cssxref("row-rule-color")}}, sodass die Dekorationen der Zeilenzwischenräume ein dunkleres `blue` erhalten. Außerdem setzen wir {{cssxref("rule-overlap")}} auf `row-over-column`, damit bei einer Überlappung die Zeilensegmente über den Spaltensegmenten gezeichnet werden. Schließlich setzen wir `row-rule-inset-junction` auf `16px`, sodass Anfang und Ende denselben Wert erhalten.

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

Ändern Sie die Größe des Einzugs. Beachten Sie, dass diese Eigenschaft nur Zeilenregeln beeinflusst, die in mehrere Segmente unterteilt sind. Besteht eine Zeilenregel aus einem einzigen Segment, das sich über den Container erstreckt, hat dieses Segment zwei äußere Endpunkte und keine Verbindungsendpunkte. Änderungen am Wert von `row-rule-inset-junction` wirken sich dann nicht darauf aus.

### Mit Grid-Layout

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-junction` den Anfangs- und den Endpunkt von Zeilen-Verbindungssegmenten in einem Grid-Container um unterschiedliche Werte nach innen versetzen.

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

Wir machen das `<ul>` zu einem Grid-Container, indem wir die Eigenschaft {{cssxref("display")}} auf `grid` setzen. Die Eigenschaft {{cssxref("grid-template-columns")}} legt fest, dass das Grid sechs Spalten hat. Mit {{cssxref("list-style-type")}} entfernen wir die Aufzählungszeichen und setzen die Zeilen- und Spaltenabstände über die Kurzschreibweise {{cssxref("gap")}} auf `20px`. Farbe, Breite und Linienstil aller Regeln legen wir mit der Kurzschreibweise {{cssxref("rule")}} fest. Anschließend ändern wir mit der Eigenschaft {{cssxref("column-rule-color")}} nur die Farbe der Spaltenregeln.

Mit der Eigenschaft {{cssxref("row-rule-break")}} unterbrechen wir die Zeilenregeln an jeder Kreuzung. Ohne diese Unterbrechungen gäbe es keine Zeilen-Verbindungssegmente, die wir gestalten könnten!

Schließlich legen wir mit der Eigenschaft `row-rule-inset-junction` fest, dass der Anfang jeder Zeilenverbindung um `16px` nach innen versetzt wird, während ihr Ende keinen Einzug erhält.

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

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

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
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
