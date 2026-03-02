---
title: "CloseWatcher: CloseWatcher() Konstruktor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Der **`CloseWatcher()`**-Konstruktor erstellt ein neues [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Objekt.

Sie können `CloseWatcher`-Instanzen ohne [Nutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erstellen, was nützlich sein kann, um Fälle wie Dialoge bei Sitzungsinaktivität zu implementieren. Allerdings, wenn Sie mehr als einen `CloseWatcher` ohne Nutzeraktivierung erstellen, dann wird der neu erstellte mit dem letzten gruppiert, so dass eine einzelne Anforderung beide schließen wird. Dies bedeutet, dass es wichtig ist, [`destroy()`](/de/docs/Web/API/CloseWatcher/destroy), [`close()`](/de/docs/Web/API/CloseWatcher/close) und [`requestClose()`](/de/docs/Web/API/CloseWatcher/requestClose) ordnungsgemäß aufzurufen.

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

Erstellen Sie einen neuen `CloseWatcher` mit einem [`AbortSignal`](/de/docs/Web/API/AbortSignal), das die Zerstörung des Watchers steuert.

```js
const controller = new AbortController();
const signalWatcher = new CloseWatcher({ signal: controller.signal });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
