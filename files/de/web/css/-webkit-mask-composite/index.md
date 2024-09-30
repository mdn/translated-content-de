---
title: "-webkit-mask-composite"
slug: Web/CSS/-webkit-mask-composite
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`-webkit-mask-composite`**-Eigenschaft spezifiziert die Art und Weise, wie mehrere Maskenbilder, die auf dasselbe Element angewendet werden, zusammengesetzt werden. Maskenbilder werden in umgekehrter Reihenfolge zusammengesetzt, in der sie mit der {{CSSxRef("mask-image", "-webkit-mask-image")}}-Eigenschaft deklariert werden.

> [!NOTE]
> Es gibt eine standardisierte {{CSSxRef("mask-composite")}}-Eigenschaft, die Teile dieser nicht standardisierten Eigenschaft unter Verwendung unterschiedlicher Schlüsselwörter abdeckt.

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
  - : Die Pixel des Zielmaskenbilds werden gerendert. Die Pixel des Quellmaskenbilds werden nur dann gerendert, wenn sie einen nicht transparenten Teil des Zielmaskenbilds überlappen. Dies hat zur Folge, dass das Quellmaskenbild keinen Effekt hat.
- `destination-over`
  - : Das Zielmaskenbild wird über das Quellmaskenbild gerendert.
- `destination-in`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild bleiben die Pixel des Zielmaskenbilds; alle anderen Pixel werden gelöscht.
- `destination-out`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden gelöscht; alle verbleibenden Pixel des Quellmaskenbilds werden gerendert.
- `destination-atop`
  - : Die Pixel des Quellmaskenbilds werden gerendert. Die Pixel des Zielmaskenbilds werden nur dann gerendert, wenn sie einen nicht transparenten Teil des Zielmaskenbilds überlappen. Dies hat zur Folge, dass das Zielmaskenbild keinen Effekt hat.
- `xor`
  - : Überlappende Pixel im Quellmaskenbild und im Zielmaskenbild werden vollständig transparent, wenn sie beide vollständig undurchsichtig sind.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-composite =
  <composite-style>#
```

## Beispiele

### Zusammensetzung mit XOR

```css
.example {
  -webkit-mask-image: url(mask1.png), url("mask2.png");
  -webkit-mask-composite: xor, source-over;
}
```

## Spezifikationen

Teil keiner Norm. Diese Eigenschaft wird als {{CSSxRef("mask-composite")}} mit unterschiedlichen Werten spezifiziert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mask-composite")}}
