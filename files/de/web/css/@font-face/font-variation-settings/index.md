---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{CSSRef}}

Der CSS-Deskriptor **`font-variation-settings`** ermöglicht es Autoren, Low-Level-OpenType- oder TrueType-Schriftvariationen in der {{cssxref("@font-face")}}-At-Regel zu spezifizieren. Die Werte für diesen Deskriptor sind die gleichen wie für die Eigenschaft {{cssxref("font-variation-settings")}}, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor Variationswerte auf dem Schriftobjekt in der `@font-face`-At-Regel und nicht auf einem ganzen Element festlegt, können nur einige Glyphen in einem Element mit diesem Deskriptor gerendert werden.

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for OpenType axis names */
font-variation-settings: "xhgt" 0.7;
```

### Werte

- `normal`
  - : Text wird mit den Standardeinstellungen layoutet.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der OpenType-Achsennamen an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung ist immer ein {{cssxref("&lt;string&gt;")}} aus 4 [ASCII](/de/docs/Glossary/ASCII)-Zeichen, gefolgt von einer {{cssxref("number")}}, die den Achsenwert angibt. Hat der `<string>` mehr oder weniger Zeichen oder enthält Zeichen außerhalb des Codepunktbereichs U+20 - U+7E, ist die gesamte Eigenschaft ungültig. Die `<number>` kann fraktional oder negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Schriftgewicht und -dehnung in einer @font-face-Regel

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
