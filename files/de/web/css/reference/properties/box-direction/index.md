---
title: "`box-direction` CSS property"
short-title: box-direction
slug: Web/CSS/Reference/Properties/box-direction
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Layout-Modulentwurfs und wurde durch einen neueren Standard ersetzt. Der `-moz-box-direction` wird nur für XUL verwendet, während der vorherige Standard `box-direction` durch `flex-direction` ersetzt wurde. Siehe [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) für Informationen über den aktuellen Standard.

Die **`box-direction`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, ob ein Box-Element seine Inhalte normal (von der oberen oder linken Kante) oder umgekehrt (von der unteren oder rechten Kante) anordnet.

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
  - : Die Box ordnet ihre Inhalte ab dem Startpunkt an (der linken oder oberen Kante).
- `reverse`
  - : Die Box ordnet ihre Inhalte ab dem Endpunkt an (der rechten oder unteren Kante).

## Hinweise

Die Kante der Box, die für Layout-Zwecke als _Start_ festgelegt ist, hängt von der Ausrichtung der Box ab:

- Für horizontale Elemente ist der _Start_ die obere Kante.
- Für vertikale Elemente ist der _Start_ die linke Kante.

Die gegenüberliegende Kante des Starts wird als _Ende_ bezeichnet.

Wenn die Richtung mit dem `dir`-Attribut des Elements festgelegt wird, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{CSSSyntaxRaw(`box-direction = normal | reverse`)}}

## Beispiele

### Festlegung der Box-Richtung

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
