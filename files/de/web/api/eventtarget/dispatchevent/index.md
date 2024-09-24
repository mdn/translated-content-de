---
title: "EventTarget: dispatchEvent() Methode"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`dispatchEvent()`** Methode des {{domxref("EventTarget")}} sendet ein {{domxref("Event")}} an das Objekt und ruft (synchron) die betroffenen Ereignislistener in der entsprechenden Reihenfolge auf. Die normalen Regeln der Ereignisverarbeitung (einschließlich der Erfassungs- und optionalen Bubbling-Phase) gelten auch für Ereignisse, die manuell mit `dispatchEvent()` gesendet werden.

Der Aufruf von `dispatchEvent()` ist der letzte Schritt, um ein Ereignis _auszulösen_. Das Ereignis sollte bereits erstellt und mit einem {{domxref("Event/Event", "Event()")}} Konstruktor initialisiert worden sein.

> [!NOTE]
> Beim Aufruf dieser Methode wird die Eigenschaft {{domxref("Event.target")}} auf das aktuelle `EventTarget` initialisiert.

Im Gegensatz zu "nativen" Ereignissen, die vom Browser ausgelöst werden und Ereignis-Handler asynchron über die [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) aufrufen, ruft `dispatchEvent()` Ereignis-Handler _synchron_ auf. Alle anwendbaren Ereignis-Handler werden aufgerufen und geben zurück, bevor `dispatchEvent()` zurückkehrt.

## Syntax

```js-nolint
dispatchEvent(event)
```

### Parameter

- `event`
  - : Das zu versendende {{domxref("Event")}} Objekt. Seine {{domxref("Event.target")}} Eigenschaft wird auf das aktuelle {{domxref("EventTarget")}} gesetzt.

### Rückgabewert

`false`, wenn `event` abbrechbar ist und mindestens einer der Ereignis-Handler, der `event` erhalten hat, {{domxref("Event.preventDefault()")}} aufgerufen hat. Andernfalls `true`.

### Ausnahmen

- `InvalidStateError` {{domxref("DomException")}}
  - : Wird ausgelöst, wenn der Ereignistyp während der Ereignisinitialisierung nicht angegeben wurde.

> [!WARNING]
> Ausnahmen, die von Ereignis-Handlern geworfen werden, werden als nicht abgefangene Ausnahmen gemeldet. Die Ereignis-Handler laufen auf einem geschachtelten Aufrufstack; sie blockieren den Aufrufer, bis sie abgeschlossen sind, aber Ausnahmen werden nicht an den Aufrufer weitergegeben.

## Beispiel

Siehe [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [Ereignis-Objekt-Referenz](/de/docs/Web/API/Event)
