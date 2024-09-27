---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: e21c6c187a1049d29f69eeeedfcfb4843b01569a
---

{{APIRef("CSSOM")}}

Die **`TransitionEvent`**-Schnittstelle stellt Ereignisse dar, die Informationen im Zusammenhang mit [Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)
  - : Erstellt ein `TransitionEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, die die Transition beim Auslösen dieses Ereignisses bereits läuft. Dieser Wert wird nicht von der Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudoelement, sondern auf dem Element läuft, ist es ein leerer String: `''`.

## Typen von `TransitionEvent`

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) fertig abgespielt ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h., wenn sie zu einem Satz laufender Transitionen hinzugefügt wird), obwohl sie nicht unbedingt gestartet wurde.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) begonnen hat zu laufen.

## Instanzmethoden

_Erbt auch Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transitions verwenden](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- CSS-Regeln: {{cssxref("@starting-style")}}
