---
title: "CSSFontPaletteValuesRule: basePalette-Eigenschaft"
short-title: basePalette
slug: Web/API/CSSFontPaletteValuesRule/basePalette
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`basePalette`**-Eigenschaft der Schnittstelle [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule) gibt die mit der Regel verknüpfte Basis-Palette an.

## Wert

Ein String, der einer der folgenden Farbwerte sein kann:

- `light`
  - : Entspricht der ersten Palette in der Schriftdatei, die als anwendbar auf einen hellen Hintergrund gekennzeichnet ist, das heißt, _nahezu weiß_. Wenn es keine Palette in der Schrift gibt oder wenn keine Palette die erforderlichen Metadaten hat, ist der Wert gleichwertig mit `"0"`, das heißt, die erste Palette in der Schrift.
- `dark`
  - : Entspricht der ersten Palette in der Schriftdatei, die als anwendbar auf einen dunklen Hintergrund gekennzeichnet ist, das heißt, _nahezu schwarz_. Wenn es keine Palette in der Schrift gibt oder wenn keine Palette die erforderlichen Metadaten hat, ist der Wert gleichwertig mit `"0"`, das heißt, die erste Palette in der Schrift.
- ein String, der einen Index enthält (wie `"0"`, `"1"`, …)
  - : Entspricht der Palette, die dem Index entspricht. Die erste Palette entspricht `"0"`.

## Beispiele

### Lesen der zugeordneten Basis-Palette

Dieses Beispiel fügt Regeln in ein zusätzlich zum Dokument hinzugefügtes Stylesheet ein, das als letztes Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`). So gibt `rules[2]` das erste [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Objekt zurück und `rules[3]` das zweite.

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
<pre id="log"></pre>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

h2 {
  font-family: "Nabla", fantasy;
}

@font-palette-values --two {
  font-family: "Nabla";
  base-palette: 2;
}

@font-palette-values --five {
  font-family: "Nabla";
  base-palette: 5;
}

.two {
  font-palette: --two;
}

.five {
  font-palette: --five;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const twoRule = rules[2]; // A CSSFontPaletteValuesRule interface
const fiveRule = rules[3]; // A CSSFontPaletteValuesRule interface

log.textContent = `The ${twoRule.name} @font-palette-values base palette is: ${twoRule.basePalette}\n`;
log.textContent += `The ${fiveRule.name} @font-palette-values base palette is: ${fiveRule.basePalette}`;
```

#### Ergebnis

{{EmbedLiveSample("Read the associated base palette", "100", "255")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}} At-Regel
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Deskriptor
