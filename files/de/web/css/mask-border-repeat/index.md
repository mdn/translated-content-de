---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie die [Randbereiche](/de/docs/Web/CSS/border-image-slice#edge-regions) eines Quellbildes angepasst werden, um die Dimensionen eines Elements mit [Maskenrand](/de/docs/Web/CSS/mask-border) zu füllen.

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

Die `mask-border-repeat`-Eigenschaft kann mit einem oder zwei Werten aus der unten stehenden Liste angegeben werden.

- Wenn **ein** Wert spezifiziert wird, gilt das gleiche Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte spezifiziert werden, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gestreckt, um den Abstand zwischen jedem Rand zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand zu füllen. Kacheln können zugeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand zu füllen. Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um den Abstand zwischen jedem Rand zu füllen. Zusätzlicher Platz wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint bisher noch nirgends unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu zu definieren, wie der Maskenrand-Schnitt um den Rand wiederholt wird – z.B., ob er einfach wiederholt werden soll oder leicht skaliert, sodass eine ganze Zahl von Schnitten passt, oder gestreckt, sodass ein Schnitt passt.

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten mit Präfix versehenen Maskenrand-Eigenschaften, die in Chromium unterstützt werden), sodass Sie eine Vorstellung vom Effekt bekommen können.

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
