---
title: "`column-rule-inset-cap` CSS property"
short-title: column-rule-inset-cap
slug: Web/CSS/Reference/Properties/column-rule-inset-cap
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`column-rule-inset-cap`** kann verwendet werden, um die [Endpunkte von Abschlusssegmenten](#abschluss-endpunkte_verstehen) einer Spaltenlinie am Anfangs- und Endrand des Containers sowie Endpunkte zu versetzen, an denen die Segmente keine anderen Zeilen- oder Spaltensegmente schneiden.

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

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Versatzes nach innen an. [Prozentwerte](#prozentwerte_verstehen) beziehen sich auf die Breite des kreuzenden Zwischenraums: bei Segmentendpunkten an Zwischenraumkreuzungen auf die Breite von `row-gap` und bei Endpunkten am Containerrand auf `0`.

## Beschreibung

Mit der Kurzschreibweise `column-rule-inset-cap` lassen sich die Eigenschaften {{cssxref("column-rule-inset-cap-end")}} und {{cssxref("column-rule-inset-cap-start")}} in einer einzigen Deklaration festlegen. Damit können sowohl der Anfangs- als auch der Endrand von [Abschlusssegment-Endpunkten](#abschluss-endpunkte_verstehen) nach innen oder außen versetzt werden.

Wird ein Wert angegeben, werden beide Eigenschaften auf diesen Wert gesetzt. Werden zwei Werte angegeben, erhält `-start` den ersten und `-end` den zweiten Wert. Der Standardwert ist `0`, was bei Abschluss-Endpunkten `overlap-join` entspricht. Positive Werte verkürzen das Segment durch einen Versatz nach innen, während negative Werte es durch einen Versatz nach außen verlängern.

Spaltenlinien werden innerhalb eines Spaltenzwischenraums als ein oder mehrere Segmente gezeichnet. Solche Segmente treten zwischen folgenden Elementen auf:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in mehrspaltigen Layouts.

Ob eine Spaltenlinie mehrere Zeilen überspannt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Die Unterbrechungen zwischen Spaltenliniensegmenten innerhalb des Containers haben dabei die Größe von {{cssxref("row-gap")}}.

Längenwerte für `column-rule-inset-cap` versetzen Segmente um den angegebenen Wert nach innen. Negative Längenwerte bewirken einen Versatz nach außen, sodass sich Abschlusssegmente am Endrand über den oberen und unteren Rand des Containers hinaus erstrecken. Prozentwerte für Abschlusssegmente am Containerrand beziehen sich auf `0` und haben daher keine Wirkung.

Bei Segmenten im Inneren beziehen sich [Prozentwerte](#prozentwerte_verstehen) auf die Größe von {{cssxref("row-gap")}}. Mit `-50%` reicht das Segment bis zur Mitte des Zwischenraums, mit `-100%` über den gesamten Zwischenraum.

Die Eigenschaft `column-rule-inset-cap` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Enden aller Spaltensegmente nach innen zu versetzen, kann `column-rule-inset-cap` zusammen mit {{cssxref("column-rule-inset-junction")}} über die Kurzschreibweise {{cssxref("column-rule-inset")}} festgelegt werden.

- Um alle Abschluss-Endpunkte von Zeilen und Spalten nach innen zu versetzen, kann `column-rule-inset-cap` zusammen mit {{cssxref("row-rule-inset-cap")}} über die Kurzschreibweise {{cssxref("rule-inset-cap")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden `-junction`- und `row-`-Eigenschaften, können über die Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Abschluss-Endpunkte verstehen

Ein _Abschlusssegment-Endpunkt_ ist jeder Segmentendpunkt, der kein Endpunkt an einer Kreuzung ist. Dazu gehören Endpunkte an den Kanten des Inhaltsbereichs eines Containers sowie Endpunkte an einer Zwischenraumkreuzung, an der keine weiteren Zeilen- oder Spaltensegmente vorhanden sind.

Mit `column-rule-inset-cap` lässt sich das obere, das untere oder beide Enden von Spaltensegmenten am oberen und unteren Containerrand sowie das Segmentende an jeder inneren Kreuzung ohne weitere Segmente verkürzen oder verlängern.

Abschlusssegmente von Spalten werden durch die Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese legen fest, ob Zeilen- und Spaltenliniensegmente in Zwischenräumen neben leeren Bereichen gezeichnet werden. Wird der Wert von `auto` auf `between` oder `around` geändert, können zusätzliche Abschlusssegmente im Inneren entstehen.

In der folgenden Demonstration beginnen die Spaltensegmente der obersten Zeile oben und enden die Spaltensegmente der untersten Zeile unten jeweils an Abschluss-Endpunkten. Mit `column-rule-inset-cap: 16px` werden alle Abschluss-Endpunkte der Spaltensegmente um `16px` nach innen versetzt. Ändern Sie den `<length>`-Wert für den Versatz nach innen, um besser zu erkennen, welche Segmente an Abschlusssegment-Endpunkten beginnen oder enden.

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

Ändern Sie den Versatz. Bei `0px` schließen die Enden der Spaltenlinien bündig mit dem oberen und unteren Containerrand ab. Dies ist die Standardeinstellung. Mit `-32px` werden die Segmente um `32px` nach außen versetzt, sodass die Linien `32px` über den Containerrand hinaus gezeichnet werden. Da Spaltenlinien das Box-Modell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien in einem Zwischenraumsegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält. Die Anfangsenden der obersten Segmente bleiben Abschlusssegment-Endpunkte. Die untersten Segmente der doppelt gezeichneten Spaltenlinien, die bei `rule-visibility-items: around` erscheinen, enden dagegen nicht an Abschluss-Endpunkten. Stattdessen enden die unteren Segmente der letzten beiden Spaltenlinien an _Kreuzungen_: inneren Zwischenräumen, in denen Zeilenliniensegmente vorhanden sind. Daher wirkt sich `column-rule-inset-cap` nicht auf diese Segmentendpunkte aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien nur dann in Zwischenraumsegmenten gezeichnet, wenn beide angrenzenden Bereiche ein Element enthalten. In diesem Beispiel endet die unterste Zeilenlinie am dritten Spaltenzwischenraum; das letzte Zeilensegment liegt zwischen `9` und `16`. Das untere Ende der dritten Spaltenlinie, die als Doppellinie dargestellt ist, liegt in einem inneren Zwischenraum. Da dort ein Zeilenliniensegment vorhanden ist, endet das Spaltensegment nicht an einem Abschlusssegment-Endpunkt und wird daher nicht von `column-rule-inset-cap` beeinflusst. Die letzten beiden Spaltenlinien enden dagegen in inneren Zwischenräumen ohne weitere Liniensegmente. Diese Spaltensegmente haben somit Abschlusssegment-Endpunkte und werden von `column-rule-inset-cap` beeinflusst.

### Prozentwerte verstehen

Worauf sich ein Prozentwert bezieht, hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite des Zwischenraums, an den der Abschluss-Endpunkt grenzt – in der Regel also auf {{cssxref("row-gap")}}, zuzüglich etwaiger zusätzlicher Abstände durch Werte von {{cssxref("align-content")}}. Bei Endpunkten am Containerrand beziehen sich Prozentwerte auf `0`. Beispielsweise wird `column-rule-inset-cap: 50%` an einem inneren Abschluss-Endpunkt zu der Hälfte der Größe der Zwischenraumkreuzung aufgelöst, an den Containerrändern hingegen zu `0`.

Dieses Beispiel ist nicht fehlerhaft. Wenn `rule-visibility-items` auf `normal` gesetzt ist, grenzt jeder Abschluss-Endpunkt einer Spaltenlinie an den oberen oder unteren Containerrand. Daher bezieht sich jeder angegebene Prozentwert auf `0`.

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Spalten enden am Containerrand, sodass jeder Prozentwert zu `0` aufgelöst wird. Die letzten beiden Spaltenlinien, die als Doppellinien dargestellt sind, enden in inneren Zwischenräumen, in denen Zeilenliniensegmente vorhanden sind. Diese Spaltensegmente haben daher keine Abschlusssegment-Endpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die ersten beiden Spaltenlinien, dargestellt als helle und dunkle Linien, enden am Containerrand und haben daher einen Versatz von `0`. Die dritte Spaltenlinie, dargestellt als Doppellinie, endet in einem inneren Zwischenraum mit einem Zeilenliniensegment. Ihr Endpunkt ist daher kein Abschlusssegment-Endpunkt. Die letzten beiden Spaltenlinien, dargestellt als durchgezogene Linien, enden in inneren Zwischenräumen ohne weitere Liniensegmente. Der prozentuale Versatz bezieht sich daher auf die Breite von {{cssxref("row-gap")}}, die in diesem Fall `20px` beträgt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-cap` die Abschlusssegment-Endpunkte von Spaltenlinien in Flex-Containern nach innen versetzen.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine `lightblue`-{{cssxref("rule")}}, um sowohl Zeilen- als auch Spaltenzwischenräume mit Linien zu versehen. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, sodass die Linien in den Spaltenzwischenräumen in einem dunkleren `blue` dargestellt werden. Schließlich setzen wir `column-rule-inset-cap` auf `16px`.

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

Für den Container `.column` legen wir außerdem {{cssxref("flex-direction")}} fest. Dadurch ändert sich die Hauptachse des Flex-Containers, und die Elemente werden in Spalten statt in Zeilen angeordnet.

```css
.column {
  flex-direction: column;
}
```

Das übrige CSS ist der Kürze halber ausgeblendet.

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

Ändern Sie die Größe des Versatzes nach innen. Beachten Sie, dass die Spaltensegmente nur an ihren Abschluss-Endpunkten länger oder kürzer werden – also an den Enden, die keine anderen Spalten- oder Zeilensegmente schneiden.

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
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
