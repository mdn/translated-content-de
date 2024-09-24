---
title: "IDBObjectStore: openKeyCursor()-Methode"
short-title: openKeyCursor()
slug: Web/API/IDBObjectStore/openKeyCursor
l10n:
  sourceCommit: ebaebbbbfe525fb69ed8d4f5b0d8f82da922cf5e
---

{{ APIRef("IndexedDB") }}

Die **`openKeyCursor()`**-Methode des
{{domxref("IDBObjectStore")}}-Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück,
dessen Ergebnis auf einen {{domxref("IDBCursor")}} gesetzt wird, der verwendet werden kann, um
durch übereinstimmende Ergebnisse zu iterieren. Wird verwendet, um mit einem Cursor durch die
Schlüssel eines Objektstores zu iterieren.

Um festzustellen, ob die Hinzufügeoperation erfolgreich abgeschlossen wurde, hören Sie auf das
`succeed`-Ereignis des Ergebnisses.

## Syntax

```js-nolint
openKeyCursor()
openKeyCursor(query)
openKeyCursor(query, direction)
```

### Parameter

- `query` {{optional_inline}}
  - : Der abzufragende Schlüsselbereich. Wenn ein einzelner gültiger Schlüssel übergeben wird, wird dies standardmäßig auf einen Bereich gesetzt, der nur diesen Schlüssel enthält. Wenn nichts übergeben wird, wird dies standardmäßig auf einen Schlüsselbereich gesetzt, der alle Datensätze in diesem Objektstore auswählt.
- `direction` {{optional_inline}}
  - : Ein String, der dem Cursor mitteilt, in welche Richtung er sich bewegen soll. Der Standardwert ist `next`. Gültige Werte sind:
    - `next`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Datensätze zurück, auch Duplikate, in aufsteigender Reihenfolge der Schlüssel.
    - `nextunique`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Datensätze zurück, die keine Duplikate sind, in aufsteigender Reihenfolge der Schlüssel.
    - `prev`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Datensätze zurück, auch Duplikate, in absteigender Reihenfolge der Schlüssel.
    - `prevunique`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Datensätze zurück, die keine Duplikate sind, in absteigender Reihenfolge der Schlüssel.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage:

- ein {{domxref("IDBCursor")}}-Objekt, das auf den ersten Datensatz verweist, der der angegebenen Abfrage entspricht
- `null`, wenn keine übereinstimmenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn dieses {{domxref("IDBObjectStore")}} oder {{domxref("IDBIndex")}} gelöscht wurde.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder der Schlüsselbereich ungültig ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektstore ab und verwenden dann einen Cursor, um durch alle Datensätze im Objektstore zu iterieren:

```js
const transaction = db.transaction("name", "readonly");
const objectStore = transaction.objectStore("name");
const request = objectStore.openKeyCursor();
request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key enthält den Schlüssel des aktuellen Datensatzes, durch den iteriert wird
    // Beachten Sie, dass es kein cursor.value gibt, im Gegensatz zu openCursor
    // Hier würden Sie etwas mit dem Ergebnis machen
    cursor.continue();
  } else {
    // keine weiteren Ergebnisse
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
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
