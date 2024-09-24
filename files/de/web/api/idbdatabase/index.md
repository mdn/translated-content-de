---
title: IDBDatabase
slug: Web/API/IDBDatabase
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBDatabase`**-Interface der IndexedDB API bietet eine [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection); Sie können ein `IDBDatabase`-Objekt verwenden, um eine [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) mit Ihrer Datenbank zu eröffnen, danach Objekte (Daten) in dieser Datenbank zu erstellen, zu manipulieren und zu löschen. Das Interface bietet die einzige Möglichkeit, Versionen der Datenbank zu erhalten und zu verwalten.

> [!NOTE]
> Alles, was Sie in IndexedDB tun, passiert immer im Kontext einer [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction), die Interaktionen mit Daten in der Datenbank darstellt. Alle Objekte in IndexedDB — einschließlich Object Stores, Indizes und Cursor — sind an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen, auf Daten zugreifen oder etwas außerhalb einer Transaktion öffnen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("IDBDatabase.name")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen der verbundenen Datenbank enthält.
- {{domxref("IDBDatabase.version")}} {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Version der verbundenen Datenbank enthält. Wenn eine Datenbank erstmals erstellt wird, ist dieses Attribut ein leerer String.
- {{domxref("IDBDatabase.objectStoreNames")}} {{ReadOnlyInline}}
  - : Ein {{ domxref("DOMStringList") }}, der eine Liste der Namen der aktuell in der verbundenen Datenbank befindlichen [Object Stores](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) enthält.

## Instanz-Methoden

Erbt von: [EventTarget](/de/docs/Web/API/EventTarget)

- {{domxref("IDBDatabase.close()")}}
  - : Gibt sofort zurück und schließt die Verbindung zu einer Datenbank in einem separaten Thread.
- {{domxref("IDBDatabase.createObjectStore()")}}
  - : Erstellt und gibt einen neuen Object Store oder Index zurück.
- {{domxref("IDBDatabase.deleteObjectStore()")}}
  - : Zerstört den Object Store mit dem gegebenen Namen in der verbundenen Datenbank, zusammen mit allen Indizes, die darauf verweisen.
- {{domxref("IDBDatabase.transaction()")}}
  - : Gibt sofort ein Transaktionsobjekt ({{domxref("IDBTransaction")}}) zurück, das die Methode {{domxref("IDBTransaction.objectStore")}} enthält, die Sie verwenden können, um auf Ihren Object Store zuzugreifen. Läuft in einem separaten Thread.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisung eines Event Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`close`](/de/docs/Web/API/IDBDatabase/close_event)

  - : Ein Ereignis, das ausgelöst wird, wenn die Datenbankverbindung unerwartet geschlossen wird.

- [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Datenbankstrukturänderung angefordert wurde.

Die folgenden Ereignisse sind über Event-Bubbling von {{domxref("IDBTransaction")}} für `IDBDatabase` verfügbar:

- `IDBTransaction` [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Transaktion abgebrochen wird.
- `IDBTransaction` [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anforderung einen Fehler zurückgibt und das Ereignis zum Verbindungsobjekt hochblubbert.

## Beispiel

Im folgenden Code-Snippet öffnen wir eine Datenbank asynchron ({{domxref("IDBFactory")}}), behandeln Erfolgs- und Fehlerfälle und erstellen einen neuen Object Store, falls ein Upgrade erforderlich ist (`IDBDatabase`). Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Diese beiden Event-Handler wirken auf das IDBDatabase-Objekt,
// wenn die Datenbank erfolgreich geöffnet wird oder nicht
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  node.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // speichern Sie das Ergebnis des Öffnens der Datenbank in der db
  // Variable. Dies wird später oft verwendet
  db = DBOpenRequest.result;

  // Führen Sie die displayData()-Funktion aus, um die Aufgaben
  // Liste mit allen bereits in der IDB vorhandenen To-Do-Daten zu füllen
  displayData();
};

// Dieses Ereignis behandelt das Ereignis, bei dem eine neue Version der
// Datenbank erstellt werden muss. Entweder wurde noch keine erstellt,
// oder eine neue Versionsnummer wurde über die window.indexedDB.open-Zeile oben eingereicht

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Fehler beim Laden der Datenbank.";
  };

  // Erstellen Sie einen ObjectStore für diese Datenbank mit
  // IDBDatabase.createObjectStore

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren Sie, welche Datenelemente der ObjectStore enthalten wird

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.appendChild(document.createElement("li")).textContent =
    "Object Store erstellt.";
};
```

Die nächste Zeile öffnet eine Transaktion auf der Datenbank, öffnet dann einen Object Store, den wir innerhalb manipulieren können.

```js
const objectStore = db
  .transaction("toDoList", "readwrite")
  .objectStore("toDoList");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegung eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
