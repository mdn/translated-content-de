---
title: "Event: stopPropagation()-Methode"
short-title: stopPropagation()
slug: Web/API/Event/stopPropagation
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`stopPropagation()`**-Methode der [`Event`](/de/docs/Web/API/Event)-Schnittstelle verhindert die weitere Ausbreitung des aktuellen Ereignisses in den Capturing- und Bubbling-Phasen. Sie verhindert jedoch nicht, dass Standardverhalten auftreten; beispielsweise werden Klicks auf Links weiterhin verarbeitet. Wenn Sie diese Verhaltensweisen stoppen möchten, beachten Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode. Sie verhindert auch nicht die Ausbreitung zu anderen Ereignishandlern des aktuellen Elements. Wenn Sie dies stoppen möchten, beachten Sie [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation).

## Syntax

```js-nolint
stopPropagation()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiele

Siehe [Ereignisausbreitung](/de/docs/Web/API/Document_Object_Model#event_propagation).
Siehe auch das Beispiel bei [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
