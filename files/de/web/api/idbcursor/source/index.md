---
title: "IDBCursor: source Eigenschaft"
short-title: source
slug: Web/API/IDBCursor/source
l10n:
  sourceCommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`source`** der [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Schnittstelle gibt den [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) zurück, über den der Cursor iteriert. Diese Funktion gibt niemals null zurück und löst auch keine Ausnahme aus, selbst wenn der Cursor derzeit iteriert, sein Ende überschritten hat oder seine Transaktion nicht aktiv ist.

## Wert

Der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex), über den der Cursor iteriert.

## Beispiele

In diesem einfachen Beispiel erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um alle Datensätze im Objekt-Store zu durchlaufen. Bei jeder Iteration protokollieren wir die Quelle des Cursors, die unser [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekt in der Konsole protokolliert.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` erfassen können. Für ein vollständiges funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

      console.log(cursor.source);
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

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
