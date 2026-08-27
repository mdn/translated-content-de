---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("CSSOM")}}

Das **`TransitionEvent`** Interface repräsentiert Ereignisse, die Informationen zu [Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)
  - : Erstellt ein `TransitionEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.animation`](/de/docs/Web/API/TransitionEvent/animation) {{ReadOnlyInline}}
  - : Eine schreibgeschützte [`CSSTransition`](/de/docs/Web/API/CSSTransition) Eigenschaft, die die Animation enthält, die mit dem Ereignis verbunden ist.
- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit dem Übergang verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Laufzeit des Übergangs in Sekunden angibt, wenn dieses Ereignis ausgelöst wurde. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, beginnend mit `::`, der den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn der Übergang nicht auf einem Pseudoelement, sondern auf dem Element ausgeführt wird, ein leerer String: `''`.

## Arten von `TransitionEvent`

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) beendet ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) erstellt wird (d.h. wenn er zu einer Menge von ausgeführten Übergängen hinzugefügt wird), aber nicht unbedingt gestartet.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) begonnen hat.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- CSS-At-Regeln: {{cssxref("@starting-style")}}
