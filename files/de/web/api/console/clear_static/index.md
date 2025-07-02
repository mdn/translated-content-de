---
title: "console: clear() statische Methode"
short-title: clear()
slug: Web/API/console/clear_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}}

Die statische Methode **`console.clear()`** löscht die Konsole, wenn möglich.

Eine grafische Konsole, wie sie in Webbrowsern verfügbar ist, entfernt alle vorherigen Nachrichten. Eine Konsole, die in einem Terminal angezeigt wird, wie in Node.js, versucht, sie mit einem Escape-Code oder einer System-API zu löschen; andernfalls hat die Methode keine Wirkung (und es tritt kein Fehler auf).

## Syntax

```js-nolint
console.clear()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dokumentation von Microsoft Edge für `console.clear()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#clear)
- [Node.js-Dokumentation für `console.clear()`](https://nodejs.org/docs/latest/api/console.html#consoleclear)
- [Dokumentation von Google Chrome für `console.clear()`](https://developer.chrome.com/docs/devtools/console/api/#clear)
