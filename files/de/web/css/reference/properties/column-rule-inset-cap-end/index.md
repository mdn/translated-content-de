---
title: "`column-rule-inset-cap-end` CSS property"
short-title: column-rule-inset-cap-end
slug: Web/CSS/Reference/Properties/column-rule-inset-cap-end
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-cap-end`** können die unteren Enden von Spaltenliniensegmenten an [Abschlussendpunkten](#abschlussendpunkte_verstehen) versetzt werden – sowohl am Endrand des Containers als auch dort, wo keine anderen Liniensegmente aufeinandertreffen.

{{InteractiveExample("CSS Demo: column-rule-inset-cap-end")}}

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

Diese Eigenschaft wird durch einen einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Entspricht `0`.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Abschlussendpunkt: entweder auf die Breite des `row-gap` oder auf `0`.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-cap-end` lässt sich der Endrand von [Abschlussendpunkten von Segmenten](#abschlussendpunkte_verstehen) einziehen. Der Standardwert ist `0` und entspricht damit `overlap-join`. Positive Werte verkürzen das Segment, negative Werte verlängern es.

Spaltenlinien werden innerhalb eines Spaltenabstands als ein oder mehrere Segmente gezeichnet. Solche Segmente liegen zwischen:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Spalten in mehrspaltigen Layouts.

Ob sich eine Spaltenlinie über mehrere Zeilen erstreckt oder in mehrere Segmente aufgeteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Innere Unterbrechungen zwischen Spaltenliniensegmenten haben die Größe des {{cssxref("row-gap")}}.

`column-rule-inset-cap-end`-Werte mit einer Längeneinheit ziehen Segmente um den angegebenen Wert ein – sowohl an inneren Abschlusssegmenten als auch an solchen am Endrand. Negative Längenwerte verlängern die Segmente nach außen; Abschlusssegmente am Endrand reichen dann über den Endrand des Containers hinaus.

[Prozentwerte](#prozentwerte_verstehen) beziehen sich bei inneren Segmenten auf die Größe des {{cssxref("row-gap")}}. Bei Abschlusssegmenten am Endrand beziehen sie sich auf `0`. Prozentwerte führen daher nie dazu, dass Abschlussendpunkte am Endrand des Containers über den Container hinausragen.

Die Eigenschaft `column-rule-inset-cap-end` ist eine Teileigenschaft mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die Abschlüsse am Anfang und Ende einzuziehen, können `column-rule-inset-cap-end` und {{cssxref("column-rule-inset-cap-start")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-cap")}} festgelegt werden.

- Um die Enden aller Spaltensegmente einzuziehen, können `column-rule-inset-cap-end` und {{cssxref("column-rule-inset-junction-end")}} mit der Kurzschreibweise {{cssxref("column-rule-inset-end")}} festgelegt werden.

- Um alle Abschluss- und Verbindungsendpunkte von Zeilen- und Spaltenlinien einzuziehen, können `column-rule-inset-end` und {{cssxref("row-rule-inset-end")}} mit der Kurzschreibweise {{cssxref("rule-inset-end")}} festgelegt werden.

Alle Segmentendpunkte, einschließlich der Entsprechungen dieser Eigenschaft für `-start`, `-junction` und `row-`, können mit der Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Abschlussendpunkte verstehen

Ein _Abschlussendpunkt eines Segments_ ist jeder Segmentendpunkt, der kein Verbindungsendpunkt ist. Dazu gehören Endpunkte an den Inhaltsrändern des Containers sowie Endpunkte an einer Kreuzung von Abständen, an der keine weiteren Linien- oder Spaltensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-cap-end` steuert den Einzug am unteren Rand von Abschlussendpunkten der Spaltenliniensegmente. Dadurch lassen sich die Segmente verkürzen oder verlängern.

Abschlussendpunkte von Spaltenliniensegmenten werden nicht durch die Werte der Eigenschaft `column-rule-break` beeinflusst, da diese nur Unterbrechungen an Verbindungsendpunkten steuert. Sie werden jedoch durch die Eigenschaften {{cssxref("rule-visibility-items")}} beeinflusst. Diese bestimmen, ob Spalten- und Zeilenliniensegmente in Abständen neben leeren Bereichen gezeichnet werden.

Abschlussendpunkte von Spaltenliniensegmenten gibt es nur am Endrand des Containers und an inneren Abständen, an denen keine anderen Spalten- oder Zeilenliniensegmente vorhanden sind. Ob Segmente gezeichnet werden – oder gezeichnet würden, wenn `rule` auf einen sichtbaren Wert gesetzt wäre –, beeinflusst daher, welche Spaltensegmente Abschlusssegmente sind.

In der folgenden Demonstration enden die Spaltenliniensegmente unten an Abschlussendpunkten. Mit `column-rule-inset-cap-end: 16px` werden alle Spaltensegmente um `16px` eingezogen. Ändern Sie den `<length>`-Wert für den Einzug, um besser zu erkennen, welche Segmente an Abschlussendpunkten enden.

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

Ändern Sie den Einzug. Bei `0px` sind die Enden der Spaltenlinien am Endrand des Containers ausgerichtet. Dies ist die Standardeinstellung. Mit `-32px` werden die Segmente um `32px` nach außen verlängert, sodass die Linien `32px` über den Endrand des Containers hinaus gezeichnet werden. Da Spaltenlinien das Boxmodell nicht beeinflussen, wirken sich diese Linien weder auf das Layout des Containers noch auf den übrigen Inhalt aus.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien in einem Abstandssegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält. Die Spaltenlinien mit doppeltem Linienstil, die bei `rule-visibility-items: around` erscheinen, enden nicht an einem Abschlussendpunkt. Die letzten beiden Spaltenlinien enden an inneren Abständen, an denen Zeilenliniensegmente vorhanden sind. Ihre Endpunkte sind daher keine Abschlussendpunkte und werden nicht von `column-rule-inset-cap-end` beeinflusst.

Wählen Sie `between` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien nur dann in Abstandssegmenten gezeichnet, wenn beide angrenzenden Bereiche ein Element enthalten. Die letzte Zeilenlinie im zweiten Zeilenabstand endet am dritten Spaltenabstand. Die dritte Spaltenlinie endet an einem inneren Abstand, an dem ein Zeilenliniensegment vorhanden ist. Ihr Endpunkt ist daher kein Abschlussendpunkt und wird nicht von `column-rule-inset-cap-end` beeinflusst. Die letzten beiden Spaltenlinien enden hingegen an inneren Abständen ohne weitere Liniensegmente. Ihre Endpunkte sind Abschlussendpunkte und werden daher von `column-rule-inset-cap-end` beeinflusst.

### Prozentwerte verstehen

Auf welche Länge sich ein Prozentwert bezieht, hängt von der Lage des Endpunkts ab. Bei inneren Endpunkten beziehen sich Prozentwerte auf die Breite des Abstands am Abschlussendpunkt: auf den {{cssxref("row-gap")}}, wenn der Endpunkt an einen Linienabstand grenzt, und auf `0` am unteren Rand des Containers.

In dieser Demonstration sind die betreffenden Endpunkte durch den eingerückten Linienstil in dunkler und heller Farbe gekennzeichnet. Liegt ein Abschlussendpunkt am Rand des Containers, bezieht sich der Prozentwert auf `0` und ergibt somit immer `0`. Deshalb hat nur der Wert `between` eine Auswirkung.

{{EmbedLiveSample("percents", "", "300")}}

Wählen Sie `around` als Wert für `rule-visibility-items`. Die ersten drei Spalten enden am Containerrand, sodass jeder Prozentwert `0` ergibt. Die letzten beiden Spaltenlinien enden an inneren Abständen mit Zeilenliniensegmenten. Ihre Endpunkte sind daher keine Abschlussendpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Die ersten beiden Spalten enden am Containerrand und haben daher einen Einzug von `0`. Die dritte Spaltenlinie endet an einem inneren Abstand mit einem Zeilenliniensegment. Ihr Endpunkt ist somit kein Abschlussendpunkt. Die letzten beiden Spaltenlinien enden an inneren Abständen ohne weitere Liniensegmente. Der prozentuale Versatz bezieht sich hier daher auf die Breite des {{cssxref("row-gap")}}, die in diesem Fall `20px` beträgt.

Mit `100%` werden die Enden der letzten beiden Spaltenliniensegmente um `20px` eingezogen. Mit `-200%` werden diese Segmente um `40px` nach außen verlängert: Die Linien verlaufen durch den `20px` breiten Abstand und ragen weitere `20px` in die letzte Elementzeile hinein. Negative Prozentwerte, die eine Länge ergeben, die größer ist als die Höhe der letzten Zeile und des Zeilenabstands zusammen, lassen die letzten beiden Spaltenlinien über den Endrand des Containers hinausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie `column-rule-inset-cap-end` festgelegt wird, um den Endrand von Abschlusssegmenten in Flex-Containern einzuziehen.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den beiden Containern besteht darin, dass der zweite zusätzlich die Klasse `column` hat.

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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Mit {{cssxref("rule")}} definieren wir hellblaue Linien für Zeilen- und Spaltenabstände. Anschließend überschreiben wir {{cssxref("column-rule-color")}}, um die Linien in den Spaltenabständen in einem dunkleren `blue` darzustellen. Schließlich setzen wir `column-rule-inset-cap-end` auf `16px`.

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

Für den Container `.column` legen wir außerdem {{cssxref("flex-direction")}} fest. Dadurch ändern wir die Hauptachse des Flex-Containers, sodass die Elemente in Spalten statt in Zeilen angeordnet werden.

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
