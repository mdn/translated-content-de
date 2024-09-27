---
title: "IDBCursor: request-Eigenschaft"
short-title: request
slug: Web/API/IDBCursor/request
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`request`** schreibgeschützte Eigenschaft des [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces gibt das [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück, das verwendet wird, um den Cursor zu erhalten.

## Wert

Eine Instanz des [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekts.

## Beispiele

Wenn Sie einen Cursor öffnen, steht die `request`-Eigenschaft in diesem Cursor-Objekt zur Verfügung, um Ihnen mitzuteilen, von welchem Request-Objekt der Cursor stammt. Zum Beispiel:

```js
function displayData() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  const request = objectStore.openCursor();

  request.onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);
      console.log(cursor.request);
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
- Einstellen eines Schlüsselsbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
