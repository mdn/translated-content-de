---
title: "IDBRequest: error-Eigenschaft"
short-title: error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`error`** Nur-Lese-Eigenschaft des
[`IDBRequest`](/de/docs/Web/API/IDBRequest)-Interfaces gibt den Fehler zurück, wenn eine Anfrage nicht erfolgreich war.

## Wert

Ein [`DOMException`](/de/docs/Web/API/DOMException) oder `null`, wenn kein Fehler vorliegt. Das Ausnahmeobjekt wird je nach Fehlerursache einen der folgenden Namen haben.

Diese Fehler sind asynchron, was bedeutet, dass sie nicht über [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) behandelt werden können. Wenn jedoch ein `IDBRequest` einen zugewiesenen [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignishandler hat, können Sie solche Fehler dennoch überprüfen, indem Sie die `error`-Eigenschaft der Anfrage über das Ereignisobjekt abfragen, zum Beispiel [`event.target.error.name`](/de/docs/Web/API/DOMException/name) oder [`event.target.error.message`](/de/docs/Web/API/DOMException/message).

- `AbortError`
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch ausstehenden Anfragen diesen Fehler.
- `ConstraintError`
  - : Erhalten, wenn Sie Daten einfügen, die nicht mit einer Einschränkung übereinstimmen, während Sie Speicher populieren. Zum Beispiel erhalten Sie diesen Fehler, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der bereits im Speicher existiert.
- `NotReadableError`
  - : Erhalten für nicht wiederherstellbare Leseausfallfehler. Insbesondere signalisiert dieser Fehler, dass der Datensatz in der Datenbank vorhanden ist, der Wert jedoch nicht abgerufen werden konnte. Weitere Einzelheiten finden Sie unten unter [Vorübergehende und nicht wiederherstellbare Lesefehler](#vorübergehende_und_nicht_wiederherstellbare_lesefehler).
- `QuotaExceededError`
  - : Erhalten, wenn die Anwendung den Festplattenkontingent überschreitet. In einigen Fällen bitten Browser den Benutzer um mehr Speicherplatz, und der Fehler wird empfangen, wenn die Anfrage abgelehnt wird. In anderen Fällen verwenden die Browser Heuristiken, um zu bestimmen, ob mehr Speicherplatz zugewiesen werden kann.
- `UnknownError`
  - : Erhalten für vorübergehende Leseausfallfehler, einschließlich allgemeiner Disk-IO-Fehler. Weitere Einzelheiten finden Sie unten unter [Vorübergehende und nicht wiederherstellbare Lesefehler](#vorübergehende_und_nicht_wiederherstellbare_lesefehler).
- `VersionError`
  - : Erhalten, wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version zu öffnen als der, die sie bereits hat.

### Vorübergehende und nicht wiederherstellbare Lesefehler

Lesefehler treten auf, wenn ein IndexedDB Werte speichert und anschließend beim Abrufen dieser Werte scheitert, obwohl die zugehörigen Datensätze noch in der Datenbank vorhanden sind.

Lesefehler können zwei Typen sein — **vorübergehend** oder **nicht wiederherstellbar**:

Vorübergehende Lesefehler werden durch einen `UnknownError`-Typ signalisiert und werden normalerweise durch niedrigen Speicher verursacht. Dies sollte kein Problem für kleine Datenbanken darstellen. Um Situationen mit niedrigem Speicher in großen Datenbanken zu vermeiden, versuchen Sie den Datenbankzugriff so aufzuteilen, dass nur die benötigten Datensätze geladen werden, zum Beispiel durch die Verwendung bestimmter [Schlüsselbereiche](/de/docs/Web/API/IDBKeyRange), die sich auf die Suchanfrage eines Benutzers oder einen Paginierungsmechanismus beziehen. Wenn ein Fehler wegen niedrigem Speicher auftritt, kann der Benutzer aufgefordert werden, andere Anwendungen zu schließen, um auf Betriebssystemebene Speicher freizugeben.

Nicht wiederherstellbare Lesefehler werden durch einen `NotReadableError`-Typ signalisiert und werden durch das Löschen von Quelldateien verursacht.

Einige Browser speichern große Werte (zum Beispiel Audioblobs für eine Offline-Podcast-App) als separate Dateien, auf die über eine in der Datenbank gespeicherte Referenz zugegriffen wird. Es wurde beobachtet, dass diese separaten Dateien gelöscht werden können, da sie Benutzern als opake Dateien erscheinen, wenn sie Programme zur Wiederherstellung von Speicherplatz verwenden, was zu nicht wiederherstellbaren Lesefehlern führt, wenn das nächste Mal auf die IndexedDB zugegriffen wird.

Mögliche Korrekturmaßnahmen für nicht wiederherstellbare Lesefehler könnten die Benachrichtigung des Benutzers, das Löschen des Eintrags aus der Datenbank und danach der Versuch, die Daten vom Server erneut abzurufen, umfassen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, auf die Eigenschaft zuzugreifen, während die Anfrage nicht abgeschlossen ist und der Fehler daher nicht verfügbar ist.

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatz-Titel an, bei `onsuccess` wird der zugehörige Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) abgerufen (verfügbar gemacht als `objectStoreTitleRequest.result`), eine Eigenschaft des Datensatzes wird aktualisiert und dann wird der aktualisierte Datensatz wieder in den Objektspeicher gestellt. Am Ende ist auch eine `onerror`-Funktion enthalten, die darüber berichtet, was der Fehler war, wenn die Anfrage fehlschlägt.
Für ein vollständig funktionierendes Beispiel siehe unsere [Aufgaben-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [Aufgaben-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
