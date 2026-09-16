---
title: "`mask-border-repeat` CSS property"
short-title: mask-border-repeat
slug: Web/CSS/Reference/Properties/mask-border-repeat
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`mask-border-repeat`** gibt an, wie die Bilder für die Seiten und den mittleren Teil des [Maskenrahmenbilds](/de/docs/Web/CSS/Reference/Properties/mask-border) skaliert und gekachelt werden.

## Syntax

```css
/* Keyword values */
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

Die Eigenschaft `mask-border-repeat` kann mit einem oder zwei Werten aus der unten aufgeführten Werteliste angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt dasselbe Verhalten für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Randbereiche des Quellbilds werden gestreckt, um den Abstand zwischen den einzelnen Rahmen auszufüllen.
- `repeat`
  - : Die Randbereiche des Quellbilds werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rahmen auszufüllen. Kacheln können beschnitten werden, um die passende Anpassung zu erreichen.
- `round`
  - : Die Randbereiche des Quellbilds werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rahmen auszufüllen. Kacheln können gestreckt werden, um die passende Anpassung zu erreichen.
- `space`
  - : Die Randbereiche des Quellbilds werden gekachelt (wiederholt), um den Abstand zwischen den einzelnen Rahmen auszufüllen. Zusätzlicher Platz wird zwischen den Kacheln verteilt, um die passende Anpassung zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Diese Eigenschaft scheint noch nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, dient sie dazu festzulegen, wie der Maskenrahmen-Ausschnitt um den Rahmen herum wiederholt wird — also ob er einfach wiederholt, leicht skaliert wird, sodass eine ganze Anzahl von Ausschnitten passt, oder gestreckt wird, sodass ein Ausschnitt passt.

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite zu {{cssxref("mask-border")}} enthält ein funktionierendes Beispiel (das die von Chromium unterstützten veralteten präfixierten Maskenrahmen-Eigenschaften verwendet), sodass Sie sich eine Vorstellung vom Effekt machen können.

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
