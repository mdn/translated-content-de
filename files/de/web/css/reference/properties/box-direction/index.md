---
title: box-direction
slug: Web/CSS/Reference/Properties/box-direction
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!WARNING]
> Dies ist eine Eigenschaft des ursprünglichen Entwurfs des CSS Flexible Box Layout Moduls und wurde durch einen neueren Standard ersetzt. Das `-moz-box-direction` wird nur für XUL verwendet, während der frühere Standard `box-direction` durch `flex-direction` ersetzt wurde. Siehe [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) für Informationen über den aktuellen Standard.

Die **`box-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Box-Element seinen Inhalt normal (vom oberen oder linken Rand) oder umgekehrt (vom unteren oder rechten Rand) anordnet.

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

Die Eigenschaft `box-direction` wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `normal`
  - : Das Box-Element ordnet seinen Inhalt vom Anfang (dem linken oder oberen Rand) an.
- `reverse`
  - : Das Box-Element ordnet seinen Inhalt vom Ende (dem rechten oder unteren Rand) an.

## Anmerkungen

Der Rand des Box-Elements, der für Layoutzwecke als _Anfang_ definiert ist, hängt von der Ausrichtung des Box-Elements ab:

- Für horizontale Elemente ist der _Anfang_ der obere Rand.
- Für vertikale Elemente ist der _Anfang_ der linke Rand.

Der gegenüber dem Anfang liegende Rand wird als _Ende_ bezeichnet.

Wenn die Richtung über das `dir`-Attribut des Elements gesetzt wird, wird der Stil ignoriert.

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
