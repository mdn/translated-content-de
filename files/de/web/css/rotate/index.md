---
title: rotate
slug: Web/CSS/rotate
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`rotate`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, Rotations-Transformationen einzeln und unabhängig von der {{CSSxRef("transform")}} Eigenschaft zu spezifizieren. Dies passt besser zu typischen Benutzeroberflächen und erspart es, sich die genaue Reihenfolge der Transformationsfunktionen zu merken, die in der `transform` Eigenschaft angegeben werden sollen.

{{EmbedInteractiveExample("pages/css/rotate.html")}}

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
  - : Ein {{CSSxRef("&lt;angle&gt;")}}, der den Drehwinkel um die Z-Achse des betroffenen Elements angibt. Entspricht einer `rotate()` (2D-Rotation) Funktion.
- Name der x-, y- oder z-Achse plus Winkelwert
  - : Der Name der Achse, um die Sie das betroffene Element drehen möchten (`x`, `y` oder `z`), plus ein {{CSSxRef("&lt;angle&gt;")}}, der den Drehwinkel des Elements angibt. Entspricht einer `rotateX()`/`rotateY()`/`rotateZ()` (3D-Rotation) Funktion.
- Vektor plus Winkelwert
  - : Drei {{CSSxRef("&lt;number&gt;")}}, die einen ursprungszentrierten Vektor darstellen, der eine Linie definiert, um die Sie das Element drehen möchten, plus ein {{CSSxRef("&lt;angle&gt;")}}, der den Drehwinkel des Elements angibt. Entspricht einer `rotate3d()` (3D-Rotation) Funktion.
- `none`
  - : Gibt an, dass keine Rotation angewendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rotieren eines Elements beim Hover

Das folgende Beispiel zeigt, wie die `rotate` Eigenschaft verwendet wird, um ein Element auf verschiedene Achsen beim Hover zu rotieren. Das erste Feld rotiert beim Hover um 90 Grad auf der Z-Achse, das zweite rotiert um 180 Grad auf der Y-Achse beim Hover, und das dritte rotiert um 360 Grad beim Hover um einen durch Koordinaten definierten Vektor.

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

> [!NOTE]
> `skew` ist kein unabhängiger `transform` Wert.
