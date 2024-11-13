---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 759e230fb79ab6b333691262e089749d99104c25
---

{{CSSRef}}

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung einer Maske fest.

Für Elemente, die als einzelne Box gerendert werden, gibt diese Eigenschaft den Maskenpositionierungsbereich an. Mit anderen Worten gibt diese Eigenschaft die Ursprungsposition eines Bildes an, das durch die CSS-Eigenschaft {{cssxref("mask-image")}} festgelegt ist. Für Elemente, die als mehrere Boxen gerendert werden, wie Inline-Boxen in mehreren Zeilen oder Boxen auf mehreren Seiten, bestimmt sie, auf welche Boxen {{cssxref("box-decoration-break")}} angewendet wird, um den Maskenpositionierungsbereich festzulegen.

## Syntax

```css
/* Keyword values */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Multiple values */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Non-standard keyword values */
-webkit-mask-origin: content;
-webkit-mask-origin: padding;
-webkit-mask-origin: border;

/* Global values */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

Einer oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommas.

### Werte

- `content-box`
  - : Die Position ist relativ zur Content-Box.
- `padding-box`
  - : Die Position ist relativ zur Padding-Box. Für einzelne Boxen ist `0 0` die obere linke Ecke der Padding-Kante, `100% 100%` ist die untere rechte Ecke.
- `border-box`
  - : Die Position ist relativ zur Border-Box.
- `fill-box`
  - : Die Position ist relativ zur Objektbegrenzungsbox.
- `stroke-box`
  - : Die Position ist relativ zur Strichbegrenzungsbox.
- `view-box`
  - : Verwendet die nächste SVG-Ansicht als Referenzbox. Wenn ein {{svgattr("viewBox")}}-Attribut für das Element angegeben ist, das den SVG-Viewport erstellt, wird die Referenzbox am Ursprung des durch das `viewBox`-Attribut definierten Koordinatensystems positioniert und die Dimension der Referenzbox auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.
- `content`
  - : Entspricht `content-box`.
- `padding`
  - : Entspricht `padding-box`.
- `border`
  - : Entspricht `border-box`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mask-Ursprung auf border-box setzen

Klicken Sie auf "Play" im Live-Beispiel, um den Code im MDN Playground zu öffnen und einige der anderen möglichen `mask-origin`-Werte auszuprobieren.

```html live-sample___mask-origin-example
<div class="masked"></div>
```

```css live-sample___mask-origin-example
.masked {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-origin: border-box;
}
```

{{EmbedLiveSample("mask-origin-example", "", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
