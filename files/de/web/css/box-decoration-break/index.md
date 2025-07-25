---
title: box-decoration-break
slug: Web/CSS/box-decoration-break
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`box-decoration-break`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die [Fragmente](/de/docs/Web/CSS/CSS_fragmentation) eines Elements dargestellt werden sollen, wenn sie über mehrere Zeilen, Spalten oder Seiten hinweg gebrochen werden.

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
  background: linear-gradient(to bottom right, #6f6f6f, #000);
  color: white;
  box-shadow:
    8px 8px 10px 0 #ff1492,
    -5px -5px 5px 0 #00f,
    5px 5px 15px 0 #ff0;
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

Die `box-decoration-break` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `slice`
  - : Das Element wird zunächst so gerendert, als ob seine Box nicht fragmentiert wäre, danach wird die Darstellung dieser hypothetischen Box in Stücke für jede Zeile/Spalte/Seite geschnitten. Beachten Sie, dass die hypothetische Box für jedes Fragment unterschiedlich sein kann, da sie ihre eigene Höhe verwendet, wenn der Bruch in der Inline-Richtung erfolgt, und ihre eigene Breite, wenn der Bruch in der Blockrichtung erfolgt. Details finden Sie in der CSS-Spezifikation.
- `clone`
  - : Jedes Box-Fragment wird unabhängig mit dem angegebenen Rahmen, Polsterung und Rand gerendert, der jedes Fragment umschließt. Der {{ Cssxref("border-radius") }}, {{ Cssxref("border-image") }}, und {{ Cssxref("box-shadow") }} werden auf jedes Fragment unabhängig angewendet. Der Hintergrund wird auch für jedes Fragment unabhängig gezeichnet, was bedeutet, dass ein Hintergrundbild mit {{ Cssxref("background-repeat", "background-repeat: no-repeat") }} trotzdem mehrfach wiederholt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Box-Fragmente

Ein Inline-Element mit einer Box-Dekoration kann ein unerwartetes Erscheinungsbild haben, wenn es Zeilenumbrüche aufgrund des initialen Wertes `slice` enthält. Das folgende Beispiel zeigt die Wirkung des Hinzufügens von `box-decoration-break: clone` zu einem {{htmlelement("span")}}, das {{htmlelement("br")}} Tags enthält:

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

Das folgende Beispiel zeigt, wie Block-Elemente mit Box-Dekoration aussehen, wenn sie Zeilenumbrüche in einem [mehrspaltigen Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) enthalten. Beachten Sie, dass das Ergebnis von `box-decoration-break: slice` dem ersten {{htmlelement("div")}} entsprechen würde, wenn es vertikal gestapelt wäre.

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
