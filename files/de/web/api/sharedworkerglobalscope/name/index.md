---
title: "SharedWorkerGlobalScope: name-Eigenschaft"
short-title: name
slug: Web/API/SharedWorkerGlobalScope/name
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Workers API")}}

Die schreibgeschützte **`name`**-Eigenschaft der [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)-Schnittstelle gibt den Namen zurück, der dem [`SharedWorker`](/de/docs/Web/API/SharedWorker) bei seiner Erstellung (optional) zugewiesen wurde. Dies ist der Name, den der [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor übergeben kann, um eine Referenz zum [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) zu erhalten.

## Wert

Ein String.

## Beispiele

Wenn ein Shared Worker mit einem Konstruktor mit einer `name`-Option erstellt wird:

```js
const myWorker = new SharedWorker("worker.js", { name: "mySharedWorker" });
```

wird der [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) jetzt den Namen "mySharedWorker" haben, der durch Ausführen von

```js
self.name;
```

von innerhalb des Shared Workers zurückgegeben werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
