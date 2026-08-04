---
title: "DedicatedWorkerGlobalScope: close()-Methode"
short-title: close()
slug: Web/API/DedicatedWorkerGlobalScope/close
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`close()`**-Methode des [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Interfaces verwirft alle Aufgaben, die in der Ereignisschleife des `DedicatedWorkerGlobalScope` eingereiht sind, und schließt diesen speziellen Bereich effektiv.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Wenn Sie Ihre Worker-Instanz von innerhalb des Workers selbst schließen möchten, können Sie Folgendes aufrufen:

```js
close();
```

`close()` und `self.close()` sind effektiv gleichwertig — beide stellen dar, dass `close()` von innerhalb des inneren Bereichs des Workers aufgerufen wird.

> [!NOTE]
> Es gibt auch eine Möglichkeit, den Worker aus dem Hauptthread zu stoppen: die [`Worker.terminate`](/de/docs/Web/API/Worker/terminate)-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
