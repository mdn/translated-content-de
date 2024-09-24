---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
l10n:
  sourceCommit: dd3be0c826d1a611b13c98e7e0b4c38d8eb3b146
---

{{APIRef("CSSOM")}}

Die **`CSSFontFeatureValuesRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-feature-values")}} [At-Regel](/de/docs/Web/CSS/At-rule), die es Entwicklern ermöglicht, für jede Schriftart einen allgemeinen Namen zuzuweisen, um Feature-Indizes zu definieren, die in {{cssxref("font-variant-alternates")}} verwendet werden sollen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorgänger {{domxref("CSSRule")}}._

- {{domxref("CSSFontFeatureValuesRule.fontFamily")}}
  - : Ein String, der die Schriftfamilie identifiziert, auf die diese Regel angewendet wird.

## Instanzmethoden

_Erbt Methoden von seinem Vorgänger {{domxref("CSSRule")}}._

## Beispiele

### Schriftfamilie lesen

In diesem Beispiel deklarieren wir zwei {{cssxref("@font-feature-values")}}, eine für die Schriftfamilie _Font One_ und die andere für _Font Two_. Wir verwenden dann das CSSOM, um diese Schriftfamilien auszulesen und sie im Log anzuzeigen.

#### HTML

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

/* Anwendung der At-Regeln mit einer einzigen Deklaration */
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

## Siehe auch

- {{cssxref("@font-feature-values")}}
