---
title: "IDBCursor: primaryKey Eigenschaft"
short-title: primaryKey
slug: Web/API/IDBCursor/primaryKey
l10n:
  sourceCommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{APIRef("IDBCursor")}} {{AvailableInWorkers}}

Die schreibgeschützte **`primaryKey`**-Eigenschaft des [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces gibt den aktuellen effektiven Schlüssel des Cursors zurück. Wenn der Cursor momentan iteriert wird oder außerhalb seines Bereichs iteriert hat, wird dieser auf undefiniert gesetzt. Der Primärschlüssel des Cursors kann jeden beliebigen Datentyp haben.

## Wert

Ein Wert eines beliebigen Datentyps.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, holen einen Objektstore und verwenden dann einen Cursor, um alle Datensätze im Objektstore zu durchlaufen. Innerhalb jeder Iteration protokollieren wir den Primärschlüssel des Cursors in der Konsole.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle abrufen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

      console.log(cursor.primaryKey);
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
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
