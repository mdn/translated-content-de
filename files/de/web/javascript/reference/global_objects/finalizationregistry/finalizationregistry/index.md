---
title: FinalizationRegistry()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{JSRef}}

Der **`FinalizationRegistry()`**-Konstruktor erstellt {{jsxref("FinalizationRegistry")}}-Objekte.

## Syntax

```js-nolint
new FinalizationRegistry(callbackFn)
```

> **Note:** `FinalizationRegistry()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `callback`
  - : Eine Funktion, die jedes Mal aufgerufen wird, wenn ein registrierter Zielwert vom Garbage Collector entfernt wird. Der Rückgabewert wird ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `heldValue`
      - : Der Wert, der als zweiter Parameter der {{jsxref("FinalizationRegistry/register", "register()")}}-Methode übergeben wurde, als das `target`-Objekt registriert wurde.

## Beispiele

### Erstellen eines neuen Registers

Sie erstellen das Register und übergeben den Callback:

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
