---
title: border-image-outset
slug: Web/CSS/border-image-outset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-image-outset`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Abstand fest, um den ein Element's [Rahmenbild](/de/docs/Web/CSS/border-image) von seiner Rahmenbox herausgestellt wird.

Die Teile des Rahmenbildes, die außerhalb der Rahmenbox des Elements mit `border-image-outset` gerendert werden, lösen keine Überlauf-Scrollleisten aus und erfassen keine Mausereignisse.

{{InteractiveExample("CSS Demo: border-image-outset")}}

```css interactive-example-choice
border-image-outset: 0;
```

```css interactive-example-choice
border-image-outset: 15px;
```

```css interactive-example-choice
border-image-outset: 30px;
```

```css interactive-example-choice
border-image-outset: 40px;
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

## Syntax

```css
/* <length> value */
border-image-outset: 1rem;

/* <number> value */
border-image-outset: 1.5;

/* top and bottom | left and right */
border-image-outset: 1 1.2;

/* top | left and right | bottom */
border-image-outset: 30px 2 45px;

/* top | right | bottom | left */
border-image-outset: 7px 12px 14px 5px;

/* Global values */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: revert;
border-image-outset: revert-layer;
border-image-outset: unset;
```

Die `border-image-outset`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist entweder ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig und führen dazu, dass die `border-image-outset`-Deklaration ignoriert wird.

1. Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
2. Wenn **zwei** Werte angegeben sind, gilt der erste für **oben und unten** und der zweite für **links und rechts**.
3. Wenn **drei** Werte angegeben sind, gilt der erste für **oben**, der zweite für **links und rechts** und der dritte für **unten**.
4. Wenn **vier** Werte angegeben sind, gelten sie in der Reihenfolge (im Uhrzeigersinn) für **oben**, **rechts**, **unten** und **links**.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des `border-image`-Outsets als Dimension — eine Zahl mit einer Einheit.
- {{cssxref("&lt;number&gt;")}}
  - : Die Größe des `border-image`-Outsets als Vielfaches der entsprechenden {{cssxref("border-width")}}s des Elements. Zum Beispiel, wenn ein Element `border-width: 1em 2px 0 1.5rem` und `border-image-outset: 2` hat, würde das endgültige `border-image-outset` als `2em 4px 0 3rem` berechnet werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Herausstellen eines Rahmenbildes

#### HTML

```html
<div id="outset">This element has an outset border image!</div>
```

#### CSS

```css
#outset {
  width: 10rem;
  background: #cef;
  border: 1.4rem solid;
  border-image: radial-gradient(#ff2, #55f) 40;
  border-image-outset: 1.5; /* 1.5 × 1.4rem = 2.1rem */
  margin: 2.1rem;
}
```

#### Ergebnis

{{EmbedLiveSample("Outsetting_a_border_image", "auto", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Rahmenbilder in CSS: Ein wichtiger Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
