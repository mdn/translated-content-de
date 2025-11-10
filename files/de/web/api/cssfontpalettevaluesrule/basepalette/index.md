---
title: "CSSFontPaletteValuesRule: basePalette-Eigenschaft"
short-title: basePalette
slug: Web/API/CSSFontPaletteValuesRule/basePalette
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`basePalette`**-Eigenschaft der [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Schnittstelle gibt die Basis-Palette an, die mit der Regel assoziiert ist.

## Wert

Ein String, der einer der folgenden Farbwerte sein kann:

- `light`
  - : Entspricht der ersten Palette in der Schriftartdatei, die als geeignet für einen hellen Hintergrund markiert ist, also _nahezu weiß_. Wenn keine Palette in der Schriftart vorhanden ist oder keine Palette die erforderlichen Metadaten hat, entspricht der Wert `"0"`, also der ersten Palette in der Schriftart.
- `dark`
  - : Entspricht der ersten Palette in der Schriftartdatei, die als geeignet für einen dunklen Hintergrund markiert ist, also _nahezu schwarz_. Wenn keine Palette in der Schriftart vorhanden ist oder keine Palette die erforderlichen Metadaten hat, entspricht der Wert `"0"`, also der ersten Palette in der Schriftart.
- ein String, der einen Index enthält (z. B. `"0"`, `"1"`, …)
  - : Entspricht der Palette, die dem Index entspricht. Die erste Palette entspricht `"0"`.

## Beispiele

### Lesen der zugeordneten Basis-Palette

Die MDN-[Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel zu einem einzigen Inline-Stil mit der ID `css-output`, daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stilblatt zu finden. `rules[2]` gibt das erste [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Objekt zurück und `rules[3]` das zweite.

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
<pre id="log"></pre>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Nabla&display=swap";

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

const rules = document.getElementById("css-output").sheet.cssRules;
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

- {{cssxref("@font-palette-values")}} Regel
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Deskriptor
