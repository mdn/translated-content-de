---
title: "`column-rule-inset-junction-end` CSS property"
short-title: column-rule-inset-junction-end
slug: Web/CSS/Reference/Properties/column-rule-inset-junction-end
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`column-rule-inset-junction-end`** lassen sich die unteren Endpunkte von Spaltenliniensegmenten versetzen, sofern es sich um [Knoten-Endpunkte](#knoten-endpunkte_verstehen) handelt, also um Endpunkte an Zwischenraumkreuzungen, an denen sich Liniensegmente schneiden.

{{InteractiveExample("CSS Demo: column-rule-inset-junction-end")}}

```css interactive-example-choice
column-rule-inset-junction-end: 0;
```

```css interactive-example-choice
column-rule-inset-junction-end: 0.5em;
```

```css interactive-example-choice
column-rule-inset-junction-end: 10px;
```

```css interactive-example-choice
column-rule-inset-junction-end: -100%;
```

```css interactive-example-choice
column-rule-inset-junction-end: overlap-join;
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
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  rule: solid thick lightpink;
  column-rule-color: magenta;
  column-rule-break: intersection;
  gap: 1.5em;
  rule-overlap: column-over-row;
  border: 1px solid rebeccapurple;
  margin: auto;
  rule-visibility-items: around;
}
#example-element i {
  background-color: #efefef;
  padding: 1em;
}
```

## Syntax

```css
/* Keywords */
column-rule-inset-junction-end: overlap-join;

/* <length-percentage> values */
column-rule-inset-junction-end: 0;
column-rule-inset-junction-end: 1em;
column-rule-inset-junction-end: -5px;
column-rule-inset-junction-end: -25%;

/* Global values */
column-rule-inset-junction-end: inherit;
column-rule-inset-junction-end: initial;
column-rule-inset-junction-end: revert;
column-rule-inset-junction-end: revert-layer;
column-rule-inset-junction-end: unset;
```

### Werte

Diese Eigenschaft wird mit einem einzelnen Wert aus der folgenden Liste angegeben:

- `overlap-join`
  - : Gibt an, dass das Segment am Knoten über die Zeilenlinie hinausreichen soll. Der Wert entspricht der Hälfte des Werts von {{cssxref("row-gap")}} plus der Hälfte des verwendeten Werts von {{cssxref("row-rule-width")}}.
- {{cssxref("length-percentage")}}
  - : Gibt die Größe des Einzugs an. Prozentwerte beziehen sich auf den Knoten-Endpunkt; maßgeblich ist dabei der Wert von `row-gap`.

## Beschreibung

Mit der Eigenschaft `column-rule-inset-junction-end` lassen sich [Knoten-Endpunkte von Segmenten](#knoten-endpunkte_verstehen) am unteren Ende von Spaltenliniensegmenten ein- oder ausrücken. Der Standardwert ist `0`. Positive Werte verkürzen das Segment, während negative Werte und [das Schlüsselwort `overlap-join`](#the_overlap-join_value) es verlängern.

Spaltenlinien werden innerhalb eines Spaltenzwischenraums als ein oder mehrere Segmente gezeichnet. Solche Segmente treten zwischen folgenden Bereichen auf:

- Benachbarten Spalten in CSS-Grid-Layouts.
- Benachbarten Flex-Elementen oder Flex-Zeilen in Flex-Layouts, abhängig von `flex-direction`.
- Benachbarten Spalten in mehrspaltigen Layouts.

Ob eine Spaltenlinie mehrere Zeilen überspannt oder in mehrere Segmente unterteilt wird, legt die Eigenschaft {{cssxref("column-rule-break")}} fest. Innere Unterbrechungen zwischen Spaltenliniensegmenten entsprechen der Größe von {{cssxref("row-gap")}}. Ein Knoten-Endpunkt liegt am unteren Ende jedes Spaltensegments vor, dessen unteres Ende an einer Zwischenraumkreuzung liegt, an der weitere Spalten- oder Liniensegmente vorhanden sind.

Die Eigenschaft `column-rule-inset-junction-end` ist Bestandteil mehrerer [Kurzschreibweisen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties):

- Um die oberen und unteren Knoten-Endpunkte von Spaltensegmenten einzurücken, können `column-rule-inset-junction-end` und {{cssxref("column-rule-inset-junction-start")}} über die Kurzschreibweise {{cssxref("column-rule-inset-junction")}} festgelegt werden.

- Um alle unteren Endpunkte von Spaltensegmenten einzurücken, können `column-rule-inset-junction-end` und {{cssxref("column-rule-inset-cap-end")}} über die Kurzschreibweise {{cssxref("column-rule-inset-end")}} festgelegt werden.

- Um die unteren Knoten-Endpunkte von Spaltensegmenten und die rechten Knoten-Endpunkte von Zeilensegmenten einzurücken, können `column-rule-inset-junction-end` und {{cssxref("row-rule-inset-junction-end")}} über die Kurzschreibweise {{cssxref("rule-inset-junction-end")}} festgelegt werden.

Alle Segment-Endpunkte, einschließlich der `-start`-, `-cap`- und `row-`-Entsprechungen dieser Eigenschaft, können über die Kurzschreibweise {{cssxref("rule-inset")}} festgelegt werden.

### Knoten-Endpunkte verstehen

Ein _Knoten-Endpunkt eines Segments_ ist ein Segment-Endpunkt an einem inneren Zwischenraum, der an einer Zwischenraumkreuzung endet, an der weitere Linien- oder Spaltensegmente vorhanden sind. Die Eigenschaft `column-rule-inset-junction-end` steuert den Einzug der unteren Kante von Spaltensegmenten an solchen Knoten. Dadurch lassen sich die Segmente verkürzen oder verlängern.

`column-rule-inset-junction-end`-Werte mit Längeneinheiten rücken Segmente um den angegebenen Wert ein. Negative Längenwerte bewirken ein Ausrücken und verlängern das untere Ende des Segments. Prozentwerte beziehen sich auf die Größe von {{cssxref("row-gap")}}. Mit `-50%` wird das untere Ende des Segments bis zur Mitte des darunterliegenden Zeilenzwischenraums verlängert – unabhängig davon, wie breit dieser ist.

In der folgenden Demonstration enden die Spaltenliniensegmente in den oberen beiden Zeilen an Knoten-Endpunkten. Bei `column-rule-inset-junction-end: 16px` wird das untere Ende dieser Segmente um `16px` eingerückt. Ändern Sie den `<length>`-Wert für den Einzug, um besser zu erkennen, welche Segmente an Knoten-Endpunkten enden.

```html hidden live-sample___junctions live-sample___percents
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

```html hidden live-sample___junctions
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

```css hidden live-sample___junctions live-sample___percents
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
  column-rule-inset-junction-end: 16px;

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
  @supports not (column-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-end property";
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
  column-rule-inset-junction-end: 100%;
  column-rule-style: inset;
}
```

```js hidden live-sample___junctions live-sample___percents
const inset = document.getElementById("inset");
const visibility = document.getElementById("visibility");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

inset.addEventListener("input", () => {
  o.innerText =
    ul.style.columnRuleInsetJunctionEnd = `${inset.value}${inset.dataset["unit"]}`;
});
```

```js hidden live-sample___junctions
visibility.addEventListener("change", () => {
  ul.style.ruleVisibilityItems = `${visibility.value}`;
  if (visibility.value === "between") {
    ul.style.columnRuleStyle = "repeat(3, solid), repeat(2, double)";
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

{{EmbedLiveSample("junctions", "", "300")}}

Wenn Sie `0px` als Wert festlegen, schließen die Spaltenlinien am Ende der Zeile ab und grenzen unmittelbar an den Zeilenzwischenraum. Dies ist die Standardeinstellung. Beachten Sie, dass sich bei einer Änderung des Eigenschaftswerts nur die unteren Enden der Segmente in der Mitte des Grids ändern. Die Segmente in der untersten Zeile bleiben unverändert: Ihre Endpunkte sind _äußere Endpunkte_ und werden von der Eigenschaft `column-rule-inset-junction-end` nicht beeinflusst.

Wählen Sie `around` als Wert für `rule-visibility-items`. Bei diesem Wert werden Linien in einem Zwischenraumsegment gezeichnet, wenn mindestens einer der beiden angrenzenden Bereiche ein Element enthält. Die Spaltenliniensegmente im doppelten Linienstil, die bei `rule-visibility-items: around` erscheinen, enden an einer inneren Kreuzung, an der mindestens ein Zeilenliniensegment vorhanden ist. Ihre Endpunkte sind daher Knoten-Endpunkte.

Wählen Sie `between` als Wert für `rule-visibility-items`. Dabei werden Linien in Zwischenraumsegmenten nur gezeichnet, wenn beide angrenzenden Bereiche Elemente enthalten. Die Spaltenliniensegmente im doppelten Linienstil enden nun an einer inneren Kreuzung, an der keine weiteren Liniensegmente vorhanden sind. Ihre Endpunkte sind daher _äußere Segment-Endpunkte_ und werden von der Eigenschaft `column-rule-inset-junction-end` nicht beeinflusst.

### Der Wert `overlap-join`

Der Wert `overlap-join` verlängert das untere Ende innerer Segmente so, dass es mit der Unterkante der kreuzenden Zeilenlinie abschließt. Der Wert entspricht der Hälfte der Größe von {{cssxref("row-gap")}} – womit das Segment bis zur Mitte des Zwischenraums reichen würde – plus der Hälfte der Breite der Zeilenlinie.

Wenn `column-rule-inset-junction-end` auf das Schlüsselwort `overlap-join` gesetzt ist, reichen die unteren Enden der Segmente mit Knoten-Endpunkten in den Zeilenzwischenraum hinein, bis sie an die Unterkante der dort gezeichneten Zeilenlinie anschließen.

Im folgenden interaktiven Beispiel ist `column-rule-inset-junction-end` auf `overlap-join` gesetzt:

```html hidden
<p>
  <label
    >Change the <code>row-gap</code>.
    <input type="range" min="10" max="40" value="30" id="gap" data-unit="px"
  /></label>
  <output id="og">30px</output>
</p>
<p>
  <label
    >Change the <code>row-rule-width</code>.
    <input type="range" min="0" max="40" value="16" id="rrw" data-unit="px"
  /></label>
  <output id="ow">16px</output>
</p>

<ul>
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
</ul>
```

```css hidden
ul {
  display: grid;
  grid-template-columns: repeat(4, auto);
  list-style-type: none;
  gap: 30px;
  column-rule: 16px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;
  rule-visibility-items: around;
  column-rule-break: intersection;
  column-rule-inset-junction-end: overlap-join;
  border: 1px solid;
}
ul {
  place-items: center;
  width: 70vw;
  margin: auto;
  padding: 0;
}
li {
  text-align: center;
  font-family: sans-serif;
  background-color: #ededed;
  padding: 2em;
  width: 100%;
  box-sizing: border-box;
}
@layer no-support {
  @supports not (column-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-end property";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```js hidden
const ul = document.querySelector("ul");
const gapSize = document.getElementById("gap");
const og = document.getElementById("og");
const ruleWidth = document.getElementById("rrw");
const ow = document.getElementById("ow");

gapSize.addEventListener("input", () => {
  og.innerText = ul.style.rowGap = `${gapSize.value}px`;
});

ruleWidth.addEventListener("input", () => {
  ow.innerText = ul.style.rowRuleWidth = `${ruleWidth.value}px`;
});
```

{{EmbedLiveSample("the overlap-join value", "", "430")}}

Ändern Sie die Werte von {{cssxref("row-rule-width")}} und {{cssxref("row-gap")}}. Beachten Sie, dass das untere Ende des Spaltensegments unabhängig von der Größe des Zwischenraums oder der Breite der Zeilenlinie stets so verlängert wird, dass es mit der Unterkante der im Zwischenraum gezeichneten Zeilenlinie abschließt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit `column-rule-inset-junction-end` die Endkante von Segmenten an Knoten in Flex-Containern einrücken.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente mit jeweils sieben Kindelementen. Der einzige Unterschied zwischen den beiden Containern besteht darin, dass der zweite zusätzlich die Klasse `column` hat.

```html
<h1>Insetting junction column rule endpoints</h1>
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

Mit der Eigenschaft {{cssxref("display")}} machen wir die `.flexbox`-Elemente zu Flex-Containern. Mithilfe von {{cssxref("flex-wrap")}} und {{cssxref("flex-line-count")}} verteilen wir die Elemente auf drei Flex-Zeilen. Wir definieren eine hellblaue {{cssxref("rule")}}, die sowohl in Zeilen- als auch in Spaltenzwischenräumen gezeichnet wird. Anschließend überschreiben wir {{cssxref("column-rule-color")}} und legen für die Linien in den Spaltenzwischenräumen ein dunkleres `blue` fest. Außerdem setzen wir {{cssxref("rule-overlap")}} auf `column-over-row`, damit Spaltensegmente bei Überlappungen über den Zeilensegmenten gezeichnet werden. Schließlich setzen wir `column-rule-inset-junction-end` auf `16px`.

```css
.flexbox {
  display: flex;
  flex-wrap: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid lightblue;
  column-rule-color: blue;
  rule-overlap: column-over-row;

  column-rule-inset-junction-end: 16px;
}
```

Für den Container `.column` setzen wir außerdem {{cssxref("flex-direction")}} auf `column`. Dadurch verläuft die Hauptachse des Flex-Containers vertikal auf der Seite, und die Elemente werden in Spalten statt in Zeilen angeordnet.

```css
.column {
  flex-direction: column;
}
```

Das übrige CSS ist der Kürze halber ausgeblendet.

```css hidden
h1,
article {
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
  @supports not (column-rule-inset-junction-end: 16px) {
    body::before {
      content: "Your browser doesn't support the column-rule-inset-junction-end property";
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
  containers[0].style.columnRuleInsetJunctionEnd = val;
  containers[1].style.columnRuleInsetJunctionEnd = val;
  output.innerText = val;
});
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "", "330")}}

Ändern Sie die Größe des Einzugs. Beachten Sie, dass die Spaltenlinie im rechten Beispiel aus einem einzigen Segment besteht, das von oben nach unten verläuft. Dieses Segment hat zwei äußere Endpunkte und keine Knoten-Endpunkte. Eine Änderung des Werts von `column-rule-inset-junction-end` wirkt sich daher nicht auf dieses Beispiel aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("column-rule-inset-junction-start")}}
- {{cssxref("column-rule-inset-junction")}}-Kurzschreibweise
- {{cssxref("rule-inset-junction-start")}}-Kurzschreibweise
- {{cssxref("column-rule-inset")}}-Kurzschreibweise
- {{cssxref("rule-inset")}}-Kurzschreibweise
- {{cssxref("column-rule-break")}}
- {{cssxref("rule-break")}}-Kurzschreibweise
- {{cssxref("rule-overlap")}}
- {{cssxref("rule-visibility-items")}}
- {{cssxref("rule")}}-Kurzschreibweise
- Modul [CSS-Zwischenräume](/de/docs/Web/CSS/Guides/Gaps)
