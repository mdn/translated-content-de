---
title: layer()
slug: Web/CSS/Reference/At-rules/@import/layer_function
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) verwendet, um die importierte Ressource in eine separate benannte [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) zu setzen.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

Die `framework.themes.dark` ist die Ebene, in die die CSS-Datei importiert wird.

## Formale Syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [CSS At-Regel Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [Modul CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
