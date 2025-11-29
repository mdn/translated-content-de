---
title: "CloseWatcher: CloseWatcher() Konstruktor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Der **`CloseWatcher()`** Konstruktor erstellt ein neues [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Objekt.

Sie können `CloseWatcher` Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erstellen, was nützlich sein kann, um Fälle wie Sitzungstimeout-Dialoge zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, wird der neu erstellte mit dem letzten gruppiert, sodass eine einzige Schließen-Anfrage beide schließen wird. Das bedeutet, dass es wichtig ist, [`destroy()`](/de/docs/Web/API/CloseWatcher/destroy), [`close()`](/de/docs/Web/API/CloseWatcher/close) und [`requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ordnungsgemäß aufzurufen.

## Syntax

```js-nolint
new CloseWatcher()
new CloseWatcher(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften hat:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn dies bereitgestellt wird, kann der Watcher zerstört werden (als ob [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) aufgerufen wird), indem [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) beim entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) aufgerufen wird.

### Rückgabewert

Ein neues [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Objekt.

## Beispiele

### Erstellen von neuen `CloseWatcher` Instanzen

Erstellen Sie einen neuen `CloseWatcher`.

```js
const watcher = new CloseWatcher();
```

Erstellen Sie einen neuen `CloseWatcher` mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal), der das Zerstören des Watchers steuert.

```js
const controller = new AbortController();
const signalWatcher = new CloseWatcher({ signal: controller.signal });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
