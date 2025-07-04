---
title: "console: clear() statische Methode"
short-title: clear()
slug: Web/API/console/clear_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}}

Die statische Methode **`console.clear()`** löscht die Konsole, wenn möglich.

Eine grafische Konsole, wie sie in Webbrowsern zu finden ist, entfernt alle vorherigen Nachrichten; eine Konsole, die in einem Terminal angezeigt wird, wie diejenige in Node.js, versucht, diese mit einem Escape-Code oder einem System-API zu löschen; andernfalls hat die Methode keine Wirkung (und es gibt keinen Fehler).

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

- [Microsoft Edge-Dokumentation für `console.clear()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#clear)
- [Node.js-Dokumentation für `console.clear()`](https://nodejs.org/docs/latest/api/console.html#consoleclear)
- [Google Chrome-Dokumentation für `console.clear()`](https://developer.chrome.com/docs/devtools/console/api/#clear)
