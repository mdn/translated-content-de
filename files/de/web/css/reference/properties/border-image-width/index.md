---
title: border-image-width
slug: Web/CSS/Reference/Properties/border-image-width
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`border-image-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements [Border Image](/de/docs/Web/CSS/Reference/Properties/border-image) fest.

Wenn der Wert dieser Eigenschaft größer ist als die {{cssxref("border-width")}} des Elements, wird das Border Image über den Rand des Inhalts (und/oder Inhaltsbereichs) hinausgehen.

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

Die `border-image-width`-Eigenschaft kann mit einem, zwei, drei oder vier Werten aus der unten stehenden Liste von Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt dieselbe Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Rands, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich bei horizontalen Versätzen auf die _Breite_ des Border-Image-Bereichs und bei vertikalen Versätzen auf die _Höhe_ des Border-Image-Bereichs. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Rands, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Rands wird der intrinsischen Breite oder Höhe (je nach Anwendbarkeit) des entsprechenden {{cssxref("border-image-slice")}} gleichgesetzt. Wenn das Bild die erforderliche intrinsische Abmessung nicht hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Tiles für ein Border Image

Dieses Beispiel erstellt ein Border Image mit der folgenden ".png"-Datei, die 90 mal 90 Pixel groß ist:

![Quadratisches Bild mit acht Kreisen. Die Kreise in jeder Ecke sind hell-lila. Die vier Seitenkreise sind blau. Der Bereich in der Mitte, in dem ein neunter Kreis passen könnte, ist leer.](border.png)

Somit ist jeder Kreis im Quellbild 30 mal 30 Pixel groß.

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

- [Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [CSS lernen: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Border Images in CSS: Ein Schwerpunkt für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
