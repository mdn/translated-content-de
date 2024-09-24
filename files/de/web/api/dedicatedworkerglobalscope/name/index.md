---
title: "DedicatedWorkerGlobalScope: name-Eigenschaft"
short-title: name
slug: Web/API/DedicatedWorkerGlobalScope/name
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die schreibgeschützte **`name`**-Eigenschaft der Schnittstelle {{domxref("DedicatedWorkerGlobalScope")}} gibt den Namen zurück, der dem {{domxref("Worker")}} (optional) bei seiner Erstellung gegeben wurde. Dies ist der Name, den der {{domxref("Worker.Worker", "Worker()")}}-Konstruktor übergeben kann, um eine Referenz auf den {{domxref("DedicatedWorkerGlobalScope")}} zu erhalten.

## Wert

Ein String.

## Beispiele

Wenn ein Worker mit einem `name`-Parameter im Konstruktor erstellt wird:

```js
const myWorker = new Worker("worker.js", { name: "myWorker" });
```

wird der {{domxref("DedicatedWorkerGlobalScope")}} nun einen Namen "myWorker" haben, der durch Ausführen von

```js
self.name;
```

innerhalb des Workers zurückgegeben werden kann.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("DedicatedWorkerGlobalScope")}}
