---
title: "Event: stopPropagation()-Methode"
short-title: stopPropagation()
slug: Web/API/Event/stopPropagation
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopPropagation()`**-Methode des [`Event`](/de/docs/Web/API/Event)-Interfaces verhindert die weitere Ausbreitung des aktuellen Ereignisses in den Erfassungs- und Blasenphasen. Sie verhindert jedoch nicht das Auftreten von Standardverhalten; zum Beispiel werden Klicks auf Links weiterhin verarbeitet. Wenn Sie diese Verhaltensweisen stoppen möchten, beachten Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode. Sie verhindert auch nicht die Ausbreitung auf andere Ereignis-Handler des aktuellen Elements. Wenn Sie diese stoppen möchten, beachten Sie [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation).

## Syntax

```js-nolint
stopPropagation()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

Siehe [Ereignisausbreitung](/de/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation). Siehe auch das Beispiel bei [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
