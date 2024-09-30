---
title: "SharedWorkerGlobalScope: close()-Methode"
short-title: close()
slug: Web/API/SharedWorkerGlobalScope/close
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Workers API")}}

Die **`close()`**-Methode des [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)-Interfaces verwirft alle Aufgaben, die in der Ereignisschleife des `SharedWorkerGlobalScope` eingereiht sind, und schließt diesen spezifischen Bereich effektiv.

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

`close()` und `self.close()` sind effektiv gleichwertig — beide stellen `close()` dar, das im inneren Bereich des Workers aufgerufen wird.

> [!NOTE]
> Es gibt auch eine Möglichkeit, den Worker aus dem Hauptthread zu stoppen: die [`Worker.terminate`](/de/docs/Web/API/Worker/terminate)-Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
