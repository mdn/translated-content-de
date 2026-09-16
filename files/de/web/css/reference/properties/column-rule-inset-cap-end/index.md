---
title: "`column-rule-inset-cap-end` CSS property"
short-title: column-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-end
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-cap-end`** kann verwendet werden, um die Unterseite von Endpunkten von Spaltenregel-Segment-[Kappen](#kappenende_verstehen) an der Endkante des Inhalts des Containers sowie Kappenendpunkte zu versetzen, an denen sich keine Regelsegmente schneiden.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
column-rule-inset-cap-end: 0;
```

```css interactive-example-choice
column-rule-inset-cap-end: 1em;
```

```css interactive-example-choice
column-rule-inset-cap-end: -20px;
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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Kappenendpunkt, der entweder die Breite von `row-gap` oder `0` ist.

## Beschreibung

Die Eigenschaft `column-rule-inset-cap-end` kann verwendet werden, um die Endkante von [Kappensegment-Endpunkten](#kappenende_verstehen) einzuziehen. Der Standardwert ist `0`, was `overlap-join` entspricht. Positive Werte verringern die Segmentgröße, während negative Werte sie vergrößern.

Spaltenregeln werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet, wobei Segmente zwischen folgenden Elementen auftreten:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Items oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in Multi-Column-Layouts.

Ob eine Spaltenregel mehrere Zeilen überspannt oder in mehrere Segmente unterteilt wird, wird durch die Eigenschaft {{cssxref("column-rule-break")}} definiert. Die inneren Unterbrechungen zwischen Spaltenregel-Segmenten haben dabei die Größe von {{cssxref("row-gap")}}.

Längenwerte für `column-rule-inset-cap-end` ziehen Segmente um den angegebenen Wert ein – sowohl für innere als auch für Endkanten-Kappensegmente. Negative Längenwerte erzeugen einen Außenabstand, wobei Kappensegmente an der Endkante über die Endkante des Containers hinausragen.

[Prozentwerte](#prozentwerte_verstehen) beziehen sich bei inneren Segmenten auf die Größe von {{cssxref("row-gap")}}. Bei Kappensegmenten an der Endkante beziehen sich Prozentwerte auf `0`, sodass Prozentwerte niemals dazu führen, dass Kappensegment-Endpunkte an der Endkante des Containers über den Container hinausragen.

Die Eigenschaft `column-rule-inset-cap-end` ist eine Bestandteil-Eigenschaft mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um den Einzug der Start- und Endkappen festzulegen, kann die Eigenschaft `column-rule-inset-cap-end` zusammen mit der Eigenschaft {{cssxref("column-rule-inset-cap-start")}} über die Kurzschreibweise {{cssxref("column-rule-inset-cap")}} gesetzt werden.

- Um die Enden aller Spaltensegmente festzulegen, kann die Eigenschaft `column-rule-inset-cap-end` zusammen mit der Eigenschaft {{cssxref("column-rule-inset-junction-end")}} über die Kurzschreibweise {{cssxref("column-rule-inset-end")}} gesetzt werden.

- Um dieselben Werte für Zeilen- und Spalten-Kappen- und Verbindungsendpunkte festzulegen, kann die Eigenschaft `column-rule-inset-end` zusammen mit der Eigenschaft {{cssxref("row-rule-inset-end")}} über die Kurzschreibweise {{cssxref("rule-inset-end")}} gesetzt werden.

Alle diese Kurzschreibweisen können zusammen mit ihren `-start`-, `-junction`- und `row-`-Entsprechungen über die Kurzschreibweise {{cssxref("rule-inset")}} gesetzt werden.

### Kappenende verstehen

Ein _Kappensegment-Endpunkt_ ist jeder Segmentendpunkt, der kein Verbindungssegment-Endpunkt ist. Dazu gehören Endpunkte an den Inhaltskanten des Containers sowie Endpunkte an einer Lückenverbindung, an der keine anderen Regel- oder Spaltensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap-end` steuert den Einzug der Unterkante von Spalten-Kappensegment-Endpunkten und ermöglicht das Verkleinern oder Erweitern der Segmente.

Spalten-Kappensegment-Endpunkte werden nicht durch Einstellungen des Eigenschaftswerts `column-rule-break` beeinflusst, da diese nur Unterbrechungen von Verbindungssegmenten steuern. Sie werden jedoch durch die Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst, die definieren, ob Spalten- und Zeilenregel-Segmente in Lücken neben leeren Bereichen gezeichnet werden.

Spalten-Kappensegment-Endpunkte existieren nur an der Endkante des Containers und in inneren Lücken, in denen keine anderen Spalten- oder Zeilenregel-Segmente vorhanden sind. Daher beeinflusst, ob Segmente gezeichnet werden (oder andernfalls gezeichnet würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre), welche Spaltensegmente Endkappen-Segmente sind.

In der folgenden Demonstration enden die Unterseiten der Spaltenregel-Segmente in Kappenendpunkten. Wenn `column-rule-inset-cap-end: 16px` gesetzt ist, werden alle Spaltensegmente um `16px` eingezogen. Ändern Sie den Einzugswert `<length>`, um besser zu erkennen, welche Segmente an Kappensegment-Endpunkten enden.

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
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "repeat(2, solid), double";
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

