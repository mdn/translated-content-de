---
title: CSS-Transforms
slug: Web/CSS/CSS_transforms
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS-Transforms**-Modul definiert, wie mit CSS gestaltete Elemente im zwei- oder dreidimensionalen Raum transformiert werden können.

## CSS-Transforms in Aktion

Verwenden Sie die Schieberegler im folgenden Rahmen, um die Übersetzungs-, Dreh-, Skalierungs- und Scherungseigenschaften von CSS-Transforms des Würfels im 3D-Raum zu ändern. Beachten Sie, wie der Würfel mit dem Element, das mit `z:0px` beschriftet ist und sich an der 3D-Position `(0, 0, 0)` befindet, interagiert, während Sie ihn durch den 3D-Raum bewegen.

{{EmbedGHLiveSample("css-examples/modules/transforms.html", '100%', 900)}}

Sie können auch den `perspective`-Schieberegler verwenden, um die [`perspective`](/de/docs/Web/CSS/perspective)-Eigenschaft des Behälters des Würfels zu ändern, die den Abstand zwischen Ihnen und der `z=0`-Ebene bestimmt.

Die [`perspective-origin`](/de/docs/Web/CSS/perspective-origin)-Schieberegler bestimmen, wo Sie, der Betrachter, in den 3D-Raum blicken, um den _Fluchtpunkt_ der Ansicht zu bestimmen. Dieser Fluchtpunkt wird durch einen kleinen roten Punkt angezeigt. Sie können sich das Ändern dieser Regler so vorstellen, dass Sie Ihren Kopf physisch nach oben, unten, links und rechts bewegen, um verschiedene Teile des Würfels zu sehen, ohne den Würfel selbst zu bewegen.

Das `backface-visibility`-Kontrollkästchen bestimmt, ob die hinteren Flächen des Würfels auf `visible` oder `hidden` gesetzt sind.

Der Würfel im obigen Beispiel besteht aus sechs `<div>`-Elementen, die alle mit CSS gestylt sind, um die Flächen des Würfels zu erstellen. Der Würfel wird nicht mit einem 2D- oder 3D-Canvas-Kontext gezeichnet, sodass **Sie die Flächen des Würfels mit den Entwicklerwerkzeugen Ihres Browsers untersuchen können, wie Sie auch jedes andere DOM-Element untersuchen würden**. Versuchen Sie, den Elementauswähler der Entwicklerwerkzeuge Ihres Browsers zu verwenden, um verschiedene Flächen des Würfels zu untersuchen, während Sie dessen Position und Drehung transformieren.

> [!NOTE]
> Die Reihenfolge, in der Transformationen, einschließlich 3D-Drehungen, angewendet werden, beeinflusst die resultierende Transformation. Im obigen Beispiel werden Transformationen in der Reihenfolge Übersetzen, Skalieren, Drehen und dann Scheren angewendet. Die Drehungen erfolgen in der Reihenfolge X → Y → Z.

Sie können den [Quellcode dieses Beispiels auf GitHub ansehen](https://github.com/mdn/css-examples/blob/main/modules/transforms.html).

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

## Leitfäden

- [Verwendung von CSS-Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Schritt-für-Schritt-Anleitung zur Transformation von mit CSS gestylten Elementen.
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : Beschreibt die Art und Weise, wie Pixelpositionen im CSS-Objektmodell definiert werden.
- [Leistungsgrundlagen: Verwendung von CSS-Transforms](/de/docs/Web/Performance/Fundamentals#use_css_transforms)
  - : Ein Überblick über Webleistungsgrundlagen, einschließlich wie CSS-Transforms die Leistung verbessern können.
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
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
  - [Stapeln-Kontext](/de/docs/Glossary/Stacking_context)
- [SVG](/de/docs/Web/SVG) Konzepte:
  - [`<animate>`](/de/docs/Web/SVG/Element/animate)-Element
  - [`<animateTransform>`](/de/docs/Web/SVG/Element/animateTransform)-Element
  - [`<set>`](/de/docs/Web/SVG/Element/set)-Element
  - [`transform`](/de/docs/Web/SVG/Attribute/transform)-Element

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundlegende SVG-Transformationen](/de/docs/Web/SVG/Tutorial/Basic_Transformations) Tutorial
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
