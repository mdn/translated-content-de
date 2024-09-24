---
title: "CloseWatcher: CloseWatcher() Konstruktor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Der **`CloseWatcher()`** Konstruktor erstellt ein neues {{domxref("CloseWatcher")}} Objekt.

Sie können `CloseWatcher` Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/User_activation) erstellen, was nützlich sein kann, um Fälle wie Sitzungsinaktivitäts-Timeout-Dialoge zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, wird der neu erstellte mit dem letzten gruppiert, sodass eine einzelne Schließanforderung beide schließen wird. Dies bedeutet, dass es wichtig ist, {{domxref("CloseWatcher.destroy()", "destroy()")}}, {{domxref("CloseWatcher.close()", "close()")}} und {{domxref("CloseWatcher.requestClose()", "requestClose()")}} ordnungsgemäß aufzurufen.

## Syntax

```js-nolint
new CloseWatcher()
new CloseWatcher(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften hat:
    - `signal`
      - : Ein {{domxref("AbortSignal")}}. Wenn dies angegeben ist, kann der Beobachter zerstört werden (wie durch Aufrufen von {{domxref("CloseWatcher.destroy()")}}), indem {{domxref("AbortController.abort()")}} auf dem entsprechenden {{domxref("AbortController")}} aufgerufen wird.

### Rückgabewert

Ein neues {{domxref("CloseWatcher")}} Objekt.

## Beispiele

### Erstellen neuer `CloseWatcher` Instanzen

Erstellen Sie einen neuen `CloseWatcher`.

```js
const watcher = new CloseWatcher();
```

Erstellen Sie einen neuen `CloseWatcher` mit einem {{domxref("AbortSignal")}}, das die Zerstörung des Beobachters steuert.

```js
const controller = new AbortController();
const signalWatcher = new CloseWatcher({ signal: controller.signal };
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
