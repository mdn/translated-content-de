---
title: "SharedWorkerGlobalScope: name-Eigenschaft"
short-title: name
slug: Web/API/SharedWorkerGlobalScope/name
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Workers API")}}

Die **`name`**-Schreibgeschützte Eigenschaft des
{{domxref("SharedWorkerGlobalScope")}}-Interfaces gibt den Namen zurück, der dem
{{domxref("SharedWorker")}} (optional) bei seiner Erstellung gegeben wurde. Dies ist der Name,
den der {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}-Konstruktor übergeben kann,
um eine Referenz auf den {{domxref("SharedWorkerGlobalScope")}} zu erhalten.

## Wert

Ein String.

## Beispiele

Wenn ein Shared Worker mit einem Konstruktor unter Verwendung der Option `name` erstellt wird:

```js
const myWorker = new SharedWorker("worker.js", { name: "mySharedWorker" });
```

wird der {{domxref("SharedWorkerGlobalScope")}} nun den Namen "mySharedWorker" haben,
der durch das Ausführen von

```js
self.name;
```

von innerhalb des Shared Workers zurückgegeben werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SharedWorkerGlobalScope")}}
