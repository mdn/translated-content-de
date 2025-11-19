---
title: mask-border-repeat
slug: Web/CSS/Reference/Properties/mask-border-repeat
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

Die **`mask-border-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, wie die Bilder für die Seiten und den Mittelteil des [Maskenrandbildes](/de/docs/Web/CSS/Reference/Properties/mask-border) skaliert und gekachelt werden.

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

Die `mask-border-repeat`-Eigenschaft kann mit einem oder zwei Werten angegeben werden, die aus der unten stehenden Liste ausgewählt werden.

- Wird **ein** Wert angegeben, gilt das gleiche Verhalten für **alle vier Seiten**.
- Werden **zwei** Werte angegeben, gilt der erste Wert für **oben und unten**, der zweite für **links und rechts**.

### Werte

- `stretch`
  - : Die Kantenbereiche des Quellbildes werden gedehnt, um den Zwischenraum zwischen jeder Grenze zu füllen.
- `repeat`
  - : Die Kantenbereiche des Quellbildes werden gekachelt (wiederholt), um den Zwischenraum zwischen jeder Grenze zu füllen. Kacheln können beschnitten werden, um die richtige Passform zu erreichen.
- `round`
  - : Die Kantenbereiche des Quellbildes werden gekachelt (wiederholt), um den Zwischenraum zwischen jeder Grenze zu füllen. Kacheln können gedehnt werden, um die richtige Passform zu erreichen.
- `space`
  - : Die Kantenbereiche des Quellbildes werden gekachelt (wiederholt), um den Zwischenraum zwischen jeder Grenze zu füllen. Zusätzlicher Raum wird zwischen den Kacheln verteilt, um die richtige Passform zu erreichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Diese Eigenschaft scheint noch nirgends unterstützt zu werden. Wenn sie schließlich unterstützt wird, wird sie bestimmen, wie der Maskenrandabschnitt um den Rand wiederholt wird — d.h. ob er einfach wiederholt wird, leicht skaliert wird, damit eine ganze Anzahl von Abschnitten passt, oder gedehnt wird, sodass ein Abschnitt passt.

```css
mask-border-repeat: round;
```

Chromium-basierte Browser unterstützen eine veraltete Version dieser Eigenschaft — `mask-box-image-repeat` — mit einem Präfix:

```css
-webkit-mask-box-image-repeat: round;
```

> [!NOTE]
> Die Seite [`mask-border`](/de/docs/Web/CSS/Reference/Properties/mask-border) enthält ein funktionierendes Beispiel (mit den veralteten, jedoch in Chromium unterstützten, Präfix-Maskenrand-Eigenschaften), sodass Sie eine Vorstellung von dem Effekt bekommen können.

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
