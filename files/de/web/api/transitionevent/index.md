---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: e21c6c187a1049d29f69eeeedfcfb4843b01569a
---

{{APIRef("CSSOM")}}

Das **`TransitionEvent`** Interface repräsentiert Ereignisse, die Informationen im Zusammenhang mit [Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)
  - : Erstellt ein `TransitionEvent` Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die dem Übergang zugeordnet ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitdauer angibt, die der Übergang beim Auslösen dieses Ereignisses läuft, in Sekunden. Dieser Wert wird nicht von der Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn der Übergang nicht auf einem Pseudo-Element, sondern auf dem Element läuft, ein leerer String: `''`.

## Arten von `TransitionEvent`

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgeschlossen ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h. wenn er zu einem Satz von laufenden Übergängen hinzugefügt wird), jedoch nicht unbedingt gestartet wird.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) das Übergangsstadium erreicht.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- CSS-Regeln: {{cssxref("@starting-style")}}
