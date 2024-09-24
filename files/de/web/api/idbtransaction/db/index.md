---
title: "IDBTransaction: db-Eigenschaft"
short-title: db
slug: Web/API/IDBTransaction/db
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`db`**-Eigenschaft des {{domxref("IDBTransaction")}}-Interfaces gibt die Datenbankverbindung zurück, mit der diese Transaktion verbunden ist.

## Wert

Ein {{domxref("IDBDatabase")}}-Objekt.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen einige Daten in einen Objektspeicher hinzu. Beachten Sie auch die Funktionen, die an die Transaktionsereignis-Handler angehängt sind, um über das Ergebnis der Transaktionseröffnung im Falle eines Erfolgs oder Misserfolgs zu berichten. Am Ende geben wir die zugehörige Datenbankverbindung mit `db` zurück. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// eine Instanz eines db-Objekts, in dem wir die IDB-Daten speichern
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variablen.
  // Dies wird weiter unten häufig verwendet
  db = DBOpenRequest.result;

  // Führen Sie die Funktion addData() aus, um die Daten in die Datenbank einzufügen
  addData();
};

function addData() {
  // Erstellen Sie ein neues Objekt, das in die IDB eingefügt wird
  const newItem = [
    {
      taskTitle: "Hund ausführen",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "Dezember",
      year: 2013,
      notified: "nein",
    },
  ];

  // eine Lese-/Schreib-DB-Transaktion öffnen, bereit, um die Daten hinzuzufügen
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Bericht über den Erfolg des Öffnens der Transaktion
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen: Datenbankänderung abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion aufgrund eines Fehlers nicht geöffnet. Doppelte Elemente nicht erlaubt.";
  };

  // einen Objektspeicher auf der Transaktion erstellen
  const objectStore = transaction.objectStore("toDoList");

  // unser newItem-Objekt zum Objektspeicher hinzufügen
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // melden Sie den Erfolg der Anfrage (dies bedeutet nicht, dass das Element
    // erfolgreich in der DB gespeichert wurde - dafür benötigen Sie transaction.onsuccess)
    note.appendChild(document.createElement("li")).textContent =
      "Anfrage erfolgreich.";
  };

  // Geben Sie die Datenbankverbindung (IDBDatabase) zurück, mit der diese Transaktion verbunden ist
  transaction.db;
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
- Einen Bereich von Schlüsseln festlegen: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
