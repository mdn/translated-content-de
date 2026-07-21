---
title: "`box-direction` CSS property"
short-title: box-direction
slug: Web/CSS/Reference/Properties/box-direction
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls und wurde durch einen neueren Standard ersetzt. Der `-moz-box-direction` wird nur für XUL verwendet, während der vorherige Standard `box-direction` durch `flex-direction` ersetzt wurde. Weitere Informationen zum aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts).

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Container seine Inhalte normalerweise (vom oberen oder linken Rand) oder umgekehrt (vom unteren oder rechten Rand) anordnet.

## Syntax

```css
/* Keyword values */
box-direction: normal;
box-direction: reverse;

/* Global values */
box-direction: inherit;
box-direction: initial;
box-direction: revert;
box-direction: revert-layer;
box-direction: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Der Container ordnet seine Inhalte vom Start (dem linken oder oberen Rand) an.
- `reverse`
  - : Der Container ordnet seine Inhalte vom Ende (dem rechten oder unteren Rand) an.

## Anmerkungen

Der Rand des Containers, der für Layoutzwecke als _Start_ bezeichnet wird, hängt von der Ausrichtung des Containers ab:

- Bei horizontalen Elementen ist der _Start_ die obere Kante.
- Bei vertikalen Elementen ist der _Start_ die linke Kante.

Die gegenüberliegende Kante des Starts wird als _Ende_ bezeichnet.

Wenn die Richtung mithilfe des `dir`-Attributs des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-direction = normal | reverse`)}}

## Beispiele

### Box-Richtung festlegen

```css
.example {
  /* bottom-to-top layout */
  -moz-box-direction: reverse; /* Mozilla */
  -webkit-box-direction: reverse; /* WebKit */
  box-direction: reverse; /* As specified */
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
