---
title: CSSFontPaletteValuesRule
slug: Web/API/CSSFontPaletteValuesRule
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSSOM")}}

Die **`CSSFontPaletteValuesRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-palette-values")}} [at-rule](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("CSSRule")}}._

- {{domxref("CSSFontPaletteValuesRule.name")}} {{ReadOnlyInline}}
  - : Ein String mit dem Namen der Schriftartpalette.
- {{domxref("CSSFontPaletteValuesRule.fontFamily")}} {{ReadOnlyInline}}
  - : Ein String, der die Schriftfamilien angibt, auf die die Regel angewendet werden muss.
- {{domxref("CSSFontPaletteValuesRule.basePalette")}} {{ReadOnlyInline}}
  - : Ein String, der die mit der Regel verknüpfte Grundpalette angibt.
- {{domxref("CSSFontPaletteValuesRule.overrideColors")}} {{ReadOnlyInline}}
  - : Ein String, der die Farben der überschriebenen Grundpalette und die neuen Farben angibt.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren {{domxref("CSSRule")}}._

## Beispiele

### Zur zugehörigen Schriftfamilie mit CSSOM lesen

In diesem Beispiel wird zuerst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-At-Regel definiert. Anschließend wird die {{cssxref("@font-palette-values")}}-Regel gelesen und ihr Name angezeigt. Da diese Regeln im zuletzt zum Dokument hinzugefügten Stylesheet existieren, wird die Palette die zweite {{domxref("CSSRule")}} sein, die vom letzten Stylesheet im Dokument (`document.styleSheets[document.styleSheets.length-1].cssRules`) zurückgegeben wird. Daher gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, aus dem wir `fontFamily` abrufen können.

#### HTML

```html
<pre id="log">Die @font-palette-values At-Regel Schriftfamilien:</pre>
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

{{EmbedLiveSample("Read associated font family using CSSOM", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}
