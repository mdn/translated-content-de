---
title: background-size
slug: Web/CSS/Reference/Properties/background-size
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest.
Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder so angepasst werden, dass es in den verfügbaren Raum passt.

Bereiche, die nicht von einem Hintergrundbild abgedeckt sind, werden mit der {{cssxref("background-color")}} Eigenschaft gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern sichtbar, die Transparenz/Transluzenz aufweisen.

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

Die `background-size` Eigenschaft wird auf eine der folgenden Arten angegeben:

- Verwenden der Schlüsselwortwerte `contain` oder `cover`.
- Verwenden eines Wert für die Breite, wobei die Höhe standardmäßig auf `auto` gesetzt ist.
- Verwenden sowohl eines Breiten- als auch eines Höhenwertes, wobei der erste die Breite und der zweite die Höhe festlegt.
  Jeder Wert kann eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder festzulegen, trennen Sie den Wert für jedes mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zuzuschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, wird dies zu einer Kachelung des Bildes führen, außer die {{cssxref("background-repeat")}} Eigenschaft ist auf `no-repeat` eingestellt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinste mögliche Größe, um den Container zu füllen (d.h. sowohl seine Höhe als auch Breite _decken_ den Container vollständig ab), sodass kein Leerraum bleibt.
    Wenn die Proportionen des Hintergrunds von denen des Elements abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in die entsprechende Richtung, sodass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf die angegebene Länge aus. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_ aus.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig der innerer Abstand).
    Wenn jedoch der {{cssxref("background-attachment")}} Wert des Hintergrunds `fixed` ist, ist der Positionierungsbereich stattdessen der gesamte {{Glossary("viewport", "viewport")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breite-zu-Höhe-Verhältnis) des Bildes ab.
Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorbild (wie SVG) muss nicht unbedingt intrinsische Dimensionen haben.
  Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen.
  Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}} Funktion erstellt werden, verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mithilfe der [`element()`](/de/docs/Web/CSS/Reference/Values/element) Funktion erstellt wurden, derzeit als Bilder mit den Dimensionen des Elements oder des Hintergrundpositionierungsbereichs behandelt, wenn das Element SVG ist, mit der entsprechenden intrinsischen Proportion. Dies ist ein nicht-standardmäßiges Verhalten.

Ausgehend von den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto`:** Wird das Hintergrundbild in der angegebenen Größe gerendert.
- **Wenn `background-size` `contain` oder `cover`:** Unter Beibehaltung seiner intrinsischen Proportionen wird das Bild in der größten im Hintergrundpositionierungsbereich enthaltenen Größe oder diesen vollständig abdeckenden Größe gerendert.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
- **Wenn `background-size` `auto` oder `auto auto`:**
  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen, aber intrinsische Proportionen hat, wird es gerendert, als ob `contain` angegeben worden wäre.
  - Wenn das Bild nur eine intrinsische Dimension und intrinsische Proportionen hat, wird es in der Größe gerendert, die dieser einen Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension, aber keine intrinsischen Proportionen hat, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; ein explizites `background-size` führt dazu, dass `preserveAspectRatio` ignoriert wird.

- **Wenn `background-size` eine `auto` Komponente und eine nicht `auto` Komponente hat:**
  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes, falls vorhanden, berechnet.
    Wenn es keine solche intrinsische Dimension gibt, wird es die entsprechende Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Die Hintergrundskalierung für Vektorbilder, die keine intrinsischen Dimensionen oder Proportionen haben, ist noch nicht vollständig in allen Browsern implementiert.
> Seien Sie vorsichtig, sich auf das oben beschriebene Verhalten zu verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir wollen vier Kopien dieses Bildes in ein 300x300-Pixel-Element kacheln.
Dazu können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

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
