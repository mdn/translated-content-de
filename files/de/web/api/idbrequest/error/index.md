---
title: "IDBRequest: error Eigenschaft"
short-title: error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`error`**-Eigenschaft des
[`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt den Fehler im Falle einer fehlgeschlagenen Anfrage zurück.

## Wert

Ein [`DOMException`](/de/docs/Web/API/DOMException) oder `null`, wenn kein Fehler vorliegt. Das Ausnahmeobjekt hat je nach dem verursachenden Fehler einen der folgenden Namen.

Diese Fehler sind asynchron und können daher nicht über [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) behandelt werden. Wenn jedoch einem `IDBRequest` ein [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignishandler zugewiesen ist, können Sie solche Fehler dennoch inspizieren, indem Sie die `error`-Eigenschaft der Anfrage über das Ereignisobjekt abfragen, zum Beispiel [`event.target.error.name`](/de/docs/Web/API/DOMException/name) oder [`event.target.error.message`](/de/docs/Web/API/DOMException/message).

- `AbortError`
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch laufenden Anfragen diesen Fehler.
- `ConstraintError`
  - : Tritt auf, wenn Sie Daten einfügen, die nicht einer Einschränkung entsprechen, wenn Sie Stores befüllen. Beispielsweise erhalten Sie diesen Fehler, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der bereits im Store existiert.
- `NotReadableError`
  - : Wird bei nicht behebbaren Lesefehlern empfangen. Insbesondere signalisiert dieser Fehler, dass sich der Datensatz in der Datenbank befindet, der Wert jedoch nicht abgerufen werden konnte. Weitere Details finden Sie unten unter [Vorübergehende und nicht behebbare Lesefehler](#vorübergehende_und_nicht_behebbare_lesefehler).
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird empfangen, wenn der Anwendung der Speicherplatz ausgeht. In einigen Fällen fordert der Browser den Benutzer auf, mehr Speicherplatz bereitzustellen. Der Fehler tritt auf, wenn die Anfrage abgelehnt wird. In anderen Fällen verwendet der Browser Heuristiken, um zu bestimmen, ob mehr Speicherplatz zugewiesen werden kann.
- `UnknownError`
  - : Wird für vorübergehende Lesefehler empfangen, einschließlich allgemeiner Festplatten-IO-Fehler. Weitere Details finden Sie unten unter [Vorübergehende und nicht behebbare Lesefehler](#vorübergehende_und_nicht_behebbare_lesefehler).
- `VersionError`
  - : Wird empfangen, wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version zu öffnen als der, die bereits vorhanden ist.

### Vorübergehende und nicht behebbare Lesefehler

Lesefehler treten auf, wenn eine IndexedDB Werte speichert und anschließend das Lesen dieser Werte fehlschlägt, obwohl die zugehörigen Datensätze noch in der Datenbank vorhanden sind.

Lesefehler können zwei Arten aufweisen — **vorübergehend** oder **nicht behebbar**:

Vorübergehende Lesefehler werden durch einen `UnknownError`-Typ angezeigt und werden normalerweise durch wenig Speicher verursacht. Für kleine Datenbanken sollte dies kein Problem sein. Um Situationen mit wenig Speicher in großen Datenbanken zu vermeiden, versuchen Sie, den Datenbankzugriff so zu unterteilen, dass nur die Datensätze geladen werden, die Sie zu einem bestimmten Zeitpunkt benötigen, z. B. mithilfe spezifischer [Schlüsselbereiche](/de/docs/Web/API/IDBKeyRange), die sich auf die Suchanfrage eines Benutzers oder einen Mechanismus zur Seitennummerierung beziehen. Wenn ein Fehler aufgrund von zu wenig Speicher auftritt, kann der Benutzer aufgefordert werden, andere Anwendungen zu schließen, um Platz auf Betriebssystemebene freizugeben.

Nicht behebbare Lesefehler werden durch einen `NotReadableError`-Typ angezeigt und entstehen durch das Löschen von Quelldateien.

Ein Beispiel: Einige Browser speichern große Werte (z.B. Audio-Dateiblobs für eine Offline-Podcast-App) als separate Dateien, auf die über einen in der Datenbank gespeicherten Verweis zugegriffen wird. Es wurde beobachtet, dass diese separaten Dateien gelöscht werden können, da sie als undurchsichtige Dateien erscheinen, wenn Benutzer Programme zur Speicherplatzrückgewinnung verwenden, was zu nicht behebbaren Lesefehlern führt, wenn anschließend auf die IndexedDB zugegriffen wird.

Mögliche Korrekturmaßnahmen für nicht behebbare Lesefehler könnten beinhalten, den Benutzer zu benachrichtigen, den Eintrag aus der Datenbank zu löschen und dann zu versuchen, die Daten vom Server erneut abzurufen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, auf die Eigenschaft zuzugreifen, wenn die Anfrage nicht abgeschlossen ist und der Fehler daher nicht verfügbar ist.

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatz-Titel an, `onsuccess` ruft den
zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) ab (verfügbar als
`objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt den
aktualisierten Datensatz wieder im Object Store ab. Am Ende ist auch eine
`onerror`-Funktion enthalten, die meldet, was der Fehler war, falls die Anfrage fehlschlägt.
Ein vollständiges funktionierendes Beispiel finden Sie in unserer [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
