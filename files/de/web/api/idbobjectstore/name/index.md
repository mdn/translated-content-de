---
title: "IDBObjectStore: name-Eigenschaft"
short-title: name
slug: Web/API/IDBObjectStore/name
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`name`**-Eigenschaft des {{domxref("IDBObjectStore")}}-Interfaces gibt den Namen dieses Object Stores an.

## Wert

Ein String, der den Namen des Object Stores enthält.

### Ausnahmen

Es gibt mehrere Ausnahmen, die auftreten können, wenn Sie versuchen, den Namen eines Object Stores zu ändern.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn entweder der Object Store gelöscht wurde oder die aktuelle Transaktion keine Upgrade-Transaktion ist; Sie können Indizes nur während Upgrade-Transaktionen umbenennen, das heißt, wenn der Modus `versionchange` ist.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die aktuelle Transaktion nicht aktiv ist.
- `ConstraintError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Object Store bereits den angegebenen `name` verwendet.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen einige Daten mit `add()` zu einem Object Store hinzu. Nachdem der Object Store erstellt wurde, loggen wir `objectStore.name` in der Konsole. Für ein vollständiges Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Dies wird unten oft verwendet
  db = DBOpenRequest.result;

  // Führen Sie die addData()-Funktion aus, um die Daten zur Datenbank hinzuzufügen
  addData();
};

function addData() {
  // Erstellen Sie ein neues Objekt, das bereit ist, in die IDB eingefügt zu werden
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

  // Öffnen Sie eine Lese-/Schreibdatenbanktransaktion, bereit zum Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Berichten Sie über den Erfolg des Abschlusses der Transaktion, wenn alles erledigt ist
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion aufgrund eines Fehlers nicht geöffnet. Doppelte Elemente sind nicht erlaubt.";
  };

  // Erstellen Sie einen Object Store in der Transaktion
  const objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.name);

  // Machen Sie eine Anfrage, unser newItem-Objekt dem Object Store hinzuzufügen
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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegung eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
