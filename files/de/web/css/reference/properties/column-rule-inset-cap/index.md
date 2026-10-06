---
title: "`column-rule-inset-cap` CSS property"
short-title: column-rule-inset-cap
slug: Web/CSS/Reference/Properties/column-rule-inset-cap
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`column-rule-inset-cap`** kann verwendet werden, um die [Cap-Endpunkte](#cap-endpunkte_verstehen) von Spaltentrennliniensegmenten an den Anfangs- und Endkanten des Containers zu versetzen. Sie wirkt auch auf Endpunkte, an denen die Segmente keine anderen Zeilen- oder Spaltensegmente schneiden.

{{InteractiveExample("CSS Demo: column-rule-inset-cap")}}

```css interactive-example-choice
column-rule-inset-cap: -20px;
```

```css interactive-example-choice
column-rule-inset-cap: 0;
```

```css interactive-example-choice
column-rule-inset-cap: 1em;
```

```css interactive-example-choice
column-rule-inset-cap: 100%;
```

```css interactive-example-choice
column-rule-inset-cap: overlap-join;
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

    <i id="y">Y</i>
    <i id="z">Z</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  rule: solid thick rebeccapurple;
  column-rule-color: magenta;
  gap: 1em;
  rule-overlap: column-over-row;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#y {
  grid-column: 4 / 5;
  grid-row: 4 / 5;
}
#z {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 6 / 7;
  grid-row: 4 / 5;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-cap-start")}}

## Syntax

```css
/* Keywords */
column-rule-inset-cap: overlap-join;

/* <length-percentage> values */
column-rule-inset-cap: 0;
column-rule-inset-cap: 1em;
column-rule-inset-cap: -5px;
column-rule-inset-cap: -25%;

/* Two values */
column-rule-inset-cap: overlap-join 1em;
column-rule-inset-cap: -5px -25%;

/* Global values */
column-rule-inset-cap: inherit;
column-rule-inset-cap: initial;
column-rule-inset-cap: revert;
column-rule-inset-cap: revert-layer;
column-rule-inset-cap: unset;
```

### Werte

Diese Eigenschaft wird mit einem oder zwei Werten aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. [Prozentwerte](#prozentwerte_verstehen) beziehen sich auf die Breite der kreuzenden Lücke: Bei Segmentendpunkten an Lückenkreuzungen ist das die Breite von `row-gap`, bei Endpunkten am Containerrand ist sie `0`.

## Beschreibung

Mit der Kurzschreibweise `column-rule-inset-cap` lassen sich die Eigenschaften {{cssxref("column-rule-inset-cap-end")}} und {{cssxref("column-rule-inset-cap-start")}} festlegen. So können die Anfangs- und Endkanten von [Segmenten an Cap-Endpunkten](#cap-endpunkte_verstehen) mit einer einzigen Deklaration nach innen oder außen versetzt werden.

Wird ein Wert angegeben, werden beide Eigenschaften auf diesen Wert gesetzt. Werden zwei Werte angegeben, erhält `-start` den ersten und `-end` den zweiten Wert. Der Standardwert ist `0`, was bei Cap-Endpunkten `overlap-join` entspricht. Positive Werte verkürzen die Segmente, indem sie ihre Enden nach innen versetzen; negative Werte verlängern sie nach außen.

Spaltentrennlinien werden innerhalb einer Spaltenlücke als ein oder mehrere Segmente gezeichnet. Solche Segmente verlaufen zwischen:

- benachbarten Spalten in CSS-Grid-Layouts,
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`,
- Spalten in mehrspaltigen Layouts.

Ob eine Spaltentrennlinie mehrere Zeilen überspannt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Innere Unterbrechungen zwischen Spaltentrennliniensegmenten haben dabei die Größe von {{cssxref("row-gap")}}.

Längenwerte für `column-rule-inset-cap` versetzen die Segmentenden um den angegebenen Wert nach innen. Negative Längenwerte versetzen sie nach außen, sodass die Segmente an den Endkanten über die obere und untere Containerkante hinausragen. Prozentwerte für Cap-Endpunkte an Containerkanten beziehen sich auf `0` und haben daher keine Wirkung.

Bei inneren Segmenten beziehen sich [Prozentwerte](#prozentwerte_verstehen) auf die Größe von {{cssxref("row-gap")}}. Mit `-50%` reicht ein Segment bis zur Mitte der Lücke, mit `-100%` über die gesamte Lücke.

Die Eigenschaft `column-rule-inset-cap` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Enden aller Spaltensegmente nach innen zu versetzen, können `column-rule-inset-cap` und {{cssxref("column-rule-inset-junction")}} mit der Kurzschreibweise {{cssxref("column-rule-inset")}} festgelegt werden.

- Um alle Cap-Endpunkte von Zeilen und Spalten nach innen zu versetzen, können `column-rule-inset-cap` und {{cssxref("row-rule-inset-cap")}} mit der Kurzschreibweise {{cssxref("rule-inset-cap")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden `-junction`- und `row-`-Eigenschaften, lassen sich mit der Kurzschreibweise {{cssxref("rule-inset")}} festlegen.

### Cap-Endpunkte verstehen

Ein _Cap-Endpunkt eines Segments_ ist jeder Segmentendpunkt, der kein Endpunkt an einer Kreuzung ist. Dazu gehören Endpunkte an den Inhaltskanten des Containers sowie Endpunkte an einer Lückenkreuzung, an der keine weiteren Zeilen- oder Spaltensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap` kann das obere, das untere oder beide Enden von Spaltensegmenten an der oberen und unteren Containerkante verkürzen oder verlängern. Das gilt auch für Segmentenden an inneren Kreuzungen, an denen keine weiteren Segmente vorhanden sind.

Spaltensegmente mit Cap-Endpunkten werden von den Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese legen fest, ob Zeilen- und Spaltentrennliniensegmente in Lücken neben leeren Bereichen gezeichnet werden. Wird der Wert von `auto` zu `between` oder `around` geändert, können zusätzliche innere Cap-Endpunkte entstehen.

In der folgenden Demonstration sind die oberen Enden der Spaltensegmente in der obersten Zeile und die unteren Enden der Spaltensegmente in der untersten Zeile jeweils Cap-Endpunkte. Mit `column-rule-inset-cap: 16px` werden alle Cap-Endpunkte der Spaltensegmente um `16px` nach innen versetzt. Ändern Sie den `<length>`-Wert für den Einzug, um besser zu erkennen, welche Segmente an Cap-Endpunkten beginnen oder enden.

```html hidden live-sample___caps live-sample___percents
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

```html hidden live-sample___caps
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

```css hidden live-sample___caps live-sample___percents
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
  column-rule-inset-cap: 16px;

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
  @supports not (column-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap property";
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
  column-rule-inset-cap: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(2, solid), double";
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

{{EmbedLiveSample("caps", "", "300")}}

Ändern Sie den Einzug. Bei `0px` schließen die Enden der Spaltentrennlinien bündig mit der oberen und unteren Containerkante ab. Dies ist der Standardwert. Mit `-32px` werden die Segmente um `32px` nach außen versetzt, sodass die Linien `32px` über die Containerkante hinaus gezeichnet werden. Da Spaltentrennlinien keinen Einfluss auf das Box-Modell haben, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Trennlinien in einem Lückensegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält. Die Anfangsenden der obersten Segmente bleiben Cap-Endpunkte. Die untersten Segmente der als Doppellinie dargestellten Spaltentrennlinien, die bei `rule-visibility-items: around` erscheinen, enden dagegen nicht an Cap-Endpunkten. Stattdessen enden die unteren Segmente der letzten beiden Spaltentrennlinien an _Kreuzungen_: inneren Lücken, in denen Zeilentrennliniensegmente vorhanden sind. Deshalb wirkt sich `column-rule-inset-cap` nicht auf diese Segmentendpunkte aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Trennlinien nur in Lückensegmenten gezeichnet, wenn beide angrenzenden Bereiche ein Element enthalten. In diesem Beispiel endet die untere Zeilentrennlinie an der dritten Spaltenlücke; ihr letztes Segment verläuft zwischen `9` und `16`. Das untere Ende der dritten, als Doppellinie dargestellten Spaltentrennlinie liegt an einer inneren Lücke. Da dort ein Zeilentrennliniensegment vorhanden ist, handelt es sich nicht um einen Cap-Endpunkt. `column-rule-inset-cap` wirkt sich daher nicht darauf aus. Die letzten beiden Spaltentrennlinien enden dagegen an inneren Lücken ohne weitere Trennliniensegmente. Diese Enden sind Cap-Endpunkte und werden somit von `column-rule-inset-cap` beeinflusst.

### Prozentwerte verstehen

Worauf sich ein Prozentwert bezieht, hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite der Lücke, an die der Cap-Endpunkt grenzt – im Allgemeinen also auf {{cssxref("row-gap")}} zuzüglich etwaiger zusätzlicher Abstände durch Werte von {{cssxref("align-content")}}. An Containerkanten beziehen sich Prozentwerte auf `0`. Beispielsweise entspricht `column-rule-inset-cap: 50%` an einem inneren Cap-Endpunkt der halben Größe der Lückenkreuzung, an Containerkanten dagegen `0`.

Dieses Beispiel ist nicht fehlerhaft. Wenn `rule-visibility-items` auf `normal` gesetzt ist, grenzt jeder Cap-Endpunkt einer Spaltentrennlinie an die obere oder untere Containerkante. Jeder angegebene Prozentwert bezieht sich daher auf `0`.

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Spaltentrennlinien enden an der Containerkante, sodass jeder Prozentwert zu `0` aufgelöst wird. Die letzten beiden, als Doppellinien dargestellten Spaltentrennlinien enden an inneren Lücken, in denen Zeilentrennliniensegmente vorhanden sind. Ihre Enden sind daher keine Cap-Endpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die ersten beiden Spaltentrennlinien, dargestellt als helle und dunkle Linie, enden an der Containerkante und haben daher einen Einzug von `0`. Die dritte, als Doppellinie dargestellte Spaltentrennlinie endet an einer inneren Lücke mit einem Zeilentrennliniensegment. Dieses Ende ist deshalb kein Cap-Endpunkt. Die letzten beiden, als durchgezogene Linien dargestellten Spaltentrennlinien enden an inneren Lücken ohne weitere Trennliniensegmente. Ihr prozentualer Versatz bezieht sich daher auf die Breite von {{cssxref("row-gap")}}, die hier `20px` beträgt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-cap` die Cap-Endpunkte von Spaltentrennliniensegmenten in Flex-Containern nach innen versetzen.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den beiden Containern besteht darin, dass der zweite zusätzlich die Klasse `column` hat.

```html
<h1>Insetting cap column rule endpoints</h1>
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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine `lightblue`-{{cssxref("rule")}}, die sowohl in Zeilen- als auch in Spaltenlücken gezeichnet wird. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, um die Spaltenlücken mit einem dunkleren `blue` zu kennzeichnen. Zuletzt setzen wir `column-rule-inset-cap` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap: 16px;
}
```

Für den `.column`-Container legen wir außerdem {{cssxref("flex-direction")}} fest. Dadurch ändern wir die Hauptachse des Flex-Containers, sodass die Elemente in Spalten statt in Zeilen angeordnet werden.

```css
.column {
  flex-direction: column;
}
```

Der Rest des CSS ist der Kürze halber ausgeblendet.

```css hidden
body {
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
  @supports not (column-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap property";
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
  containers[0].style.columnRuleInsetCap = val;
  containers[1].style.columnRuleInsetCap = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass die Spaltensegmente nur an ihren Cap-Endpunkten länger oder kürzer werden – also an den Enden, die keine anderen Spalten- oder Zeilensegmente schneiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-cap-start")}}
- {{cssxref("column-rule-inset")}}-Kurzschreibweise
- {{cssxref("row-rule-inset-cap")}}-Kurzschreibweise
- {{cssxref("rule-inset")}}-Kurzschreibweise
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}}-Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
