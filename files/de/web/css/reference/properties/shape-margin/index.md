---
title: shape-margin
slug: Web/CSS/Reference/Properties/shape-margin
l10n:
  sourceCommit: 0ab262675372b83fc870accf3dc46d6a367c451c
---

Die **`shape-margin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt einen Abstand für eine CSS-Form fest, die mit {{cssxref("shape-outside")}} erstellt wurde.

{{InteractiveExample("CSS Demo: shape-margin")}}

```css interactive-example-choice
shape-margin: 0;
```

```css interactive-example-choice
shape-margin: 20px;
```

```css interactive-example-choice
shape-margin: 1em;
```

```css interactive-example-choice
shape-margin: 5%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
    We had agreed, my companion and I, that I should call for him at his house,
    after dinner, not later than eleven o'clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up "ballooning"
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of "automobiling" at a breakneck speed, the
    members of the "Aéro Club" now seek in the air, where they indulge in all
    kinds of daring feats, the nerve-racking excitement that they have ceased to
    find on earth.
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  margin: 20px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: rebeccapurple;
  shape-outside: circle(50%);
}
```

Der Abstand ermöglicht es Ihnen, den Abstand zwischen den Kanten der Form (dem **Float-Element**) und dem umgebenden Inhalt anzupassen.

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
  - : Legt den Abstand der Form auf einen {{cssxref("&lt;length&gt;")}}-Wert oder auf einen {{cssxref("&lt;percentage&gt;")}} der Breite des umschließenden Blocks des Elements fest.

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

- [CSS-Shapes](/de/docs/Web/CSS/Guides/Shapes)
- [Übersicht über CSS-Shapes](/de/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("basic-shape")}}
