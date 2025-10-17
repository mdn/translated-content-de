---
title: "CSSFontPaletteValuesRule: Eigenschaft fontFamily"
short-title: fontFamily
slug: Web/API/CSSFontPaletteValuesRule/fontFamily
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`fontFamily`**-Eigenschaft der [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Schnittstelle listet die Schriftarten auf, auf die die Regel angewendet werden kann. Die Schriftarten müssen _benannte_ Familien sein; _generische_ Familien wie `courier` sind nicht gültig.

## Wert

Ein String, der eine durch Leerzeichen getrennte Liste der Schriftarten enthält, auf die die Regel angewendet werden kann.

## Beispiele

### Zugehörige Schriftfamilie auslesen

Dieses Beispiel definiert zuerst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-At-Regel. Dann liest es die {{cssxref("@font-palette-values")}}-Regel und zeigt ihren Namen an. Die MDN-[Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzigen Inline-Style mit der ID `css-output`, daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Blatt zu finden. Die Palette wird die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) in diesem Stylesheet sein. Daher gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, von dem wir auf `fontFamily` zugreifen können.

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

const rules = document.getElementById("css-output").sheet.cssRules;
const fontPaletteValuesRule = rules[1]; // a CSSFontPaletteValuesRule interface
log.textContent += ` ${fontPaletteValuesRule.fontFamily}`;
```

#### Ergebnis

{{EmbedLiveSample("Zugehörige Schriftfamilie auslesen", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}} At-Regel
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
