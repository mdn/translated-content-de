---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder so angepasst werden, dass es in den verfügbaren Raum passt.

{{InteractiveExample("CSS Demo: background-size")}}

```css interactive-example-choice
background-size: contain;
```

```css interactive-example-choice
background-size: contain;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-size: cover;
```

```css interactive-example-choice
background-size: 30%;
```

```css interactive-example-choice
background-size: 200px 100px;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/hand.jpg");
  min-width: 100%;
  min-height: 100%;
}
```

Bereiche, die nicht von einem Hintergrundbild abgedeckt sind, werden mit der Eigenschaft {{cssxref("background-color")}} gefüllt, und die Hintergrundfarbe wird hinter den transparenten/halbtransparenten Hintergrundbildern sichtbar sein.

## Syntax

```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Multiple backgrounds */
background-size: auto, auto; /* Not to be confused with `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Global values */
background-size: inherit;
background-size: initial;
background-size: revert;
background-size: revert-layer;
background-size: unset;
```

Die `background-size`-Eigenschaft wird auf eine der folgenden Weisen angegeben:

- Verwendung der Schlüsselwortwerte `contain` oder `cover`.
- Verwendung nur eines Breitenwerts, wobei die Höhe standardmäßig auf `auto` eingestellt ist.
- Verwendung sowohl eines Breiten- als auch eines Höhenwertes, wobei der erste die Breite und der zweite die Höhe festlegt.
  Jeder Wert kann ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie den Wert für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, führt dies zu einer Kachelbildung des Bildes, es sei denn, die Eigenschaft {{cssxref("background-repeat")}} ist auf `no-repeat` eingestellt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinste mögliche Größe, um den Container vollständig auszufüllen (d.h.: sowohl Höhe als auch Breite _decken_ den Container komplett ab), sodass kein leerer Raum bleibt.
    Wenn die Proportionen des Hintergrunds von denen des Elements abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in die entsprechende Richtung, sodass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Polsterungsebene).
    Wenn jedoch der {{cssxref("background-attachment")}}-Wert des Hintergrunds `fixed` ist, ist der Positionierungsbereich stattdessen das gesamte {{Glossary("viewport", "viewport")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breite-zu-Höhe-Verhältnis) des Bildes ab.
Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorbilder (wie SVG) haben nicht unbedingt intrinsische Dimensionen.
  Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen.
  Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder intrinsischen Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}}-Funktion erstellt wurden, verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mithilfe der [`element()`](/de/docs/Web/CSS/element) Funktion erstellt wurden, derzeit als Bilder mit den Dimensionen des Elements behandelt, oder des Hintergrundpositionierungsbereichs, wenn das Element ein SVG ist, mit der entsprechenden intrinsischen Proportion. Dies ist ein nicht standardmäßiges Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die darstellbare Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe dargestellt.
- **Wenn die `background-size` `contain` oder `cover` ist:** Unter Beibehaltung ihrer intrinsischen Proportionen wird das Bild in maximaler Größe innerhalb oder als Abdeckung des Hintergrundpositionierungsbereichs dargestellt.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs dargestellt.
- **Wenn die `background-size` `auto` oder `auto auto` ist:**

  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe dargestellt.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs dargestellt.
  - Wenn das Bild keine intrinsischen Dimensionen hat, aber intrinsische Proportionen, wird es so dargestellt, als ob `contain` angegeben wurde.
  - Wenn das Bild nur eine intrinsische Dimension und intrinsische Proportionen hat, wird es in der Größe dargestellt, die der einen Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension, aber keine intrinsischen Proportionen hat, wird es mit der angegebenen Dimension dargestellt, und die andere Dimension des Hintergrundpositionierungsbereichs wird verwendet.

  > [!NOTE]
  > SVG-Bilder haben ein Attribut [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio), das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size`-Angabe führt dazu, dass `preserveAspectRatio` ignoriert wird.

- **Wenn die `background-size` eine `auto`-Komponente und eine nicht-`auto`-Komponente hat:**

  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, falls vorhanden.
    Wenn keine solche intrinsische Dimension vorhanden ist, wird die entsprechende Dimension des Hintergrundpositionierungsbereichs verwendet.

> [!NOTE]
> Die Hintergrundgrößenanpassung für Vektorbilder, denen intrinsische Dimensionen oder Proportionen fehlen, ist in allen Browsern noch nicht vollständig implementiert.
> Seien Sie vorsichtig, wenn Sie sich auf das oben beschriebene Verhalten verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo. Wir möchten vier Kopien dieses Bildes in ein 300x300-Pixel großes Element kacheln.
Dazu können wir einen festen `background-size`-Wert von 150 Pixeln verwenden.

#### HTML

```html
<div class="tiledBackground"></div>
```

#### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

Siehe [Hintergrundbilder in der Größe anpassen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hintergrundbilder in der Größe anpassen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
