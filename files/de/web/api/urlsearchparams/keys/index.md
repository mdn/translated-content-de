---
title: "URLSearchParams: keys() Methode"
short-title: keys()
slug: Web/API/URLSearchParams/keys
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`keys()`** Methode der {{domxref("URLSearchParams")}}-Schnittstelle gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, der es ermöglicht, durch alle in diesem Objekt enthaltenen Schlüssel zu iterieren. Die Schlüssel sind Zeichenfolgen.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

```js
// Erstellen Sie ein Test-URLSearchParams-Objekt
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Zeigen Sie die Schlüssel an
for (const key of searchParams.keys()) {
  console.log(key);
}
```

Das Ergebnis ist:

```plain
key1
key2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}} Schnittstelle.
