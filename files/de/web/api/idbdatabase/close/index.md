---
title: "IDBDatabase: close()-Methode"
short-title: close()
slug: Web/API/IDBDatabase/close
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`close()`**-Methode der {{domxref("IDBDatabase")}}
Schnittstelle gibt sofort zurück und schließt die Verbindung in einem separaten Thread.

Die Verbindung wird tatsächlich erst geschlossen, wenn alle Transaktionen, die mithilfe dieser Verbindung erstellt wurden, abgeschlossen sind. Es können keine neuen Transaktionen für diese Verbindung erstellt werden, sobald diese Methode aufgerufen wird. Methoden, die Transaktionen erstellen, werfen eine Ausnahme, wenn ein Schließvorgang aussteht.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4); // Öffnen einer Datenbank.

// Erstellen von Ereignishandlern sowohl für den Erfolg als auch das Scheitern
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  db = DBOpenRequest.result;

  // Schließen wir jetzt die Datenbank wieder!
  db.close();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwenden von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
