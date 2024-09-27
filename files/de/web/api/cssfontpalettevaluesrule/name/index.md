---
title: "CSSFontPaletteValuesRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSFontPaletteValuesRule/name
l10n:
  sourceCommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`name`**-Eigenschaft der Schnittstelle [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule) repräsentiert den Namen, der die zugehörige {{CSSxRef("@font-palette-values")}}-Regel identifiziert. Ein gültiger Name beginnt immer mit zwei Bindestrichen, wie zum Beispiel `--Alternate`.

## Wert

Ein String, der mit zwei Bindestrichen beginnt.

## Beispiele

### Den Namen der Regel auslesen

Dieses Beispiel definiert zunächst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-Regel. Anschließend wird die {{cssxref("@font-palette-values")}}-Regel ausgelesen und ihr Name angezeigt. Da diese Regeln im letzten zum Dokument hinzugefügten Stylesheet vorhanden sind, wird das Palette die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die vom letzten Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`). Daher gibt `rules[1]` ein [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Objekt zurück, von dem wir auf `name` zugreifen können.

#### HTML

```html
<pre id="log">The @font-palette-values at-rule's name:</pre>
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
log.textContent += ` ${fontPaletteValuesRule.name}`;
```

#### Ergebnis

{{EmbedLiveSample("Read the at-rule's name", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}-Regel
