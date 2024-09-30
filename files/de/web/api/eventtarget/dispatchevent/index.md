---
title: "EventTarget: dispatchEvent()-Methode"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`dispatchEvent()`**-Methode von [`EventTarget`](/de/docs/Web/API/EventTarget) sendet ein [`Event`](/de/docs/Web/API/Event) an das Objekt und ruft dabei (synchron) die betroffenen Ereignislistener in der entsprechenden Reihenfolge auf. Die normalen Regeln der Ereignisverarbeitung (einschließlich der Capturing- und optionalen Bubbling-Phase) gelten auch für manuell mit `dispatchEvent()` ausgelöste Ereignisse.

Ein Aufruf von `dispatchEvent()` ist der letzte Schritt, um ein Ereignis zu _lösen_. Das Ereignis sollte bereits mit einem [`Event()`](/de/docs/Web/API/Event/Event)-Konstruktor erstellt und initialisiert worden sein.

> [!NOTE]
> Beim Aufruf dieser Methode wird die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft auf das aktuelle `EventTarget` initialisiert.

Im Gegensatz zu "nativen" Ereignissen, die vom Browser ausgelöst werden und Ereignishandler asynchron über die [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) aufrufen, ruft `dispatchEvent()` Ereignishandler _synchron_ auf. Alle anwendbaren Ereignishandler werden aufgerufen und kehren zurück, bevor `dispatchEvent()` zurückkehrt.

## Syntax

```js-nolint
dispatchEvent(event)
```

### Parameter

- `event`
  - : Das zu versendende [`Event`](/de/docs/Web/API/Event)-Objekt. Seine [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft wird auf das aktuelle [`EventTarget`](/de/docs/Web/API/EventTarget) gesetzt.

### Rückgabewert

`false`, wenn das `event` abbrechbar ist und mindestens einer der Ereignishandler, der das `event` erhalten hat, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen hat. Andernfalls `true`.

### Ausnahmen

- `InvalidStateError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn der Ereignistyp während der Ereignisinitialisierung nicht angegeben wurde.

> [!WARNING]
> Von Ereignishandlern geworfene Ausnahmen werden als nicht abgefangene Ausnahmen gemeldet. Die Ereignishandler laufen in einem geschachtelten Aufrufstapel; sie blockieren den Anrufer, bis sie abgeschlossen sind, aber Ausnahmen propagieren nicht zum Anrufer.

## Beispiel

Siehe [Ereignisse erstellen und auslösen](/de/docs/Web/Events/Creating_and_triggering_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [Ereignisobjekt-Referenz](/de/docs/Web/API/Event)
