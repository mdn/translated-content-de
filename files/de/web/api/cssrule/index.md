---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("CSSOM")}}

Die **`CSSRule`**-Schnittstelle repräsentiert eine einzelne CSS-Regel. Es gibt mehrere Regeltypen, die Eigenschaften von `CSSRule` erben.

- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSFontPaletteValuesRule")}}
- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSPropertyRule")}}

## Instanz-Eigenschaften

Die `CSSRule`-Schnittstelle spezifiziert die Eigenschaften, die allen Regeln gemeinsam sind, während Eigenschaften, die für spezifische Regeltypen einzigartig sind, in den spezialisierteren Schnittstellen für die jeweiligen Regeltypen angegeben werden.

- {{domxref("CSSRule.cssText")}}
  - : Repräsentiert die textuelle Darstellung der Regel, z.B. "`h1,h2 { font-size: 16pt }`" oder "`@import 'url'`". Um auf Teile der Regel zuzugreifen oder diese zu ändern (z.B. den Wert von "font-size" im Beispiel), verwenden Sie die Eigenschaften der spezialisierten Schnittstelle für den Regeltyp (siehe oben).
- {{domxref("CSSRule.parentRule")}} {{ReadOnlyInline}}
  - : Gibt die übergeordnete Regel zurück, ansonsten `null`. Z.B. wenn diese Regel eine Stilregel innerhalb eines {{cssxref("@media")}}-Blocks ist, wäre die übergeordnete Regel diese {{domxref("CSSMediaRule")}}.
- {{domxref("CSSRule.parentStyleSheet")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("CSSStyleSheet")}}-Objekt für das Stylesheet zurück, das diese Regel enthält.
- {{domxref("CSSRule.type")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine der Typkonstanten zurück, um zu bestimmen, welcher Regeltyp dargestellt wird.

## Beispiele

Verweise auf eine `CSSRule` können durch das Betrachten der `cssRules`-Liste eines {{domxref("CSSStyleSheet")}} erhalten werden.

```js
let myRules = document.styleSheets[0].cssRules; // Gibt eine CSSRuleList zurück
console.log(myRules);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
