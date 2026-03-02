---
title: "CloseWatcher: close() Methode"
short-title: close()
slug: Web/API/CloseWatcher/close
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Die **`close()`**-Methode der [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Ihnen, jede Logik im `cancel`-Ereignishandler zu überspringen und sofort das `close`-Ereignis auszulösen. Anschließend wird der Close Watcher deaktiviert, als ob `destroy()` aufgerufen wurde.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `close()`-Methode

Verwenden Sie die `close()`-Methode, um den Close Watcher zu deaktivieren und zu zerstören.

```js
watcher.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
