---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

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

Bereiche, die nicht von einem Hintergrundbild abgedeckt sind, werden mit der {{cssxref("background-color")}} Eigenschaft gefüllt, und die Hintergrundfarbe wird hinter transparenten oder durchscheinenden Hintergrundbildern sichtbar.

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

Die `background-size` Eigenschaft kann auf folgende Arten angegeben werden:

- Verwenden der Schlüsselwortwerte `contain` oder `cover`.
- Verwenden eines Breitenwertes nur, wobei die Höhe standardmäßig `auto` ist.
- Verwenden sowohl eines Breiten- als auch eines Höhenwerts, wobei der erste die Breite und der zweite die Höhe bestimmt.
  Jeder Wert kann eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder festzulegen, trennen Sie den Wert für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, führt dies zu Bildkacheln, es sei denn, die {{cssxref("background-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinste Größe, um den Container auszufüllen (d.h.: sowohl die Höhe als auch die Breite _decken_ den Container vollständig ab), sodass kein leerer Raum bleibt.
    Wenn die Proportionen des Hintergrunds von denen des Elements abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung so, dass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht zulässig.
- {{cssxref("&lt;percentage&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Padding-Box).
    Wenn jedoch der Wert von {{cssxref("background-attachment")}} des Hintergrunds `fixed` ist, ist der Positionierungsbereich stattdessen das gesamte {{Glossary("viewport", "Ansichtsfenster")}}.
    Negative Werte sind nicht zulässig.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breite-zu-Höhe-Verhältnis) des Bildes ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorgrafikbild (wie SVG) hat nicht notwendigerweise intrinsische Dimensionen.
  Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen.
  Hat es keine Dimensionen oder nur eine Dimension, kann es entweder Proportionen haben oder nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}} Funktion erstellt wurden, verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/element) Funktion erstellt wurden, derzeit als Bilder mit den Dimensionen des Elements behandelt, oder als Bilder des Hintergrundpositionierungsbereichs, falls das Element ein SVG ist, mit den entsprechenden intrinsischen Proportionen. Dies ist ein nicht-standardmäßiges Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto`:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn `background-size` `contain` oder `cover` ist:** Während seine intrinsischen Proportionen beibehalten werden, wird das Bild in der größten Größe gerendert, die innerhalb oder deckend dem Hintergrundpositionierungsbereich entspricht.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
- **Wenn `background-size` `auto` oder `auto auto` ist:**
  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen hat, aber intrinsische Proportionen, wird es gerendert, als ob `contain` spezifiziert worden wäre.
  - Wenn das Bild nur eine intrinsische Dimension hat und intrinsische Proportionen, wird es in der Größe entsprechend dieser einen Dimension gerendert.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension hat, aber keine intrinsischen Proportionen, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size` verursacht, dass `preserveAspectRatio` ignoriert wird.

- **Wenn `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**
  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, falls vorhanden.
    Wenn keine solche intrinsische Dimension vorhanden ist, wird sie zu der entsprechenden Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Die Größenanpassung von Vektorgrafiken, die keine intrinsischen Dimensionen oder Proportionen aufweisen, ist in allen Browsern noch nicht vollständig implementiert.
> Seien Sie vorsichtig bei der Abhängigkeit von dem oben beschriebenen Verhalten und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir möchten vier Kopien dieses Bildes in ein 300x300-Pixel-Element kacheln.
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

Weitere Beispiele finden Sie unter [Hintergrundbilder umskalieren](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hintergrundbilder umskalieren](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [SVG-Hintergründe skalieren](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
