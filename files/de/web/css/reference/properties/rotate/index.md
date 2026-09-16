---
title: "`rotate` CSS property"
short-title: rotate
slug: Web/CSS/Reference/Properties/rotate
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`rotate`** ermöglicht es Ihnen, Rotationstransformationen einzeln und unabhängig von der Eigenschaft {{CSSxRef("transform")}} festzulegen. Dies entspricht besser der typischen Verwendung von Benutzeroberflächen und erspart es, sich die genaue Reihenfolge der Transformationsfunktionen merken zu müssen, die in der Eigenschaft `transform` angegeben werden soll.

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
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## Syntax

```css
/* Keyword value */
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
  - : Ein {{cssxref("angle")}}, der den Winkel angibt, um den das betroffene Element um die Z-Achse gedreht wird. Entspricht einer `rotate()`-Funktion (2D-Rotation).
- Name der x-, y- oder z-Achse plus Winkelwert
  - : Der Name der Achse, um die Sie das betroffene Element drehen möchten (`x`, `y` oder `z`), zusammen mit einem {{cssxref("angle")}}, der den Winkel angibt, um den das Element gedreht wird. Entspricht einer `rotateX()`-/`rotateY()`-/`rotateZ()`-Funktion (3D-Rotation).
- Vektor plus Winkelwert
  - : Drei {{CSSxRef("&lt;number&gt;")}}, die einen ursprungszentrierten Vektor darstellen, der eine Linie definiert, um die Sie das Element drehen möchten, zusammen mit einem {{cssxref("angle")}}, der den Winkel angibt, um den das Element gedreht wird. Entspricht einer `rotate3d()`-Funktion (3D-Rotation).
- `none`
  - : Gibt an, dass keine Rotation angewendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Drehen eines Elements beim Hover

Das folgende Beispiel zeigt, wie die Eigenschaft `rotate` verwendet wird, um ein Element beim Hover entlang verschiedener Achsen zu drehen.
Das erste Feld dreht sich beim Hover um 90 Grad um die Z-Achse, das zweite beim Hover um 180 Grad um die Y-Achse und das dritte beim Hover um 360 Grad um einen durch Koordinaten definierten Vektor.

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

Hinweis: `skew` ist kein unabhängiger `transform`-Wert
