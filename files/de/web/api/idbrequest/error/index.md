---
title: "IDBRequest: error-Eigenschaft"
short-title: error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: 733c40043bfb7a55fb01644d52000149b2dab13c
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`error`**-Schreibgeschützte Eigenschaft der [`IDBRequest`](/de/docs/Web/API/IDBRequest) Schnittstelle gibt den Fehler im Falle einer erfolglosen Anfrage zurück.

## Wert

Ein [`DOMException`](/de/docs/Web/API/DOMException) oder `null`, wenn kein Fehler vorliegt. Das Ausnahmeobjekt wird einen der folgenden Namen haben, abhängig davon, was den Fehler verursacht hat.

Diese Fehler sind asynchron, was bedeutet, dass sie nicht über [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) behandelt werden können. Wenn jedoch einem `IDBRequest` ein [`error`](/de/docs/Web/API/IDBRequest/error)-Ereignishandler zugewiesen ist, können Sie solche Fehler dennoch überprüfen, indem Sie die `error`-Eigenschaft der Anfrage über das Ereignisobjekt abfragen, zum Beispiel [`event.target.error.name`](/de/docs/Web/API/DOMException/name) oder [`event.target.error.message`](/de/docs/Web/API/DOMException/message).

- `AbortError`
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch in Bearbeitung befindlichen Anfragen diesen Fehler.
- `ConstraintError`
  - : Wird empfangen, wenn Sie Daten einfügen, die einer Einschränkung beim Befüllen von Speicherbereichen nicht entsprechen. Zum Beispiel erhalten Sie diesen Fehler, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der bereits im Speicher vorhanden ist.
- `NotReadableError`
  - : Wird für nicht wiederherstellbare Leseausfallfehler empfangen. Speziell signalisiert dieser Fehler, dass der Datensatz in der Datenbank vorhanden ist, der Wert jedoch nicht abgerufen werden konnte. Siehe [Vorübergehende und nicht wiederherstellbare Lesefehler](#vorübergehende_und_nicht_wiederherstellbare_lesefehler) unten für weitere Details.
- `QuotaExceededError`
  - : Wird empfangen, wenn die Anwendung kein Speicherkontingent mehr hat. In einigen Fällen fragen Browser den Benutzer nach mehr Speicherplatz, und der Fehler wird empfangen, wenn sie die Anfrage ablehnen. In anderen Fällen verwenden Browser Heuristiken, um festzustellen, ob mehr Speicherplatz zugewiesen werden kann.
- `UnknownError`
  - : Wird für vorübergehende Lesefehler empfangen, einschließlich allgemeiner Festplatten-I/O-Fehler. Siehe [Vorübergehende und nicht wiederherstellbare Lesefehler](#vorübergehende_und_nicht_wiederherstellbare_lesefehler) unten für weitere Details.
- `VersionError`
  - : Wird empfangen, wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version zu öffnen als der, die sie bereits hat.

### Vorübergehende und nicht wiederherstellbare Lesefehler

Lesefehler treten auf, wenn ein IndexedDB-Werte speichert und anschließend diese Werte nicht lesen kann, obwohl die zugehörigen Datensätze noch in der Datenbank vorhanden sind.

Lesefehler können in zwei Typen unterteilt werden — **vorübergehend** oder **nicht wiederherstellbar**:

Vorübergehende Lesefehler werden durch einen `UnknownError`-Typ signalisiert und werden normalerweise durch wenig Speicher verursacht. Dies sollte bei kleinen Datenbanken kein Problem sein. Um Situationen mit wenig Speicher in großen Datenbanken zu vermeiden, versuchen Sie, den Datenbankzugriff so zu teilen, dass Sie nur die Datensätze laden, die Sie zu einem bestimmten Zeitpunkt benötigen, zum Beispiel durch Verwendung bestimmter [Schlüsselbereiche](/de/docs/Web/API/IDBKeyRange), die sich auf die Suchanfrage eines Benutzers oder einen Paginierungsmechanismus beziehen. Sollte ein Fehler aufgrund von geringem Speicher auftreten, wird der Benutzer möglicherweise aufgefordert, andere Anwendungen zu schließen, um Speicherplatz auf Betriebssystem-Ebene freizugeben.

Nicht wiederherstellbare Lesefehler werden durch einen `NotReadableError`-Typ signalisiert und werden durch das Löschen von Quelldateien verursacht.

Zum Beispiel speichern einige Browser große Werte (zum Beispiel Audio-Datei-Blobs für eine Offline-Podcast-App) als separate Dateien, die über einen Verweis im Datenbankzugriff erreichbar sind. Es wurde beobachtet, dass diese separaten Dateien gelöscht werden können, da sie den Benutzern als undurchsichtige Dateien angezeigt werden, wenn sie Speicherplatz-Wiederherstellungsprogramme verwenden, was zu nicht wiederherstellbaren Lesefehlern führt, wenn das nächste Mal auf IndexedDB zugegriffen wird.

Mögliche Korrekturmaßnahmen für nicht wiederherstellbare Lesefehler könnten umfassen, den Benutzer zu benachrichtigen, den Eintrag aus der Datenbank zu löschen und dann zu versuchen, die Daten vom Server erneut abzurufen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, auf die Eigenschaft zuzugreifen, obwohl die Anforderung nicht abgeschlossen ist und daher der Fehler nicht verfügbar ist.

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatztitel an, `onsuccess` erhält den zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt den aktualisierten Datensatz dann wieder in den Objektspeicher. Ebenfalls am Ende enthalten ist eine `onerror`-Funktion, die angibt, was der Fehler war, falls die Anfrage fehlschlägt. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
    `There has been an error with retrieving your data:
    ${objectStoreTitleRequest.error.name}: ${objectStoreTitleRequest.error.message}`,
  );
};
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
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
