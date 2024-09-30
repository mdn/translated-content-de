---
title: "CSSFontPaletteValuesRule: overrideColors Eigenschaft"
short-title: overrideColors
slug: Web/API/CSSFontPaletteValuesRule/overrideColors
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`overrideColors`**-Eigenschaft der [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)-Schnittstelle ist ein String, der eine Liste von Farbindex und Farbpaar enthält, die stattdessen verwendet werden sollen. Sie wird im gleichen Format angegeben wie der entsprechende {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor.

## Wert

Ein String, der eine durch Kommas getrennte Liste von Farbindex und Farbpaar enthält.

## Beispiele

### Die überschriebenen Farben lesen

Dieses Beispiel definiert zunächst einige At-Regeln, darunter zwei {{cssxref("@font-palette-values")}}. Da diese Regeln im zuletzt dem Dokument hinzugefügten Stylesheet leben, wird die Palette die zweite [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die vom letzten Stylesheet im Dokument (`document.styleSheets[document.styleSheets.length-1].cssRules`) zurückgegeben wird.

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
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24)
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji";
  font-size: 3rem;
}

@font-palette-values --blue {
  font-family: "Noto Color Emoji";
  override-colors:
    3 rgb(1 28 193),
    4 rgb(60 124 230);
}

@font-palette-values --green {
  font-family: "Noto Color Emoji";
  override-colors:
    3 rgb(28 193 1),
    4 rgb(34 230 1);
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
const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;
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

- {{cssxref("@font-palette-values")}} At-Regel
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
