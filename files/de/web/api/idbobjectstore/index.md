---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBObjectStore`** Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen Objektspeicher in einer Datenbank. Datensätze innerhalb eines Objektspeichers werden entsprechend ihrer Schlüssel sortiert. Diese Sortierung ermöglicht schnelles Einfügen, Nachschlagen und geordnete Abfrage.

## Instanz-Eigenschaften

- {{domxref("IDBObjectStore.indexNames")}} {{ReadOnlyInline}}
  - : Eine Liste der Namen der [Indizes](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#index) für Objekte in diesem Objektspeicher.
- {{domxref("IDBObjectStore.keyPath")}} {{ReadOnlyInline}}
  - : Der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) dieses Objektspeichers. Wenn dieses Attribut `null` ist, muss die Anwendung bei jeder Änderungsoperation einen Schlüssel bereitstellen.
- {{domxref("IDBObjectStore.name")}}
  - : Der Name dieses Objektspeichers.
- {{domxref("IDBObjectStore.transaction")}} {{ReadOnlyInline}}
  - : Das {{domxref("IDBTransaction")}} Objekt, zu dem dieser Objektspeicher gehört.
- {{domxref("IDBObjectStore.autoIncrement")}} {{ReadOnlyInline}}
  - : Der Wert des Auto-Increment-Flags für diesen Objektspeicher.

## Instanz-Methoden

- {{domxref("IDBObjectStore.add()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des `value` und speichert den geklonten Wert im Objektspeicher. Dies dient dazu, neue Datensätze in einem Objektspeicher hinzuzufügen.
- {{domxref("IDBObjectStore.clear()")}}
  - : Erstellt und gibt sofort ein {{domxref("IDBRequest")}} Objekt zurück und löscht diesen Objektspeicher in einem separaten Thread. Dies dient zum Löschen aller aktuellen Datensätze aus einem Objektspeicher.
- {{domxref("IDBObjectStore.count()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und gibt in einem separaten Thread die Gesamtanzahl der Datensätze zurück, die dem angegebenen Schlüssel oder {{domxref("IDBKeyRange")}} entsprechen. Wenn keine Argumente angegeben werden, wird die Gesamtanzahl der Datensätze im Speicher zurückgegeben.
- {{domxref("IDBObjectStore.createIndex()")}}
  - : Erstellt einen neuen Index während eines Versionsupgrades und gibt ein neues {{domxref("IDBIndex")}} Objekt in der verbundenen Datenbank zurück.
- {{domxref("IDBObjectStore.delete()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und löscht in einem separaten Thread das im Objektspeicher durch den angegebenen Schlüssel ausgewählte Objekt. Dies dient zum Löschen einzelner Datensätze aus einem Objektspeicher.
- {{domxref("IDBObjectStore.deleteIndex()")}}
  - : Zerstört den angegebenen Index in der verbundenen Datenbank, verwendet während eines Versionsupgrades.
- {{domxref("IDBObjectStore.get()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und gibt in einem separaten Thread das im Objektspeicher durch den angegebenen Schlüssel ausgewählte Objekt zurück. Dies dient zum Abrufen spezifischer Datensätze aus einem Objektspeicher.
- {{domxref("IDBObjectStore.getKey()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und ruft in einem separaten Thread den Aufzeichnungsschlüssel für das Objekt im Objektspeicher ab, das dem angegebenen Parameter entspricht.
- {{domxref("IDBObjectStore.getAll()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück, das alle Objekte im Objektspeicher abruft, die dem angegebenen Parameter entsprechen, oder alle Objekte im Speicher, wenn keine Parameter angegeben sind.
- {{domxref("IDBObjectStore.getAllKeys()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück, das Aufzeichnungsschlüssel für alle Objekte im Objektspeicher abruft, die dem angegebenen Parameter entsprechen, oder alle Objekte im Speicher, wenn keine Parameter angegeben sind.
- {{domxref("IDBObjectStore.index()")}}
  - : Öffnet einen Index von diesem Objektspeicher, nach dem er beispielsweise verwendet werden kann, um eine Folge von Datensätzen zu sortieren, die nach diesem Index mit einem Cursor geordnet sind.
- {{domxref("IDBObjectStore.openCursor()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und gibt in einem separaten Thread ein neues {{domxref("IDBCursorWithValue")}} Objekt zurück. Wird verwendet, um durch einen Objektspeicher anhand des Primärschlüssels mit einem Cursor zu iterieren.
- {{domxref("IDBObjectStore.openKeyCursor()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und gibt in einem separaten Thread ein neues {{domxref("IDBCursor")}} zurück. Wird verwendet, um mit einem Schlüssel durch einen Objektspeicher zu iterieren.
- {{domxref("IDBObjectStore.put()")}}
  - : Gibt ein {{domxref("IDBRequest")}} Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des `value` und speichert den geklonten Wert im Objektspeicher. Dies dient dazu, bestehende Datensätze in einem Objektspeicher zu aktualisieren, wenn der Modus der Transaktion `readwrite` ist.

## Beispiel

Dieses Beispiel zeigt verschiedene Anwendungen von Objektspeichern, vom Aktualisieren der Datenstruktur mit {{domxref("IDBObjectStore.createIndex")}} innerhalb einer `onupgradeneeded` Funktion bis hin zum Hinzufügen eines neuen Elements zu unserem Objektspeicher mit {{domxref("IDBObjectStore.add")}}. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in db.
  db = DBOpenRequest.result;
};

// Dieses Ereignis behandelt das Ereignis, wenn eine neue Version der
// Datenbank erstellt werden muss, entweder weil zuvor keine erstellt wurde
// oder eine neue Versionsnummer über die Zeile window.indexedDB.open oben
// übergeben wurde
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Fehler beim Laden der Datenbank.";
  };

  // Erstellen Sie einen Objektspeicher für diese Datenbank

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren Sie, welche Datenpunkte der Objektspeicher enthalten wird

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.appendChild(document.createElement("li")).textContent =
    "Objektspeicher erstellt.";
};

// Erstellen Sie ein neues Element, das dem Objektspeicher hinzugefügt werden soll
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

// Öffnen Sie eine Lese-/Schreibdatenbanktransaktion, bereit zum Hinzufügen der Daten
const transaction = db.transaction(["toDoList"], "readwrite");

// Berichten Sie über den Erfolg des Abschlusses der Transaktion, wenn alles erledigt ist
transaction.oncomplete = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaktion abgeschlossen.";
};

transaction.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaktion nicht geöffnet aufgrund eines Fehlers. Doppelte Elemente sind nicht erlaubt.";
};

// Erstellen Sie einen Objektspeicher auf der Transaktion
const objectStore = transaction.objectStore("toDoList");
// Stellen Sie eine Anfrage, um unser newItem-Objekt dem Objektspeicher hinzuzufügen
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Anfrage erfolgreich.";
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
- Einstellen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
