---
title: "IDBCursor: key Eigenschaft"
short-title: key
slug: Web/API/IDBCursor/key
l10n:
  sourceCommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`key`** schreibgeschützte Eigenschaft des [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces gibt den Schlüssel für den Datensatz an der Position des Cursors zurück. Befindet sich der Cursor außerhalb seines Bereichs, ist dieser auf undefined gesetzt. Der Schlüssel des Cursors kann jeden Datentyp haben.

## Wert

Ein Wert beliebigen Typs.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Speicher ab und verwenden dann einen Cursor, um alle Datensätze im Objekt-Speicher zu durchlaufen. Bei jedem Durchlauf protokollieren wir den Schlüssel des Cursors in die Konsole.

Der Cursor verlangt nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle Daten erfassen. Beachten Sie auch, dass Sie in jeder Schleifeniteration Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abgreifen können. Ein vollständiges funktionierendes Beispiel finden Sie in unserem [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Betrachten Sie das Beispiel live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Betrachten Sie das Beispiel live](https://mdn.github.io/dom-examples/to-do-notifications/)).
