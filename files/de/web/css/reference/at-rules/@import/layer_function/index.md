---
title: layer()
slug: Web/CSS/Reference/At-rules/@import/layer_function
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird zusammen mit der {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) verwendet, um die importierte Ressource in einer separaten, benannten [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

Die `framework.themes.dark` ist die Schicht, in die die CSS-Datei importiert wird.

## Formale Syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [CSS At-Regel Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
