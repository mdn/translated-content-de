---
title: layer()
slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/@import) [At-Regel](/de/docs/Web/CSS/At-rule) verwendet, um die importierte Ressource in einer separaten benannten [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

Das `framework.themes.dark` ist die Schicht, in die die CSS-Datei importiert wird.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
