---
title: mask-border-outset
slug: Web/CSS/Reference/Properties/mask-border-outset
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`mask-border-outset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand fest, um den der [Maskenrand](/de/docs/Web/CSS/Reference/Properties/mask-border) eines Elements von seiner Randbox abgesetzt wird.

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

Die `mask-border-outset` Eigenschaft kann als ein, zwei, drei oder vier Werte angegeben werden. Jeder Wert ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt derselbe Ansatz für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Ansatz für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Ansatz für **oben**, der zweite für **links und rechts**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ansätze für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Maskenrand-Ansatzes als Dimension.
- {{cssxref("&lt;number&gt;")}}
  - : Die Größe des Maskenrand-Ansatzes als Vielfaches der entsprechenden {{cssxref("border-width")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie dazu dienen, die Maske von der inneren Kante der Randbox des Elements weg zu bewegen — Sie können sie verwenden, um die Maske teilweise über den Rand hinweg beginnen zu lassen, statt innerhalb davon.

```css
mask-border-outset: 1rem;
```

Browser auf Chromium-Basis unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-outset` — mit einem Präfix:

```css
-webkit-mask-box-image-outset: 1rem;
```

> [!NOTE]
> Die Seite {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (mit den veralteten präfixierten Randmaskeneigenschaften, die in Chromium unterstützt werden), damit Sie eine Vorstellung vom Effekt bekommen.

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
