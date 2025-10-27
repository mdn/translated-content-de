---
title: layer()
slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: a7ab7b8116f8dbb0561acd79bb0b4da2b6be3db9
---

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/@import) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet, um die importierte Ressource in einer separaten benannten [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

`framework.themes.dark` ist die Schicht, in die die CSS-Datei importiert werden würde.

## Formale Syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
