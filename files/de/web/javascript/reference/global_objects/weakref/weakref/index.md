---
title: WeakRef()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
l10n:
  sourceCommit: 7da0dabee277f9c295178ae132c16c8fed5d747a
---

{{JSRef}}

Der **`WeakRef()`**-Konstruktor erstellt {{jsxref("WeakRef")}}-Objekte.

## Syntax

```js-nolint
new WeakRef(target)
```

> **Note:** `WeakRef()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `target`
  - : Der Zielwert, auf den sich das WeakRef beziehen soll (auch _Referent_ genannt). Muss ein Objekt oder ein [nicht-registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein.

### Rückgabewert

Ein neues `WeakRef`-Objekt, das auf den gegebenen Zielwert verweist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt oder ein [nicht-registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Erstellen eines neuen WeakRef-Objekts

Für ein vollständiges Beispiel siehe die Hauptseite von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples).

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to a DOM element
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakRef")}}
