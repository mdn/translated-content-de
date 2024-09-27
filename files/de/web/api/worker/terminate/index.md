---
title: "Worker: terminate()-Methode"
short-title: terminate()
slug: Web/API/Worker/terminate
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Die **`terminate()`**-Methode der [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle beendet den [`Worker`](/de/docs/Web/API/Worker) sofort. Dies bietet dem Worker keine Gelegenheit, seine Vorgänge abzuschließen; er wird sofort gestoppt.

## Syntax

```js-nolint
terminate()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts mithilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors, welches dann sofort beendet wird.

```js
const myWorker = new Worker("worker.js");

myWorker.terminate();
```

> [!NOTE]
> DedicatedWorkers und SharedWorkers können auch von der [`Worker`](/de/docs/Web/API/Worker)-Instanz mit den Methoden [`DedicatedWorkerGlobalScope.close()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close) oder [`SharedWorkerGlobalScope.close()`](/de/docs/Web/API/SharedWorkerGlobalScope/close) gestoppt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`DedicatedWorkerGlobalScope.close()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/close)
- [`SharedWorkerGlobalScope.close()`](/de/docs/Web/API/SharedWorkerGlobalScope/close)
