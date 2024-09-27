---
title: FinalizationRegistry() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{JSRef}}

Der **`FinalizationRegistry()`** Konstruktor erstellt {{jsxref("FinalizationRegistry")}} Objekte.

## Syntax

```js-nolint
new FinalizationRegistry(callbackFn)
```

> **Note:** `FinalizationRegistry()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `callback`
  - : Eine Funktion, die jedes Mal aufgerufen wird, wenn ein registriertes Zielwert garbage collected wird. Der Rückgabewert der Funktion wird ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `heldValue`
      - : Der Wert, der beim Registrieren des `target` Objekts an den zweiten Parameter der {{jsxref("FinalizationRegistry/register", "register()")}} Methode übergeben wurde.

## Beispiele

### Erstellen eines neuen Registers

Sie erstellen das Register, indem Sie den Callback übergeben:

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
