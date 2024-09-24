---
title: "IDBCursor: source-Eigenschaft"
short-title: source
slug: Web/API/IDBCursor/source
l10n:
  sourceCommit: ac5b7880d127dd1ff9cd69da09ebc427da6bf6f4
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die schreibgeschützte **`source`**-Eigenschaft der {{domxref("IDBCursor")}}-Schnittstelle gibt den {{domxref("IDBObjectStore")}} oder {{domxref("IDBIndex")}} zurück, über den der Cursor iteriert. Diese Funktion gibt niemals null zurück und löst keine Ausnahme aus, selbst wenn der Cursor derzeit iteriert wird, über sein Ende hinaus iteriert hat oder seine Transaktion nicht aktiv ist.

## Wert

Der {{domxref("IDBObjectStore")}} oder {{domxref("IDBIndex")}}, über den der Cursor iteriert.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um durch alle Datensätze im Objektspeicher zu iterieren. In jeder Iteration protokollieren wir die Quelle des Cursors, die unser {{domxref("IDBObjectStore")}}-Objekt in der Konsole protokollieren wird.

Der Cursor erfordert nicht, dass wir die Daten anhand eines Schlüssels auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges funktionierendes Beispiel sehen Sie unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

- [Verwendung von IndexedDB](/de-DE/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Änderungen an Ihren Daten: {{domxref("IDBObjectStore")}}
- Verwenden von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
