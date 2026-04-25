---
title: "`box-direction` CSS property"
short-title: box-direction
slug: Web/CSS/Reference/Properties/box-direction
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS-Flexible-Box-Layout-Moduls und wurde durch einen neueren Standard ersetzt. Die `-moz-box-direction` wird nur für XUL verwendet, während der vorherige Standard `box-direction` durch `flex-direction` ersetzt wurde. Siehe [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-direction`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Kasten seine Inhalte normal (von der oberen oder linken Kante) oder umgekehrt (von der unteren oder rechten Kante) anordnet.

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

Die `box-direction`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `normal`
  - : Der Kasten ordnet seine Inhalte vom Start (der linken oder oberen Kante) an.
- `reverse`
  - : Der Kasten ordnet seine Inhalte vom Ende (der rechten oder unteren Kante) an.

## Hinweise

Die Kante des Kastens, die für Layoutzwecke als _Start_ bezeichnet wird, hängt von der Orientierung des Kastens ab:

- Für horizontale Elemente ist der _Start_ die obere Kante.
- Für vertikale Elemente ist der _Start_ die linke Kante.

Die dem Start entgegengesetzte Kante wird als _Ende_ bezeichnet.

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
