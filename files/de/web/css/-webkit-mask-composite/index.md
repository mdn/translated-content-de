---
title: -webkit-mask-composite
slug: Web/CSS/-webkit-mask-composite
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die **`-webkit-mask-composite`** Eigenschaft gibt an, wie mehrere Maskenbilder, die auf dasselbe Element angewendet werden, miteinander zusammengesetzt werden. Maskenbilder werden in umgekehrter Reihenfolge der Deklaration mit der {{CSSxRef("mask-image", "-webkit-mask-image")}} Eigenschaft zusammengesetzt.

> [!NOTE]
> Es gibt eine standardisierte {{CSSxRef("mask-composite")}} Eigenschaft, die Teile dieser nicht standardmäßigen Eigenschaft mit unterschiedlichen Schlüsselwörtern abdeckt.

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
  - : Die Pixel des Zielmaskenbilds werden gerendert. Die Pixel des Quellmaskenbilds werden nur gerendert, wenn sie einen nichttransparenten Teil des Zielmaskenbilds überlappen. Dies bewirkt, dass das Quellmaskenbild keinen Effekt hat.
- `destination-over`
  - : Das Zielmaskenbild wird über das Quellmaskenbild gerendert.
- `destination-in`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild bleiben die Pixel des Zielmaskenbilds; alle anderen Pixel werden gelöscht.
- `destination-out`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht; alle verbleibenden Pixel des Quellmaskenbilds werden gerendert.
- `destination-atop`
  - : Die Pixel des Quellmaskenbilds werden gerendert. Die Pixel des Zielmaskenbilds werden nur gerendert, wenn sie einen nichttransparenten Teil des Zielmaskenbilds überlappen. Dies bewirkt, dass das Zielmaskenbild keinen Effekt hat.
- `xor`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden vollständig transparent, wenn sie beide vollständig opak sind.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-composite = <composite-style>#`)}}

## Beispiele

### Zusammensetzung mit XOR

```css
.example {
  -webkit-mask-image: url(mask1.png), url("mask2.png");
  -webkit-mask-composite: xor, source-over;
}
```

## Spezifikationen

Nicht Teil eines Standards. Diese Eigenschaft wird als {{CSSxRef("mask-composite")}} mit unterschiedlichen Werten spezifiziert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mask-composite")}}
