---
title: "IDBCursor: request-Eigenschaft"
short-title: request
slug: Web/API/IDBCursor/request
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`request`**-Eigenschaft der {{domxref("IDBCursor")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft und gibt das {{domxref("IDBRequest")}}-Objekt zurück, das verwendet wurde, um den Cursor zu erhalten.

## Wert

Eine Instanz des {{domxref("IDBRequest")}}-Objekts.

## Beispiele

Wenn Sie einen Cursor öffnen, ist dann die `request`-Eigenschaft auf diesem Cursor-Objekt verfügbar, um Ihnen mitzuteilen, von welchem Anforderungsobjekt der Cursor stammt. Zum Beispiel:

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
