---
title: IDBVersionChangeEvent
slug: Web/API/IDBVersionChangeEvent
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBVersionChangeEvent`**-Schnittstelle der [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) zeigt an, dass sich die Version der Datenbank geändert hat, als Ergebnis eines {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}}-Ereignishandler.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("IDBVersionChangeEvent.IDBVersionChangeEvent", "IDBVersionChangeEvent()")}}
  - : Erstellt und gibt ein neues `IDBVersionChangeEvent`-Objekt zurück, das verwendet wird, um darzustellen, wenn sich eine Version der Datenbank geändert hat.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle {{domxref("Event")}}._

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{ReadOnlyInline}}
  - : Gibt die alte Version der Datenbank zurück.
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{ReadOnlyInline}}
  - : Gibt die neue Version der Datenbank zurück.

## Instanz-Methoden

_Keine spezifische Methode, aber erbt Methoden von seiner Elternschnittstelle {{domxref("Event")}}._

## Beispiel

Im folgenden Codeausschnitt machen wir eine Anfrage, um eine Datenbank zu öffnen, und fügen Handler für die Erfolgs- und Fehlerfälle hinzu. Bei einer Versionsänderung (nach einem `upgradeneeded`-Ereignis) implementiert das `success`-Ereignis die `IDBVersionChangeEvent`-Schnittstelle. Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Lassen Sie uns Version 4 unserer Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// diese beiden Ereignishandler reagieren auf das erfolgreiche Öffnen der Datenbank oder nicht
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable. Dies wird später häufig verwendet, um Transaktionen zu öffnen und dergleichen.
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
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
