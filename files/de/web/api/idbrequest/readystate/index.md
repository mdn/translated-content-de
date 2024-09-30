---
title: "IDBRequest: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/IDBRequest/readyState
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`readyState`**-Eigenschaft des schreibgeschützten
[`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt den Status der Anfrage zurück.

Jede Anfrage beginnt im `pending`-Status. Der Status ändert sich zu
`done`, wenn die Anfrage erfolgreich abgeschlossen ist oder ein Fehler
auftritt.

## Wert

Einer der folgenden Strings:

- `pending`
  - : Wird zurückgegeben, wenn die Anfrage noch läuft.
- `done`
  - : Wird zurückgegeben, wenn die Anfrage bereits abgeschlossen ist.

## Beispiele

Im folgenden Beispiel wird ein bestimmter Titel eines Datensatzes angefordert. `onsuccess` ruft den
zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) ab (verfügbar gemacht
als `objectStoreTitleRequest.result`), aktualisiert
eine Eigenschaft des Datensatzes und speichert den aktualisierten Datensatz dann in einer weiteren Anfrage zurück in den Object Store. Der `readyState` der zweiten Anfrage wird in der Entwicklerkonsole protokolliert. Für ein vollständiges Beispiel siehe unsere
[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App
([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

  // Create another request that inserts the item
  // back into the database
  const updateTitleRequest = objectStore.put(data);

  // Log the readyState of this request
  console.log(
    `The readyState of this request is ${updateTitleRequest.readyState}`,
  );

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
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
- Einstellen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern von Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
