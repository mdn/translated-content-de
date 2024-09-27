---
title: "IDBRequest: error-Eigenschaft"
short-title: error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`error`**-Eigenschaft des [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt den Fehler im Falle einer fehlgeschlagenen Anfrage zurück.

## Wert

Ein [`DOMException`](/de/docs/Web/API/DOMException) oder `null`, falls kein Fehler vorliegt. Die folgenden Fehlermeldungen werden im Ausnahmeobjekt zurückgegeben:

- `AbortError`
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch laufenden Anfragen diesen Fehler.
- `ConstraintError`
  - : Wenn Sie Daten einfügen, die nicht einer Einschränkung entsprechen.
    Es handelt sich um einen Ausnahmetyp für das Erstellen von Stores und Indexen.
    Sie erhalten diesen Fehler zum Beispiel, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der bereits im Record existiert.
- `QuotaExceededError`
  - : Wenn Ihnen der Festplattenspeicherplatz ausgeht und der Benutzer Ihnen nicht mehr Platz gewährt.
- `UnknownError`
  - : Wenn die Operation aus Gründen fehlschlägt, die nicht direkt mit der Datenbank verbunden sind.
    Ein Beispiel hierfür ist ein Fehler aufgrund von Festplatten-E/A-Fehlern.
- `VersionError`
  - : Wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version zu öffnen, als sie bereits hat.

Zusätzlich zu den Fehlercodes, die an das [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt gesendet werden, können auch asynchrone Operationen Ausnahmen auslösen. Die Liste beschreibt Probleme, die bei der Ausführung der Anfrage auftreten könnten, aber Sie könnten auch auf andere Probleme stoßen, wenn die Anfrage gestellt wird. Beispielsweise wird die `InvalidStateError`-Ausnahme ausgelöst, wenn auf das Ergebnis zugegriffen wird, während die Anfrage noch nicht abgeschlossen ist.

## Beispiele

Im folgenden Beispiel wird ein bestimmter Titel eines Records angefordert, `onsuccess` erhält den zugehörigen Record aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) (verfügbar gemacht als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Records und speichert dann den aktualisierten Record zurück in den Objekt-Store. Am Ende ist auch eine `onerror`-Funktion enthalten, die berichtet, was der Fehler war, falls die Anfrage fehlschlägt. Ein vollständiges Arbeitsbeispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
