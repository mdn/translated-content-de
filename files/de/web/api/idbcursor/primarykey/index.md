---
title: "IDBCursor: primaryKey-Eigenschaft"
short-title: primaryKey
slug: Web/API/IDBCursor/primaryKey
l10n:
  sourceCommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{APIRef("IDBCursor")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`primaryKey`** des {{domxref("IDBCursor")}}-Interfaces gibt den aktuellen effektiven Schlüssel des Cursors zurück. Wenn der Cursor derzeit iteriert oder außerhalb seines Bereichs iteriert hat, ist dieser auf undefiniert gesetzt. Der Primärschlüssel des Cursors kann jeden Datentyp haben.

## Wert

Ein Wert von jedem Datentyp.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Object Store ab und verwenden dann einen Cursor, um durch alle Einträge im Object Store zu iterieren. In jeder Iteration protokollieren wir den Primärschlüssel des Cursors in der Konsole.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle holen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Einstellen eines Schlüsselsbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
