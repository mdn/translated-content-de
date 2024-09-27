---
title: "SharedWorkerGlobalScope: name-Eigenschaft"
short-title: name
slug: Web/API/SharedWorkerGlobalScope/name
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Workers API")}}

Die schreibgeschützte Eigenschaft **`name`** der Schnittstelle [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) gibt den Namen zurück, der dem [`SharedWorker`](/de/docs/Web/API/SharedWorker) (optional) bei seiner Erstellung gegeben wurde. Dies ist der Name, den der [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)-Konstruktor verwenden kann, um eine Referenz auf den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) zu erhalten.

## Wert

Ein String.

## Beispiele

Wenn ein Shared Worker mit einem Konstruktor mit einer `name`-Option erstellt wird:

```js
const myWorker = new SharedWorker("worker.js", { name: "mySharedWorker" });
```

wird der [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) nun einen Namen "mySharedWorker" haben, der durch Ausführen von

```js
self.name;
```

aus dem Inneren des Shared Workers zurückgebbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
