---
title: shape-image-threshold
slug: Web/CSS/Reference/Properties/shape-image-threshold
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`shape-image-threshold`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt den Alpha-Kanal-Schwellenwert, der verwendet wird, um die Form mithilfe eines Bildes als Wert für {{cssxref("shape-outside")}} zu extrahieren.

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
    after dinner, not later than eleven o’clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up “ballooning”
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of “automobiling” at a breakneck speed, the
    members of the “Aéro Club” now seek in the air, where they indulge in all
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

Alle Pixel, deren Alpha-Komponentenwert größer als der Schwellenwert ist, werden als Teil der Form betrachtet, um ihre Grenzen zu bestimmen. Zum Beispiel bedeutet ein Wert von `0.5`, dass die Form alle Pixel einschließt, die mehr als 50% opak sind.

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
  - : Setzt den Schwellenwert, der zur Extraktion einer Form aus einem Bild verwendet wird. Die Form wird durch die Pixel definiert, deren Alpha-Wert größer als der Schwellenwert ist. Werte außerhalb des Bereichs von 0.0 (vollständig transparent) bis 1.0 (vollständig opak) werden auf diesen Bereich begrenzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text an einem Verlauf ausrichten

Dieses Beispiel erstellt einen {{HTMLElement("div")}} Block mit einem Verlaufs-Hintergrundbild. Der Verlauf wird als CSS-Form mithilfe von `shape-outside` festgelegt, sodass Pixel im Verlauf, die mindestens 20% opak sind (das heißt, Pixel mit einer Alpha-Komponente größer als 0.2), als Teil der Form betrachtet werden.

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

Die Form wird hier mit {{cssxref("background-image")}} und einem linearen Verlauf anstelle einer Bilddatei festgelegt. Derselbe Verlauf wird auch als das Bild verwendet, aus dem die Form für das Festlegen des Float-Bereichs abgeleitet wird, mithilfe der Eigenschaft {{cssxref("shape-outside")}}.

Die 20% Opazitätsschwelle zur Behandlung von Verlaufspixeln als Teil der Form wird dann mit `shape-image-threshold` und einem Wert von `0.2` festgelegt.

#### Ergebnis

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes)
- [Übersicht über CSS Shapes](/de/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("basic-shape")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
