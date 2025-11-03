---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{APIRef("CSSOM")}}

Das **`TransitionEvent`**-Interface repräsentiert Ereignisse, die Informationen über [Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)
  - : Erstellt ein `TransitionEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-`Event`_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitspanne angibt, in der die Transition beim Feuern dieses Ereignisses in Sekunden abgelaufen ist. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element ausgeführt wird, ein leerer String: `''`.

## Typen von `TransitionEvent`

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) beendet ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h. wenn sie zu einem Satz laufender Transitions hinzugefügt wird), jedoch nicht unbedingt gestartet wurde.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) begonnen hat zu transizieren.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-`Event`_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- CSS-At-Regeln: {{cssxref("@starting-style")}}
