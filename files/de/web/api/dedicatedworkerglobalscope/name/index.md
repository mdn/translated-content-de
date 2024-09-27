---
title: "DedicatedWorkerGlobalScope: name-Eigenschaft"
short-title: name
slug: Web/API/DedicatedWorkerGlobalScope/name
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`name`**-Eigenschaft der Schnittstelle [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) ist eine schreibgeschützte Eigenschaft, die den Namen zurückgibt, den der [`Worker`](/de/docs/Web/API/Worker) (optional) beim Erstellen erhalten hat. Dies ist der Name, den der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor übergeben kann, um eine Referenz auf den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) zu erhalten.

## Wert

Ein String.

## Beispiele

Wenn ein Worker mit einem Konstruktor mit einer `name`-Option erstellt wird:

```js
const myWorker = new Worker("worker.js", { name: "myWorker" });
```

wird der [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) nun den Namen "myWorker" haben, der durch Ausführen von

```js
self.name;
```

innerhalb des Workers zurückgegeben werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
