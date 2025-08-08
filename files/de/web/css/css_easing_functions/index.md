---
title: CSS-Easing-Funktionen
slug: Web/CSS/CSS_easing_functions
l10n:
  sourceCommit: 4b3e4511c0fc57e445d91d3a7ade7f2ff243880d
---

Das Modul **CSS-Easing-Funktionen** definiert Easing-Funktionen, die eine Möglichkeit bieten, die Transformation von Werten zu steuern. Zu den definierten Funktionen gehören lineare, kubische Bezier- und Stufen-Easing-Funktionen. Diese Easing-Funktionen können auf Animationen und Übergänge angewendet werden.

Das schrittweise Erhöhen der Geschwindigkeit, mit der sich ein Element bewegt, kann dem Element ein Gefühl von Gewicht verleihen, da es an Schwung zu gewinnen scheint. Easing-Funktionen ermöglichen es Ihnen, die Änderungsrate zu steuern. Kubische Bezier-Easing-Funktionen können verwendet werden, um intuitive Benutzeroberflächenelemente oder überzeugende Zeichentrick-Requisiten zu erzeugen, die sich wie ihre physischen Gegenstücke verhalten.

Alternativ könnte es gewünscht sein, dass sich eine Animation in bestimmten Schritten bewegt, um eine roboterartige Bewegung zu erzeugen oder den Effekt eines segmentierten Rades, das sich so dreht, dass die Segmente immer in derselben Position erscheinen. Dafür können Stufen-Easing-Funktionen verwendet werden.

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

- [CSS-Wertfunktionen: Easing-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#easing_functions)
  - : Die CSS-Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

## Verwandte Konzepte

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
  - {{cssxref("animation-timing-function")}}
  - {{cssxref("animation")}} Kurzform

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
  - {{cssxref("transition-timing-function")}}
  - {{cssxref("transition")}} Kurzform

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Wertfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- {{cssxref("will-change")}} CSS-Eigenschaft
