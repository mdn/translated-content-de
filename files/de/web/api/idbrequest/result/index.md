---
title: "IDBRequest: result-Eigenschaft"
short-title: result
slug: Web/API/IDBRequest/result
l10n:
  sourceCommit: 733c40043bfb7a55fb01644d52000149b2dab13c
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`result`** des [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt das Ergebnis der Anfrage zurück.

## Wert

any

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, auf die Eigenschaft zuzugreifen, obwohl die Anfrage noch nicht abgeschlossen ist und daher das Ergebnis nicht verfügbar ist.

## Beispiele

Das folgende Beispiel fragt einen bestimmten Titel an. Bei `onsuccess` wird der zugehörige Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) abgerufen (verfügbar als `objectStoreTitleRequest.result`), eine Eigenschaft des Datensatzes wird aktualisiert und der aktualisierte Datensatz wird dann zurück in den Objektstore gelegt. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Nutzung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
