---
title: CSS-Easing-Funktionen
slug: Web/CSS/CSS_easing_functions
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das Modul **CSS-Easing-Funktionen** definiert Easing-Funktionen, die eine Möglichkeit bieten, die Transformation von Werten zu steuern. Zu den definierten Funktionen gehören lineare, kubische Bézier- und Schritt-Easing-Funktionen. Diese Easing-Funktionen können auf Animationen und Übergänge angewendet werden.

Die Geschwindigkeit, mit der sich ein Element bewegt, allmählich zu erhöhen, kann dem Element ein Gefühl von Gewicht verleihen, da es scheint, an Schwung zu gewinnen. Easing-Funktionen ermöglichen es Ihnen, die Änderungsrate zu steuern. Kubische Bézier-Easing-Funktionen können verwendet werden, um intuitive Benutzeroberflächenelemente oder überzeugende Cartoon-Requisiten zu erzeugen, die sich wie ihre physischen Gegenstücke verhalten.

Alternativ möchten Sie vielleicht, dass sich eine Animation in deutlichen Schritten vorwärts bewegt, um roboterartige Bewegungen zu erzeugen oder den Effekt eines segmentierten Rads, das sich so dreht, dass die Segmente immer in der gleichen Position erscheinen. Dafür können Schritt-Easing-Funktionen verwendet werden.

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

### Begriffe und Glossar-Definitionen

- {{Glossary("Bézier_curve", "Bézierkurve")}}
- {{Glossary("Interpolation", "Interpolation")}}

## Leitfäden

- [CSS-Wertfunktionen: Easing-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#easing_functions)
  - : Die CSS-Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

## Verwandte Konzepte

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} Kurzform

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} Kurzform

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- {{cssxref("will-change")}} CSS-Eigenschaft
