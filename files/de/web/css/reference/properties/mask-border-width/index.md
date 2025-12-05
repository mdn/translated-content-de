---
title: mask-border-width
slug: Web/CSS/Reference/Properties/mask-border-width
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`mask-border-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Maskenrahmens](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements fest.

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

Die `mask-border-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben ist, gilt dieselbe Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrahmens, angegeben als ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentangaben beziehen sich auf die _Breite_ des Rahmenbereichs für horizontale Verschiebungen und die _Höhe_ des Rahmenbereichs für vertikale Verschiebungen. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrahmens, angegeben als ein Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrahmens wird gleich der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("mask-border-slice")}} gesetzt. Wenn das Bild nicht über die erforderliche intrinsische Dimension verfügt, wird stattdessen die entsprechende `border-width` verwendet.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-width` definiert die Breite des Maskenrahmens – wird diese auf einen anderen Wert als {{cssxref("mask-border-slice")}} gesetzt, werden die Abschnitte skaliert, um in den Maskenrahmen zu passen.

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
> Die Seite {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (unter Verwendung der veralteten vorgepräfixen Maskenrahmen-Eigenschaften, die in Chromium unterstützt werden), sodass Sie eine Vorstellung vom Effekt bekommen können.

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
