---
title: mask-border-outset
slug: Web/CSS/mask-border-outset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-border-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, um welchen Abstand der [Maskenrand](/de/docs/Web/CSS/mask-border) eines Elements von seiner Rahmenbox gesetzt wird.

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

Die `mask-border-outset` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist entweder ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt der gleiche Abstand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Abstand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Abstand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Abstände der Reihe nach (im Uhrzeigersinn) für **oben**, **rechts**, **unten** und **links**.

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

Diese Eigenschaft scheint derzeit noch nirgends unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu, die Maske vom inneren Rand der Rahmenbox des Elements wegzubewegen — Sie können sie verwenden, um die Maske ab einem Teil des Randes beginnen zu lassen, anstatt im Inneren davon.

```css
mask-border-outset: 1rem;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-outset` — mit einem Präfix:

```css
-webkit-mask-box-image-outset: 1rem;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) zeigt ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten Maskenrand-Präfix-Eigenschaften), sodass Sie eine Vorstellung vom Effekt bekommen können.

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
