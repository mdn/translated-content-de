---
title: "IDBVersionChangeEvent: newVersion-Eigenschaft"
short-title: newVersion
slug: Web/API/IDBVersionChangeEvent/newVersion
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`newVersion`** der {{domxref("IDBVersionChangeEvent")}} Schnittstelle gibt die neue Versionsnummer der Datenbank zurück.

## Wert

Eine Zahl, die ein 64-Bit-Integer ist oder null, wenn die Datenbank gelöscht wird.

## Beispiele

Im folgenden Codeausschnitt stellen wir eine Anfrage zum Öffnen einer Datenbank und fügen Handler für Erfolgs- und Fehlerfälle ein. Diese Ereignisse werden über die benutzerdefinierte `IDBVersionChangeEvent` Schnittstelle ausgelöst. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Lassen Sie uns Version 4 unserer Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Diese beiden Ereignishandler wirken auf das Öffnen der Datenbank
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variablen.
  // Diese wird später häufig verwendet, um Transaktionen zu öffnen und dergleichen.
  const db = DBOpenRequest.result;
};
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
- Verwenden von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
