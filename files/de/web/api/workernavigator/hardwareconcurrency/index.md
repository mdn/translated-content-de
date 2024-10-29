---
title: "WorkerNavigator: hardwareConcurrency-Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/WorkerNavigator/hardwareConcurrency
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die **`navigator.hardwareConcurrency`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Anzahl der logischen Prozessoren zurückgibt, die für das Ausführen von Threads auf dem Computer des Benutzers verfügbar sind.

## Wert

Eine {{jsxref("Number")}}, die die Anzahl der logischen Prozessorkerne angibt.

Moderne Computer haben mehrere physische Prozessorkerne in ihrer CPU (üblicherweise zwei oder vier Kerne), aber jeder physische Kern kann normalerweise mehr als einen Thread gleichzeitig ausführen, indem er fortschrittliche Planungstechniken verwendet. Ein Vier-Kern-CPU könnte zum Beispiel acht **logische Prozessorkerne** bieten. Die Anzahl der logischen Prozessorkerne kann verwendet werden, um zu messen, wie viele Threads effektiv gleichzeitig ausgeführt werden können, ohne dass sie ihren Kontext wechseln müssen.

Der Browser kann jedoch entscheiden, eine niedrigere Anzahl logischer Kerne anzugeben, um genauer darzustellen, wie viele [`Worker`](/de/docs/Web/API/Worker)s tatsächlich gleichzeitig laufen können. Daher sollten Sie dies nicht als absolute Messung der Anzahl der Kerne im System des Benutzers ansehen.

## Beispiele

In diesem Beispiel wird für jeden logischen Prozessor, den der Browser meldet, ein [`Worker`](/de/docs/Web/API/Worker) erstellt und es wird ein Datensatz erstellt, der eine Referenz auf den neuen Worker sowie einen Boolean-Wert enthält, der angibt, ob wir diesen Worker bereits verwenden. Diese Objekte werden wiederum in einem Array gespeichert, das später verwendet wird. Dies erzeugt einen Pool von Workern, die wir später zur Bearbeitung von Anfragen nutzen können.

Der folgende Code kann in einem Worker ausgeführt werden:

```js
let workerList = [];

for (let i = 0; i < navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker("cpu-worker.js"),
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
