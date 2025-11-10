---
title: mask-border-width
slug: Web/CSS/Reference/Properties/mask-border-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-border-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite des [Maskenrahmens](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements fest.

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

Die Eigenschaft `mask-border-width` kann mit einem, zwei, drei oder vier Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben ist, gilt die gleiche Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrahmens, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentangaben beziehen sich auf die _Breite_ des Rahmenbereichs für horizontale Offsets und die _Höhe_ des Rahmenbereichs für vertikale Offsets. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrahmens, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrahmens wird gleich der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("mask-border-slice")}} gesetzt. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-width` definiert die Breite des Maskenrahmens — wenn dies auf einen anderen Wert als [`mask-border-slice`](/de/docs/Web/CSS/Reference/Properties/mask-border-slice) eingestellt wird, werden die Abschnitte so skaliert, dass sie in den Maskenrahmen passen.

```css
/* Final mask scaled down to 20px wide */
mask-border-slice: 30 fill;
mask-border-width: 20px;
```

In auf Chromium basierenden Browsern wird eine veraltete Version dieser Eigenschaft mit einem Präfix unterstützt — `mask-box-image-width`:

```css
-webkit-mask-box-image-width: 20px;
```

> [!NOTE]
> Die Seite zu [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, vorangestellten Maskenrahmen-Eigenschaften, die in Chromium unterstützt werden), damit Sie eine Vorstellung von der Wirkung bekommen.

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
