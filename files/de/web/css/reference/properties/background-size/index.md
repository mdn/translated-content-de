---
title: background-size
slug: Web/CSS/Reference/Properties/background-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest.
Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder eingeschränkt werden, um in den verfügbaren Raum zu passen.

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

Räume, die nicht von einem Hintergrundbild abgedeckt sind, werden mit der Eigenschaft {{cssxref("background-color")}} gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern sichtbar sein, die Transparenz/Transluzenz aufweisen.

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

Die Eigenschaft `background-size` wird auf eine der folgenden Arten angegeben:

- Verwendung der Schlüsselwortwerte `contain` oder `cover`.
- Verwendung eines Breitenwerts allein, wobei die Höhe standardmäßig auf `auto` eingestellt ist.
- Verwendung von sowohl einem Breiten- als auch einem Höhenwert, wobei der erste die Breite und der zweite die Höhe bestimmt.
  Jeder Wert kann ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder festzulegen, trennen Sie den Wert für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich in seinem Container, ohne das Bild zu beschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, ergibt dies eine Kachelung des Bildes, es sei denn, die Eigenschaft {{cssxref("background-repeat")}} ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinstmögliche Größe, um den Container vollständig zu füllen (d.h. sowohl Höhe als auch Breite _decken_ den Container vollständig ab), ohne leeren Raum zu lassen.
    Wenn die Proportionen des Hintergrunds vom Element abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in die entsprechende Richtung, sodass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Padding-Box).
    Wenn jedoch der Wert der Hintergrunds {{cssxref("background-attachment")}} `fixed` ist, ist der Positionierungsbereich stattdessen der gesamte {{Glossary("viewport", "Viewport")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Abmessungen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Abmessungen (Breite und Höhe) und den intrinsischen Proportionen (Breite-zu-Höhe-Verhältnis) des Bildes ab.
Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Abmessungen und Proportionen.
- Ein Vektorbilder (wie SVG) hat nicht unbedingt intrinsische Abmessungen.
  Wenn es sowohl horizontale als auch vertikale intrinsische Abmessungen hat, hat es auch intrinsische Proportionen.
  Wenn es keine oder nur eine Dimension hat, kann es Proportionen haben oder nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Abmessungen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}} Funktion erstellt wurden, verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mithilfe der [`element()`](/de/docs/Web/CSS/Reference/Values/element) Funktion erstellt wurden, derzeit als Bilder mit den Abmessungen des Elements oder des Hintergrundpositionierungsbereichs behandelt, wenn das Element ein SVG ist, mit den entsprechenden intrinsischen Proportionen. Dies ist ein nicht-standardisiertes Verhalten.

Basierend auf den intrinsischen Abmessungen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn der `background-size` `contain` oder `cover` ist:** Unter Beibehaltung der intrinsischen Proportionen wird das Bild in der größten Größe dargestellt, die innerhalb des Hintergrundpositionierungsbereichs enthalten ist oder diesen abdeckt.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs dargestellt.
- **Wenn der `background-size` `auto` oder `auto auto` ist:**
  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe dargestellt.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs dargestellt.
  - Wenn das Bild keine intrinsischen Dimensionen, aber intrinsische Proportionen hat, wird es so dargestellt, als ob `contain` angegeben worden wäre.
  - Wenn das Bild nur eine intrinsische Dimension und intrinsische Proportionen hat, wird es in der Größe dargestellt, die dieser einen Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension, aber keine intrinsischen Proportionen hat, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs dargestellt.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size` führt dazu, dass `preserveAspectRatio` ignoriert wird.

- **Wenn der `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**
  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird, falls vorhanden, unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet.
    Wenn keine solche intrinsische Dimension vorhanden ist, wird sie zur entsprechenden Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Die Hintergrundskalierung für Vektorbilder, die keine intrinsischen Abmessungen oder Proportionen haben, ist noch nicht in allen Browsern vollständig implementiert.
> Seien Sie vorsichtig, wenn Sie sich auf das oben beschriebene Verhalten verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kachelung eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir möchten vier Kopien dieses Bildes in ein 300x300-Pixel-Element kacheln.
Um dies zu erreichen, können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

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

Weitere Beispiele finden Sie unter [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [SVG-Hintergründe skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
- {{cssxref("object-fit")}}
