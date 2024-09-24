---
title: "DedicatedWorkerGlobalScope: close()-Methode"
short-title: close()
slug: Web/API/DedicatedWorkerGlobalScope/close
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`close()`**-Methode des {{domxref("DedicatedWorkerGlobalScope")}}-Interfaces verwirft alle Aufgaben, die in der Ereignisschleife des `DedicatedWorkerGlobalScope` eingereiht sind, und schließt diesen speziellen Bereich effektiv.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Wenn Sie Ihre Worker-Instanz von innerhalb des Workers selbst schließen möchten, können Sie Folgendes aufrufen:

```js
close();
```

`close()` und `self.close()` sind effektiv gleichwertig — beide stellen `close()` dar, das von innerhalb des inneren Bereichs des Workers aufgerufen wird.

> [!NOTE]
> Es gibt auch eine Möglichkeit, den Worker vom Hauptthread zu stoppen: Die {{domxref("Worker.terminate")}}-Methode.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

{{domxref("DedicatedWorkerGlobalScope")}}
