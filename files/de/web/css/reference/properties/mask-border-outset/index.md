---
title: mask-border-outset
slug: Web/CSS/Reference/Properties/mask-border-outset
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

Die **`mask-border-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Distanz an, um die der [mask border](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements von seinem border box abgesetzt ist.

## Syntax

```css
/* <length> value */
mask-border-outset: 1rem;

/* <number> value */
mask-border-outset: 1.5;

/* top and bottom | left and right */
mask-border-outset: 1 1.2;

/* top | left and right | bottom */
mask-border-outset: 30px 2 45px;

/* top | right | bottom | left */
mask-border-outset: 7px 12px 14px 5px;

/* Global values */
mask-border-outset: inherit;
mask-border-outset: initial;
mask-border-outset: revert;
mask-border-outset: revert-layer;
mask-border-outset: unset;
```

Die Eigenschaft `mask-border-outset` kann mit ein, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;number&gt;")}}. Negative Werte sind unzulässig.

- Wenn **ein** Wert angegeben ist, gilt der gleiche Abstand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Abstand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Abstand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Abstände für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des mask border Outsets als Dimension.
- {{cssxref("&lt;number&gt;")}}
  - : Die Größe des mask border Outsets als Vielfaches der entsprechenden {{cssxref("border-width")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgendwo unterstützt zu werden. Sobald sie unterstützt wird, wird sie dazu dienen, die Maske von der inneren Kante des border box des Elements zu entfernen — Sie können sie verwenden, um die Maske teilweise entlang des Rands beginnen zu lassen, anstatt an der Innenseite.

```css
mask-border-outset: 1rem;
```

Auf Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-outset` — mit einem Präfix:

```css
-webkit-mask-box-image-outset: 1rem;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten prefixed border mask Eigenschaften in Chromium), damit Sie eine Vorstellung von der Wirkung bekommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
