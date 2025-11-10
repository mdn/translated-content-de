---
title: box-direction
slug: Web/CSS/Reference/Properties/box-direction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexiblen Box-Layout-Moduls und wurde durch einen neueren Standard ersetzt. `-moz-box-direction` wird nur für XUL verwendet, während der vorherige Standard `box-direction` durch `flex-direction` ersetzt wurde. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Box seine Inhalte normal (vom oberen oder linken Rand aus) oder umgekehrt (vom unteren oder rechten Rand aus) anordnet.

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

Die `box-direction` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `normal`
  - : Die Box ordnet ihre Inhalte vom Anfang (dem linken oder oberen Rand) aus an.
- `reverse`
  - : Die Box ordnet ihre Inhalte vom Ende (dem rechten oder unteren Rand) aus an.

## Anmerkungen

Der Rand der Box, der als _Start_ für Layoutzwecke festgelegt ist, hängt von der Ausrichtung der Box ab:

- Für horizontale Elemente ist der _Start_ der obere Rand.
- Für vertikale Elemente ist der _Start_ der linke Rand.

Der dem Start gegenüberliegende Rand wird als _Ende_ bezeichnet.

Wenn die Richtung mit dem `dir`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
