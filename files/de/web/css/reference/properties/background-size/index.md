---
title: background-size
slug: Web/CSS/Reference/Properties/background-size
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes des Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder so angepasst werden, dass es in den verfügbaren Raum passt.

Nicht von einem Hintergrundbild abgedeckte Bereiche werden mit der {{cssxref("background-color")}} Eigenschaft gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern sichtbar sein, die Transparenz aufweisen.

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

Die `background-size` Eigenschaft wird auf eine der folgenden Arten festgelegt:

- Verwendung der Schlüsselwerte `contain` oder `cover`.
- Angabe nur eines Breitenwerts, in diesem Fall entspricht die Höhe dem Standardwert `auto`.
- Angabe sowohl eines Breiten- als auch eines Höhenwerts, wobei der erste die Breite und der zweite die Höhe festlegt. Jeder Wert kann eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie die Werte für jedes einzelne mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu verzerren. Wenn der Container größer als das Bild ist, führt dies zu einer Bildkachelung, es sei denn, die {{cssxref("background-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinstmögliche Größe, um den Container vollständig zu füllen (d.h. sowohl seine Höhe als auch Breite _decken_ den Container vollständig ab), ohne leere Bereiche zu hinterlassen. Wenn die Proportionen des Hintergrundes von denen des Elements abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung so, dass seine inhärenten Proportionen erhalten bleiben.
- {{cssxref("&lt;length&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz der _Hintergrundpositionierungsfläche_ aus. Die Hintergrundpositionierungsfläche wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Padding-Box). Wenn der Wert des Hintergrundes {{cssxref("background-attachment")}} jedoch `fixed` ist, ist die Positionierungsfläche stattdessen das gesamte {{Glossary("viewport", "Viewport")}}. Negative Werte sind nicht erlaubt.

### Inhärente Dimensionen und Proportionen

Die Berechnung der Werte hängt von den inhärenten Dimensionen (Breite und Höhe) und den inhärenten Proportionen (Breiten-Höhen-Verhältnis) des Bildes ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer inhärente Dimensionen und Proportionen.
- Ein Vektorbild (wie SVG) hat nicht unbedingt inhärente Dimensionen. Hat es sowohl horizontale als auch vertikale inhärente Dimensionen, besitzt es auch inhärente Proportionen. Hat es keine Dimensionen oder nur eine Dimension, kann es Proportionen haben oder auch nicht.
- CSS {{cssxref("gradient")}}s haben keine inhärenten Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element()")}} Funktion erstellt wurden, verwenden die inhärenten Dimensionen und Proportionen des generierenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/Reference/Values/element) Funktion erstellt wurden, derzeit als Bilder mit den Dimensionen des Elements behandelt, oder der Hintergrundpositionierungsfläche, wenn das Element SVG ist, mit der entsprechenden inhärenten Proportion. Dies ist ein nicht-standardmäßiges Verhalten.

Basierend auf den inhärenten Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes folgendermaßen berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn `background-size` `contain` oder `cover` ist:** Unter Beibehaltung seiner inhärenten Proportionen wird das Bild in der größten Größe gerendert, die innerhalb der Hintergrundpositionierungsfläche enthalten ist oder diese abdeckt. Hat das Bild keine inhärenten Proportionen, wird es in der Größe der Hintergrundpositionierungsfläche gerendert.
- **Wenn `background-size` `auto` oder `auto auto` ist:**
  - Hat das Bild sowohl horizontale als auch vertikale inhärente Dimensionen, wird es in dieser Größe gerendert.
  - Hat das Bild keine inhärenten Dimensionen und keine Proportionen, wird es in der Größe der Hintergrundpositionierungsfläche gerendert.
  - Hat das Bild keine inhärenten Dimensionen, aber Proportionen, wird es gerendert, als ob `contain` angegeben worden wäre.
  - Hat das Bild nur eine inhärente Dimension und Proportionen, wird es in der Größe der einen Dimension gerendert, wobei die andere Dimension mit der angegebenen Dimension und den inhärenten Proportionen berechnet wird.
  - Hat das Bild nur eine inhärente Dimension, aber keine Proportionen, wird es mit der angegebenen Dimension und der anderen Dimension der Hintergrundpositionierungsfläche gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size` Angabe führt dazu, dass `preserveAspectRatio` ignoriert wird.

- **Wenn `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**
  - Hat das Bild inhärente Proportionen, wird es auf die angegebene Dimension gestreckt. Die nicht spezifizierte Dimension wird mit der angegebenen Dimension und den inhärenten Proportionen berechnet.
  - Hat das Bild keine inhärenten Proportionen, wird es auf die angegebene Dimension gestreckt. Die nicht spezifizierte Dimension wird mit der entsprechenden inhärenten Dimension des Bildes berechnet, falls vorhanden. Gibt es keine solche inhärente Dimension, wird es die entsprechende Dimension der Hintergrundpositionierungsfläche.

> [!NOTE]
> Die Größenanpassung von Hintergrundbildern für Vektorbilder, die keine inhärenten Dimensionen oder Proportionen besitzen, ist noch nicht in allen Browsern vollständig implementiert. Seien Sie vorsichtig, sich auf das oben beschriebene Verhalten zu verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir möchten vier Kopien dieses Bildes in ein 300x300-Pixel-Element kacheln. Dazu können wir einen festen `background-size` Wert von 150 Pixel festlegen.

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

Siehe [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [SVG-Hintergründe skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
- {{cssxref("object-fit")}}
