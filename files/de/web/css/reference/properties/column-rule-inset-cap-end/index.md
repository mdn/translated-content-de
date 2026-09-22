---
title: "`column-rule-inset-cap-end` CSS property"
short-title: column-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-end
l10n:
  sourceCommit: 2c2390b77141b960cac32c1843dac4d907e9c6c2
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-cap-end`** lässt sich die Unterkante von [Cap-Endpunkten](#cap-endpunkte_verstehen) von Spaltentrennliniensegmenten am Endrand des Containers sowie von Cap-Endpunkten, an denen sich keine Trennliniensegmente schneiden, versetzen.

{{InteractiveExample("CSS Demo: rule")}}

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

Für diese Eigenschaft wird ein einzelner Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Ergibt `0`.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Cap-Endpunkt, dessen Bezugsgröße entweder die Breite von `row-gap` oder `0` ist.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-cap-end` lässt sich der Endrand von [Cap-Segmentendpunkten](#cap-endpunkte_verstehen) einrücken. Der Standardwert ist `0`; dies entspricht `overlap-join`. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Spaltentrennlinien werden innerhalb einer Spaltenlücke als ein oder mehrere Segmente gezeichnet. Segmente liegen zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in mehrspaltigen Layouts.

Ob eine Spaltentrennlinie mehrere Zeilen überspannt oder in mehrere Segmente aufgeteilt wird, bestimmt die Eigenschaft {{cssxref("column-rule-break")}}. Innere Unterbrechungen zwischen Spaltentrennliniensegmenten haben dabei die Größe von {{cssxref("row-gap")}}.

`column-rule-inset-cap-end`-Werte mit Längeneinheiten rücken Segmente um den angegebenen Wert ein – sowohl an inneren als auch an Endrand-Cap-Segmenten. Negative Längenwerte bewirken einen Versatz nach außen, sodass Endrand-Cap-Segmente über den Endrand des Containers hinausragen.

[Prozentwerte](#prozentwerte_verstehen) beziehen sich bei inneren Segmenten auf die Größe von {{cssxref("row-gap")}}. Bei Endrand-Cap-Segmenten beziehen sich Prozentwerte auf `0`. Daher bewirken Prozentwerte niemals, dass Cap-Segmentendpunkte am Endrand des Containers über diesen hinausragen.

Die Eigenschaft `column-rule-inset-cap-end` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Cap-Endpunkte am Anfang und Ende einzurücken, können `column-rule-inset-cap-end` und die Eigenschaft {{cssxref("column-rule-inset-cap-start")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-cap")}} festgelegt werden.

- Um die Enden aller Spaltensegmente einzurücken, können `column-rule-inset-cap-end` und die Eigenschaft {{cssxref("column-rule-inset-junction-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-end")}} festgelegt werden.

- Um alle Cap- und Verbindungsendpunkte von Zeilen und Spalten einzurücken, können `column-rule-inset-end` und die Eigenschaft {{cssxref("row-rule-inset-end")}} mit der Kurzschreibweise {{cssxref("rule-inset-end")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der `-start`-, `-junction`- und `row-`-Entsprechungen dieser Eigenschaft, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Cap-Endpunkte verstehen

Ein _Cap-Segmentendpunkt_ ist jeder Segmentendpunkt, der kein Verbindungssegmentendpunkt ist. Dazu gehören Endpunkte an den Inhaltsrändern des Containers ebenso wie Endpunkte an einer Lückenkreuzung, an der keine weiteren Trennlinien- oder Spaltensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap-end` steuert den Einzug der Unterkante von Spalten-Cap-Segmentendpunkten. Dadurch lassen sich die Segmente verkürzen oder verlängern.

Spalten-Cap-Segmentendpunkte werden nicht durch den Wert der Eigenschaft `column-rule-break` beeinflusst, da diese nur Unterbrechungen an Verbindungssegmenten steuert. Sie werden jedoch durch die Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese bestimmen, ob Spalten- und Zeilentrennliniensegmente in Lücken neben leeren Bereichen gezeichnet werden.

Spalten-Cap-Segmentendpunkte gibt es nur am Endrand des Containers und an inneren Lücken, an denen keine weiteren Spalten- oder Zeilentrennliniensegmente vorhanden sind. Ob Segmente gezeichnet werden – oder gezeichnet würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre –, beeinflusst daher, welche Spaltensegmente End-Cap-Segmente sind.

In der folgenden Demonstration enden die Unterkanten der Spaltentrennliniensegmente in Cap-Endpunkten. Wenn `column-rule-inset-cap-end: 16px` festgelegt ist, werden alle Spaltensegmente um `16px` eingerückt. Ändern Sie den Einzugswert vom Typ `<length>`, um besser zu erkennen, welche Segmente in Cap-Segmentendpunkten enden.

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

Ändern Sie den Einzug. Bei `0px` schließen die Enden der Spaltentrennlinien mit dem Endrand des Containers ab. Dies ist die Standardeinstellung. Bei `-32px` werden die Segmente um `32px` nach außen versetzt, sodass die Linien `32px` über den Endrand des Containers hinaus gezeichnet werden. Da Spaltentrennlinien das Box-Modell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Trennlinien in einem Lückensegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche von einem Element belegt ist. Die doppelt gezeichneten Spaltentrennlinien, die bei `rule-visibility-items: around` erscheinen, enden nicht in einem Cap-Endpunkt. Die letzten beiden Spaltentrennlinien enden an inneren Lücken, an denen Zeilentrennliniensegmente vorhanden sind. Daher sind diese Spaltensegmente keine Cap-Segmentendpunkte, und die Eigenschaft `column-rule-inset-cap-end` wirkt sich nicht auf ihre Segmentendpunkte aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Trennlinien in Lückensegmenten nur gezeichnet, wenn beide angrenzenden Bereiche von einem Element belegt sind. Die letzte Zeilentrennlinie in der Lücke der zweiten Zeile endet an der dritten Spaltenlücke. Die dritte Spaltentrennlinie endet an einer inneren Lücke, an der ein Zeilentrennliniensegment vorhanden ist. Daher ist dieses Spaltensegment kein Cap-Segmentendpunkt und wird von der Eigenschaft `column-rule-inset-cap-end` nicht beeinflusst. Die letzten beiden Spaltentrennlinien enden dagegen an inneren Lücken, an denen keine weiteren Trennliniensegmente vorhanden sind. Diese Spaltensegmente haben somit Cap-Segmentendpunkte und werden von der Eigenschaft `column-rule-inset-cap-end` beeinflusst.

### Prozentwerte verstehen

Die Bezugsgröße eines Prozentwerts hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite der Lücke am Cap-Endpunkt, also auf {{cssxref("row-gap")}}, wenn der Endpunkt an eine Trennlinienlücke grenzt. Am unteren Rand des Containers beträgt die Bezugsgröße `0`.

In dieser Demonstration sind diese Endpunkte durch eingerückte, dunkle und helle Linien gekennzeichnet. Liegt der Cap-Segmentendpunkt am Rand des Containers, bezieht sich der Prozentwert auf `0` und wird daher immer zu `0` berechnet. Deshalb wirkt sich nur der Wert `between` aus.

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Spalten enden am Rand des Containers. Daher ergibt jeder Prozentwert `0`. Die letzten beiden Spaltentrennlinien enden an inneren Lücken, an denen Zeilentrennliniensegmente vorhanden sind. Diese Spaltensegmente haben daher keine Cap-Segmentendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die ersten beiden Spalten enden am Rand des Containers und haben daher einen Einzug von `0`. Die dritte Spaltentrennlinie endet an einer inneren Lücke, an der ein Zeilentrennliniensegment vorhanden ist. Dieses Spaltensegment hat daher keinen Cap-Segmentendpunkt. Die letzten beiden Spaltentrennlinien enden an inneren Lücken, an denen keine weiteren Trennliniensegmente vorhanden sind. Der prozentuale Versatz bezieht sich daher auf die Breite von {{cssxref("row-gap")}}, die in diesem Fall `20px` beträgt.

Bei `100%` werden die Enden der letzten beiden Spaltentrennliniensegmente um `20px` eingerückt. Bei `-200%` werden diese Segmente um `40px` nach außen versetzt: Die Linien werden durch die `20px` breite Lücke gezeichnet und ragen weitere `20px` in die letzte Zeile mit Elementen hinein. Negative Prozentwerte, die zu einer Länge führen, die größer ist als die kombinierte Höhe der letzten Zeile und der Zeilenlücke, bewirken, dass die letzten beiden Spaltentrennlinien über den Endrand des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-cap-end` den Endrand von Cap-Segmenten in Flex-Containern einrücken.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, um sowohl Zeilen- als auch Spaltenlücken zu kennzeichnen. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, sodass die Markierungen der Spaltenlücken das dunklere `blue` erhalten. Zuletzt setzen wir `column-rule-inset-cap-end` auf `16px`.

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

Außerdem setzen wir {{cssxref("flex-direction")}} für den `.column`-Container, um die Hauptachse des Flex-Containers zu ändern und die Elemente in Spalten statt in Zeilen anzuordnen.

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
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
