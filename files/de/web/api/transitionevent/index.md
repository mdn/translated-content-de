---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: e21c6c187a1049d29f69eeeedfcfb4843b01569a
---

{{APIRef("CSSOM")}}

Die **`TransitionEvent`** Schnittstelle repräsentiert Ereignisse, die Informationen im Zusammenhang mit [Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}}
  - : Erstellt ein `TransitionEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen der mit der Transition verbundenen CSS-Eigenschaft enthält.
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Ein `float`, der die Dauer angibt, die seit Beginn der Transition in Sekunden vergangen ist, als dieses Ereignis ausgelöst wurde. Dieser Wert wird nicht von der {{cssxref("transition-delay")}} Eigenschaft beeinflusst.
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Falls die Transition nicht auf einem Pseudoelement, sondern auf dem Element läuft, ein leerer String: `''`.

## Typen von `TransitionEvent`

- {{domxref("Element/transitioncancel_event", "transitioncancel")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- {{domxref("Element/transitionend_event", "transitionend")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) abgeschlossen ist.
- {{domxref("Element/transitionrun_event", "transitionrun")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d. h., wenn sie zu einem Satz laufender Transitions hinzugefügt wird), allerdings nicht unbedingt gestartet.
- {{domxref("Element/transitionstart_event", "transitionstart")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions) beginnt zu transitionieren.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil {{domxref("Event")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- CSS-Regeln: {{cssxref("@starting-style")}}
