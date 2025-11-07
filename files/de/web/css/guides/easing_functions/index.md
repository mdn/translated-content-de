---
title: CSS-Easing-Funktionen
short-title: Easing functions
slug: Web/CSS/Guides/Easing_functions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Modul **CSS-Easing-Funktionen** definiert Easing-Funktionen, die eine Möglichkeit bieten, die Transformation von Werten zu steuern. Die definierten Funktionen umfassen lineare, kubische Bézier- und Schritt-Easing-Funktionen. Diese Easing-Funktionen können auf Animationen und Übergänge angewendet werden.

Die Geschwindigkeit, mit der sich ein Element bewegt, allmählich zu erhöhen, kann dem Element ein Gefühl von Gewicht verleihen, da es scheint, Schwung zu bekommen. Easing-Funktionen ermöglichen es Ihnen, die Änderungsrate zu kontrollieren. Kubische Bézier-Easing-Funktionen können verwendet werden, um intuitive Benutzeroberflächelemente oder überzeugende Cartoon-Requisiten zu erzeugen, die sich wie ihre physikalischen Gegenstücke verhalten.

Alternativ möchten Sie möglicherweise, dass sich eine Animation in bestimmten Schritten vorwärts bewegt, um eine roboterartige Bewegung zu erzeugen oder den Effekt eines segmentierten Rades zu erzielen, das sich so dreht, dass die Segmente immer in derselben Position erscheinen. Für diesen Zweck können Schritt-Easing-Funktionen verwendet werden.

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

- {{Glossary("Bézier_curve", "Bézier-Kurve")}}
- {{Glossary("Interpolation", "Interpolation")}}

## Leitfäden

- [CSS-Wertfunktionen: Easing-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#easing_functions)
  - : Die CSS-Anweisungen, die eine spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

## Verwandte Konzepte

- CSS-Animationsmodul
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} Kurzform

- CSS-Übergangsmodul
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} Kurzform

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions)
- {{cssxref("will-change")}} CSS-Eigenschaft
