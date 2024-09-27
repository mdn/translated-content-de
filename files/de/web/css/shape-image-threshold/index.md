---
title: shape-image-threshold
slug: Web/CSS/shape-image-threshold
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`shape-image-threshold`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Alphakanal-Schwellenwert fest, der verwendet wird, um die Form zu extrahieren, wenn ein Bild als Wert für {{cssxref("shape-outside")}} verwendet wird.

{{EmbedInteractiveExample("pages/css/shape-image-threshold.html")}}

Alle Pixel, deren Alpha-Komponente einen Wert größer als der Schwellenwert hat, werden als Teil der Form betrachtet, um deren Grenzen zu bestimmen. Ein Wert von `0.5` bedeutet beispielsweise, dass die Form alle Pixel einschließt, die mehr als 50% undurchsichtig sind.

## Syntax

```css
/* <number> value */
shape-image-threshold: 0.7;

/* Global values */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: revert;
shape-image-threshold: revert-layer;
shape-image-threshold: unset;
```

### Werte

- {{cssxref("&lt;alpha-value&gt;")}}
  - : Legt den Schwellenwert fest, der verwendet wird, um eine Form aus einem Bild zu extrahieren. Die Form wird durch die Pixel definiert, deren Alphawert größer als der Schwellenwert ist. Werte außerhalb des Bereichs von 0.0 (vollständig transparent) bis 1.0 (vollständig undurchsichtig) werden auf diesen Bereich begrenzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text an einen Farbverlauf ausrichten

Dieses Beispiel erstellt einen {{HTMLElement("div")}} Block mit einem Hintergrundbild, das ein Farbverlauf ist. Der Farbverlauf wird als CSS-Form unter Verwendung von `shape-outside` festgelegt, sodass Pixel innerhalb des Farbverlaufs, die mindestens 20% undurchsichtig sind (also diejenigen Pixel mit einer Alpha-Komponente größer als 0.2), als Teil der Form betrachtet werden.

#### HTML

```html
<div id="gradient-shape"></div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi
  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint
  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat adipisci,
  libero quae nihil porro debitis laboriosam inventore animi impedit nostrum
  nesciunt quisquam expedita! Dolores consectetur iure atque a mollitia dicta
  repudiandae illum exercitationem aliquam repellendus ipsum porro modi, id nemo
  eligendi, architecto ratione quibusdam iusto nisi soluta? Totam inventore ea
  eum sed velit et eligendi suscipit accusamus iusto dolore, at provident eius
  alias maxime pariatur non deleniti ipsum sequi rem eveniet laboriosam magni
  expedita?
</p>
```

#### CSS

```css
#gradient-shape {
  width: 150px;
  height: 150px;
  float: left;
  background-image: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-outside: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-image-threshold: 0.2;
}
```

Die Form wird hier mit {{cssxref("background-image")}} unter Verwendung eines linearen Farbverlaufs anstelle einer Bilddatei festgelegt. Der gleiche Farbverlauf wird auch als das Bild verwendet, aus dem die Form für den festgelegten Schweberaum abgeleitet wird, unter Verwendung der Eigenschaft {{cssxref("shape-outside")}}.

Der 20%ige Opazitätsschwellenwert, um Verlaufspixel als Teil der Form zu betrachten, wird dann unter Verwendung von `shape-image-threshold` mit einem Wert von `0.2` festgelegt.

#### Ergebnis

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Übersicht über CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
