---
title: WeakRef()-Konstruktor
short-title: WeakRef()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`WeakRef()`**-Konstruktor erstellt {{jsxref("WeakRef")}}-Objekte.

## Syntax

```js-nolint
new WeakRef(target)
```

> [!NOTE] > `WeakRef()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `target`
  - : Der Zielwert, auf den sich der WeakRef beziehen soll (auch _Referent_ genannt). Muss ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein.

### Rückgabewert

Ein neues `WeakRef`-Objekt, das sich auf den angegebenen Zielwert bezieht.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Erstellen eines neuen WeakRef-Objekts

Siehe die Hauptseite [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples) für ein vollständiges Beispiel.

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
