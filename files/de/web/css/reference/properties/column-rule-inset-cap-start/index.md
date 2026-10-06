---
title: "`column-rule-inset-cap-start` CSS property"
short-title: column-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-start
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-cap-start`** können Sie die oberen Enden von Spaltentrennliniensegmenten an der Anfangskante des Containers sowie Enden, an denen sich keine Trennliniensegmente schneiden, versetzen. Diese Enden werden als [Cap-Endpunkte](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) bezeichnet.

{{InteractiveExample("CSS Demo: column-rule-inset-cap-start")}}

<!-- negative example must come first -->

```css interactive-example-choice
column-rule-inset-cap-start: -20px;
```

```css interactive-example-choice
column-rule-inset-cap-start: 0;
```

```css interactive-example-choice
column-rule-inset-cap-start: 1em;
```

```css interactive-example-choice
column-rule-inset-cap-start: 100%;
```

```css interactive-example-choice
column-rule-inset-cap-start: overlap-join;
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
/* Keywords */
column-rule-inset-cap-start: overlap-join;

/* <length-percentage> values */
column-rule-inset-cap-start: 0;
column-rule-inset-cap-start: 1em;
column-rule-inset-cap-start: -5px;
column-rule-inset-cap-start: -25%;

/* Global values */
column-rule-inset-cap-start: inherit;
column-rule-inset-cap-start: initial;
column-rule-inset-cap-start: revert;
column-rule-inset-cap-start: revert-layer;
column-rule-inset-cap-start: unset;
```

### Werte

Für diese Eigenschaft wird ein einzelner Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Cap-Endpunkt: entweder auf die Breite von `row-gap` oder auf `0`.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-cap-start` können Sie die Anfangskante von [Cap-Segment-Endpunkten](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) einrücken. Der Standardwert ist `0` und entspricht `overlap-join`. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Spaltentrennlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente dargestellt. Segmente treten zwischen folgenden Bereichen auf:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in mehrspaltigen Layouts.

Längenwerte für `column-rule-inset-cap-start` rücken Segmente um den angegebenen Wert ein – sowohl an inneren Cap-Endpunkten als auch an Cap-Endpunkten am Containerrand. Negative Längenwerte verschieben sie nach außen; dadurch reichen Cap-Segmente am Rand über die Anfangskante des Containers hinaus.

