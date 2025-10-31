---
title: -webkit-mask-composite
slug: Web/CSS/Reference/Properties/-webkit-mask-composite
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}

Die **`-webkit-mask-composite`** Eigenschaft gibt an, wie mehrere Maskenbilder, die auf dasselbe Element angewendet werden, miteinander zusammengesetzt werden. Maskenbilder werden in der umgekehrten Reihenfolge zusammengesetzt, wie sie mit der {{CSSxRef("mask-image", "-webkit-mask-image")}} Eigenschaft erklärt wurden.

> [!NOTE]
> Es gibt eine standardisierte {{CSSxRef("mask-composite")}} Eigenschaft, die Teile dieser nicht-standardisierten Eigenschaft mit anderen Schlüsselwörtern abdeckt.

## Syntax

```css
/* Keyword values */
-webkit-mask-composite: clear;
-webkit-mask-composite: copy;
-webkit-mask-composite: source-over;
-webkit-mask-composite: source-in;
-webkit-mask-composite: source-out;
-webkit-mask-composite: source-atop;
-webkit-mask-composite: destination-over;
-webkit-mask-composite: destination-in;
-webkit-mask-composite: destination-out;
-webkit-mask-composite: destination-atop;
-webkit-mask-composite: xor;

/* Global values */
-webkit-mask-composite: inherit;
-webkit-mask-composite: initial;
-webkit-mask-composite: revert;
-webkit-mask-composite: revert-layer;
-webkit-mask-composite: unset;
```

### Werte

- `clear`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht.
- `copy`
  - : Das Quellmaskenbild ersetzt das Zielmaskenbild.
- `source-over`
  - : Das Quellmaskenbild wird über das Zielmaskenbild gerendert.
- `source-in`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden durch die Pixel des Quellmaskenbilds ersetzt; alle anderen Pixel werden gelöscht.
- `source-out`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht; alle verbleibenden Pixel des Quellmaskenbilds werden gerendert.
- `source-atop`
  - : Die Pixel des Zielmaskenbilds werden gerendert. Die Pixel des Quellmaskenbilds werden nur dann gerendert, wenn sie einen nicht transparenten Teil des Zielmaskenbilds überlappen. Dies hat zur Folge, dass das Quellmaskenbild keine Wirkung hat.
- `destination-over`
  - : Das Zielmaskenbild wird über das Quellmaskenbild gerendert.
- `destination-in`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild bleiben die Pixel des Zielmaskenbilds; alle anderen Pixel werden gelöscht.
- `destination-out`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht; alle verbleibenden Pixel des Zielmaskenbilds werden gerendert.
- `destination-atop`
  - : Die Pixel des Quellmaskenbilds werden gerendert. Die Pixel des Zielmaskenbilds werden nur dann gerendert, wenn sie einen nicht transparenten Teil des Zielmaskenbilds überlappen. Dies hat zur Folge, dass das Zielmaskenbild keine Wirkung hat.
- `xor`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden vollständig transparent, wenn sie beide vollständig undurchsichtig sind.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-composite = <composite-style>#`)}}

## Beispiele

### Zusammensetzen mit XOR

```css
.example {
  -webkit-mask-image: url("mask1.png"), url("mask2.png");
  -webkit-mask-composite: xor, source-over;
}
```

## Spezifikationen

Nicht Teil eines Standards. Diese Eigenschaft wird als {{CSSxRef("mask-composite")}} mit unterschiedlichen Werten spezifiziert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mask-composite")}}
