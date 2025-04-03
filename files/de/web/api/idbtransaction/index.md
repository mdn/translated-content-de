---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBTransaction`** Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet eine statische, asynchrone Transaktion auf einer Datenbank unter Verwendung von Event-Handler-Attributen. Alle Lese- und Schreibvorgänge von Daten werden innerhalb von Transaktionen durchgeführt. Sie verwenden [`IDBDatabase`](/de/docs/Web/API/IDBDatabase), um Transaktionen zu starten, `IDBTransaction`, um den Modus der Transaktion festzulegen (z. B. `readonly` oder `readwrite`), und Sie greifen auf einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) zu, um eine Anfrage zu stellen. Sie können auch ein `IDBTransaction` Objekt verwenden, um Transaktionen abzubrechen.

{{InheritanceDiagram}}

Transaktionen werden gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; betrachten Sie zum Beispiel Folgendes:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

Nachdem der Code ausgeführt wurde, sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

Eine Transaktion wechselt zwischen _aktiven_ und _inaktiven_ Zuständen zwischen Aufgaben der Ereignisschleife. Sie ist aktiv in der Aufgabe, in der sie erstellt wurde, und in jeder Aufgabe der [`success`](/de/docs/Web/API/IDBRequest/success_event) oder [`error`](/de/docs/Web/API/IDBRequest/error_event) Ereignishandler der Anfragen. Sie ist in allen anderen Aufgaben inaktiv, in welchem Fall das Stellen von Anfragen fehlschlägt. Wenn keine neuen Anfragen gestellt werden, wenn die Transaktion aktiv ist und keine anderen ausstehenden Anfragen vorhanden sind, wird die Transaktion automatisch abgeschlossen.

## Fehler bei Transaktionen

Transaktionen können aus einer festen Anzahl von Gründen fehlschlagen, von denen alle (außer dem Absturz des Benutzeragenten) einen Abbruch-Callback auslösen:

- Abbruch aufgrund schlechter Anfragen, z. B. der Versuch, denselben Schlüssel zweimal zu `add()`, oder `put()` mit demselben Indexschlüssel mit einer Einzigartigkeitseinschränkung. Dies führt zu einem Fehler in der Anfrage, der zu einem Fehler in der Transaktion führen kann, die die Transaktion abbricht. Dies kann durch die Verwendung von `preventDefault()` beim Fehlerereignis in der Anfrage verhindert werden.
- Ein expliziter `abort()` Aufruf aus einem Skript.
- Eine nicht abgefangene Ausnahme im `success`/`error`-Handler der Anfrage.
- Ein E/A-Fehler (z. B. ein tatsächliches Fehlschlagen beim Schreiben auf die Festplatte oder ein anderer OS/Hardwarefehler).
- Überschreitung des Speicherplatzkontingents.
- Ein Absturz des Benutzeragenten.

## Firefox-Haltbarkeitsgarantien

Beachten Sie, dass ab Firefox 40 IndexedDB-Transaktionen entspannte Haltbarkeitsgarantien haben, um die Leistung zu erhöhen (siehe [Firefox Fehler 1112702](https://bugzil.la/1112702)). Zuvor wurde in einer `readwrite` Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event) Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben worden waren. In Firefox 40+ wird das `complete` Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, möglicherweise jedoch bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete` Ereignis kann daher schneller als zuvor ausgeliefert werden. Es besteht jedoch eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Benutzer keine weiteren Gedanken darüber machen.

Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z. B. speichern Sie kritische Daten, die später nicht neu berechnet werden können), können Sie eine Transaktion zwingen, auf die Festplatte geschrieben zu werden, bevor das `complete` Ereignis ausgeliefert wird, indem Sie eine Transaktion mit dem experimentellen (nicht standardmäßigen) `readwriteflush` Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

## Instanz-Eigenschaften

- [`IDBTransaction.db`](/de/docs/Web/API/IDBTransaction/db) {{ReadOnlyInline}}
  - : Die Datenbankverbindung, mit der diese Transaktion verbunden ist.
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) {{ReadOnlyInline}}
  - : Gibt den Haltbarkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
- [`IDBTransaction.error`](/de/docs/Web/API/IDBTransaction/error) {{ReadOnlyInline}}
  - : Gibt ein [`DOMException`](/de/docs/Web/API/DOMException) zurück, das den Fehlertyp angibt, der aufgetreten ist, wenn eine Transaktion nicht erfolgreich war. Diese Eigenschaft ist `null`, wenn die Transaktion nicht abgeschlossen ist, abgeschlossen und erfolgreich durchgeführt wurde oder mit der [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) Funktion abgebrochen wurde.
