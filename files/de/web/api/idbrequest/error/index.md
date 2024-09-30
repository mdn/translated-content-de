---
title: "IDBRequest: error-Eigenschaft"
short-title: error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`error`** schreibgeschützte Eigenschaft des
[`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt den Fehler im Falle einer fehlgeschlagenen
Anfrage zurück.

## Wert

Ein [`DOMException`](/de/docs/Web/API/DOMException) oder `null`, wenn kein Fehler vorliegt. Folgende Fehlernamen werden im Ausnahmeobjekt zurückgegeben:

- `AbortError`
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch laufenden Anfragen diesen Fehler.
- `ConstraintError`
  - : Wenn Sie Daten einfügen, die nicht mit einer Einschränkung übereinstimmen.
    Es ist ein Ausnahmetyp für das Erstellen von Stores und Indizes.
    Dieser Fehler tritt zum Beispiel auf, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der bereits im Datensatz existiert.
- `QuotaExceededError`
  - : Wenn Ihnen der Speicherplatz ausgeht und der Benutzer Ihnen nicht mehr Platz gewährt.
- `UnknownError`
  - : Wenn die Operation aus Gründen scheitert, die nicht direkt mit der Datenbank zusammenhängen.
    Ein Beispiel für ein Scheitern sind Festplatten-IO-Fehler.
- `VersionError`
  - : Wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version zu öffnen, als sie bereits hat.

Zusätzlich zu den an das [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt gesendeten Fehlercodes
können asynchrone Operationen auch Ausnahmen auslösen. Die Liste beschreibt Probleme, die
beim Ausführen der Anfrage auftreten könnten, Sie können jedoch auch auf andere
Probleme stoßen, wenn die Anfrage gestellt wird. Wenn z. B. auf das Ergebnis zugegriffen wird,
während die Anfrage nicht abgeschlossen ist, wird die Ausnahme `InvalidStateError` ausgelöst.

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatz-Titel an, `onsuccess` erhält den
zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) (verfügbar als
`objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt den
aktualisierten Datensatz wieder in den Object Store ab. Am Ende ist auch eine
`onerror`-Funktion enthalten, die den Fehler meldet, wenn die Anfrage fehlschlägt.
Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list with the specified title
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

objectStoreTitleRequest.onerror = () => {
  // If an error occurs with the request, log what it is
  console.log(
    `There has been an error with retrieving your data: ${objectStoreTitleRequest.error}`,
  );
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
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursors verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
