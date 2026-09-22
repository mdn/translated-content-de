---
title: "`row-rule-inset-cap-start` CSS property"
short-title: row-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-start
l10n:
  sourceCommit: 2c2390b77141b960cac32c1843dac4d907e9c6c2
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-inset-cap-start`** lässt sich der Anfang von Trennliniensegmenten zwischen Zeilen an [freien Segmentenden](#understanding_cap_end) versetzen.

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
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf das Segmentende: entweder auf `column-gap` oder auf `0`.

## Beschreibung

Die Eigenschaft `row-rule-inset-cap-start` rückt den Anfang von [Segmenten mit freien Enden](#understanding_cap_end) am Anfangsrand des Containers sowie an freien Segmentenden ein, an denen keine anderen Trennliniensegmente aufeinandertreffen. Der Standardwert ist `0` und entspricht `overlap-join`. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Trennlinien zwischen Zeilen werden innerhalb eines Zeilenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente liegen zwischen:

- benachbarten Zeilen in CSS-Grid-Layouts,
- benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`,
- benachbarten Zeilen in mehrspaltigen Layouts, die entstehen können, wenn {{cssxref("column-height")}} auf eine {{cssxref("&lt;length>")}} gesetzt ist.

Ein Längenwert für `row-rule-inset-cap-start` rückt den Anfang sowohl innerer freier Segmentenden als auch freier Segmentenden am Anfangsrand um den angegebenen Wert ein. Negative Längenwerte bewirken eine Verlängerung; dabei ragen Trennliniensegmente am Containerrand über den Anfangsrand des Containers hinaus.

