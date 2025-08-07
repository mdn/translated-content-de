---
title: CSS Easing-Funktionen
slug: Web/CSS/CSS_easing_functions
l10n:
  sourceCommit: 861dc1b515e6dd9ff835b841cdba50388ffa746c
---

Das **CSS Easing-Funktionen** Modul definiert Easing-Funktionen, die eine Möglichkeit bieten, die Transformation von Werten zu steuern. Die definierten Funktionen umfassen lineare, kubisch-bézier und Stufen-Easing-Funktionen. Diese Easing-Funktionen können auf Animationen und Übergänge angewendet werden.

Eine allmähliche Erhöhung der Geschwindigkeit, mit der sich ein Element bewegt, kann dem Element ein Gefühl von Gewicht verleihen, da es scheint, an Schwung zu gewinnen. Easing-Funktionen ermöglichen es Ihnen, die Änderungsrate zu steuern. Kubisch-bézier Easing-Funktionen können verwendet werden, um intuitive Benutzerschnittstellenelemente oder überzeugende Cartoon-Requisiten zu erzeugen, die sich wie ihre physikalischen Gegenstücke verhalten.

Alternativ möchten Sie vielleicht, dass eine Animation sich in bestimmten Schritten vorwärts bewegt, um eine robotergleiche Bewegung zu erzeugen oder den Effekt eines segmentierten Rades, das sich so dreht, dass die Segmente immer in derselben Position erscheinen. Für diesen Zweck können Stufen-Easing-Funktionen verwendet werden.

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

- [CSS Wertfunktionen: Easing-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#easing_functions)
  - : Die CSS-Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

## Verwandte Konzepte

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} Kurzschreibweise

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} Kurzschreibweise

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- {{cssxref("will-change")}} CSS-Eigenschaft
