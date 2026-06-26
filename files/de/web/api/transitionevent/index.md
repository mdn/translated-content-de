---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("CSSOM")}}

Das **`TransitionEvent`** Interface repräsentiert Ereignisse, die Informationen zu [Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)
  - : Erstellt ein `TransitionEvent`-Ereignis mit den gegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-[`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.animation`](/de/docs/Web/API/TransitionEvent/animation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine schreibgeschützte [`CSSTransition`](/de/docs/Web/API/CSSTransition)-Eigenschaft, die die Animation enthält, die mit dem Ereignis verbunden ist.
- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit dem Übergang verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitdauer in Sekunden angibt, wie lange der Übergang bei Auslösung dieses Ereignisses bereits läuft. Dieser Wert wird nicht durch die Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Läuft der Übergang nicht auf einem Pseudoelement, sondern auf dem Element selbst, ist der String leer: `''`.

## Arten von `TransitionEvent`

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) zu Ende gespielt ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) erstellt wird (d.h. wenn er zu einem Satz laufender Übergänge hinzugefügt wird), aber nicht unbedingt gestartet ist.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) begonnen hat.

## Instanzmethoden

_Erbt auch Methoden von seinem Eltern-[`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- CSS-At-Rules: {{cssxref("@starting-style")}}
