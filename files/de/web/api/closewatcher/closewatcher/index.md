---
title: "CloseWatcher: CloseWatcher() Konstruktor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Der **`CloseWatcher()`** Konstruktor erstellt ein neues [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt.

Sie können `CloseWatcher`-Instanzen ohne [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erstellen. Dies kann nützlich sein, um Fälle wie Inaktivitätsdialoge bei Sitzungen zu implementieren. Wenn Sie jedoch mehr als einen `CloseWatcher` ohne Benutzeraktivierung erstellen, wird der neugewonnene mit dem letzten gruppiert, sodass eine einzelne Schließanforderung beide schließt. Deshalb ist es wichtig, [`destroy()`](/de/docs/Web/API/CloseWatcher/destroy), [`close()`](/de/docs/Web/API/CloseWatcher/close) und [`requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ordnungsgemäß zu verwenden.

## Syntax

```js-nolint
new CloseWatcher()
new CloseWatcher(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Wenn dies bereitgestellt wird, kann der Beobachter zerstört werden (als ob [`CloseWatcher.destroy()`](/de/docs/Web/API/CloseWatcher/destroy) aufgerufen wird), indem [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) auf dem entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) aufgerufen wird.

### Rückgabewert

Ein neues [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt.

## Beispiele

### Erstellen neuer `CloseWatcher`-Instanzen

Erstellen Sie einen neuen `CloseWatcher`.

```js
const watcher = new CloseWatcher();
```

Erstellen Sie einen neuen `CloseWatcher` mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal), das die Zerstörung des Beobachters steuert.

```js
const controller = new AbortController();
const signalWatcher = new CloseWatcher({ signal: controller.signal });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
