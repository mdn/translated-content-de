---
title: "IDBTransaction: error-Eigenschaft"
short-title: error
slug: Web/API/IDBTransaction/error
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`IDBTransaction.error`**-Eigenschaft des {{domxref("IDBTransaction")}}-Interfaces gibt die Art des Fehlers zurück, wenn eine Transaktion nicht erfolgreich war.

## Wert

Ein {{domxref("DOMException")}}, der den entsprechenden Fehler enthält, oder `null`, wenn es keinen gibt.

Es kann sich um einen Verweis auf denselben Fehler handeln wie das Anforderungsobjekt, das ihn ausgelöst hat, oder um ein Transaktionsversagen (zum Beispiel `QuotaExceededError`).

Diese Eigenschaft ist `null`, wenn die Transaktion nicht abgeschlossen ist oder abgeschlossen und erfolgreich begangen wurde.

## Beispiele

Im folgenden Code-Beispiel öffnen wir eine Lese-/Schreib-Transaktion in unserer Datenbank und fügen einige Daten zu einem Objekt-Store hinzu. Beachten Sie auch die Funktionen, die den Transaktions-Event-Handlern angehängt sind, um über das Ergebnis des Transaktionsstarts im Erfolgs- oder Misserfolgsfall zu berichten. Beachten Sie den Block `transaction.onerror = (event) => { };`, der `transaction.error` verwendet, um zu helfen, zu berichten, was schiefgelaufen ist, wenn die Transaktion nicht erfolgreich war. Ein vollständig funktionierendes Beispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// eine Instanz eines db-Objekts, um die IDB-Daten zu speichern
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Dies wird unten häufig verwendet
  db = DBOpenRequest.result;

  // Führen Sie die addData()-Funktion aus, um die Daten zur Datenbank hinzuzufügen
  addData();
};

function addData() {
  // Erstellen Sie ein neues Objekt, das bereit zum Einfügen in die IDB ist
  const newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "Dezember",
      year: 2013,
      notified: "no",
    },
  ];

  // öffnen Sie eine Lese-/Schreib-Datenbanktransaktion, bereit zum Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // berichten Sie über den Erfolg des Öffnens der Transaktion
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen: Datenbankänderung abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      `Transaktion nicht geöffnet aufgrund von Fehler: ${transaction.error}`;
  };

  // erstellen Sie einen Objekt-Store in der Transaktion
  const objectStore = transaction.objectStore("toDoList");

  // fügen Sie unser newItem-Objekt dem Objekt-Store hinzu
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // berichten Sie über den Erfolg der Anforderung (das bedeutet nicht, dass das Element
    // erfolgreich in der Datenbank gespeichert wurde - dafür benötigen Sie transaction.onsuccess)
    note.appendChild(document.createElement("li")).textContent =
      "Anforderung erfolgreich.";
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
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
