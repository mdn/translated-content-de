---
title: "SharedWorkerGlobalScope: close() Methode"
short-title: close()
slug: Web/API/SharedWorkerGlobalScope/close
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Workers API")}}

Die **`close()`** Methode des [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) Interfaces verwirft alle im Ereignisschleifen-Queue des `SharedWorkerGlobalScope` aufgeführten Aufgaben, wodurch dieser spezielle Geltungsbereich effektiv geschlossen wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Wenn Sie Ihre Worker-Instanz aus dem Inneren des Workers heraus schließen möchten, können Sie Folgendes aufrufen:

```js
close();
```

`close()` und `self.close()` sind im Wesentlichen äquivalent — beide repräsentieren `close()`, das von innerhalb des inneren Geltungsbereichs des Workers aufgerufen wird.

> [!NOTE]
> Es gibt auch eine Möglichkeit, den Worker vom Haupt-Thread aus zu stoppen: die [`Worker.terminate`](/de/docs/Web/API/Worker/terminate) Methode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
