---
title: mask-border-repeat
slug: Web/CSS/Reference/Properties/mask-border-repeat
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, wie die Bilder für die Seiten und den mittleren Teil des [Maskenrandbildes](/de/docs/Web/CSS/Reference/Properties/mask-border) skaliert und gekachelt werden.

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

Die `mask-border-repeat`-Eigenschaft kann mit einem oder zwei Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt dasselbe Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, bezieht sich der erste auf **oben und unten**, der zweite auf **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gedehnt, um die Lücke zwischen den Rändern zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen den Rändern zu füllen. Kacheln können abgeschnitten werden, um die richtige Passform zu erzielen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen den Rändern zu füllen. Kacheln können gedehnt werden, um die richtige Passform zu erzielen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen den Rändern zu füllen. Zusatzraum wird zwischen den Kacheln verteilt, um die richtige Passform zu erzielen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Diese Eigenschaft scheint derzeit noch nirgends unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu, zu definieren, wie der Maskenrand-Schnitt sich um den Rand wiederholt — z.B., ob er sich einfach wiederholt oder leicht skaliert wird, damit eine ganze Anzahl von Schnitten passt, oder ob ein Schnitt gedehnt wird, damit er passt.

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten Präfix-Eigenschaften des Maskenrandes), damit Sie sich eine Vorstellung von der Wirkung machen können.

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
