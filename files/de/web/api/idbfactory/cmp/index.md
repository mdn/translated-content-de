---
title: "IDBFactory: cmp() Methode"
short-title: cmp()
slug: Web/API/IDBFactory/cmp
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`cmp()`**-Methode des [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Interfaces vergleicht zwei Werte als Schlüssel, um Gleichheit und Reihenfolge für IndexedDB-Operationen zu bestimmen, wie z. B. Speichern und Iterieren.

> [!NOTE]
> Verwenden Sie diese Methode nicht zum Vergleichen beliebiger JavaScript-Werte, da viele JavaScript-Werte entweder keine gültigen IndexedDB-Schlüssel sind (z. B. Booleans und Objekte) oder als gleichwertige IndexedDB-Schlüssel behandelt werden (zum Beispiel ignoriert IndexedDB Arrays mit nicht-numerischen Eigenschaften und behandelt sie als leere Arrays, daher werden alle nicht-numerischen Arrays als gleichwertig behandelt). Dies führt zu einer Ausnahme, wenn einer der Werte kein gültiger Schlüssel ist.

## Syntax

```js-nolint
cmp(first, second)
```

### Parameter

- `first`
  - : Der erste zu vergleichende Schlüssel.
- `second`
  - : Der zweite zu vergleichende Schlüssel.

### Rückgabewert

Ein ganzzahliger Wert, der das Ergebnis des Vergleichs anzeigt; die folgende Tabelle listet die möglichen Werte und ihre Bedeutungen auf:

| Rückgabewert   | Beschreibung                        |
| -------------- | ----------------------------------- |
| -1             | 1. Schlüssel ist kleiner als der 2. |
| 0              | 1. Schlüssel ist gleich dem 2.      |
| 1              | 1. Schlüssel ist größer als der 2.  |

### Ausnahmen

- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn einer der angegebenen Schlüssel kein gültiger Schlüssel war.

## Beispiele

```js
const a = 1;
const b = 2;
const result = window.indexedDB.cmp(a, b);
console.log(`Comparison results: ${result}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursor: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
