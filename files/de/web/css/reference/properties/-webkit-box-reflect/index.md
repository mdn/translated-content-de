---
title: "`-webkit-box-reflect` CSS property"
short-title: -webkit-box-reflect
slug: Web/CSS/Reference/Properties/-webkit-box-reflect
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{Non-standard_Header}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`-webkit-box-reflect`** ermöglicht es Ihnen, den Inhalt eines Elements in eine bestimmte Richtung zu spiegeln.

## Syntax

```css
/* Direction values */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Offset value */
-webkit-box-reflect: below 10px;

/* Mask value */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Global values */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: revert;
-webkit-box-reflect: revert-layer;
-webkit-box-reflect: unset;
```

### Werte

Diese Eigenschaft wird als durch Leerzeichen getrennte Liste der folgenden Werte angegeben:

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : Sind Schlüsselwörter, die angeben, in welche Richtung die Spiegelung erfolgen soll.
- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Größe der Spiegelung an.
- {{cssxref("image")}}
  - : Beschreibt die Maske, die auf die Spiegelung angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-box-reflect = [ above | below | right | left ]? <length>? <image>?`)}}

## Spezifikationen

Nicht Teil eines Standards. Die standardmäßige Methode, Spiegelungen in CSS zu erstellen, besteht darin, die CSS-Funktion {{cssxref("element()")}} zu verwenden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Apple-[Dokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html).
- Die WebKit-[Spezifikation](https://webkit.org/blog/182/css-reflections/).
