---
title: drehen
slug: Web/CSS/rotate
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

Die **`rotate`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) ermöglicht es Ihnen, Rotations-Transformationen individuell und unabhängig von der {{CSSxRef("transform")}}-Eigenschaft anzugeben. Dies passt besser zur typischen Benutzung in Benutzeroberflächen und erspart es Ihnen, sich die genaue Reihenfolge der Transformationsfunktionen zu merken, die in der `transform`-Eigenschaft angegeben werden müssen.

{{EmbedInteractiveExample("pages/css/rotate.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
rotate: none;

/* Winkelwert */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* Name der x-, y- oder z-Achse plus Winkel */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Vektor plus Winkelwert */
rotate: 1 1 1 90deg;

/* Globale Werte */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
```

### Werte

- Winkelwert
  - : Ein {{CSSxRef("&lt;angle&gt;")}}, der den Winkel angibt, um den das betroffene Element um die Z-Achse gedreht werden soll. Entspricht der `rotate()`-Funktion (2D-Rotation).
- Name der x-, y- oder z-Achse plus Winkelwert
  - : Der Name der Achse, um die Sie das betroffene Element drehen möchten ("`x`", "`y`" oder "`z`"), sowie ein {{CSSxRef("&lt;angle&gt;")}}, der den Winkel angibt, um den das Element gedreht werden soll. Entspricht der `rotateX()`/`rotateY()`/`rotateZ()`-Funktion (3D-Rotation).
- Vektor plus Winkelwert
  - : Drei {{CSSxRef("&lt;number&gt;")}}, die einen ursprungszentrierten Vektor darstellen, der eine Linie definiert, um die Sie das Element drehen möchten, sowie ein {{CSSxRef("&lt;angle&gt;")}}, der den Winkel angibt, um den das Element gedreht werden soll. Entspricht der `rotate3d()`-Funktion (3D-Rotation).
- `none`
  - : Gibt an, dass keine Drehung angewendet werden soll.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Element beim Hover drehen

Das folgende Beispiel zeigt, wie Sie die `rotate`-Eigenschaft verwenden können, um ein Element entlang verschiedener Achsen beim Hover-Effekt zu drehen. Die erste Box dreht sich beim Hover-Effekt um 90 Grad um die Z-Achse, die zweite dreht sich um 180 Grad um die Y-Achse, und die dritte dreht sich um 360 Grad um einen durch Koordinaten definierten Vektor.

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

Hinweis: `skew` ist kein unabhängiger `transform`-Wert.
