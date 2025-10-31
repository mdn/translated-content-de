---
title: z-index
slug: Web/CSS/Reference/Properties/z-index
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`z-index`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Z-Reihenfolge eines [positionierten](/de/docs/Web/CSS/Reference/Properties/position) Elements und seiner Nachkommen oder Flex- und Grid-Items fest. Überlappende Elemente mit einem höheren z-index verdecken diejenigen mit einem kleineren.

{{InteractiveExample("CSS Demo: z-index")}}

```css interactive-example-choice
z-index: auto;
```

```css interactive-example-choice
z-index: 1;
```

```css interactive-example-choice
z-index: 3;
```

```css interactive-example-choice
z-index: 5;
```

```css interactive-example-choice
z-index: 7;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div id="example-element">Change my z-index</div>
  <div class="block blue position1">z-index: 6</div>
  <div class="block blue position2">z-index: 4</div>
  <div class="block blue position3">z-index: 2</div>
  <div class="block red position4">z-index: auto</div>
  <div class="block red position5">z-index: auto</div>
  <div class="block red position6">z-index: auto</div>
</section>
```

```css interactive-example
#example-element {
  top: 15px;
  left: 15px;
  width: 180px;
  height: 230px;
  position: absolute;
  /* center the text so it is visible even when z-index is set to auto */
  line-height: 215px;
  font-family: monospace;
  background-color: #fcfbe5;
  border: solid 5px #e3e0a1;
  z-index: auto;
  color: black;
}

.container {
  display: inline-block;
  width: 250px;
  position: relative;
}

.block {
  width: 150px;
  height: 50px;
  position: absolute;
  font-family: monospace;
  color: black;
}

.blue {
  background-color: #e5e8fc;
  border: solid 5px #112382;
  /* move text to the bottom of the box */
  line-height: 55px;
}

.red {
  background-color: #fce5e7;
  border: solid 5px #e3a1a7;
}

.position1 {
  top: 0;
  left: 0;
  z-index: 6;
}

.position2 {
  top: 30px;
  left: 30px;
  z-index: 4;
}

.position3 {
  top: 60px;
  left: 60px;
  z-index: 2;
}

.position4 {
  top: 150px;
  left: 0;
  z-index: auto;
}

.position5 {
  top: 180px;
  left: 30px;
  z-index: auto;
}

.position6 {
  top: 210px;
  left: 60px;
  z-index: auto;
}
```

Für ein positioniertes Box-Element (d.h. eines mit einer anderen `position` als `static`) legt die `z-index` Eigenschaft fest:

1. Die Stapelreihenfolge der Box im aktuellen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context).
2. Ob die Box einen lokalen Stacking-Kontext etabliert.

## Syntax

```css
/* Keyword value */
z-index: auto;

/* <integer> values */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Negative values to lower the priority */

/* Global values */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: revert-layer;
z-index: unset;
```

Die `z-index` Eigenschaft wird entweder als Schlüsselwort `auto` oder als `<integer>` angegeben.

### Werte

- `auto`
  - : Die Box etabliert keinen neuen lokalen Stacking-Kontext. Die Stapelreihenfolge der generierten Box im aktuellen Stacking-Kontext ist `0`.
- `<integer>`
  - : Dieses {{cssxref("&lt;integer&gt;")}} ist die Stapelreihenfolge der generierten Box im aktuellen Stacking-Kontext. Die Box etabliert auch einen lokalen Stacking-Kontext. Das bedeutet, dass die z-indexes der Nachkommen nicht mit denen von Elementen außerhalb dieses Elements verglichen werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Elemente visuell schichten

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Ergebnis

{{EmbedLiveSample('Visually_layering_elements', '550', '200')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{Cssxref("position")}} Eigenschaft
- [Verständnis von CSS z-indexes](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
