---
title: "IDBRequest: Eigenschaft error"
short-title: error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`error`** der Schnittstelle [`IDBRequest`](/de/docs/Web/API/IDBRequest) gibt den Fehler zurück, wenn eine Anfrage fehlschlägt.

## Wert

Eine [`DOMException`](/de/docs/Web/API/DOMException) oder `null`, wenn kein Fehler vorliegt. Das Ausnahmeobjekt hat abhängig von der Fehlerursache einen der folgenden Namen.

Diese Fehler treten asynchron auf und können daher nicht mit [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) behandelt werden. Wenn einem `IDBRequest` jedoch ein Event-Handler für das Ereignis [`error`](/de/docs/Web/API/IDBRequest/error_event) zugewiesen ist, können Sie solche Fehler über die Eigenschaft `error` der Anfrage anhand des Ereignisobjekts untersuchen, beispielsweise über [`event.target.error.name`](/de/docs/Web/API/DOMException/name) oder [`event.target.error.message`](/de/docs/Web/API/DOMException/message).

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch laufenden Anfragen diesen Fehler.
- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn Sie beim Befüllen von Stores Daten einfügen, die eine Einschränkung verletzen. Diesen Fehler erhalten Sie beispielsweise, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der im Store bereits vorhanden ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt bei nicht behebbaren Lesefehlern auf. Dieser Fehler zeigt insbesondere an, dass der Datensatz in der Datenbank vorhanden ist, sein Wert aber nicht abgerufen werden konnte. Weitere Informationen finden Sie unten unter [Vorübergehende und nicht behebbare Lesefehler](#vorübergehende_und_nicht_behebbare_lesefehler).
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Tritt auf, wenn der Anwendung kein Speicherplatz innerhalb ihres Kontingents mehr zur Verfügung steht. In manchen Fällen fragen Browser den Benutzer, ob mehr Speicherplatz bereitgestellt werden darf; der Fehler tritt auf, wenn dieser die Anfrage ablehnt. In anderen Fällen bestimmt der Browser anhand von Heuristiken, ob mehr Speicherplatz zugewiesen werden kann.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt bei vorübergehenden Lesefehlern auf, darunter allgemeine Datenträger-E/A-Fehler. Weitere Informationen finden Sie unten unter [Vorübergehende und nicht behebbare Lesefehler](#vorübergehende_und_nicht_behebbare_lesefehler).
- `VersionError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version als ihrer aktuellen Version zu öffnen.

### Vorübergehende und nicht behebbare Lesefehler

Lesefehler treten auf, wenn eine IndexedDB Werte speichert und diese später nicht mehr lesen kann, obwohl die zugehörigen Datensätze noch in der Datenbank vorhanden sind.

Es gibt zwei Arten von Lesefehlern: **vorübergehende** und **nicht behebbare**.

Vorübergehende Lesefehler werden durch einen Fehler vom Typ `UnknownError` angezeigt und sind meist auf knappen Arbeitsspeicher zurückzuführen. Bei kleinen Datenbanken sollte dies kein Problem sein. Um bei großen Datenbanken Situationen mit knappem Arbeitsspeicher zu vermeiden, sollten Sie den Datenbankzugriff so aufteilen, dass jeweils nur die benötigten Datensätze geladen werden. Verwenden Sie dazu beispielsweise bestimmte [Schlüsselbereiche](/de/docs/Web/API/IDBKeyRange), die zur Suchanfrage eines Benutzers passen, oder eine Paginierung. Wenn ein Fehler wegen knappen Arbeitsspeichers auftritt, kann der Benutzer aufgefordert werden, andere Anwendungen zu schließen, um Arbeitsspeicher auf Betriebssystemebene freizugeben.

Nicht behebbare Lesefehler werden durch einen Fehler vom Typ `NotReadableError` angezeigt und entstehen, wenn Quelldateien gelöscht wurden.

Manche Browser speichern beispielsweise große Werte (etwa Audiodatei-Blobs für eine Offline-Podcast-App) als separate Dateien, auf die über eine in der Datenbank gespeicherte Referenz zugegriffen wird. Es wurde beobachtet, dass diese separaten Dateien gelöscht werden können, weil sie Benutzern bei der Verwendung von Programmen zur Freigabe von Speicherplatz als undurchsichtige Dateien erscheinen. Beim nächsten Zugriff auf die IndexedDB führt dies zu nicht behebbaren Lesefehlern.

Mögliche Maßnahmen bei nicht behebbaren Lesefehlern sind, den Benutzer zu benachrichtigen, den Eintrag aus der Datenbank zu löschen und anschließend zu versuchen, die Daten erneut vom Server abzurufen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn auf die Eigenschaft zugegriffen wird, bevor die Anfrage abgeschlossen ist und der Fehler daher noch nicht verfügbar ist.

## Beispiele

Das folgende Beispiel fragt einen bestimmten Datensatztitel ab. `onsuccess` ruft den zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) ab (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und speichert den aktualisierten Datensatz anschließend wieder im Object Store. Am Ende ist außerdem eine `onerror`-Funktion enthalten, die bei einem Fehlschlag der Anfrage den aufgetretenen Fehler meldet. Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserer App [Aufgabenbenachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [Aufgabenbenachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
