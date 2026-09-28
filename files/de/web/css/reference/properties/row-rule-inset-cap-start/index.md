---
title: "`row-rule-inset-cap-start` CSS property"
short-title: row-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-start
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-inset-cap-start`** lässt sich der Anfang von [Cap-Endpunkten](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) von Zeilenliniensegmenten versetzen.

{{InteractiveExample("CSS Demo: rule")}}

<!-- negative example must come first -->

```css interactive-example-choice
row-rule-inset-cap-start: -20px;
```

```css interactive-example-choice
row-rule-inset-cap-start: 0;
```

```css interactive-example-choice
row-rule-inset-cap-start: 1em;
```

```css interactive-example-choice
row-rule-inset-cap-start: 100%;
```

```css interactive-example-choice
row-rule-inset-cap-start: overlap-join;
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
  rule: solid thick magenta;
  row-rule-color: rebeccapurple;
  gap: 1em;
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

## Syntax

```css
/* Keywords */
row-rule-inset-cap-start: overlap-join;

/* <length-percentage> values */
row-rule-inset-cap-start: 0;
row-rule-inset-cap-start: 1em;
row-rule-inset-cap-start: -5px;
row-rule-inset-cap-start: -25%;

/* Global values */
row-rule-inset-cap-start: inherit;
row-rule-inset-cap-start: initial;
row-rule-inset-cap-start: revert;
row-rule-inset-cap-start: revert-layer;
row-rule-inset-cap-start: unset;
```

### Werte

Für diese Eigenschaft wird ein einzelner Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Entspricht `0`.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Cap-Endpunkt, also entweder auf `column-gap` oder auf `0`.

## Beschreibung

Die Eigenschaft `row-rule-inset-cap-start` rückt den Anfang von [Cap-Segmentendpunkten](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) am Anfangsrand des Containers und an Cap-Endpunkten, an denen sich keine Liniensegmente kreuzen, nach innen. Der Standardwert ist `0` und entspricht damit `overlap-join`. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Zeilenlinien werden innerhalb eines Zeilenabstands als ein oder mehrere Segmente dargestellt. Diese Segmente liegen zwischen:

- benachbarten Zeilen in CSS-Grid-Layouts.
- benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- benachbarten Zeilen in mehrspaltigen Layouts, die vorhanden sein können, wenn {{cssxref("column-height")}} auf eine {{cssxref("&lt;length>")}} gesetzt ist.

Längenwerte für `row-rule-inset-cap-start` rücken den Anfang sowohl innerer Cap-Segmentendpunkte als auch solcher am Anfangsrand um den angegebenen Wert nach innen. Negative Längenwerte bewirken einen Versatz nach außen; dabei reichen Cap-Segmente am Containerrand über den Anfangsrand des Containers hinaus.

