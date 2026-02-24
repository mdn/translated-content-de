---
title: CSSFontFeatureValuesRule
slug: Web/API/CSSFontFeatureValuesRule
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("CSSOM")}}

Die **`CSSFontFeatureValuesRule`** Schnittstelle repräsentiert eine {{cssxref("@font-feature-values")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules). Die Werte ihrer Instanzeigenschaften können über die [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap) Schnittstelle abgerufen werden.

`@font-feature-values` ermöglicht es Entwicklern, einem gegebenen Schriftschnitt einen lesbaren Namen mit einem numerischen Index zuzuordnen, der ein bestimmtes [OpenType-Schriftmerkmal](/de/docs/Web/CSS/Guides/Fonts/OpenType_fonts) steuert. Für Merkmale, die alternative Glyphen auswählen (stilistisch, Styleset, Zeichenvariante, Swash, Ornament oder Annotation), kann die Eigenschaft {{cssxref("font-variant-alternates")}} dann auf den lesbaren Namen verweisen, um das zugehörige Merkmal anzuwenden. Dies ist praktisch, da dadurch derselbe Name verwendet werden kann, um eine Sammlung alternativer Glyphen über mehrere Schriftarten hinweg zu repräsentieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorgänger [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFeatureValuesRule.annotation`](/de/docs/Web/API/CSSFontFeatureValuesRule/annotation) {{experimental_inline}}
  - : Eine vom Benutzer definierte Wertdefinition und ein Wert, der eine alternative Annotation der Schriftart anwendet.
- [`CSSFontFeatureValuesRule.characterVariant`](/de/docs/Web/API/CSSFontFeatureValuesRule/characterVariant) {{experimental_inline}}
  - : Eine vom Benutzer definierte Wertdefinition und ein Wert, der stilistische Alternativen für Zeichen der Schriftart anwendet.
- [`CSSFontFeatureValuesRule.fontFamily`](/de/docs/Web/API/CSSFontFeatureValuesRule/fontFamily)
  - : Ein String, der die Schriftfamilie identifiziert, auf die diese Regel angewendet wird.
- [`CSSFontFeatureValuesRule.ornaments`](/de/docs/Web/API/CSSFontFeatureValuesRule/ornaments) {{experimental_inline}}
  - : Eine vom Benutzer definierte Wertdefinition und ein Wert, der alternative Ornamente der Schriftart anwendet.
- [`CSSFontFeatureValuesRule.styleset`](/de/docs/Web/API/CSSFontFeatureValuesRule/styleset) {{experimental_inline}}
  - : Eine vom Benutzer definierte Wertdefinition und ein Wert, der alternative Stilsets der Schriftart anwendet.
- [`CSSFontFeatureValuesRule.stylistic`](/de/docs/Web/API/CSSFontFeatureValuesRule/stylistic) {{experimental_inline}}
  - : Eine vom Benutzer definierte Wertdefinition und ein Wert, der alternative Glyphen der Schriftart anwendet.
- [`CSSFontFeatureValuesRule.swash`](/de/docs/Web/API/CSSFontFeatureValuesRule/swash) {{experimental_inline}}
  - : Eine vom Benutzer definierte Wertdefinition und ein Wert, der alternative Swashes der Schriftart anwendet.

## Instanzmethoden

_Erbt Methoden von seinem Vorgänger [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

### Schriftfamilie lesen

In diesem Beispiel deklarieren wir zwei {{cssxref("@font-feature-values")}}, einen für die Schriftfamilie _Font One_ und einen für _Font Two_. In beiden Deklarationen definieren wir, dass der Name "nice-style" verwendet werden kann, um die Styleset-Alternate-Glyphen für beide Schriftarten darzustellen, wobei der Index für dieses Alternate in jeder Schriftfamilie angegeben wird. Die alternativen Glyphen werden dann für jede `.nice-look` Klasse angewendet, indem {{cssxref("font-variant-alternates")}} verwendet und der Name an die [`styleset()`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset) Funktion übergeben wird.

Wir verwenden dann das CSSOM, um diese Deklarationen als `CSSFontFeatureValuesRule` Instanzen zu lesen und sie in das Log auszugeben.

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
