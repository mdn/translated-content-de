---
title: "IDBRequest: error-Eigenschaft"
short-title: error
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`error`** schreibgeschützte Eigenschaft der [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Schnittstelle gibt den Fehler im Fall einer nicht erfolgreichen Anforderung zurück.

## Wert

Eine [`DOMException`](/de/docs/Web/API/DOMException) oder `null`, wenn kein Fehler vorliegt. Das Ausnahmeobjekt hat einen der folgenden Namen, je nachdem, was den Fehler verursacht hat.

Diese Fehler sind asynchron, was bedeutet, dass sie nicht über [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) behandelt werden können. Wenn jedoch ein `IDBRequest` einen [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignishandler zugewiesen hat, können Sie solche Fehler dennoch prüfen, indem Sie die `error`-Eigenschaft der Anforderung über das Ereignisobjekt abfragen, zum Beispiel [`event.target.error.name`](/de/docs/Web/API/DOMException/name) oder [`event.target.error.message`](/de/docs/Web/API/DOMException/message).

- `AbortError`
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch in Bearbeitung befindlichen Anforderungen diesen Fehler.
- `ConstraintError`
  - : Erhalten, wenn Sie Daten einfügen, die beim Befüllen von Speichern nicht einer Einschränkung entsprechen.
    Zum Beispiel erhalten Sie diesen Fehler, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der im Speicher bereits existiert.
- `NotReadableError`
  - : Erhalten bei nicht wiederherstellbaren Leseproblemen. Speziell signalisiert dieser Fehler, dass der Datensatz in der Datenbank vorhanden ist, der Wert jedoch nicht abgerufen werden konnte. Siehe [Übergangsfehler und nicht wiederherstellbare Lesefehler](#übergangsfehler_und_nicht_wiederherstellbare_lesefehler) unten für weitere Details.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Erhalten, wenn die Anwendung das Festplattenkontingent überschreitet. In einigen Fällen fordert der Browser den Benutzer auf, mehr Speicherplatz zu genehmigen, und der Fehler wird empfangen, wenn er die Anfrage ablehnt. In anderen Fällen verwendet der Browser Heuristiken, um zu bestimmen, ob mehr Speicherplatz zugeteilt werden kann.
- `UnknownError`
  - : Erhalten bei Übergangs-Lesefehlern, einschließlich allgemeiner Disk-IO-Fehler. Siehe [Übergangsfehler und nicht wiederherstellbare Lesefehler](#übergangsfehler_und_nicht_wiederherstellbare_lesefehler) unten für weitere Details.
- `VersionError`
  - : Erhalten, wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version zu öffnen, als sie bereits hat.

### Übergangsfehler und nicht wiederherstellbare Lesefehler

Lesefehler treten auf, wenn IndexedDB Werte speichert und es dann nicht gelingt, diese Werte zu lesen, obwohl die zugehörigen Datensätze noch in der Datenbank vorhanden sind.

Lesefehler können eine von zwei Typen sein — **vorübergehend** oder **nicht wiederherstellbar**:

Vorübergehende Lesefehler werden durch einen `UnknownError`-Typ signalisiert und werden normalerweise durch wenig Speicher verursacht. Dies sollte bei kleinen Datenbanken kein Problem darstellen. Um Situationen mit wenig Speicher in großen Datenbanken zu vermeiden, versuchen Sie, den Datenbankzugriff so zu teilen, dass nur die benötigten Datensätze jeweils geladen werden, zum Beispiel durch die Verwendung spezifischer [Schlüsselbereiche](/de/docs/Web/API/IDBKeyRange) im Zusammenhang mit einer Suchanfrage eines Benutzers oder einem Seitenmechanismus. Wenn ein niedriger Speicherfehler auftritt, kann der Benutzer möglicherweise aufgefordert werden, andere Anwendungen zu schließen, um auf Betriebssystemebene Speicherplatz freizugeben.

Nicht wiederherstellbare Lesefehler werden durch einen `NotReadableError`-Typ signalisiert und werden verursacht, indem Quelldateien gelöscht werden.

Zum Beispiel speichern einige Browser große Werte (zum Beispiel Audio-Dateiblobs für eine Offline-Podcast-App) als separate Dateien, die über einen in der Datenbank gespeicherten Verweis zugegriffen werden. Es wurde beobachtet, dass diese separaten Dateien gelöscht werden können, da sie Benutzern als undurchsichtige Dateien angezeigt werden, wenn sie Festplattenspeicher-Wiederherstellungsprogramme verwenden, was zu nicht wiederherstellbaren Lesefehlern führt, wenn das nächste Mal auf IndexedDB zugegriffen wird.

Mögliche Korrekturmaßnahmen für nicht wiederherstellbare Lesefehler können das Benachrichtigen des Benutzers, das Löschen des Eintrags aus der Datenbank und das erneute Abrufen der Daten vom Server umfassen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn versucht wird, auf die Eigenschaft zuzugreifen, wenn die Anfrage nicht abgeschlossen ist und der Fehler daher nicht verfügbar ist.

## Beispiele

Im folgenden Beispiel wird ein bestimmter Datensatztitel angefordert, beim `onsuccess` wird der zugehörige Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) abgerufen (verfügbar als `objectStoreTitleRequest.result`), eine Eigenschaft des Datensatzes aktualisiert und dann der aktualisierte Datensatz wieder in den Object Store eingefügt. Unten ist auch eine `onerror`-Funktion enthalten, die meldet, was der Fehler war, wenn die Anfrage fehlschlägt. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Einstellen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
