---
title: layer()
slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}}

Die **`layer()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/@import) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet, um die importierte Ressource in eine separate, benannte [Kaskadenebene](/de/docs/Web/CSS/@layer) zu setzen.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

`framework.themes.dark` ist die Ebene, in die die CSS-Datei importiert würde.

## Formale Syntax

{{CSSSyntaxRaw(`layer() = layer( <layer-name> )`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
