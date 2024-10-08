---
title: "IDBRequest: result Eigenschaft"
short-title: result
slug: Web/API/IDBRequest/result
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`result`** schreibgeschützte Eigenschaft des
[`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt das Ergebnis der Anfrage zurück. Ist die Anfrage
nicht abgeschlossen, ist das Ergebnis nicht verfügbar und es wird eine `InvalidStateError`-Ausnahme
ausgelöst.

## Wert

any

## Beispiele

Im folgenden Beispiel wird ein bestimmter Datensatztitel angefordert, `onsuccess` ruft den
zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) ab (verfügbar gemacht
als `objectStoreTitleRequest.result`), aktualisiert eine
Eigenschaft des Datensatzes und legt den aktualisierten Datensatz dann zurück in den Object-Store. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
