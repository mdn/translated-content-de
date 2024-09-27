---
title: "Navigator: hardwareConcurrency-Eigenschaft"
short-title: hardwareConcurrency
slug: Web/API/Navigator/hardwareConcurrency
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`navigator.hardwareConcurrency`** gibt die Anzahl der logischen Prozessoren zurück, die auf dem Computer des Benutzers für das Ausführen von Threads verfügbar sind.

## Wert

Eine Zahl zwischen 1 und der Anzahl der logischen Prozessoren, die potenziell für den User-Agent verfügbar sind.

Moderne Computer haben mehrere physische Prozessorkerne in ihrer CPU (zwei oder vier Kerne sind typisch), aber jeder physische Kern kann normalerweise mehr als einen Thread gleichzeitig mit fortschrittlichen Planungstechniken ausführen. So kann eine CPU mit vier Kernen beispielsweise acht **logische Prozessorkerne** bieten. Die Anzahl der logischen Prozessorkerne kann verwendet werden, um die Anzahl der Threads zu messen, die effektiv gleichzeitig ausgeführt werden können, ohne dass sie kontextuell wechseln müssen.

Der Browser kann jedoch wählen, eine niedrigere Anzahl logischer Kerne zu melden, um genauer die Anzahl der [`Worker`](/de/docs/Web/API/Worker) darzustellen, die gleichzeitig ausgeführt werden können. Daher sollten Sie dies nicht als absolute Messung der Anzahl der Kerne im System des Benutzers betrachten.

## Beispiele

In diesem Beispiel wird ein [`Worker`](/de/docs/Web/API/Worker) für jeden vom Browser gemeldeten logischen Prozessor erstellt, und ein Datensatz wird erstellt, der eine Referenz auf den neuen Worker sowie einen booleschen Wert enthält, der angibt, ob wir diesen Worker bereits nutzen oder nicht; diese Objekte werden ihrerseits in einem Array für die spätere Verwendung gespeichert. Dies erstellt einen Pool von Workern, den wir später zur Bearbeitung von Anfragen nutzen können.

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
