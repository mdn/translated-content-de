---
title: "CloseWatcher: destroy() Methode"
short-title: destroy()
slug: Web/API/CloseWatcher/destroy
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Die **`destroy()`**-Methode der [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle deaktiviert den Close Watcher. Dies soll aufgerufen werden, wenn das betreffende UI-Element auf eine andere Weise als durch Schließen entfernt wird.

Nachdem die Deaktivierung erfolgt ist, empfängt dieser `CloseWatcher` keine `cancel`- oder `close`-Ereignisse mehr und es wird möglich sein, neue unabhängige `CloseWatcher`-Instanzen zu erstellen.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `destroy()` Methode

Verwenden Sie die `destroy()`-Methode, um die Watcher-Instanz zur Bereinigung zu entsorgen.

```js
watcher.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
