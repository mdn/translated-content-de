---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die CSS-Eigenschaft **`mask-border-repeat`** [CSS](/de/docs/Web/CSS) legt fest, wie die Bilder für die Seiten und den Mittelteil des [Maskengrenzbildes](/de/docs/Web/CSS/mask-border) skaliert und gekachelt werden.

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

Die Eigenschaft `mask-border-repeat` kann mit einem oder zwei Werten aus der untenstehenden Liste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt das gleiche Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbildes werden gestreckt, um die Lücke zwischen jeder Grenze zu füllen.
- `repeat`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jeder Grenze zu füllen. Kacheln können zugeschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jeder Grenze zu füllen. Kacheln können gedehnt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Randbereiche des Quellbildes werden gekachelt (wiederholt), um die Lücke zwischen jeder Grenze zu füllen. Zusätzlicher Platz wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint derzeit nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie dazu dienen, zu definieren, wie der Maskengrenzschnitt sich um die Grenze wiederholt — d.h. ob er nur wiederholt, leicht skaliert, damit eine ganze Anzahl von Schnitten passt, oder gedehnt wird, sodass ein Schnitt passt.

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/mask-border) enthält ein funktionierendes Beispiel (unter Verwendung der veralteten, in Chromium unterstützten, mit Präfix versehenen Maskengrenzeigenschaften), sodass Sie eine Vorstellung von dem Effekt bekommen können.

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
