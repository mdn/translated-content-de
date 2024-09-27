---
title: "EventTarget: dispatchEvent()-Methode"
short-title: dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`dispatchEvent()`**-Methode von [`EventTarget`](/de/docs/Web/API/EventTarget) sendet ein [`Event`](/de/docs/Web/API/Event) an das Objekt und ruft dabei (synchron) die betroffenen Ereignis-Listener in der entsprechenden Reihenfolge auf. Die normalen Ereignisverarbeitungsregeln (einschließlich der Erfassungs- und optionalen Blasphase) gelten auch für Ereignisse, die manuell mit `dispatchEvent()` ausgelöst werden.

Der Aufruf von `dispatchEvent()` ist der letzte Schritt zum _Auslösen eines Ereignisses_. Das Ereignis sollte bereits erstellt und mit einem [`Event()`](/de/docs/Web/API/Event/Event) Konstruktor initialisiert worden sein.

> [!NOTE]
> Beim Aufruf dieser Methode wird die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft auf das aktuelle `EventTarget` initialisiert.

Im Gegensatz zu "nativen" Ereignissen, die vom Browser ausgelöst werden und Ereignishandler asynchron über die [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) aufrufen, ruft `dispatchEvent()` Ereignishandler _synchron_ auf. Alle anwendbaren Ereignishandler werden aufgerufen und abgeschlossen, bevor `dispatchEvent()` zurückkehrt.

## Syntax

```js-nolint
dispatchEvent(event)
```

### Parameter

- `event`
  - : Das zu versendende [`Event`](/de/docs/Web/API/Event)-Objekt. Seine [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft wird auf das aktuelle [`EventTarget`](/de/docs/Web/API/EventTarget) gesetzt.

### Rückgabewert

`false`, wenn `event` abbruchfähig ist und mindestens einer der Ereignishandler, der `event` erhalten hat, [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen hat. Andernfalls `true`.

### Ausnahmen

- `InvalidStateError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn der Ereignistyp während der Ereignisinitialisierung nicht angegeben wurde.

> [!WARNING]
> Von Ereignishandlern ausgelöste Ausnahmen werden als unbehandelte Ausnahmen gemeldet. Die Ereignishandler laufen in einem verschachtelten Aufrufstapel; sie blockieren den Aufrufer, bis sie abgeschlossen sind, aber Ausnahmen breiten sich nicht zum Aufrufer aus.

## Beispiel

Siehe [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [Ereignisobjekt-Referenz](/de/docs/Web/API/Event)
