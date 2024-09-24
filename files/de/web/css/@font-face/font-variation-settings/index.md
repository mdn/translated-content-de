---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{CSSRef}}

Der **`font-variation-settings`** CSS-Deskriptor ermöglicht es Autoren, niedrigstufige OpenType- oder TrueType-Schriftvariationen in der {{cssxref("@font-face")}} at-rule anzugeben. Die Werte für diesen Deskriptor sind dieselben wie für die {{cssxref("font-variation-settings")}}-Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor Variationswerte auf dem Schriftobjekt in der `@font-face` at-rule und nicht für ein ganzes Element setzt, können nur einige Glyphen in einem Element unter Verwendung dieses Deskriptors gerendert werden.

## Syntax

```css
/* Verwenden Sie die Standardeinstellungen */
font-variation-settings: normal;

/* Werte für OpenType-Achsen-Namen festlegen */
font-variation-settings: "xhgt" 0.7;
```

### Werte

- `normal`
  - : Text wird mit den Standardeinstellungen ausgelegt.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der OpenType-Achsennamen an die Text-Layout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung besteht immer aus einem {{cssxref("&lt;string&gt;")}} von 4 {{Glossary("ASCII")}}-Zeichen, gefolgt von einer {{cssxref("number")}}, die den Achsenwert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des U+20 - U+7E-Codebereichs enthält, ist die gesamte Eigenschaft ungültig. Der `<number>` kann gebrochen oder negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftstärke und -breite in einer @font-face-Regel festlegen

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

- Andere `@font-face`-Deskriptoren: {{cssxref("@font-face/font-display", "font-display")}}, {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("font-feature-settings", "font-feature-settings")}}, {{cssxref("@font-face/font-stretch", "font-stretch")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}, {{cssxref("@font-face/unicode-range", "unicode-range")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variation-settings")}}
