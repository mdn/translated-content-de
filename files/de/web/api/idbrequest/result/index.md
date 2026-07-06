---
title: "IDBRequest: result-Eigenschaft"
short-title: result
slug: Web/API/IDBRequest/result
l10n:
  sourceCommit: 8623f4af1cb6a9f904d6c18f5f772675bdce3411
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`result`**-Eigenschaft des [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt das Ergebnis der Anfrage zurück.

Der Wert hängt von der gestellten Anfrage ab. Zum Beispiel füllen die Methoden [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) und [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) diese Eigenschaft bei erfolgreicher Ausführung der Anfrage mit einem Array von [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanzen.

## Wert

any.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, auf die Eigenschaft zuzugreifen, während die Anfrage nicht abgeschlossen ist und daher das Ergebnis nicht verfügbar ist.

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel wird ein bestimmter Datensatztitel angefordert. Bei Erfolg wird der zugehörige Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) abgerufen (verfügbar als `objectStoreTitleRequest.result`), eine Eigenschaft des Datensatzes wird aktualisiert und dann wird der aktualisierte Datensatz zurück in den Objekt-Store gelegt.
Ein vollständig arbeitendes Beispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list object that has this title as its title
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.addEventListener("success", () => {
  // Grab the data object returned as the result
  const data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item
  // back into the database
  const updateTitleRequest = objectStore.put(data);

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.addEventListener("success", () => {
    displayData();
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
