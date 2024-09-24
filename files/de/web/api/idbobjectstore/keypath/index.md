---
title: "IDBObjectStore: keyPath-Eigenschaft"
short-title: keyPath
slug: Web/API/IDBObjectStore/keyPath
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`keyPath`** schreibgeschützte Eigenschaft des
{{domxref("IDBObjectStore")}}-Interfaces gibt den [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) dieses Objektspeichers zurück.

Ist diese Eigenschaft null, muss die Anwendung für jede Modifikationsoperation einen Schlüssel bereitstellen.

## Wert

Jeder Werttyp.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen dem Objektspeicher mit `add()` einige Daten hinzu. Nachdem der Objektspeicher erstellt wurde, loggen wir `objectStore.keyPath` in
die Konsole. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App
([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Dies wird unten häufig verwendet
  db = DBOpenRequest.result;

  // Führen Sie die addData()-Funktion aus, um die Daten zur Datenbank hinzuzufügen
  addData();
};

function addData() {
  // Erstellen Sie ein neues Objekt, das in die IDB eingefügt werden soll
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

  // Öffnen Sie eine Lese-/Schreibtransaktion der Datenbank, bereit zum Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Bericht über den Erfolg des Abschlusses der Transaktion, wenn alles erledigt ist
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
  console.log(objectStore.keyPath);

  // Stellen Sie einen Antrag, unser newItem-Objekt dem Objektspeicher hinzuzufügen
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // Bericht über den Erfolg unseres Antrags
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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Einen Schlüsselbereich festlegen: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Cursors verwenden: {{domxref("IDBCursor")}}
- Beispielreferenz: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
