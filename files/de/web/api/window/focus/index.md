---
title: "Window: focus()-Methode"
short-title: focus()
slug: Web/API/Window/focus
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Fordert an, dass das Fenster in den Vordergrund gebracht wird. Dies kann aufgrund von Benutzereinstellungen fehlschlagen, und es wird nicht garantiert, dass das Fenster im Vordergrund ist, bevor diese Methode zurückkehrt.

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
