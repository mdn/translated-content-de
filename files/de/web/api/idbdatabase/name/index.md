---
title: "IDBDatabase: name-Eigenschaft"
short-title: name
slug: Web/API/IDBDatabase/name
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`name`**-Schreibgeschützte Eigenschaft der
`IDBDatabase`-Schnittstelle ist eine Zeichenkette, die den
Namen der verbundenen Datenbank enthält.

## Wert

Eine Zeichenkette, die den Namen der verbundenen Datenbank enthält.

## Beispiele

Dieses Beispiel zeigt, wie eine Datenbankverbindung geöffnet wird, das resultierende
{{domxref("IDBDatabase")}}-Objekt in einer db-Variable gespeichert wird und die name-Eigenschaft
dann protokolliert wird. Für ein vollständiges Beispiel siehe unsere
[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Diese beiden Ereignishandler reagieren darauf, dass die Datenbank
// erfolgreich geöffnet wird oder nicht
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable. Diese wird weiter unten häufig verwendet
  db = DBOpenRequest.result;

  // Diese Zeile wird den Namen der Datenbank protokollieren, welcher "toDoList" sein sollte
  console.log(db.name);
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Einen Bereich von Schlüsseln setzen: {{domxref("IDBKeyRange")}}
- Ihre Daten abrufen und Änderungen vornehmen: {{domxref("IDBObjectStore")}}
- Cursor verwenden: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
