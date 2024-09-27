---
title: mask-border-outset
slug: Web/CSS/mask-border-outset
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Abstand an, um den der [Maskenrand](/de/docs/Web/CSS/mask-border) eines Elements von seinem Randkasten entfernt wird.

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

Die `mask-border-outset` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt derselbe Ausbruch **für alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Ausbruch für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Ausbruch für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ausbrüche für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Maskenrand-Ausbruchs als Dimension.
- {{cssxref("&lt;number&gt;")}}
  - : Die Größe des Maskenrand-Ausbruchs als Vielfaches der entsprechenden {{cssxref("border-width")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgendwo unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie dazu dienen, die Maske vom inneren Rand des Randkastens des Elements weg zu bewegen — Sie können sie verwenden, um die Maske von einem Punkt der Grenze aus starten zu lassen, anstatt von der Innenseite.

```css
mask-border-outset: 1rem;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-outset` — mit einem Präfix:

```css
-webkit-mask-box-image-outset: 1rem;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, mit Präfix versehenen Randmaskeneigenschaften, die in Chromium unterstützt werden), damit Sie sich eine Vorstellung von der Wirkung machen können.

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
