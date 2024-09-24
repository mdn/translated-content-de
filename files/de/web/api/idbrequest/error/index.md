---
title: "IDBRequest: Fehler-Eigenschaft"
short-title: Fehler
slug: Web/API/IDBRequest/error
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`error`** schreibgeschützte Eigenschaft des {{domxref("IDBRequest")}}-Interfaces gibt den Fehler im Falle einer fehlgeschlagenen Anfrage zurück.

## Wert

Ein {{domxref("DOMException")}} oder `null`, wenn kein Fehler vorliegt. Die folgenden Fehlernamen werden im Ausnahmeobjekt zurückgegeben:

- `AbortError`
  - : Wenn Sie die Transaktion abbrechen, erhalten alle noch in Bearbeitung befindlichen Anfragen diesen Fehler.
- `ConstraintError`
  - : Wenn Sie Daten einfügen, die nicht mit einer Einschränkung übereinstimmen.
    Es handelt sich um einen Ausnahme-Typ zum Erstellen von Speichern und Indizes.
    Sie erhalten diesen Fehler beispielsweise, wenn Sie versuchen, einen neuen Schlüssel hinzuzufügen, der bereits im Datensatz vorhanden ist.
- `QuotaExceededError`
  - : Wenn Sie das Speicherplatzkontingent überschreiten und der Benutzer Ihnen nicht mehr Platz gewährt hat.
- `UnknownError`
  - : Wenn die Operation aus Gründen fehlschlägt, die nicht direkt mit der Datenbank verbunden sind.
    Ein Fehler aufgrund von Festplatten-E/A-Fehlern ist ein solches Beispiel.
- `VersionError`
  - : Wenn Sie versuchen, eine Datenbank mit einer niedrigeren Version zu öffnen als die, die sie bereits hat.

Zusätzlich zu den an das {{ domxref("IDBRequest") }}-Objekt gesendeten Fehlercodes können asynchrone Operationen auch Ausnahmen auslösen. Die Liste beschreibt Probleme, die bei der Ausführung der Anfrage auftreten können, aber Sie können auch auf andere Probleme stoßen, wenn die Anfrage gestellt wird. Zum Beispiel, wenn auf das Ergebnis zugegriffen wird, während die Anfrage nicht abgeschlossen ist, wird die Ausnahme `InvalidStateError` ausgelöst.

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatztitel an, `onsuccess` erhält den zugehörigen Datensatz aus dem {{domxref("IDBObjectStore")}} (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und fügt den aktualisierten Datensatz dann wieder in den Datenspeicher ein. Unten ist auch eine `onerror`-Funktion enthalten, die angibt, welcher Fehler aufgetreten ist, falls die Anfrage fehlschlägt. Ein vollständiges, funktionierendes Beispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Öffnen Sie wie gewohnt eine Transaktion
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Holen Sie die To-do-Liste mit dem angegebenen Titel
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Holen Sie das als Ergebnis zurückgegebene Datenobjekt
  const data = objectStoreTitleRequest.result;

  // Aktualisieren Sie den Wert "notified" im Objekt auf "yes"
  data.notified = "yes";

  // Erstellen Sie eine weitere Anfrage, die das Element
  // zurück in die Datenbank einfügt
  const updateTitleRequest = objectStore.put(data);

  // Wenn diese neue Anfrage erfolgreich ist, führen Sie die displayData()
  // Funktion erneut aus, um die Anzeige zu aktualisieren
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};

objectStoreTitleRequest.onerror = () => {
  // Wenn ein Fehler bei der Anfrage auftritt, protokollieren Sie, welcher es ist
  console.log(
    `Es ist ein Fehler beim Abrufen Ihrer Daten aufgetreten: ${objectStoreTitleRequest.error}`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselsortiments: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
