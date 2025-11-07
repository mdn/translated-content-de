---
title: font-variation-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-variation-settings
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`font-variation-settings`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, niedrige OpenType- oder TrueType-Schriftvariationen in der {{cssxref("@font-face")}}-At-Regel anzugeben. Die Werte für diesen Deskriptor sind dieselben wie für die {{cssxref("font-variation-settings")}}-Eigenschaft, abgesehen von den globalen Schlüsselwortwerten.

Da dieser Deskriptor Variationswerte auf dem Schriftobjekt in der `@font-face` at-Regel festlegt und nicht auf ein ganzes Element, können nur einige Glyphen in einem Element unter Verwendung dieses Deskriptors gerendert werden.

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
  - : Beim Rendern von Text wird die Liste der OpenType-Achsennamen an die Text-Layout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung ist immer ein {{cssxref("&lt;string&gt;")}} von 4 {{Glossary("ASCII", "ASCII")}} Zeichen, gefolgt von einer {{cssxref("number")}} die den Achsenwert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Codepunktebereichs U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Das `<number>` kann fractional oder negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Schriftgewicht und Weite in einer @font-face-Regel

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
- Zugehörige Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variation-settings")}}
