---
title: "`column-rule-inset-cap-start` CSS property"
short-title: column-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-start
l10n:
  sourceCommit: 2c2390b77141b960cac32c1843dac4d907e9c6c2
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-cap-start`** können die oberen Enden von Spaltentrennliniensegmenten, die [Abschlussendpunkte](#understanding_cap_end) sind, am Anfangsrand des Containers sowie Abschlussendpunkte, an denen keine anderen Trennliniensegmente zusammentreffen, versetzt werden.

{{InteractiveExample("CSS Demo: rule")}}

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
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Abschlussendpunkt: Dort entspricht die Bezugsgröße entweder der Breite von `row-gap` oder `0`.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-cap-start` kann der Anfangsrand von [Abschlussendpunkten von Segmenten](#understanding_cap_end) eingezogen werden. Der Standardwert ist `0`, was `overlap-join` entspricht. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Spaltentrennlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente liegen zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in mehrspaltigen Layouts.

Längenwerte für `column-rule-inset-cap-start` ziehen sowohl Segmente mit inneren Abschlussendpunkten als auch Segmente mit Abschlussendpunkten am Containerrand um den angegebenen Wert ein. Negative Längenwerte bewirken einen Überstand; Segmente mit Abschlussendpunkten am Containerrand reichen dann über dessen Anfangsrand hinaus.

[Prozentwerte](#prozentwerte_verstehen) für innere Segmente beziehen sich auf die Größe von {{cssxref("row-gap")}}. Bei Abschlussendpunkten am Anfangsrand des Containers beziehen sich Prozentwerte auf `0`. Prozentwerte können daher nicht bewirken, dass Abschlussendpunkte am Anfangsrand über den Container hinausragen.

Die Eigenschaft `column-rule-inset-cap-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl die Anfangs- als auch die Endabschlüsse einzuziehen, können `column-rule-inset-cap-start` und {{cssxref("column-rule-inset-cap-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-cap")}} gesetzt werden.

- Um den Anfang aller Spaltentrennliniensegmente einzuziehen, können `column-rule-inset-cap-start` und {{cssxref("column-rule-inset-junction-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-end")}} gesetzt werden.

Alle Segmentendpunkte, einschließlich der entsprechenden Eigenschaften mit `-end`, `-junction` und `row-`, können mit der Kurzschreibweise {{cssxref("rule-inset")}} gesetzt werden.

### Abschluss am Anfang verstehen

Ein _Abschlussendpunkt eines Segments_ ist jeder Segmentendpunkt, der kein Verbindungsendpunkt ist. Dazu gehören Endpunkte an den Inhaltsrändern des Containers sowie Endpunkte an einer Abstandskreuzung, an der keine anderen Trennliniensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap-start` steuert den Einzug der oberen Kante von Abschlussendpunkten von Spaltentrennliniensegmenten. Damit lassen sich die Segmente verkürzen oder verlängern. Anders ausgedrückt: Die Eigenschaft kann die obere Kante von Spaltentrennliniensegmenten verkürzen oder verlängern, die am oberen Rand des Containers anliegen oder deren oberes Ende an einem inneren Abstand liegt, an dem keine anderen Spalten- oder Zeilentrennliniensegmente vorhanden sind.

Abschlussendpunkte von Spaltentrennliniensegmenten werden nicht durch die Einstellungen der Eigenschaft `column-rule-break` beeinflusst; diese steuern nur Unterbrechungen an Verbindungen. Sie werden jedoch durch die Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese legen fest, ob Spalten- und Zeilentrennliniensegmente in Abständen neben leeren Bereichen gezeichnet werden.

Abschlussendpunkte von Spaltentrennliniensegmenten gibt es nur am Rand des Containers und an inneren Abständen, an denen keine anderen Spalten- oder Zeilentrennliniensegmente vorhanden sind. Ob Segmente gezeichnet werden – oder gezeichnet würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre –, beeinflusst somit, welche Spaltensegmente einen Abschlussendpunkt am Anfang haben.

In der folgenden Demonstration beginnen die oberen Enden der durchgezogen dargestellten Spaltentrennliniensegmente an einem Abschlussendpunkt. Bei `column-rule-inset-cap-start: 16px` sind alle oberen Abschlussendpunkte am Containerrand um `16px` eingezogen. Ändern Sie den `<length>`-Wert des Einzugs, um besser zu erkennen, welche Segmente mit einem Abschlussendpunkt beginnen.

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
  if (visibility.value == "between") {
    ul.style.columnRuleStyle = "solid, repeat(2, double)";
  } else {
    ul.style.columnRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "400")}}

