---
title: "CSSFontFeatureValuesRule: annotation-Eigenschaft"
short-title: annotation
slug: Web/API/CSSFontFeatureValuesRule/annotation
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **annotation**-Eigenschaft des [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)-Interfaces enthält ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt, das das [user-defined-ident](/de/docs/Web/CSS/Reference/Values/custom-ident) und den [feature index](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#optional_value) für eine variable Schriftart darstellt, die {{CSSXRef("font-variant-alternates", "annotation()", "#annotation")}} unterstützt.

## Wert

Ein [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)-Objekt.

Obwohl die `annotation`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSFontFeatureValuesMap`-Objekt nicht ersetzen können, können Sie der `annotation`-Eigenschaft direkt Werte zuweisen. Außerdem können Sie die Werte der `annotation` mithilfe der [`CSSFontFeatureValuesMap`-Instanzmethoden](/de/docs/Web/API/CSSFontFeatureValuesMap#instance_methods) ändern.

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

- {{cssxRef("@font-feature-values","@annotation","#annotation")}}
- {{cssxRef("font-variant-alternates","annotation()","#annotation")}} Funktionsnotation
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
