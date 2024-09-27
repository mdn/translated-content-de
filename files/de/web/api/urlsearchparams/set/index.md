---
title: "URLSearchParams: set() Methode"
short-title: set()
slug: Web/API/URLSearchParams/set
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`set()`** Methode des [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
Interfaces legt den Wert fest, der mit einem bestimmten Suchparameter verknüpft ist. Wenn mehrere übereinstimmende Werte vorhanden sind, löscht diese Methode die anderen. Existiert der Suchparameter nicht, erstellt diese Methode ihn.

## Syntax

```js-nolint
set(name, value)
```

### Parameter

- `name`
  - : Der Name des zu setzenden Parameters.
- `value`
  - : Der Wert des zu setzenden Parameters.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let url = new URL("https://example.com?foo=1&bar=2");
let params = new URLSearchParams(url.search);

// Add a third parameter.
params.set("baz", 3);
params.toString(); // "foo=1&bar=2&baz=3"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