[Prozentwerte](#prozentwerte_verstehen) für innere Segmente beziehen sich auf die Größe von {{cssxref("row-gap")}}. Bei Cap-Segmenten an der Anfangskante des Containers beziehen sich Prozentwerte auf `0`. Daher bewirken Prozentwerte nie, dass Cap-Segment-Endpunkte an dieser Kante über den Container hinausragen.

Die Eigenschaft `column-rule-inset-cap-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl Cap-Endpunkte am Anfang als auch am Ende einzurücken, können `column-rule-inset-cap-start` und {{cssxref("column-rule-inset-cap-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-cap")}} festgelegt werden.

- Um den Anfang aller Spaltensegment-Endpunkte einzurücken, können `column-rule-inset-cap-start` und {{cssxref("column-rule-inset-junction-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-end")}} festgelegt werden.

Alle Segment-Endpunkte, einschließlich der entsprechenden Varianten mit `-end`, `-junction` und `row-`, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Cap-Endpunkte am Segmentanfang verstehen

Ein _Cap-Segment-Endpunkt_ ist jeder Segment-Endpunkt, der kein Verbindungs-Endpunkt ist. Dazu gehören Endpunkte an den Inhaltskanten des Containers ebenso wie Endpunkte an einer Kreuzung von Abständen, an der keine weiteren Trennliniensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap-start` steuert den Einzug an der oberen Kante von Spaltensegmenten mit Cap-Endpunkten. Dadurch können die Segmente verkürzt oder verlängert werden. Dies gilt sowohl für Spaltentrennliniensegmente, die an die obere Kante des Containers grenzen, als auch für Segmente, deren oberes Ende an einem inneren Abstand liegt, an dem keine weiteren Spalten- oder Zeilentrennliniensegmente vorhanden sind.

Cap-Endpunkte von Spaltensegmenten werden nicht durch die Einstellungen der Eigenschaft `column-rule-break` beeinflusst; diese steuern nur Unterbrechungen an Verbindungen. Die Eigenschaften {{cssxref("rule-visibility-items")}} wirken sich jedoch auf sie aus: Sie legen fest, ob Spalten- und Zeilentrennliniensegmente in Abständen neben leeren Bereichen dargestellt werden.

Cap-Endpunkte von Spaltensegmenten treten nur am Containerrand und an inneren Abständen auf, an denen keine weiteren Spalten- oder Zeilentrennliniensegmente vorhanden sind. Ob Segmente dargestellt werden – oder dargestellt würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre –, beeinflusst daher, welche Spaltensegmente am Anfang einen Cap-Endpunkt haben.

In der folgenden Demonstration beginnen die Spaltentrennliniensegmente mit durchgezogenem Linienstil an einem Cap-Endpunkt. Bei `column-rule-inset-cap-start: 16px` werden alle Cap-Segmente an der oberen Kante des Containers um `16px` eingerückt. Ändern Sie den Einzugswert vom Typ `<length>`, um besser zu erkennen, welche Segmente mit einem Cap-Endpunkt beginnen.

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
  column-rule: 10px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: normal;
  rule-break: intersection;
  column-rule-inset-cap-start: 16px;

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
li:nth-of-type(n + 9) {
  grid-row: 3 / 4;
}
li:nth-of-type(n + 12) {
  grid-row: 4 / 5;
}
li:nth-of-type(10) {
  grid-column: 5/6;
}
li:nth-of-type(11) {
  grid-column: 6/7;
}

@layer no-support {
  @supports not (column-rule-inset-cap-start: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap-start property";
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
  column-rule-inset-cap-start: 100%;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.columnRuleInsetCapStart = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "solid, repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "400")}}

Ändern Sie den Einzug. Bei `0px` fluchtet der Anfang der Spaltentrennlinien mit der Anfangskante des Containers. Dies ist die Standardeinstellung. Bei `-32px` werden die Segmente um `32px` nach außen verschoben, sodass die Linien `32px` über die Anfangskante des Containers hinaus gezeichnet werden. Da Spaltentrennlinien das Boxmodell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert wird eine Trennlinie in einem Abstandssegment nur dargestellt, wenn beide angrenzenden Bereiche von Elementen belegt sind. Ändern Sie den Einzug und beobachten Sie dabei die drei Spaltentrennlinien mit doppeltem Linienstil: Neben einem Cap-Endpunkt an der Anfangskante des Containers haben diese Trennlinien jeweils einen weiteren Cap-Endpunkt. Ihre Spaltentrennliniensegmente beginnen an inneren Abständen, an denen keine Zeilentrennliniensegmente vorhanden sind. Daher sind auch diese Segmentanfänge Cap-Endpunkte und werden von `column-rule-inset-cap-start` beeinflusst.

Bei `around` als Wert für `rule-visibility-items` wird eine Trennlinie in einem Abstandssegment dargestellt, sobald einer der angrenzenden Bereiche von einem Element belegt ist. In diesen Fällen befindet sich am oberen Ende der Segmente an den inneren Abständen ein Zeilentrennliniensegment. Die Anfänge dieser Spaltensegmente sind Verbindungs-Endpunkte, keine Cap-Endpunkte, und werden daher nicht von `column-rule-inset-cap-start` beeinflusst. Ihr Einzug kann mit {{cssxref("column-rule-inset-junction-start")}} gesteuert werden.

### Prozentwerte verstehen

Die Bezugsgröße eines Prozentwerts hängt von der Position des Endpunkts ab. An inneren Endpunkten beziehen sich Prozentwerte auf die Breite des Abstands am Cap-Endpunkt, also auf {{cssxref("row-gap")}}, wenn dort ein Abstand für Trennlinien angrenzt. An der oberen Kante des Containers beziehen sie sich auf `0`.

Dieses Beispiel ist nicht fehlerhaft: Alle Cap-Segmente beginnen am Containerrand, sodass ihre Einzüge standardmäßig `0` betragen.

{{EmbedLiveSample("percents", "", "400")}}

Wenn Sie `around` als Wert für `rule-visibility-items` wählen, wird ebenfalls keines der Segmente eingerückt. Prozentuale Einzüge der Spaltensegmente, die am Containerrand beginnen, werden alle zu `0` aufgelöst. Spaltensegmente, die an inneren Abständen beginnen, haben dort dagegen keinen Cap-Endpunkt: An diesen Kreuzungen sind Zeilentrennliniensegmente vorhanden. Ihr Einzug wird stattdessen durch `column-rule-inset-junction-start` bestimmt.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die Spaltentrennlinien mit zwei Cap-Endpunkten am Segmentanfang haben den Linienstil `double`. Wie zuvor beginnt bei jeder von ihnen ein Spaltentrennliniensegment an einem inneren Abstand, an dem keine weiteren Trennliniensegmente vorhanden sind. Für diese Segmente bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("row-gap")}}, die hier `20px` beträgt.

Bei `100%` wird der Anfang der Cap-Segmente um `20px` eingerückt. Bei `-200%` werden diese Segmente um `40px` nach außen verschoben: Die Linien verlaufen durch den `20px` breiten Abstand und ragen weitere `20px` in die Zeile oberhalb der Elemente hinein. Wäre der negative Wert größer als die Summe aus der Höhe der ersten Zeile und dem Zeilenabstand, würde die Trennlinie über die Anfangskante des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-cap-start` die Anfangskante von Cap-Segmenten in Flex-Containern einrücken.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den Containern besteht darin, dass der zweite zusätzlich die Klasse `column` hat.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Zeilen- als auch in Spaltenabständen dargestellt wird. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, sodass die Spaltenabstände mit einem dunkleren `blue` hervorgehoben werden. Schließlich setzen wir `column-rule-inset-cap-start` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;

  column-rule-inset-cap-start: 16px;
}
```

Danach setzen wir {{cssxref("flex-direction")}} für den Container `.column`, damit seine Elemente in Spalten statt in Zeilen angeordnet werden.

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
@layer no-support {
  @supports not (column-rule-inset-cap-start: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-cap-start property";
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
  containers[0].style.columnRuleInsetCapStart = val;
  containers[1].style.columnRuleInsetCapStart = val;
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

- {{cssxref("row-rule-inset-cap-start")}}
- {{cssxref("column-rule-inset-cap-end")}}
- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset-start")}}-Kurzschreibweise
- {{cssxref("column-rule-inset-cap")}}-Kurzschreibweise
- {{cssxref("column-rule-inset")}}-Kurzschreibweise
- {{cssxref("rule-inset-start")}}-Kurzschreibweise
- {{cssxref("rule-inset-cap")}}
- {{cssxref("rule-inset")}}-Kurzschreibweise
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}}-Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
