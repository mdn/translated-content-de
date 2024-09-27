---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("CSSOM")}}

Die **`CSSRule`**-Schnittstelle stellt eine einzelne CSS-Regel dar. Es gibt mehrere Arten von Regeln, die Eigenschaften von `CSSRule` erben.

- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
- [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)
- [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)
- [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule)
- [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)
- [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)
- [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)
- [`CSSLayerBlockRule`](/de/docs/Web/API/CSSLayerBlockRule)
- [`CSSLayerStatementRule`](/de/docs/Web/API/CSSLayerStatementRule)
- [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)

## Instanz-Eigenschaften

Die `CSSRule`-Schnittstelle legt die Eigenschaften fest, die allen Regeln gemeinsam sind, während Eigenschaften, die einzigartig für bestimmte Regeltypen sind, in den spezielleren Schnittstellen für diese Regeltypen festgelegt sind.

- [`CSSRule.cssText`](/de/docs/Web/API/CSSRule/cssText)
  - : Stellt die Textdarstellung der Regel dar, z. B. `"h1,h2 { font-size: 16pt }"` oder `"@import 'url'"`. Um Teile der Regel zuzugreifen oder zu ändern (z. B. den Wert von "font-size" im Beispiel), verwenden Sie die Eigenschaften der spezialisierten Schnittstelle für den Regeltyp (siehe oben).
- [`CSSRule.parentRule`](/de/docs/Web/API/CSSRule/parentRule) {{ReadOnlyInline}}
  - : Gibt die umschließende Regel zurück, andernfalls `null`. Z.B. wenn diese Regel eine Stilregel in einem {{cssxref("@media")}}-Block ist, wäre die übergeordnete Regel diese [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule).
- [`CSSRule.parentStyleSheet`](/de/docs/Web/API/CSSRule/parentStyleSheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt für das Stylesheet zurück, das diese Regel enthält.
- [`CSSRule.type`](/de/docs/Web/API/CSSRule/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine der Typ-Konstanten zurück, um zu bestimmen, welcher Regeltyp dargestellt wird.

## Beispiele

Referenzen auf eine `CSSRule` können durch das Betrachten der `cssRules`-Liste eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) erhalten werden.

```js
let myRules = document.styleSheets[0].cssRules; // Returns a CSSRuleList
console.log(myRules);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformations](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
