---
title: "`shape-image-threshold` CSS property"
short-title: shape-image-threshold
slug: Web/CSS/Reference/Properties/shape-image-threshold
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`shape-image-threshold`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Alpha-Kanal-Schwellenwert fest, der zur Extraktion der Form mittels eines Bildes als Wert für {{cssxref("shape-outside")}} verwendet wird.

{{InteractiveExample("CSS Demo: shape-image-threshold")}}

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.2;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.4;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.6;
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
  width: 150px;
  height: 150px;
  margin: 20px;
  background-image: linear-gradient(
    50deg,
    rgb(77 26 103),
    transparent 80%,
    transparent
  );
}
```

Alle Pixel, deren Alpha-Komponente den Schwellenwert überschreitet, werden als Teil der Form betrachtet, um deren Grenzen zu bestimmen. Ein Wert von `0.5` bedeutet beispielsweise, dass die Form alle Pixel umfasst, die mehr als 50 % undurchsichtig sind.

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
  - : Legt den Schwellenwert fest, der zur Extraktion einer Form aus einem Bild verwendet wird. Die Form wird durch die Pixel definiert, deren Alpha-Wert größer als der Schwellenwert ist. Werte außerhalb des Bereichs 0.0 (vollständig transparent) bis 1.0 (vollständig undurchsichtig) werden auf diesen Bereich begrenzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text an einem Verlauf ausrichten

Dieses Beispiel erstellt einen {{HTMLElement("div")}}-Block mit einem Verlauf als Hintergrundbild. Der Verlauf wird als CSS-Form mittels `shape-outside` etabliert, sodass Pixel innerhalb des Verlaufs, die mindestens 20 % undurchsichtig sind (d.h. Pixel mit einer Alpha-Komponente größer als 0.2), als Teil der Form betrachtet werden.

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

Die Form wird hier durch {{cssxref("background-image")}} mit einem linearen Verlauf anstelle einer Bilddatei festgelegt. Der gleiche Verlauf wird auch als das Bild verwendet, aus dem die Form zur Festlegung des Umbruchbereichs abgeleitet wird, mittels der {{cssxref("shape-outside")}}-Eigenschaft.

Der 20 %-Opacity-Schwellenwert, um Verlaufs-Pixel als Teil der Form zu behandeln, wird dann durch `shape-image-threshold` mit einem Wert von `0.2` festgelegt.

#### Ergebnis

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes)
- [Überblick über CSS Shapes](/de/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("basic-shape")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
