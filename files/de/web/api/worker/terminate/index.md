---
title: "Worker: terminate() Methode"
short-title: terminate()
slug: Web/API/Worker/terminate
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`terminate()`**-Methode der {{domxref("Worker")}}-Schnittstelle beendet sofort den {{domxref("Worker")}}. Dies bietet dem Worker keine Möglichkeit, seine Operationen abzuschließen; er wird sofort gestoppt.

## Syntax

```js-nolint
terminate()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code-Schnipsel zeigt die Erstellung eines {{domxref("Worker")}}-Objekts mittels des {{domxref("Worker.Worker", "Worker()")}}-Konstruktors, das dann sofort beendet wird.

```js
const myWorker = new Worker("worker.js");

myWorker.terminate();
```

> [!NOTE]
> DedicatedWorkers und SharedWorkers können auch aus der {{domxref("Worker")}}-Instanz mithilfe der Methoden {{domxref("DedicatedWorkerGlobalScope.close()")}} oder {{domxref("SharedWorkerGlobalScope.close()")}} gestoppt werden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Worker")}}-Schnittstelle
- {{domxref("DedicatedWorkerGlobalScope.close()")}}
- {{domxref("SharedWorkerGlobalScope.close()")}}
