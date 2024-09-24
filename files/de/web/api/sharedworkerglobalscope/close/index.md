---
title: "SharedWorkerGlobalScope: close()-Methode"
short-title: close()
slug: Web/API/SharedWorkerGlobalScope/close
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Workers API")}}

Die **`close()`**-Methode der {{domxref("SharedWorkerGlobalScope")}}-Schnittstelle verwirft alle Aufgaben, die in der Ereignisschleife des `SharedWorkerGlobalScope` eingereiht sind, und schließt diesen speziellen Bereich effektiv.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Wenn Sie die Worker-Instanz von innerhalb des Workers selbst schließen möchten, können Sie Folgendes aufrufen:

```js
close();
```

`close()` und `self.close()` sind effektiv gleichwertig — beide stellen dar, dass `close()` innerhalb des inneren Bereichs des Workers aufgerufen wird.

> [!NOTE]
> Es gibt auch eine Möglichkeit, den Worker aus dem Hauptthread zu stoppen: die {{domxref("Worker.terminate")}}-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{domxref("DedicatedWorkerGlobalScope")}}
