---
title: border-image-width
slug: Web/CSS/border-image-width
l10n:
  sourceCommit: fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{CSSRef}}

Die **`border-image-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Border-Images](/de/docs/Web/CSS/border-image) eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

Wenn der Wert dieser Eigenschaft größer ist als die {{cssxref("border-width")}} des Elements, wird das Border-Image über den Rand des Padding- (und/oder Inhalts-) Bereichs hinausragen.

## Syntax

```css
/* Keyword value */
border-image-width: auto;

/* <length> value */
border-image-width: 1rem;

/* <percentage> value */
border-image-width: 25%;

/* <number> value */
border-image-width: 3;

/* top and bottom | left and right */
border-image-width: 2em 3em;

/* top | left and right | bottom */
border-image-width: 5% 15% 10%;

/* top | right | bottom | left */
border-image-width: 5% 2em 10% auto;

/* Global values */
border-image-width: inherit;
border-image-width: initial;
border-image-width: revert;
border-image-width: revert-layer;
border-image-width: unset;
```

Die Eigenschaft `border-image-width` kann mit einem, zwei, drei oder vier Werten aus der folgenden Liste angegeben werden.

- Wenn **ein** Wert angegeben ist, gilt die gleiche Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, wird die erste Breite auf **oben und unten** angewendet, die zweite auf **links und rechts**.
- Wenn **drei** Werte angegeben sind, wird die erste Breite auf **oben**, die zweite auf **links und rechts** und die dritte auf **unten** angewendet.
- Wenn **vier** Werte angegeben sind, gelten die Breiten in der Reihenfolge **oben**, **rechts**, **unten** und **links** im Uhrzeigersinn.

### Werte

- `<length-percentage>`
  - : Die Breite des Randes, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Border-Image-Bereichs für horizontale Verschiebungen und auf die _Höhe_ des Border-Image-Bereichs für vertikale Verschiebungen. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Randes, angegeben als ein Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Randes wird gleich der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("border-image-slice")}} gemacht. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kachelung eines Border-Images

Dieses Beispiel erstellt ein Border-Image unter Verwendung der folgenden ".png"-Datei, die 90 mal 90 Pixel groß ist:

![Quadratisches Bild mit acht Kreisen. Die Kreise in jeder Ecke sind hellviolett. Die vier Seitenkreise sind blau. Der Bereich in der Mitte, in dem ein neunter Kreis passen könnte, ist leer.](border.png)

Jeder Kreis im Quellbild ist somit 30 mal 30 Pixel groß.

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

#### CSS

```css
p {
  border: 20px solid;
  border-image: url("border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}
```

#### Ergebnis

{{EmbedLiveSample('Tiling_a_border_image', 200, 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Border-Images in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
