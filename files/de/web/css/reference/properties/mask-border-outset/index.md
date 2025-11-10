---
title: mask-border-outset
slug: Web/CSS/Reference/Properties/mask-border-outset
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-border-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand fest, um den der [Maskenrand](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements von seiner Rahmenbox eingerückt wird.

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

Die `mask-border-outset` Eigenschaft kann als ein, zwei, drei oder vier Werte angegeben werden. Jeder Wert ist eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt der gleiche Abstand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Abstand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Abstand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Abstände in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Maskenrandabstands als Dimension.
- {{cssxref("&lt;number&gt;")}}
  - : Die Größe des Maskenrandabstands als Vielfaches der entsprechenden {{cssxref("border-width")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nicht unterstützt zu werden. Sobald sie unterstützt wird, kann sie dazu dienen, die Maske vom inneren Rand der Rahmenbox des Elements weg zu bewegen. Sie können diese Eigenschaft verwenden, um die Maske von einem Teil des Rahmens aus starten zu lassen, anstatt von der Innenseite.

```css
mask-border-outset: 1rem;
```

Browser auf Chromium-Basis unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-outset` — mit einem Präfix:

```css
-webkit-mask-box-image-outset: 1rem;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten border mask-Eigenschaften mit Präfix), damit Sie eine Vorstellung von der Wirkung bekommen können.

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
