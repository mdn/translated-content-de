---
title: CSS-Easing-Funktionen
slug: Web/CSS/CSS_easing_functions
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **CSS-Easing-Funktionen**-Modul definiert Easing-Funktionen, die eine Möglichkeit bieten, die Transformation von Werten zu steuern. Die definierten Funktionen umfassen lineare, kubische Bézier- und Schritt-Easing-Funktionen. Diese Easing-Funktionen können auf Animationen und Transitionen angewendet werden.

Das allmähliche Erhöhen der Geschwindigkeit, mit der sich ein Element bewegt, kann dem Element ein Gefühl von Gewicht verleihen, da es scheint, an Schwung zuzunehmen. Easing-Funktionen ermöglichen es Ihnen, die Änderungsrate zu steuern. Kubische Bézier-Easing-Funktionen können verwendet werden, um intuitive Benutzeroberflächenelemente oder überzeugende Cartoon-Requisiten zu erzeugen, die sich wie ihre physischen Gegenstücke verhalten.

Alternativ möchten Sie möglicherweise, dass eine Animation sich in bestimmten Schritten vorwärts bewegt, um eine roboterartige Bewegung oder den Effekt eines segmentierten Rads zu schaffen, das sich so dreht, dass die Segmente immer in der gleichen Position erscheinen. Dafür können Schritt-Easing-Funktionen verwendet werden.

## Referenz

### Funktionen

- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
- {{cssxref("easing-function/linear", "linear()")}}
- {{cssxref("easing-function/steps", "steps()")}}

### Datentypen

- {{cssxref("easing-function")}}
- [`<linear-easing-function>`](/de/docs/Web/CSS/easing-function#linear-easing-function)
- [`<cubic-bezier-easing-function>`](/de/docs/Web/CSS/easing-function#cubic-bezier-easing-function)
- [`<step-easing-function>`](/de/docs/Web/CSS/easing-function#step-easing-function)

### Begriffe und Glossardefinitionen

- {{Glossary("Bézier_curve", "Bézier-Kurve")}}
- {{Glossary("Interpolation", "Interpolation")}}

## Leitfäden

- [CSS-Wertfunktionen: Easing-Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#easing_functions)
  - : Die CSS-Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

## Verwandte Konzepte

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} Kurznotation

- [CSS-Transitionen](/de/docs/Web/CSS/CSS_transitions) Modul
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} Kurznotation

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- {{cssxref("will-change")}} CSS-Eigenschaft
