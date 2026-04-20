---
title: "`font-variation-settings` CSS Attributbeschreibung"
short-title: font-variation-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-variation-settings
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Die **`font-variation-settings`** [CSS](/de/docs/Web/CSS)-Beschreibung ermöglicht es Autoren, niedrigstufige OpenType- oder TrueType-Schriftvariationen in der {{cssxref("@font-face")}}-Attributregel anzugeben. Die Werte für diese Beschreibung sind dieselben wie für die {{cssxref("font-variation-settings")}}-Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da diese Beschreibung Variationswerte am Schriftobjekt in der `@font-face`-Regel und nicht für ein gesamtes Element festlegt, können nur einige Glyphen in einem Element mit dieser Beschreibung gerendert werden.

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
  - : Bei der Textdarstellung wird die Liste der OpenType-Achsennamen an die Textlayout-Engine übergeben, um Schriftzeicheneigenschaften ein- oder auszuschalten. Jede Einstellung ist immer ein {{cssxref("&lt;string&gt;")}} aus 4 {{Glossary("ASCII", "ASCII")}}-Zeichen, gefolgt von einer {{cssxref("number")}}-Angabe, die den Achsenwert angibt. Wenn das `<string>` mehr oder weniger Zeichen hat oder Zeichen außerhalb des Bereichs U+20 - U+7E enthält, ist die gesamte Eigenschaft ungültig. Der `<number>` kann gebrochen oder negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von Schriftgewicht und Dehnung in einer @font-face-Regel

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
