---
title: WeakRef()-Konstruktor
short-title: WeakRef()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`WeakRef()`**-Konstruktor erstellt {{jsxref("WeakRef")}}-Objekte.

## Syntax

```js-nolint
new WeakRef(target)
```

> [!NOTE]
> `WeakRef()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `target`
  - : Der Zielwert, auf den sich der WeakRef beziehen soll (auch als _Referent_ bezeichnet). Muss ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein.

### Rückgabewert

Ein neues `WeakRef`-Objekt, das auf den angegebenen Zielwert verweist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Erstellen eines neuen WeakRef-Objekts

Sehen Sie die Hauptseite von [`WeakRef`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples) für ein vollständiges Beispiel.

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
