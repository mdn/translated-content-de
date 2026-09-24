---
title: "`column-rule-inset-junction-end` CSS property"
short-title: column-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/column-rule-inset-junction-end
l10n:
  sourceCommit: c297ca81510b69e602e8fef4732d558b7ed020b0
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-junction-end`** können die unteren Endpunkte von Spaltentrennliniensegmenten versetzt werden, die [Kreuzungsendpunkte](#understanding_junction_end) sind – also Endpunkte an Lückenkreuzungen, an denen sich Trennliniensegmente schneiden.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
column-rule-inset-junction-end: 0;
```

```css interactive-example-choice
column-rule-inset-junction-end: 0.5em;
```

```css interactive-example-choice
column-rule-inset-junction-end: 10px;
```

```css interactive-example-choice
column-rule-inset-junction-end: -100%;
```

```css interactive-example-choice
column-rule-inset-junction-end: overlap-join;
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
  padding: 1em;
}
```

## Syntax

```css
/* Keywords */
column-rule-inset-junction-end: overlap-join;

/* <length-percentage> values */
column-rule-inset-junction-end: 0;
column-rule-inset-junction-end: 1em;
column-rule-inset-junction-end: -5px;
column-rule-inset-junction-end: -25%;

/* Global values */
column-rule-inset-junction-end: inherit;
column-rule-inset-junction-end: initial;
column-rule-inset-junction-end: revert;
column-rule-inset-junction-end: revert-layer;
column-rule-inset-junction-end: unset;
```

