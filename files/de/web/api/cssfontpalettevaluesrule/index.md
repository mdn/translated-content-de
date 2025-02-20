---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die **`CSSFontPaletteValuesRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-palette-values")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontPaletteValuesRule.name`](/de/docs/Web/API/CSSFontPaletteValuesRule/name) {{ReadOnlyInline}}
  - : Ein String mit dem Namen der Schriftartenpalette.
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily) {{ReadOnlyInline}}
  - : Ein String, der die Schriftfamilien angibt, auf die die Regel angewendet werden soll.
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette) {{ReadOnlyInline}}
  - : Ein String, der die mit der Regel verknüpfte Basis-Palette angibt.
- [`CSSFontPaletteValuesRule.overrideColors`](/de/docs/Web/API/CSSFontPaletteValuesRule/overrideColors) {{ReadOnlyInline}}
  - : Ein String, der die überschriebenen Farben der Basis-Palette und die neuen Farben angibt.

## Instanz-Methoden

_Erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Zugehörige Schriftfamilie mit CSSOM lesen

Dieses Beispiel definiert zuerst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-At-Regel. Anschließend wird die {{cssxref("@font-palette-values")}}-Regel gelesen und ihr Name angezeigt. Da diese Regeln im letzten Stylesheet des Dokuments enthalten sind, ist die Palette die zweite [`CSSRule`](/de/docs/Web/API/CSSRule), die durch das letzte Stylesheet im Dokument (`document.styleSheets[document.styleSheets.length-1].cssRules`) zurückgegeben wird. Daher gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, über das wir auf `fontFamily` zugreifen können.

#### HTML

```html
<pre id="log">The @font-palette-values at-rule font families:</pre>
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
const fontPaletteValuesRule = rules[1]; // aA CSSFontPaletteValuesRule interface
log.textContent += ` ${fontPaletteValuesRule.fontFamily}`;
```

#### Ergebnis

{{EmbedLiveSample("Read associated font family using CSSOM", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}
