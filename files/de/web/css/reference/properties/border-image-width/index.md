---
title: border-image-width
slug: Web/CSS/Reference/Properties/border-image-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-image-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements für das [Randbild](/de/docs/Web/CSS/Reference/Properties/border-image) fest.

{{InteractiveExample("CSS Demo: border-image-width")}}

```css interactive-example-choice
border-image-width: 30px;
```

```css interactive-example-choice
border-image-width: 15px 40px;
```

```css interactive-example-choice
border-image-width: 2.6rem;
```

```css interactive-example-choice
border-image-width: 20% 8%;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

Wenn der Wert dieser Eigenschaft größer ist als die {{cssxref("border-width")}} des Elements, wird das Randbild über den Rand der Polsterung (und/oder des Inhalts) hinausgehen.

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

Die `border-image-width`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden, die aus der folgenden Liste ausgewählt werden.

- Wenn **ein** Wert angegeben ist, gilt dieselbe Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt die erste Breite für den **oberen und unteren** Rand, die zweite für den **linken und rechten** Rand.
- Wenn **drei** Werte angegeben sind, gilt die erste Breite für den **oberen** Rand, die zweite für den **linken und rechten**, und die dritte für den **unteren** Rand.
- Wenn **vier** Werte angegeben sind, gelten die Breiten in der Reihenfolge (im Uhrzeigersinn) für den **oberen**, **rechten**, **unteren** und **linken** Rand.

### Werte

- `<length-percentage>`
  - : Die Breite des Randes, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Randbildbereichs für horizontale Abstände und die _Höhe_ des Randbildbereichs für vertikale Abstände. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Randes, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Randes entspricht der intrinsischen Breite oder Höhe (je nachdem, was anwendbar ist) des entsprechenden {{cssxref("border-image-slice")}}. Wenn das Bild die erforderliche intrinsische Dimension nicht hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Randbild kacheln

Dieses Beispiel erstellt ein Randbild mit der folgenden ".png"-Datei, die 90 mal 90 Pixel groß ist:

![Quadratisches Bild mit acht Kreisen. Die Kreise in jeder Ecke sind hellviolett. Die vier Seitenkreise sind blau. Der Bereich in der Mitte, in dem ein neunter Kreis passen könnte, ist leer.](border.png)

Daher ist jeder Kreis im Ausgangsbild 30 mal 30 Pixel groß.

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
- [CSS lernen: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Randbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
