---
title: "CSSFontFeatureValuesRule: annotation-Eigenschaft"
short-title: annotation
slug: Web/API/CSSFontFeatureValuesRule/annotation
l10n:
  sourceCommit: c5a0ee66baf779b702ffae6d964d1f365381767c
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **annotation**-Eigenschaft des [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Interfaces enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das den [benutzerdefinierten Bezeichner](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [Feature-Index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "annotation()", "#annotation")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `annotation`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie der `annotation`-Eigenschaft trotzdem direkt zuweisen. Sie können auch die Werte der `annotation` mittels der [`CSSFontFeatureValuesMap`-Instanzmethoden](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

## Beispiele

### Grundlegende Verwendung

#### CSS

```css
@font-feature-values "MonteCarlo" {
  @annotation {
    my-annotations: 1;
  }
}
```

#### JavaScript

```js
// look for the first stylesheet and the first cssRule in that sheet
const myRule = document.styleSheets[0].cssRules[0];
// check
if (myRule instanceof CSSFontFeatureValuesRule && myRule.annotation.size) {
  // do something with the annotation
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxRef("@font-feature-values", "@annotation", "#annotation")}}
- {{cssxRef("font-variant-alternates", "annotation()", "#annotation")}} funktionale Notation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
