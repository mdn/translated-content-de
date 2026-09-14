---
title: "`-webkit-tap-highlight-color` CSS property"
short-title: -webkit-tap-highlight-color
slug: Web/CSS/Reference/Properties/-webkit-tap-highlight-color
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

{{Non-standard_header}}

**`-webkit-tap-highlight-color`** ist eine nicht standardisierte CSS-Eigenschaft, die die Farbe der Hervorhebung festlegt, die über einem Link erscheint, während dieser angetippt wird. Die Hervorhebung zeigt dem Benutzer an, dass sein Tippen erfolgreich erkannt wird, und gibt an, auf welches Element er tippt.

## Syntax

```css
-webkit-tap-highlight-color: red;
-webkit-tap-highlight-color: transparent; /* for removing the highlight */

/* Global values */
-webkit-tap-highlight-color: inherit;
-webkit-tap-highlight-color: initial;
-webkit-tap-highlight-color: revert;
-webkit-tap-highlight-color: revert-layer;
-webkit-tap-highlight-color: unset;
```

### Werte

Diese Eigenschaft wird mit dem folgenden Wert angegeben:

- {{Cssxref("&lt;color&gt;")}}
  - : Definiert die Farbe der Hervorhebung.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-tap-highlight-color = <color>`)}}

## Spezifikationen

Nicht Teil eines Standards. Apple bietet [eine Beschreibung im Safari Web Content Guide](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW5).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions)
- Verwandte CSS-Pseudoklassen:
  - {{cssxref(":hover")}}
  - {{cssxref(":active")}}
  - {{cssxref(":visited")}}
