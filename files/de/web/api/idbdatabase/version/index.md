---
title: "IDBDatabase: version-Eigenschaft"
short-title: version
slug: Web/API/IDBDatabase/version
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`version`**-Eigenschaft des {{domxref("IDBDatabase")}}-Interfaces ist ein [64-Bit-Ganzzahl](/de/docs/NSPR_API_Reference/Long_Long_%2864-bit%29_Integers), die die Version der verbundenen Datenbank enthält. Wenn eine Datenbank zum ersten Mal erstellt wird, ist dieses Attribut ein leerer String.

## Wert

Eine Ganzzahl, die die Version der verbundenen Datenbank enthält.

## Beispiele

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Diese beiden Ereignishandler reagieren darauf, ob die Datenbank
// erfolgreich geöffnet wird oder nicht
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable. Diese wird weiter unten häufig verwendet.
  db = DBOpenRequest.result;

  // Diese Zeile protokolliert die Version der verbundenen Datenbank, die "4" sein sollte
  console.log(db.version);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
