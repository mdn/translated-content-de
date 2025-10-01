---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Der **`font-variation-settings`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Autoren, niedrigstufige OpenType- oder TrueType-Schriftvariationen in der {{cssxref("@font-face")}}-Regel anzugeben. Die Werte für diesen Deskriptor sind die gleichen wie für die {{cssxref("font-variation-settings")}}-Eigenschaft, außer für die globalen Schlüsselwortwerte.

Da dieser Deskriptor die Variationswerte am Schriftobjekt in der `@font-face`-Regel festlegt und nicht an einem gesamten Element, könnten nur einige Glyphen in einem Element mit diesem Deskriptor gerendert werden.

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for OpenType axis names */
font-variation-settings: "xhgt" 0.7;
```

### Werte

- `normal`
  - : Text wird unter Verwendung der Standardeinstellungen layoutiert.
- `<string> <number>`
  - : Beim Rendern von Text wird die Liste der OpenType-Achsen-Namen an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren. Jede Einstellung ist immer ein {{cssxref("&lt;string&gt;")}} aus 4 {{Glossary("ASCII", "ASCII")}}-Zeichen, gefolgt von einer {{cssxref("number")}}, die den Achsenwert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Bereichs U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Die `<number>` kann gebrochen oder negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Schriftdicke und Streckung in einer @font-face-Regel

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
