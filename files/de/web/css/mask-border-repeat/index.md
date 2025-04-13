---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{CSSRef}}

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, wie die Bilder für die Seiten und den Mittelteil des [Maskenrahmenbildes](/de/docs/Web/CSS/mask-border) skaliert und gekachelt werden.

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

Die Eigenschaft `mask-border-repeat` kann mit einem oder zwei Werten aus der unten stehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben ist, gilt er für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbilds werden gestreckt, um den Abstand zwischen den einzelnen Rändern zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbilds werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rändern zu füllen. Kacheln können beschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbilds werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rändern zu füllen. Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbilds werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rändern zu füllen. Überschüssiger Raum wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgendwo unterstützt zu werden. Sobald sie jedoch unterstützt wird, wird sie dazu dienen zu definieren, wie der Rahmen-Maskenschnitt um den Rahmen herum wiederholt wird — d.h. ob er einfach wiederholt wird oder leicht skaliert wird, sodass eine ganze Zahl von Schnitten passt, oder gestreckt wird, sodass ein Schnitt passt.

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (das veraltete, mit Präfix versehene Rahmenmaskeigenschaften verwendet, die in Chromium unterstützt werden), um Ihnen eine Vorstellung vom Effekt zu geben.

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
