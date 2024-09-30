---
title: "WorkerNavigator: hardwareConcurrency Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/WorkerNavigator/hardwareConcurrency
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`navigator.hardwareConcurrency`** gibt die Anzahl der logischen Prozessoren zurück, die auf dem Computer des Benutzers zur Ausführung von Threads verfügbar sind.

## Wert

Eine {{jsxref("Number")}}, die die Anzahl der logischen Prozessorkerne angibt.

Moderne Computer verfügen über mehrere physische Prozessorkerne in ihrer CPU (typischerweise zwei oder vier Kerne), aber jeder physische Kern ist in der Regel auch in der Lage, mehr als einen Thread gleichzeitig mit fortschrittlichen Planungstechniken auszuführen. So kann eine CPU mit vier Kernen beispielsweise acht **logische Prozessorkerne** anbieten. Die Anzahl der logischen Prozessorkerne kann verwendet werden, um die Anzahl der Threads zu messen, die effektiv gleichzeitig ausgeführt werden können, ohne dass sie kontextübergreifend wechseln müssen.

Der Browser kann jedoch entscheiden, eine geringere Anzahl logischer Kerne zu melden, um genauer die Anzahl der [`Worker`](/de/docs/Web/API/Worker) darzustellen, die gleichzeitig ausgeführt werden können. Betrachten Sie dies daher nicht als absolute Messung der Anzahl der Kerne im System des Benutzers.

## Beispiele

In diesem Beispiel wird ein [`Worker`](/de/docs/Web/API/Worker) für jeden vom Browser gemeldeten logischen Prozessor erstellt, und es wird ein Datensatz erstellt, der eine Referenz auf den neuen Worker sowie einen Booleschen Wert enthält, der angibt, ob wir diesen Worker bereits verwenden; Diese Objekte werden wiederum in ein Array für die spätere Verwendung gespeichert. Dies erstellt einen Pool von Workern, den wir später zur Bearbeitung von Anfragen verwenden können.

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
