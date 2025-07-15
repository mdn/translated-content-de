---
title: border-image-width
slug: Web/CSS/border-image-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-image-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Rahmenbilds](/de/docs/Web/CSS/border-image) eines Elements fest.

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
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

Wenn der Wert dieser Eigenschaft größer ist als die {{cssxref("border-width")}} des Elements, wird das Rahmenbild über den Rand (und/oder Inhaltskante) hinausgehen.

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

Die `border-image-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten aus der folgenden Werteliste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt dieselbe Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für die **obere und untere** Seite, die zweite für **linke und rechte** Seite.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für die **obere** Seite, die zweite für **linke und rechte** Seite, die dritte für die **untere** Seite.
- Wenn **vier** Werte angegeben werden, gelten die Breiten in folgender Reihenfolge (im Uhrzeigersinn) für die **obere**, **rechte**, **untere** und **linke** Seite.

### Werte

- `<length-percentage>`
  - : Die Breite des Rahmens, angegeben als ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Prozentangaben beziehen sich auf die _Breite_ des Rahmenbildbereichs für horizontale Abstände und die _Höhe_ des Rahmenbildbereichs für vertikale Abstände. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Rahmens, angegeben als ein Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Rahmens entspricht der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("border-image-slice")}}. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Rahmenbild kacheln

Dieses Beispiel erstellt ein Rahmenbild mit der folgenden ".png"-Datei, die 90 x 90 Pixel misst:

![Quadratisches Bild mit acht Kreisen. Die Kreise in jeder Ecke sind hellviolett. Die vier Seitenkreise sind blau. Der Bereich in der Mitte, wo ein neunter Kreis passen könnte, ist leer.](border.png)

Daher hat jeder Kreis im Ausgangsbild die Maße 30 x 30 Pixel.

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
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Rahmenbilder in CSS: Ein Schlüsselfokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