Ändern Sie den Einzug. Bei `0px` liegt der Anfang der Spaltentrennlinien auf einer Linie mit dem Anfang des Containers. Dies ist der Standard. Mit `-32px` stehen die Segmente um `32px` über den Anfangsrand des Containers hinaus. Da Spaltentrennlinien keinen Einfluss auf das Boxmodell haben, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Trennlinien in einem Abstandssegment nur gezeichnet, wenn beide angrenzenden Bereiche Elemente enthalten. Ändern Sie den Einzug und beobachten Sie dabei die drei doppelt dargestellten Spaltentrennlinien: Neben einem Abschlussendpunkt am Anfangsrand des Containers haben diese Trennlinien jeweils einen weiteren Abschlussendpunkt. Ihre Spaltentrennliniensegmente beginnen an inneren Abständen, an denen keine Zeilentrennliniensegmente vorhanden sind. Deshalb beginnen auch diese Segmente an Abschlussendpunkten und werden von `column-rule-inset-cap-start` beeinflusst.

Wenn Sie `around` als Wert für `rule-visibility-items` auswählen, werden Trennlinien in einem Abstandssegment gezeichnet, solange einer der angrenzenden Bereiche ein Element enthält. In diesen Fällen befindet sich am oberen Ende der Segmente an den inneren Abständen ein Zeilentrennliniensegment. Der Anfang dieser Spaltensegmente ist ein Verbindungsendpunkt und kein Abschlussendpunkt; er wird daher nicht von `column-rule-inset-cap-start` beeinflusst. Der Einzug solcher Spaltensegmente, die an einer inneren Abstandskreuzung beginnen, kann mit {{cssxref("column-rule-inset-junction-start")}} gesteuert werden.

### Prozentwerte verstehen

Die Bezugsgröße eines Prozentwerts hängt von der Position des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite des Abstands am Abschlussendpunkt: Liegt dieser an einem Abstand mit einer Trennlinie, ist {{cssxref("row-gap")}} maßgeblich; am oberen Rand des Containers beträgt die Bezugsgröße `0`.

Dieses Beispiel ist nicht fehlerhaft: Alle Abschlusssegmente beginnen am Rand des Containers, daher betragen ihre Einzüge standardmäßig `0`.

{{EmbedLiveSample("percents", "", "400")}}

Wenn Sie `around` als Wert für `rule-visibility-items` auswählen, wird ebenfalls keines der Segmente eingezogen. Prozentuale Einzüge für Spaltensegmente, die am Containerrand beginnen, werden alle zu `0` aufgelöst. Spaltensegmente, die an inneren Abständen beginnen, haben dagegen an Kreuzungen mit Zeilentrennliniensegmenten eine darüber gezeichnete Linie. Sie beginnen nicht mit einem Abschlussendpunkt; ihr Einzug wird stattdessen durch `column-rule-inset-junction-start` festgelegt.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die Spaltentrennlinien mit zwei Segmenten, die an Abschlussendpunkten beginnen, verwenden den Linienstil `double`. Wie zuvor beginnt bei jeder dieser Trennlinien ein Spaltentrennliniensegment an einem inneren Abstand, an dem keine anderen Trennliniensegmente vorhanden sind. Hier bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("row-gap")}}, die in diesem Fall `20px` beträgt.

Bei `100%` wird der Anfang der Abschlusssegmente um `20px` eingezogen. Bei `-200%` stehen diese Segmente um `40px` über: Die Linien verlaufen durch den `20px` breiten Abstand und ragen weitere `20px` in die Zeile oberhalb der Elemente hinein. Wäre der negative Wert größer als die Summe aus der Höhe der ersten Zeile und dem Zeilenabstand, würde die Trennlinie über den Anfangsrand des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `column-rule-inset-cap-start` verwendet wird, um den Anfangsrand von Abschlusssegmenten in Flex-Containern einzuziehen.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Zeilen- als auch in Spaltenabständen gezeichnet wird. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, sodass die Spaltenabstände mit einem dunkleren `blue` hervorgehoben werden. Schließlich setzen wir `column-rule-inset-cap-start` auf `16px`.

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
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
