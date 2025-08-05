---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSSOM")}}

Das **`CSSFontPaletteValuesRule`**-Interface repräsentiert eine {{cssxref("@font-palette-values")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontPaletteValuesRule.name`](/de/docs/Web/API/CSSFontPaletteValuesRule/name) {{ReadOnlyInline}}
  - : Ein String mit dem Namen der Schriftartenpalette.
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily) {{ReadOnlyInline}}
  - : Ein String, der die Schriftarten angibt, auf die die Regel angewendet werden muss.
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette) {{ReadOnlyInline}}
  - : Ein String, der die mit der Regel assoziierte Grundpalette angibt.
- [`CSSFontPaletteValuesRule.overrideColors`](/de/docs/Web/API/CSSFontPaletteValuesRule/overrideColors) {{ReadOnlyInline}}
  - : Ein String, der die überschriebenen Farben der Grundpalette und die neuen Farben angibt.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Zugehörige Schriftartenfamilie mit CSSOM auslesen

Dieses Beispiel definiert zuerst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-At-Regel. Dann wird die {{cssxref("@font-palette-values")}}-Regel ausgelesen und ihr Name angezeigt. Da diese Regeln in das zuletzt dem Dokument hinzugefügte Stylesheet eingefügt werden, wird die Palette die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die vom letzten Stylesheet im Dokument (`document.styleSheets[document.styleSheets.length-1].cssRules`) zurückgegeben wird. Folglich gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, über das wir auf `fontFamily` zugreifen können.

#### HTML

```html
<pre id="log">The @font-palette-values at-rule font families:</pre>
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
