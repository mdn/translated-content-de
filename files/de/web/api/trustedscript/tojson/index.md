---
title: "TrustedScript: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/TrustedScript/toJSON
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der {{domxref("TrustedScript")}}-Schnittstelle gibt eine JSON-Darstellung der gespeicherten Daten zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der eine JSON-Darstellung der gespeicherten Daten enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Richtlinie erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher als Skript ausgeführt werden kann.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized.toJSON());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
