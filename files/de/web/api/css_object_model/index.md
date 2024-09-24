---
title: CSS-Objektmodell (CSSOM)
slug: Web/API/CSS_Object_Model
l10n:
  sourceCommit: ed3538854887ae7ee6faebc94800295a74b325f5
---

{{DefaultAPISidebar("CSSOM")}}

Das **CSS-Objektmodell** ist eine Reihe von APIs, die es ermöglichen, CSS mit JavaScript zu manipulieren. Es ähnelt dem DOM, jedoch für CSS statt HTML. Es erlaubt Benutzern, CSS-Stile dynamisch zu lesen und zu ändern.

Die Werte von CSS werden untypisiert dargestellt, das heißt, sie nutzen {{JSxRef("String")}}-Objekte.

## Referenz

- {{DOMxRef("AnimationEvent")}}
- {{DOMxRef("CaretPosition")}}
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSSConditionRule")}}
- {{DOMxRef("CSSCounterStyleRule")}}
- {{DOMxRef("CSSFontFaceRule")}}
- {{DOMxRef("CSSFontFeatureValuesMap")}}
- {{DOMxRef("CSSFontFeatureValuesRule")}}
- {{DOMxRef("CSSGroupingRule")}}
- {{DOMxRef("CSSImportRule")}}
- {{DOMxRef("CSSKeyframeRule")}}
- {{DOMxRef("CSSKeyframesRule")}}
- {{DOMxRef("CSSMarginRule")}}
- {{DOMxRef("CSSMediaRule")}}
- {{DOMxRef("CSSNamespaceRule")}}
- {{DOMxRef("CSSPageRule")}}
- {{DOMxRef("CSSPositionTryRule")}}
- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSStartingStyleRule")}}
- {{DOMxRef("CSSStyleDeclaration")}}
- {{DOMxRef("CSSStyleSheet")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSSupportsRule")}}
- {{DOMxRef("FontFace")}}
- {{DOMxRef("FontFaceSet")}}
- {{DOMxRef("FontFaceSetLoadEvent")}}
- {{DOMxRef("MediaList")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("StyleSheet")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("TransitionEvent")}}

Mehrere andere Schnittstellen werden ebenfalls durch die CSSOM-bezogenen Spezifikationen erweitert: {{DOMxRef("Document")}}, {{DOMxRef("Window")}}, {{DOMxRef("Element")}}, {{DOMxRef("HTMLElement")}}, {{DOMxRef("HTMLImageElement")}}, {{DOMxRef("Range")}}, {{DOMxRef("MouseEvent")}} und {{DOMxRef("SVGElement")}}.

### CSS-Typisiertes-Objekt-Modell

- {{DOMxRef("CSSImageValue")}}
- {{DOMxRef("CSSKeywordValue")}}
- {{DOMxRef("CSSMathInvert")}}
- {{DOMxRef("CSSMathMax")}}
- {{DOMxRef("CSSMathMin")}}
- {{DOMxRef("CSSMathNegate")}}
- {{DOMxRef("CSSMathProduct")}}
- {{DOMxRef("CSSMathSum")}}
- {{DOMxRef("CSSMathValue")}}
- {{DOMxRef("CSSMatrixComponent")}}
- {{DOMxRef("CSSNumericArray")}}
- {{DOMxRef("CSSNumericValue")}}
- {{DOMxRef("CSSPerspective")}}
- {{DOMxRef("CSSPositionValue")}}
- {{DOMxRef("CSSRotate")}}
- {{DOMxRef("CSSScale")}}
- {{DOMxRef("CSSSkew")}}
- {{DOMxRef("CSSSkewX")}}
- {{DOMxRef("CSSSkewY")}}
- {{DOMxRef("CSSStyleValue")}}
- {{DOMxRef("CSSTransformComponent")}}
- {{DOMxRef("CSSTransformValue")}}
- {{DOMxRef("CSSTranslate")}}
- {{DOMxRef("CSSUnitValue")}}
- {{DOMxRef("CSSUnparsedValue")}}
- {{DOMxRef("CSSVariableReferenceValue")}}
- {{DOMxRef("StylePropertyMap")}}
- {{DOMxRef("StylePropertyMapReadOnly")}}

### Veraltete CSSOM-Schnittstellen {{deprecated_inline}}

{{deprecated_header}}

- {{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValueList")}} {{deprecated_inline}}

## Tutorials

- [Bestimmen der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [Verwalten der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Alle diese Funktionen wurden im Laufe der Jahre nach und nach in die verschiedenen Browser integriert: es war ein ziemlich komplexer Prozess, der sich nicht in einer einfachen Tabelle zusammenfassen lässt. Bitte beziehen Sie sich auf die spezifischen Schnittstellen für deren Verfügbarkeit.

## Siehe auch

- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
