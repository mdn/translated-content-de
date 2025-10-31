---
title: CSS-Übergänge
slug: Web/CSS/CSS_transitions
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS transitions**-Modul spezifiziert Funktionalitäten zum Erstellen von allmählichen Übergängen zwischen verschiedenen CSS-Eigenschaftswerten. Das Verhalten dieser Übergänge kann durch die Angabe der Beschleunigungsfunktion, Dauer und anderer Werte gesteuert werden.

Normalerweise, wenn sich der Wert einer CSS-Eigenschaft ändert, tritt die Änderung vom alten zum neuen Wert sofort ein. Das CSS transitions-Modul ermöglicht die Steuerung eines Übergangs vom alten zum neuen Eigenschaftszustand über einen bestimmten Zeitraum. Es bietet auch Ereignishandler, um Code auszuführen, der als Reaktion auf verschiedene Stadien eines Übergangs erreicht wird.

In bestimmten Fällen gibt es keinen ursprünglichen "Von"-Wert für einen Übergang. Zum Beispiel, wenn ein Element dem DOM hinzugefügt wird, sind die definierten Stile für den "Zu"-Zustand. Dieses Modul bietet die {{cssxref("@starting-style")}}-Regel, die es ermöglicht, Anfangsstile für solche Fälle zu definieren. Das Modul definiert auch, wie diskrete Eigenschaftswerte übergehen sollten, wie etwa das Übergang von der diskret animierten {{cssxref("display")}}-Eigenschaft vom Wert `none` zu einem angezeigten Wert.

## Referenz

### Eigenschaften

- {{cssxref("transition")}}
- {{cssxref("transition-behavior")}}
- {{cssxref("transition-delay")}}
- {{cssxref("transition-duration")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-timing-function")}}

### @-Regeln

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
  - : Schritt-für-Schritt-Anleitung, wie man Übergänge mit CSS erstellt. Dieser Artikel beschreibt jede relevante CSS-Eigenschaft und erklärt, wie sie miteinander interagieren.
- [Animation von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display)
  - : Übergang zu und von dem `none`-Wert der diskret animierten {{cssxref("display")}}-Eigenschaft.
- [Übergang eines Popovers](/de/docs/Web/CSS/Reference/Properties/overlay#transitioning_a_popover) und [Übergang eines `<dialog>`](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : Beispiele für den Übergang von {{cssxref("@starting-style")}} zu finalen {{cssxref(":popover-open")}} und {{cssxref(":open")}} Pseudo-Klassen-Stilen.

## Verwandte Konzepte

- {{cssxref("interpolate-size")}} Eigenschaft
- {{cssxref("calc-size()")}} Funktion
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}} Glossarbegriff

- [CSS-Beschleunigungsfunktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
  - [`<easing-function>`](/de/docs/Web/CSS/easing-function) Datentyp

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul.
  - {{cssxref("animation")}} Kurzform
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
- [`ViewTransition`](/de/docs/Web/API/ViewTransition) Schnittstelle
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent) Schnittstelle
