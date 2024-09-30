---
title: box-direction
slug: Web/CSS/box-direction
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexiblen Box-Layout-Moduls und wurde durch einen neueren Standard ersetzt. Der `-moz-box-direction` wird nur für XUL verwendet, während der frühere Standard `box-direction` durch `flex-direction` ersetzt wurde. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Box-Layout ihre Inhalte normal (von der oberen oder linken Kante) oder umgekehrt (von der unteren oder rechten Kante) anordnet.

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

Die `box-direction` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte spezifiziert.

### Werte

- `normal`
  - : Die Box ordnet ihre Inhalte von Beginn an (die linke oder obere Kante) an.
- `reverse`
  - : Die Box ordnet ihre Inhalte vom Ende an (die rechte oder untere Kante) an.

## Anmerkungen

Die Kante der Box, die für Layoutzwecke als _Start_ bezeichnet wird, hängt von der Ausrichtung der Box ab:

- Für horizontale Elemente ist der _Start_ die obere Kante.
- Für vertikale Elemente ist der _Start_ die linke Kante.

Die dem Start gegenüberliegende Kante wird als _Ende_ bezeichnet.

Wenn die Richtung über das `dir`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-direction =
  normal | reverse | inherit
```

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
