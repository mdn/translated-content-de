---
title: shape-image-threshold
slug: Web/CSS/shape-image-threshold
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`shape-image-threshold`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt den Alpha-Kanal-Schwellenwert fest, der verwendet wird, um die Form unter Verwendung eines Bildes als Wert für {{cssxref("shape-outside")}} zu extrahieren.

{{EmbedInteractiveExample("pages/css/shape-image-threshold.html")}}

Alle Pixel, deren Alpha-Wert den Schwellenwert überschreitet, werden als Teil der Form betrachtet, um deren Grenzen zu bestimmen. Beispielsweise bedeutet ein Wert von `0.5`, dass die Form alle Pixel einschließt, die mehr als 50 % Deckkraft haben.

## Syntax

```css
/* <number> Wert */
shape-image-threshold: 0.7;

/* Globale Werte */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: revert;
shape-image-threshold: revert-layer;
shape-image-threshold: unset;
```

### Werte

- {{cssxref("&lt;alpha-value&gt;")}}
  - : Legt den Schwellenwert fest, der zum Extrahieren einer Form aus einem Bild verwendet wird. Die Form wird durch die Pixel definiert, deren Alpha-Wert den Schwellenwert überschreitet. Werte außerhalb des Bereichs von 0,0 (vollständig transparent) bis 1,0 (vollständig undurchsichtig) werden auf diesen Bereich begrenzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text an einen Verlauf anpassen

Dieses Beispiel erstellt einen {{HTMLElement("div")}}-Block mit einem Verlaufshintergrundbild. Der Verlauf wird als CSS-Form mithilfe von `shape-outside` festgelegt, sodass Pixel innerhalb des Verlaufs, die mindestens 20 % Deckkraft haben (d. h. Pixel mit einem Alpha-Wert größer als 0,2), als Teil der Form betrachtet werden.

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

Die Form wird hier mit {{cssxref("background-image")}} mit einem linearen Verlauf anstelle einer Bilddatei festgelegt. Derselbe Verlauf wird auch als das Bild verwendet, aus dem die Form abgeleitet wird, um den Flussbereich mit der {{cssxref("shape-outside")}}-Eigenschaft festzulegen.

Der 20 %-Deckschwellenwert für die Behandlung von Verlaufs-Pixeln als Teil der Form wird dann mithilfe von `shape-image-threshold` mit einem Wert von `0.2` festgelegt.

#### Ergebnis

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Überblick über CSS Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