- [`IDBTransaction.mode`](/de/docs/Web/API/IDBTransaction/mode) {{ReadOnlyInline}}
  - : Der Modus zur Isolierung des Zugriffs auf Daten in den Objektspeichern, die im Rahmen der Transaktion liegen. Der Standardwert ist `readonly`.
- [`IDBTransaction.objectStoreNames`](/de/docs/Web/API/IDBTransaction/objectStoreNames) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringList`](/de/docs/Web/API/DOMStringList) der Namen von [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) Objekten zurück, die mit der Transaktion verbunden sind.

## Instanz-Methoden

Erbt von: [`EventTarget`](/de/docs/Web/API/EventTarget)

- [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort)
  - : Setzt alle Änderungen an Objekten in der mit dieser Transaktion verbundenen Datenbank zurück. Wenn diese Transaktion abgebrochen oder abgeschlossen wurde, wird ein Fehlerereignis ausgelöst.
- [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)
  - : Gibt ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) Objekt zurück, das einen Objektspeicher repräsentiert, der Teil des Transaktionsbereichs ist.
- [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit)
  - : Für eine aktive Transaktion, führt die Transaktion durch. Beachten Sie, dass dies normalerweise nicht aufgerufen werden muss – eine Transaktion wird automatisch ausgeführt, wenn alle ausstehenden Anfragen erfüllt sind und keine neuen Anfragen gestellt werden. `commit()` kann verwendet werden, um den Ausführungsprozess zu starten, ohne auf Ereignisse von ausstehenden Anfragen zu warten.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Handlers zur `oneventname` Eigenschaft dieses Interface.

- [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die `IndexedDB` Transaktion abgebrochen wird.
    Auch verfügbar über die `onabort` Eigenschaft; dieses Ereignis wird an [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) übergeben.
- [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die Transaktion erfolgreich abgeschlossen wird.
    Auch verfügbar über die `oncomplete` Eigenschaft.
- [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis an das Verbindungsobjekt ([`IDBDatabase`](/de/docs/Web/API/IDBDatabase)) übergeben wird.
    Auch verfügbar über die `onerror` Eigenschaft.

## Modus-Konstanten

{{Deprecated_Header}}

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die String-Konstanten direkt verwenden. ([Firefox Fehler 888598](https://bugzil.la/888598))

Transaktionen können einen von drei Modi haben:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Konstante</th>
      <th scope="col">Wert</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a>READ_ONLY</a></code>
      </td>
      <td>"readonly" (0 in Chrome)</td>
      <td><p>Erlaubt das Lesen von Daten, aber keine Änderungen.</p></td>
    </tr>
    <tr>
      <td>
        <code><a>READ_WRITE</a></code>
      </td>
      <td>"readwrite" (1 in Chrome)</td>
      <td>
        Erlaubt das Lesen und Schreiben von Daten in bestehenden Datenspeichern.
      </td>
    </tr>
    <tr>
      <td>
        <code><a>VERSION_CHANGE</a></code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Erlaubt beliebige Operationen, einschließlich solcher, die Objektspeicher und Indizes löschen und erstellen. Transaktionen in diesem Modus können nicht gleichzeitig mit anderen Transaktionen ausgeführt werden. Transaktionen in diesem Modus sind als "Upgrade-Transaktionen" bekannt.
      </td>
    </tr>
  </tbody>
</table>

Auch wenn diese Konstanten jetzt als veraltet gelten, können Sie sie weiterhin verwenden, um abwärtskompatibel zu bleiben, wenn erforderlich (in Chrome [wurde die Änderung in Version 21 vorgenommen](https://peter.sh/2012/05/tab-sizing-string-values-for-indexeddb-and-chrome-21/)). Sie sollten defensiv programmieren, falls das Objekt nicht mehr verfügbar ist:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreib-Transaktion auf unserer Datenbank und fügen einige Daten zu einem Objektspeicher hinzu. Beachten Sie auch die an die Transaktions-Ereignishandler angehängten Funktionen, um über das Ergebnis der Transaktionsöffnung im Erfolgs- oder Misserfolgsfall zu berichten. Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// an instance of a db object for us to store the IDB data in
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Add the data to the database
  addData();
};

function addData() {
  // Create a new object to insert into the IDB
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

  // open a read/write db transaction, ready to add data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction completed: database modification finished.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction not opened due to error. Duplicate items not allowed.";
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.oncomplete)
    note.appendChild(document.createElement("li")).textContent =
      "Request successful.";
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
