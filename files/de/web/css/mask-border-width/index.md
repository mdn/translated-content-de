---
title: mask-border-width
slug: Web/CSS/mask-border-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-border-width`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Breite des [Maskenrandes](/de/docs/Web/CSS/mask-border) eines Elements fest.

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

Die `mask-border-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten festgelegt werden, die aus der unten stehenden Werteliste ausgewählt werden.

- Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Wert für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Wert für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Breiten der Reihe nach für **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrandes, angegeben als ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Prozentwerte beziehen sich auf die _Breite_ des Randbereichs bei horizontalen Versätzen und auf die _Höhe_ des Randbereichs bei vertikalen Versätzen. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrandes, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrandes entspricht der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("mask-border-slice")}}. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-width` definiert die Breite der Maskenumrandung — wenn dieser Wert anders als [`mask-border-slice`](/de/docs/Web/CSS/mask-border-slice) festgelegt wird, werden die Slices skaliert, um in die Maskenumrandung zu passen.

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
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) bietet ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten Maskenumrandungs-Eigenschaften mit Präfix), um einen Eindruck von der Wirkung zu bekommen.

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
