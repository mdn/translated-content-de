---
title: "IDBObjectStore: get()-Methode"
short-title: get()
slug: Web/API/IDBObjectStore/get
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`get()`**-Methode des {{domxref("IDBObjectStore")}}-Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück und, in einem separaten Thread, das Objekt, das durch den angegebenen Schlüssel ausgewählt wurde. Dies dient zum Abrufen bestimmter Datensätze aus einem Objekt-Store.

Wenn ein Wert erfolgreich gefunden wird, wird eine strukturierte Kopie davon erstellt und als [`result`](/de/docs/Web/API/IDBRequest/result) des Anfrageobjekts gesetzt.

> [!NOTE]
> Diese Methode liefert dasselbe Ergebnis für: a) einen Datensatz, der nicht in der Datenbank existiert, und b) einen Datensatz, der einen undefinierten Wert hat. Um diese Situationen zu unterscheiden, rufen Sie die `openCursor()`-Methode mit dem gleichen Schlüssel auf. Diese Methode stellt dann einen Cursor bereit, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel oder der Schlüsselbereich, der den abzurufenden Datensatz identifiziert.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse in Bezug auf diese Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Anfrageobjekts der Wert des ersten Datensatzes, der mit dem angegebenen Schlüssel oder Schlüsselbereich übereinstimmt.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref("IDBObjectStore")}} gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Codeausschnitt öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und rufen einen bestimmten Datensatz aus dem Objekt-Store mit `get()` ab — einen Beispieldatensatz mit dem Schlüssel "Walk dog". Sobald dieses Datenobjekt abgerufen wurde, könnten Sie es mit normalem JavaScript aktualisieren und dann mit einer {{domxref("IDBObjectStore.put")}}-Operation wieder in die Datenbank zurücklegen. Für ein vollständiges Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variablen.
  // Dies wird unten häufig verwendet
  db = DBOpenRequest.result;

  // Führen Sie die getData()-Funktion aus, um die Daten aus der Datenbank zu holen
  getData();
};

function getData() {
  // Öffnen Sie eine Lese-/Schreib-Datenbanktransaktion, bereit zum Abrufen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Berichten Sie über den Erfolg des Abschlusses der Transaktion, wenn alles erledigt ist
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      `Transaktion aufgrund eines Fehlers nicht geöffnet: ${transaction.error}`;
  };

  // Erstellen Sie einen Objekt-Store auf der Transaktion
  const objectStore = transaction.objectStore("toDoList");

  // Stellen Sie eine Anfrage, um einen Datensatz nach Schlüssel aus dem Objekt-Store abzurufen
  const objectStoreRequest = objectStore.get("Walk dog");

  objectStoreRequest.onsuccess = (event) => {
    // Berichten Sie über den Erfolg unserer Anfrage
    note.appendChild(document.createElement("li")).textContent =
      "Anfrage erfolgreich.";

    const myRecord = objectStoreRequest.result;
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
