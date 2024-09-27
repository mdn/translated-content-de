---
title: "Event: stopPropagation() Methode"
short-title: stopPropagation()
slug: Web/API/Event/stopPropagation
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopPropagation()`**-Methode des [`Event`](/de/docs/Web/API/Event) Interfaces verhindert die weitere Ausbreitung des aktuellen Events in den Erfassungs- und Bubbling-Phasen. Sie verhindert jedoch nicht das Eintreten von Standardverhalten; zum Beispiel werden Klicks auf Links weiterhin verarbeitet. Wenn Sie diese Verhaltensweisen stoppen möchten, siehe die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode. Sie verhindert auch nicht die Ausbreitung zu anderen Event-Handlern des aktuellen Elements. Wenn Sie diese stoppen möchten, siehe [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation).

## Syntax

```js-nolint
event.stopPropagation()
```

### Parameter

Keine.

### Rückgabewert

Keiner.

## Beispiele

Siehe [Event Propagation](/de/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation).
Siehe auch das Beispiel bei [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
