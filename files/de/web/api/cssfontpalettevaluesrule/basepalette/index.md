---
title: "CSSFontPaletteValuesRule: basePalette-Eigenschaft"
short-title: basePalette
slug: Web/API/CSSFontPaletteValuesRule/basePalette
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`basePalette`**-Eigenschaft der {{domxref("CSSFontPaletteValuesRule")}}-Schnittstelle gibt die Basis-Palette an, die mit der Regel verknüpft ist.

## Wert

Ein String, der einen der folgenden Farbwerte annehmen kann:

- `light`
  - : Entspricht der ersten Palette in der Schriftdatei, die als für einen hellen Hintergrund geeignet markiert ist, also _nahezu weiß_. Wenn es in der Schrift keine Palette gibt oder keine Palette die erforderlichen Metadaten besitzt, ist der Wert äquivalent zu `"0"`, also der ersten Palette in der Schrift.
- `dark`
  - : Entspricht der ersten Palette in der Schriftdatei, die als für einen dunklen Hintergrund geeignet markiert ist, also _nahezu schwarz_. Wenn es in der Schrift keine Palette gibt oder keine Palette die erforderlichen Metadaten besitzt, ist der Wert äquivalent zu `"0"`, also der ersten Palette in der Schrift.
- Ein String, der einen Index enthält (wie `"0"`, `"1"`, …)
  - : Entspricht der Palette, die dem Index entspricht. Die erste Palette entspricht `"0"`.

## Beispiele

### Lesen der zugeordneten Basis-Palette

Dieses Beispiel fügt Regeln in einem zusätzlichen Stylesheet hinzu, das als letztes Stylesheet im Dokument zurückgegeben wird (`document.styleSheets[document.styleSheets.length-1].cssRules`). So liefert `rules[2]` das erste {{domxref("CSSFontPaletteValuesRule")}}-Objekt und `rules[3]` das zweite.

#### HTML

```html
<h2>Standard-Basis-Palette</h2>
<h2 class="two">Basis-Palette an Index 2</h2>
<h2 class="five">Basis-Palette an Index 5</h2>
<pre id="log"></pre>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

h2 {
  font-family: "Nabla";
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

- {{cssxref("@font-palette-values")}}-Regel
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}-Deskriptor