### Werte

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass sich das Segment an der Kreuzung über die Zeilentrennlinie hinaus erstrecken soll. Der Wert entspricht der Hälfte des {{cssxref("row-gap")}}-Werts zuzüglich der Hälfte des verwendeten {{cssxref("row-rule-width")}}-Werts.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Kreuzungsendpunkt, dessen Bezugsgröße der `row-gap`-Wert ist.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-junction-end` können [Segmentendpunkte an Kreuzungen](#understanding_junction_end) am unteren Ende von Spaltentrennliniensegmenten nach innen oder außen versetzt werden. Der Standardwert ist `0`. Positive Werte verkürzen das Segment, während negative Werte und [das Schlüsselwort `overlap-join`](#the_overlap-join_value) es verlängern.

Spaltentrennlinien werden innerhalb einer Spaltenlücke als ein oder mehrere Segmente dargestellt. Solche Segmente liegen zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Spalten in mehrspaltigen Layouts.

Ob eine Spaltentrennlinie mehrere Zeilen überspannt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Innere Unterbrechungen zwischen Spaltentrennliniensegmenten entsprechen der Größe von {{cssxref("row-gap")}}. Ein Kreuzungsendpunkt liegt am unteren Ende eines Spaltensegments vor, wenn das Segment dort an einer Lückenkreuzung endet, an der weitere Spalten- oder Trennliniensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-junction-end` ist Bestandteil mehrerer [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die oberen und unteren Kreuzungsendpunkte von Spaltensegmenten nach innen zu versetzen, können `column-rule-inset-junction-end` und {{cssxref("column-rule-inset-junction-start")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-junction")}} gesetzt werden.

- Um alle unteren Endpunkte von Spaltensegmenten nach innen zu versetzen, können `column-rule-inset-junction-end` und {{cssxref("column-rule-inset-cap-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-end")}} gesetzt werden.

- Um die unteren Kreuzungsendpunkte von Spaltensegmenten und die rechten Kreuzungsendpunkte von Zeilensegmenten nach innen zu versetzen, können `column-rule-inset-junction-end` und {{cssxref("row-rule-inset-junction-end")}} mit der Kurzschreibweise {{cssxref("rule-inset-junction-end")}} gesetzt werden.

Alle Segmentendpunkte, einschließlich der Entsprechungen dieser Eigenschaft für `-start`, `-cap` und `row-`, können mit der Kurzschreibweise {{cssxref("rule-inset")}} gesetzt werden.

### Kreuzungsendpunkte verstehen

Ein _Segmentendpunkt an einer Kreuzung_ ist ein Segmentendpunkt an einer inneren Lücke, der an einer Lückenkreuzung endet, an der weitere Trennlinien- oder Spaltensegmente vorhanden sind. Die Eigenschaft `column-rule-inset-junction-end` steuert den Versatz der unteren Kante von Spaltensegmenten an Kreuzungen. Dadurch lassen sich die Segmente verkürzen oder verlängern.

Längenwerte für `column-rule-inset-junction-end` versetzen Segmente um den angegebenen Wert nach innen. Negative Längenwerte bewirken einen Versatz nach außen und verlängern das untere Ende des Segments an der Kreuzung. Prozentwerte beziehen sich auf die Größe von {{cssxref("row-gap")}}. Bei `-50%` wird das untere Ende des Segments bis zur Mitte der darunterliegenden Zeilenlücke verlängert, unabhängig davon, wie breit diese ist.

In der folgenden Demonstration enden die Spaltentrennliniensegmente in den oberen beiden Zeilen an Kreuzungsendpunkten. Bei `column-rule-inset-junction-end: 16px` werden die unteren Enden dieser Segmente um `16px` nach innen versetzt. Ändern Sie den `<length>`-Wert des Versatzes, um besser zu erkennen, welche Segmente an Kreuzungsendpunkten enden.

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
  column-rule-inset-junction-end: 16px;

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
  @supports not (column-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-end property";
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
  column-rule-inset-junction-end: 100%;
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
    ul.style.columnRuleInsetJunctionEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else if (visibility.value == "around") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value == "around") {
    ul.style.columnRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("junctions", "", "300")}}

Wenn Sie den Wert auf `0px` setzen, schließen die Spaltentrennlinien bündig mit dem Zeilenende ab und grenzen an die Zeilenlücke. Dies ist die Standardeinstellung. Beachten Sie, dass sich bei einer Änderung des Eigenschaftswerts nur die unteren Enden der Segmente in der Mitte des Grids verändern. Die Segmente in der untersten Zeile ändern sich nicht: Ihre Endpunkte sind _Abschlussendpunkte_ und werden von `column-rule-inset-junction-end` nicht beeinflusst.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Trennlinien in einem Lückensegment dargestellt, wenn ein Element mindestens einen der beiden angrenzenden Bereiche belegt. Die Spaltentrennliniensegmente im doppelten Linienstil, die bei `rule-visibility-items: around` erscheinen, enden an einer inneren Kreuzung, an der mindestens ein Zeilentrennliniensegment vorhanden ist. Ihre Endpunkte sind somit Kreuzungsendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Damit werden Trennlinien in Lückensegmenten nur dargestellt, wenn Elemente beide angrenzenden Bereiche belegen. Die Spaltentrennliniensegmente im doppelten Linienstil enden nun an einer inneren Kreuzung, an der keine weiteren Trennliniensegmente vorhanden sind. Ihre Endpunkte sind daher _Abschlussendpunkte_ und werden von `column-rule-inset-junction-end` nicht beeinflusst.

### Der Wert `overlap-join`

Der Wert `overlap-join` verlängert die unteren Enden innerer Segmente so, dass sie bündig mit der unteren Kante der kreuzenden Zeilentrennlinie abschließen. Der Wert entspricht der Hälfte der Größe von {{cssxref("row-gap")}} – womit das Segment bis zur Mitte der Lücke reichen würde – zuzüglich der Hälfte der Breite der Zeilentrennlinie.

Wenn `column-rule-inset-junction-end` auf das Schlüsselwort `overlap-join` gesetzt ist, reichen die unteren Enden der Segmente an Kreuzungen in die Zeilenlücke hinein, bis sie die untere Kante der dort dargestellten Zeilentrennlinie erreichen und sich mit ihr verbinden.

Im folgenden interaktiven Beispiel ist `column-rule-inset-junction-end` auf `overlap-join` gesetzt:

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
  column-rule-inset-junction-end: overlap-join;
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
  @supports not (column-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-end property";
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

Ändern Sie die Größe von {{cssxref("row-rule-width")}} und {{cssxref("row-gap")}}. Beachten Sie, dass das untere Ende des Spaltensegments unabhängig von der Größe der Lücke oder der Breite der Zeilentrennlinie stets bis zur unteren Kante der in der Lücke dargestellten Zeilentrennlinie reicht.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-junction-end` die Endkanten von Segmenten an Kreuzungen in Flex-Containern nach innen versetzen.

#### HTML

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Mit {{cssxref("rule")}} definieren wir eine hellblaue Trennlinie für Zeilen- und Spaltenlücken und überschreiben anschließend mit {{cssxref("column-rule-color")}} die Farbe der Spaltentrennlinien mit einem dunkleren `blue`. Außerdem setzen wir die Eigenschaft {{cssxref("
  rule-overlap")}} auf `column-over-row`, damit sich Spaltensegmente bei Überlappungen über den Zeilensegmenten befinden. Schließlich setzen wir `column-rule-inset-junction-end` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: column-over-row;

  column-rule-inset-junction-end: 16px;
}
```

Für den Container `.column` setzen wir außerdem {{cssxref("flex-direction")}} auf `column`. Dadurch verläuft die Hauptachse des Flex-Containers vertikal, und die Elemente werden in Spalten statt in Zeilen angeordnet.

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
  @supports not (column-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-end property";
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
  containers[0].style.columnRuleInsetJunctionEnd = val;
  containers[1].style.columnRuleInsetJunctionEnd = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Versatzes. Beachten Sie, dass die Spaltentrennlinie im rechten Beispiel aus einem einzigen Segment besteht, das von oben nach unten verläuft. Dieses Segment hat zwei Abschlussendpunkte und keine Kreuzungsendpunkte. Eine Änderung des Werts von `column-rule-inset-junction-end` wirkt sich daher nicht auf dieses Beispiel aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset-junction")}}-Kurzschreibweise
- {{cssxref("rule-inset-junction-start")}}-Kurzschreibweise
- {{cssxref("column-rule-inset")}}-Kurzschreibweise
- {{cssxref("rule-inset")}}-Kurzschreibweise
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}}-Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
