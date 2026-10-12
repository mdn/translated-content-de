---
title: "`column-rule-inset-cap-end` CSS property"
short-title: column-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-end
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-cap-end`** können die unteren Endpunkte von Spaltenliniensegmenten, die [Cap-Endpunkte](#cap-endpunkte_verstehen) sind, an der Endkante des Containers sowie Cap-Endpunkte, an denen sich keine Liniensegmente schneiden, versetzt werden.

{{InteractiveExample("CSS Demo: column-rule-inset-cap-end")}}

```css interactive-example-choice
column-rule-inset-cap-end: -20px;
```

```css interactive-example-choice
column-rule-inset-cap-end: 0;
```

```css interactive-example-choice
column-rule-inset-cap-end: 1em;
```

```css interactive-example-choice
column-rule-inset-cap-end: 100%;
```

```css interactive-example-choice
column-rule-inset-cap-end: overlap-join;
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
  rule: solid thick magenta;
  column-rule-color: rebeccapurple;
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

## Syntax

```css
/* Keyword value */
column-rule-inset-cap-end: overlap-join;

/* <length-percentage> values */
column-rule-inset-cap-end: 0;
column-rule-inset-cap-end: 1em;
column-rule-inset-cap-end: -5px;
column-rule-inset-cap-end: -25%;

/* Global values */
column-rule-inset-cap-end: inherit;
column-rule-inset-cap-end: initial;
column-rule-inset-cap-end: revert;
column-rule-inset-cap-end: revert-layer;
column-rule-inset-cap-end: unset;
```

### Werte

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Entspricht `0`.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Cap-Endpunkt, dessen Bezugsgröße entweder die Breite von `row-gap` oder `0` ist.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-cap-end` kann die Endkante von [Cap-Segmentendpunkten](#cap-endpunkte_verstehen) eingerückt werden. Der Standardwert ist `0`, was `overlap-join` entspricht. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Spaltenlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente liegen zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in mehrspaltigen Layouts.

Ob eine Spaltenlinie sich über mehrere Zeilen erstreckt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Unterbrechungen zwischen Spaltenliniensegmenten innerhalb des Containers haben die Größe von {{cssxref("row-gap")}}.

`column-rule-inset-cap-end`-Werte mit einer Längenangabe rücken sowohl innere als auch an der Endkante liegende Cap-Segmente um den angegebenen Wert ein. Negative Längenwerte bewirken eine Verlängerung, sodass Cap-Segmente an der Endkante über die Endkante des Containers hinausragen.

[Prozentwerte](#prozentwerte_verstehen) beziehen sich bei inneren Segmenten auf die Größe von {{cssxref("row-gap")}}. Bei Cap-Segmenten an der Endkante beziehen sich Prozentwerte auf `0`. Prozentwerte können daher nicht bewirken, dass Cap-Segmentendpunkte an der Endkante des Containers über den Container hinausragen.

Die Eigenschaft `column-rule-inset-cap-end` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Cap-Endpunkte am Anfang und am Ende einzurücken, können `column-rule-inset-cap-end` und die Eigenschaft {{cssxref("column-rule-inset-cap-start")}} über die Kurzschreibweise {{cssxref("column-rule-inset-cap")}} festgelegt werden.

- Um die Enden aller Spaltensegmente einzurücken, können `column-rule-inset-cap-end` und die Eigenschaft {{cssxref("column-rule-inset-junction-end")}} über die Kurzschreibweise {{cssxref("column-rule-inset-end")}} festgelegt werden.

- Um alle Cap- und Verbindungspunkte von Zeilen- und Spaltenlinien an deren Enden einzurücken, können `column-rule-inset-end` und die Eigenschaft {{cssxref("row-rule-inset-end")}} über die Kurzschreibweise {{cssxref("rule-inset-end")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der `-start`-, `-junction`- und `row-`-Entsprechungen dieser Eigenschaft, können über die Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Cap-Endpunkte verstehen

Ein _Cap-Segmentendpunkt_ ist jeder Segmentendpunkt, der kein Verbindungspunkt ist. Dazu gehören Endpunkte an den Inhaltskanten des Containers sowie Endpunkte an einer Schnittstelle von Abständen, an der keine weiteren Linien- oder Spaltensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap-end` steuert den Einzug der unteren Kante von Cap-Segmentendpunkten einer Spaltenlinie. Dadurch können die Segmente verkürzt oder verlängert werden.

Cap-Segmentendpunkte von Spaltenlinien werden nicht von den Werten der Eigenschaft `column-rule-break` beeinflusst, da diese nur Unterbrechungen an Verbindungspunkten steuert. Sie werden jedoch von den Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese legen fest, ob Spalten- und Zeilenliniensegmente in Abständen neben leeren Bereichen gezeichnet werden.

Cap-Segmentendpunkte von Spaltenlinien gibt es nur an der Endkante des Containers und in inneren Abständen, in denen keine weiteren Spalten- oder Zeilenliniensegmente vorhanden sind. Ob Segmente gezeichnet werden (oder gezeichnet würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre), beeinflusst daher, welche Spaltensegmente Cap-Segmente am Ende sind.

