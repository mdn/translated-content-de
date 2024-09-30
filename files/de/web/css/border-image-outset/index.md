---
title: border-image-outset
slug: Web/CSS/border-image-outset
l10n:
  sourceCommit: fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{CSSRef}}

Die **`border-image-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand fest, um den ein Element von seinem [Border-Image](/de/docs/Web/CSS/border-image) von der Border-Box abgesetzt wird.

Die Teile des Border-Images, die außerhalb der Border-Box des Elements mit `border-image-outset` gerendert werden, lösen keine Überlauf-Scrollleisten aus und erfassen keine Mausereignisse.

{{EmbedInteractiveExample("pages/css/border-image-outset.html")}}

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

Die `border-image-outset` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig und führen dazu, dass die `border-image-outset` Deklaration ignoriert wird.

1. Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
2. Wenn **zwei** Werte angegeben sind, gilt der erste für **oben und unten** und der zweite für **links und rechts**.
3. Wenn **drei** Werte angegeben sind, gilt der erste für **oben**, der zweite für **links und rechts**, und der dritte für **unten**.
4. Wenn **vier** Werte angegeben sind, gelten sie für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des `border-image` Outsets als Dimension — eine Zahl mit einer Einheit.
- {{cssxref("&lt;number&gt;")}}
  - : Die Größe des `border-image` Outsets als Vielfaches der entsprechenden {{cssxref("border-width")}}s des Elements. Zum Beispiel, wenn ein Element `border-width: 1em 2px 0 1.5rem` hat und `border-image-outset: 2`, würde das endgültige `border-image-outset` als `2em 4px 0 3rem` berechnet werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Border-Image heraussetzen

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
- [CSS Lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Border-Images in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
