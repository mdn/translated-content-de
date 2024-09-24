---
title: "CSSFontFeatureValuesRule: fontFamily Eigenschaft"
short-title: fontFamily
slug: Web/API/CSSFontFeatureValuesRule/fontFamily
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{ APIRef("CSSOM") }}

Die **`fontFamily`**-Eigenschaft der {{domxref("CSSConditionRule")}}-Schnittstelle repräsentiert den Namen der Schriftfamilie, auf die sie angewendet wird.

## Wert

Ein String.

## Beispiele

### Schriftfamilie lesen

In diesem Beispiel deklarieren wir zwei {{cssxref("@font-feature-values")}}, eine für die Schriftfamilie _Font One_ und die andere für _Font Two_. Wir verwenden dann das CSSOM, um diese Schriftfamilien zu lesen und sie im Protokoll anzuzeigen.

```html
<pre id="log"></pre>
```

#### CSS

```css
/* At-Regel für "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* At-Regel für "nice-style" in Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

/* Anwenden der At-Regeln mit einer einzigen Deklaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

#### JavaScript

```js
const log = document.getElementById("log");
const rules = document.styleSheets[document.styleSheets.length - 1].cssRules;

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
