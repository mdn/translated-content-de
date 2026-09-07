---
title: "`column-rule-inset-cap-end` CSS property"
short-title: column-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-end
l10n:
  sourceCommit: 0cd2f481d60b79bc5272134d5d653bf088863d0d
---

{{SeeCompatTable}}

Die **`column-rule-inset-cap-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um das Ende eines Spaltenregel-Segmentes an den [Cap-Endpunkten](#verständnis_von_cap-enden) an der Kante des Inhaltscontainers zu versetzen, und die Cap-Endpunkte, an denen keine Regelsegmente kreuzen.

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
/* Keywords */
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
  - : Löst sich zu `0` auf.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einsatzes an. Prozentwerte beziehen sich auf den Cap-Endpunkt, der entweder die Breite des `row-gap` oder `0` ist.

## Beschreibung

Die `column-rule-inset-cap-end`-Eigenschaft kann verwendet werden, um die Endkante von [Cap-Segmentendpunkten](#verständnis_von_cap-enden) zu versetzen. Der Standardwert ist `0`, was dem Wert `overlap-join` entspricht. Positive Werte verkleinern die Segmentgröße, während negative Werte sie vergrößern.

Spaltenregeln werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gemalt, wobei Segmente auftreten zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Items oder Flex-Linien in Flex-Layouts, abhängig von der `flex-direction`.
- Spalten in Multi-Col-Layouts.

Ob eine Spaltenregel mehrere Zeilen überspannt oder in mehrere Segmente aufgeteilt wird, wird durch die {{cssxref("column-rule-break")}}-Eigenschaft definiert, wobei Innenbrüche zwischen Spaltenregel-Segmenten die Größe des {{cssxref("row-gap")}} haben.

Längenwerte der `column-rule-inset-cap-end`-Eigenschaft versetzen Segmente um den angegebenen Wert – sowohl für Innen- als auch für Endkanten-Cap-Segmente. Negative Längenwerte führen zu einem Auszug, wobei Endkanten-Cap-Segmente über die Kante des Containers hinausreichen.

[Prozentwerte](#verständnis_der_prozentwerte) beziehen sich auf die Größe des {{cssxref("row-gap")}} für innere Segmente. Für Endkanten-Cap-Segmente beziehen sich Prozentwerte auf `0`, sodass Prozentwerte niemals dazu führen, dass Cap-Segmentendpunkte an der Kante des Containers über den Container hinausreichen.

Die `column-rule-inset-cap-end`-Eigenschaft ist eine Bestandteilseigenschaft mehrerer [Shorthand-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um den Einsatz von Start- und End-Caps zu setzen, können die `column-rule-inset-cap-end`-Eigenschaft zusammen mit der {{cssxref("column-rule-inset-cap-start")}}-Eigenschaft mit der Shorthand-Eigenschaft {{cssxref("column-rule-inset-cap")}} festgelegt werden.

- Um die Enden aller Spaltensegmente zu setzen, können die `column-rule-inset-cap-end`-Eigenschaft zusammen mit der {{cssxref("column-rule-inset-junction-end")}}-Eigenschaft mit der Shorthand-Eigenschaft {{cssxref("column-rule-inset-end")}} festgelegt werden.

- Um dieselben Werte für Reihen- und Spalten-Cap- und Junction-Endpunkte zu setzen, können die `column-rule-inset-end`-Eigenschaft zusammen mit der {{cssxref("row-rule-inset-end")}}-Eigenschaft mit der Shorthand-Eigenschaft {{cssxref("rule-inset-end")}} festgelegt werden.

Alle diese Shorthand-Eigenschaften, zusammen mit ihren `-start`, `-junction` und `row-` Äquivalenten, können mit der Shorthand-Eigenschaft {{cssxref("rule-inset")}} festgelegt werden.

### Verständnis von Cap-Enden

Ein _Cap-Segmentendpunkt_ ist jeder Segmentendpunkt, der kein Junction-Segmentendpunkt ist. Dazu gehören Endpunkte an den Inhaltkanten des Containers sowie Endpunkte an einem Spaltknoten, an dem keine anderen Regel- oder Spaltensegmente vorhanden sind.

Die `column-rule-inset-cap-end`-Eigenschaft steuert den Einsatz der unteren Kante von Cap-Segmentendpunkten und erlaubt es, die Segmente zu verkleinern oder zu erweitern.

Cap-Segmentendpunkte von Spalten werden nicht von den Einstellungen der `column-rule-break`-Eigenschaftswerten beeinflusst, die nur Junction-Segmentunterbrechungen steuern. Sie werden jedoch von den {{cssxref("rule-visibility-items")}}-Eigenschaften beeinflusst, die definieren, ob Spalten- und Reihenregel-Segmente in Lücken neben leeren Bereichen gemalt werden.

Cap-Segmentendpunkte von Spalten existieren nur am Endrand des Containers und an Innenlücken, in denen keine anderen Spalten- oder Reihenregel-Segmente vorhanden sind. Daher beeinflusst es, ob Segmente gemalt werden (oder gemalt würden, wenn das `rule`-Set auf einen sichtbaren Wert gesetzt wäre), welche Spaltensegmente End-Cap-Segmente sind.

In der folgenden Demonstration enden die unteren Spaltenregel-Segmente in Cap-Endpunkten. Mit der Einstellung `column-rule-inset-cap-end: 16px` werden alle Spaltensegmente um `16px` versetzt. Ändern Sie den Einsatzwert `<length>`, um besser zu visualisieren, welche Segmente in Cap-Segmentendpunkten enden.

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

Die Einstellung von `16px` setzt das Ende aller Spaltenregeln um 16px ein. Wenn `0px` eingestellt ist, wird das Ende der Spaltenregeln mit dem Ende des Containers ausgerichtet. Dies ist der Standard. Die Einstellung von `-32px` führt zu einem Versatz der Segmente um `32px`, wobei die Linien `32px` über den Endrand des Containers hinaus gezeichnet werden. Da die Spaltenregeln das Boxmodell nicht beeinflussen, haben diese Linien keinen Einfluss auf das Layout des Containers oder des restlichen Inhalts.

Wählen Sie `around` als den `rule-visibility-items`-Wert. Dieser Wert malt Regeln in einem Spaltensegment, wenn mindestens eines der beiden angrenzenden Bereiche von einem Element belegt ist. Die doppeltlinigen Spaltenregeln, die erscheinen, wenn die `rule-visibility-items` auf `around` (und `between`) gesetzt sind, enden nicht an einem Cap-Endpunkt. Die letzten beiden Spaltenregeln enden an Innenlücken, in denen Reihenregel-Segmente vorhanden sind, sodass diese Spaltensegmente keine Cap-Segmentendpunkte sind und daher nicht von der `column-rule-inset-cap-end`-Eigenschaft betroffen sind.

Wählen Sie `between` als den `rule-visibility-items`-Wert, der Regeln in Spaltsegmenten nur dann malt, wenn beide angrenzenden Bereiche von einem Element besetzt sind. Die letzte Reihenregel in der zweiten Reihenrinne endet an der dritten Spaltenlücke. Die dritte Spaltenregel endet an einer Innenlücke, in der ein Reihenregel-Segment vorhanden ist, sodass dieses Spaltensegment kein Cap-Segmentendpunkt ist und nicht von der `column-rule-inset-cap-end`-Eigenschaft betroffen ist. Die letzten beiden Spaltenregeln enden jedoch an Innenlücken, in denen keine anderen Reglensegmente vorhanden sind, sodass diese Spaltensegmente Cap-Segmentendpunkte sind und daher von der `column-rule-inset-cap-end`-Eigenschaft betroffen sind.

### Verständnis der Prozentwerte

Welcher Länge ein Prozentwert relativ ist, hängt von der Lage des Endpunktes ab. Prozentwerte für innere Endpunkte beziehen sich auf die Spaltbreite am Cap-Endpunkt, also relativ zum {{cssxref("row-gap")}}, wenn an einen Regelspalt angrenzend. In dieser Demonstration werden diese Endpunkte durch den Einsatz, Stil von dunklen und hellen Linien angezeigt. Wenn der Cap-Segmentendpunkt an der Kante des Containers liegt, bezieht sich der Prozentsatz auf `0`, sodass er immer zu `0` berechnet wird (weshalb nur der `between`-Wert eine Wirkung hat).

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als den `rule-visibility-items`-Wert. Die ersten drei Spalten enden an der Containerkante, sodass alle Prozentwerte zu `0` aufgelöst werden. Die letzten beiden Spaltenregeln enden an Innenlücken, in denen Reihenregel-Segmente vorhanden sind, sodass diese Spaltensegmente keine Cap-Segmentendpunkte sind.

Wählen Sie `between` als den `rule-visibility-items`-Wert. Die ersten beiden Spalten enden an der Containerkante, sodass sie einen `0`-Einsatz haben. Die dritte Spaltenregel endet an einer Innenlücke, in der ein Reihenregel-Segment vorhanden ist, sodass dieses Spaltensegment kein Cap-Segmentendpunkt ist. Die letzten beiden Spaltenregeln enden an Innenlücken, in denen keine anderen Reglensegmente vorhanden sind, sodass der Prozentsatzversatz relativ zur Größe der Breite des {{cssxref("row-gap")}} ist, die in diesem Fall `20px` beträgt.

Die Einstellung von `100%` setzt das Ende der letzten beiden Spaltenregel-Segmente um `20px` ein. Das Setzen von `-200%` wird diese Segmente um `40px` aussetzen, wobei die Linien durch die `20px` Spalte gezogen werden und `20px` in die letzte Reihe der Elemente hineinragen. Negative Prozentwerte, die sich zu einer Länge größer als die kombinierte Höhe der letzten Reihe und des Reihenabstandes berechnen, werden dazu führen, dass die letzten beiden Spaltenregeln über den Endrand des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `column-rule-inset-cap-end` verwendet wird, um die Endkante der Cap-Segmente auf Flex-Containern zu versetzen.

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

Wir verwenden die {{cssxref("display")}}-Eigenschaft, um die `.flexbox`-Elemente in Flex-Container zu verwandeln. Wir balancieren die Elemente in drei Flexlinien mit {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} aus. Wir definieren eine hellblaue {{cssxref("rule")}}, um sowohl Reihen- als auch Spaltenabstände zu malen, und überschreiben dann die {{cssxref("column-rule-color")}}, indem wir dunklere `blue` Spaltenabstandsdekorationen setzen. Schließlich setzen wir `column-rule-inset-cap-end` auf `16px`.

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

Wir setzen auch die {{cssxref("flex-direction")}} auf dem `.column`-Container, um die Hauptachse des Flex-Containers zu ändern und die Elemente in Spalten statt in Reihen fließen zu lassen.

```css
.column {
  flex-direction: column;
}
```

Der Rest des CSS ist aus Gründen der Kürze ausgeblendet.

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

Ändern Sie die Größe des Einsatzes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset")}} Shorthand
- {{cssxref("rule-inset")}} Shorthand
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}} Shorthand
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} Shorthand
- [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps) Modul
