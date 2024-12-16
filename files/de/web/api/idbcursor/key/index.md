---
title: "IDBCursor: key-Eigenschaft"
short-title: key
slug: Web/API/IDBCursor/key
l10n:
  sourceCommit: 733c40043bfb7a55fb01644d52000149b2dab13c
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`key`** der [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Schnittstelle gibt den Schlüssel für den Datensatz an der Position des Cursors zurück. Befindet sich der Cursor außerhalb seines Bereichs, wird dies auf `undefined` gesetzt. Der Schlüssel des Cursors kann jeden Datentyp haben.

## Wert

Ein Wert eines beliebigen Typs.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor fortschreitet oder abgeschlossen ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um durch alle Datensätze im Objektspeicher zu iterieren. In jeder Iteration protokollieren wir den Schlüssel des Cursors in der Konsole.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alles erfassen. Beachten Sie auch, dass Sie in jeder Schleifeniteration Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` erfassen können. Für ein vollständiges funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

      console.log(cursor.key);
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
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern von Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
