---
title: "Navigator: javaEnabled() Methode"
short-title: javaEnabled()
slug: Web/API/Navigator/javaEnabled
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{APIRef("HTML DOM")}}

Diese Methode gibt immer `false` zurück.

## Syntax

```js-nolint
javaEnabled()
```

### Parameter

Keine.

### Rückgabewert

Der boolesche Wert `false`.

## Beispiele

```js
if (window.navigator.javaEnabled()) {
  // code will never be executed; the condition is always false
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
