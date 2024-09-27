---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder an den verfügbaren Platz angepasst werden.

{{EmbedInteractiveExample("pages/css/background-size.html")}}

Mit einem Hintergrundbild nicht abgedeckte Bereiche werden mit der {{cssxref("background-color")}} Eigenschaft gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern sichtbar, die Transparenz oder Durchsichtigkeit aufweisen.

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

Die `background-size` Eigenschaft wird auf eine der folgenden Weisen angegeben:

- Verwenden der Schlüsselwortwerte `contain` oder `cover`.
- Verwenden eines Breitenwerts nur, wobei die Höhe standardmäßig auf `auto` gesetzt ist.
- Verwenden sowohl eines Breiten- als auch eines Höhenwerts, wobei der erste die Breite und der zweite die Höhe festlegt. Jeder Wert kann eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder festzulegen, trennen Sie den Wert für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu strecken. Wenn der Container größer als das Bild ist, führt dies zur Kachelbildung des Bildes, es sei denn, die {{cssxref("background-repeat")}} Eigenschaft ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinste mögliche Größe, um den Container zu füllen (d. h. sowohl seine Höhe als auch Breite decken den Container vollständig ab), wobei kein leerer Raum übrig bleibt. Wenn die Proportionen des Hintergrunds von dem Element abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in die entsprechende Richtung, sodass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Streckt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_. Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Padding-Box). Wenn jedoch der Wert von {{cssxref("background-attachment")}} des Hintergrunds `fixed` ist, ist der Positionierungsbereich stattdessen das gesamte [Viewport](/de/docs/Glossary/viewport). Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen des Bildes (Breite und Höhe) und den intrinsischen Proportionen (Breiten-Höhen-Verhältnis) ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorbild (wie SVG) hat nicht unbedingt intrinsische Dimensionen. Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen. Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder auch nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder intrinsischen Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}} Funktion erstellt wurden, verwenden die intrinsischen Dimensionen und Proportionen des erzeugenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/element) Funktion erstellt wurden, derzeit als Bilder mit den Abmessungen des Elements behandelt, oder des Hintergrundpositionierungsbereichs, wenn das Element SVG ist, mit den entsprechenden intrinsischen Proportionen. Dies ist ein nicht standardmäßiges Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn die `background-size` `contain` oder `cover` ist:** Unter Beibehaltung seiner intrinsischen Proportionen wird das Bild in der größten Größe innerhalb oder die den Hintergrundpositionierungsbereich abdeckt, gerendert. Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
- **Wenn die `background-size` `auto` oder `auto auto` ist:**

  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen, aber intrinsische Proportionen hat, wird es so gerendert, als ob `contain` anstelle angegeben wurde.
  - Wenn das Bild nur eine intrinsische Dimension und intrinsische Proportionen hat, wird es in der Größe gerendert, die dieser einen Dimension entspricht. Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension hat, aber keine intrinsischen Proportionen, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio) Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size` bewirkt, dass `preserveAspectRatio` ignoriert wird.

- **Wenn die `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**

  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt. Die nicht angegebene Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt. Die nicht angegebene Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, wenn es eine solche gibt. Gibt es keine solche intrinsische Dimension, wird es die entsprechende Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Die Größenänderung für Vektorbilder, die keine intrinsischen Dimensionen oder Proportionen haben, ist nicht in allen Browsern vollständig implementiert. Seien Sie vorsichtig, sich auf das oben beschriebene Verhalten zu verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines großen Bildes

Lassen Sie uns ein großes Bild betrachten, ein 2982x2808 Firefox-Logo-Bild. Wir möchten vier Kopien dieses Bildes in einem 300x300-Pixel-Element kacheln. Um dies zu tun, können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

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

Sehen Sie [Größenänderung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größenänderung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
