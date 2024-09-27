---
title: shape-margin
slug: Web/CSS/shape-margin
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`shape-margin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt einen Abstand für eine CSS-Form fest, die mit {{cssxref("shape-outside")}} erstellt wurde.

{{EmbedInteractiveExample("pages/css/shape-margin.html")}}

Der Abstand ermöglicht es Ihnen, den Abstand zwischen den Kanten der Form (dem **float-Element**) und dem umgebenden Inhalt anzupassen.

## Syntax

```css
/* <length> values */
shape-margin: 10px;
shape-margin: 20mm;

/* <percentage> value */
shape-margin: 60%;

/* Global values */
shape-margin: inherit;
shape-margin: initial;
shape-margin: revert;
shape-margin: revert-layer;
shape-margin: unset;
```

### Werte

- `<length-percentage>`
  - : Legt den Rand der Form auf einen {{cssxref("&lt;length&gt;")}} Wert oder auf einen {{cssxref("&lt;percentage&gt;")}} der Breite des enthaltenen Blocks des Elements fest.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hinzufügen eines Abstands zu einem Polygon

#### HTML

```html
<section>
  <div class="shape"></div>
  We are not quite sure of any one thing in biology; our knowledge of geology is
  relatively very slight, and the economic laws of society are uncertain to
  every one except some individual who attempts to set them forth; but before
  the world was fashioned the square on the hypotenuse was equal to the sum of
  the squares on the other two sides of a right triangle, and it will be so
  after this world is dead; and the inhabitant of Mars, if one exists, probably
  knows its truth as we know it.
</section>
```

#### CSS

```css
section {
  max-width: 400px;
}

.shape {
  float: left;
  width: 150px;
  height: 150px;
  background-color: maroon;
  clip-path: polygon(0 0, 150px 150px, 0 150px);
  shape-outside: polygon(0 0, 150px 150px, 0 150px);
  shape-margin: 20px;
}
```

#### Ergebnis

{{EmbedLiveSample("Adding_a_margin_to_a_polygon", 500, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Übersicht über CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("&lt;basic-shape&gt;")}}
