---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSSOM")}}

Die **`CSSFontPaletteValuesRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-palette-values")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontPaletteValuesRule.name`](/de/docs/Web/API/CSSFontPaletteValuesRule/name) {{ReadOnlyInline}}
  - : Ein String mit dem Namen der Schriftartpalette.
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily) {{ReadOnlyInline}}
  - : Ein String, der die Schriftarten angibt, auf die die Regel angewendet werden muss.
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette) {{ReadOnlyInline}}
  - : Ein String, der die mit der Regel assoziierte Basis-Palette angibt.
- [`CSSFontPaletteValuesRule.overrideColors`](/de/docs/Web/API/CSSFontPaletteValuesRule/overrideColors) {{ReadOnlyInline}}
  - : Ein String, der die Farben der Basis-Palette angibt, die überschrieben werden und die neuen Farben.

## Instanz-Methoden

_Erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Zugehörige Schriftartfamilie mit CSSOM lesen

Dieses Beispiel definiert zuerst eine {{cssxref("@import")}} und eine {{cssxref("@font-palette-values")}} At-Regel. Dann wird die {{cssxref("@font-palette-values")}} Regel gelesen und ihr Name angezeigt. Da diese Regeln im letzten ins Dokument hinzugefügten Stylesheet leben, ist die Palette die zweite [`CSSRule`](/de/docs/Web/API/CSSRule), die vom letzten Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`). Daher gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, aus dem wir auf `fontFamily` zugreifen können.

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
