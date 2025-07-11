---
title: Bézier-Kurve
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Bézier-Kurve** (ausgesprochen \[bezje]) ist eine mathematisch beschriebene Kurve, die in der Computergrafik und Animation verwendet wird. In Vektorbildern werden sie verwendet, um glatte Kurven zu modellieren, die unendlich skaliert werden können.

Die Kurve wird durch eine Menge von Kontrollpunkten definiert, wobei mindestens zwei vorhanden sein müssen. Für webbezogene Grafiken und Animationen werden häufig kubische Bézier-Kurven verwendet, die aus vier Kontrollpunkten P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub> und P<sub>3</sub> bestehen.

Um eine quadratische Bézier-Kurve zu zeichnen, werden zwei imaginäre Linien gezogen: eine von P<sub>0</sub> nach P<sub>1</sub> und die andere von P<sub>1</sub> nach P<sub>2</sub>. Eine dritte imaginäre Linie wird gezeichnet, deren Startpunkt sich gleichmäßig auf der ersten Hilfslinie und der Endpunkt auf der zweiten Hilfslinie bewegt. Auf dieser imaginären Linie wird ein Punkt gezeichnet, der sich gleichmäßig von seinem Anfangspunkt zu seinem Endpunkt bewegt. Die Kurve, die dieser Punkt beschreibt, ist die Bézier-Kurve. Hier ist eine animierte Darstellung, die die Erstellung der Kurve zeigt:

![Eine Bézier-Kurve zeichnen](bezier_2_big.gif)

## Siehe auch

- [Bézier-Kurve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) auf Wikipedia
- [Kubische Bézier-Easing-Funktionen in CSS](/de/docs/Web/CSS/easing-function/cubic-bezier)
- {{SVGAttr("keySplines")}} SVG-Attribut
