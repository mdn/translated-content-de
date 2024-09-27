---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{CSSRef}}

Der **`font-variation-settings`** CSS-Deskriptor ermöglicht es Autoren, Low-Level-Variationen von OpenType- oder TrueType-Schriften in der {{cssxref("@font-face")}}-At-Regel anzugeben. Die Werte für diesen Deskriptor sind die gleichen wie für die {{cssxref("font-variation-settings")}}-Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor Variationswerte auf dem Schriftobjekt in der `@font-face`-At-Regel und nicht auf einem gesamten Element setzt, können nur einige Glyphen eines Elements mit diesem Deskriptor gerendert werden.

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for OpenType axis names */
font-variation-settings: "xhgt" 0.7;
```

### Werte

- `normal`
  - : Text wird mit Standardeinstellungen layoutet.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der OpenType-Achsennamen an die Text-Layout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung ist immer ein {{cssxref("&lt;string&gt;")}} aus 4 [ASCII](/de/docs/Glossary/ASCII)-Zeichen, gefolgt von einer {{cssxref("number")}}, die den Achsenwert angibt. Falls das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des U+20 - U+7E Code-Punktbereichs enthält, ist die gesamte Eigenschaft ungültig. Das `<number>` kann bruchteilhaft oder negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schriftgewicht und -dehnung in einer @font-face-Regel setzen

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
