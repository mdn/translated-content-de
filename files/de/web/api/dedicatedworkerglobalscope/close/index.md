---
title: "DedicatedWorkerGlobalScope: close()-Methode"
short-title: close()
slug: Web/API/DedicatedWorkerGlobalScope/close
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`close()`**-Methode des [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Interfaces verwirft alle Aufgaben, die in der Ereignisschleife des `DedicatedWorkerGlobalScope` anstehen, und schließt diesen speziellen Bereich effektiv.

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

`close()` und `self.close()` sind effektiv gleichwertig — beide repräsentieren den Aufruf von `close()` innerhalb des inneren Bereichs des Workers.

> [!NOTE]
> Es gibt auch eine Möglichkeit, den Worker aus dem Hauptthread zu stoppen: die [`Worker.terminate`](/de/docs/Web/API/Worker/terminate)-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
