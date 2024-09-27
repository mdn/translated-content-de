---
title: box-direction
slug: Web/CSS/box-direction
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft aus dem ursprünglichen Entwurf des CSS-Flexible-Box-Moduls und wurde durch einen neueren Standard ersetzt. Das `-moz-box-direction` wird nur für XUL verwendet, während der frühere Standard `box-direction` durch `flex-direction` ersetzt wurde. Weitere Informationen über den aktuellen Standard finden Sie unter [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Kasten seine Inhalte normal (vom oberen oder linken Rand) oder umgekehrt (vom unteren oder rechten Rand) anordnet.

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

Die `box-direction`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `normal`
  - : Der Kasten ordnet seine Inhalte vom Anfang (der linken oder oberen Kante) an.
- `reverse`
  - : Der Kasten ordnet seine Inhalte vom Ende (der rechten oder unteren Kante) an.

## Anmerkungen

Der Rand des Kastens, der für Layoutzwecke als _Start_ festgelegt ist, hängt von der Ausrichtung des Kastens ab:

- Für horizontale Elemente ist der _Start_ die obere Kante.
- Für vertikale Elemente ist der _Start_ die linke Kante.

Der der Startkante gegenüberliegende Rand wird als _Ende_ bezeichnet.

Wenn die Richtung durch das `dir`-Attribut des Elements festgelegt ist, wird der Stil ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
box-direction =
  normal | reverse | inherit
```

## Beispiele

### Festlegen der Box-Richtung

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
