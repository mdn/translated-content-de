---
title: "`mask-border-width` CSS property"
short-title: mask-border-width
slug: Web/CSS/Reference/Properties/mask-border-width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-border-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite der [Maskenrand](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements fest.

## Syntax

```css
/* Keyword value */
mask-border-width: auto;

/* <length> value */
mask-border-width: 1rem;

/* <percentage> value */
mask-border-width: 25%;

/* <number> value */
mask-border-width: 3;

/* top and bottom | left and right */
mask-border-width: 2em 3em;

/* top | left and right | bottom */
mask-border-width: 5% 15% 10%;

/* top | right | bottom | left */
mask-border-width: 5% 2em 10% auto;

/* Global values */
mask-border-width: inherit;
mask-border-width: initial;
mask-border-width: revert;
mask-border-width: revert-layer;
mask-border-width: unset;
```

Die Eigenschaft `mask-border-width` kann mit einem, zwei, drei oder vier Werten aus der nachfolgenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt die gleiche Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Breiten in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrands, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Randbereichs für horizontale Abstände und die _Höhe_ des Randbereichs für vertikale Abstände. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrands, angegeben als ein Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrands wird gleich der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) der entsprechenden {{cssxref("mask-border-slice")}} gemacht. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

`mask-border-width` definiert die Breite des Randmaskens — das Festlegen auf einen anderen Wert als {{cssxref("mask-border-slice")}} bewirkt, dass die Scheiben skaliert werden, um in die Randmaskens zu passen.

```css
/* Final mask scaled down to 20px wide */
mask-border-slice: 30 fill;
mask-border-width: 20px;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-width` — mit einem Präfix:

```css
-webkit-mask-box-image-width: 20px;
```

> [!NOTE]
> Die Seite {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (mit den veralteten, in Chromium unterstützten, mit Präfix versehenen Randmasken-Eigenschaften), sodass Sie eine Vorstellung von der Wirkung bekommen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
