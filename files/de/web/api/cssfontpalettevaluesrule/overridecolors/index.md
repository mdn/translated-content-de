---
title: "CSSFontPaletteValuesRule: overrideColors-Eigenschaft"
short-title: overrideColors
slug: Web/API/CSSFontPaletteValuesRule/overrideColors
l10n:
  sourceCommit: 72af34c38ae0d97bc3c9bde4998d538bcc56634a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`overrideColors`** der Schnittstelle [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule) ist ein String mit einer Liste von Farbindizes und Farbwerten, die stattdessen verwendet werden sollen. Sie hat dasselbe Format wie der entsprechende Deskriptor {{cssxref("@font-palette-values/override-colors", "override-colors")}}.

## Wert

Ein String mit einer durch Kommas getrennten Liste von Farbindizes und Farbwerten.

## Beispiele

### Überschriebene Farben auslesen

In diesem Beispiel werden zunächst einige At-Regeln definiert, darunter zwei {{cssxref("@font-palette-values")}}-Regeln. Die MDN-Infrastruktur für [interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) fasst alle CSS-Blöcke des Beispiels zu einem einzigen Inline-Stylesheet mit der ID `css-output` zusammen. Daher verwenden wir zuerst [`document.getElementById()`](/de/docs/Web/API/Document/getElementById), um dieses Stylesheet zu finden.

#### HTML

```html
<div class="hat">
  <div class="emoji colored-hat">🎩</div>
</div>
<button>Toggle color</button>
<pre id="log"></pre>
```

#### CSS

```css
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/noto-color-emoji/NotoColorEmoji-Regular.woff2")
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji", emoji;
  font-size: 3rem;
}

@font-palette-values --blue {
  font-family: "Noto Color Emoji";
  override-colors:
    3426 rgb(1 28 193),
    4614 rgb(60 124 230);
}

@font-palette-values --green {
  font-family: "Noto Color Emoji";
  override-colors:
    3426 rgb(28 193 1),
    4614 rgb(34 230 1);
}

.colored-hat {
  font-palette: --blue;
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const button = document.querySelector("button");
const hat = document.querySelector(".colored-hat");
const rules = document.getElementById("css-output").sheet.cssRules;
const greenFontPaletteValuesRule = rules[3];
const blueFontPaletteValuesRule = rules[2];
log.textContent = `Overridden colors: ${blueFontPaletteValuesRule.overrideColors}`;

button.addEventListener("click", (event) => {
  if (hat.style.fontPalette !== "--green") {
    hat.style.fontPalette = "--green";
    log.textContent = `Overridden colors: ${greenFontPaletteValuesRule.overrideColors}`;
  } else {
    hat.style.fontPalette = "--blue";
    log.textContent = `Overridden colors: ${blueFontPaletteValuesRule.overrideColors}`;
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Read the overridden colors", "100", "125")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-palette-values")}}-At-Regel
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}-Deskriptor
