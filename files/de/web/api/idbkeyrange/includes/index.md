---
title: "IDBKeyRange: includes()-Methode"
short-title: includes()
slug: Web/API/IDBKeyRange/includes
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die `includes()`-Methode des [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob ein bestimmter Schlüssel innerhalb des Schlüsselbereichs liegt.

## Syntax

```js-nolint
includes(key)
```

### Parameter

- `key`
  - : Der Schlüssel, den Sie in Ihrem Schlüsselbereich überprüfen möchten. Dies kann jeder Typ sein.

### Rückgabewert

Ein boolescher Wert.

### Ausnahmen

- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel kein gültiger Schlüssel war.

## Beispiele

```js
const keyRangeValue = IDBKeyRange.bound("A", "K", false, false);

keyRangeValue.includes("F");
// Returns true

keyRangeValue.includes("W");
// Returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern von Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [Aufgaben-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
