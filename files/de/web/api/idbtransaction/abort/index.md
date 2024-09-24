---
title: "IDBTransaction: abort()-Methode"
short-title: abort()
slug: Web/API/IDBTransaction/abort
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`abort()`**-Methode des {{domxref("IDBTransaction")}}-Interfaces macht alle Änderungen an Objekten in der mit dieser Transaktion verbundenen Datenbank rückgängig.

Alle ausstehenden {{domxref("IDBRequest")}}-Objekte, die während dieser Transaktion erstellt wurden, haben ihr {{domxref("IDBRequest.error")}}-Attribut auf einen `AbortError` {{domxref("DOMException")}} gesetzt.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wirft einen Fehler, wenn die Transaktion bereits abgeschlossen oder abgebrochen wurde.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreib-Transaktion in unserer Datenbank und fügen einige Daten zu einem Objekt-Store hinzu. Beachten Sie auch die Funktionen, die an Ereignis-Handler der Transaktion angehängt sind, um über das Ergebnis des Öffnens der Transaktion im Erfolgs- oder Fehlerfall zu berichten. Am Ende brechen wir alle Aktivitäten ab, die unter der aktuellen Transaktion mit `abort()` durchgeführt wurden. Für ein voll funktionsfähiges Beispiel sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// eine Instanz eines DB-Objekts für die Speicherung der IDB-Daten
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variablen. Diese wird oft unten verwendet
  db = DBOpenRequest.result;

  // Führen Sie die addData()-Funktion aus, um die Daten zur Datenbank hinzuzufügen
  addData();
};

function addData() {
  // Ein neues Objekt erstellen, das in die IDB eingefügt werden soll
  const newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "December",
      year: 2013,
      notified: "no",
    },
  ];

  // Öffnen Sie eine Lese-/Schreib-DB-Transaktion, bereit zum Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Bericht über den Erfolg des Öffnens der Transaktion
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen: Datenbankmodifikation beendet.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion nicht geöffnet aufgrund eines Fehlers. Doppelte Elemente sind nicht erlaubt.";
  };

  // Einen Objekt-Store auf der Transaktion erstellen
  const objectStore = transaction.objectStore("toDoList");

  // Unser newItem-Objekt zum Objekt-Store hinzufügen
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // Bericht über den Erfolg der Anfrage (dies bedeutet nicht, dass das Element erfolgreich in der DB gespeichert wurde - dazu benötigen Sie transaction.onsuccess)
    note.appendChild(document.createElement("li")).textContent =
      "Anfrage erfolgreich.";
  };

  // Die Transaktion, die wir gerade gemacht haben, abbrechen
  transaction.abort();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Einen Schlüsselbereich festlegen: {{domxref("IDBKeyRange")}}
- Ihre Daten abrufen und Änderungen vornehmen: {{domxref("IDBObjectStore")}}
- Cursors verwenden: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
