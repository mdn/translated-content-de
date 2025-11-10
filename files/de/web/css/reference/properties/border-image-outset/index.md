---
title: border-image-outset
slug: Web/CSS/Reference/Properties/border-image-outset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-image-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand fest, um den das [Randelementbild](/de/docs/Web/CSS/Reference/Properties/border-image) von seinem Randbereich gesetzt wird.

Die Teile des Randelementbildes, die außerhalb des Randbereichs des Elements mit `border-image-outset` gerendert werden, lösen keine Überlauf-Scrollleisten aus und erfassen keine Mausereignisse.

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
  color: black;
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

Die Eigenschaft `border-image-outset` kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist entweder ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig und führen dazu, dass die `border-image-outset`-Angabe ignoriert wird.

1. Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
2. Wenn **zwei** Werte angegeben sind, gilt der erste für **oben und unten** und der zweite für **links und rechts**.
3. Wenn **drei** Werte angegeben sind, gilt der erste für **oben**, der zweite für **links und rechts** und der dritte für **unten**.
4. Wenn **vier** Werte angegeben sind, gelten sie für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des `border-image`-Outsets als Dimension — eine Zahl mit einer Einheit.
- {{cssxref("&lt;number&gt;")}}
  - : Die Größe des `border-image`-Outsets als Vielfaches der entsprechenden {{cssxref("border-width")}}s des Elements. Wenn ein Element zum Beispiel `border-width: 1em 2px 0 1.5rem` hat und `border-image-outset: 2`, würde der endgültige `border-image-outset` als `2em 4px 0 3rem` berechnet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erweiterung eines Randelementbildes

#### HTML

```html
<div id="outset">This element has an outset border image!</div>
```

#### CSS

```css
#outset {
  width: 10rem;
  background: #cceeff;
  border: 1.4rem solid;
  border-image: radial-gradient(#ffff22, #5555ff) 40;
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

- [Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [CSS lernen: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Randelementbilder in CSS: Ein Schlüsselbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
