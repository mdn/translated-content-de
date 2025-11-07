---
title: Bézier-Kurve
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Eine **Bézier-Kurve** (ausgesprochen \[bezje]) ist eine mathematisch beschriebene Kurve, die in der Computergrafik und Animation verwendet wird. In Vektorbildern werden sie genutzt, um glatte Kurven zu modellieren, die unbegrenzt skaliert werden können.

Die Kurve wird durch eine Menge von Kontrollpunkten definiert, mit mindestens zwei Punkten. Grafiken und Animationen im Web verwenden oft kubische Béziers, das sind Kurven mit vier Kontrollpunkten P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> und P<sub>3</sub>.

Um eine quadratische Bézier-Kurve zu zeichnen, werden zwei imaginäre Linien gezogen, eine von P<sub>0</sub> zu P<sub>1</sub> und die andere von P<sub>1</sub> zu P<sub>2</sub>. Eine dritte imaginäre Linie wird gezeichnet, deren Startpunkt sich stetig auf der ersten Hilfslinie bewegt und der Endpunkt auf der zweiten Hilfslinie. Auf dieser imaginären Linie wird ein Punkt gezeichnet, der sich kontinuierlich von seinem Startpunkt zu seinem Endpunkt bewegt. Die Kurve, die dieser Punkt beschreibt, ist die Bézier-Kurve. Hier ist eine animierte Darstellung, die die Erstellung der Kurve zeigt:

![Zeichnung einer Bézier-Kurve](bezier_2_big.gif)

## Siehe auch

- [Bézier-Kurve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) auf Wikipedia
- [Kubische Bézier-Easing-Funktionen in CSS](/de/docs/Web/CSS/Reference/Values/easing-function/cubic-bezier)
- {{SVGAttr("keySplines")}} SVG-Attribut
