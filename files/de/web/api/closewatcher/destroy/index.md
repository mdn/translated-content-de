---
title: "CloseWatcher: destroy() Methode"
short-title: destroy()
slug: Web/API/CloseWatcher/destroy
l10n:
  sourceCommit: 600202fd27f25e1131ed8fa8696fab064d3eb973
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

Die **`destroy()`**-Methode der [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle deaktiviert den Close Watcher. Sie soll aufgerufen werden, wenn das relevante UI-Element auf eine andere Weise als durch Schließen abgebaut wird.

Nach der Deaktivierung empfängt dieser `CloseWatcher` keine `cancel`- oder `close`-Ereignisse mehr, und es ist möglich, neue, unabhängige `CloseWatcher`-Instanzen zu erstellen.

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

Verwenden Sie die `destroy()`-Methode, um die Überwachungsinstanz für die Bereinigung zu entsorgen.

```js
watcher.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
