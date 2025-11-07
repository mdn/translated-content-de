---
title: CSS-Übergänge
slug: Web/CSS/CSS_transitions
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS transitions**-Modul beschreibt die Funktionalität zur Erstellung von schrittweisen Übergängen zwischen verschiedenen CSS-Property-Werten. Das Verhalten dieser Übergänge kann durch die Angabe der Beschleunigungsfunktion, der Dauer und anderer Werte gesteuert werden.

Normalerweise, wenn sich der Wert einer CSS-Eigenschaft ändert, erfolgt das Ergebnis des Wechsels vom alten zum neuen Wert sofort. Das CSS transitions-Modul ermöglicht es, einen Übergang vom alten Zustandswert der Eigenschaft zum neuen Zustand über einen angegebenen Zeitraum zu steuern. Es stellt auch Ereignishandler bereit, um Code in Antwort auf verschiedene Phasen eines Übergangs auszuführen.

In bestimmten Fällen gibt es keinen ursprünglichen "von"-Wert für einen Übergang. Zum Beispiel, wenn ein Element dem DOM hinzugefügt wird, sind die definierten Stile für den "zu"-Zustand. Dieses Modul stellt die {{cssxref("@starting-style")}}-At-Regel bereit, die es ermöglicht, Ausgangsstile für solche Fälle zu definieren. Das Modul definiert auch, wie diskrete Property-Werte übergehen sollen, wie das Übergang des diskret animierten {{cssxref("display")}}-Eigenschaftswerts von `none` zu einem angezeigten Wert.

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
  - [`transitionProperty`](/de/docs/Web/API/CSSTransition/transitionProperty)-Eigenschaft
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
  - [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)-Konstruktor
  - [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName)-Eigenschaft
  - [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime)-Eigenschaft
  - [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement)-Eigenschaft
  - [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)-Ereignis
  - [`transitionend`](/de/docs/Web/API/Element/transitionend_event)-Ereignis
  - [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)-Ereignis
  - [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)-Ereignis

## Leitfäden

- [CSS-Übergänge verwenden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Schritt-für-Schritt-Anleitung, die erklärt, wie man Übergänge mit CSS erstellt. Dieser Artikel beschreibt jede relevante CSS-Eigenschaft und erklärt, wie sie miteinander interagieren.
- [Animation von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display)
  - : Übergang zu und von dem `none`-Wert der diskret animierten {{cssxref("display")}}-Eigenschaft.
- [Übergang eines Popover](/de/docs/Web/CSS/Reference/Properties/overlay#transitioning_a_popover) und [Übergang eines `<dialog>`](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : Beispiele für Übergänge vom {{cssxref("@starting-style")}} zum endgültigen {{cssxref(":popover-open")}} und {{cssxref(":open")}} Pseudoklassenstil.

## Verwandte Konzepte

- {{cssxref("interpolate-size")}}-Eigenschaft
- {{cssxref("calc-size()")}}-Funktion
- {{Glossary("Intrinsic_size", "Intrinsic size")}} Glossarbegriff

- [CSS-Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
  - [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function)-Datentyp

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul.
  - {{cssxref("animation")}}-Kurzform
  - {{cssxref("animation-delay")}}
  - {{cssxref("animation-direction")}}
  - {{cssxref("animation-duration")}}
  - {{cssxref("animation-fill-mode")}}
  - {{cssxref("animation-iteration-count")}}
  - {{cssxref("animation-name")}}
  - {{cssxref("animation-play-state")}}
  - {{cssxref("animation-timing-function")}}

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul.
  - {{cssxref("transform")}}
  - {{cssxref("transform-box")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("transform-style")}}

- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
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
- [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Schnittstelle
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)-Schnittstelle
