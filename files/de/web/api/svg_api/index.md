---
title: SVG-API
slug: Web/API/SVG_API
l10n:
  sourceCommit: 70afaa0e2d4ea200f229304b5e6d9368ff59e8bc
---

{{DefaultAPISidebar("SVG")}}

SVG bietet Elemente für Kreise, Rechtecke sowie einfache und komplexe Kurven. Die Attributwerte der Elemente geben an, wie diese gezeichnet werden müssen. Die **SVG-API** ist der Teil des **DOM**, der diese SVG-Elemente und ihre Attributwerte mit Skripten oder Programmiersprachen verbindet, indem er sie im Speicher darstellt. Die SVG-API stellt somit Methoden bereit, die einen programmierten Zugriff auf die SVG-Elemente und deren Attributwerte ermöglichen.

Die SVG-API ist eine Sammlung von Schnittstellen, die in folgende Hauptkategorien unterteilt sind:

1. [Die Element-Schnittstellen](#svg-element-schnittstellen) ermöglichen den Zugriff auf die Eigenschaften von SVG-Elementen und bieten Methoden, um diese zu bearbeiten.
2. [Die statischen Datentypen-Schnittstellen](#svg-datentypen-schnittstellen) bieten Zugriff auf Elementattributwerte und Methoden, um diese zu bearbeiten.
3. Für Attribute, die animiert werden können, bieten die [animierten Datentypen-Schnittstellen](#svg-datentypen-schnittstellen) einen nur lesbaren Zugriff auf den aktuell animierten Wert eines Attributs.
4. [Die SMIL-Schnittstellen](#smil-bezogene_schnittstellen)
5. [Weitere SVG-Schnittstellen](#weitere_svg-schnittstellen)

## Schnittstellen

### SVG-Element-Schnittstellen

- {{DOMxRef("SVGAElement")}}
- {{DOMxRef("SVGAnimationElement")}}
- {{DOMxRef("SVGAnimateElement")}}
- {{DOMxRef("SVGAnimateMotionElement")}}
- {{DOMxRef("SVGAnimateTransformElement")}}
- {{DOMxRef("SVGCircleElement")}}
- {{DOMxRef("SVGClipPathElement")}}
- {{DOMxRef("SVGComponentTransferFunctionElement")}}
- {{DOMxRef("SVGCursorElement")}}
- {{DOMxRef("SVGDefsElement")}}
- {{DOMxRef("SVGDescElement")}}
- {{DOMxRef("SVGElement")}}
- {{DOMxRef("SVGEllipseElement")}}
- {{DOMxRef("SVGFEBlendElement")}}
- {{DOMxRef("SVGFEColorMatrixElement")}}
- {{DOMxRef("SVGFEComponentTransferElement")}}
- {{DOMxRef("SVGFECompositeElement")}}
- {{DOMxRef("SVGFEConvolveMatrixElement")}}
- {{DOMxRef("SVGFEDiffuseLightingElement")}}
- {{DOMxRef("SVGFEDisplacementMapElement")}}
- {{DOMxRef("SVGFEDistantLightElement")}}
- {{DOMxRef("SVGFEDropShadowElement")}}
- {{DOMxRef("SVGFEFloodElement")}}
- {{DOMxRef("SVGFEFuncAElement")}}
- {{DOMxRef("SVGFEFuncBElement")}}
- {{DOMxRef("SVGFEFuncGElement")}}
- {{DOMxRef("SVGFEFuncRElement")}}
- {{DOMxRef("SVGFEGaussianBlurElement")}}
- {{DOMxRef("SVGFEImageElement")}}
- {{DOMxRef("SVGFEMergeElement")}}
- {{DOMxRef("SVGFEMergeNodeElement")}}
- {{DOMxRef("SVGFEMorphologyElement")}}
- {{DOMxRef("SVGFEOffsetElement")}}
- {{DOMxRef("SVGFEPointLightElement")}}
- {{DOMxRef("SVGFESpecularLightingElement")}}
- {{DOMxRef("SVGFESpotLightElement")}}
- {{DOMxRef("SVGFETileElement")}}
- {{DOMxRef("SVGFETurbulenceElement")}}
- {{DOMxRef("SVGFilterElement")}}
- {{DOMxRef("SVGForeignObjectElement")}}
- {{DOMxRef("SVGGElement")}}
- {{DOMxRef("SVGGeometryElement")}}
- {{DOMxRef("SVGGradientElement")}}
- {{DOMxRef("SVGGraphicsElement")}}
- {{DOMxRef("SVGImageElement")}}
- {{DOMxRef("SVGLinearGradientElement")}}
- {{DOMxRef("SVGLineElement")}}
- {{DOMxRef("SVGMarkerElement")}} {{Experimental_Inline}}
- {{DOMxRef("SVGMaskElement")}}
- {{DOMxRef("SVGMetadataElement")}}
- {{DOMxRef("SVGMPathElement")}}
- {{DOMxRef("SVGPathElement")}}
- {{DOMxRef("SVGPatternElement")}}
- {{DOMxRef("SVGPolylineElement")}}
- {{DOMxRef("SVGPolygonElement")}}
- {{DOMxRef("SVGRadialGradientElement")}}
- {{DOMxRef("SVGRectElement")}}
- {{DOMxRef("SVGScriptElement")}}
- {{DOMxRef("SVGSetElement")}}
- {{DOMxRef("SVGStopElement")}}
- {{DOMxRef("SVGStyleElement")}}
- {{DOMxRef("SVGSVGElement")}}
- {{DOMxRef("SVGSwitchElement")}}
- {{DOMxRef("SVGSymbolElement")}}
- {{DOMxRef("SVGTextContentElement")}}
- {{DOMxRef("SVGTextElement")}}
- {{DOMxRef("SVGTextPathElement")}}
- {{DOMxRef("SVGTextPositioningElement")}}
- {{DOMxRef("SVGTitleElement")}}
- {{DOMxRef("SVGTSpanElement")}}
- {{DOMxRef("SVGUseElement")}}
- {{DOMxRef("SVGViewElement")}}

### SVG-Datentypen-Schnittstellen

Hier sind die DOM-APIs für Datentypen, die in den Definitionen von SVG-Eigenschaften und -Attributen verwendet werden.

#### Statischer Typ

- {{DOMxRef("SVGAngle")}}
- {{DOMxRef("SVGLength")}}
- {{DOMxRef("SVGLengthList")}}
- {{DOMxRef("SVGNumber")}}
- {{DOMxRef("SVGNumberList")}}
- {{DOMxRef("SVGPreserveAspectRatio")}}
- {{DOMxRef("SVGStringList")}}
- {{DOMxRef("SVGTransform")}}
- {{DOMxRef("SVGTransformList")}}

#### Animierter Typ

- {{DOMxRef("SVGAnimatedAngle")}}
- {{DOMxRef("SVGAnimatedBoolean")}}
- {{DOMxRef("SVGAnimatedEnumeration")}}
- {{DOMxRef("SVGAnimatedInteger")}}
- {{DOMxRef("SVGAnimatedLength")}}
- {{DOMxRef("SVGAnimatedLengthList")}}
- {{DOMxRef("SVGAnimatedNumber")}}
- {{DOMxRef("SVGAnimatedNumberList")}}
- {{DOMxRef("SVGAnimatedPreserveAspectRatio")}}
- {{DOMxRef("SVGAnimatedRect")}}
- {{DOMxRef("SVGAnimatedString")}}
- {{DOMxRef("SVGAnimatedTransformList")}}

### SMIL-bezogene Schnittstellen

- {{DOMxRef("ElementTimeControl")}}
- {{DOMxRef("TimeEvent")}}

### Weitere SVG-Schnittstellen

- {{DOMxRef("ShadowAnimation")}}
- {{DOMxRef("SVGUnitTypes")}}
- {{DOMxRef("SVGUseElementShadowRoot")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Erste Schritte mit SVG](/de/docs/Web/SVG)
