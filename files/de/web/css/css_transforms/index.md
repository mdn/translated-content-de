---
title: CSS-Transformationen
slug: Web/CSS/CSS_transforms
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-Transformationsmodul** definiert, wie Elemente, die mit CSS gestaltet sind, in einem zwei- oder dreidimensionalen Raum transformiert werden können.

## CSS-Transformationen in Aktion

Verwenden Sie die Schieberegler im folgenden Rahmen, um die Eigenschaften Übersetzung, Rotation, Skalierung und Schrägung der CSS-Transformation des Würfels im 3D-Raum zu modifizieren. Beobachten Sie, wie der Würfel durch den 3D-Raum interagiert, insbesondere mit dem Element, das mit `z:0px` beschriftet ist und sich an der 3D-Position `(0, 0, 0)` befindet.

{{EmbedGHLiveSample("css-examples/modules/transforms.html", '100%', 900)}}

Sie können auch den `perspective`-Schieberegler verwenden, um die [`perspective`](/de/docs/Web/CSS/perspective)-Eigenschaft des Containers des Würfels zu ändern, die den Abstand zwischen Ihnen und der `z=0`-Ebene bestimmt.

Die [`perspective-origin`](/de/docs/Web/CSS/perspective-origin)-Schieberegler bestimmen, wo Sie als Betrachter in den 3D-Raum schauen, um den _Fluchtpunkt_ der Ansicht festzulegen. Dieser Fluchtpunkt wird durch einen kleinen roten Punkt angezeigt. Sie können sich vorstellen, dass das Ändern dieser Schieberegler dem physischen Bewegen Ihres Kopfes nach oben, unten, links und rechts entspricht, um verschiedene Teile des Würfels zu sehen, ohne den Würfel selbst zu bewegen.

Das `backface-visibility`-Kästchen bestimmt, ob die Rückseiten des Würfels auf `sichtbar` oder `versteckt` gesetzt sind.

Der oben stehende Würfel besteht aus sechs `<div>`-Elementen, die alle mit CSS gestaltet sind, um die Flächen des Würfels zu bilden. Der Würfel wird nicht mit einem 2D- oder 3D-Canvas-Kontext gezeichnet, sodass **Sie die Flächen des Würfels mit den Entwicklertools Ihres Browsers inspizieren können, wie Sie es mit jedem anderen DOM-Element tun würden**. Verwenden Sie die Elementauswahl der Entwicklertools Ihres Browsers, um verschiedene Flächen des Würfels zu inspizieren, während Sie seine Position und Drehung transformieren.

> [!NOTE]
> Die Reihenfolge, in der Transformationsvorgänge, einschließlich 3D-Drehungen, angewendet werden, beeinflusst die resultierende Transformation. Im obigen Beispiel werden die Transformationen in der Reihenfolge Übersetzung, Skalierung, Drehung und dann Schrägung angewendet. Die Drehungen erfolgen in der Reihenfolge X → Y → Z.

Sie können [den Quellcode dieses Beispiels auf GitHub ansehen](https://github.com/mdn/css-examples/blob/main/modules/transforms.html).

## Referenz

### Eigenschaften

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("rotate")}}
- {{cssxref("scale")}}
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}
- {{cssxref("translate")}}

### Funktionen

- {{cssxref("transform-function/matrix", "matrix()")}}
- {{cssxref("transform-function/matrix3d", "matrix3d()")}}
- {{cssxref("transform-function/perspective", "perspective()")}}
- {{cssxref("transform-function/rotate", "rotate()")}}
- {{cssxref("transform-function/rotate3d", "rotate3d()")}}
- {{cssxref("transform-function/rotateX", "rotateX()")}}
- {{cssxref("transform-function/rotateY", "rotateY()")}}
- {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- {{cssxref("transform-function/scale", "scale()")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- {{cssxref("transform-function/scaleX", "scaleX()")}}
- {{cssxref("transform-function/scaleY", "scaleY()")}}
- {{cssxref("transform-function/scaleZ", "scaleZ()")}}
- {{cssxref("transform-function/skew", "skew()")}}
- {{cssxref("transform-function/skewX", "skewX()")}}
- {{cssxref("transform-function/skewY", "skewY()")}}
- {{cssxref("transform-function/translate", "translate()")}}
- {{cssxref("transform-function/translate3d", "translate()")}}
- {{cssxref("transform-function/translateX", "translateX()")}}
- {{cssxref("transform-function/translateY", "translateY()")}}
- {{cssxref("transform-function/translateZ", "translateZ()")}}

### Datentypen

- {{cssxref("&lt;transform-function&gt;")}}

## Anleitungen

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Eine schrittweise Anleitung zur Transformation von Elementen, die mit CSS gestaltet sind.
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : Beschreibt, wie Pixelpositionen im CSS-Objektmodell definiert werden.
- [Grundlagen der Leistung: Verwendung von CSS-Transformationen](/de/docs/Web/Performance/Fundamentals#use_css_transforms)
  - : Ein Überblick über die Grundlagen der Web-Performance, einschließlich, wie CSS-Transformationen die Leistung verbessern können.
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Beschreibt, wie Objekttransformationen durch mathematische Matrizen dargestellt werden können.

## Verwandte Konzepte

- CSS-Eigenschaften:
  - [`animation`](/de/docs/Web/CSS/animation)
  - [`background-position`](/de/docs/Web/CSS/background-position)
  - [`clip`](/de/docs/Web/CSS/clip)
  - [`clip-path`](/de/docs/Web/CSS/clip-path)
  - [`contain`](/de/docs/Web/CSS/contain)
  - [`content-visibility`](/de/docs/Web/CSS/content-visibility)
  - [`isolation`](/de/docs/Web/CSS/isolation)
  - [`mask`](/de/docs/Web/CSS/mask)
  - [`mask-border-source`](/de/docs/Web/CSS/mask-border-source)
  - [`mask-image`](/de/docs/Web/CSS/mask-image)
  - [`mix-blend-mode`](/de/docs/Web/CSS/mix-blend-mode)
  - [`opacity`](/de/docs/Web/CSS/opacity)
  - [`overflow`](/de/docs/Web/CSS/overflow)
  - [`transition`](/de/docs/Web/CSS/transition)
  - [`visibility`](/de/docs/Web/CSS/visibility)
- Datentypen:
  - [`<angle>`](/de/docs/Web/CSS/angle)
  - {{cssxref("length-percentage")}}
  - {{cssxref("length")}}
  - [`<number>`](/de/docs/Web/CSS/number)
  - {{cssxref("percentage")}}
  - [`<position>`](/de/docs/Web/CSS/position_value)
- Glossarbegriffe:
  - [Interpolation](/de/docs/Glossary/Interpolation)
  - [Ebenenstapel-Kontext](/de/docs/Glossary/Stacking_context)
- [SVG](/de/docs/Web/SVG)-Konzepte:
  - [`<animate>`](/de/docs/Web/SVG/Element/animate) Element
  - [`<animateTransform>`](/de/docs/Web/SVG/Element/animateTransform) Element
  - [`<set>`](/de/docs/Web/SVG/Element/set) Element
  - [`transform`](/de/docs/Web/SVG/Attribute/transform) Element

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundlegende SVG-Transformationen](/de/docs/Web/SVG/Tutorial/Basic_Transformations) Tutorial
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
