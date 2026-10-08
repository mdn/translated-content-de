---
title: "IDBRequest: transaction-Eigenschaft"
short-title: transaction
slug: Web/API/IDBRequest/transaction
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`transaction`** der Schnittstelle IDBRequest gibt die Transaktion zurück, innerhalb der die Anfrage gestellt wird.

Bei Anfragen, die nicht innerhalb einer Transaktion gestellt werden, kann diese Eigenschaft `null` sein. Das gilt beispielsweise für Anfragen, die von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) zurückgegeben werden: In diesem Fall wird lediglich eine Verbindung zu einer Datenbank hergestellt, sodass keine Transaktion zurückgegeben werden kann. Wenn beim Öffnen einer Datenbank ein Versionsupgrade erforderlich ist, enthält die Eigenschaft **`transaction`** während des Event-Handlers für [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) eine [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), deren [`mode`](/de/docs/Web/API/IDBTransaction/mode) den Wert `"versionchange"` hat. Sie kann verwendet werden, um auf vorhandene Object Stores und Indizes zuzugreifen oder das Upgrade abzubrechen. Nach dem Upgrade ist die Eigenschaft **`transaction`** wieder `null`.

## Wert

Eine [`IDBTransaction`](/de/docs/Web/API/IDBTransaction).

## Beispiele

Im folgenden Beispiel wird ein Datensatz mit einem bestimmten Titel angefordert. `onsuccess` ruft den zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) ab (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und schreibt den aktualisierten Datensatz anschließend mit einer weiteren Anfrage zurück in den Object Store. Die Quelle der Anfragen wird in der Entwicklerkonsole protokolliert – beide stammen aus derselben Transaktion. Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserer App [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list object that has this title as its title
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Grab the data object returned as the result
  const data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item back
  // into the database
  const updateTitleRequest = objectStore.put(data);

  // Log the transaction that originated this request
  console.log(
    `The transaction that originated this request is ${updateTitleRequest.transaction}`,
  );

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};
```

Dieses Beispiel zeigt, wie die Eigenschaft **`transaction`** während eines Versionsupgrades verwendet werden kann, um auf vorhandene Object Stores zuzugreifen:

```js
const openRequest = indexedDB.open("db", 2);
console.log(openRequest.transaction); // Will log "null".

openRequest.onupgradeneeded = (event) => {
  console.log(openRequest.transaction.mode); // Will log "versionchange".
  const db = openRequest.result;
  if (event.oldVersion < 1) {
    // New database, create "books" object store.
    db.createObjectStore("books");
  }
  if (event.oldVersion < 2) {
    // Upgrading from v1 database: add index on "title" to "books" store.
    const bookStore = openRequest.transaction.objectStore("books");
    bookStore.createIndex("by_title", "title");
  }
};

openRequest.onsuccess = () => {
  console.log(openRequest.transaction); // Will log "null".
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
