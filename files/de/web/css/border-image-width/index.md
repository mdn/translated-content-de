---
title: border-image-width
slug: Web/CSS/border-image-width
l10n:
  sourceCommit: fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{CSSRef}}

Die **`border-image-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Border-Images](/de/docs/Web/CSS/border-image) eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

Wenn der Wert dieser Eigenschaft größer ist als die {{cssxref("border-width")}} des Elements, reicht das Border-Image über den Rand des Innenabstands (und/oder des Inhalts) hinaus.

## Syntax

```css
/* Schlüsselwortwert */
border-image-width: auto;

/* <Längen> Wert */
border-image-width: 1rem;

/* <Prozent> Wert */
border-image-width: 25%;

/* <Zahlen> Wert */
border-image-width: 3;

/* oben und unten | links und rechts */
border-image-width: 2em 3em;

/* oben | links und rechts | unten */
border-image-width: 5% 15% 10%;

/* oben | rechts | unten | links */
border-image-width: 5% 2em 10% auto;

/* Globale Werte */
border-image-width: inherit;
border-image-width: initial;
border-image-width: revert;
border-image-width: revert-layer;
border-image-width: unset;
```

Die `border-image-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt die gleiche Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Wert für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Wert für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Breiten in dieser Reihenfolge: **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Borders, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentwerte beziehen sich auf die _Breite_ des Border-Image-Bereichs für horizontale Offsets und die _Höhe_ des Border-Image-Bereichs für vertikale Offsets. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Borders, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Borders entspricht der intrinsischen Breite oder Höhe (je nachdem was zutrifft) des entsprechenden {{cssxref("border-image-slice")}}. Falls das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kacheln eines Border-Images

Dieses Beispiel erstellt ein Border-Image mit der folgenden ".png"-Datei, die 90 mal 90 Pixel groß ist:

![Quadratisches Bild mit acht Kreisen. Die Kreise in jeder Ecke sind hellviolett. Die vier Seitenkreise sind blau. Der Bereich in der Mitte, wo ein neunter Kreis passen könnte, ist leer.](border.png)

Jeder Kreis im Quellbild ist also 30 mal 30 Pixel groß.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Border-Images in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
