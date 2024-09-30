---
title: CSS transforms
slug: Web/CSS/CSS_transforms
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS transforms**-Modul definiert, wie Elemente, die mit CSS gestaltet sind, in zwei- oder dreidimensionalem Raum transformiert werden können.

## CSS-Transformationen in Aktion

Verwenden Sie die Schieberegler im folgenden Rahmen, um die `translation`, `rotation`, `scale` und `skew` CSS-Transformations-Eigenschaften des Würfels im 3D-Raum zu ändern. Achten Sie darauf, wie der Würfel mit dem Element mit der Bezeichnung `z:0px` interagiert, das sich an der 3D-Position `(0, 0, 0)` befindet, während Sie ihn durch den 3D-Raum bewegen.

{{EmbedGHLiveSample("css-examples/modules/transforms.html", '100%', 900)}}

Sie können auch den `perspective`-Schieberegler verwenden, um die [`perspective`](/de/docs/Web/CSS/perspective)-Eigenschaft des Containers des Würfels zu verändern, die den Abstand zwischen Ihnen und der `z=0`-Ebene bestimmt.

Die [`perspective-origin`](/de/docs/Web/CSS/perspective-origin)-Schieberegler bestimmen, wo Sie in den 3D-Raum schauen, um den _Fluchtpunkt_ der Ansicht festzulegen. Dieser Fluchtpunkt wird durch einen kleinen roten Punkt angezeigt. Sie können sich vorstellen, wie der physische Vorgang, Ihren Kopf nach oben, unten, links und rechts zu bewegen, um verschiedene Teile des Würfels zu sehen, ohne den Würfel selbst zu bewegen, wenn Sie diese Schieberegler verändern.

Das `backface-visibility`-Kontrollkästchen bestimmt, ob die Rückseiten des Würfels auf `visible` oder `hidden` gesetzt werden.

Der Würfel im obigen Beispiel besteht aus sechs `<div>`-Elementen, die alle mit CSS gestaltet sind, um die Flächen des Würfels zu bilden. Der Würfel wird nicht mit einem 2D- oder 3D-Canvas-Kontext gezeichnet, so dass **Sie die Flächen des Würfels mit den Entwicklertools Ihres Browsers inspizieren können, wie Sie es mit jedem anderen DOM-Element tun würden**. Verwenden Sie das Elementauswahlwerkzeug der Entwicklertools Ihres Browsers, um verschiedene Flächen des Würfels zu inspizieren, während Sie dessen Position und Rotation transformieren.

> [!NOTE]
> Die Reihenfolge, in der Transformationen, einschließlich 3D-Rotationen, angewendet werden, beeinflusst die resultierende Transformation. Im obigen Beispiel werden Transformationen übersetzt, skaliert, dann rotiert und schließlich verzerrt. Die Rotationen werden in der Reihenfolge X → Y → Z angewendet.

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

## Leitfäden

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
  - : Schritt-für-Schritt-Anleitung, wie man Elemente mit CSS transformiert.
- [Koordinatensysteme](/de/docs/Web/CSS/CSSOM_view/Coordinate_systems)
  - : Beschreibt, wie Pixellokationen im CSS-Objektmodell definiert sind.
- [Leistungsfundamentals: Verwenden Sie CSS-Transformationen](/de/docs/Web/Performance/Fundamentals#use_css_transforms)
  - : Ein Überblick über die Grundlagen der Web-Performance, einschließlich der Verbesserung der Performance durch CSS-Transformationen.
- [Matrix-Mathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Beschreibt, wie Objekttransformationen durch mathematische Matrizen dargestellt werden können.

## Relevante Konzepte

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
  - [Stacking-Kontext](/de/docs/Glossary/Stacking_context)
- [SVG](/de/docs/Web/SVG)-Konzepte:
  - [`<animate>`](/de/docs/Web/SVG/Element/animate)-Element
  - [`<animateTransform>`](/de/docs/Web/SVG/Element/animateTransform)-Element
  - [`<set>`](/de/docs/Web/SVG/Element/set)-Element
  - [`transform`](/de/docs/Web/SVG/Attribute/transform)-Element

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundlegende SVG-Transformationen](/de/docs/Web/SVG/Tutorial/Basic_Transformations)-Tutorial
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)-Modul
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)-Modul
