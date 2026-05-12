---
title: CSS-Easing-Funktionen
short-title: Easing functions
slug: Web/CSS/Guides/Easing_functions
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Das **CSS-Easing-Funktionen**-Modul definiert Easing-Funktionen, die eine Möglichkeit bieten, die Transformation von Werten zu kontrollieren. Die definierten Funktionen umfassen lineare, kubische Bezier- und Schritt-Easing-Funktionen. Diese Easing-Funktionen können auf Animationen und Übergänge angewendet werden.

Das allmähliche Erhöhen der Geschwindigkeit, mit der sich ein Element bewegt, kann dem Element ein Gefühl von Gewicht verleihen, da es scheinbar an Schwung gewinnt. Easing-Funktionen ermöglichen es Ihnen, die Änderungsrate zu steuern. Kubische Bezier-Easing-Funktionen können verwendet werden, um intuitive Benutzeroberflächenelemente oder überzeugende Cartoon-Requisiten zu erzeugen, die sich wie ihre physischen Gegenstücke verhalten.

Alternativ möchten Sie möglicherweise, dass eine Animation in bestimmten Schritten voranschreitet, um eine roboterartige Bewegung zu erzeugen oder den Effekt eines segmentierten Rads, das sich so dreht, dass die Segmente immer in derselben Position erscheinen. Dafür können Schritt-Easing-Funktionen verwendet werden.

## Referenz

### Funktionen

- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
- {{cssxref("easing-function/linear", "linear()")}}
- {{cssxref("easing-function/steps", "steps()")}}

### Datentypen

- {{cssxref("easing-function")}}
- [`<linear-easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function#linear-easing-function)
- [`<cubic-bezier-easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function#cubic-bezier-easing-function)
- [`<step-easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function#step-easing-function)

### Begriffe und Glossardefinitionen

- {{Glossary("Bezier_curve", "Bézier-Kurve")}}
- {{Glossary("Interpolation", "Interpolation")}}

## Leitfäden

- [CSS-Wertfunktionen: Easing-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#easing_functions)
  - : Die CSS-Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

## Verwandte Konzepte

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} shorthand

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} shorthand

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- {{cssxref("will-change")}} CSS-Eigenschaft
