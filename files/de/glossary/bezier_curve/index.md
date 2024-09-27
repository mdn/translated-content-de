---
title: Bézier-Kurve
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: d2bf1d12a18c615b80d4bcd95bfe5c7d234c49c0
---

{{GlossarySidebar}}

Eine **Bézier-Kurve** (ausgesprochen \[bezje]) ist eine mathematisch beschriebene Kurve, die in der Computergrafik und Animation verwendet wird. In Vektorbildern werden sie verwendet, um glatte Kurven zu modellieren, die sich unbegrenzt skalieren lassen.

Die Kurve wird durch eine Menge von Kontrollpunkten definiert, wobei mindestens zwei vorhanden sein müssen. Webbezogene Grafiken und Animationen verwenden oft kubische Bézier-Kurven, die Kurven mit vier Kontrollpunkten P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> und P<sub>3</sub> sind.

Um eine quadratische Bézier-Kurve zu zeichnen, werden zwei imaginäre Linien gezeichnet, eine von P<sub>0</sub> zu P<sub>1</sub> und die andere von P<sub>1</sub> zu P<sub>2</sub>. Eine dritte imaginäre Linie wird gezeichnet, wobei ihr Startpunkt gleichmäßig auf der ersten Hilfslinie und der Endpunkt auf der zweiten Hilfslinie bewegt wird. Auf dieser imaginären Linie wird ein Punkt gezeichnet, der sich gleichmäßig von seinem Startpunkt zu seinem Endpunkt bewegt. Die Kurve, die dieser Punkt beschreibt, ist die Bézier-Kurve. Hier ist eine animierte Darstellung, die die Erstellung der Kurve zeigt:

![Zeichnen einer Bézier-Kurve](bezier_2_big.gif)

## Siehe auch

- [Bézier-Kurve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) auf Wikipedia
- [Kubische Bézier-Easing-Funktionen in CSS](/de/docs/Web/CSS/easing-function#using_the_cubic-bezier_function)
- {{SVGAttr("keySplines")}} SVG-Attribut
