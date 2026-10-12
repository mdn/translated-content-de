---
title: "`row-rule-inset-cap-start` CSS property"
short-title: row-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-start
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-inset-cap-start`** lässt sich der Anfang von Zeilenliniensegmenten an [Cap-Endpunkten](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) versetzen.

{{InteractiveExample("CSS Demo: row-rule-inset-cap-start")}}

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
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Cap-Endpunkt, für den entweder `column-gap` oder `0` maßgeblich ist.

## Beschreibung

Die Eigenschaft `row-rule-inset-cap-start` rückt den Anfang von Segmenten an [Cap-Endpunkten](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) am Anfangsrand des Containers sowie an Cap-Endpunkten ein, an denen sich keine Liniensegmente schneiden. Der Standardwert ist `0` und entspricht damit `overlap-join`. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Zeilenlinien werden innerhalb eines Zeilenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente treten zwischen folgenden Elementen auf:

- Benachbarten Zeilen in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Zeilen in mehrspaltigen Layouts, die entstehen können, wenn {{cssxref("column-height")}} auf einen {{cssxref("&lt;length>")}}-Wert gesetzt ist.

Längenwerte für `row-rule-inset-cap-start` rücken den Anfang sowohl innerer Cap-Segment-Endpunkte als auch solcher am Anfangsrand um den angegebenen Wert ein. Negative Längenwerte bewirken einen Versatz nach außen; dabei reichen Cap-Segmente am Containerrand über dessen Anfangsrand hinaus.

Einzüge mit [Prozentwerten](#prozentwerte_verstehen) beziehen sich bei inneren Cap-Segmenten auf die Größe von {{cssxref("column-gap")}}. Bei Cap-Segmenten am Anfangsrand des Containers beziehen sich Prozentwerte auf `0` und ergeben daher immer `0px`.

Die Eigenschaft `row-rule-inset-cap-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl das linke als auch das rechte Ende von Zeilen-Cap-Segmenten einzurücken, können `row-rule-inset-cap-start` und {{cssxref("row-rule-inset-cap-end")}} über die Kurzschreibweise {{cssxref("row-rule-inset-cap")}} gesetzt werden.

- Um den Anfangsrand aller Zeilensegmente einzurücken, können `row-rule-inset-cap-start` und {{cssxref("row-rule-inset-junction-start")}} über die Kurzschreibweise {{cssxref("row-rule-inset-start")}} gesetzt werden.

Alle Segment-Endpunkte, einschließlich der `-end`-, `-junction`- und `column-`-Entsprechungen dieser Eigenschaft, können mit der Kurzschreibweise {{cssxref("rule-inset")}} gesetzt werden.

### Den Anfang eines Cap-Segments verstehen

Ein _Cap-Segment-Endpunkt_ ist jeder Segment-Endpunkt, der kein Junction-Segment-Endpunkt ist. Dazu gehören Endpunkte an den Kanten des Inhaltsbereichs eines Containers sowie Endpunkte an einer Lückenkreuzung, an der keine weiteren Liniensegmente vorhanden sind.

`row-rule-inset-cap-start` steuert den Einzug am Anfang von Zeilenlinien mit Cap-Endpunkten. Die Eigenschaft kann den Anfang folgender Segmente verkürzen oder verlängern:

- Zeilenliniensegmente, die an den Anfangsrand des Containers grenzen.
- Zeilenliniensegmente, deren linke Seite an eine innere Lücke grenzt, in der keine weiteren Zeilen- oder Spaltenliniensegmente vorhanden sind.

Zeilen-Cap-Segmente werden von den {{cssxref("rule-visibility-items")}}-Eigenschaften beeinflusst. Diese legen fest, ob Zeilen- und Spaltenliniensegmente in Lücken neben leeren Bereichen gezeichnet werden. Wird der Wert von `auto` auf `between` oder `around` geändert, können zusätzliche innere Cap-Segmente entstehen.

