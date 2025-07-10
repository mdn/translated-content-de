---
title: FinalizationRegistry() Konstruktor
short-title: FinalizationRegistry()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`FinalizationRegistry()`** Konstruktor erstellt {{jsxref("FinalizationRegistry")}} Objekte.

## Syntax

```js-nolint
new FinalizationRegistry(callbackFn)
```

> [!NOTE]
> `FinalizationRegistry()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `callback`
  - : Eine Funktion, die jedes Mal aufgerufen wird, wenn ein registrierter Zielwert vom Garbage Collector bereinigt wird. Ihr Rückgabewert wird ignoriert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `heldValue`
      - : Der Wert, der als zweiter Parameter der {{jsxref("FinalizationRegistry/register", "register()")}} Methode übergeben wurde, als das `target` Objekt registriert wurde.

## Beispiele

### Erstellen eines neuen Registrierungsobjekts

Sie erstellen ein Registrierungsobjekt, indem Sie den Callback übergeben:

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
