---
title: "`column-rule-inset-cap-start` CSS property"
short-title: column-rule-inset-cap-start
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-start
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-cap-start`** können Sie den oberen Rand von [Cap-Endpunkten](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) der Spaltentrennliniensegmente am Anfangsrand des Containers sowie von Cap-Endpunkten, an denen keine anderen Trennliniensegmente zusammentreffen, versetzen.

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
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Cap-Endpunkt: maßgeblich ist entweder die Breite von `row-gap` oder `0`.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-cap-start` können Sie den Anfangsrand von [Cap-Segment-Endpunkten](/de/docs/Web/CSS/Reference/Properties/column-rule-inset-cap#understanding_cap_endpoints) einrücken. Der Standardwert ist `0`; er entspricht `overlap-join`. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Spaltentrennlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente befinden sich zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in mehrspaltigen Layouts.

Längenwerte für `column-rule-inset-cap-start` rücken Segmente um den angegebenen Wert ein – sowohl an inneren Cap-Segmenten als auch an solchen am Containerrand. Negative Längenwerte bewirken einen Überstand; dabei reichen Cap-Segmente am Containerrand über dessen Anfangsrand hinaus.

[Prozentwerte](#prozentwerte_verstehen) beziehen sich bei inneren Segmenten auf die Größe von {{cssxref("row-gap")}}. Bei Cap-Segmenten am Anfangsrand des Containers beziehen sie sich auf `0`. Prozentwerte können daher nicht dazu führen, dass Cap-Segment-Endpunkte am Anfangsrand des Containers über den Container hinausragen.

Die Eigenschaft `column-rule-inset-cap-start` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl Cap-Segmente am Anfang als auch am Ende einzurücken, können Sie `column-rule-inset-cap-start` zusammen mit {{cssxref("column-rule-inset-cap-end")}} über die Kurzschreibweise {{cssxref("column-rule-inset-cap")}} festlegen.

- Um den Anfang aller Spaltensegment-Endpunkte einzurücken, können Sie `column-rule-inset-cap-start` zusammen mit {{cssxref("column-rule-inset-junction-end")}} über die Kurzschreibweise {{cssxref("column-rule-inset-end")}} festlegen.

Alle Segment-Endpunkte, einschließlich der Entsprechungen dieser Eigenschaft für `-end`, `-junction` und `row-`, lassen sich mit der Kurzschreibweise {{cssxref("rule-inset")}} festlegen.

### Cap-Anfänge verstehen

Ein _Cap-Segment-Endpunkt_ ist jeder Segment-Endpunkt, der kein Verbindungs-Endpunkt ist. Dazu gehören Endpunkte an den Inhaltsrändern des Containers sowie Endpunkte an einer Lücke, an der keine anderen Trennliniensegmente zusammentreffen.

Die Eigenschaft `column-rule-inset-cap-start` steuert den Einzug des oberen Rands von Cap-Segment-Endpunkten einer Spaltentrennlinie. Damit lassen sich die Segmente verkürzen oder verlängern. Dies gilt sowohl für Spaltentrennliniensegmente, die am oberen Containerrand beginnen, als auch für Segmente, deren oberes Ende an einer inneren Lücke ohne weitere Spalten- oder Zeilentrennliniensegmente liegt.

Cap-Segment-Endpunkte von Spaltentrennlinien werden nicht durch die Werte der Eigenschaft `column-rule-break` beeinflusst; diese steuert nur Unterbrechungen an Verbindungen. Die Eigenschaften {{cssxref("rule-visibility-items")}} wirken sich jedoch auf sie aus: Sie bestimmen, ob Spalten- und Zeilentrennliniensegmente in Lücken neben leeren Bereichen gezeichnet werden.

Cap-Segment-Endpunkte von Spaltentrennlinien gibt es nur am Containerrand und an inneren Lücken, an denen keine anderen Spalten- oder Zeilentrennliniensegmente zusammentreffen. Ob Segmente gezeichnet werden – oder gezeichnet würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre –, beeinflusst daher, welche Spaltensegmente Cap-Anfänge haben.

In der folgenden Demonstration beginnen die Spaltentrennliniensegmente mit durchgezogenem Linienstil an einem Cap-Endpunkt. Mit `column-rule-inset-cap-start: 16px` werden alle Cap-Segmente am oberen Containerrand um `16px` eingerückt. Ändern Sie den `<length>`-Wert des Einzugs, um besser zu erkennen, welche Segmente an Cap-Segment-Endpunkten beginnen.

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

Ändern Sie den Einzug. Bei `0px` stimmen die Anfänge der Spaltentrennlinien mit dem Anfangsrand des Containers überein. Das ist der Standardwert. Mit `-32px` ragen die Segmente um `32px` über den Anfangsrand des Containers hinaus. Da Spaltentrennlinien das Box-Modell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Trennlinien in einem Lückensegment nur gezeichnet, wenn die beiden angrenzenden Bereiche Elemente enthalten. Ändern Sie den Einzug und beobachten Sie dabei die drei Spaltentrennlinien mit doppeltem Linienstil: Neben einem Cap-Endpunkt am Anfangsrand des Containers haben diese Trennlinien jeweils einen weiteren Cap-Endpunkt. Ihre Spaltentrennliniensegmente beginnen an inneren Lücken, an denen keine Zeilentrennliniensegmente vorhanden sind. Daher beginnen auch diese Spaltensegmente an Cap-Segment-Endpunkten und werden von `column-rule-inset-cap-start` beeinflusst.

Wenn Sie `around` als Wert für `rule-visibility-items` wählen, werden Trennlinien in einem Lückensegment gezeichnet, sobald einer der angrenzenden Bereiche ein Element enthält. In diesen Fällen befindet sich am oberen Ende der Segmente in den inneren Lücken ein Zeilentrennliniensegment. Die Anfänge dieser Segmente sind Verbindungs-Endpunkte und keine Cap-Segment-Endpunkte; `column-rule-inset-cap-start` wirkt sich daher nicht auf sie aus. Den Einzug dieser an einer inneren Verbindung beginnenden Spaltensegmente können Sie mit {{cssxref("column-rule-inset-junction-start")}} steuern.

### Prozentwerte verstehen

Welche Länge einem Prozentwert zugrunde liegt, hängt von der Position des Endpunkts ab. An inneren Endpunkten beziehen sich Prozentwerte auf die Breite der Lücke am Cap-Endpunkt – bei einer angrenzenden Trennlinienlücke also auf {{cssxref("row-gap")}}. Am oberen Containerrand beziehen sie sich auf `0`.

Dieses Beispiel ist nicht fehlerhaft: Alle Cap-Segmente beginnen am Containerrand, sodass alle Einzüge standardmäßig `0` betragen.

{{EmbedLiveSample("percents", "", "400")}}

Auch wenn Sie `around` als Wert für `rule-visibility-items` wählen, wird keines der Segmente eingerückt. Prozentuale Einzüge für Spaltensegmente, die am Containerrand beginnen, werden sämtlich zu `0` aufgelöst. Spaltensegmente, die an inneren Lücken beginnen, haben dagegen an den Schnittpunkten mit Zeilentrennliniensegmenten keinen Cap-Segment-Endpunkt. Ihr Einzug wird deshalb stattdessen durch `column-rule-inset-junction-start` bestimmt.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die Spaltentrennlinien mit zwei Cap-Anfangssegmenten haben den Linienstil `double`. Wie zuvor besitzt jede davon ein Spaltentrennliniensegment, das an einer inneren Lücke ohne andere Trennliniensegmente beginnt. Für diese Segmente bezieht sich der prozentuale Versatz auf die Breite von {{cssxref("row-gap")}}, die hier `20px` beträgt.

Bei `100%` werden die Anfänge der Cap-Segmente um `20px` eingerückt. Bei `-200%` ragen diese Segmente um `40px` über ihren Anfang hinaus: Die Linien verlaufen durch die `20px` breite Lücke und ragen weitere `20px` in die Zeile oberhalb der Elemente hinein. Wäre der negative Wert größer als die Summe aus der Höhe der ersten Zeile und der Zeilenlücke, würde die Trennlinie über den Anfangsrand des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-cap-start` den Anfangsrand von Cap-Segmenten in Flex-Containern einrücken.

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

Mit {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Zeilen- als auch in Spaltenlücken gezeichnet wird. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, um für die Spaltenlücken ein dunkleres `blue` festzulegen. Zum Schluss setzen wir `column-rule-inset-cap-start` auf `16px`.

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