[Prozentuale Werte](#prozentwerte_verstehen) für den Einzug innerer freier Segmentenden beziehen sich auf die Größe von {{cssxref("column-gap")}}. Bei freien Segmentenden am Anfangsrand des Containers beziehen sich Prozentwerte auf `0` und ergeben daher immer `0px`.

Die Eigenschaft `row-rule-inset-cap-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl das linke als auch das rechte Ende von Trennliniensegmenten zwischen Zeilen mit freien Enden einzurücken, können `row-rule-inset-cap-start` und {{cssxref("row-rule-inset-cap-end")}} über die Kurzschreibweise {{cssxref("row-rule-inset-cap")}} festgelegt werden.

- Um den Anfangsrand aller Trennliniensegmente zwischen Zeilen einzurücken, können `row-rule-inset-cap-start` und {{cssxref("row-rule-inset-junction-start")}} über die Kurzschreibweise {{cssxref("row-rule-inset-start")}} festgelegt werden.

Alle Segmentenden, einschließlich der entsprechenden Varianten mit `-end`, `-junction` und `column-`, können über die Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Freie Segmentenden am Anfang verstehen

Ein _freies Segmentende_ ist jedes Segmentende, das kein Knotenpunkt ist. Dazu gehören Enden an den Inhaltsrändern des Containers sowie Enden an einer Kreuzung von Abständen, an der keine weiteren Trennliniensegmente vorhanden sind.

`row-rule-inset-cap-start` steuert den Einzug am Anfang von Trennlinien zwischen Zeilen mit freien Segmentenden. Die Eigenschaft kann den Anfang folgender Segmente verkürzen oder verlängern:

- Trennliniensegmente zwischen Zeilen, die an den Anfangsrand des Containers angrenzen.
- Trennliniensegmente zwischen Zeilen, deren linke Seite an einen inneren Abstand angrenzt, in dem keine weiteren Trennliniensegmente zwischen Zeilen oder Spalten vorhanden sind.

Freie Segmentenden von Trennlinien zwischen Zeilen werden von den {{cssxref("rule-visibility-items")}}-Eigenschaften beeinflusst. Diese legen fest, ob Trennliniensegmente zwischen Zeilen und Spalten in Abständen neben leeren Bereichen gezeichnet werden. Wird der Wert von `auto` auf `between` oder `around` geändert, können zusätzliche innere freie Segmentenden entstehen.

Im folgenden Beispiel beginnen die äußersten linken Segmente der Trennlinien zwischen Zeilen, die an den Containerrand angrenzen, mit einem freien Segmentende. Bei `row-rule-inset-cap-start: -32px` werden alle diese Enden um `32px` nach außen versetzt. Da Trennlinien zwischen Zeilen das Boxmodell nicht beeinflussen, wirken sich die überstehenden Linien nicht auf das Layout des Inhalts aus. Ändern Sie den `<length>`-Wert für den Einzug, um besser zu erkennen, welche Segmente mit freien Segmentenden beginnen.

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
  margin: 0 20px;
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

Ändern Sie den Einzug. Mit `0px` beginnt die Trennlinie zwischen Zeilen am Anfang des Containers. Dies ist der Standardwert.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert wird eine Trennlinie in einem Abstandssegment nur gezeichnet, wenn beide angrenzenden Bereiche Elemente enthalten. Auch hier befinden sich freie Segmentenden von Trennlinien zwischen Zeilen am Anfangsrand des Containers. Die dritte Trennlinie zwischen Zeilen, die als Doppellinie dargestellt wird, hat ein weiteres freies Segmentende: die linke Seite des Segments zwischen den Elementen `12` und `16`. Dort trifft es auf kein anderes Trennliniensegment und wird daher von `row-rule-inset-cap-start` beeinflusst.

Der Wert `around` der Eigenschaft `rule-visibility-items`, bei dem eine Trennlinie in einem Abstandssegment gezeichnet wird, sobald einer der angrenzenden Bereiche ein Element enthält, erzeugt in diesem Fall keine weiteren freien Segmentenden. Der Anfang des Trennliniensegments zwischen `12` und `16` trifft auf die Trennliniensegmente im Spaltenabstand links von diesen Elementen. Dadurch entsteht ein Knotenpunkt statt eines freien Segmentendes. Knotenpunkte werden stattdessen mit der Eigenschaft {{cssxref("row-rule-inset-junction-start")}} eingerückt.

### Prozentwerte verstehen

Auf welche Länge sich ein Prozentwert bezieht, hängt von der Position des Segmentendes ab. Bei inneren Segmentenden beziehen sich Prozentwerte auf die Breite des Abstands am freien Segmentende: auf {{cssxref("column-gap")}}, wenn das Ende an einen Abstand mit Trennlinien angrenzt, und auf `0` am Rand des Containers.

Dieses Beispiel funktioniert wie vorgesehen: Alle Segmente mit freien Enden beginnen am Containerrand, sodass alle Einzüge standardmäßig `0` betragen.

{{EmbedLiveSample("percents", "", "350")}}

Der Schieberegler wirkt sich nur aus, wenn `rule-visibility-items` auf `between` gesetzt ist, und dann nur auf das einzige innere Segment mit freiem Ende, das durch diesen Wert entsteht: das Segment zwischen `12` und `16`. Nur bei diesem Segment bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("column-gap")}}, die hier `20px` beträgt. Bei `100%` wird der Anfang des Segments um `20px` eingerückt. Bei `-200%` wird das Segment um `40px` verlängert. Dabei wird das Trennliniensegment durch den `20px` breiten Abstand bis in die vorherige Spalte gezeichnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `row-rule-inset-cap-start` den Anfangsrand von Segmenten mit freien Enden in Flex-Containern einrücken.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren mit {{cssxref("rule")}} hellblaue Trennlinien, die sowohl in Spalten- als auch in Zeilenabständen gezeichnet werden. Anschließend überschreiben wir {{cssxref("row-rule-color")}}, um die Trennlinien in den Zeilenabständen dunkler, nämlich `blue`, darzustellen. Zum Schluss setzen wir `row-rule-inset-cap-start` auf `16px`.

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

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column`, um die Hauptachse des Flex-Containers zu ändern und die Elemente in Spalten statt in Zeilen anzuordnen.

```css
.column {
  flex-direction: column;
}
```

Der restliche CSS-Code ist der Kürze halber ausgeblendet.

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
