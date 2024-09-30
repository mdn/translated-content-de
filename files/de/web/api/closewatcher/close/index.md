---
title: "CloseWatcher: close() Methode"
short-title: close()
slug: Web/API/CloseWatcher/close
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Die **`close()`**-Methode der [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle ermöglicht es Ihnen, jede Logik im `cancel`-Ereignishandler zu überspringen und sofort das `close`-Ereignis zu feuern. Sie deaktiviert dann den Close Watcher, als ob `destroy()` aufgerufen worden wäre.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung der `close()` Methode

Verwenden Sie die `close()`-Methode, um den Close Watcher zu deaktivieren und zu zerstören.

```js
watcher.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
