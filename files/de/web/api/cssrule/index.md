---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: c00944e9622f0796758877623ee33283c68494d7
---

{{APIRef("CSSOM")}}

Das **`CSSRule`** Interface repräsentiert eine einzelne CSS-Regel. Es gibt mehrere Regeltypen, die Eigenschaften von `CSSRule` erben.

- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
- [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
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
- [`CSSViewTransitionRule`](/de/docs/Web/API/CSSViewTransitionRule)

## Instanz-Eigenschaften

Das `CSSRule` Interface gibt die Eigenschaften an, die allen Regeln gemeinsam sind, während Eigenschaften, die einzigartig für bestimmte Regeltypen sind, in den spezialisierteren Interfaces für diese Regeln spezifiziert werden.

- [`CSSRule.cssText`](/de/docs/Web/API/CSSRule/cssText)
  - : Repräsentiert die textliche Darstellung der Regel, z.B. `"h1,h2 { font-size: 16pt }"` oder `"@import 'url'"`. Um auf Teile der Regel zuzugreifen oder sie zu ändern (z.B. den Wert von "font-size" im Beispiel), verwenden Sie die Eigenschaften der spezialisierten Schnittstelle für den Regeltyp (siehe oben).
- [`CSSRule.parentRule`](/de/docs/Web/API/CSSRule/parentRule) {{ReadOnlyInline}}
  - : Gibt die enthaltende Regel zurück, ansonsten `null`. Wenn diese Regel zum Beispiel eine Stilregel innerhalb eines {{cssxref("@media")}} Blocks ist, wäre die übergeordnetes Regel diese [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule).
- [`CSSRule.parentStyleSheet`](/de/docs/Web/API/CSSRule/parentStyleSheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekt für das Stylesheet zurück, das diese Regel enthält.
- [`CSSRule.type`](/de/docs/Web/API/CSSRule/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine der Typkonstanten zurück, um zu bestimmen, welcher Regeltyp dargestellt wird.

## Beispiele

Referenzen zu einer `CSSRule` können erhalten werden, indem Sie die `cssRules` Liste eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) betrachten.

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
