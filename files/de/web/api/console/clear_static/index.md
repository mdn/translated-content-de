---
title: "console: clear() statische Methode"
short-title: clear()
slug: Web/API/console/clear_static
l10n:
  sourceCommit: c0238173f5fb316c8435670eaf137e8cc7babc82
---

{{APIRef("Console API")}}

Die **`console.clear()`** statische Methode leert die Konsole, wenn möglich.

Eine grafische Konsole, wie die in Webbrowsern, wird alle vorherigen Nachrichten entfernen; eine Konsole, die auf einem Terminal angezeigt wird, wie die in Node.js, versucht, sie mit einem Escape-Code oder einem System-API zu löschen; andernfalls hat die Methode keine Wirkung (und auch keinen Fehler).

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

- [Microsoft Edges Dokumentation zu `console.clear()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#clear)
- [Node.JS Dokumentation zu `console.clear()`](https://nodejs.org/docs/latest/api/console.html#consoleclear)
- [Google Chromes Dokumentation zu `console.clear()`](https://developer.chrome.com/docs/devtools/console/api/#clear)
