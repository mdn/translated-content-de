---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie die [Randbereiche](/de/docs/Web/CSS/border-image-slice#edge-regions) eines Quellbildes angepasst werden, um die Dimensionen des [Maskenrandes](/de/docs/Web/CSS/mask-border) eines Elements zu füllen.

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

Die `mask-border-repeat` Eigenschaft kann mit einem oder zwei Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt dieses Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gestreckt, um die Lücke zwischen jedem Rand zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Die Kacheln können abgeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Die Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Der zusätzliche Raum wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nicht unterstützt zu werden. Sobald sie schließlich unterstützt wird, wird sie dazu dienen, zu definieren, wie sich der Maskenrand-Slice am Rand wiederholt — d. h. ob er einfach wiederholt wird, leicht skaliert wird, sodass eine ganze Anzahl von Slices passt, oder gestreckt wird, sodass ein Slice passt.

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, mit Präfix versehenen Border-Masken-Eigenschaften, die in Chromium unterstützt werden), sodass Sie eine Vorstellung von dem Effekt bekommen können.

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
