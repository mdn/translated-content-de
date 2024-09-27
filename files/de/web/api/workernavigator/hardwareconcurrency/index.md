---
title: "WorkerNavigator: hardwareConcurrency Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/WorkerNavigator/hardwareConcurrency
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`navigator.hardwareConcurrency`** gibt die Anzahl der logischen Prozessoren zurück, die auf dem Computer des Benutzers für die Ausführung von Threads zur Verfügung stehen.

## Wert

Eine {{jsxref("Number")}}, die die Anzahl der logischen Prozessorkerne angibt.

Moderne Computer haben mehrere physische Prozessorkerne in ihrer CPU (zwei oder vier Kerne sind typisch), aber jeder physische Kern kann in der Regel mehr als einen Thread gleichzeitig mit fortschrittlichen Planungstechniken ausführen. Ein Vier-Kern-Prozessor bietet beispielsweise acht **logische Prozessorkerne**. Die Anzahl der logischen Prozessorkerne kann verwendet werden, um die Anzahl der Threads zu messen, die effektiv gleichzeitig ausgeführt werden können, ohne dass sie kontextbezogen umgeschaltet werden müssen.

Der Browser kann jedoch entscheiden, eine niedrigere Anzahl von logischen Kernen zu melden, um genauer darzustellen, wie viele [`Worker`](/de/docs/Web/API/Worker) tatsächlich gleichzeitig ausgeführt werden können, daher sollte dies nicht als absolute Messung der Anzahl der Kerne im System des Benutzers betrachtet werden.

## Beispiele

In diesem Beispiel wird für jeden vom Browser gemeldeten logischen Prozessor ein [`Worker`](/de/docs/Web/API/Worker) erstellt, und ein Datensatz wird erstellt, der eine Referenz auf den neuen Worker sowie einen Boolean-Wert enthält, der angibt, ob wir diesen Worker bereits verwenden; diese Objekte werden wiederum in ein Array für die spätere Verwendung gespeichert. Dies erzeugt einen Pool von Workern, die wir später zur Bearbeitung von Anfragen verwenden können.

Der folgende Code kann in einem Worker ausgeführt werden:

```js
let workerList = [];

for (let i = 0; i < navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker("cpuworker.js"),
    inUse: false,
  };
  workerList.push(newWorker);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
