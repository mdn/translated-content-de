---
title: "CloseWatcher: CloseWatcher()-Konstruktor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Der **`CloseWatcher()`**-Konstruktor erstellt ein neues [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt.

Sie können `CloseWatcher`-Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/User_activation) erstellen. Dies kann nützlich sein, um Fälle wie Dialoge zum Sitzungs-Inaktivitäts-Timeout zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, wird der neu erstellte mit dem letzten gruppiert, sodass eine einzelne Schließanforderung beide schließen wird. Deshalb ist es wichtig, [`destroy()`](/de/docs/Web/API/CloseWatcher/destroy), [`close()`](/de/docs/Web/API/CloseWatcher/close) und [`requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ordnungsgemäß zu verwenden.

## Syntax

```js-nolint
new CloseWatcher()
new CloseWatcher(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften besitzt:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn dies angegeben ist, kann der Watcher durch Aufrufen von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) zerstört werden (als ob [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) aufgerufen wird).

### Rückgabewert

Ein neues [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt.

## Beispiele

### Erstellen neuer `CloseWatcher`-Instanzen

Erstellen Sie einen neuen `CloseWatcher`.

```js
const watcher = new CloseWatcher();
```

Erstellen Sie einen neuen `CloseWatcher` mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal), das das Zerstören des Watchers steuert.

```js
const controller = new AbortController();
const signalWatcher = new CloseWatcher({ signal: controller.signal };
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
