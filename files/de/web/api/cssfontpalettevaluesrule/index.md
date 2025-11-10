---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSFontPaletteValuesRule`**-Interface repräsentiert eine {{cssxref("@font-palette-values")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontPaletteValuesRule.name`](/de/docs/Web/API/CSSFontPaletteValuesRule/name) {{ReadOnlyInline}}
  - : Ein String mit dem Namen der Schriftart-Palette.
- [`CSSFontPaletteValuesRule.fontFamily`](/de/docs/Web/API/CSSFontPaletteValuesRule/fontFamily) {{ReadOnlyInline}}
  - : Ein String, der die Schriftarten angibt, auf die die Regel angewendet werden muss.
- [`CSSFontPaletteValuesRule.basePalette`](/de/docs/Web/API/CSSFontPaletteValuesRule/basePalette) {{ReadOnlyInline}}
  - : Ein String, der die mit der Regel verknüpfte Basis-Palette angibt.
- [`CSSFontPaletteValuesRule.overrideColors`](/de/docs/Web/API/CSSFontPaletteValuesRule/overrideColors) {{ReadOnlyInline}}
  - : Ein String, der die überschriebenen Farben der Basis-Palette und die neuen Farben angibt.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Zugehörige Schriftartfamilie mit CSSOM lesen

Dieses Beispiel definiert zuerst eine {{cssxref("@import")}} und eine {{cssxref("@font-palette-values")}} At-Regel. Dann liest es die {{cssxref("@font-palette-values")}} Regel und zeigt ihren Namen an. Die MDN [Live-Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzigen Inline-Stil mit der ID `css-output`, daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stylesheet zu finden. Die Palette wird die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) in diesem Stylesheet sein. Daher gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, aus dem wir `fontFamily` abrufen können.

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
