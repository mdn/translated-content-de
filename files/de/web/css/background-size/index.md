---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest.
Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder angepasst werden, um in den verfügbaren Raum zu passen.

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

Bereiche, die von einem Hintergrundbild nicht abgedeckt werden, werden mit der {{cssxref("background-color")}} Eigenschaft gefüllt, und die Hintergrundfarbe ist hinter Hintergrundbildern sichtbar, die Transparenz/Transluzenz aufweisen.

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

Die `background-size` Eigenschaft wird auf eine der folgenden Arten spezifiziert:

- Verwendung der Schlüsselwortwerte `contain` oder `cover`.
- Verwendung nur eines Breitenwerts, wobei die Höhe standardmäßig `auto` ist.
- Verwendung sowohl eines Breiten- als auch eines Höhenwerts, wobei der erste die Breite festlegt und der zweite die Höhe festlegt.
  Jeder Wert kann eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie die Werte für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, führt dies zu einer Bildkachelung, es sei denn, die {{cssxref("background-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinstmögliche Größe, um den Container vollständig zu füllen (d.h.: sowohl Höhe als auch Breite _überdecken_ den Container), sodass kein Leerraum bleibt.
    Wenn die Proportionen des Hintergrunds vom Element abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung so, dass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig der Padding-Bereich).
    Wenn jedoch der {{cssxref("background-attachment")}} Wert des Hintergrunds `fixed` ist, wird der Positionierungsbereich stattdessen der vollständige {{Glossary("viewport", "Viewport")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breite zu Höhe Verhältnis) des Bildes ab.
Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorbild (wie SVG) hat möglicherweise keine intrinsischen Dimensionen.
  Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen.
  Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder auch nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder intrinsischen Proportionen.
- Mit der {{cssxref("element", "element()")}} Funktion erstellte Hintergrundbilder verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/element) Funktion erstellt wurden, derzeit als Bilder mit den Dimensionen des Elements oder des Hintergrundpositionierungsbereichs behandelt, wenn das Element SVG ist, mit den entsprechenden intrinsischen Proportionen. Dies ist ein nicht standardgemäßes Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn `background-size` `contain` oder `cover` ist:** Unter Beibehaltung seiner intrinsischen Proportionen wird das Bild in der größten Größe gerendert, die innerhalb oder über den Hintergrundpositionierungsbereich passt.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
- **Wenn `background-size` `auto` oder `auto auto` ist:**

  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen, aber intrinsische Proportionen hat, wird es gerendert, als ob `contain` angegeben worden wäre.
  - Wenn das Bild nur eine intrinsische Dimension und intrinsische Proportionen hat, wird es in der Größe gerendert, die dieser Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension, aber keine intrinsischen Proportionen hat, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) Attribut, das standardmäßig einem `contain` entspricht; ein explizites `background-size` lässt `preserveAspectRatio` ignorieren.

- **Wenn `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**

  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, falls vorhanden.
    Wenn es keine solche intrinsische Dimension gibt, wird sie zur entsprechenden Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Das Skalieren für Vektorbilder, die keine intrinsischen Dimensionen oder Proportionen haben, ist in allen Browsern noch nicht vollständig implementiert.
> Seien Sie vorsichtig bei der Abhängigkeit von dem oben beschriebenen Verhalten und testen Sie es in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo Bild. Wir möchten vier Kopien dieses Bildes in ein Element mit 300x300 Pixel einfügen.
Um dies zu tun, können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

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

Siehe [Größenanpassung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größenanpassung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
