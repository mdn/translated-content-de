---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die [Kantenregionen](/de/docs/Web/CSS/border-image-slice#edge-regions) eines Quellbildes angepasst werden, um die Dimensionen des [Maskenrahmens](/de/docs/Web/CSS/mask-border) eines Elements zu füllen.

## Syntax

```css
/* Schlüsselwortwert */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* oben und unten | links und rechts */
mask-border-repeat: round stretch;

/* Globale Werte */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: revert;
mask-border-repeat: revert-layer;
mask-border-repeat: unset;
```

Die `mask-border-repeat` Eigenschaft kann mit einem oder zwei Werten aus der unten stehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt er für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Kantenregionen des Quellbildes werden gestreckt, um die Lücke zwischen jedem Rahmen zu füllen.
- `repeat`
  - : Die Kantenregionen des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rahmen zu füllen. Kacheln können zugeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Kantenregionen des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rahmen zu füllen. Kacheln können gestreckt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Kantenregionen des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jedem Rahmen zu füllen. Zusätzlicher Platz wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit noch nirgendwo unterstützt zu werden. Sobald sie unterstützt wird, dient sie dazu, festzulegen, wie der Maskenrahmenschnitt sich um den Rahmen wiederholt – d.h. ob er einfach wiederholt wird oder leicht skaliert, sodass eine ganze Anzahl von Schnitten passt, oder gestreckt wird, sodass ein Schnitt passt.

```css
mask-border-repeat: round;
```

Browser auf Chromium-Basis unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (mit den veralteten, in Chromium unterstützten, mit Präfix versehenen Maskenrahmeneigenschaften), sodass Sie eine Vorstellung von dem Effekt bekommen können.

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
