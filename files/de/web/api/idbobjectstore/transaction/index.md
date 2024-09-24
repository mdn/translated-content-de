---
title: "IDBObjectStore: Eigenschaft ‚transaction‘"
short-title: transaction
slug: Web/API/IDBObjectStore/transaction
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`transaction`** des {{domxref("IDBObjectStore")}}-Interfaces gibt das Transaktionsobjekt zurück, zu dem dieser Object Store gehört.

## Wert

Ein {{domxref("IDBTransaction")}}-Objekt.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreib-Transaktion auf unserer Datenbank und fügen einige Daten mit `add()` zu einem Object Store hinzu. Nachdem der Object Store erstellt wurde, loggen wir `objectStore.transaction` in die Konsole. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Dies wird unten oft verwendet
  db = DBOpenRequest.result;

  // Führen Sie die addData()-Funktion aus, um die Daten in die Datenbank hinzuzufügen
  addData();
};

function addData() {
  // Erstellen Sie ein neues Objekt, das in den IDB eingefügt werden soll
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

  // Öffnen Sie eine Lese-/Schreib-DB-Transaktion, um die Daten hinzuzufügen
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Berichten Sie über den Erfolg des Abschlusses der Transaktion, wenn alles erledigt ist
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion aufgrund eines Fehlers nicht geöffnet. Doppelte Einträge nicht erlaubt.";
  };

  // Erstellen Sie einen Object Store auf der Transaktion
  const objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.transaction);

  // Machen Sie eine Anfrage, um unser newItem-Objekt zum Object Store hinzuzufügen
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // Berichten Sie über den Erfolg unserer Anfrage
    note.appendChild(document.createElement("li")).textContent =
      "Anfrage erfolgreich.";
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
