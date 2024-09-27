---
title: WeakRef.prototype.deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`deref()`**-Methode von {{jsxref("WeakRef")}}-Instanzen gibt den Zielwert dieses `WeakRef` zurück oder `undefined`, wenn der Zielwert durch die Speicherbereinigung entfernt wurde.

## Syntax

```js-nolint
deref()
```

### Parameter

Keine.

### Rückgabewert

Der Zielwert des WeakRef, der entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist. Gibt `undefined` zurück, wenn der Wert durch die Speicherbereinigung entfernt wurde.

## Beschreibung

Sehen Sie sich den Abschnitt [Hinweise zu WeakRefs](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) auf der {{jsxref("WeakRef")}}-Seite für einige wichtige Hinweise an.

## Beispiele

### Verwendung von deref()

Sehen Sie sich den Abschnitt [Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples) auf der {{jsxref("WeakRef")}}-Seite für das vollständige Beispiel an.

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
