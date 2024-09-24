---
title: "IDBTransaction: Modus-Eigenschaft"
short-title: Modus
slug: Web/API/IDBTransaction/mode
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`mode`**-Eigenschaft der {{domxref("IDBTransaction")}}-Schnittstelle gibt den aktuellen Modus für den Zugriff auf die Daten in den Objekt-Speichern im Rahmen der Transaktion zurück (d.h. soll der Modus nur lesen oder sollen auch Daten in den Objekt-Speichern geschrieben werden?). Der Standardwert ist `readonly`.

## Wert

Ein Objekt, das den Modus zur Isolierung des Zugriffs auf Daten in den aktuellen Objekt-Speichern definiert:
Ein String, der den Modus zur Isolierung des Zugriffs auf Daten in den aktuellen Objekt-Speichern definiert. Die folgenden Werte sind verfügbar:

- `readonly`
  - : Erlaubt das Lesen, aber nicht das Ändern von Daten.
- `readwrite`
  - : Erlaubt das Lesen und Ändern von Daten in bestehenden Datenspeichern.
- `versionchange`
  - : Erlaubt jede Operation, einschließlich derjenigen, die Objekt-Speicher und Indizes löschen und erstellen.
    Dieser Modus dient der Aktualisierung der Versionsnummer von Transaktionen, wenn der Bedarf beim Aufruf von {{domxref("IDBFactory.open()")}} festgestellt wird.
    Transaktionen in diesem Modus können nicht gleichzeitig mit anderen Transaktionen ausgeführt werden.
    Transaktionen in diesem Modus sind als _Upgrade-Transaktionen_ bekannt.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreib-Transaktion auf unserer Datenbank und fügen einige Daten zu einem Objekt-Speicher hinzu. Beachten Sie auch die Funktionen, die an die Transaktions-Ereignis-Handler angehängt sind, um über das Ergebnis der Öffnung der Transaktion im Erfolgs- oder Fehlerfall zu berichten. Am Ende protokollieren wir den Modus der aktuellen Transaktion mit `mode`. Für ein vollständiges funktionierendes Beispiel, sehen Sie unsere [To-do-Benachrichtigungs-App](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// eine Instanz eines DB-Objekts, um die IDB-Daten zu speichern
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // das Ergebnis des Öffnens der Datenbank in der DB-Variable speichern.
  // Dies wird oft unten verwendet
  db = DBOpenRequest.result;

  // Führen Sie die Funktion addData() aus, um die Daten zur Datenbank hinzuzufügen
  addData();
};

function addData() {
  // Ein neues Objekt erstellen, das bereit ist, in die IDB eingefügt zu werden
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

  // eine Lese-/Schreib-DB-Transaktion öffnen, bereit für das Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // über den Erfolg des Öffnens der Transaktion berichten
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen: Datenbankmodifikation beendet.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion nicht geöffnet aufgrund eines Fehlers. Doppelte Einträge sind nicht erlaubt.";
  };

  // einen Objekt-Speicher auf der Transaktion erstellen
  const objectStore = transaction.objectStore("toDoList");

  // unser newItem-Objekt zum Objekt-Speicher hinzufügen
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // über den Erfolg der Anfrage berichten (das bedeutet nicht, dass das Item
    // erfolgreich in der DB gespeichert wurde - dafür benötigen Sie transaction.onsuccess)
    note.appendChild(document.createElement("li")).textContent =
      "Anfrage erfolgreich.";
  };

  // Den Modus zurückgeben, in dem diese Transaktion geöffnet wurde (sollte in diesem Fall "readwrite" sein)
  transaction.mode;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Einstellen eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursor: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
