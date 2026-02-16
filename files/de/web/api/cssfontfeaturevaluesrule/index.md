---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{APIRef("CSSOM")}}

Die **`CSSFontFeatureValuesRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-feature-values")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules). Die Werte ihrer Instanzeigenschaften können mit der [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Schnittstelle abgerufen werden.

`@font-feature-values` ermöglicht es Entwicklern, für eine bestimmte Schriftart, einen menschenlesbaren Namen mit einem numerischen Index zu verknüpfen, der eine bestimmte [OpenType-Schriftfunktion](/de/docs/Web/CSS/Guides/Fonts/OpenType_fonts) steuert.
Für Funktionen, die alternative Glyphen auswählen (stilistisch, Styleset, Zeichensorte, Schwellzug, Zierschrift oder Annotation), kann die {{cssxref("font-variant-alternates")}}-Eigenschaft dann den menschenlesbaren Namen referenzieren, um die zugehörige Funktion anzuwenden.
Dies ist praktisch, weil es ermöglicht, denselben Namen für eine Reihe alternativer Glyphen über mehrere Schriftarten hinweg zu verwenden.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFeatureValuesRule.annotation`](/de/docs/Web/API/CSSFontFeatureValuesRule/annotation)
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die eine alternative Annotation der Schrift anwenden.
- [`CSSFontFeatureValuesRule.characterVariant`](/de/docs/Web/API/CSSFontFeatureValuesRule/characterVariant)
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die stilistische Alternativen für Zeichen der Schrift anwenden.
- [`CSSFontFeatureValuesRule.fontFamily`](/de/docs/Web/API/CSSFontFeatureValuesRule/fontFamily)
  - : Ein String, der die Schriftfamilie identifiziert, auf die diese Regel angewendet wird.
- [`CSSFontFeatureValuesRule.ornaments`](/de/docs/Web/API/CSSFontFeatureValuesRule/ornaments)
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Ornamente der Schrift anwenden.
- [`CSSFontFeatureValuesRule.styleset`](/de/docs/Web/API/CSSFontFeatureValuesRule/styleset)
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Stylesets der Schrift anwenden.
- [`CSSFontFeatureValuesRule.stylistic`](/de/docs/Web/API/CSSFontFeatureValuesRule/stylistic)
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Glyphen der Schrift anwenden.
- [`CSSFontFeatureValuesRule.swash`](/de/docs/Web/API/CSSFontFeatureValuesRule/swash)
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Schwellzüge der Schrift anwenden.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Schriftart auslesen

In diesem Beispiel deklarieren wir zwei {{cssxref("@font-feature-values")}}, eine für die _Font One_ Schriftfamilie und die andere für _Font Two_.
In beiden Deklarationen definieren wir, dass der Name "nice-style" verwendet werden kann, um alternative Styleset-Glyphen für beide Schriften darzustellen, wobei der Index für diese Alternative in jeder Schriftfamilie spezifiziert wird.
Die alternativen Glyphen werden dann für jede `.nice-look`-Klasse angewendet, indem {{cssxref("font-variant-alternates")}} verwendet und der Name an die [`styleset()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset)-Funktion übergeben wird.

Wir verwenden dann das CSSOM, um diese Deklarationen als `CSSFontFeatureValuesRule`-Instanzen auszulesen und sie im Logbuch anzuzeigen.

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
