---
title: layer()
slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/@import) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet, um die importierte Ressource in einer separaten benannten [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

`framework.themes.dark` ist die Schicht, in die die CSS-Datei importiert wird.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- Modul [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
