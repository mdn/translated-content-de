---
title: -webkit-mask-composite
slug: Web/CSS/-webkit-mask-composite
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}

Die **`-webkit-mask-composite`** Eigenschaft legt fest, wie mehrere auf dasselbe Element angewendete Maskenbilder miteinander kombiniert werden. Maskenbilder werden in der umgekehrten Reihenfolge zusammengesetzt, in der sie mit der {{CSSxRef("mask-image", "-webkit-mask-image")}} Eigenschaft deklariert wurden.

> [!NOTE]
> Es gibt eine standardisierte {{CSSxRef("mask-composite")}} Eigenschaft, die Teile dieser nicht standardisierten Eigenschaft mit unterschiedlichen Schlüsselwörtern abdeckt.

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
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild werden gelöscht.
- `copy`
  - : Das Quell-Maskenbild ersetzt das Ziel-Maskenbild.
- `source-over`
  - : Das Quell-Maskenbild wird über das Ziel-Maskenbild gerendert.
- `source-in`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild werden durch die Pixel des Quell-Maskenbildes ersetzt; alle anderen Pixel werden gelöscht.
- `source-out`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild werden gelöscht; alle verbleibenden Pixel des Quell-Maskenbildes werden gerendert.
- `source-atop`
  - : Die Pixel des Ziel-Maskenbildes werden gerendert. Die Pixel des Quell-Maskenbildes werden nur gerendert, wenn sie einen nicht transparenten Teil des Ziel-Maskenbildes überlappen. Dies bewirkt, dass das Quell-Maskenbild keinen Effekt hat.
- `destination-over`
  - : Das Ziel-Maskenbild wird über das Quell-Maskenbild gerendert.
- `destination-in`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild bleiben die Pixel des Ziel-Maskenbildes; alle anderen Pixel werden gelöscht.
- `destination-out`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild werden gelöscht; alle verbleibenden Pixel des Quell-Maskenbildes werden gerendert.
- `destination-atop`
  - : Die Pixel des Quell-Maskenbildes werden gerendert. Die Pixel des Ziel-Maskenbildes werden nur gerendert, wenn sie einen nicht transparenten Teil des Ziel-Maskenbildes überlappen. Dies bewirkt, dass das Ziel-Maskenbild keinen Effekt hat.
- `xor`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild werden vollständig transparent, wenn sie beide vollständig undurchsichtig sind.

## Formaldefinition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-composite = <composite-style>#`)}}

## Beispiele

### Zusammensetzen mit XOR

```css
.example {
  -webkit-mask-image: url(mask1.png), url("mask2.png");
  -webkit-mask-composite: xor, source-over;
}
```

## Spezifikationen

Kein Teil eines Standards. Diese Eigenschaft wird als {{CSSxRef("mask-composite")}} mit unterschiedlichen Werten spezifiziert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mask-composite")}}
