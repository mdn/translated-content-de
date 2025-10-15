---
title: CSS Object Model (CSSOM)
slug: Web/API/CSS_Object_Model
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

{{DefaultAPISidebar("CSSOM")}}

Das **CSS-Objektmodell** ist eine Reihe von APIs, die die Manipulation von CSS über JavaScript ermöglichen. Es ist dem DOM sehr ähnlich, jedoch für CSS statt für HTML. Es ermöglicht den Benutzern, CSS-Stile dynamisch zu lesen und zu ändern.

Die Werte von CSS werden untypisiert dargestellt, das heißt, sie verwenden {{JSxRef("String")}}-Objekte.

## Referenz

- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
- [`CSS`](/de/docs/Web/API/CSS)
- [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule)
- [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)
- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
- [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)
- [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)
- [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)
- [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)
- [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)
- [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)
- [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)
- [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)
- [`CSSMarginRule`](/de/docs/Web/API/CSSMarginRule)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule)
- [`CSSPageRule`](/de/docs/Web/API/CSSPageRule)
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- [`CSSRule`](/de/docs/Web/API/CSSRule)
- [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)
- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)
- [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)
- [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule)
- [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)
- [`FontFace`](/de/docs/Web/API/FontFace)
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
- [`MediaList`](/de/docs/Web/API/MediaList)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- [`Screen`](/de/docs/Web/API/Screen)
- [`StyleSheet`](/de/docs/Web/API/StyleSheet)
- [`StyleSheetList`](/de/docs/Web/API/StyleSheetList)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)

Mehrere andere Schnittstellen werden auch durch die CSSOM-bezogenen Spezifikationen erweitert: [`Document`](/de/docs/Web/API/Document), [`Window`](/de/docs/Web/API/Window), [`Element`](/de/docs/Web/API/Element), [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`Range`](/de/docs/Web/API/Range), [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`SVGElement`](/de/docs/Web/API/SVGElement).

### CSS Typed Object Model

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
- [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent)
- [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSRotate`](/de/docs/Web/API/CSSRotate)
- [`CSSScale`](/de/docs/Web/API/CSSScale)
- [`CSSSkew`](/de/docs/Web/API/CSSSkew)
- [`CSSSkewX`](/de/docs/Web/API/CSSSkewX)
- [`CSSSkewY`](/de/docs/Web/API/CSSSkewY)
- [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)
- [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
- [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue)
- [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)
- [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)

### Veraltete CSSOM-Schnittstellen {{deprecated_inline}}

{{deprecated_header}}

- [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) {{deprecated_inline}}
- [`CSSValue`](/de/docs/Web/API/CSSValue) {{deprecated_inline}}
- [`CSSValueList`](/de/docs/Web/API/CSSValueList) {{deprecated_inline}}

## Tutorials

- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [Verwalten der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

All diese Funktionen wurden im Laufe der Jahre nach und nach zu den verschiedenen Browsern hinzugefügt: Es war ein ziemlich komplexer Prozess, der nicht in einer einfachen Tabelle zusammengefasst werden kann. Bitte beziehen Sie sich auf die spezifischen Schnittstellen für ihre Verfügbarkeit.

## Siehe auch

- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
