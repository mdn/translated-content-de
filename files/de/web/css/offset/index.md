---
title: offset
slug: Web/CSS/offset
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`offset`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt alle erforderlichen Eigenschaften fest, um ein Element entlang eines definierten Pfads zu animieren. Die Offset-Eigenschaften zusammen helfen dabei, eine _Offset-Transformation_ zu definieren, eine [Transformation](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms), die einen Punkt in einem Element ([offset-anchor](/de/docs/Web/CSS/offset-anchor)) mit einer _Offset-Position_ ([offset-position](/de/docs/Web/CSS/offset-position)) auf einem Pfad ([offset-path](/de/docs/Web/CSS/offset-path)) an verschiedenen Punkten entlang des Pfades ([offset-distance](/de/docs/Web/CSS/offset-distance)) ausrichtet und optional das Element dreht ([offset-rotate](/de/docs/Web/CSS/offset-rotate)), um der Richtung des Pfades zu folgen.

> [!NOTE]
> Frühe Versionen der Spezifikation nannten diese Eigenschaft `motion`.

{{EmbedInteractiveExample("pages/css/offset.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

## Syntax

```css
/* Offset position */
offset: auto;
offset: 10px 30px;
offset: none;

/* Offset path */
offset: ray(45deg closest-side);
offset: path("M 100 100 L 300 100 L 200 300 z");
offset: url(arc.svg);

/* Offset path with distance and/or rotation */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* Including offset anchor */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;

/* Global values */
offset: inherit;
offset: initial;
offset: revert;
offset: revert-layer;
offset: unset;
```

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Animation eines Elements entlang eines Pfads

#### HTML

```html
<div id="offsetElement"></div>
```

#### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

#### Ergebnis

{{EmbedLiveSample("Animating_an_element_along_a_path", 350, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
