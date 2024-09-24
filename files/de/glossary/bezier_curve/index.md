---
title: Bézier-Kurve
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: d2bf1d12a18c615b80d4bcd95bfe5c7d234c49c0
---

{{GlossarySidebar}}

Eine **Bézier-Kurve** (ausgesprochen \[bezje]) ist eine mathematisch beschriebene Kurve, die in der Computergrafik und Animation verwendet wird. In Vektorbildern werden sie verwendet, um glatte Kurven zu modellieren, die unendlich skalierbar sind.

Die Kurve wird durch eine Menge von Kontrollpunkten definiert, mindestens zwei. Bei webbezogenen Grafiken und Animationen werden oft kubische Bézier-Kurven verwendet, das sind Kurven mit vier Kontrollpunkten P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> und P<sub>3</sub>.

Um eine quadratische Bézier-Kurve zu zeichnen, werden zwei imaginäre Linien gezeichnet, eine von P<sub>0</sub> nach P<sub>1</sub> und die andere von P<sub>1</sub> nach P<sub>2</sub>. Eine dritte imaginäre Linie wird gezeichnet, deren Anfangspunkt sich stetig auf der ersten Hilfslinie und der Endpunkt auf der zweiten Hilfslinie bewegt. Auf dieser imaginären Linie wird ein Punkt gezeichnet, der sich stetig von seinem Ausgangspunkt zu seinem Endpunkt bewegt. Die Kurve, die dieser Punkt beschreibt, ist die Bézier-Kurve. Hier ist eine animierte Illustration, die die Erstellung der Kurve zeigt:

![Zeichnen einer Bézier-Kurve](bezier_2_big.gif)

## Siehe auch

- [Bézier-Kurve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) auf Wikipedia
- [Kubische Bézier-Abschwächungsfunktionen in CSS](/de/docs/Web/CSS/easing-function#using_the_cubic-bezier_function)
- {{SVGAttr("keySplines")}} SVG-Attribut