{{EmbedLiveSample("caps", "", "300")}}

Das Setzen von `16px` zieht das Ende aller Spaltenregeln um 16px ein. Wenn `0px` gesetzt ist, richtet sich das Ende der Spaltenregeln am Ende des Containers aus. Dies ist der Standardwert. Das Setzen von `-32px` erweitert die Segmente um `32px`, wobei die Linien `32px` über die Endkante des Containers hinaus gezeichnet werden. Da Spaltenregeln keinen Einfluss auf das Box-Modell haben, haben diese Linien keine Auswirkungen auf das Layout des Containers oder den übrigen Inhalt.

Wählen Sie `around` als Wert für `rule-visibility-items`. Dieser Wert zeichnet Regeln in einem Lückensegment, wenn mindestens einer der beiden angrenzenden Bereiche durch ein Item belegt ist. Die Spaltenregeln im doppelten Linienstil, die angezeigt werden, wenn `rule-visibility-items` auf `around` (und `between`) gesetzt ist, enden nicht an einem Kappenendpunkt. Die letzten beiden Spaltenregeln enden an inneren Lücken, an denen Zeilenregel-Segmente vorhanden sind. Daher sind diese Spaltensegmente keine Kappensegment-Endpunkte und werden folglich nicht durch die Eigenschaft `column-rule-inset-cap-end` beeinflusst.

Wählen Sie `between` als Wert für `rule-visibility-items`. Dieser Wert zeichnet Regeln in Lückensegmenten nur, wenn beide angrenzenden Bereiche durch ein Item belegt sind. Die letzte Zeilenregel in der Rinne der zweiten Zeile endet am Abstand der dritten Spalte. Die dritte Spaltenregel endet an einer inneren Lücke, an der ein Zeilenregel-Segment vorhanden ist. Daher ist dieses Spaltensegment kein Kappensegment-Endpunkt und wird nicht durch die Eigenschaft `column-rule-inset-cap-end` beeinflusst. Die letzten beiden Spaltenregeln enden jedoch an inneren Lücken, an denen keine anderen Regelsegmente vorhanden sind. Daher sind diese Spaltensegmente Kappensegment-Endpunkte und werden durch die Eigenschaft `column-rule-inset-cap-end` beeinflusst.

### Prozentwerte verstehen

Von welcher Länge sich ein Prozentwert ableitet, hängt von der Position des Endpunkts ab. Prozentwerte für innere Endpunkte beziehen sich auf die Lückenbreite am Kappenendpunkt, also auf {{cssxref("row-gap")}}, wenn sie an eine Regellücke angrenzen. In dieser Demonstration werden diese Endpunkte durch den eingezogenen, dunklen und hellen Linienstil gekennzeichnet. Wenn sich der Kappensegment-Endpunkt an der Kante des Containers befindet, bezieht sich der Prozentwert auf `0` und wird daher immer zu `0` berechnet. Deshalb hat nur der Wert `between` eine Auswirkung.

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Spalten enden an der Containerkante, sodass jeder Prozentwert zu `0` aufgelöst wird. Die letzten beiden Spaltenregeln enden an inneren Lücken, an denen Zeilenregel-Segmente vorhanden sind. Daher sind diese Spaltensegmente keine Kappensegment-Endpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die ersten beiden Spalten enden an der Containerkante und haben daher einen Einzug von `0`. Die dritte Spaltenregel endet an einer inneren Lücke, an der ein Zeilenregel-Segment vorhanden ist. Daher ist dieses Spaltensegment kein Kappensegment-Endpunkt. Die letzten beiden Spaltenregeln enden an inneren Lücken, an denen keine anderen Regelsegmente vorhanden sind. Daher bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("row-gap")}}, die in diesem Fall `20px` beträgt.

Das Setzen von `100%` zieht das Ende der letzten beiden Spaltenregel-Segmente um `20px` ein. Das Setzen von `-200%` erweitert diese Segmente um `40px`, wobei die Linien durch die `20px` große Lücke gezeichnet werden und `20px` in die letzte Item-Zeile hineinragen. Negative Prozentwerte, die zu einer Länge berechnet werden, die größer als die kombinierte Höhe der letzten Zeile und der Zeilenlücke ist, führen dazu, dass die letzten beiden Spaltenregeln über die Endkante des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert das Setzen von `column-rule-inset-cap-end`, um die Endkante von Kappensegmenten bei Flex-Containern einzuziehen.

#### HTML

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

Wir verwenden die Eigenschaft {{cssxref("display")}}, um die Elemente `.flexbox` in Flex-Container umzuwandeln. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Items gleichmäßig auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, um sowohl Zeilen- als auch Spaltenlücken zu zeichnen, und überschreiben dann {{cssxref("column-rule-color")}}, indem wir dunklere `blue`-Dekorationen für Spaltenlücken festlegen. Schließlich setzen wir `column-rule-inset-cap-end` auf `16px`.

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

Wir setzen außerdem {{cssxref("flex-direction")}} für den Container `.column`, um die Hauptachse des Flex-Containers zu ändern und die Items in Spalten statt in Zeilen fließen zu lassen.

```css
.column {
  flex-direction: column;
}
```

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

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
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)-Modul
