---
title: layer()
slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`layer()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/@import)-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet, um die importierte Ressource in einer separaten benannten [Cascade Layer](/de/docs/Web/CSS/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

`framework.themes.dark` ist die Ebene, in die die CSS-Datei importiert wird.

## Formale Syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [Modul über das Kaskadieren und Erben von CSS](/de/docs/Web/CSS/CSS_cascade)
