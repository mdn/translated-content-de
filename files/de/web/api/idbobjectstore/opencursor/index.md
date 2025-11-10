---
title: "IDBObjectStore: openCursor() Methode"
short-title: openCursor()
slug: Web/API/IDBObjectStore/openCursor
l10n:
  sourceCommit: fdf0acb73062ef95e7b49f9c69937a4d54297cb9
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`openCursor()`** Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und in einem separaten Thread ein neues [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Objekt. Sie wird verwendet, um mit einem Cursor durch einen Object Store zu iterieren.

## Syntax

```js-nolint
openCursor()
openCursor(query)
openCursor(query, direction)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der abgefragt werden soll. Wenn ein einzelner gültiger Schlüssel übergeben wird, entspricht dies standardmäßig einem Bereich, der nur diesen Schlüssel enthält. Wird nichts übergeben, entspricht dies standardmäßig einem Schlüsselbereich, der alle Datensätze in diesem Object Store auswählt.
- `direction` {{optional_inline}}
  - : Ein String, der dem Cursor mitteilt, in welche Richtung er sich bewegen soll. Der Standardwert ist `next`. Gültige Werte sind:
    - `next`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Datensätze, auch Duplikate, in aufsteigender Reihenfolge der Schlüssel zurück.
    - `nextunique`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Datensätze, die keine Duplikate sind, in aufsteigender Reihenfolge der Schlüssel zurück.
    - `prev`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Datensätze, auch Duplikate, in absteigender Reihenfolge der Schlüssel zurück.
    - `prevunique`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Datensätze, die keine Duplikate sind, in absteigender Reihenfolge der Schlüssel zurück.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse in Bezug auf diese Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage:

- ein [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Objekt, das auf den ersten Datensatz zeigt, der der angegebenen Abfrage entspricht
- `null`, wenn keine passenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann ein [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich ungültig ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Object Store ab und verwenden dann einen Cursor, um alle Datensätze im Object Store zu durchlaufen:

```js
const transaction = db.transaction("name", "readonly");
const objectStore = transaction.objectStore("name");
const request = objectStore.openCursor();
request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.value contains the current record being iterated through
    // this is where you'd do something with the result
    cursor.continue();
  } else {
    // no more results
  }
};
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
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
