---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder an den verfügbaren Raum angepasst werden.

{{EmbedInteractiveExample("pages/css/background-size.html")}}

Bereiche, die nicht von einem Hintergrundbild abgedeckt sind, werden mit der Eigenschaft {{cssxref("background-color")}} gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern sichtbar, die Transparenz oder Transluzenz aufweisen.

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

Die Eigenschaft `background-size` wird in einer der folgenden Weisen angegeben:

- Verwendung der Schlüsselwortwerte `contain` oder `cover`.
- Verwendung eines einzigen Breitenwertes, wobei die Höhe standardmäßig auf `auto` gesetzt ist.
- Verwendung sowohl von Breiten- als auch von Höhenwerten, wobei der erste die Breite und der zweite die Höhe festlegt. Jeder Wert kann ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie den Wert für jedes mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu strecken. Wenn der Container größer als das Bild ist, führt dies zu einer Kachelung des Bildes, es sei denn, die Eigenschaft {{cssxref("background-repeat")}} ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung des Verhältnisses) auf die kleinste mögliche Größe, um den Container vollständig zu füllen (d. h. sowohl Höhe als auch Breite _decken_ den Container vollständig ab), ohne leeren Raum zu hinterlassen. Wenn die Proportionen des Hintergrunds vom Element abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung, sodass seine intrinsischen Proportionen erhalten bleiben.
- {{cssxref("&lt;length&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrund-Positionierungsbereichs_. Der Hintergrund-Positionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig das Padding-Box). Wenn jedoch der `background-attachment` Wert des Hintergrunds `fixed` ist, ist der Positionierungsbereich stattdessen das gesamte [Viewport](/de/docs/Glossary/viewport). Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breiten-zu-Höhen-Verhältnis) des Bildes ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorbilder (wie SVG) hat nicht unbedingt intrinsische Dimensionen. Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen. Wenn es keine Dimensionen oder nur eine Dimension hat, kann es möglicherweise Proportionen haben.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}} Funktion erstellt wurden, verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/element) Funktion erstellt wurden, derzeit als Bilder behandelt, die die Dimensionen des Elements oder des Hintergrund-Positionierungsbereichs haben, wenn das Element SVG ist, mit der entsprechenden intrinsischen Proportion. Dies ist ein nicht standardmäßiges Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn `background-size` `contain` oder `cover` ist:** Unter Beibehaltung der intrinsischen Proportionen wird das Bild in der größten Größe gerendert, die innerhalb des Hintergrund-Positionierungsbereichs enthalten ist oder diesen abdeckt. Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrund-Positionierungsbereichs gerendert.
- **Wenn `background-size` `auto` oder `auto auto` ist:**

  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine Proportionen hat, wird es in der Größe des Hintergrund-Positionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen, aber intrinsische Proportionen hat, wird es gerendert, als wäre `contain` angegeben worden.
  - Wenn das Bild nur eine intrinsische Dimension hat und Proportionen hat, wird es in der Größe gerendert, die dieser einen Dimension entspricht. Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension, aber keine Proportionen hat, wird es mit der angegebenen Dimension und der anderen Dimension des Hintergrund-Positionierungsbereichs gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio) Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; ein explizites `background-size` bewirkt, dass `preserveAspectRatio` ignoriert wird.

- **Wenn `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**

  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt. Die nicht spezifizierte Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt. Die nicht spezifizierte Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, wenn es eine gibt. Wenn es keine solche intrinsische Dimension gibt, wird sie zur entsprechenden Dimension des Hintergrund-Positionierungsbereichs.

> [!NOTE]
> Die Größenberechnung für Vektorbilder, die keine intrinsischen Dimensionen oder Proportionen aufweisen, ist noch nicht in allen Browsern vollständig implementiert. Seien Sie vorsichtig, wenn Sie sich auf das oben beschriebene Verhalten verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir wollen vier Kopien dieses Bildes in ein Element mit 300x300 Pixeln kacheln. Dazu können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

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
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
