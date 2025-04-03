---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}

Das **`CSSRule`** Interface repräsentiert eine einzelne CSS-Regel. Es gibt verschiedene Regeltypen, die Eigenschaften von `CSSRule` erben.

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

Das `CSSRule` Interface spezifiziert die Eigenschaften, die allen Regeln gemeinsam sind, während Eigenschaften, die für spezifische Regeltypen einzigartig sind, in den spezialisierteren Interfaces für diese Regeltypen spezifiziert werden.

- [`CSSRule.cssText`](/de/docs/Web/API/CSSRule/cssText)
  - : Repräsentiert die textuelle Darstellung der Regel, z.B. `"h1,h2 { font-size: 16pt }"` oder `"@import 'url'"`. Um Teile der Regel zuzugreifen oder zu modifizieren (z.B. den Wert von "font-size" im Beispiel), verwenden Sie die Eigenschaften auf dem spezialisierten Interface für den Regeltyp (siehe oben).
- [`CSSRule.parentRule`](/de/docs/Web/API/CSSRule/parentRule) {{ReadOnlyInline}}
  - : Gibt die enthaltende Regel zurück, andernfalls `null`. Zum Beispiel, wenn diese Regel eine Stilregel innerhalb eines {{cssxref("@media")}}-Blocks ist, wäre die übergeordnete Regel jene [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule).
- [`CSSRule.parentStyleSheet`](/de/docs/Web/API/CSSRule/parentStyleSheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt für das Stylesheet zurück, das diese Regel enthält.
- [`CSSRule.type`](/de/docs/Web/API/CSSRule/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine der Typkonstanten zurück, um zu bestimmen, welcher Regeltyp repräsentiert wird.

## Beispiele

Referenzen auf eine `CSSRule` können durch das Überprüfen der `cssRules`-Liste eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) erhalten werden.

```js
let myRules = document.styleSheets[0].cssRules; // Returns a CSSRuleList
console.log(myRules);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
