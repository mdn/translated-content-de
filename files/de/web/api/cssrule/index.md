---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: 5e3cb7c4405256c4ad004986bbff622777b664b6
---

{{APIRef("CSSOM")}}

Das **`CSSRule`**-Interface repräsentiert eine einzelne CSS-Regel. Es gibt mehrere Regeltypen, die Eigenschaften von `CSSRule` erben.

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
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)

## Instanz-Eigenschaften

Das `CSSRule`-Interface spezifiziert die Eigenschaften, die allen Regeln gemeinsam sind, während die Eigenschaften, die spezifisch für bestimmte Regeltypen sind, in den spezialisierteren Interfaces für die jeweiligen Regeltypen spezifiziert werden.

- [`CSSRule.cssText`](/de/docs/Web/API/CSSRule/cssText)
  - : Repräsentiert die textuelle Darstellung der Regel, z.B. `"h1,h2 { font-size: 16pt }"` oder `"@import 'url'"`. Um auf Teile der Regel zuzugreifen oder diese zu ändern (z.B. den Wert von "font-size" im Beispiel), verwenden Sie die Eigenschaften des spezialisierten Interface für den Regeltyp (siehe oben).
- [`CSSRule.parentRule`](/de/docs/Web/API/CSSRule/parentRule) {{ReadOnlyInline}}
  - : Gibt die enthaltende Regel zurück, ansonsten `null`. Befindet sich diese Regel z.B. in einem {{cssxref("@media")}}-Block, wäre die übergeordnete Regel die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule).
- [`CSSRule.parentStyleSheet`](/de/docs/Web/API/CSSRule/parentStyleSheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt für das Stylesheet zurück, das diese Regel enthält.
- [`CSSRule.type`](/de/docs/Web/API/CSSRule/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine der Typkonstanten zurück, um festzustellen, welcher Regeltyp dargestellt wird.

## Beispiele

Referenzen auf eine `CSSRule` können durch das Durchsehen der `cssRules`-Liste eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) erhalten werden.

```js
let myRules = document.styleSheets[0].cssRules; // Returns a CSSRuleList
console.log(myRules);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
