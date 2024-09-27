---
title: "IDBRequest: source-Eigenschaft"
short-title: source
slug: Web/API/IDBRequest/source
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`source`** schreibgeschützte Eigenschaft des [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt die Quelle der Anfrage zurück, wie einen Index oder einen Objekt-Store. Wenn keine Quelle existiert (wie beim Aufruf von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)), wird `null` zurückgegeben.

## Wert

Ein Objekt, das die Quelle der Anfrage darstellt, wie ein [`IDBIndex`](/de/docs/Web/API/IDBIndex), [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBCursor`](/de/docs/Web/API/IDBCursor).

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatztitel an, `onsuccess` erhält den zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und fügt den aktualisierten Datensatz dann in einer anderen Anfrage wieder in den Objekt-Store ein. Die Quelle der zweiten Anfrage wird in der Entwicklerkonsole protokolliert. Für ein vollständiges, funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

  // Log the source of this request
  console.log(`The source of this request is ${updateTitleRequest.source}`);
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
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
