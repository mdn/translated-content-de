---
title: "`row-rule-inset-cap` CSS property"
short-title: row-rule-inset-cap
slug: Web/CSS/Reference/Properties/row-rule-inset-cap
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`row-rule-inset-cap`** kann verwendet werden, um die [Cap-Endpunkte](#cap-endpunkte_verstehen) von row-rule-Segmenten am linken und rechten Rand des Containers sowie Endpunkte, an denen die Segmente keine anderen column- oder row-rule-Segmente schneiden, zu versetzen.

{{InteractiveExample("CSS Demo: row-rule-inset-cap")}}

```css interactive-example-choice
row-rule-inset-cap: -20px;
```

```css interactive-example-choice
row-rule-inset-cap: 0;
```

```css interactive-example-choice
row-rule-inset-cap: 1em;
```

```css interactive-example-choice
row-rule-inset-cap: 100%;
```

```css interactive-example-choice
row-rule-inset-cap: overlap-join;
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

    <i id="r">R</i>
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
  row-rule-color: magenta;
  gap: 0.5em;
  rule-overlap: row-over-column;
  rule-visibility-items: between;
  border: 1px solid rebeccapurple;
  overflow: visible;
  margin: 1em;
}
#example-element i {
  padding: 8px;
  border: 1px dashed;
}
#r {
  grid-column: 5 / 6;
  grid-row: 3 / 4;
}
#z {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
#bang {
  grid-column: 5 / 6;
  grid-row: 5 / 6;
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}

## Syntax

```css
/* Keywords */
row-rule-inset-cap: overlap-join;

/* <length-percentage> values */
row-rule-inset-cap: 0;
row-rule-inset-cap: 1em;
row-rule-inset-cap: -5px;
row-rule-inset-cap: -25%;

/* Two values */
row-rule-inset-cap: overlap-join 1em;
row-rule-inset-cap: -5px -25%;

/* Global values */
row-rule-inset-cap: inherit;
row-rule-inset-cap: initial;
row-rule-inset-cap: revert;
row-rule-inset-cap: revert-layer;
row-rule-inset-cap: unset;
```

### Werte

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. [Prozentwerte](#prozentwerte_verstehen) beziehen sich auf die Breite der kreuzenden Lücke: Für Segmentendpunkte an Lückenkreuzungen ist dies die Breite von `column-gap`, für Endpunkte am Containerrand ist es `0`.

## Beschreibung

Mit der Kurzschreibweise `row-rule-inset-cap` lassen sich die Eigenschaften {{cssxref("row-rule-inset-cap-start")}} und {{cssxref("row-rule-inset-cap-end")}} in einer einzigen Deklaration festlegen. Damit können sowohl der linke als auch der rechte Rand von [Cap-Segmentendpunkten](#cap-endpunkte_verstehen) nach innen oder außen versetzt werden.

Wird ein Wert angegeben, erhalten beide Eigenschaften diesen Wert. Werden zwei Werte angegeben, erhält `-start` den ersten und `-end` den zweiten Wert. Der Standardwert ist `0`, was bei Cap-Endpunkten `overlap-join` entspricht. Positive Werte verkleinern das Segment durch einen Versatz nach innen; negative Werte vergrößern es durch einen Versatz nach außen.

Row rules werden innerhalb einer Zeilenlücke als ein oder mehrere Segmente gezeichnet. Solche Segmente liegen zwischen:

- Benachbarten Zeilen in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Zeilen in mehrspaltigen Layouts, die entstehen können, wenn {{cssxref("column-height")}} auf einen {{cssxref("&lt;length>")}}-Wert gesetzt ist.

Ob sich eine row rule über mehrere Spalten erstreckt oder in mehrere Segmente aufgeteilt wird, legt die Eigenschaft {{cssxref("row-rule-break")}} fest. Unterbrechungen zwischen row-rule-Segmenten im Inneren entsprechen dabei im Allgemeinen der Größe von {{cssxref("column-gap")}}.

Längenwerte für `row-rule-inset-cap` versetzen Segmente um den angegebenen Wert nach innen. Negative Längenwerte bewirken einen Versatz nach außen: Das Segment wird breiter, und Cap-Segmente am linken und rechten Containerrand reichen über diesen Rand hinaus.

[Prozentwerte](#prozentwerte_verstehen) beziehen sich bei inneren Segmenten auf die Größe von {{cssxref("column-gap")}}. Mit `-50%` reicht das Segment bis zur Mitte der Lücke, mit `-100%` über die gesamte Lücke. Bei Cap-Segmenten am Containerrand beziehen sich Prozentwerte auf `0`; dort haben sie daher keine Auswirkung auf die Cap-Segmentendpunkte.

Die Eigenschaft `row-rule-inset-cap` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die linke und rechte Seite aller row-rule-Segmente nach innen zu versetzen, können `row-rule-inset-cap` und {{cssxref("row-rule-inset-junction")}} über die Kurzschreibweise {{cssxref("row-rule-inset")}} festgelegt werden.

- Um die Cap-Segmentendpunkte von row rules und column rules nach innen zu versetzen, können `row-rule-inset-cap` und {{cssxref("column-rule-inset-cap")}} über die Kurzschreibweise {{cssxref("rule-inset-cap")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der Endpunkte, die von den entsprechenden `-junction`- und `column-`-Eigenschaften gesteuert werden, lassen sich über die Kurzschreibweise {{cssxref("rule-inset")}} festlegen.

### Cap-Endpunkte verstehen

Ein _Cap-Segmentendpunkt_ ist jeder Segmentendpunkt, der kein Junction-Segmentendpunkt ist. Dazu gehören Endpunkte an den Rändern des Inhaltsbereichs eines Containers sowie Endpunkte an einer Lückenkreuzung, an der keine weiteren column- oder row-rule-Segmente vorhanden sind.

Mit `row-rule-inset-cap` können Anfang und Ende von row rules am Containerrand sowie Anfang und Ende innerer row-rule-Segmente, an denen keine weiteren Segmente vorhanden sind, nach innen oder außen versetzt werden.

Cap-Segmente werden von den Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese legen fest, ob row-rule- und column-rule-Segmente in Lücken neben leeren Bereichen gezeichnet werden. Wird der Wert von `auto` auf `between` oder `around` geändert, können zusätzliche innere Cap-Segmente entstehen.

In der folgenden Demonstration enden die Zeilen an Cap-Endpunkten am linken und rechten Containerrand. Mit `row-rule-inset-cap: -32px` werden diese Endpunkte um `32px` nach außen versetzt. Ändern Sie den `<length>`-Wert für den Versatz, um besser zu erkennen, welche Segmente an Cap-Segmentendpunkten beginnen oder enden.

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
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
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
    <input
      type="range"
      min="-40"
      max="16"
      value="-32"
      id="inset"
      data-unit="px"
  /></label>
  <output id="o">-32px</output>
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
  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-cap: -32px;

  border: 1px solid;
  margin: auto 40px;
}
ul {
  place-items: center;
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
li:nth-of-type(n + 9) {
  grid-row: 3 / 4;
}
li:nth-of-type(n + 13) {
  grid-row: 4 / 5;
}
li:nth-of-type(12),
li:nth-of-type(16) {
  grid-column: 5/6;
}
li:nth-of-type(17) {
  grid-column: 6/7;
}
@layer no-support {
  @supports not (row-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap property";
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
  row-rule-inset-cap: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.rowRuleInsetCap = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
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

{{EmbedLiveSample("caps", "", "380")}}

Bei `0px` schließen die Enden der row rules bündig mit dem linken und rechten Containerrand ab. Dies ist die Standardeinstellung.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Regeln in Lückensegmenten nur gezeichnet, wenn beide angrenzenden Bereiche Elemente enthalten. Am Anfangsrand des Containers gibt es weiterhin Cap-Endpunkte von row rules, am Endrand dagegen keine mehr. Die dritte row rule, erkennbar an ihrem Doppellinienstil, hat zwei zusätzliche Cap-Endpunkte: die Endseite des Segments zwischen `11` und `15` sowie die Anfangsseite des Segments zwischen `12` und `16`. Diese treffen auf keine anderen rule-Segmente und werden daher von der Eigenschaft `row-rule-inset-cap-start` beeinflusst.

In diesem Fall erzeugt der Wert `around` für `rule-visibility-items` keine zusätzlichen Cap-Segmentendpunkte. Bei `around` werden Regeln in einem Lückensegment gezeichnet, solange einer der angrenzenden Bereiche ein Element enthält. Alle inneren Segmentendpunkte liegen jedoch an Kreuzungen mit column-rule-Segmenten. Dadurch entstehen Junction-Segmentendpunkte statt Cap-Segmentendpunkten. Junction-Endpunkte können mit der Kurzschreibweise {{cssxref("row-rule-inset-junction")}} nach innen versetzt werden.

### Prozentwerte verstehen

Die Bezugsgröße eines Prozentwerts hängt von der Lage des Endpunkts ab. Bei inneren Endpunkten bezieht sich der Prozentwert auf die Breite der Lücke am Cap-Endpunkt: Grenzt der Endpunkt an eine rule-Lücke, ist dies die Breite von {{cssxref("column-gap")}} zuzüglich etwaiger zusätzlicher Abstände durch Einstellungen von {{cssxref("justify-content")}}. Am Containerrand beträgt die Bezugsgröße `0`. Beispielsweise wird `row-rule-inset-cap: 50%` bei einem inneren Cap-Endpunkt zur Hälfte der Größe der Lückenkreuzung aufgelöst (also zur Hälfte des `column-gap`-Werts), am Containerrand dagegen zu `0`.

Dieses Beispiel ist nicht fehlerhaft. Wenn `rule-visibility-items` auf `normal` gesetzt ist, grenzt jeder Cap-Endpunkt einer row rule an den linken oder rechten Containerrand. Jeder angegebene Prozentwert bezieht sich daher auf `0`.

{{EmbedLiveSample("percents", "", "380")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Zeilen beginnen am Containerrand; die erste und die letzte Zeile enden dort ebenfalls. Prozentwerte für diese Cap-Segmentendpunkte der Zeilen werden zu `0` aufgelöst. Alle anderen Segmente enden an inneren Lücken, an denen column-rule-Segmente vorhanden sind. Diese Endpunkte der row-rule-Segmente sind daher keine Cap-Segmentendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Wie in der vorherigen Demonstration entstehen dadurch zwei innere Cap-Segmentendpunkte: Die rechte Seite des Segments zwischen den Elementen `11` und `15` und die linke Seite des Segments zwischen den Elementen `12` und `16` treffen wiederum auf keine anderen rule-Segmente. Bei diesen beiden Cap-Endpunkten bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("column-gap")}}, die hier `20px` beträgt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `row-rule-inset-cap` festgelegt wird, um die Cap-Segmentendpunkte von row rules in Flex-Containern nach innen zu versetzen.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den Containern besteht darin, dass der zweite zusätzlich die Klasse `column` besitzt.

```html
<h1>Insetting cap row rule endpoints</h1>
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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine {{cssxref("rule")}} mit der Farbe `lightblue`, um sowohl Spalten- als auch Zeilenlücken zu gestalten. Anschließend überschreiben wir {{cssxref("row-rule-color")}} und setzen die Gestaltung der Zeilenlücken auf das dunklere `blue`. Schließlich setzen wir `row-rule-inset-cap` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap: 16px;
}
```

Für den Container `.column` legen wir außerdem {{cssxref("flex-direction")}} fest. Dadurch ändern wir die Hauptachse des Flex-Containers, sodass die Elemente in Spalten statt in Zeilen angeordnet werden.

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
  @supports not (row-rule-inset-cap: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap property";
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
  containers[0].style.rowRuleInsetCap = val;
  containers[1].style.rowRuleInsetCap = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Versatzes. Beachten Sie, dass die row-rule-Segmente nur an ihren Cap-Enden wachsen oder schrumpfen – an der linken Seite, der rechten Seite oder an beiden Seiten. Das sind die Enden, die keine anderen row-rule- oder column-rule-Segmente schneiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-cap-start")}}
- Kurzschreibweise {{cssxref("row-rule-inset")}}
- Kurzschreibweise {{cssxref("column-rule-inset-cap")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("row-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
