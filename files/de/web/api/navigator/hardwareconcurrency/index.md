---
title: "Navigator: hardwareConcurrency-Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/Navigator/hardwareConcurrency
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`navigator.hardwareConcurrency`** gibt die Anzahl der logischen Prozessoren zurück, die zum Ausführen von Threads auf dem Computer des Benutzers verfügbar sind.

## Wert

Eine Zahl zwischen 1 und der Anzahl der potenziell verfügbaren logischen Prozessoren für den Benutzeragenten.

Moderne Computer haben mehrere physische Prozessor-Kerne in ihrer CPU (zwei oder vier Kerne sind typisch), aber jeder physische Kern kann in der Regel mehr als einen Thread gleichzeitig ausführen, indem fortschrittliche Planungstechniken verwendet werden. Ein Vier-Kern-CPU kann beispielsweise acht **logische Prozessorkerne** bieten. Die Anzahl der logischen Prozessorkerne kann verwendet werden, um die Anzahl der Threads zu messen, die effektiv gleichzeitig ausgeführt werden können, ohne dass Kontextwechsel erforderlich sind.

Der Browser kann jedoch eine niedrigere Anzahl logischer Kerne angeben, um genauer die Anzahl der gleichzeitig ausführbaren {{domxref("Worker")}} darzustellen, daher sollten Sie dies nicht als absolute Messung der Anzahl der Kerne im System des Benutzers betrachten.

## Beispiele

In diesem Beispiel wird für jeden vom Browser gemeldeten logischen Prozessor ein {{domxref("Worker")}} erstellt, und ein Datensatz erstellt, der einen Verweis auf den neuen Worker sowie einen Booleschen Wert enthält, der angibt, ob wir diesen Worker bereits verwenden; diese Objekte werden wiederum in ein Array für den späteren Gebrauch gespeichert. Dies erstellt einen Pool von Workern, die wir später zur Bearbeitung von Anfragen verwenden können.

```js
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
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

- {{domxref("Navigator")}}
- {{domxref("WorkerNavigator")}}
