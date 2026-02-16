---
title: "CSSFontFeatureValuesRule: Eigenschaft fontFamily"
short-title: fontFamily
slug: Web/API/CSSFontFeatureValuesRule/fontFamily
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{ APIRef("CSSOM") }}

Die **`fontFamily`**-Eigenschaft der Schnittstelle [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule) repräsentiert den Namen der Schriftfamilie, auf die sie angewendet wird.

## Wert

Ein Zeichenkette.

## Beispiele

### Schriftfamilie auslesen

In diesem Beispiel deklarieren wir zwei {{cssxref("@font-feature-values")}}, eine für die _Font One_ Schriftfamilie und die andere für _Font Two_. Wir verwenden dann das CSSOM, um diese Schriftfamilien auszulesen und in das Logbuch anzuzeigen.

```html
<pre id="log"></pre>
```

#### CSS

```css
/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* At-rule for "nice-style" in Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

/* Apply the at-rules with a single declaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const rules = document.getElementById("css-output").sheet.cssRules;

const fontOne = rules[0]; // A CSSFontFeatureValuesRule
log.textContent = `The 1st '@font-feature-values' family: "${fontOne.fontFamily}".\n`;

const fontTwo = rules[1]; // Another CSSFontFeatureValuesRule
log.textContent += `The 2nd '@font-feature-values' family: "${fontTwo.fontFamily}".`;
```

{{EmbedLiveSample("read_font_family", "100%", "75px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
