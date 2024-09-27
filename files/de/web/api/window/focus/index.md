---
title: "Window: focus()-Methode"
short-title: focus()
slug: Web/API/Window/focus
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Führt eine Anfrage aus, um das Fenster in den Vordergrund zu bringen. Die Anfrage kann aufgrund von Benutzereinstellungen fehlschlagen, und das Fenster wird nicht garantiert vor diesem Methodenaufruf im Vordergrund sein.

## Syntax

```js-nolint
focus()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
if (clicked) {
  window.focus();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
