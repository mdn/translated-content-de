---
title: mask-border-outset
slug: Web/CSS/mask-border-outset
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Entfernung an, um die die [Maskenrand](/de/docs/Web/CSS/mask-border) eines Elements von seiner Rahmenbox entfernt wird.

## Syntax

```css
/* <length> Wert */
mask-border-outset: 1rem;

/* <number> Wert */
mask-border-outset: 1.5;

/* oben und unten | links und rechts */
mask-border-outset: 1 1.2;

/* oben | links und rechts | unten */
mask-border-outset: 30px 2 45px;

/* oben | rechts | unten | links */
mask-border-outset: 7px 12px 14px 5px;

/* Globale Werte */
mask-border-outset: inherit;
mask-border-outset: initial;
mask-border-outset: revert;
mask-border-outset: revert-layer;
mask-border-outset: unset;
```

Die Eigenschaft `mask-border-outset` kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, wird derselbe Abstand auf **alle vier Seiten** angewendet.
- Wenn **zwei** Werte angegeben werden, gilt der erste Abstand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Abstand für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Abstände der Reihenfolge entsprechend für **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

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

Diese Eigenschaft scheint derzeit nirgendwo unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie dazu dienen, die Maske von der inneren Kante der Rahmenbox des Elements weg zu bewegen – Sie können sie verwenden, um die Maske teilweise entlang des Rahmens beginnen zu lassen, anstatt an seiner Innenseite.

```css
mask-border-outset: 1rem;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-outset` — mit einem Präfix:

```css
-webkit-mask-box-image-outset: 1rem;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten Border-Masken-Eigenschaften mit Präfix), so dass Sie einen Eindruck von der Wirkung bekommen können.

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
