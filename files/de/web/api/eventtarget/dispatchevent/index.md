---
title: "EventTarget: Methode dispatchEvent()"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`dispatchEvent()`**-Methode von [`EventTarget`](/de/docs/Web/API/EventTarget) sendet ein [`Event`](/de/docs/Web/API/Event) an das Objekt und ruft (synchron) die betroffenen Ereignislistener in der entsprechenden Reihenfolge auf. Die normalen Ereignisverarbeitungsregeln (einschließlich der Erfassungs- und optionalen Bubbling-Phase) gelten auch für Ereignisse, die manuell mit `dispatchEvent()` ausgelöst werden.

Der Aufruf von `dispatchEvent()` ist der letzte Schritt beim _Auslösen eines Ereignisses_. Das Ereignis sollte bereits mithilfe eines [`Event()`](/de/docs/Web/API/Event/Event)-Konstruktors erstellt und initialisiert worden sein.

> [!NOTE]
> Beim Aufruf dieser Methode wird die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft auf das aktuelle `EventTarget` initialisiert.

Im Gegensatz zu "nativen" Ereignissen, die vom Browser ausgelöst werden und Ereignishandler asynchron über die [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) aufrufen, ruft `dispatchEvent()` Ereignishandler _synchron_ auf. Alle zutreffenden Ereignishandler werden aufgerufen und geben zurück, bevor `dispatchEvent()` zurückkehrt.

## Syntax

```js-nolint
dispatchEvent(event)
```

### Parameter

- `event`
  - : Das zu versendende [`Event`](/de/docs/Web/API/Event)-Objekt. Seine [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft wird auf das aktuelle [`EventTarget`](/de/docs/Web/API/EventTarget) gesetzt.

### Rückgabewert

`false`, wenn `event` abbruchfähig ist und mindestens einer der Ereignishandler, der `event` erhielt, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen hat. Andernfalls `true`.

### Ausnahmen

- `InvalidStateError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Typ des Ereignisses bei der Initialisierung des Ereignisses nicht angegeben wurde.

> [!WARNING]
> Ausnahmen, die von Ereignishandlern ausgelöst werden, werden als nicht abgefangene Ausnahmen gemeldet. Die Ereignishandler laufen auf einem verschachtelten Aufrufstapel; sie blockieren den Aufrufer, bis sie abgeschlossen sind, aber Ausnahmen werden nicht an den Aufrufer weitergegeben.

## Beispiel

Siehe [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [Ereignisobjekt-Referenz](/de/docs/Web/API/Event)
