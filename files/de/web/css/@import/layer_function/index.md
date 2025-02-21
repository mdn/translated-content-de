---
title: layer()
slug: Web/CSS/@import/layer_function
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`layer()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) wird zusammen mit der [`@import`](/de/docs/Web/CSS/@import)-[Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet, um die importierte Ressource in einer separaten benannten [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu platzieren.

## Syntax

```css
@import url layer(layer-name);
@import "dark.css" layer(framework.themes.dark);
```

Das `framework.themes.dark` ist die Schicht, in die die CSS-Datei importiert würde.

## Formale Syntax

{{CSSSyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("@import")}}
- [Modul zu CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)
