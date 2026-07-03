---
title: "CSSFontPaletteValuesRule: fontFamily-Eigenschaft"
short-title: fontFamily
slug: Web/API/CSSFontPaletteValuesRule/fontFamily
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`fontFamily`**-Eigenschaft des [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Interfaces listet die Schriftfamilien auf, auf die die Regel angewendet werden kann. Die Schriftfamilien müssen _benannte_ Familien sein; _generische_ Familien wie `courier` sind nicht gültig.

## Wert

Ein String, der eine durch Leerzeichen getrennte Liste der Schriftfamilien enthält, auf die die Regel angewendet werden kann.

## Beispiele

### Die zugehörige Schriftfamilie lesen

Dieses Beispiel definiert zuerst eine {{cssxref("@import")}}-Regel und eine {{cssxref("@font-palette-values")}}-Regel mit dem At-Zeichen. Dann liest es die {{cssxref("@font-palette-values")}}-Regel und zeigt ihren Namen an. Die MDN-[Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzelnen Inline-Stil mit der ID `css-output`, daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stylesheet zu finden. Die Palette wird die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) in diesem Stylesheet sein. Daher gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, aus dem wir `fontFamily` abrufen können.

#### HTML

```html
<pre id="log">
The @font-palette-values at-rule's applies to the font families:</pre>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Bungee+Spice";

@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}

.alternate {
  font-palette: --Alternate;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

const rules = document.getElementById("css-output").sheet.cssRules;
const fontPaletteValuesRule = rules[1]; // a CSSFontPaletteValuesRule interface
log.textContent += ` ${fontPaletteValuesRule.fontFamily}`;
```

#### Ergebnis

{{EmbedLiveSample("Read the associated font family", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}} Regel mit dem At-Zeichen
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
