---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBOpenDBRequest`**-Schnittstelle der IndexedDB API bietet Zugriff auf die Ergebnisse von Anfragen zum Öffnen oder Löschen von Datenbanken (ausgeführt mit {{domxref("IDBFactory.open")}} und {{domxref("IDBFactory.deleteDatabase")}}), unter Verwendung spezifischer Eventhandler-Attribute.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinen Eltern {{domxref("IDBRequest")}} und {{domxref("EventTarget")}}_.

## Instanzmethoden

_Keine Methoden, aber erbt Methoden von seinen Eltern {{domxref("IDBRequest")}} und {{domxref("EventTarget")}}._

## Ereignisse

_Ereignisse, die auf Elternschnittstellen definiert sind, {{DOMxRef("IDBRequest")}} und {{DOMxRef("EventTarget")}}, können auch auf `IDBOpenDBRequest`-Objekten ausgelöst werden._

Hören Sie diese generischen und spezifischen Ereignisse mit `addEventListener()` oder durch Zuweisung eines Eventlisteners zur `oneventname`-Eigenschaft dieser Schnittstelle ab.

Spezifische Ereignisse für diese Schnittstelle sind:

- [`blocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - : Ausgelöst, wenn eine offene Verbindung zu einer Datenbank eine `versionchange`-Transaktion auf derselben Datenbank blockiert. Auch über die [`onblocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event) Eigenschaft verfügbar.
- [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
  - : Ausgelöst, wenn ein Versuch unternommen wurde, eine Datenbank mit einer höheren Versionsnummer als der aktuellen zu öffnen. Auch über die [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Eigenschaft verfügbar.

## Beispiel

Im folgenden Beispiel sehen Sie den onupgradeneeded-Handler, der verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// diese Event-Handler wirken sich auf das Öffnen der Datenbank aus.
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // das Ergebnis des Öffnens der Datenbank in der db-Variable speichern. Dies wird unten häufig verwendet
  db = DBOpenRequest.result;

  // Die displayData()-Funktion ausführen, um die Aufgabenliste mit allen bereits in der IDB
  // vorhandenen To-do-List-Daten zu füllen
  displayData();
};

// Dieses Ereignis behandelt das Ereignis, wobei eine neue Version der
// Datenbank erstellt werden muss. Entweder wurde vorher keine erstellt, 
// oder eine neue Versionsnummer wurde über die window.indexedDB.open-Zeile oben 
// übergeben. Es ist nur in neueren Browsern implementiert.
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Fehler beim Laden der Datenbank.";
  };

  // Ein objectStore für diese Datenbank erstellen
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // definieren, welche Datenobjekte der objectStore enthalten wird

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });
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
- Einen Bereich von Schlüsseln festlegen: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
