---
title: background-size
slug: Web/CSS/background-size
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`background-size`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe des Hintergrundbildes eines Elements fest. Das Bild kann in seiner natürlichen Größe belassen, gestreckt oder an den verfügbaren Platz angepasst werden.

{{EmbedInteractiveExample("pages/css/background-size.html")}}

Von einem Hintergrundbild nicht überdeckte Bereiche werden mit der Eigenschaft {{cssxref("background-color")}} gefüllt, und die Hintergrundfarbe wird hinter Hintergrundbildern sichtbar, die Transparenz/Transluzenz aufweisen.

## Syntax

```css
/* Schlüsselwort-Werte */
background-size: cover;
background-size: contain;

/* Ein-Wert-Syntax */
/* die Breite des Bildes (Höhe wird 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Zwei-Werte-Syntax */
/* erster Wert: Breite des Bildes, zweiter Wert: Höhe */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Mehrere Hintergründe */
background-size: auto, auto; /* Nicht zu verwechseln mit `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Globale Werte */
background-size: inherit;
background-size: initial;
background-size: revert;
background-size: revert-layer;
background-size: unset;
```

Die Eigenschaft `background-size` wird auf eine der folgenden Arten angegeben:

- Verwendung der Schlüsselwort-Werte `contain` oder `cover`.
- Verwendung nur eines Breitenwerts, wobei die Höhe standardmäßig `auto` ist.
- Verwendung sowohl eines Breiten- als auch eines Höhenwerts, wobei der erste die Breite und der zweite die Höhe festlegt.
  Jeder Wert kann eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder `auto` sein.

Um die Größe mehrerer Hintergrundbilder anzugeben, trennen Sie den Wert für jedes Bild mit einem Komma.

### Werte

- `contain`
  - : Skaliert das Bild so groß wie möglich innerhalb seines Containers, ohne das Bild zu beschneiden oder zu strecken.
    Wenn der Container größer als das Bild ist, führt dies zu einer Kachelbildung des Bildes, es sei denn, die Eigenschaft {{cssxref("background-repeat")}} ist auf `no-repeat` gesetzt.
- `cover`
  - : Skaliert das Bild (unter Beibehaltung seines Verhältnisses) auf die kleinstmögliche Größe, um den Container zu füllen (das heißt: sowohl seine Höhe als auch Breite _decken_ den Container vollständig ab), ohne Leerraum zu hinterlassen.
    Wenn die Proportionen des Hintergrunds von denen des Elements abweichen, wird das Bild entweder vertikal oder horizontal beschnitten.
- `auto`
  - : Skaliert das Hintergrundbild in der entsprechenden Richtung so, dass seine intrinsischen Proportionen beibehalten werden.
- {{cssxref("&lt;length&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf die angegebene Länge. Negative Werte sind nicht erlaubt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Dehnt das Bild in der entsprechenden Dimension auf den angegebenen Prozentsatz des _Hintergrundpositionierungsbereichs_.
    Der Hintergrundpositionierungsbereich wird durch den Wert von {{cssxref("background-origin")}} bestimmt (standardmäßig der Padding-Bereich).
    Wenn der Hintergrundwert von {{cssxref("background-attachment")}} `fixed` ist, ist der Positionierungsbereich stattdessen das gesamte {{glossary("viewport")}}.
    Negative Werte sind nicht erlaubt.

### Intrinsische Dimensionen und Proportionen

Die Berechnung der Werte hängt von den intrinsischen Dimensionen (Breite und Höhe) und den intrinsischen Proportionen (Breite-Höhe-Verhältnis) des Bildes ab. Diese Attribute sind wie folgt:

- Ein Bitmap-Bild (wie JPG) hat immer intrinsische Dimensionen und Proportionen.
- Ein Vektorbild (wie SVG) hat möglicherweise keine intrinsischen Dimensionen.
  Wenn es sowohl horizontale als auch vertikale intrinsische Dimensionen hat, hat es auch intrinsische Proportionen.
  Wenn es keine Dimensionen oder nur eine Dimension hat, kann es Proportionen haben oder nicht.
- CSS {{cssxref("&lt;gradient&gt;")}}s haben keine intrinsischen Dimensionen oder Proportionen.
- Hintergrundbilder, die mit der {{cssxref("element", "element()")}} Funktion erstellt werden, verwenden die intrinsischen Dimensionen und Proportionen des generierenden Elements.

> [!NOTE]
> In Gecko werden Hintergrundbilder, die mit der [`element()`](/de/docs/Web/CSS/element) Funktion erstellt wurden, derzeit als Bilder mit den Dimensionen des Elements oder des Hintergrundpositionierungsbereichs behandelt, wenn das Element SVG ist, mit der entsprechenden intrinsischen Proportion. Dies ist ein nicht standardmäßiges Verhalten.

Basierend auf den intrinsischen Dimensionen und Proportionen wird die gerenderte Größe des Hintergrundbildes wie folgt berechnet:

- **Wenn beide Komponenten von `background-size` angegeben sind und nicht `auto`:** Das Hintergrundbild wird in der angegebenen Größe gerendert.
- **Wenn die `background-size` `contain` oder `cover` ist:** Unter Beibehaltung seiner intrinsischen Proportionen wird das Bild in der größtmöglichen Größe gerendert, die im Hintergrundpositionierungsbereich enthalten ist oder ihn abdeckt.
  Wenn das Bild keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
- **Wenn die `background-size` `auto` oder `auto auto` ist:**

  - Wenn das Bild sowohl horizontale als auch vertikale intrinsische Dimensionen hat, wird es in dieser Größe gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen und keine intrinsischen Proportionen hat, wird es in der Größe des Hintergrundpositionierungsbereichs gerendert.
  - Wenn das Bild keine intrinsischen Dimensionen, aber intrinsische Proportionen hat, wird es gerendert, als wäre `contain` angegeben worden.
  - Wenn das Bild nur eine intrinsische Dimension und intrinsische Proportionen hat, wird es in der Größe gerendert, die dieser einen Dimension entspricht.
    Die andere Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild nur eine intrinsische Dimension hat, aber keine intrinsischen Proportionen hat, wird es unter Verwendung der angegebenen Dimension und der anderen Dimension des Hintergrundpositionierungsbereichs gerendert.

  > [!NOTE]
  > SVG-Bilder haben ein Attribut [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio), das standardmäßig dem Äquivalent von `contain` entspricht; eine explizite `background-size` führt dazu, dass `preserveAspectRatio` ignoriert wird.

- **Wenn die `background-size` eine `auto` Komponente und eine nicht-`auto` Komponente hat:**

  - Wenn das Bild intrinsische Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der angegebenen Dimension und der intrinsischen Proportionen berechnet.
  - Wenn das Bild keine intrinsischen Proportionen hat, wird es auf die angegebene Dimension gestreckt.
    Die nicht angegebene Dimension wird unter Verwendung der entsprechenden intrinsischen Dimension des Bildes berechnet, wenn es eine gibt.
    Wenn es keine solche intrinsische Dimension gibt, wird sie zur entsprechenden Dimension des Hintergrundpositionierungsbereichs.

> [!NOTE]
> Die Hintergrundgrößenanpassung für Vektorbilder, die keine intrinsischen Dimensionen oder Proportionen haben, ist in allen Browsern noch nicht vollständig implementiert.
> Seien Sie vorsichtig damit, sich auf das oben beschriebene Verhalten zu verlassen, und testen Sie in mehreren Browsern, um sicherzustellen, dass die Ergebnisse akzeptabel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kachelung eines großen Bildes

Betrachten wir ein großes Bild, ein 2982x2808 Firefox-Logo-Bild. Wir möchten vier Kopien dieses Bildes in ein 300x300-Pixel-Element kacheln. Dafür können wir einen festen `background-size` Wert von 150 Pixeln verwenden.

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

Weitere Beispiele finden Sie unter [Größe von Hintergrundbildern ändern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Größe von Hintergrundbildern ändern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [Skalierung von SVG-Hintergründen](/de/docs/Web/CSS/Scaling_of_SVG_backgrounds)
- {{cssxref("object-fit")}}
