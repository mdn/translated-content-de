---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die [Randregionen](/de/docs/Web/CSS/border-image-slice#edge-regions) eines Ausgangsbildes angepasst werden, um die Dimensionen des [Maskenrahmens](/de/docs/Web/CSS/mask-border) eines Elements zu entsprechen.

## Syntax

```css
/* Keyword value */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* top and bottom | left and right */
mask-border-repeat: round stretch;

/* Global values */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: revert;
mask-border-repeat: revert-layer;
mask-border-repeat: unset;
```

Die Eigenschaft `mask-border-repeat` kann mit einem oder zwei Werten aus der untenstehenden Werteliste angegeben werden.

- Wenn **ein** Wert angegeben ist, wird dasselbe Verhalten auf **allen vier Seiten** angewendet.
- Wenn **zwei** Werte angegeben sind, wird der erste auf **oben und unten** angewendet, der zweite auf **links und rechts**.

### Werte

- `stretch`
  - : Die Randregionen des Ausgangsbildes werden gestreckt, um den Abstand zwischen den Rändern auszufüllen.
- `repeat`
  - : Die Randregionen des Ausgangsbildes werden gekachelt (wiederholt), um den Abstand zwischen den Rändern auszufüllen. Kacheln können abgeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randregionen des Ausgangsbildes werden gekachelt (wiederholt), um den Abstand zwischen den Rändern auszufüllen. Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randregionen des Ausgangsbildes werden gekachelt (wiederholt), um den Abstand zwischen den Rändern auszufüllen. Zusätzlicher Platz wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Diese Eigenschaft scheint derzeit nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie dazu dienen, zu definieren, wie der maskierte Rahmen-Slice sich wiederholen wird — d.h. ob er sich einfach wiederholt, leicht skaliert wird, sodass eine ganze Zahl von Slices passt, oder gestreckt wird, sodass ein Slice passt.

```css
mask-border-repeat: round;
```

Browser auf Chromium-Basis unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Auf der Seite [`mask-border`](/de/docs/Web/CSS/mask-border) gibt es ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten maskierten Rand-Eigenschaften mit Präfix), sodass Sie eine Vorstellung von der Wirkung bekommen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
