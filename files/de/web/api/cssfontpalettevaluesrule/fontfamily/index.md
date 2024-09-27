---
title: "CSSFontPaletteValuesRule: fontFamily-Eigenschaft"
short-title: fontFamily
slug: Web/API/CSSFontPaletteValuesRule/fontFamily
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`fontFamily`**-Eigenschaft der [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Schnittstelle listet die Schriftfamilien auf, auf die die Regel angewendet werden kann. Die Schriftfamilien müssen _benannte_ Familien sein; _generische_ Familien wie `courier` sind nicht gültig.

## Wert

Ein String, der eine durch Leerzeichen getrennte Liste der Schriftfamilien enthält, auf die die Regel angewendet werden kann.

## Beispiele

### Die zugehörige Schriftfamilie lesen

Dieses Beispiel definiert zunächst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-Regel. Dann liest es die {{cssxref("@font-palette-values")}}-Regel und zeigt ihren Namen an. Da diese Regeln im letzten zum Dokument hinzugefügten Stylesheet existieren, ist die Palette die zweite [`CSSRule`](/de/docs/Web/API/CSSRule), die vom letzten Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`). Daher gibt `rules[1]` ein [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Objekt zurück, aus dem wir auf `fontFamily` zugreifen können.

#### HTML

```html
<pre id="log">
The @font-palette-values at-rule's applies to the font families:</pre
>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);

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

{{EmbedLiveSample("Read the associated font family", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}-Regel
- {{cssxref("@font-palette-values/font-family", "font-family")}}-Deskriptor
