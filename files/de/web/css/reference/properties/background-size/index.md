---
title: "`background-size` CSS property"
short-title: background-size
slug: Web/CSS/Reference/Properties/background-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`background-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder so angepasst werden, dass es in den verfügbaren Raum passt.

Bereiche, die nicht mit einem Hintergrundbild abgedeckt sind, werden mit der {{cssxref("background-color")}}-Eigenschaft gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern, die Transparenzen aufweisen, sichtbar sein.

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

- Durch Verwendung der Schlüsselwortwerte `contain` oder `cover`.
- Durch Angabe eines Breitenwerts, wobei die Höhe standardmäßig auf `auto` gesetzt wird.
- Durch Angabe von sowohl Breiten- als auch Höhenwerten, wobei der erste Wert die Breite festlegt und der zweite die Höhe.
  Jeder Wert kann ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie die Werte für jedes Bild durch ein Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zuzuschneiden oder zu stretchen.
    Wenn der Container größer ist als das Bild, führt dies zu Kachelung des Bildes, es sei denn, die {{cssxref("background-repeat")}}-Eigenschaft ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (wobei sein Seitenverhältnis beibehalten wird) auf die kleinstmögliche Größe, um den Container vollständig zu füllen (d.h. sowohl seine Höhe als auch seine Breite _decken_ den Container vollständig ab), ohne dass leerer Raum bleibt.
    Wenn die Proportionen des Hintergrundes von denen des Elements abweichen, wird das Bild entweder vertikal oder horizontal zugeschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung, sodass seine intrinsische Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension bis zur angegebenen Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension bis zum angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_ aus.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Fläche innerhalb des Paddings).
    Wenn jedoch der Wert von {{cssxref("background-attachment")}} des Hintergrunds `fixed` ist, erstreckt sich der Positionierungsbereich stattdessen über den gesamten {{Glossary("viewport", "Ansichtsbereich (viewport)")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) des Bildes und den intrinsischen Proportionen (Breite-zu-Höhe-Verhältnis) ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorgrafikbild (wie SVG) hat möglicherweise keine intrinsischen Dimensionen.
  Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen.
  Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder auch nicht.
- CSS {{cssxref("gradient")}}s haben keine intrinsischen Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element()")}}-Funktion erstellt wurden, verwenden die intrinsischen Dimensionen und Proportionen des generierenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/Reference/Values/element)-Funktion erstellt wurden, derzeit als Bilder mit den Dimensionen des Elements behandelt, oder des Hintergrundpositionierungsbereichs, wenn das Element SVG ist, mit den entsprechenden intrinsischen Proportionen. Dies ist ein nicht standardgemäßes Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn `background-size` `contain` oder `cover` ist:** Während die intrinsischen Proportionen beibehalten werden, wird das Bild in der größten Größe gerendert, die innerhalb der oder die die Fläche des Hintergrundpositionierungsbereichs abdeckt.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
- **Wenn `background-size` `auto` oder `auto auto` ist:**
  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen hat, aber intrinsische Proportionen, wird es so gerendert, als wäre stattdessen `contain` angegeben worden.
  - Wenn das Bild nur eine intrinsische Dimension hat und intrinsische Proportionen, wird es in der Größe gerendert, die dieser einen Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension hat, aber keine intrinsischen Proportionen, wird es unter Verwendung der angegebenen Dimension gerendert, während die andere Dimension der des Hintergrundpositionierungsbereichs entspricht.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio)-Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; ein explizites `background-size` führt dazu, dass `preserveAspectRatio` ignoriert wird.

- **Wenn `background-size` eine `auto`-Komponente und eine nicht-`auto`-Komponente hat:**
  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, falls vorhanden.
    Wenn es keine solche intrinsische Dimension gibt, entspricht sie der entsprechenden Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Die Größenanpassung von Vektorbildern, die keine intrinsischen Dimensionen oder Proportionen haben, ist noch nicht vollständig in allen Browsern implementiert.
> Seien Sie vorsichtig, sich auf das oben beschriebene Verhalten zu verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kachelung eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo. Wir möchten vier Kopien dieses Bildes in ein 300x300-Pixel-Element kacheln.
Dazu können wir einen festen Wert von `background-size` von 150 Pixeln verwenden.

#### HTML

```html
<div class="tiledBackground"></div>
```

#### CSS

```css
.tiledBackground {
  background-image: url("https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png");
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Tiling_a_large_image", 340, 340)}}

Siehe [Resizing background images](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Resizing background images](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [Scaling SVG backgrounds](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
- {{cssxref("object-fit")}}
