---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSFontFeatureValuesRule`**-Interface repräsentiert eine {{cssxref("@font-feature-values")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules), die Entwicklern ermöglicht, jeder Schriftart ein gemeinsamer Name zuzuweisen, um die Features-Indizes zu spezifizieren, die in {{cssxref("font-variant-alternates")}} verwendet werden sollen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFeatureValuesRule.fontFamily`](/de/docs/Web/API/CSSFontFeatureValuesRule/fontFamily)
  - : Ein String, der die Schriftfamilie identifiziert, auf die diese Regel angewendet wird.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Schriftfamilie lesen

In diesem Beispiel definieren wir zwei {{cssxref("@font-feature-values")}}, eine für die Schriftfamilie _Font One_ und die andere für _Font Two_. Anschließend verwenden wir die CSSOM, um diese Schriftfamilien zu lesen und sie im Log anzuzeigen.

#### HTML

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

## Siehe auch

- {{cssxref("@font-feature-values")}}
