---
title: "CSSFontPaletteValuesRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSFontPaletteValuesRule/name
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`name`**-Eigenschaft des [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Interfaces repräsentiert den Namen, der die zugehörige {{CSSxRef("@font-palette-values")}}-At-Regel identifiziert. Ein gültiger Name beginnt immer mit zwei Bindestrichen, wie z. B. `--Alternate`.

## Wert

Ein String, der mit zwei Bindestrichen beginnt.

## Beispiele

### Den Namen der At-Regel lesen

In diesem Beispiel werden zuerst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-At-Regel definiert. Dann wird die {{cssxref("@font-palette-values")}}-Regel gelesen und ihr Name angezeigt. Da diese Regeln im letzten zum Dokument hinzugefügten Stylesheet leben, wird die Palette die zweite von der letzten Stylesheet im Dokument zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein (`document.styleSheets[document.styleSheets.length-1].cssRules`). Daher gibt `rules[1]` ein [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Objekt zurück, aus dem wir auf `name` zugreifen können.

#### HTML

```html
<pre id="log">The @font-palette-values at-rule's name:</pre>
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
log.textContent += ` ${fontPaletteValuesRule.name}`;
```

#### Ergebnis

{{EmbedLiveSample("Den Namen der At-Regel lesen", "100", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}-At-Regel
