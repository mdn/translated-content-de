---
title: layer()
slug: Web/CSS/Reference/At-rules/@import/layer_function
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) verwendet, um die importierte Ressource in einer separaten, benannten [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

Die `framework.themes.dark` ist die Schicht, in die die CSS-Datei importiert würde.

## Formale Syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
