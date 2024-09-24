---
title: "TrustedScriptURL: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/TrustedScriptURL/toJSON
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der {{domxref("TrustedScriptURL")}}-Schnittstelle gibt eine JSON-Darstellung der gespeicherten Daten zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der eine JSON-Darstellung der gespeicherten Daten enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Policy erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher verwendet werden kann, um ein Drittanbieterskript zu laden.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toJSON());
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
