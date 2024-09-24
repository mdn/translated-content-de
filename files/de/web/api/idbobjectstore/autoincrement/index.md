---
title: "IDBObjectStore: autoIncrement-Eigenschaft"
short-title: autoIncrement
slug: Web/API/IDBObjectStore/autoIncrement
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`autoIncrement`** schreibgeschützte Eigenschaft der
{{domxref("IDBObjectStore")}}-Schnittstelle gibt den Wert des Autoinkrement-Flags
für diesen Objektspeicher zurück.

Beachten Sie, dass jeder Objektspeicher seinen eigenen separaten Autoinkrementzähler hat.

## Wert

Ein boolescher Wert:

| Wert    | Bedeutung                                 |
| ------- | ----------------------------------------- |
| `true`  | Der Objektspeicher inkrementiert automatisch. |
| `false` | Der Objektspeicher inkrementiert nicht automatisch. |

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreib-Transaktion auf unserer Datenbank und fügen
einige Daten zu einem Objektspeicher mit `add()` hinzu. Nachdem der Objektspeicher erstellt wurde, protokollieren wir `objectStore.autoIncrement` in
die Konsole. Für ein vollständiges funktionierendes Beispiel, siehe
unsere [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App
([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Dies wird unten oft verwendet
  db = DBOpenRequest.result;

  // Führen Sie die Funktion addData() aus, um die Daten zur Datenbank hinzuzufügen
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

  // Öffnen Sie eine Lese-/Schreib-Transaktion der Datenbank, bereit zum Hinzufügen der Daten
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

  // Erstellen Sie einen Objektspeicher auf der Transaktion
  const objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.autoIncrement);

  // Machen Sie eine Anfrage, um unser newItem-Objekt zum Objektspeicher hinzuzufügen
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
- Festlegen eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
