---
title: WeakRef.prototype.deref()
short-title: deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`deref()`** Methode von {{jsxref("WeakRef")}} Instanzen gibt den Zielwert dieses `WeakRef` zurück oder `undefined`, wenn der Zielwert vom Garbage Collector gesammelt wurde.

## Syntax

```js-nolint
deref()
```

### Parameter

Keine.

### Rückgabewert

Der Zielwert des WeakRef, der entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist. Gibt `undefined` zurück, wenn der Wert vom Garbage Collector gesammelt wurde.

## Beschreibung

Siehe den Abschnitt [Hinweise zu WeakRefs](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) auf der Seite von {{jsxref("WeakRef")}} für einige wichtige Hinweise.

## Beispiele

### Verwendung von deref()

Siehe den Abschnitt [Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples)
auf der Seite von {{jsxref("WeakRef")}} für das vollständige Beispiel.

```js
const tick = () => {
  // Get the element from the weak reference, if it still exists
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // The element doesn't exist anymore
    console.log("The element is gone.");
    this.stop();
    this.ref = null;
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakRef")}}
