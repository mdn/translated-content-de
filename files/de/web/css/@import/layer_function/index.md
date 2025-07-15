---
title: layer()
slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/@import) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet, um die importierte Ressource in einer separaten, benannten [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

`framework.themes.dark` ist die Schicht, in die die CSS-Datei importiert würde.

## Formale Syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [Modul für CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
