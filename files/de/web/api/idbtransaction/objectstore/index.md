---
title: "IDBTransaction: objectStore()-Methode"
short-title: objectStore()
slug: Web/API/IDBTransaction/objectStore
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`objectStore()`**-Methode der
{{domxref("IDBTransaction")}}-Schnittstelle gibt einen Object Store zurück, der bereits zur
Reichweite dieser Transaktion hinzugefügt wurde.

Jeder Aufruf dieser Methode auf demselben Transaktionsobjekt mit demselben Namen gibt
dasselbe {{domxref("IDBObjectStore")}}-Exemplar zurück. Wenn diese Methode auf einem anderen
Transaktionsobjekt aufgerufen wird, wird ein anderes {{domxref("IDBObjectStore")}}-Exemplar zurückgegeben.

## Syntax

```js-nolint
objectStore(name)
```

### Parameter

- `name`
  - : Der Name des angeforderten Object Stores.

### Rückgabewert

Ein {{domxref("IDBObjectStore")}}-Objekt zum Zugriff auf einen Object Store.

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angeforderte Object Store nicht im Geltungsbereich dieser Transaktion ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Anfrage an ein Quellobjekt gestellt wurde, das gelöscht oder entfernt wurde, oder wenn die Transaktion beendet ist.

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen
einige Daten zu einem Object Store hinzu. Beachten Sie auch die Funktionen, die an die Ereignishandler der Transaktion angehängt sind, um über das Ergebnis der Transaktionsöffnung im Falle eines Erfolgs oder Fehlers zu berichten. Für ein vollständiges Arbeitsbeispiel sehen Sie sich bitte unsere [To-Do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// ein Instanz eines db-Objekts, um die IDB-Daten darin zu speichern
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variablen.
  // Dies wird im Folgenden oft verwendet
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

  // Öffnen Sie eine Lese-/Schreib-Datenbanktransaktion, bereit zum Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Bericht über den Erfolg der Öffnung der Transaktion
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen: Datenbankänderung beendet.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion aufgrund eines Fehlers nicht geöffnet. Doppelte Einträge nicht erlaubt.";
  };

  // Erstellen Sie einen Object Store für die Transaktion
  const objectStore = transaction.objectStore("toDoList");

  // Fügen Sie unser newItem-Objekt dem Object Store hinzu
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // Bericht über den Erfolg der Anfrage (dies bedeutet nicht, dass das Element
    // erfolgreich in der DB gespeichert wurde - dafür benötigen Sie transaction.onsuccess)
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
- Festlegen eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
