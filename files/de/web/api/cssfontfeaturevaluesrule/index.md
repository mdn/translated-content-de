---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("CSSOM")}}

Die **`CSSFontFeatureValuesRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-feature-values")}}-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules). Auf die Werte ihrer Instanzeigenschaften kann über die [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Schnittstelle zugegriffen werden.

Mit `@font-feature-values` können Entwickler für eine bestimmte Schriftart einen für Menschen lesbaren Namen mit einem numerischen Index verknüpfen, der eine bestimmte [OpenType-Schriftfunktion](/de/docs/Web/CSS/Guides/Fonts/OpenType_fonts) steuert.
Bei Funktionen, die alternative Glyphen auswählen (stylistic, styleset, character-variant, swash, ornament oder annotation), kann die Eigenschaft {{cssxref("font-variant-alternates")}} anschließend auf diesen Namen verweisen, um die zugehörige Funktion anzuwenden.
Das ist praktisch, weil sich mit demselben Namen alternative Glyphen verschiedener Schriftarten ansprechen lassen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFeatureValuesRule.annotation`](/de/docs/Web/API/CSSFontFeatureValuesRule/annotation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die eine alternative Annotation der Schriftart anwenden.
- [`CSSFontFeatureValuesRule.characterVariant`](/de/docs/Web/API/CSSFontFeatureValuesRule/characterVariant) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die stilistische Alternativen für Zeichen der Schriftart anwenden.
- [`CSSFontFeatureValuesRule.fontFamily`](/de/docs/Web/API/CSSFontFeatureValuesRule/fontFamily)
  - : Eine Zeichenfolge, die die Schriftfamilie angibt, für die diese Regel gilt.
- [`CSSFontFeatureValuesRule.ornaments`](/de/docs/Web/API/CSSFontFeatureValuesRule/ornaments) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Ornamente der Schriftart anwenden.
- [`CSSFontFeatureValuesRule.styleset`](/de/docs/Web/API/CSSFontFeatureValuesRule/styleset) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Stilsätze der Schriftart anwenden.
- [`CSSFontFeatureValuesRule.stylistic`](/de/docs/Web/API/CSSFontFeatureValuesRule/stylistic) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Glyphen der Schriftart anwenden.
- [`CSSFontFeatureValuesRule.swash`](/de/docs/Web/API/CSSFontFeatureValuesRule/swash) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine benutzerdefinierte Wertdefinition und ein Wert, die alternative Schwungformen der Schriftart anwenden.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Schriftfamilie auslesen

In diesem Beispiel deklarieren wir zwei {{cssxref("@font-feature-values")}}-Regeln: eine für die Schriftfamilie _Font One_ und eine für _Font Two_.
In beiden Deklarationen legen wir fest, dass der Name „nice-style“ die alternativen Glyphen eines Stilsatzes für beide Schriftarten repräsentiert. Dazu geben wir jeweils den Index dieser Alternative in der betreffenden Schriftfamilie an.
Die alternativen Glyphen werden dann mithilfe von {{cssxref("font-variant-alternates")}} auf alle Elemente mit der Klasse `.nice-look` angewendet, indem der Name an die Funktion [`styleset()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset) übergeben wird.

Anschließend lesen wir diese Deklarationen über das CSSOM als `CSSFontFeatureValuesRule`-Instanzen aus und geben sie im Log aus.

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