In der folgenden Demonstration enden die unteren Enden der Spaltenliniensegmente an Cap-Endpunkten. Mit `column-rule-inset-cap-end: 16px` werden alle entsprechenden Spaltensegmente um `16px` eingerückt. Ändern Sie den `<length>`-Wert für den Einzug, um besser zu erkennen, welche Segmente an Cap-Segmentendpunkten enden.

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
  column-rule-inset-cap-end: 16px;

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
  @supports not (column-rule-inset-cap-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap-end property";
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
  column-rule-inset-cap-end: 100%;
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
    ul.style.columnRuleInsetCapEnd = `${inset.value}${inset.dataset["unit"]}`;
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

Ändern Sie den Einzug. Bei `0px` schließen die Enden der Spaltenlinien mit dem Ende des Containers ab. Dies ist die Standardeinstellung. Mit `-32px` werden die Segmente um `32px` verlängert, sodass die Linien `32px` über die Endkante des Containers hinaus gezeichnet werden. Da Spaltenlinien das Box-Modell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien in einem Abstandssegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält. Die Spaltenlinien mit doppeltem Linienstil, die erscheinen, wenn `rule-visibility-items` auf `around` gesetzt ist, enden nicht an einem Cap-Endpunkt. Die letzten beiden Spaltenlinien enden in inneren Abständen, in denen Zeilenliniensegmente vorhanden sind. Daher sind ihre Endpunkte keine Cap-Segmentendpunkte, und die Eigenschaft `column-rule-inset-cap-end` wirkt sich nicht auf sie aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien nur dann in Abstandssegmenten gezeichnet, wenn beide angrenzenden Bereiche ein Element enthalten. Die letzte Zeilenlinie im zweiten Zeilenabstand endet am dritten Spaltenabstand. Die dritte Spaltenlinie endet in einem inneren Abstand, in dem ein Zeilenliniensegment vorhanden ist. Ihr Endpunkt ist daher kein Cap-Segmentendpunkt und wird nicht von `column-rule-inset-cap-end` beeinflusst. Die letzten beiden Spaltenlinien enden dagegen in inneren Abständen, in denen keine weiteren Liniensegmente vorhanden sind. Ihre Endpunkte sind somit Cap-Segmentendpunkte und werden von `column-rule-inset-cap-end` beeinflusst.

### Prozentwerte verstehen

Auf welche Länge sich ein Prozentwert bezieht, hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite des Abstands am Cap-Endpunkt, also auf {{cssxref("row-gap")}}, wenn sie an einen Linienabstand angrenzen. An der unteren Kante des Containers beziehen sie sich auf `0`.

In dieser Demonstration sind diese Endpunkte durch den eingerückten dunklen beziehungsweise hellen Linienstil gekennzeichnet. Liegt ein Cap-Segmentendpunkt an der Containerkante, bezieht sich der Prozentwert auf `0` und ergibt daher immer `0`. Deshalb hat nur der Wert `between` eine Auswirkung.

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Spalten enden an der Containerkante, sodass jeder Prozentwert `0` ergibt. Die letzten beiden Spaltenlinien enden in inneren Abständen, in denen Zeilenliniensegmente vorhanden sind. Ihre Endpunkte sind daher keine Cap-Segmentendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die ersten beiden Spalten enden an der Containerkante und haben daher einen Einzug von `0`. Die dritte Spaltenlinie endet in einem inneren Abstand, in dem ein Zeilenliniensegment vorhanden ist. Ihr Endpunkt ist daher kein Cap-Segmentendpunkt. Die letzten beiden Spaltenlinien enden in inneren Abständen, in denen keine weiteren Liniensegmente vorhanden sind. Der prozentuale Versatz bezieht sich deshalb auf die Größe von {{cssxref("row-gap")}}, die hier `20px` beträgt.

Mit `100%` werden die Enden der letzten beiden Spaltenliniensegmente um `20px` eingerückt. Mit `-200%` werden diese Segmente um `40px` verlängert: Die Linien verlaufen durch den `20px` breiten Abstand und ragen `20px` in die letzte Zeile mit Elementen hinein. Negative Prozentwerte, die eine Länge ergeben, die größer als die kombinierte Höhe der letzten Zeile und des Zeilenabstands ist, lassen die letzten beiden Spaltenlinien über die Endkante des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-cap-end` die Endkante von Cap-Segmenten in Flex-Containern einrücken.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren mit {{cssxref("rule")}} eine hellblaue Linie für Zeilen- und Spaltenabstände und überschreiben anschließend {{cssxref("column-rule-color")}}, um die Linien in den Spaltenabständen auf ein dunkleres `blue` zu setzen. Schließlich setzen wir `column-rule-inset-cap-end` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap-end: 16px;
}
```

Für den Container `.column` legen wir außerdem {{cssxref("flex-direction")}} fest, um die Hauptachse des Flex-Containers zu ändern und die Elemente in Spalten statt in Zeilen anzuordnen.

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
  @supports not (column-rule-inset-cap-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap-end property";
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
  containers[0].style.columnRuleInsetCapEnd = val;
  containers[1].style.columnRuleInsetCapEnd = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kurzschreibweise {{cssxref("column-rule-inset")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("column-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
