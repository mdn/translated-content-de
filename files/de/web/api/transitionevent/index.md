---
title: TransitionEvent
slug: Web/API/TransitionEvent
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("CSSOM")}}

Die **`TransitionEvent`**-Schnittstelle repräsentiert Ereignisse, die Informationen im Zusammenhang mit [Transitions](/de/docs/Web/CSS/Guides/Transitions/Using) bereitstellen.

{{InheritanceDiagram}}

## Konstruktor

- [`TransitionEvent()`](/de/docs/Web/API/TransitionEvent/TransitionEvent)
  - : Erstellt ein `TransitionEvent`-Ereignis mit den gegebenen Parametern.

## Instanz-Eigenschaften

_Erbung von Eigenschaften von ihrem Elternteil [`Event`](/de/docs/Web/API/Event)_

- [`TransitionEvent.animation`](/de/docs/Web/API/TransitionEvent/animation) {{ReadOnlyInline}}
  - : Eine schreibgeschützte [`CSSTransition`](/de/docs/Web/API/CSSTransition)-Eigenschaft, die die Animation enthält, die mit dem Ereignis verbunden ist.
- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, das die Zeit in Sekunden angibt, die die Transition bei Auslösung dieses Ereignisses gelaufen ist. Dieser Wert wird nicht von der Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, beginnend mit `::`, der den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element läuft, ist dies ein leerer String: `''`.

## Arten von `TransitionEvent`

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions) fertig abgespielt ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions) erstellt wird (d.h. wenn sie zu einem Satz laufender Transitions hinzugefügt wird), aber nicht unbedingt gestartet ist.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions) beginnt zu laufen.

## Instanz-Methoden

_Erbung von Methoden von ihrem Elternteil [`Event`](/de/docs/Web/API/Event)_

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions/Using)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- CSS-Regeln: {{cssxref("@starting-style")}}
