---
title: "`column-rule-inset-junction-end` CSS property"
short-title: column-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/column-rule-inset-junction-end
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Mit der **`column-rule-inset-junction-end`**-[CSS-Eigenschaft](/de/docs/Web/CSS) können die unteren Endpunkte von Column-Rule-Segmenten versetzt werden, wenn es sich dabei um [Kreuzungsendpunkte](#kreuzungsendpunkte_verstehen) handelt, also um Endpunkte an Schnittstellen von Abständen, an denen sich Rule-Segmente schneiden.

{{InteractiveExample("CSS Demo: column-rule-inset-junction-end")}}

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

Für diese Eigenschaft wird ein einzelner Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Legt fest, dass sich das Segment an der Kreuzung über die Row-Rule erstrecken soll. Der Wert entspricht der Hälfte des {{cssxref("row-gap")}}-Werts plus der Hälfte des verwendeten {{cssxref("row-rule-width")}}-Werts.
- {{cssxref("length-percentage")}}
  - : Legt die Größe des Versatzes fest. Prozentwerte beziehen sich auf den Kreuzungsendpunkt, also auf den `row-gap`-Wert.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-junction-end` können [Endpunkte von Segmenten an Kreuzungen](#kreuzungsendpunkte_verstehen) am unteren Ende von Column-Rule-Segmenten nach innen oder außen versetzt werden. Der Standardwert ist `0`. Positive Werte verkürzen das Segment, während negative Werte und [das Schlüsselwort `overlap-join`](#the_overlap-join_value) es verlängern.

Column-Rules werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente befinden sich zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Spalten in mehrspaltigen Layouts.

Ob sich eine Column-Rule über mehrere Zeilen erstreckt oder in mehrere Segmente aufgeteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Innere Unterbrechungen zwischen Column-Rule-Segmenten haben die Größe von {{cssxref("row-gap")}}. Ein Kreuzungsendpunkt befindet sich am unteren Ende jedes Column-Segments, dessen unteres Ende an einer Schnittstelle von Abständen liegt, an der weitere Column- oder Rule-Segmente vorhanden sind.

Die Eigenschaft `column-rule-inset-junction-end` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die oberen und unteren Kreuzungsendpunkte von Column-Segmenten nach innen zu versetzen, können `column-rule-inset-junction-end` und {{cssxref("column-rule-inset-junction-start")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-junction")}} festgelegt werden.

- Um alle unteren Endpunkte von Column-Segmenten nach innen zu versetzen, können `column-rule-inset-junction-end` und {{cssxref("column-rule-inset-cap-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-end")}} festgelegt werden.

- Um die unteren Kreuzungsendpunkte von Column-Segmenten und die rechten Kreuzungsendpunkte von Row-Segmenten nach innen zu versetzen, können `column-rule-inset-junction-end` und {{cssxref("row-rule-inset-junction-end")}} mit der Kurzschreibweise {{cssxref("rule-inset-junction-end")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden Varianten mit `-start`, `-cap` und `row-`, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Kreuzungsendpunkte verstehen

Ein _Kreuzungsendpunkt eines Segments_ ist ein Segmentendpunkt an einem inneren Abstand, der an einer Schnittstelle von Abständen endet, an der weitere Rule- oder Column-Segmente vorhanden sind. Die Eigenschaft `column-rule-inset-junction-end` steuert den Versatz der unteren Kante von Column-Segmenten an Kreuzungen. Dadurch können die Segmente verkürzt oder verlängert werden.

Längenwerte für `column-rule-inset-junction-end` versetzen Segmente um den angegebenen Wert nach innen. Negative Längenwerte bewirken einen Versatz nach außen und verlängern das untere Ende des Segments an der Kreuzung. Prozentwerte beziehen sich auf die Größe von {{cssxref("row-gap")}}. Mit `-50%` wird das untere Ende des Segments an der Kreuzung bis zur Mitte des darunterliegenden Zeilenabstands verlängert – unabhängig davon, wie breit dieser Abstand ist.

In der folgenden Demonstration enden die Column-Rule-Segmente in den oberen beiden Zeilen an Kreuzungsendpunkten. Wenn `column-rule-inset-junction-end: 16px` festgelegt ist, werden die unteren Enden dieser Segmente um `16px` nach innen versetzt. Ändern Sie den Versatzwert `<length>`, um besser zu erkennen, welche Segmente an Kreuzungsendpunkten enden.

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
  <label>
    <code>rule-visibility-items</code> value
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

Wenn Sie `0px` als Wert festlegen, schließen die Enden der Column-Rules mit dem Zeilenende ab und grenzen an den Zeilenabstand. Dies ist die Standardeinstellung. Beachten Sie, dass sich bei einer Änderung des Eigenschaftswerts nur die unteren Enden der Segmente in der Mitte des Grids ändern. Die Segmente in der unteren Zeile ändern sich nicht: Ihre Endpunkte sind _Abschlussendpunkte_ und werden von der Eigenschaft `column-rule-inset-junction-end` nicht beeinflusst.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Rules in einem Abstandssegment gezeichnet, wenn sich in mindestens einem der beiden angrenzenden Bereiche ein Element befindet. Die Column-Rule-Segmente im Doppellinienstil, die bei `rule-visibility-items: around` erscheinen, enden an einer inneren Schnittstelle, an der ein oder mehrere Row-Rule-Segmente vorhanden sind. Diese Column-Segmente haben Kreuzungsendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Rules in Abstandssegmenten nur gezeichnet, wenn sich in beiden angrenzenden Bereichen Elemente befinden. Die Column-Rule-Segmente im Doppellinienstil enden nun an einer inneren Schnittstelle, an der keine weiteren Rule-Segmente vorhanden sind. Ihre Endpunkte sind daher _Abschlussendpunkte von Segmenten_ und werden von der Eigenschaft `column-rule-inset-junction-end` nicht beeinflusst.

### Der Wert `overlap-join`

Der Wert `overlap-join` versetzt das untere Ende innerer Segmente nach außen, sodass es mit der Unterkante der kreuzenden Row-Rule abschließt. Der Wert entspricht der Hälfte von {{cssxref("row-gap")}} – womit das Segment bis zur Mitte des Abstands reichen würde – plus der Hälfte der Breite der Row-Rule.

Wenn `column-rule-inset-junction-end` auf das Schlüsselwort `overlap-join` gesetzt ist, reichen die unteren Enden der Segmente an Kreuzungen in den Zeilenabstand hinein, bis sie auf die Unterkante der dort gezeichneten Row-Rule treffen beziehungsweise sich mit ihr „verbinden“.

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

Ändern Sie die Größe von {{cssxref("row-rule-width")}} und {{cssxref("row-gap")}}. Beachten Sie, dass das untere Ende des Column-Segments unabhängig von der Größe des Abstands oder der Row-Rule immer so weit verlängert wird, dass es mit der Unterkante der im Abstand gezeichneten Row-Rule abschließt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `column-rule-inset-junction-end` festgelegt wird, um die Endkanten von Segmenten an Kreuzungen in Flex-Containern nach innen zu versetzen.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Zeilen- als auch in Spaltenabständen gezeichnet wird. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, um für die Spaltenabstände ein dunkleres `blue` festzulegen. Außerdem setzen wir {{cssxref("rule-overlap")}} auf `column-over-row`, damit Column-Segmente bei Überlappungen über den Row-Segmenten gezeichnet werden. Schließlich setzen wir `column-rule-inset-junction-end` auf `16px`.

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

Zusätzlich setzen wir {{cssxref("flex-direction")}} für den Container `.column` auf `column`. Dadurch verläuft die Hauptachse des Flex-Containers von oben nach unten, und die Elemente werden in Spalten statt in Zeilen angeordnet.

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

Ändern Sie die Größe des Versatzes. Beachten Sie, dass im rechten Beispiel die Column-Rule aus einem einzigen Segment besteht, das von oben nach unten verläuft. Dieses Segment hat zwei Abschlussendpunkte und keine Kreuzungsendpunkte. Daher wirkt sich eine Änderung des Werts von `column-rule-inset-junction-end` nicht auf dieses Beispiel aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-junction-start")}}
- Kurzschreibweise {{cssxref("column-rule-inset-junction")}}
- Kurzschreibweise {{cssxref("rule-inset-junction-start")}}
- Kurzschreibweise {{cssxref("column-rule-inset")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("column-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
