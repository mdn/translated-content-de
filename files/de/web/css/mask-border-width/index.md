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

Die `mask-border-width` Eigenschaft kann mit einem, zwei, drei oder vier Werten aus der folgenden Liste angegeben werden.

- Wenn **ein** Wert angegeben ist, gilt die gleiche Breite für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt die erste Breite für **oben und unten**, die zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt die erste Breite für **oben**, die zweite für **links und rechts**, die dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Breiten für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- `<length-percentage>`
  - : Die Breite des Maskenrandes, angegeben als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}. Prozentsätze beziehen sich auf die _Breite_ des Randbereichs für horizontale Versätze und die _Höhe_ des Randbereichs für vertikale Versätze. Darf nicht negativ sein.
- `<number>`
  - : Die Breite des Maskenrandes, angegeben als ein Vielfaches der entsprechenden {{cssxref("border-width")}}. Darf nicht negativ sein.
- `auto`
  - : Die Breite des Maskenrandes wird auf die intrinsische Breite oder Höhe (je nachdem, was zutrifft) des entsprechenden {{cssxref("mask-border-slice")}} gesetzt. Wenn das Bild die erforderliche intrinsische Dimension nicht hat, wird stattdessen die entsprechende `border-width` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint noch nirgendwo unterstützt zu werden. Wenn sie letztendlich unterstützt wird, dient sie dazu, die Breite der Maskenbegrenzung zu definieren — das Setzen auf einen anderen Wert als [`mask-border-slice`](/de/docs/Web/CSS/mask-border-slice) führt dazu, dass die Schnitte skaliert werden, um in die Maskenbegrenzung zu passen.

```css
mask-border-width: 30 fill;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-width` — mit einem Präfix:

```css
-webkit-mask-box-image-width: 20px;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) zeigt ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten Maskenrand-Eigenschaften mit Präfix), damit Sie eine Vorstellung von der Wirkung bekommen.

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