Bei inneren Cap-Segmenten beziehen sich [Prozentwerte](#prozentwerte_verstehen) für den Einzug auf die Größe von {{cssxref("column-gap")}}. Bei Cap-Segmenten am Anfangsrand des Containers beziehen sich Prozentwerte auf `0` und ergeben daher immer `0px`.

Die Eigenschaft `row-rule-inset-cap-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl das linke als auch das rechte Ende von Zeilen-Cap-Segmenten nach innen zu rücken, können `row-rule-inset-cap-start` und {{cssxref("row-rule-inset-cap-end")}} über die Kurzschreibweise {{cssxref("row-rule-inset-cap")}} gesetzt werden.

- Um den Anfang aller Zeilensegmente nach innen zu rücken, können `row-rule-inset-cap-start` und {{cssxref("row-rule-inset-junction-start")}} über die Kurzschreibweise {{cssxref("row-rule-inset-start")}} gesetzt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden Eigenschaften mit `-end`, `-junction` und `column-`, können über die Kurzschreibweise {{cssxref("rule-inset")}} gesetzt werden.

### Den Anfang von Cap-Segmenten verstehen

Ein _Cap-Segmentendpunkt_ ist jeder Segmentendpunkt, der kein Junction-Segmentendpunkt ist. Dazu gehören Endpunkte an den Inhaltsrändern des Containers sowie Endpunkte an einer Kreuzung von Abständen, an der keine weiteren Liniensegmente vorhanden sind.

`row-rule-inset-cap-start` steuert den Einzug am Anfang von Zeilenlinien mit Cap-Endpunkten. Die Eigenschaft kann den Anfang folgender Segmente verkürzen oder verlängern:

- Zeilenliniensegmente, die an den Anfangsrand des Containers angrenzen.
- Zeilenliniensegmente, deren linke Seite an einen inneren Abstand grenzt, in dem keine weiteren Zeilen- oder Spaltenliniensegmente vorhanden sind.

Zeilen-Cap-Segmente werden von den Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese legen fest, ob Zeilen- und Spaltenliniensegmente in Abständen neben leeren Bereichen dargestellt werden. Wird der Wert von `auto` zu `between` oder `around` geändert, können zusätzliche innere Cap-Segmente entstehen.

In der folgenden Demonstration beginnen die äußersten linken Segmente der Zeilenlinien, die an den Containerrand angrenzen, an einem Cap-Endpunkt. Bei `row-rule-inset-cap-start: -32px` sind alle diese Endpunkte um `32px` nach außen versetzt. Da Zeilenlinien das Boxmodell nicht beeinflussen, wirken sich diese überstehenden Linien nicht auf das Layout des Inhalts aus. Ändern Sie den Einzugswert `<length>`, um besser zu erkennen, welche Segmente mit Cap-Segmentendpunkten beginnen.

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
  row-rule-inset-cap-start: -32px;

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
  @supports not (row-rule-inset-cap-start: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap-start property";
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
  row-rule-inset-cap-start: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.rowRuleInsetCapStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "350")}}

Ändern Sie den Einzug. Mit `0px` wird der Anfang der Zeilenlinien am Anfang des Containers ausgerichtet. Dies ist die Standardeinstellung.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien in einem Abstandssegment nur dargestellt, wenn beide angrenzenden Bereiche von Elementen belegt sind. Auch hier befinden sich Cap-Endpunkte von Zeilenlinien am Anfangsrand des Containers. Die dritte Zeilenlinie, die als Doppellinie dargestellt wird, hat ein zusätzliches Segment mit einem Cap-Endpunkt: die linke Seite des Segments zwischen den Elementen `12` und `16`. Dort trifft das Segment auf keine anderen Liniensegmente und wird daher von der Eigenschaft `row-rule-inset-cap-start` beeinflusst.

Der Wert `around` der Eigenschaft `rule-visibility-items`, bei dem Linien in einem Abstandssegment dargestellt werden, sobald ein angrenzender Bereich von einem Element belegt ist, erzeugt in diesem Fall keine zusätzlichen Cap-Segmentendpunkte. Der Anfang des Segments zwischen `12` und `16` kreuzt die Spaltenliniensegmente im Spaltenabstand links von diesen Elementen. Dadurch entstehen Junction-Segmentendpunkte statt Cap-Segmentendpunkten. Junction-Endpunkte werden stattdessen mit der Eigenschaft {{cssxref("row-rule-inset-junction-start")}} eingerückt.

### Prozentwerte verstehen

Die Bezugsgröße eines Prozentwerts hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite des Abstands am Cap-Endpunkt: auf {{cssxref("column-gap")}}, wenn der Endpunkt an einen Linienabstand grenzt, und auf `0` am Containerrand.

Dieses Beispiel ist nicht defekt: Alle Cap-Segmente beginnen am Rand des Containers. Deshalb betragen alle Einzüge standardmäßig `0`.

{{EmbedLiveSample("percents", "", "350")}}

Der Schieberegler wirkt sich nur aus, wenn `rule-visibility-items` auf `between` gesetzt ist, und auch dann nur auf das einzelne innere Segment mit Cap-Endpunkt, das durch diesen Wert entsteht – das Segment zwischen `12` und `16`. Nur bei diesem Segment bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("column-gap")}}, die hier `20px` beträgt. Mit `100%` wird der Anfang des Cap-Segments um `20px` nach innen gerückt. Mit `-200%` wird das Segment um `40px` nach außen versetzt, sodass das Liniensegment durch den `20px` breiten Abstand bis in die vorherige Spalte hinein gezeichnet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-cap-start` den Anfangsrand von Cap-Segmenten in Flex-Containern nach innen rücken.

#### HTML

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Spalten- als auch in Zeilenabständen dargestellt wird. Anschließend überschreiben wir {{cssxref("row-rule-color")}}, um die Zeilenlinien auf ein dunkleres `blue` zu setzen. Schließlich setzen wir `row-rule-inset-cap-start` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap-start: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column`. Dadurch ändern wir die Hauptachse des Flex-Containers, sodass die Elemente in Spalten statt in Zeilen angeordnet werden.

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
  gap: 42px;
  rule: 1px solid black;
  width: 100vw;
  padding: 0 50px;
  box-sizing: border-box;
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
  @supports not (row-rule-inset-cap-start: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap-start property";
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
  containers[0].style.rowRuleInsetCapStart = val;
  containers[1].style.rowRuleInsetCapStart = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "320")}}

Ändern Sie die Größe des Einzugs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-cap-start")}}
- {{cssxref("row-rule-inset-cap-end")}}
- {{cssxref("row-rule-inset-junction-start")}}
- {{cssxref("row-rule-inset-start")}}-Kurzschreibweise
- {{cssxref("row-rule-inset-cap")}}-Kurzschreibweise
- {{cssxref("row-rule-inset")}}-Kurzschreibweise
- {{cssxref("rule-inset-start")}}-Kurzschreibweise
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset")}}-Kurzschreibweise
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}}-Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
