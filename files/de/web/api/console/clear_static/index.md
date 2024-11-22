---
title: "console: clear() statische Methode"
short-title: clear()
slug: Web/API/console/clear_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}}

Die statische Methode **`console.clear()`** leert die Konsole, wenn möglich.

Eine grafische Konsole, wie die in Webbrowsern, entfernt alle vorherigen Nachrichten; eine Konsole, die in einem Terminal angezeigt wird, wie die in Node.js, versucht, sie mit einem Escape-Code oder einem System-API zu leeren; andernfalls hat die Methode keine Wirkung (und es gibt keinen Fehler).

## Syntax

```js-nolint
console.clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edge-Dokumentation für `console.clear()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#clear)
- [Node.js-Dokumentation für `console.clear()`](https://nodejs.org/docs/latest/api/console.html#consoleclear)
- [Google Chrome-Dokumentation für `console.clear()`](https://developer.chrome.com/docs/devtools/console/api/#clear)
