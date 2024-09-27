---
title: "IDBIndex: Methode getAllKeys()"
short-title: getAllKeys()
slug: Web/API/IDBIndex/getAllKeys
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

Die **`getAllKeys()`**-Methode der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle ruft asynchron die Primärschlüssel aller Objekte im Index ab und setzt sie als `result` des Anfrageobjekts.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Schlüssel identifiziert. Wenn dieser Wert null oder nicht vorhanden ist, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der Datensätze, die zurückgegeben werden sollen. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage überschreitet, ruft der Browser nur das erste Element ab. Wenn er kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Schlüssel für alle Datensätze, die der angegebenen Abfrage entsprechen, bis zu dem Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.

Eine {{jsxref("TypeError")}}-Ausnahme wird ausgelöst, wenn der `count`-Parameter nicht zwischen `0` und `2^32 - 1` liegt.

## Beispiele

```js
const myIndex = objectStore.index("index");
const getAllKeysRequest = myIndex.getAllKeys();
getAllKeysRequest.onsuccess = () => {
  console.log(getAllKeysRequest.result);
};
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
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Live-Beispiel anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
