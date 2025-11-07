---
title: background-size
slug: Web/CSS/Reference/Properties/background-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`background-size`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Größe des Hintergrundbildes eines Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder so angepasst werden, dass es in den verfügbaren Raum passt.

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

Bereiche, die nicht von einem Hintergrundbild abgedeckt werden, werden mit der {{cssxref("background-color")}}-Eigenschaft gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern sichtbar, die Transparenz oder Transluzenz haben.

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

- Durch die Schlüsselwortwerte `contain` oder `cover`.
- Durch Angabe nur eines Breitenwerts, wobei die Höhe standardmäßig auf `auto` gesetzt wird.
- Durch Angabe von sowohl Breiten- als auch Höhenwerten, wobei der erste die Breite und der zweite die Höhe festlegt. Jeder Wert kann ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder festzulegen, trennen Sie den Wert für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu verzerren. Wenn der Container größer als das Bild ist, wird dies zu einer Kachelbildung des Bildes führen, es sei denn, die {{cssxref("background-repeat")}}-Eigenschaft ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (wobei das Verhältnis beibehalten wird) auf die kleinstmögliche Größe, um den Container auszufüllen (das heißt: sowohl die Höhe als auch die Breite _decken_ den Container vollständig ab), ohne leerem Raum zu überlassen. Wenn die Proportionen des Hintergrunds sich vom Element unterscheiden, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung, sodass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Stretcht das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stretcht das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_. Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig die Padding-Box). Wenn der Wert des Background's von {{cssxref("background-attachment")}} jedoch `fixed` ist, ist der Positionierungsbereich stattdessen der gesamte {{Glossary("viewport", "Viewport")}}. Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breiten-zu-Höhen-Verhältnis) des Bildes ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorgrafik-Bild (wie SVG) hat nicht notwendigerweise intrinsische Dimensionen. Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen. Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder auch nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}}-Funktion erstellt werden, verwenden die intrinsischen Dimensionen und Proportionen des generierenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/Reference/Values/element) Funktion erstellt werden, derzeit als Bilder mit den Dimensionen des Elements behandelt oder als des Hintergrundpositionierungsbereichs, wenn das Element SVG ist, mit den entsprechenden intrinsischen Proportionen. Dies ist eine nicht standardmäßige Verhaltensweise.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben und nicht `auto` sind:** Das Hintergrundbild wird in der angegebenen Größe dargestellt.
- **Wenn `background-size` `contain` oder `cover` ist:** Unter Beibehaltung seiner intrinsischen Proportionen wird das Bild in der größten Größe dargestellt, die innerhalb oder über den Hintergrundpositionierungsbereich abdeckt. Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs dargestellt.
- **Wenn `background-size` `auto` oder `auto auto` ist:**
  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe dargestellt.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs dargestellt.
  - Wenn das Bild keine intrinsischen Dimensionen hat, aber intrinsische Proportionen, wird es so dargestellt, als ob `contain` angegeben wurde.
  - Wenn das Bild nur eine intrinsische Dimension hat und intrinsische Proportionen hat, wird es in der Größe entsprechend dieser Dimension dargestellt. Die andere Dimension wird anhand der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension hat, aber keine intrinsischen Proportionen, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs dargestellt.

  > [!NOTE]
  > SVG-Bilder haben ein [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio) Attribut, das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size` verursacht, dass `preserveAspectRatio` ignoriert wird.

- **Wenn `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**
  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt. Die nicht angegebene Dimension wird mit der angegebenen Dimension und den intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt. Die nicht angegebene Dimension wird mit der entsprechenden intrinsischen Dimension des Bildes berechnet, falls eine vorhanden ist. Wenn es keine solche intrinsische Dimension gibt, wird es zur entsprechenden Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Das Größenanpassen von Vektorbildern, die keine intrinsischen Dimensionen oder Proportionen haben, ist noch nicht vollständig in allen Browsern implementiert. Seien Sie vorsichtig beim Vertrauen auf das oben beschriebene Verhalten, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kachelung eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir möchten vier Kopien dieses Bildes in einem 300x300-Pixel-Element kacheln. Dazu können wir einen festen `background-size`-Wert von 150 Pixeln verwenden.

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

Sehen Sie [Größenanpassung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größenanpassung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
