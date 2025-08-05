---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`background-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder an den verfügbaren Platz angepasst werden.

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

Bereiche, die nicht von einem Hintergrundbild abgedeckt sind, werden mit der {{cssxref("background-color")}}-Eigenschaft gefüllt. Die Hintergrundfarbe wird auch hinter Hintergrundbildern sichtbar sein, die Transparenz oder Durchsichtigkeit aufweisen.

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

Die `background-size`-Eigenschaft wird auf eine der folgenden Arten angegeben:

- Verwendung der Schlüsselwortwerte `contain` oder `cover`.
- Verwendung nur eines Breitenwerts, wobei die Höhe standardmäßig auf `auto` gesetzt wird.
- Verwendung sowohl eines Breiten- als auch eines Höhenwerts, wobei der erste die Breite und der zweite die Höhe festlegt.
  Jeder Wert kann ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie den Wert für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zuzuschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, führt dies zu einer Kachelung des Bildes, es sei denn, die {{cssxref("background-repeat")}}-Eigenschaft wird auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (wobei das Verhältnis beibehalten wird) auf die kleinste mögliche Größe, um den Container vollständig auszufüllen (das heißt: Sowohl die Höhe als auch die Breite decken den Container vollständig _ab_), ohne leeren Raum zu lassen.
    Wenn die Proportionen des Hintergrunds vom Element abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung, sodass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Inhalt-Box).
    Wenn jedoch der {{cssxref("background-attachment")}}-Wert des Hintergrunds auf `fixed` gesetzt ist, ist der Positionierungsbereich stattdessen das gesamte {{Glossary("viewport", "Viewport")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Maße und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Maßen des Bildes (Breite und Höhe) und den intrinsischen Proportionen (Breiten-zu-Höhen-Verhältnis) ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Maße und Proportionen.
- Ein Vektorbild (wie SVG) hat nicht unbedingt intrinsische Maße.
  Wenn es sowohl horizontale als auch vertikale intrinsische Maße hat, hat es auch intrinsische Proportionen.
  Wenn es keine Maße oder nur ein Maß hat, hat es möglicherweise oder möglicherweise keine Proportionen.
- CSS-{{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Maße oder intrinsische Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}}-Funktion erstellt werden, verwenden die intrinsischen Maße und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/element)-Funktion erstellt werden, derzeit als Bilder mit den Maßen des Elements oder des Hintergrundpositionierungsbereichs behandelt, wenn das Element ein SVG ist, mit den entsprechenden intrinsischen Proportionen. Dies ist ein nicht standardmäßiges Verhalten.

Basierend auf den intrinsischen Maßen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn die `background-size` `contain` oder `cover` ist:** Während die intrinsischen Proportionen beibehalten werden, wird das Bild in der größten Größe gerendert, die innerhalb des Hintergrundpositionierungsbereichs enthalten ist oder diesen abdeckt.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
- **Wenn die `background-size` `auto` oder `auto auto` ist:**
  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Maße hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Maße und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Maße, aber intrinsische Proportionen hat, wird es gerendert, als wäre `contain` angegeben worden.
  - Wenn das Bild nur ein intrinsisches Maß und intrinsische Proportionen hat, wird es in der Größe gerendert, die dieser Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur ein intrinsisches Maß, aber keine intrinsischen Proportionen hat, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio)-Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size` lässt `preserveAspectRatio` ignorieren.

- **Wenn die `background-size` eine `auto`-Komponente und eine nicht-`auto`-Komponente besitzt:**
  - Wenn das Bild intrinsische Proportionen hat, wird es entsprechend der angegebenen Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es entsprechend der angegebenen Dimension gestreckt.
    Die nicht spezifizierte Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, falls vorhanden.
    Wenn es keine solche intrinsische Dimension gibt, wird es die entsprechende Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Hintergrundgrößen für Vektorbilder, die keine intrinsischen Maße oder Proportionen haben, sind in allen Browsern noch nicht vollständig implementiert.
> Seien Sie vorsichtig, sich auf das oben beschriebene Verhalten zu verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir möchten vier Kopien dieses Bildes in ein 300x300-Pixel großes Element kacheln.
Um dies zu erreichen, können wir einen festen `background-size`-Wert von 150 Pixeln verwenden.

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

Siehe [Resizing background images](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Resizing background images](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [Scaling SVG backgrounds](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
