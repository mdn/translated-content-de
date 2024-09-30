---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("CSSOM")}}

Die **`CSSRule`**-Schnittstelle repräsentiert eine einzelne CSS-Regel. Es gibt mehrere Regeltypen, die Eigenschaften von `CSSRule` erben.

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

## Instanzeigenschaften

Die `CSSRule`-Schnittstelle spezifiziert die allgemeinen Eigenschaften aller Regeln, während die Eigenschaften, die für spezifische Regeltypen einzigartig sind, in den spezialisierteren Schnittstellen für diese Regeltypen spezifiziert werden.

- [`CSSRule.cssText`](/de/docs/Web/API/CSSRule/cssText)
  - : Repräsentiert die textuelle Darstellung der Regel, z. B. `"h1,h2 { font-size: 16pt }"` oder `"@import 'url'"`. Um Teile der Regel (z. B. den Wert von "font-size" im Beispiel) zuzugreifen oder zu modifizieren, verwenden Sie die Eigenschaften der spezialisierten Schnittstelle für den Regeltyp (siehe oben).
- [`CSSRule.parentRule`](/de/docs/Web/API/CSSRule/parentRule) {{ReadOnlyInline}}
  - : Gibt die umgebende Regel zurück, andernfalls `null`. Z. B. wenn diese Regel eine Stilregel innerhalb eines {{cssxref("@media")}}-Blocks ist, wäre die übergeordnete Regel jene [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule).
- [`CSSRule.parentStyleSheet`](/de/docs/Web/API/CSSRule/parentStyleSheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt für das Stylesheet zurück, das diese Regel enthält.
- [`CSSRule.type`](/de/docs/Web/API/CSSRule/type) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine der Typkonstanten zurück, um festzustellen, welcher Regeltyp dargestellt wird.

## Beispiele

Verweise auf eine `CSSRule` können erhalten werden, indem Sie die `cssRules`-Liste eines [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) betrachten.

```js
let myRules = document.styleSheets[0].cssRules; // Returns a CSSRuleList
console.log(myRules);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dynamische Styling-Informationen verwenden](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
