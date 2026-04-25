---
title: "`mask-border-repeat` CSS property"
short-title: mask-border-repeat
slug: Web/CSS/Reference/Properties/mask-border-repeat
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, wie die Bilder für die Seiten und den mittleren Teil des [Maskengrenzbildes](/de/docs/Web/CSS/Reference/Properties/mask-border) skaliert und gekachelt werden.

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

- Wenn **ein** Wert angegeben wird, gilt das gleiche Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gedehnt, um die Lücke zwischen den einzelnen Rändern zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen den einzelnen Rändern zu füllen. Kacheln können abgeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen den einzelnen Rändern zu füllen. Kacheln können gedehnt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen den einzelnen Rändern zu füllen. Zusätzlicher Raum wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie festlegen, wie die Randmasken-Slice um den Rand wiederholt werden soll — d.h. ob sie einfach wiederholt wird, leicht skaliert wird, damit eine ganze Anzahl von Slices passt, oder gedehnt wird, damit ein Slice passt?

```css
mask-border-repeat: round;
```

Browser, die auf Chromium basieren, unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite {{cssxref("mask-border")}} bietet ein funktionierendes Beispiel (unter Verwendung der veralteten, mit Präfix versehenen Randmasken-Eigenschaften in Chromium), sodass Sie sich eine Vorstellung vom Effekt machen können.

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
