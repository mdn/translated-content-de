---
title: offset
slug: Web/CSS/offset
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`offset`** CSS [Kurzschreibweiseigenschaft](/de/docs/Web/CSS/Shorthand_properties) setzt alle erforderlichen Eigenschaften, um ein Element entlang eines definierten Pfades zu animieren. Die `offset`-Eigenschaften zusammen helfen, eine _offset-Transformation_ zu definieren, eine [Transformation](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms), die einen Punkt in einem Element ([offset-anchor](/de/docs/Web/CSS/offset-anchor)) in Übereinstimmung mit einer _offset-Position_ ([offset-position](/de/docs/Web/CSS/offset-position)) auf einem Pfad ([offset-path](/de/docs/Web/CSS/offset-path)) an verschiedenen Punkten entlang des Pfades ([offset-distance](/de/docs/Web/CSS/offset-distance)) ausrichtet und optional das Element dreht ([offset-rotate](/de/docs/Web/CSS/offset-rotate)), um der Richtung des Pfades zu folgen.

> [!NOTE]
> Frühere Versionen der Spezifikation nannten diese Eigenschaft `motion`.

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

### Ein Element entlang eines Pfades animieren

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
