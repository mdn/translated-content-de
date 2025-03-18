---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbilds eines Elements fest.
Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder so angepasst werden, dass es in den verfügbaren Raum passt.

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

Bereiche, die nicht von einem Hintergrundbild abgedeckt sind, werden mit der {{cssxref("background-color")}} Eigenschaft gefüllt. Die Hintergrundfarbe ist hinter Hintergrundbildern sichtbar, die Transparenz/Transluzenz aufweisen.

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

Die `background-size` Eigenschaft wird auf eine der folgenden Arten angegeben:

- Mit den Schlüsselwortwerten `contain` oder `cover`.
- Mit nur einem Breitenwert, wobei die Höhe standardmäßig auf `auto` gesetzt ist.
- Mit sowohl Breiten- als auch Höhenwerten, wobei der erste die Breite und der zweite die Höhe festlegt.
  Jeder Wert kann ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie die Werte für jedes durch ein Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, führt dies zu einer Wiederholung des Bildes, es sei denn, die {{cssxref("background-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung des Verhältnisses) auf die kleinste mögliche Größe, um den Container vollständig zu füllen (d.h.: sowohl seine Höhe als auch Breite _decken_ den Container vollständig ab), ohne leeren Raum zu lassen.
    Wenn die Proportionen des Hintergrunds vom Element abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung so, dass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf die angegebene Länge aus. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsareals_ aus.
    Das Hintergrundpositionierungsareal wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Padding-Box).
    Wenn jedoch der Wert von {{cssxref("background-attachment")}} des Hintergrunds `fixed` ist, ist das Positionierungsareal statt dessen der gesamte {{Glossary("viewport", "viewport")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breiten-Höhen-Verhältnis) des Bildes ab.
Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (z.B. JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorbeschlagsbild (z.B. SVG) hat nicht zwangsläufig intrinsische Dimensionen.
  Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen.
  Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}} Funktion erstellt werden, verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/element) Funktion erstellt werden, derzeit als Bilder mit den Dimensionen des Elements oder des Hintergrundpositionierungsareals behandelt, wenn das Element SVG ist, mit der entsprechenden intrinsischen Proportion. Dies ist ein nicht-standardskonformes Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto`:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn `background-size` `contain` oder `cover`:** Unter Beibehaltung seiner intrinsischen Proportionen wird das Bild in der größten Größe gerendert, die innerhalb des Hintergrundpositionierungsareals enthalten oder es bedeckend ist.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsareals gerendert.
- **Wenn `background-size` `auto` oder `auto auto`:**

  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsareals gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen, aber intrinsische Proportionen hat, wird es gerendert, als ob `contain` angegeben wäre.
  - Wenn das Bild nur eine intrinsische Dimension und intrinsische Proportionen hat, wird es in der Größe gerendert, die dieser einen Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension, aber keine intrinsischen Proportionen hat, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsareals gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein Attribut [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio), das standardmäßig dem Äquivalent von `contain` entspricht; ein explizites `background-size` bewirkt, dass `preserveAspectRatio` ignoriert wird.

- **Wenn `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**
  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, falls vorhanden.
    Wenn keine solche intrinsische Dimension existiert, wird sie zur entsprechenden Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Die Größendarstellung für Vektorbilder, die keine intrinsischen Dimensionen oder Proportionen haben, ist in allen Browsern noch nicht vollständig implementiert.
> Seien Sie vorsichtig, sich auf das oben beschriebene Verhalten zu verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo. Wir möchten vier Kopien dieses Bildes in einem 300x300-Pixel-Element kacheln.
Dazu können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

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
