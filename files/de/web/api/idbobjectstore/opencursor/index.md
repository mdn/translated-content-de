---
title: "IDBObjectStore: openCursor()-Methode"
short-title: openCursor()
slug: Web/API/IDBObjectStore/openCursor
l10n:
  sourceCommit: ebaebbbbfe525fb69ed8d4f5b0d8f82da922cf5e
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`openCursor()`**-Methode des
{{domxref("IDBObjectStore")}}-Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück,
und in einem separaten Thread wird ein neues {{domxref("IDBCursorWithValue")}}-Objekt zurückgegeben.
Wird verwendet, um mit einem Cursor durch einen Objektspeicher zu iterieren.

Um festzustellen, ob die Hinzufügeoperation erfolgreich abgeschlossen wurde, hören Sie auf das `success`-Ereignis des Ergebnisses.

## Syntax

```js-nolint
openCursor()
openCursor(query)
openCursor(query, direction)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein {{domxref("IDBKeyRange")}}, der abgefragt werden soll. Wenn ein einzelner gültiger Schlüssel übergeben wird,
    wird dies standardmäßig auf einen Bereich gesetzt, der nur diesen Schlüssel enthält. Wenn nichts übergeben wird, wird dies
    standardmäßig auf einen Schüsselbereich gesetzt, der alle Einträge in diesem Objektspeicher auswählt.
- `direction` {{optional_inline}}
  - : Ein String, der dem Cursor mitteilt, in welche Richtung er sich bewegen soll. Der Standardwert ist `next`. Gültige Werte sind:
    - `next`
      - : Der Cursor wird am Anfang des Speichers geöffnet; dann gibt der Cursor alle Einträge, auch Duplikate,
        in aufsteigender Reihenfolge der Schlüssel zurück.
    - `nextunique`
      - : Der Cursor wird am Anfang des Speichers geöffnet; dann gibt der Cursor alle Einträge, die keine Duplikate sind,
        in aufsteigender Reihenfolge der Schlüssel zurück.
    - `prev`
      - : Der Cursor wird am Ende des Speichers geöffnet; dann gibt der Cursor alle Einträge, auch Duplikate,
        in absteigender Reihenfolge der Schlüssel zurück.
    - `prevunique`
      - : Der Cursor wird am Ende des Speichers geöffnet; dann gibt der Cursor alle Einträge, die keine Duplikate sind,
        in absteigender Reihenfolge der Schlüssel zurück.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, bei dem nachfolgende Ereignisse zu dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage:

- ein {{domxref("IDBCursorWithValue")}}-Objekt, das auf den ersten Datensatz zeigt, der der gegebenen Abfrage entspricht
- `null`, wenn keine übereinstimmenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn dieser {{domxref("IDBObjectStore")}} oder {{domxref("IDBIndex")}} gelöscht wurde.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich ungültig ist.

## Beispiele

In diesem einfachen Beispiel erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen
Cursor, um alle Einträge im Objektspeicher zu durchlaufen:

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
