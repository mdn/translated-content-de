---
title: Bézier-Kurve
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: d2bf1d12a18c615b80d4bcd95bfe5c7d234c49c0
---

{{GlossarySidebar}}

Eine **Bézier-Kurve** (ausgesprochen \[bezje]) ist eine mathematisch beschriebene Kurve, die in Computergrafiken und Animationen verwendet wird. In Vektorbildern werden sie verwendet, um glatte Kurven zu modellieren, die unendlich skalierbar sind.

Die Kurve wird durch eine Menge von Kontrollpunkten definiert, mit mindestens zwei. Grafik- und Animationsanwendungen im Web nutzen oft kubische Béziers, das sind Kurven mit vier Kontrollpunkten P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> und P<sub>3</sub>.

Um eine quadratische Bézier-Kurve zu zeichnen, werden zwei imaginäre Linien gezogen, eine von P<sub>0</sub> zu P<sub>1</sub> und die andere von P<sub>1</sub> zu P<sub>2</sub>. Eine dritte imaginäre Linie wird gezogen, deren Startpunkt sich stetig auf der ersten Hilfslinie und deren Endpunkt auf der zweiten Hilfslinie bewegt. Auf dieser imaginären Linie wird ein Punkt von seinem Startpunkt bis zu seinem Endpunkt gezogen. Die Kurve, die dieser Punkt beschreibt, ist die Bézier-Kurve. Hier ist eine animierte Darstellung, die das Erstellen der Kurve zeigt:

![Zeichnen einer Bézier-Kurve](bezier_2_big.gif)

## Siehe auch

- [Bézier-Kurve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) auf Wikipedia
- [Kubische Bézier-Übergangsfunktionen in CSS](/de/docs/Web/CSS/easing-function#using_the_cubic-bezier_function)
- {{SVGAttr("keySplines")}} SVG-Attribut
