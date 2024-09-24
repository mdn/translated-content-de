---
title: WeakRef.prototype.deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`deref()`** Methode von Instanzen des {{jsxref("WeakRef")}} gibt den Zielwert dieses `WeakRef` zurück, oder `undefined`, wenn der Zielwert bereits von der Speicherbereinigung entfernt wurde.

## Syntax

```js-nolint
deref()
```

### Parameter

Keine.

### Rückgabewert

Der Zielwert des WeakRef, der entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist. Gibt `undefined` zurück, wenn der Wert von der Speicherbereinigung entfernt wurde.

## Beschreibung

Siehe den Abschnitt [Anmerkungen zu WeakRefs](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_on_weakrefs) auf der Seite {{jsxref("WeakRef")}} für einige wichtige Hinweise.

## Beispiele

### Verwendung von deref()

Siehe den Abschnitt [Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#examples) auf der Seite {{jsxref("WeakRef")}} für das vollständige Beispiel.

```js
const tick = () => {
  // Holen Sie das Element von der schwachen Referenz, falls es noch existiert
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // Das Element existiert nicht mehr
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
