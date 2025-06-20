---
title: FinalizationRegistry() Konstruktor
short-title: FinalizationRegistry()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`FinalizationRegistry()`** Konstruktor erstellt {{jsxref("FinalizationRegistry")}} Objekte.

## Syntax

```js-nolint
new FinalizationRegistry(callbackFn)
```

> **Hinweis:** `FinalizationRegistry()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `callback`
  - : Eine Funktion, die jedes Mal aufgerufen wird, wenn ein registriertes Zielobjekt vom Garbage Collector aufgeräumt wird. Ihr Rückgabewert wird ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `heldValue`
      - : Der Wert, der als zweiter Parameter an die {{jsxref("FinalizationRegistry/register", "register()")}} Methode übergeben wurde, als das `target` Objekt registriert wurde.

## Beispiele

### Erstellen eines neuen Registry

Sie erstellen die Registry, indem Sie den Callback übergeben:

```js
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("FinalizationRegistry")}}
