---
title: "Navigator: hardwareConcurrency-Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/Navigator/hardwareConcurrency
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`navigator.hardwareConcurrency`**
gibt die Anzahl der logischen Prozessoren zurück, die für das Ausführen von Threads auf dem Computer des Benutzers verfügbar sind.

## Wert

Eine Zahl zwischen 1 und der Anzahl der logischen Prozessoren, die dem Benutzeragenten potenziell zur Verfügung stehen.

Moderne Computer verfügen über mehrere physische Prozessorkerne in ihrer CPU (zwei oder vier Kerne sind typisch), aber jeder physische Kern kann normalerweise auch mehr als einen Thread gleichzeitig ausführen, indem er fortschrittliche Zeitplanungstechniken verwendet. Ein Vier-Kern-CPU könnte zum Beispiel acht **logische Prozessorkerne** bieten. Die Anzahl der logischen Prozessorkerne kann genutzt werden, um die Anzahl der Threads zu messen, die effektiv gleichzeitig ausgeführt werden können, ohne dass diese den Kontext wechseln müssen.

Der Browser kann jedoch auch eine niedrigere Anzahl logischer Kerne melden, um die Anzahl der [`Worker`](/de/docs/Web/API/Worker)s, die gleichzeitig ausgeführt werden können, genauer darzustellen. Daher sollte dies nicht als absolute Messung der Kerne im System des Benutzers betrachtet werden.

## Beispiele

In diesem Beispiel wird ein [`Worker`](/de/docs/Web/API/Worker) für jeden vom Browser gemeldeten logischen Prozessor erstellt und ein Datensatz erstellt, der eine Referenz auf den neuen Worker sowie einen booleschen Wert enthält, der angibt, ob wir diesen Worker bereits verwenden; diese Objekte werden wiederum in einem Array für die spätere Verwendung gespeichert. Dies erzeugt einen Pool von Workern, die wir später zur Bearbeitung von Anfragen verwenden können.

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

- [`Navigator`](/de/docs/Web/API/Navigator)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
