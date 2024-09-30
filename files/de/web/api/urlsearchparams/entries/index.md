---
title: "URLSearchParams: entries() Methode"
short-title: entries()
slug: Web/API/URLSearchParams/entries
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`entries()`** Methode des
[`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Interfaces gibt einen
{{jsxref("Iteration_protocols",'Iterator')}} zurück, der die Iteration durch alle Schlüssel/Wert-Paare ermöglicht, die in diesem Objekt enthalten sind. Der Iterator gibt Schlüssel/Wert-Paare in derselben Reihenfolge zurück, wie sie in der Abfragezeichenfolge erscheinen. Der Schlüssel und der Wert jedes Paares sind Zeichenfolgen.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück.

## Beispiele

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the key/value pairs
for (const [key, value] of searchParams.entries()) {
  console.log(`${key}, ${value}`);
}
```

Das Ergebnis ist:

```plain
key1, value1
key2, value2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL) Interface.
