---
title: "IDBObjectStore: Methode openCursor()"
short-title: openCursor()
slug: Web/API/IDBObjectStore/openCursor
l10n:
  sourceCommit: ebaebbbbfe525fb69ed8d4f5b0d8f82da922cf5e
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`openCursor()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und liefert in einem separaten Thread ein neues [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) Objekt. Diese Methode wird zum Iterieren durch einen Object Store mit einem Cursor verwendet.

Um festzustellen, ob die Hinzufügeoperation erfolgreich abgeschlossen wurde, überwachen Sie das `success`-Ereignis des Ergebnisses.

## Syntax

```js-nolint
openCursor()
openCursor(query)
openCursor(query, direction)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der abgefragt werden soll. Wenn ein einzelner gültiger Schlüssel übergeben wird, ist das Standardverhalten ein Bereich, der nur diesen Schlüssel enthält. Wenn nichts übergeben wird, ist das Standardverhalten ein Schlüsselbereich, der alle Datensätze in diesem Object Store auswählt.
- `direction` {{optional_inline}}
  - : Ein String, der dem Cursor mitteilt, in welche Richtung er navigieren soll. Der Standardwert ist `next`. Gültige Werte sind:
    - `next`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Datensätze, einschließlich Duplikaten, in aufsteigender Reihenfolge der Schlüssel zurück.
    - `nextunique`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Datensätze, die keine Duplikate sind, in aufsteigender Reihenfolge der Schlüssel zurück.
    - `prev`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Datensätze, einschließlich Duplikaten, in absteigender Reihenfolge der Schlüssel zurück.
    - `prevunique`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Datensätze, die keine Duplikate sind, in absteigender Reihenfolge der Schlüssel zurück.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft der Anfrage entweder:

- ein [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) Objekt, das auf den ersten Datensatz verweist, der der angegebenen Abfrage entspricht
- `null`, wenn keine übereinstimmenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieser [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich ungültig ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Object Store ab und verwenden dann einen Cursor, um durch alle Datensätze im Object Store zu iterieren:

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
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
