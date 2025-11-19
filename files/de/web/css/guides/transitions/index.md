---
title: CSS-Übergänge
short-title: Transitions
slug: Web/CSS/Guides/Transitions
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS-Transitions**-Modul spezifiziert Funktionalitäten zur Erstellung von allmählichen Übergängen zwischen verschiedenen CSS-Property-Werten. Das Verhalten dieser Übergänge kann durch die Angabe ihrer Timing-Funktion, Dauer und anderer Werte gesteuert werden.

Normalerweise erfolgt die Änderung eines CSS-Property-Werts sofort von dem alten Wert zum neuen Wert. Das CSS-Transition-Modul ermöglicht die Steuerung eines Übergangs vom alten Zustand der Eigenschaft zu dem neuen Zustand über einen bestimmten Zeitraum. Es bietet auch Ereignis-Handler, um Code in Reaktion auf verschiedene Stadien eines Übergangs auszuführen.

In bestimmten Fällen gibt es keinen ursprünglichen "von"-Wert für einen Übergang. Zum Beispiel, wenn ein Element dem DOM hinzugefügt wird, sind die definierten Stile für den "zu"-Zustand bestimmt. Dieses Modul bietet die {{cssxref("@starting-style")}} at-rule, die es ermöglicht, Startstile für solche Fälle zu definieren. Das Modul definiert auch, wie diskrete Eigenschaftswerte übergehen sollten, wie zum Beispiel das Überblenden der diskret animierten {{cssxref("display")}} Eigenschaft vom `none` Wert zu einem angezeigten Wert.

## Referenz

### Eigenschaften

- {{cssxref("transition")}}
- {{cssxref("transition-behavior")}}
- {{cssxref("transition-delay")}}
- {{cssxref("transition-duration")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-timing-function")}}

### At-Rules

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

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
  - : Schritt-für-Schritt-Anleitung, die erklärt, wie man Übergänge mit CSS erstellt. Dieser Artikel beschreibt jede relevante CSS-Eigenschaft und erklärt, wie sie miteinander interagieren.
- [Animierung von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display)
  - : Übergang zum und vom `none` Wert der diskret animierten {{cssxref("display")}} Eigenschaft.
- [Übergang eines Popovers](/de/docs/Web/CSS/Reference/Properties/overlay#transitioning_a_popover) und [Übergang eines `<dialog>`](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : Beispiele für Übergänge von {{cssxref("@starting-style")}} zu finalen {{cssxref(":popover-open")}} und {{cssxref(":open")}} Pseudoklassen-Stilen.

## Verwandte Konzepte

- {{cssxref("interpolate-size")}} Eigenschaft
- {{cssxref("calc-size()")}} Funktion
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}} Glossarbegriff

- [CSS-Timing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
  - [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function) Datentyp

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul.
  - {{cssxref("animation")}} Kurzform
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
