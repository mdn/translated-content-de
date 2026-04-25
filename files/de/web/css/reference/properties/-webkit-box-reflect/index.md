---
title: "`-webkit-box-reflect` CSS property"
short-title: -webkit-box-reflect
slug: Web/CSS/Reference/Properties/-webkit-box-reflect
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Non-standard_Header}}

Die **`-webkit-box-reflect`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, den Inhalt eines Elements in eine spezifische Richtung zu spiegeln.

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

- `above`, `below`, `right`, `left`
  - : Schlüsselwörter, die angeben, in welche Richtung die Spiegelung erfolgen soll.
- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Größe der Spiegelung an.
- {{cssxref("image")}}
  - : Beschreibt die Maske, die auf die Spiegelung angewendet werden soll.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-box-reflect = [ above | below | right | left ]? <length>? <image>?`)}}

## Spezifikationen

Ist Teil keines Standards. Der standardisierte Weg, um Spiegelungen in CSS durchzuführen, ist die Verwendung der CSS-Funktion {{cssxref("element()")}}.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Apple [Dokumentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html).
- Die WebKit [Spezifikation](https://webkit.org/blog/182/css-reflections/).
