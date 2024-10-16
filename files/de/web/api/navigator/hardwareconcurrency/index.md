---
title: "Navigator: hardwareConcurrency-Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/Navigator/hardwareConcurrency
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die **`navigator.hardwareConcurrency`**-Eigenschaft ist nur lesbar und gibt die Anzahl der logischen Prozessoren zurück, die zur Ausführung von Threads auf dem Computer des Benutzers verfügbar sind.

## Wert

Eine Zahl zwischen 1 und der Anzahl der logischen Prozessoren, die dem Benutzeragenten potenziell zur Verfügung stehen.

Moderne Computer haben mehrere physische Prozessorkerne in ihrer CPU (typischerweise zwei oder vier Kerne), aber jeder physische Kern ist normalerweise auch in der Lage, mehr als einen Thread gleichzeitig auszuführen, indem fortschrittliche Planungstechniken verwendet werden. Ein Vier-Kern-CPU kann beispielsweise acht **logische Prozessorkerne** bieten. Die Anzahl der logischen Prozessorkerne kann verwendet werden, um die Anzahl der Threads zu messen, die effektiv gleichzeitig ausgeführt werden können, ohne dass zwischen den Kontexten gewechselt werden muss.

Der Browser kann jedoch entscheiden, eine niedrigere Anzahl logischer Kerne zu melden, um genauer die Anzahl der [`Worker`](/de/docs/Web/API/Worker) darzustellen, die gleichzeitig ausgeführt werden können. Betrachten Sie dies daher nicht als absolute Messung der Anzahl der Kerne im System des Benutzers.

## Beispiele

In diesem Beispiel wird für jeden vom Browser gemeldeten logischen Prozessor ein [`Worker`](/de/docs/Web/API/Worker) erstellt, und es wird ein Datensatz erstellt, der eine Referenz auf den neuen Worker sowie einen booleschen Wert enthält, der angibt, ob wir diesen Worker bereits verwenden oder nicht. Diese Objekte werden wiederum in einem Array für die spätere Verwendung gespeichert. Dadurch wird ein Pool von Workern erstellt, den wir später zur Bearbeitung von Anforderungen nutzen können.

```js
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
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

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
