---
title: CSS-Übergänge
short-title: Transitions
slug: Web/CSS/Guides/Transitions
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS-Übergänge** Modul legt die Funktionalität fest, um allmähliche Übergänge zwischen unterschiedlichen CSS-Property-Werten zu erstellen. Das Verhalten dieser Übergänge kann durch die Angabe ihrer "Easing-Funktion", Dauer und anderer Werte gesteuert werden.

Normalerweise, wenn sich der Wert einer CSS-Property ändert, erfolgt die Änderung vom alten zum neuen Wert sofort. Das CSS-Übergänge Modul ermöglicht es, einen Übergang vom alten Zustand der Property zu dem neuen über einen bestimmten Zeitraum zu steuern. Es bietet auch Ereignishandler, um Code als Reaktion auf verschiedene Übergangsphasen auszuführen.

In bestimmten Fällen gibt es keinen Ausgangswert "from" für einen Übergang. Beispielsweise, wenn ein Element zum DOM hinzugefügt wird, sind die definierten Stile für den "to"-Zustand. Dieses Modul stellt die {{cssxref("@starting-style")}} Regel bereit, die es ermöglicht, Startstile für solche Fälle zu definieren. Das Modul definiert auch, wie diskrete Property-Werte übergangen werden sollten, wie zum Beispiel das Übergang der diskret animierten {{cssxref("display")}} Property vom `none` Wert zu einem angezeigten Wert.

## Referenz

### Properties

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

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
  - : Schritt-für-Schritt-Anleitung zur Erstellung von Übergängen mit CSS. Dieser Artikel beschreibt jede relevante CSS-Property und erklärt, wie sie miteinander interagieren.
- [Animation von `display`](/de/docs/Web/CSS/Reference/Properties/display#animating_display)
  - : Übergang zu und von dem `none` Wert der diskret animierten {{cssxref("display")}} Property.
- [Übergang eines Popovers](/de/docs/Web/CSS/Reference/Properties/overlay#transitioning_a_popover) und [Übergang eines `<dialog>`](/de/docs/Web/HTML/Reference/Elements/dialog#transitioning_dialog_elements)
  - : Beispiele für den Übergang von {{cssxref("@starting-style")}} zu endgültigen {{cssxref(":popover-open")}} und {{cssxref(":open")}} Pseudo-Klasse Stilen.

## Verwandte Konzepte

- {{cssxref("interpolate-size")}} Property
- {{cssxref("calc-size()")}} Funktion
- {{Glossary("Intrinsic_size", "Intrinsische Größe")}} Glossar-Begriff

- [CSS-Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul:
  - {{cssxref("easing-function")}} Datentyp

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul:
  - {{cssxref("animation")}} Kurzschreibweise
  - {{cssxref("animation-delay")}}
  - {{cssxref("animation-direction")}}
  - {{cssxref("animation-duration")}}
  - {{cssxref("animation-fill-mode")}}
  - {{cssxref("animation-iteration-count")}}
  - {{cssxref("animation-name")}}
  - {{cssxref("animation-play-state")}}
  - {{cssxref("animation-timing-function")}}

- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul:
  - {{cssxref("transform")}}
  - {{cssxref("transform-box")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("transform-style")}}

- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul:
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
