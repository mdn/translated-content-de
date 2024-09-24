---
title: "IDBObjectStore: deleteIndex() Methode"
short-title: deleteIndex()
slug: Web/API/IDBObjectStore/deleteIndex
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`deleteIndex()`** Methode des
{{domxref("IDBObjectStore")}} Interfaces zerstört den Index mit dem angegebenen Namen in
der verbundenen Datenbank, die während eines Versionsupgrades verwendet wird.

Beachten Sie, dass diese Methode nur aus einem `VersionChange` Transaktionsmodus-Callback aufgerufen werden darf. Beachten Sie, dass diese Methode die
{{domxref("IDBObjectStore.indexNames")}} Eigenschaft synchron ändert.

## Syntax

```js-nolint
deleteIndex(indexName)
```

### Parameter

- `indexName`
  - : Der Name des vorhandenen Indexes, der entfernt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Methode nicht aus einem `versionchange` Transaktionsmodus-Callback aufgerufen wurde.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses {{domxref("IDBObjectStore")}} gehört, nicht aktiv ist (z.B. gelöscht oder entfernt wurde).
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es keinen Index mit dem angegebenen Namen (Groß-/Kleinschreibung beachten) in der Datenbank gibt.

## Beispiele

Im folgenden Beispiel sehen Sie
den {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}} Handler, der verwendet wird, um die
Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird.
{{domxref("IDBObjectStore.createIndex")}} wird verwendet, um neue Indizes im Objektspeicher zu erstellen, danach löschen wir die nicht benötigten alten Indizes mit `deleteIndex()`.
Für ein vollständiges, funktionierendes Beispiel siehe unsere
[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live anschauen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let db;

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

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable. Dies wird unten häufig verwendet
  db = event.target.result;

  // Führen Sie die displayData()-Funktion aus, um die Aufgabenliste mit allen bereits in der IDB vorhandenen To-do-List-Daten zu füllen
  displayData();
};

// Dieses Ereignis behandelt das Ereignis, bei dem eine neue Version der Datenbank erstellt werden muss
// Entweder wurde zuvor keine erstellt oder eine neue Versionsnummer wurde über die
// window.indexedDB.open Zeile oben eingereicht
// es ist nur in aktuellen Browsern implementiert
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Fehler beim Laden der Datenbank.";
  };

  // Erstellen Sie einen objectStore für diese Datenbank
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren Sie, welche Daten der objectStore enthalten wird

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });

  objectStore.deleteIndex("seconds");
  objectStore.deleteIndex("contact");
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
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live anschauen](https://mdn.github.io/dom-examples/to-do-notifications/)).
