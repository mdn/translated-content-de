---
title: "TrustedScriptURL: toJSON() Methode"
short-title: toJSON()
slug: Web/API/TrustedScriptURL/toJSON
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Schnittstelle gibt eine JSON-Darstellung der gespeicherten Daten zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String mit einer JSON-Darstellung der gespeicherten Daten.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Richtlinie erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher verwendet werden kann, um ein Skript eines Drittanbieters zu laden.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toJSON());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
