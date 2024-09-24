---
title: "Event: Methode stopPropagation()"
short-title: stopPropagation()
slug: Web/API/Event/stopPropagation
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopPropagation()`**-Methode des {{domxref("Event")}}-Interfaces verhindert die weitere Weitergabe des aktuellen Ereignisses in den Erfassungs- und Bubble-Phasen. Es verhindert jedoch nicht, dass Standardverhalten auftreten; zum Beispiel werden Klicks auf Links weiterhin verarbeitet. Wenn Sie diese Verhaltensweisen stoppen möchten, sollten Sie die Methode {{domxref("Event.preventDefault", "preventDefault()")}} verwenden. Es verhindert auch nicht die Weitergabe an andere Event-Handler des aktuellen Elements. Wenn Sie diese stoppen möchten, betrachten Sie {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}.

## Syntax

```js-nolint
event.stopPropagation()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

Siehe [Ereignisweitergabe](/de/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation).
Siehe auch das Beispiel bei {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}};

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
