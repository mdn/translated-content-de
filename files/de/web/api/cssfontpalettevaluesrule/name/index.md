---
title: "CSSFontPaletteValuesRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSFontPaletteValuesRule/name
l10n:
  sourceCommit: 56bbf59f4ea2566d64ad2e5c669a7a597626b7f3
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Schnittstelle repräsentiert den Namen zur Identifizierung der zugehörigen {{CSSxRef("@font-palette-values")}}-At-Regel. Ein gültiger Name beginnt immer mit zwei Bindestrichen, wie `--Alternate`.

## Wert

Ein String, der mit zwei Bindestrichen beginnt.

## Beispiele

### Den Namen der At-Regel lesen

Dieses Beispiel definiert zunächst eine {{cssxref("@import")}}- und eine {{cssxref("@font-palette-values")}}-At-Regel. Dann wird die {{cssxref("@font-palette-values")}}-Regel gelesen und ihr Name angezeigt. Die MDN [Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples)-Infrastruktur kombiniert alle CSS-Blöcke im Beispiel in einem einzigen Inline-Stil mit der ID `css-output`, daher nutzen wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stylesheet zu finden. Die Palette wird die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) in diesem Stylesheet sein. Also gibt `rules[1]` ein `CSSFontPaletteValuesRule`-Objekt zurück, auf das wir über `name` zugreifen können.

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

const rules = document.getElementById("css-output").sheet.cssRules;
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
