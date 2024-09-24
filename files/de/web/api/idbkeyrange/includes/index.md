---
title: "IDBKeyRange: includes()-Methode"
short-title: includes()
slug: Web/API/IDBKeyRange/includes
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die `includes()`-Methode der {{domxref("IDBKeyRange")}}-Schnittstelle gibt einen Boolean zurück, der anzeigt, ob ein bestimmter Schlüssel innerhalb des Schlüsselbereichs liegt.

## Syntax

```js-nolint
includes(key)
```

### Parameter

- `key`
  - : Der Schlüssel, den Sie in Ihrem Schlüsselbereich überprüfen möchten. Dies kann jeder Typ sein.

### Rückgabewert

Ein Boolean-Wert.

### Ausnahmen

- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüssel kein gültiger Schlüssel war.

## Beispiele

```js
const keyRangeValue = IDBKeyRange.bound("A", "K", false, false);

keyRangeValue.includes("F");
// Gibt true zurück

keyRangeValue.includes("W");
// Gibt false zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwenden von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwenden von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
