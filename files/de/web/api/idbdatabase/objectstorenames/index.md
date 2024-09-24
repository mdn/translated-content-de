---
title: "IDBDatabase: objectStoreNames-Eigenschaft"
short-title: objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`objectStoreNames`**-Eigenschaft der {{domxref("IDBDatabase")}}-Schnittstelle ist eine {{ domxref("DOMStringList") }}, die eine Liste der Namen der [Object Stores](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) enthält, die derzeit in der verbundenen Datenbank vorhanden sind.

## Wert

Eine {{ domxref("DOMStringList") }}, die eine Liste der Namen der [Object Stores](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) enthält, die derzeit in der verbundenen Datenbank vorhanden sind.

## Beispiele

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Diese beiden Event-Handler reagieren darauf, ob die Datenbank erfolgreich geöffnet wurde oder nicht
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable. Diese wird unten häufig verwendet
  db = DBOpenRequest.result;

  // Diese Zeile gibt die Namen der Object Stores der verbundenen Datenbank aus, welche ein Objekt darstellen sollten, das wie { ['my-store-name'] } aussieht
  console.log(db.objectStoreNames);
};
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
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
