---
title: "`row-rule-inset-cap-end` CSS property"
short-title: row-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/row-rule-inset-cap-end
l10n:
  sourceCommit: 2c2390b77141b960cac32c1843dac4d907e9c6c2
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`row-rule-inset-cap-end`** kann das Ende von Zeilenliniensegmenten an ihren [Kappenendpunkten](#kappenendpunkte_verstehen) versetzt werden.

{{InteractiveExample("CSS Demo: rule")}}

```css interactive-example-choice
row-rule-inset-cap-end: -20px;
```

```css interactive-example-choice
row-rule-inset-cap-end: 1.25em;
```

```css interactive-example-choice
row-rule-inset-cap-end: 0;
```

```css interactive-example-choice
row-rule-inset-cap-end: 100%;
```

```css interactive-example-choice
row-rule-inset-cap-end: overlap-join;
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
    <i>R</i>

    <i id="u">U</i>
    <i id="x">X</i>
    <i id="y">Y</i>
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
#u {
  grid-row: 3 / 4;
  grid-column: 7 / 8;
}
#y {
  grid-row: 4 / 5;
  grid-column: 4 / 5;
}
#x {
  grid-column: 3 / 4;
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
row-rule-inset-cap-end: overlap-join;

/* <length-percentage> values */
row-rule-inset-cap-end: 0;
row-rule-inset-cap-end: 1rem;
row-rule-inset-cap-end: -15px;
row-rule-inset-cap-end: -50%;

/* Global values */
row-rule-inset-cap-end: inherit;
row-rule-inset-cap-end: initial;
row-rule-inset-cap-end: revert;
row-rule-inset-cap-end: revert-layer;
row-rule-inset-cap-end: unset;
```

### Werte

Diese Eigenschaft wird mit einem einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Wird zu `0` aufgelöst.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Kappenendpunkt: Maßgeblich ist entweder die Breite von `column-gap` oder `0`.

## Beschreibung

Mit der Eigenschaft `row-rule-inset-cap-end` kann die Endkante von Zeilenliniensegmenten an [Kappenendpunkten](#kappenendpunkte_verstehen) eingezogen werden. Das betrifft Endpunkte an der Endkante des Containers sowie Endpunkte, an denen sich keine Liniensegmente schneiden. Der Standardwert ist `0` und entspricht damit `overlap-join`. Positive Werte verkürzen das Zeilenliniensegment, negative Werte verlängern es.

Zeilenlinien werden innerhalb eines Zeilenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente liegen zwischen:

- benachbarten Zeilen in CSS-Grid-Layouts,
- benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`,
- benachbarten Zeilen in mehrspaltigen Layouts, wenn {{cssxref("column-height")}} auf einen {{cssxref("&lt;length>")}}-Wert gesetzt ist.

Ob sich eine Zeilenlinie über mehrere Spalten erstreckt oder in mehrere Segmente aufgeteilt wird, legt die Eigenschaft {{cssxref("row-rule-break")}} fest. Unterbrechungen zwischen Zeilenliniensegmenten innerhalb des Containers haben die durch {{cssxref("column-gap")}} angegebene Breite.

Ein Längenwert für `row-rule-inset-cap-end` bewirkt sowohl bei inneren Kappensegmenten als auch bei Kappensegmenten an der Endkante einen Einzug um den angegebenen Wert. Negative Längenwerte bewirken einen Versatz nach außen; dabei reichen Kappensegmente an der Endkante über die Endkante des Containers hinaus.

[Prozentwerte](#prozentwerte_verstehen) für Einzüge an inneren Kappenendpunkten beziehen sich auf die Größe von {{cssxref("column-gap")}}. Bei Kappensegmenten an der Endkante beziehen sich Prozentwerte auf `0`. Daher bewirken Prozentwerte an der Endkante des Containers weder einen Einzug noch einen Versatz nach außen.

Die Eigenschaft `row-rule-inset-cap-end` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um sowohl den Anfang als auch das Ende von Zeilenlinienkappen einzuziehen, können `row-rule-inset-cap-end` und {{cssxref("row-rule-inset-cap-start")}} über die Kurzschreibweise {{cssxref("row-rule-inset-cap")}} gesetzt werden.

- Um die Enden aller Zeilenliniensegmente einzuziehen, können `row-rule-inset-cap-end` und {{cssxref("row-rule-inset-junction-end")}} über die Kurzschreibweise {{cssxref("row-rule-inset-end")}} gesetzt werden.

Alle Segmentendpunkte, einschließlich der Entsprechungen dieser Eigenschaft mit `-start`, `-junction` und `column-`, können über die Kurzschreibweise {{cssxref("rule-inset")}} gesetzt werden.

### Kappenendpunkte verstehen

Ein _Kappenendpunkt_ ist ein Segmentendpunkt, der kein Verbindungspunkt ist. Dazu gehören Endpunkte an den Inhaltskanten des Containers sowie Endpunkte an Kreuzungen von Abständen, an denen keine weiteren Spalten- oder Zeilenliniensegmente vorhanden sind.

`row-rule-inset-cap-end` steuert den Einzug von Kappenendpunkten am Ende eines Zeilenliniensegments. Abhängig vom Schreibmodus kann die Eigenschaft die rechte oder linke Kante von Zeilenliniensegmenten einziehen – sowohl an inneren Abständen ohne weitere Zeilen- oder Spaltenliniensegmente als auch an der Endkante des Containers.

Diese Eigenschaft wird von den {{cssxref("rule-visibility-items")}}-Eigenschaften beeinflusst. Sie legen fest, ob Zeilen- und Spaltenliniensegmente in Abständen neben leeren Bereichen gezeichnet werden. Kappenendpunkte von Zeilenlinien gibt es nur an der Endkante des Containers und an inneren Abständen, an denen keine weiteren Zeilen- oder Spaltenliniensegmente vorhanden sind. Ob Segmente gezeichnet werden (oder gezeichnet würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre), bestimmt daher, welche Zeilenliniensegmente an einem Kappenendpunkt enden.

In der folgenden Demonstration enden die Zeilenliniensegmente mit durchgezogenem Linienstil an einem Kappenendpunkt. Wenn `row-rule-inset-cap-end: 16px` gesetzt ist, werden alle diese Endpunkte um `16px` eingezogen. Ändern Sie den `<length>`-Wert des Einzugs, um besser zu erkennen, welche Segmente an einem Kappenendpunkt enden.

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
  <li class="a">18</li>
  <li class="b">22</li>
  <li class="c">24</li>
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
  rule-overlap: row-over-column;
  rule-visibility-items: normal;
  rule-break: intersection;
  row-rule-inset-cap-end: -32px;

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
.a {
  grid-column: 5 / 6;
  grid-row: 3 / 4;
}
.b {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
}
.c {
  grid-column: 5 / 6;
  grid-row: 4 / 5;
}
@layer no-support {
  @supports not (row-rule-inset-cap-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap-end property";
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
  row-rule-inset-cap-end: 100%;
  row-rule-style: inset;
}
```

```js hidden live-sample___caps live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  output.innerText =
    ul.style.rowRuleInsetCapEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___caps
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(2, solid), double";
  } else if (visibility.value == "around") {
    ul.style.rowRuleStyle = "repeat(3, solid), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

```js hidden live-sample___percents
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value == "between") {
    ul.style.rowRuleStyle = "repeat(2, inset), double, repeat(2, solid)";
  } else if (visibility.value == "around") {
    ul.style.rowRuleStyle = "repeat(3, inset), repeat(2, double)";
  } else {
    ul.style.rowRuleStyle = "solid";
  }
});
```

{{EmbedLiveSample("caps", "", "400")}}

Mit `-32px` werden die Enden aller Zeilenlinien um `32px` nach außen versetzt: Die Linien werden `32px` über die rechte Kante des Containers hinaus gezeichnet. Da Zeilenlinien das Boxmodell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus. Bei `0px` schließen die Enden der Zeilenlinien mit der Containerkante ab. Dies ist der Standardwert.

Die Zeilenliniensegmente mit doppeltem Linienstil, die erscheinen, wenn die Eigenschaft `rule-visibility-items` auf `between` gesetzt ist, erzeugen einen zusätzlichen Kappenendpunkt. Der Wert `between` zeichnet Linien nur in Abstandssegmenten zwischen zwei benachbarten Bereichen, die von einem Element belegt sind. Das Zeilenliniensegment oberhalb von Element `24` endet an einer Kreuzung ohne weitere Zeilen- oder Spaltenliniensegmente. Sein Endpunkt ist daher ein Kappenendpunkt und wird von `row-rule-inset-cap-end` beeinflusst. Das Segment oberhalb von Element `22` endet dagegen an einer Kreuzung, an der ein weiteres Liniensegment vorhanden ist; sein Endpunkt ist somit kein Kappenendpunkt. An die rechte Kante des Containers grenzen nun weniger Segmente. Das verbleibende Segment zwischen `6` und `12` endet dort aber weiterhin an einem Kappenendpunkt.

Liniensegmente, die an die Endkante des Containers grenzen, sind immer Zeilenliniensegmente mit einem Kappenendpunkt am Ende und werden vom Wert der Eigenschaft `row-rule-inset-cap-end` beeinflusst.

### Prozentwerte verstehen

Auf welche Länge sich ein Prozentwert bezieht, hängt von der Position des Endpunkts ab. Prozentwerte für innere Endpunkte beziehen sich auf die Breite des Abstands am Kappenendpunkt: Wenn der Endpunkt an einen Linienabstand grenzt, ist {{cssxref("column-gap")}} maßgeblich; an der oberen Kante des Containers ist der Bezugswert `0`.

Dieses Beispiel ist nicht fehlerhaft: Alle Kappensegmente enden an der Kante des Containers. Daher sind alle Einzüge standardmäßig `0`.

{{EmbedLiveSample("percents", "", "400")}}

Wenn Sie für `rule-visibility-items` den Wert `around` auswählen, liegen die einzigen Kappenendpunkte an der Kante des Containers. Einzüge mit Prozentwerten werden daher weiterhin zu `0` aufgelöst.

Wählen Sie für `rule-visibility-items` den Wert `between`. Nun gibt es einen Kappenendpunkt am Ende einer Zeilenlinie, der vom Einzug beeinflusst wird – am Segment zwischen den Grid-Elementen `18` und `24`! Dieses Segment endet an einem inneren Abstand ohne weitere Liniensegmente. Der prozentuale Einzug bezieht sich deshalb auf die Breite von {{cssxref("column-gap")}}, die hier `20px` beträgt. Mit `100%` wird das Ende um `20px` eingezogen. Mit `-200%` wird das Segment um `40px` nach außen versetzt, sodass die Linien durch den `20px` breiten Abstand bis in die nächste Spalte gezeichnet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie mit `row-rule-inset-cap-end` die Endkante von Kappensegmenten in Flex-Containern eingezogen wird.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Spalten- als auch in Zeilenabständen gezeichnet wird. Anschließend überschreiben wir {{cssxref("row-rule-color")}}, um die vertikalen Abstände mit einem dunkleren `blue` zu gestalten. Zum Schluss setzen wir `row-rule-inset-cap-end` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  row-rule-color: blue;

  row-rule-inset-cap-end: 16px;
}
```

Außerdem setzen wir {{cssxref("flex-direction")}} für den Container `.column`, um die Hauptachse des Flex-Containers zu ändern und die Elemente in Spalten statt in Zeilen anzuordnen. Der übrige CSS-Code ist der Kürze halber ausgeblendet.

```css
.column {
  flex-direction: column;
}
```

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
  @supports not (row-rule-inset-cap-end: 16px) {
    body::before {
      content: "Your browser doesn't support the row-rule-inset-cap-end property";
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
  containers[0].style.rowRuleInsetCapEnd = val;
  containers[1].style.rowRuleInsetCapEnd = val;
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

- Kurzschreibweise {{cssxref("row-rule-inset")}}
- Kurzschreibweise {{cssxref("rule-inset")}}
- {{cssxref("row-rule-break")}}
- Kurzschreibweise {{cssxref("rule-break")}}
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- Kurzschreibweise {{cssxref("rule")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
