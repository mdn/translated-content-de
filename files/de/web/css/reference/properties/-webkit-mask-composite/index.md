---
title: "`-webkit-mask-composite` CSS property"
short-title: -webkit-mask-composite
slug: Web/CSS/Reference/Properties/-webkit-mask-composite
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_header}}

Die Eigenschaft **`-webkit-mask-composite`** legt fest, auf welche Weise mehrere auf dasselbe Element angewendete Maskenbilder miteinander zusammengesetzt werden. Maskenbilder werden in der umgekehrten Reihenfolge zusammengesetzt, in der sie mit der Eigenschaft {{CSSxRef("mask-image", "-webkit-mask-image")}} deklariert sind.

> [!NOTE]
> Es gibt eine standardisierte Eigenschaft {{CSSxRef("mask-composite")}}, die Teile dieser nicht standardmäßigen Eigenschaft mit anderen Schlüsselwörtern abdeckt.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `clear`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht.
- `copy`
  - : Das Quellmaskenbild ersetzt das Zielmaskenbild.
- `source-over`
  - : Das Quellmaskenbild wird über dem Zielmaskenbild gerendert.
- `source-in`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden durch die Pixel des Quellmaskenbilds ersetzt; alle anderen Pixel werden gelöscht.
- `source-out`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht; alle verbleibenden Pixel des Quellmaskenbilds werden gerendert.
- `source-atop`
  - : Die Pixel des Zielmaskenbilds werden gerendert. Die Pixel des Quellmaskenbilds werden nur gerendert, wenn sie einen nicht transparenten Bereich des Zielmaskenbilds überlappen. Dadurch hat das Quellmaskenbild keine Auswirkung.
- `destination-over`
  - : Das Zielmaskenbild wird über dem Quellmaskenbild gerendert.
- `destination-in`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild bleiben die Pixel des Zielmaskenbilds; alle anderen Pixel werden gelöscht.
- `destination-out`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht; alle verbleibenden Pixel des Quellmaskenbilds werden gerendert.
- `destination-atop`
  - : Die Pixel des Quellmaskenbilds werden gerendert. Die Pixel des Zielmaskenbilds werden nur gerendert, wenn sie einen nicht transparenten Bereich des Quellmaskenbilds überlappen. Dadurch hat das Zielmaskenbild keine Auswirkung.
- `xor`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden vollständig transparent, wenn beide vollständig deckend sind.

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

Nicht Teil eines Standards. Diese Eigenschaft wird als {{CSSxRef("mask-composite")}} mit anderen Werten spezifiziert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mask-composite")}}
