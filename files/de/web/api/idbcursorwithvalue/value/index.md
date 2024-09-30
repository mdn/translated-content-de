---
title: "IDBCursorWithValue: Eigenschaft value"
short-title: value
slug: Web/API/IDBCursorWithValue/value
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`value`**-Eigenschaft des schreibgeschützten [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Interfaces gibt den Wert des aktuellen Cursors zurück, was auch immer dieser ist.

## Wert

Der Wert des aktuellen Cursors.

## Beispiele

In diesem Beispiel erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um alle Datensätze im Objektspeicher zu durchlaufen. In jeder Iteration protokollieren wir den Wert des Cursors mit `cursor.value`.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle greifen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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

      console.log(cursor.value);
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
- Festlegung eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und Änderungen vornehmen: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
