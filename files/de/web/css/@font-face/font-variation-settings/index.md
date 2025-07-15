---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`font-variation-settings`** CSS-Deskriptor ermöglicht es Autoren, Low-Level-Variationen von OpenType oder TrueType-Schriften in der {{cssxref("@font-face")}}-Regel zu spezifizieren. Die Werte für diesen Deskriptor sind dieselben wie für die Eigenschaft {{cssxref("font-variation-settings")}}, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor Variationswerte am Schriftobjekt in der `@font-face`-Regel und nicht an einem gesamten Element festlegt, können nur einige Glyphen in einem Element unter Verwendung dieses Deskriptors dargestellt werden.

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for OpenType axis names */
font-variation-settings: "xhgt" 0.7;
```

### Werte

- `normal`
  - : Text wird mit den Standardeinstellungen platziert.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der OpenType-Achsnamen an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung ist immer ein {{cssxref("&lt;string&gt;")}} mit 4 {{Glossary("ASCII", "ASCII")}}-Zeichen, gefolgt von einer {{cssxref("number")}}, die den Achswert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Bereichs U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Der `<number>` kann bruchteilhaft oder negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Schriftstärke und -breite in einer @font-face-Regel

```css
@font-face {
  font-family: "OpenTypeFont";
  src: url("open_type_font.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-variation-settings:
    "wght" 400,
    "wdth" 300;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-display", "font-display")}}, {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("font-feature-settings", "font-feature-settings")}}, {{cssxref("@font-face/font-stretch", "font-stretch")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}, {{cssxref("@font-face/unicode-range", "unicode-range")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variation-settings")}}
