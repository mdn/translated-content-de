---
title: box-direction
slug: Web/CSS/box-direction
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen CSS Flexiblen Box-Layouts Modulentwurfs und wurde durch einen neueren Standard ersetzt. Das `-moz-box-direction` wird nur für XUL verwendet, während der vorherige Standard `box-direction` durch `flex-direction` ersetzt wurde. Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, ob ein Box-Element seine Inhalte normal (vom oberen oder linken Rand) oder umgekehrt (vom unteren oder rechten Rand) anordnet.

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
  - : Die Box ordnet ihre Inhalte vom Anfang (vom linken oder oberen Rand) an.
- `reverse`
  - : Die Box ordnet ihre Inhalte vom Ende (vom rechten oder unteren Rand) an.

## Hinweise

Der für Layoutzwecke als Anfang festgelegte Rand der Box hängt von der Ausrichtung der Box ab:

- Für horizontale Elemente ist der Anfang der obere Rand.
- Für vertikale Elemente ist der Anfang der linke Rand.

Der gegenüber dem Anfang liegende Rand wird als Ende bezeichnet.

Wenn die Richtung über das `dir` Attribut des Elements festgelegt wird, wird der Stil ignoriert.

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
