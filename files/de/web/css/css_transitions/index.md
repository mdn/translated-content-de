---
title: CSS-Übergänge
slug: Web/CSS/CSS_transitions
l10n:
  sourceCommit: 9b20bde8347166a18f95202f7bdcfecf1c5da5a3
---

Das **CSS transitions** Modul spezifiziert die Funktionalität zur Erstellung von schrittweisen Übergängen zwischen verschiedenen CSS-Property-Werten. Das Verhalten dieser Übergänge kann durch Angabe der Easing-Funktion, der Dauer und anderer Werte gesteuert werden.

Normalerweise, wenn sich der Wert einer CSS-Eigenschaft ändert, ist das Ergebnis des Wechsels vom alten zum neuen Wert sofort sichtbar. Das CSS-Übergangsmodul ermöglicht die Steuerung eines Übergangs vom alten Zustand einer Eigenschaft zum neuen Zustand über einen festgelegten Zeitraum. Es bietet auch Ereignishandler, die Code ausführen lassen, als Reaktion darauf, dass unterschiedliche Stadien eines Übergangs erreicht werden.

In bestimmten Fällen gibt es keinen ursprünglichen "from"-Wert für einen Übergang. Zum Beispiel, wenn ein Element dem DOM hinzugefügt wird, sind die definierten Styles für den "to"-Zustand. Dieses Modul bietet die {{cssxref("@starting-style")}} @-Regel, die es ermöglicht, Startstile für solche Fälle zu definieren. Das Modul definiert auch, wie diskrete Eigenschaftswerte überführt werden sollen, wie das Überführen der diskret animierten {{cssxref("display")}} Eigenschaft vom Wert `none` zu einem angezeigten Wert.

## Referenz

### Eigenschaften

- {{cssxref("transition")}}
- {{cssxref("transition-behavior")}}
- {{cssxref("transition-delay")}}
- {{cssxref("transition-duration")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-timing-function")}}

### At-Regeln

- {{cssxref("@starting-style")}}

### Schnittstellen

- [`CSSStartingStyleRule`](/de/docs/Web/API/CSSStartingStyleRule)
- [`CSSTransition`](/de/docs/Web/API/CSSTransition)
  - [`transitionProperty`](/de/docs/Web/API/CSSTransition/transitionProperty) Eigenschaft
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
  - [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent) Konstruktor
  - [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) Eigenschaft
  - [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) Eigenschaft
  - [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft
  - [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) Ereignis
  - [`transitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis
  - [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) Ereignis
  - [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) Ereignis

## Leitfäden

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Schritt-für-Schritt-Anleitung, wie Übergänge mit CSS erstellt werden. Dieser Artikel beschreibt jede relevante CSS-Eigenschaft und erklärt, wie sie miteinander interagieren.
- [Animation von `display`](/de/docs/Web/CSS/display#animating_display)
  - : Übergang zu und von dem `none` Wert der diskret animierten {{cssxref("display")}} Eigenschaft.
- [Übergang eines Popovers](/de/docs/Web/CSS/overlay#transitioning_a_popover) und [Übergang eines `<dialog>`](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : Beispiele für Übergänge von {{cssxref("@starting-style")}} zu finalen {{cssxref(":popover-open")}} und {{cssxref(":open")}} Pseudoklassen-Stilen.

## Verwandte Konzepte

- {{cssxref("interpolate-size")}} Eigenschaft
- {{cssxref("calc-size()")}} Funktion
- {{Glossary("Intrinsic_size", "Intrinsic size")}} Glossareintrag

- [CSS-Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
  - [`<easing-function>`](/de/docs/Web/CSS/easing-function) Datentyp

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul
  - {{cssxref("animation")}} Kurzschreibweise
  - {{cssxref("animation-delay")}}
  - {{cssxref("animation-direction")}}
  - {{cssxref("animation-duration")}}
  - {{cssxref("animation-fill-mode")}}
  - {{cssxref("animation-iteration-count")}}
  - {{cssxref("animation-name")}}
  - {{cssxref("animation-play-state")}}
  - {{cssxref("animation-timing-function")}}

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
  - {{cssxref("transform")}}
  - {{cssxref("transform-box")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("transform-style")}}

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
  - {{cssxref("scroll-snap-type")}}
  - {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-snap-align")}}
  - {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-snap-stop")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("opacity")}}
- {{cssxref("visibility")}}
- [`ViewTransition`](/de/docs/Web/API/ViewTransition) Schnittstelle
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent) Schnittstelle
