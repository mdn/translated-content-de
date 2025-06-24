---
title: FinalizationRegistry() Konstruktor
short-title: FinalizationRegistry()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`FinalizationRegistry()`** Konstruktor erstellt {{jsxref("FinalizationRegistry")}} Objekte.

## Syntax

```js-nolint
new FinalizationRegistry(callbackFn)
```

> [!NOTE] > `FinalizationRegistry()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `callback`
  - : Eine Funktion, die jedes Mal aufgerufen wird, wenn ein registrierter Zielwert vom Garbage Collector bereinigt wird. Der Rückgabewert der Funktion wird ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `heldValue`
      - : Der Wert, der beim Registrieren des `target` Objekts an den zweiten Parameter der {{jsxref("FinalizationRegistry/register", "register()")}} Methode übergeben wurde.

## Beispiele

### Erstellen eines neuen Register

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
