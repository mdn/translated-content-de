---
title: "CloseWatcher: close()-Methode"
short-title: close()
slug: Web/API/CloseWatcher/close
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Die **`close()`**-Methode der {{domxref("CloseWatcher")}}-Schnittstelle ermöglicht es Ihnen, jegliche Logik im `cancel`-Ereignis-Handler zu überspringen und sofort das `close`-Ereignis auszulösen. Danach wird der Close Watcher deaktiviert, als ob `destroy()` aufgerufen worden wäre.

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

## Kompatibilität der Browser

{{Compat}}