In der folgenden Demonstration beginnen die äußersten linken Segmente der Zeilenlinien, die an den Containerrand grenzen, an einem Cap-Endpunkt. Mit `row-rule-inset-cap-start: -32px` werden alle diese Endpunkte um `32px` nach außen versetzt. Da Zeilenlinien das Boxmodell nicht beeinflussen, wirken sich diese überstehenden Linien nicht auf das Layout des Inhalts aus. Ändern Sie den `<length>`-Wert des Einzugs, um besser zu erkennen, welche Segmente an Cap-Segment-Endpunkten beginnen.

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
  if (visibility.value === "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "350")}}

Ändern Sie den Einzug. Bei `0px` ist der Anfang der Zeilenlinien am Anfang des Containers ausgerichtet. Dies ist die Standardeinstellung.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien in einem Lückensegment nur gezeichnet, wenn die beiden angrenzenden Bereiche von Elementen belegt sind. Auch hier liegen Cap-Endpunkte von Zeilenlinien am Anfangsrand des Containers. Die dritte Zeilenlinie, die als Doppellinie dargestellt wird, besitzt einen zusätzlichen Cap-Endpunkt: die linke Seite des Segments zwischen den Elementen `12` und `16`. Dort trifft das Segment auf keine anderen Liniensegmente und wird daher von `row-rule-inset-cap-start` beeinflusst.

In diesem Fall hat der Wert `around` für `rule-visibility-items` keine zusätzlichen Cap-Segment-Endpunkte erzeugt. Bei `around` werden Linien in einem Lückensegment gezeichnet, sobald einer der angrenzenden Bereiche von einem Element belegt ist. Der Anfang des Segments zwischen `12` und `16` schneidet die Spaltenliniensegmente im Spaltenabstand links von diesen Elementen. Dadurch entstehen Junction-Segment-Endpunkte statt Cap-Segment-Endpunkten. Junction-Endpunkte werden stattdessen mit {{cssxref("row-rule-inset-junction-start")}} eingerückt.

### Prozentwerte verstehen

Die Bezugsgröße eines Prozentwerts hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite der Lücke am Cap-Endpunkt: Liegt dieser an einer Linienlücke, ist {{cssxref("column-gap")}} maßgeblich; am Rand des Containers beträgt die Bezugsgröße `0`.

Dieses Beispiel ist nicht fehlerhaft: Alle Cap-Segmente beginnen am Rand des Containers, daher sind alle Einzüge standardmäßig `0`.

{{EmbedLiveSample("percents", "", "350")}}

Der Schieberegler wirkt sich nur aus, wenn `rule-visibility-items` auf `between` gesetzt ist. Auch dann beeinflusst er nur den einen inneren Cap-Endpunkt, der durch diesen Wert entsteht: den des Segments zwischen `12` und `16`. Nur für dieses Segment bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("column-gap")}}, die hier `20px` beträgt. Bei `100%` wird der Anfang des Cap-Segments um `20px` eingerückt. Bei `-200%` wird das Segment um `40px` nach außen versetzt; das Liniensegment wird dabei durch die `20px` breite Lücke bis in die vorherige Spalte gezeichnet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `row-rule-inset-cap-start` gesetzt wird, um den Anfangsrand von Cap-Segmenten in Flex-Containern einzurücken.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den beiden Containern besteht darin, dass der zweite zusätzlich die Klasse `column` besitzt.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Spalten- als auch in Zeilenabständen gezeichnet wird, und überschreiben anschließend {{cssxref("row-rule-color")}}, um die Zeilenabstände mit einem dunkleren `blue` zu kennzeichnen. Abschließend setzen wir `row-rule-inset-cap-start` auf `16px`.

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

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column`, um die Hauptachse des Flex-Containers zu ändern, sodass die Elemente in Spalten statt in Zeilen angeordnet werden.

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
- {{cssxref("row-rule-inset-start")}} – Kurzschreibweise
- {{cssxref("row-rule-inset-cap")}} – Kurzschreibweise
- {{cssxref("row-rule-inset")}} – Kurzschreibweise
- {{cssxref("rule-inset-start")}} – Kurzschreibweise
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset")}} – Kurzschreibweise
- {{cssxref("row-rule-break")}}
- {{cssxref("rule-break")}} – Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}} – Kurzschreibweise
- Modul [CSS-Lücken](/de/docs/Web/CSS/Guides/Gaps)
