---
title: box-decoration-break
slug: Web/CSS/Reference/Properties/box-decoration-break
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`box-decoration-break`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, wie die [Fragmente](/de/docs/Web/CSS/Guides/Fragmentation) eines Elements gerendert werden sollen, wenn sie über mehrere Zeilen, Spalten oder Seiten aufgeteilt sind.

{{InteractiveExample("CSS Demo: box-decoration-break")}}

```css interactive-example-choice
-webkit-box-decoration-break: slice;
box-decoration-break: slice;
```

```css interactive-example-choice
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <span id="example-element">This text breaks across multiple lines.</span>
  </div>
</section>
```

```css interactive-example
#example-container {
  width: 14rem;
}

#example-element {
  background: linear-gradient(to bottom right, #6f6f6f, black);
  color: white;
  box-shadow:
    8px 8px 10px 0 #ff1492,
    -5px -5px 5px 0 blue,
    5px 5px 15px 0 yellow;
  padding: 0 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}
```

Der angegebene Wert beeinflusst das Erscheinungsbild der folgenden Eigenschaften:

- {{Cssxref("background")}}
- {{Cssxref("border")}}
- {{Cssxref("border-image")}}
- {{Cssxref("box-shadow")}}
- {{Cssxref("clip-path")}}
- {{Cssxref("margin")}}
- {{Cssxref("padding")}}

## Syntax

```css
/* Keyword values */
box-decoration-break: slice;
box-decoration-break: clone;

/* Global values */
box-decoration-break: inherit;
box-decoration-break: initial;
box-decoration-break: revert;
box-decoration-break: revert-layer;
box-decoration-break: unset;
```

Die `box-decoration-break` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `slice`
  - : Das Element wird zunächst so gerendert, als ob seine Box nicht fragmentiert wäre, wonach das Rendering dieser hypothetischen Box in Stücke für jede Zeile/Spalte/Seite geschnitten wird. Beachten Sie, dass die hypothetische Box für jedes Fragment unterschiedlich sein kann, da sie ihre eigene Höhe verwendet, wenn der Bruch in der Inline-Richtung auftritt, und ihre eigene Breite, wenn der Bruch in der Block-Richtung auftritt. Siehe die CSS-Spezifikation für Details.
- `clone`
  - : Jedes Box-Fragment wird unabhängig voneinander mit der angegebenen Umrandung, dem Abstand (padding) und dem Rand (margin) gerendert, die jedes Fragment umhüllen. Der {{ Cssxref("border-radius") }}, {{ Cssxref("border-image") }} und {{ Cssxref("box-shadow") }} werden auf jedes Fragment unabhängig angewendet. Der Hintergrund wird auch für jedes Fragment separat gezeichnet, was bedeutet, dass ein Hintergrundbild mit {{ Cssxref("background-repeat", "background-repeat: no-repeat") }} dennoch mehrfach wiederholt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Box-Fragmente

Ein Inline-Element mit einer Box-Dekoration kann ein unerwartetes Aussehen haben, wenn es Zeilenumbrüche enthält, aufgrund des initialen `slice`-Werts. Das folgende Beispiel zeigt die Wirkung von `box-decoration-break: clone` auf ein {{htmlelement("span")}}, das {{htmlelement("br")}}-Tags enthält:

```css hidden
body {
  display: flex;
  background-color: grey;
  justify-content: space-around;
}

span {
  padding: 0em 1em;
  border-radius: 1rem;
  border-style: solid;
  margin: 1rem;
  font: 22px sans-serif;
  line-height: 2;
}
```

```css
span {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
}

#clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<p>
  <span>The<br />quick<br />orange fox</span>
</p>
<p>
  <span id="clone">The<br />quick<br />orange fox</span>
</p>
```

{{embedlivesample("inline_box_fragments", "100%", "210")}}

### Block-Box-Fragmente

Das folgende Beispiel zeigt, wie Block-Elemente mit Box-Dekoration aussehen, wenn sie Zeilenumbrüche in einem [Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) enthalten. Beachten Sie, wie das Ergebnis von `box-decoration-break: slice` das Äquivalent des ersten {{htmlelement("div")}} wäre, wenn sie vertikal gestapelt wären.

```css hidden
body {
  background-color: grey;
}
span {
  padding: 0em 2em;
  border-radius: 250px;
  border-style: solid;
  margin-left: 1em;
  font: 20px sans-serif;
  line-height: 1.5;
}
```

```css
span {
  display: block;
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    inset 8px 8px 10px 0px deeppink,
    inset -5px -5px 5px 0px blue,
    inset 5px 5px 15px 0px yellow;
}
#base {
  width: 33%;
}
.columns {
  columns: 3;
}

.clone {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

```html
<div id="base">
  <span>The<br />quick<br />orange fox</span>
</div>
<br />

<h2>'box-decoration-break: slice'</h2>
<div class="columns">
  <span>The<br />quick<br />orange fox</span>
</div>

<h2>'box-decoration-break: clone'</h2>
<div class="columns">
  <span class="clone">The<br />quick<br />orange fox</span>
</div>
```

{{embedlivesample("block_box_fragments", "", "340")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}}
