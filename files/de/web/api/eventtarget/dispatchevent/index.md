---
title: "EventTarget: Methode dispatchEvent()"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: c615fed2b0c23b4c107d854485ced0d4e1e1e092
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`dispatchEvent()`**-Methode des [`EventTarget`](/de/docs/Web/API/EventTarget) sendet ein [`Event`](/de/docs/Web/API/Event) an das Objekt und ruft dabei (synchron) die betroffenen Event-Listener in der richtigen Reihenfolge auf. Die normalen Regeln der Ereignisverarbeitung (einschließlich der Capturing- und optionalen Bubbling-Phase) gelten auch für manuell mit `dispatchEvent()` gesendete Events.

Ein Aufruf von `dispatchEvent()` ist der letzte Schritt beim _Auslösen eines Events_. Das Ereignis sollte bereits erstellt und mit einem [`Event()`](/de/docs/Web/API/Event/Event)-Konstruktor initialisiert worden sein.

> [!NOTE]
> Beim Aufruf dieser Methode wird die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft auf die aktuelle `EventTarget` initialisiert.

Im Gegensatz zu "nativen" Ereignissen, die der Browser durch das Einreihen einer Aufgabe in die [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model#job_queue_and_event_loop) auslöst, ruft `dispatchEvent()` alle anwendbaren Event-Handler synchron auf, bevor es zurückkehrt. Die schreibgeschützte [`isTrusted`](/de/docs/Web/API/Event/isTrusted)-Eigenschaft ist `true` für native Ereignisse und `false` für Ereignisse, die mit `dispatchEvent()` gesendet wurden.

## Syntax

```js-nolint
dispatchEvent(event)
```

### Parameter

- `event`
  - : Das zu sendende [`Event`](/de/docs/Web/API/Event)-Objekt. Seine [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft wird auf das aktuelle [`EventTarget`](/de/docs/Web/API/EventTarget) gesetzt.

### Rückgabewert

`false`, wenn das `event` abbrechbar ist und mindestens einer der Event-Handler, die das `event` erhalten haben, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen hat. Andernfalls `true`.

### Ausnahmen

- `InvalidStateError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Ereignistyp während der Ereignisinitialisierung nicht angegeben wurde.

> [!WARNING]
> Ausnahmen, die von Event-Handlern geworfen werden, werden als nicht abgefangene Ausnahmen gemeldet. Die Event-Handler laufen in einem verschachtelten Aufrufstapel; sie blockieren den Aufrufer, bis sie abgeschlossen sind, aber Ausnahmen werden nicht an den Aufrufer weitergegeben.

## Beispiel

Siehe [Ereignisse erstellen und auslösen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [Referenz zum Event-Objekt](/de/docs/Web/API/Event)
