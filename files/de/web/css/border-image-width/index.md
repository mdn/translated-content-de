---
title: border-image-width
slug: Web/CSS/border-image-width
l10n:
  sourceCommit: fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{CSSRef}}

Die **`border-image-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Rahmenbildes](/de/docs/Web/CSS/border-image) eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

Wenn der Wert dieser Eigenschaft größer ist als die {{cssxref("border-width")}} des Elements, wird das Rahmenbild über den Rand des Paddings (und/oder Inhalts) hinausragen.

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

Die `border-image-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten aus der unten stehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt dieselbe Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Rahmens, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Bereichs des Rahmenbildes für horizontale Versätze und auf die _Höhe_ des Bereichs des Rahmenbildes für vertikale Versätze. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Rahmens, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Rahmens wird gleich der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("border-image-slice")}}. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Tiling eines Rahmenbildes

Dieses Beispiel erstellt ein Rahmenbild mit der folgenden ".png"-Datei, die 90 x 90 Pixel groß ist:

![Quadratisches Bild, das acht Kreise enthält. Die Kreise in jeder Ecke sind hellviolett. Die vier Seitenkreise sind blau. Der Bereich in der Mitte, in dem ein neunter Kreis passen könnte, ist leer.](border.png)

Daher ist jeder Kreis im Ausgangsbild 30 x 30 Pixel groß.

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

- [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Rahmenbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
