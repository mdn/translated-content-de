---
title: "CSSFontPaletteValuesRule: basePalette-Eigenschaft"
short-title: basePalette
slug: Web/API/CSSFontPaletteValuesRule/basePalette
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`basePalette`**-Eigenschaft der [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Schnittstelle gibt die Basis-Palette an, die mit der Regel verknüpft ist.

## Wert

Ein String, der einen der folgenden Farbwerte haben kann:

- `light`
  - : Entspricht der ersten Palette in der Schriftdatei, die als geeignet für einen hellen Hintergrund, also _nahezu weiß_, markiert ist. Falls keine Palette in der Schrift vorhanden ist oder keine Palette die erforderlichen Metadaten besitzt, ist der Wert gleichbedeutend mit `"0"`, also der ersten Palette in der Schrift.
- `dark`
  - : Entspricht der ersten Palette in der Schriftdatei, die als geeignet für einen dunklen Hintergrund, also _nahezu schwarz_, markiert ist. Falls keine Palette in der Schrift vorhanden ist oder keine Palette die erforderlichen Metadaten besitzt, ist der Wert gleichbedeutend mit `"0"`, also der ersten Palette in der Schrift.
- ein String, der einen Index enthält (wie `"0"`, `"1"`, …)
  - : Entspricht der Palette, die dem Index entspricht. Die erste Palette entspricht `"0"`.

## Beispiele

### Lesen der zugehörigen Basis-Palette

Dieses Beispiel fügt Regeln in ein zusätzliches Stylesheet hinzu, das dem Dokument hinzugefügt wird und als letztes Stylesheet im Dokument (`document.styleSheets[document.styleSheets.length-1].cssRules`) zurückgegeben wird. Somit gibt `rules[2]` das erste [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Objekt zurück, und `rules[3]` das zweite.

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

{{EmbedLiveSample("Lesen der zugehörigen Basis-Palette", "100", "255")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}} At-Regel
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Deskriptor
