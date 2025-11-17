---
title: mask-border-repeat
slug: Web/CSS/Reference/Properties/mask-border-repeat
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie die Bilder für die Seiten und den mittleren Teil des [Maskenrandbilds](/de/docs/Web/CSS/Reference/Properties/mask-border) skaliert und gekachelt werden.

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

- Wenn **ein** Wert angegeben ist, gilt dieses Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gedehnt, um die Lücke zwischen jedem Rand zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Kacheln können zugeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Kacheln können gedehnt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rand zu füllen. Extra Raum wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nicht unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu zu definieren, wie der Maskenrandabschnitt um den Rand wiederholt wird — d.h. wird er einfach wiederholt, oder leicht skaliert, sodass eine ganze Anzahl von Abschnitten passt, oder gedehnt, sodass ein Abschnitt passt?

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite zu [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (mit den veralteten, mit Präfix versehenen Maskenrand-Eigenschaften, die in Chromium unterstützt werden), sodass Sie eine Vorstellung von der Wirkung bekommen.

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
