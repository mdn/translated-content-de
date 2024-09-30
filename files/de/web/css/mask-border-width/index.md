---
title: mask-border-width
slug: Web/CSS/mask-border-width
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
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

Die `mask-border-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden, die aus der folgenden Liste ausgewählt werden.

- Wenn **ein** Wert angegeben wird, gilt die gleiche Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrandes, angegeben als ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Randbereichs für horizontale Versätze und auf die _Höhe_ des Randbereichs für vertikale Versätze. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrandes, angegeben als ein Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrandes wird der intrinsischen Breite oder Höhe (je nachdem, was anwendbar ist) der entsprechenden {{cssxref("mask-border-slice")}} gleichgesetzt. Wenn das Bild nicht die erforderliche intrinsische Dimension hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nirgends unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu, die Breite des Maskenrandes zu definieren — das Setzen eines anderen Wertes als [`mask-border-slice`](/de/docs/Web/CSS/mask-border-slice) bewirkt, dass die Schnitte skaliert werden, um in den Maskenrand zu passen.

```css
mask-border-width: 30 fill;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-width` — mit einem Präfix:

```css
-webkit-mask-box-image-width: 20px;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten prefixed Maskenrand-Eigenschaften), sodass Sie eine Vorstellung von der Wirkung bekommen können.

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
