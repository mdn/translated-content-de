---
title: "console: clear()-statische Methode"
short-title: clear()
slug: Web/API/console/clear_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}}

Die statische Methode **`console.clear()`** löscht die Konsole, wenn möglich.

Eine grafische Konsole, wie die in Webbrowsern, entfernt alle vorherigen Nachrichten; eine auf einem Terminal angezeigte Konsole, wie die in Node.js, wird versuchen, sie mit einem Escape-Code oder System-API zu löschen; andernfalls hat die Methode keine Wirkung (und es tritt kein Fehler auf).

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
