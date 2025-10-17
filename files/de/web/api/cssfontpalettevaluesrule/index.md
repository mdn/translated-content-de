---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{APIRef("CSSOM")}}

Das **`CSSFontPaletteValuesRule`**-Interface repräsentiert eine {{cssxref("@font-palette-values")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontPaletteValuesRule.name`](/de/docs/Web/API/CSSFontPaletteValuesRule/name) {{ReadOnlyInline}}
  - : Ein String mit dem Namen der Schriftarten-Palette.
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily) {{ReadOnlyInline}}
  - : Ein String, der die Schriftfamilien angibt, auf die die Regel angewendet werden muss.
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette) {{ReadOnlyInline}}
  - : Ein String, der die mit der Regel verbundene Basis-Palette angibt.
- [`CSSFontPaletteValuesRule.overrideColors`](/de/docs/Web/API/CSSFontPaletteValuesRule/overrideColors) {{ReadOnlyInline}}
  - : Ein String, der die Farben der Basis-Palette angibt, die überschrieben werden, sowie die neuen Farben.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Verknüpfte Schriftfamilie mit CSSOM auslesen

Dieses Beispiel definiert zuerst eine {{cssxref("@import")}} und eine {{cssxref("@font-palette-values")}} at-rule. Anschließend wird die {{cssxref("@font-palette-values")}}-Regel ausgelesen und ihr Name angezeigt. Die [Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur von MDN kombiniert alle CSS-Blöcke im Beispiel zu einem einzigen Inline-Stil mit der ID `css-output`, daher verwenden wir zunächst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) um dieses Stylesheet zu finden. Die Palette wird die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) in diesem Stylesheet sein. Daher gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, über das wir auf `fontFamily` zugreifen können.

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

const rules = document.getElementById("css-output").sheet.cssRules;
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
