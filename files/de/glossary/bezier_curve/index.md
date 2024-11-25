---
title: Bézier-Kurve
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: 4f470ce128d50dc3568ddf03b313f420055d9799
---

{{GlossarySidebar}}

Eine **Bézier-Kurve** (ausgesprochen \[bezje]) ist eine mathematisch beschriebene Kurve, die in der Computergrafik und Animation verwendet wird. In Vektorbildern werden sie genutzt, um glatte Kurven zu modellieren, die unendlich skaliert werden können.

Die Kurve wird durch eine Reihe von Kontrollpunkten definiert, mit einem Minimum von zwei. In web-bezogenen Grafiken und Animationen werden oft kubische Bézier-Kurven verwendet, welche durch vier Kontrollpunkte P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, und P<sub>3</sub> charakterisiert sind.

Um eine quadratische Bézier-Kurve zu zeichnen, werden zwei imaginäre Linien gezeichnet, eine von P<sub>0</sub> zu P<sub>1</sub> und die andere von P<sub>1</sub> zu P<sub>2</sub>. Eine dritte imaginäre Linie wird gezeichnet, deren Ausgangspunkt sich stetig auf der ersten Hilfslinie bewegt und deren Endpunkt auf der zweiten Hilfslinie. Auf dieser imaginären Linie wird ein Punkt gezeichnet, der sich stetig von seinem Anfangspunkt zu seinem Endpunkt bewegt. Die Kurve, die dieser Punkt beschreibt, ist die Bézier-Kurve. Hier ist eine animierte Darstellung, die die Erstellung der Kurve zeigt:

![Zeichnung einer Bézier-Kurve](bezier_2_big.gif)

## Siehe auch

- [Bézier-Kurve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) auf Wikipedia
- [Kubische Bézier-Übergangsfunktionen in CSS](/de/docs/Web/CSS/easing-function/cubic-bezier)
- {{SVGAttr("keySplines")}} SVG-Attribut
