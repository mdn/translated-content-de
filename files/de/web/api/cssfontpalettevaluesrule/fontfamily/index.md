---
title: "CSSFontPaletteValuesRule: fontFamily-Eigenschaft"
short-title: fontFamily
slug: Web/API/CSSFontPaletteValuesRule/fontFamily
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`fontFamily`**-Eigenschaft des [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Interfaces listet die Schriftfamilien auf, auf die die Regel angewendet werden kann. Die Schriftfamilien müssen _benannte_ Familien sein; _generische_ Familien wie `courier` sind nicht gültig.

## Wert

Ein String, der eine durch Leerzeichen getrennte Liste der Schriftfamilien enthält, auf die die Regel angewendet werden kann.

## Beispiele

### Die zugehörige Schriftfamilie lesen

Dieses Beispiel definiert zunächst ein {{cssxref("@import")}} und eine {{cssxref("@font-palette-values")}} at-Regel. Dann wird die {{cssxref("@font-palette-values")}}-Regel gelesen und ihr Name angezeigt. Da diese Regeln im zuletzt zum Dokument hinzugefügten Stylesheet enthalten sind, wird die Palette die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die vom letzten Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`). Daher gibt `rules[1]` ein [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Objekt zurück, aus dem wir auf `fontFamily` zugreifen können.

#### HTML

```html
<pre id="log">
The @font-palette-values at-rule's applies to the font families:</pre
>
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

const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const fontPaletteValuesRule = rules[1]; // a CSSFontPaletteValuesRule interface
log.textContent += ` ${fontPaletteValuesRule.fontFamily}`;
```

#### Ergebnis

{{EmbedLiveSample("Die zugehörige Schriftfamilie lesen", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}} at-Regel
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
