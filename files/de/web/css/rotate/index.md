---
title: rotate
slug: Web/CSS/rotate
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`rotate`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, Rotations-Transformationen individuell und unabhängig von der {{CSSxRef("transform")}} Eigenschaft zu spezifizieren. Dies passt besser zu typischen Benutzeroberflächen und erspart Ihnen das Merken der genauen Reihenfolge der Transformationsfunktionen, die in der `transform` Eigenschaft angegeben werden müssen.

{{InteractiveExample("CSS Demo: rotate")}}

```css interactive-example-choice
rotate: none;
```

```css interactive-example-choice
rotate: -45deg;
```

```css interactive-example-choice
rotate: z 45deg;
```

```css interactive-example-choice
rotate: x 45deg;
```

```css interactive-example-choice
rotate: y 45deg;
```

```css interactive-example-choice
rotate: 3 0.5 2 45deg;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 550px;
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## Syntax

```css
/* Keyword values */
rotate: none;

/* Angle value */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, or z axis name plus angle */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Vector plus angle value */
rotate: 1 1 1 90deg;

/* Global values */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
```

### Werte

- Winkelwert
  - : Ein {{CSSxRef("&lt;angle&gt;")}}, der den Winkel angibt, um den das betroffene Element um die Z-Achse rotiert werden soll. Entspricht einer `rotate()` (2D-Rotation) Funktion.
- x-, y- oder z-Achsenname plus Winkelwert
  - : Der Name der Achse, um die Sie das betroffene Element rotieren möchten (`x`, `y` oder `z`), plus ein {{CSSxRef("&lt;angle&gt;")}}, der den Winkel angibt, um den das Element rotiert werden soll. Entspricht einer `rotateX()`/`rotateY()`/`rotateZ()` (3D-Rotation) Funktion.
- Vektor plus Winkelwert
  - : Drei {{CSSxRef("&lt;number&gt;")}}s, die einen um den Ursprung zentrierten Vektor darstellen, der eine Linie definiert, um die Sie das Element rotieren möchten, plus ein {{CSSxRef("&lt;angle&gt;")}}, der den Winkel angibt, um den das Element rotiert werden soll. Entspricht einer `rotate3d()` (3D-Rotation) Funktion.
- `none`
  - : Gibt an, dass keine Rotation angewendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rotation eines Elements bei Hover

Das folgende Beispiel zeigt, wie die `rotate` Eigenschaft verwendet wird, um ein Element bei Hover entlang verschiedener Achsen zu rotieren.
Die erste Box dreht sich um 90 Grad auf der Z-Achse bei Hover, die zweite dreht sich um 180 Grad auf der Y-Achse bei Hover, und die dritte dreht sich bei Hover um 360 Grad um einen Vektor, der durch Koordinaten definiert ist.

#### HTML

```html
<div class="box" id="box1">rotate Z</div>
<div class="box" id="box2">rotate Y</div>
<div class="box" id="box3">vector & angle</div>
```

#### CSS

```css
.box {
  display: inline-block;
  margin: 1em;
  min-width: 6.5em;
  line-height: 6.5em;
  text-align: center;
  transition: 1s ease-in-out;
  border: 0.25em dotted;
}

#box1:hover {
  rotate: 90deg;
}

#box2:hover {
  rotate: y 180deg;
}

#box3:hover {
  rotate: 1 2 1 360deg;
}
```

#### Ergebnis

{{EmbedLiveSample("Rotating_an_element_on_hover", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('translate')}}
- {{cssxref('scale')}}
- {{cssxref('transform')}}

Hinweis: `skew` ist kein eigenständiger `transform` Wert
