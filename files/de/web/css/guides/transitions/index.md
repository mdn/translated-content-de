---
title: CSS-Transitions
short-title: Transitions
slug: Web/CSS/Guides/Transitions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Transitions**-Modul spezifiziert Funktionalitäten zur Erstellung schrittweiser Übergänge zwischen verschiedenen CSS-Eigenschaftswerten. Das Verhalten dieser Übergänge kann durch Festlegen der Ease-Funktion, der Dauer und anderer Werte gesteuert werden.

Normalerweise, wenn sich der Wert einer CSS-Eigenschaft ändert, erfolgt das Ergebnis der Änderung vom alten zum neuen Wert sofort. Das CSS-Transitions-Modul ermöglicht das Kontrollieren eines Fortschritts vom alten Zustand der Eigenschaft zum neuen Zustand über einen festgelegten Zeitraum. Es bietet auch Ereignis-Handler, die Code ausführen lassen, als Reaktion auf das Erreichen verschiedener Phasen eines Übergangs.

In bestimmten Fällen gibt es keinen ursprünglichen "von"-Wert für einen Übergang. Zum Beispiel, wenn ein Element dem DOM hinzugefügt wird, sind die definierten Stile für den "zu"-Zustand. Dieses Modul stellt die {{cssxref("@starting-style")}} At-Regel bereit, die das Definieren von Anfangsstilen für solche Fälle ermöglicht. Das Modul definiert auch, wie diskrete Eigenschaftswerte übergangen werden sollten, wie zum Beispiel das Übergehen der diskret animierten {{cssxref("display")}} Eigenschaft vom `none`-Wert zu einem angezeigten Wert.

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

- [CSS-Transitions verwenden](/de/docs/Web/CSS/Guides/Transitions/Using)
  - : Schritt-für-Schritt-Anleitung zur Erstellung von Übergängen mit CSS. Dieser Artikel beschreibt jede relevante CSS-Eigenschaft und erklärt, wie sie miteinander interagieren.
- [`display` animieren](/de/docs/Web/CSS/Reference/Properties/display#animating_display)
  - : Übergänge zu und vom `none`-Wert der diskret animierten {{cssxref("display")}} Eigenschaft.
- [Übergang eines Popovers](/de/docs/Web/CSS/Reference/Properties/overlay#transitioning_a_popover) und [Übergang eines `<dialog>`](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : Beispiele für Übergänge von {{cssxref("@starting-style")}} zu den finalen {{cssxref(":popover-open")}} und {{cssxref(":open")}} Pseudo-Klassenstilen.

## Verwandte Konzepte

- {{cssxref("interpolate-size")}} Eigenschaft
- {{cssxref("calc-size()")}} Funktion
- {{Glossary("Intrinsic_size", "Intrinsic Size")}} Glossar-Term

- [CSS-Ease-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
  - [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function) Datentyp

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul.
  - {{cssxref("animation")}} Shorthand
  - {{cssxref("animation-delay")}}
  - {{cssxref("animation-direction")}}
  - {{cssxref("animation-duration")}}
  - {{cssxref("animation-fill-mode")}}
  - {{cssxref("animation-iteration-count")}}
  - {{cssxref("animation-name")}}
  - {{cssxref("animation-play-state")}}
  - {{cssxref("animation-timing-function")}}

- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul.
  - {{cssxref("transform")}}
  - {{cssxref("transform-box")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("transform-style")}}

- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
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
