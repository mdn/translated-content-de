---
title: "Navigator: javaEnabled()-Methode"
short-title: javaEnabled()
slug: Web/API/Navigator/javaEnabled
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Diese Methode gibt immer false zurück.

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
  // Code wird niemals ausgeführt; die Bedingung ist immer false
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
