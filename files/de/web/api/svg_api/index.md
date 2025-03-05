---
title: SVG API
slug: Web/API/SVG_API
l10n:
  sourceCommit: d155937fdb8c8a0f638c5cb6fc71b5f0ce9db57f
---

{{DefaultAPISidebar("SVG")}}

SVG bietet Elemente für Kreise, Rechtecke sowie einfache und komplexe Kurven. Die Attributwerte der Elemente geben an, wie diese gezeichnet werden müssen. Die **SVG API** ist das Teilset des **DOM**, das diese SVG-Elemente und ihre Attributwerte mit Skripten oder Programmiersprachen verbindet, indem es sie im Speicher darstellt. Die SVG API stellt somit Methoden bereit, die einen programmgesteuerten Zugriff auf die SVG-Elemente und deren Attributwerte ermöglichen.

Die SVG API ist eine Reihe von Schnittstellen, die in die folgenden breiten Kategorien unterteilt sind:

1. [Die Element-Schnittstellen](#svg-element-schnittstellen) bieten Zugriff auf die Eigenschaften von SVG-Elementen und Methoden zu deren Manipulation.
2. Die [statischen Datentyp](#svg-datentyp-schnittstellen)-Schnittstellen bieten Zugriff auf Elementattributwerte und Methoden zu deren Manipulation.
3. Für Attribute, die animiert werden können, bieten die [animierten Datentyp-Schnittstellen](#svg-datentyp-schnittstellen) schreibgeschützten Zugriff auf den aktuellen animierten Wert eines Attributs.
4. [Die Schnittstellen für Synchronized Multimedia Integration Language (SMIL)](#smil-bezogene_schnittstellen)
5. [Andere](#andere_svg-schnittstellen)

## Schnittstellen

### SVG-Element-Schnittstellen

- [`SVGAElement`](/de/docs/Web/API/SVGAElement)
- [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)
- [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement)
- [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement)
- [`SVGAnimateTransformElement`](/de/docs/Web/API/SVGAnimateTransformElement)
- [`SVGCircleElement`](/de/docs/Web/API/SVGCircleElement)
- [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement)
- [`SVGComponentTransferFunctionElement`](/de/docs/Web/API/SVGComponentTransferFunctionElement)
- [`SVGCursorElement`](/de/docs/Web/API/SVGCursorElement)
- [`SVGDefsElement`](/de/docs/Web/API/SVGDefsElement)
- [`SVGDescElement`](/de/docs/Web/API/SVGDescElement)
- [`SVGDiscardElement`](/de/docs/Web/API/SVGDiscardElement)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
- [`SVGEllipseElement`](/de/docs/Web/API/SVGEllipseElement)
- [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)
- [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)
- [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)
- [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)
- [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)
- [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)
- [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)
- [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)
- [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)
- [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)
- [`SVGFEFuncAElement`](/de/docs/Web/API/SVGFEFuncAElement)
- [`SVGFEFuncBElement`](/de/docs/Web/API/SVGFEFuncBElement)
- [`SVGFEFuncGElement`](/de/docs/Web/API/SVGFEFuncGElement)
- [`SVGFEFuncRElement`](/de/docs/Web/API/SVGFEFuncRElement)
- [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)
- [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)
- [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement)
- [`SVGFEMergeNodeElement`](/de/docs/Web/API/SVGFEMergeNodeElement)
- [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)
- [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)
- [`SVGFEPointLightElement`](/de/docs/Web/API/SVGFEPointLightElement)
- [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)
- [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)
- [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)
- [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)
- [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)
- [`SVGForeignObjectElement`](/de/docs/Web/API/SVGForeignObjectElement)
- [`SVGGElement`](/de/docs/Web/API/SVGGElement)
- [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)
- [`SVGGradientElement`](/de/docs/Web/API/SVGGradientElement)
- [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)
- [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)
- [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement)
- [`SVGLineElement`](/de/docs/Web/API/SVGLineElement)
- [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement) {{Experimental_Inline}}
- [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement)
- [`SVGMetadataElement`](/de/docs/Web/API/SVGMetadataElement)
- [`SVGMPathElement`](/de/docs/Web/API/SVGMPathElement)
- [`SVGPathElement`](/de/docs/Web/API/SVGPathElement)
- [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)
- [`SVGPolylineElement`](/de/docs/Web/API/SVGPolylineElement)
- [`SVGPolygonElement`](/de/docs/Web/API/SVGPolygonElement)
- [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)
- [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)
- [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)
- [`SVGSetElement`](/de/docs/Web/API/SVGSetElement)
- [`SVGStopElement`](/de/docs/Web/API/SVGStopElement)
- [`SVGStyleElement`](/de/docs/Web/API/SVGStyleElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)
- [`SVGSwitchElement`](/de/docs/Web/API/SVGSwitchElement)
- [`SVGSymbolElement`](/de/docs/Web/API/SVGSymbolElement)
- [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)
- [`SVGTextElement`](/de/docs/Web/API/SVGTextElement)
- [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)
- [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)
- [`SVGTitleElement`](/de/docs/Web/API/SVGTitleElement)
- [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement)
- [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)
- [`SVGViewElement`](/de/docs/Web/API/SVGViewElement)

### SVG-Datentyp-Schnittstellen

Hier sind die DOM-APIs für Datentypen, die in den Definitionen von SVG-Eigenschaften und -Attributen verwendet werden.

#### Statischer Typ

- [`SVGAngle`](/de/docs/Web/API/SVGAngle)
- [`SVGLength`](/de/docs/Web/API/SVGLength)
- [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
- [`SVGNumber`](/de/docs/Web/API/SVGNumber)
- [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)
- [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)
- [`SVGStringList`](/de/docs/Web/API/SVGStringList)
- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
- [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)

#### Animierter Typ

- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
- [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean)
- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
- [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
- [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)
- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
- [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)
- [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)
- [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)
- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
- [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList)

### SMIL-bezogene Schnittstellen

- [`ElementTimeControl`](/de/docs/Web/API/ElementTimeControl)
- [`TimeEvent`](/de/docs/Web/API/TimeEvent)

### Andere SVG-Schnittstellen

- [`ShadowAnimation`](/de/docs/Web/API/ShadowAnimation)
- [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)
- [`SVGUseElementShadowRoot`](/de/docs/Web/API/SVGUseElementShadowRoot)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Einstieg in SVG](/de/docs/Web/SVG)
