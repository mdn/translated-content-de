---
title: "IDBRequest: transaction Eigenschaft"
short-title: transaction
slug: Web/API/IDBRequest/transaction
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`transaction`** schreibgeschützte Eigenschaft der IDBRequest-Schnittstelle gibt die Transaktion für die Anforderung zurück, also die Transaktion, in der die Anforderung gestellt wird.

Diese Eigenschaft kann `null` sein für Anforderungen, die nicht innerhalb von Transaktionen gestellt werden, wie z. B. für Anforderungen, die von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) zurückgegeben werden — in diesem Fall verbinden Sie sich lediglich mit einer Datenbank, sodass es keine Transaktion gibt, die zurückgegeben werden kann. Wenn beim Öffnen einer Datenbank ein Versions-Upgrade erforderlich ist, dann wird während des [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Ereignishandlers die **`transaction`** Eigenschaft ein [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) mit [`mode`](/de/docs/Web/API/IDBTransaction/mode) gleich `"versionchange"` sein und kann verwendet werden, um auf bestehende Objektspeicher und Indizes zuzugreifen oder das Upgrade abzubrechen. Nach dem Upgrade wird die **`transaction`** Eigenschaft wieder `null` sein.

## Wert

Eine [`IDBTransaction`](/de/docs/Web/API/IDBTransaction).

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatztitel an, `onsuccess` erhält den zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) (verfügbar gemacht als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt den aktualisierten Datensatz dann in einer anderen Anforderung zurück in den Objektspeicher. Die Quelle der Anforderungen wird in der Entwicklerkonsole protokolliert – beide stammen aus derselben Transaktion. Für ein vollständiges funktionierendes Beispiel siehe unsere [Aufgabenlisten-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

Dieses Beispiel zeigt, wie die **`transaction`** Eigenschaft während eines Versions-Upgrades verwendet werden kann, um auf bestehende Objektspeicher zuzugreifen:

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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [Aufgabenlisten-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
