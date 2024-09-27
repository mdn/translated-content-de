---
title: "IDBCursor: continue() Methode"
short-title: continue()
slug: Web/API/IDBCursor/continue
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`continue()`** Methode des [`IDBCursor`](/de/docs/Web/API/IDBCursor)
Interfaces bewegt den Cursor zur nächsten Position in seiner Richtung, zu dem Element,
dessen Schlüssel mit dem optionalen Schlüsselparameter übereinstimmt. Wenn kein Schlüssel angegeben wird, bewegt sich der Cursor zur unmittelbar nächsten Position, basierend auf seiner Richtung.

## Syntax

```js-nolint
continue()
continue(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Der Schlüssel, auf den der Cursor positioniert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann einen [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Schlüsselparameter eine der folgenden Bedingungen hat:
    - Der Schlüssel ist kein gültiger Schlüssel.
    - Der Schlüssel ist kleiner oder gleich der Position dieses Cursors, und die Richtung des Cursors ist `next` oder `nextunique`.
    - Der Schlüssel ist größer oder gleich der Position dieses Cursors und die Richtung dieses Cursors ist `prev` oder `prevunique`.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor momentan durchlaufen wird oder über sein Ende hinaus iteriert wurde.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen
Cursor, um alle Datensätze im Objekt-Store zu durchlaufen. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten vom aktuellen Datensatz unter dem
Cursor-Objekt mit `cursor.value.foo` erfassen können. Für ein vollständiges funktionierendes Beispiel, sehen Sie unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function displayData() {
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
