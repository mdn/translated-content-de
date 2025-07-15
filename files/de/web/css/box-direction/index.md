---
title: box-direction
slug: Web/CSS/box-direction
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS-Flexible-Box-Layout-Modulentwurfs und wurde durch einen neueren Standard ersetzt. Der `-moz-box-direction` wird nur für XUL verwendet, während der vorherige Standard `box-direction` durch `flex-direction` ersetzt wurde. Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Rahmen seine Inhalte normal (vom oberen oder linken Rand aus) oder umgekehrt (vom unteren oder rechten Rand aus) anordnet.

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

Die `box-direction` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `normal`
  - : Der Rahmen ordnet seine Inhalte vom Start (dem linken oder oberen Rand) aus an.
- `reverse`
  - : Der Rahmen ordnet seine Inhalte vom Ende (dem rechten oder unteren Rand) aus an.

## Anmerkungen

Die Kante des Rahmens, die für Layoutzwecke als _Anfang_ festgelegt ist, hängt von der Orientierung des Rahmens ab:

- Für horizontale Elemente ist der _Anfang_ der obere Rand.
- Für vertikale Elemente ist der _Anfang_ der linke Rand.

Die dem Anfang gegenüberliegende Kante wird als _Ende_ bezeichnet.

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
