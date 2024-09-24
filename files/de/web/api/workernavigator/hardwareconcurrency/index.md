---
title: "WorkerNavigator: hardwareConcurrency-Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/WorkerNavigator/hardwareConcurrency
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`navigator.hardwareConcurrency`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Anzahl der logischen Prozessoren zurückgibt, die auf dem Computer des Benutzers zur Ausführung von Threads verfügbar sind.

## Wert

Eine {{jsxref("Number")}}, die die Anzahl der logischen Prozessorkerne angibt.

Moderne Computer verfügen über mehrere physische Prozessorkerne in ihrer CPU (zwei oder vier Kerne sind typisch), aber jeder physische Kern kann normalerweise mehr als einen Thread gleichzeitig ausführen, indem fortschrittliche Planungstechniken verwendet werden. Ein Vier-Kern-CPU bietet beispielsweise möglicherweise acht **logische Prozessorkerne**. Die Anzahl der logischen Prozessorkerne kann verwendet werden, um die Anzahl der Threads zu messen, die gleichzeitig effektiv ausgeführt werden können, ohne dass sie den Kontext wechseln müssen.

Der Browser kann jedoch entscheiden, eine geringere Anzahl logischer Kerne zu melden, um genauer darzustellen, wie viele {{domxref("Worker")}} tatsächlich gleichzeitig ausgeführt werden können, daher sollte dies nicht als absolute Messung der Anzahl der Kerne im System des Benutzers betrachtet werden.

## Beispiele

In diesem Beispiel wird ein {{domxref("Worker")}} für jeden vom Browser gemeldeten logischen Prozessor erstellt, und es wird ein Datensatz erstellt, der eine Referenz auf den neuen Worker sowie einen booleschen Wert enthält, der angibt, ob wir diesen Worker bereits verwenden oder nicht; diese Objekte werden wiederum in einem Array zur späteren Verwendung gespeichert. Dies schafft einen Pool von Workern, den wir später zur Bearbeitung von Anfragen verwenden können.

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

- {{domxref("WorkerNavigator")}}
