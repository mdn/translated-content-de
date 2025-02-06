---
title: -webkit-mask-composite
slug: Web/CSS/-webkit-mask-composite
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die **`-webkit-mask-composite`**-Eigenschaft legt fest, wie mehrere auf dasselbe Element angewendete Maskenbilder miteinander zusammengesetzt werden. Maskenbilder werden in der entgegengesetzten Reihenfolge zusammengesetzt, wie sie mit der Eigenschaft {{CSSxRef("mask-image", "-webkit-mask-image")}} deklariert wurden.

> [!NOTE]
> Es gibt eine standardisierte {{CSSxRef("mask-composite")}}-Eigenschaft, die Teile dieser nicht standardisierten Eigenschaft mit anderen Schlüsselwörtern abdeckt.

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
  - : Die Pixel des Ziel-Maskenbildes werden gerendert. Die Pixel des Quell-Maskenbildes werden nur gerendert, wenn sie einen nicht transparenten Bereich des Ziel-Maskenbildes überlappen. Dadurch hat das Quell-Maskenbild keine Auswirkung.
- `destination-over`
  - : Das Ziel-Maskenbild wird über das Quell-Maskenbild gerendert.
- `destination-in`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild bleiben die Pixel des Ziel-Maskenbildes; alle anderen Pixel werden gelöscht.
- `destination-out`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild werden gelöscht; alle verbleibenden Pixel des Quell-Maskenbildes werden gerendert.
- `destination-atop`
  - : Die Pixel des Quell-Maskenbildes werden gerendert. Die Pixel des Ziel-Maskenbildes werden nur gerendert, wenn sie einen nicht transparenten Bereich des Ziel-Maskenbildes überlappen. Dadurch hat das Ziel-Maskenbild keine Auswirkung.
- `xor`
  - : Überlappende Pixel im Quell-Maskenbild und im Ziel-Maskenbild werden vollständig transparent, wenn sie beide vollständig opak sind.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-webkit-mask-composite =
  <composite-style>#
```

## Beispiele

### Zusammensetzen mit XOR

```css
.example {
  -webkit-mask-image: url(mask1.png), url("mask2.png");
  -webkit-mask-composite: xor, source-over;
}
```

## Spezifikationen

Gehört zu keinem Standard. Diese Eigenschaft wird als {{CSSxRef("mask-composite")}} mit unterschiedlichen Werten spezifiziert.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("mask-composite")}}
