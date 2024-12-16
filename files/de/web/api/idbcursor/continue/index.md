---
title: "IDBCursor: Methode continue()"
short-title: continue()
slug: Web/API/IDBCursor/continue
l10n:
  sourceCommit: 733c40043bfb7a55fb01644d52000149b2dab13c
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`continue()`**-Methode der [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Schnittstelle bewegt den Cursor zur nächsten Position in seiner Richtung, zu dem Element, dessen Schlüssel mit dem optionalen Schlüsselparameter übereinstimmt. Wenn kein Schlüssel angegeben ist, bewegt sich der Cursor zur direkt nächsten Position basierend auf seiner Richtung.

## Syntax

```js-nolint
continue()
continue(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Der Schlüssel, um den Cursor zu positionieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Transaktion dieses `IDBCursor` inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Schlüsselparameter eine der folgenden Bedingungen erfüllt:
    - Der Schlüssel ist kein gültiger Schlüssel.
    - Der Schlüssel ist kleiner oder gleich der Position dieses Cursors, und die Richtung des Cursors ist `next` oder `nextunique`.
    - Der Schlüssel ist größer oder gleich der Position dieses Cursors und die Richtung des Cursors ist `prev` oder `prevunique`.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Cursor derzeit iteriert wird oder über sein Ende hinaus iteriert hat.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um alle Datensätze im Objektspeicher zu durchlaufen. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle aufnehmen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
