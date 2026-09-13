---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{APIRef("CSSOM")}}

Die **`CSSFontFeatureValuesRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-feature-values")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules). Die Werte ihrer Instanzeigenschaften können mit der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Schnittstelle zugegriffen werden.

`@font-feature-values` ermöglicht es Entwicklern, für einen bestimmten Schriftschnitt einen menschenlesbaren Namen mit einem numerischen Index zu verknüpfen, der ein bestimmtes [OpenType-Schriftmerkmal](/de/docs/Web/CSS/Guides/Fonts/OpenType_fonts) steuert. Für Merkmale, die alternative Glyphen auswählen (stilistisch, Styleset, Zeichenvariante, Swash, Ornament oder Annotation), kann die {{cssxref("font-variant-alternates")}}-Eigenschaft dann den menschenlesbaren Namen referenzieren, um das zugehörige Merkmal anzuwenden. Dies ist praktisch, da es ermöglicht, denselben Namen zu verwenden, um eine Reihe alternativer Glyphen über mehrere Schriften hinweg darzustellen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFeatureValuesRule.annotation`](/de/docs/Web/API/CSSFontFeatureValuesRule/annotation) {{experimental_inline}}
  - : Eine benutzerdefinierte Wertedefinition und ein Wert, der eine alternative Annotation der Schrift anwendet.
- [`CSSFontFeatureValuesRule.characterVariant`](/de/docs/Web/API/CSSFontFeatureValuesRule/characterVariant) {{experimental_inline}}
  - : Eine benutzerdefinierte Wertedefinition und ein Wert, der stilistische Alternativen für Zeichen der Schrift anwendet.
- [`CSSFontFeatureValuesRule.fontFamily`](/de/docs/Web/API/CSSFontFeatureValuesRule/fontFamily)
  - : Eine Zeichenfolge, die die Schriftfamilie identifiziert, auf die diese Regel angewendet wird.
- [`CSSFontFeatureValuesRule.ornaments`](/de/docs/Web/API/CSSFontFeatureValuesRule/ornaments) {{experimental_inline}}
  - : Eine benutzerdefinierte Wertedefinition und ein Wert, der alternative Ornamente der Schrift anwendet.
- [`CSSFontFeatureValuesRule.styleset`](/de/docs/Web/API/CSSFontFeatureValuesRule/styleset) {{experimental_inline}}
  - : Eine benutzerdefinierte Wertedefinition und ein Wert, der alternative Style-Sets der Schrift anwendet.
- [`CSSFontFeatureValuesRule.stylistic`](/de/docs/Web/API/CSSFontFeatureValuesRule/stylistic) {{experimental_inline}}
  - : Eine benutzerdefinierte Wertedefinition und ein Wert, der alternative Glyphen der Schrift anwendet.
- [`CSSFontFeatureValuesRule.swash`](/de/docs/Web/API/CSSFontFeatureValuesRule/swash) {{experimental_inline}}
  - : Eine benutzerdefinierte Wertedefinition und ein Wert, der alternative Swashes der Schrift anwendet.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Schriftfamilie lesen

In diesem Beispiel deklarieren wir zwei {{cssxref("@font-feature-values")}} für die Schriftfamilie _Font One_ und _Font Two_. In beiden Deklarationen definieren wir, dass der Name "nice-style" verwendet werden kann, um die Styleset-alternativen Glyphen für beide Schriften darzustellen, indem der Index für diese Alternative in jeder Schriftfamilie angegeben wird. Die alternativen Glyphen werden dann für jede `.nice-look`-Klasse angewendet, indem {{cssxref("font-variant-alternates")}} verwendet wird und der Name an die [`styleset()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset)-Funktion übergeben wird.

Wir verwenden dann das CSSOM, um diese Deklaration als `CSSFontFeatureValuesRule`-Instanzen zu lesen und sie im Protokoll anzuzeigen.

#### CSS

```css
/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12; /* name used to represent the alternate set of glyphs at index 12 */
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
  font-variant-alternates: styleset(
    nice-style
  ); /* name selects different index for same alternate in different fonts */
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 40px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const rules = document.getElementById("css-output").sheet.cssRules;

const fontOne = rules[0]; // A CSSFontFeatureValuesRule
log(`The 1st '@font-feature-values' family: "${fontOne.fontFamily}".`);

const fontTwo = rules[1]; // Another CSSFontFeatureValuesRule
log(`The 2nd '@font-feature-values' family: "${fontTwo.fontFamily}"`);
```

{{EmbedLiveSample("read_font_family", "100%", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-feature-values")}}
