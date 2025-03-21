---
title: "EventTarget: Methode dispatchEvent()"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`dispatchEvent()`**-Methode von [`EventTarget`](/de/docs/Web/API/EventTarget) sendet ein [`Event`](/de/docs/Web/API/Event) an das Objekt und ruft (synchron) die betroffenen Ereignislistener in der entsprechenden Reihenfolge auf. Die normalen Regeln der Ereignisverarbeitung (einschließlich der Capturing- und optionalen Bubbling-Phase) gelten auch für Ereignisse, die manuell mit `dispatchEvent()` ausgelöst werden.

Der Aufruf von `dispatchEvent()` ist der letzte Schritt, um ein Ereignis zu _triggern_. Das Ereignis sollte bereits erstellt und mit einem [`Event()`](/de/docs/Web/API/Event/Event)-Konstruktor initialisiert worden sein.

> [!NOTE]
> Beim Aufruf dieser Methode wird die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft auf den aktuellen `EventTarget` initialisiert.

Im Gegensatz zu "nativen" Ereignissen, die vom Browser ausgelöst werden und Ereignishandler asynchron über die [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) aufrufen, ruft `dispatchEvent()` Ereignishandler _synchron_ auf. Alle anwendbaren Ereignishandler werden aufgerufen und kehren zurück, bevor `dispatchEvent()` zurückkehrt.

## Syntax

```js-nolint
dispatchEvent(event)
```

### Parameter

- `event`
  - : Das zu sendende [`Event`](/de/docs/Web/API/Event)-Objekt. Seine [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft wird auf den aktuellen [`EventTarget`](/de/docs/Web/API/EventTarget) gesetzt.

### Rückgabewert

`false`, wenn `event` abgebrochen werden kann und mindestens einer der Ereignishandler, die `event` empfangen haben, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen hat. Andernfalls `true`.

### Ausnahmen

- `InvalidStateError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Typ des Ereignisses während der Initialisierung des Ereignisses nicht angegeben wurde.

> [!WARNING]
> Von Ereignishandlern ausgelöste Ausnahmen werden als nicht abgefangene Ausnahmen gemeldet. Die Ereignishandler laufen auf einem verschachtelten Aufrufstack; sie blockieren den Aufrufer, bis sie abgeschlossen sind, aber Ausnahmen werden nicht an den Aufrufer weitergeleitet.

## Beispiel

Siehe [Ereignisse erstellen und auslösen](/de/docs/Web/Events/Creating_and_triggering_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [Ereignisobjektreferenz](/de/docs/Web/API/Event)
