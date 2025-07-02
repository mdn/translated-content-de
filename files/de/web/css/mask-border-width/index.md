---
title: mask-border-width
slug: Web/CSS/mask-border-width
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{CSSRef}}

Die **`mask-border-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Maskenrandes](/de/docs/Web/CSS/mask-border) eines Elements fest.

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

Die `mask-border-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten festgelegt werden, die aus der unten stehenden Liste von Werten ausgewählt werden.

- Wenn **ein** Wert angegeben wird, gilt dieselbe Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrandes, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Randbereichs für horizontale Versätze und die _Höhe_ des Randbereichs für vertikale Versätze. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrandes, angegeben als Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrandes ist gleich der intrinsischen Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("mask-border-slice")}}. Wenn das Bild nicht über die erforderliche intrinsische Dimension verfügt, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

`mask-border-width` definiert die Breite des Maskenrands — das Festlegen auf einen anderen Wert als [`mask-border-slice`](/de/docs/Web/CSS/mask-border-slice) führt dazu, dass die Schnitte skaliert werden, um in den Maskenrand zu passen.

```css
/* Final mask scaled down to 20px wide */
mask-border-slice: 30 fill;
mask-border-width: 20px;
```

Browser auf Chromium-Basis unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-width` — mit einem Präfix:

```css
-webkit-mask-box-image-width: 20px;
```

> [!NOTE]
> Die [`mask-border`](/de/docs/Web/CSS/mask-border) Seite enthält ein funktionierendes Beispiel (unter Verwendung der veralteten vorangestellten Maskenrand-Eigenschaften, die in Chromium unterstützt werden), damit Sie eine Vorstellung vom Effekt bekommen.

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
