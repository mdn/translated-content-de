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
dessen Schlüssel mit dem optionalen Schlüsselparameter übereinstimmt. Wenn kein Schlüssel angegeben ist, bewegt sich der Cursor zur direkt nächstliegenden Position, basierend auf seiner Richtung.

## Syntax

```js-nolint
continue()
continue(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Der Schlüssel, bei dem der Cursor positioniert wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion des IDBCursors inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Schlüsselparameter eine der folgenden Bedingungen erfüllt:
    - Der Schlüssel ist kein gültiger Schlüssel.
    - Der Schlüssel ist kleiner oder gleich der Position des Cursors, und die Richtung des Cursors ist `next` oder `nextunique`.
    - Der Schlüssel ist größer oder gleich der Position des Cursors und die Richtung des Cursors ist `prev` oder `prevunique`.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor derzeit iteriert wird oder sein Ende überschritten hat.

## Beispiele

In diesem einfachen Beispiel erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um durch alle Datensätze im Objekt-Store zu iterieren. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges funktionierendes Beispiel siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
