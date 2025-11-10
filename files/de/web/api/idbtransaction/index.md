---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBTransaction`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet eine statische, asynchrone Transaktion auf einer Datenbank mittels Ereignisbehandler-Attributen. Alle Lese- und Schreibvorgänge von Daten erfolgen innerhalb von Transaktionen. Sie verwenden [`IDBDatabase`](/de/docs/Web/API/IDBDatabase), um Transaktionen zu starten, `IDBTransaction`, um den Modus der Transaktion festzulegen (z. B. ob sie `readonly` oder `readwrite` ist), und greifen auf einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) zu, um eine Anfrage zu stellen. Sie können auch ein `IDBTransaction`-Objekt verwenden, um Transaktionen abzubrechen.

{{InheritanceDiagram}}

Transaktionen werden gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; ziehen Sie zum Beispiel folgendes in Betracht:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

Nachdem der Code ausgeführt wurde, sollte der Objekt-Store den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

Eine Transaktion wechselt zwischen _aktiven_ und _inaktiven_ Zuständen zwischen Aufgaben in der Ereignisschleife. Sie ist aktiv in der Aufgabe, in der sie erstellt wurde, und in jeder Aufgabe der [`success`](/de/docs/Web/API/IDBRequest/success_event)- oder [`error`](/de/docs/Web/API/IDBRequest/error_event)-Ereignisbehandler der Anfragen. In allen anderen Aufgaben ist sie inaktiv, in diesem Fall schlägt das Platzieren von Anfragen fehl. Wenn keine neuen Anfragen gestellt werden, wenn die Transaktion aktiv ist, und keine anderen ausstehenden Anfragen vorliegen, wird die Transaktion automatisch abgeschlossen.

## Transaktionsfehler

Transaktionen können aus einer festen Anzahl von Gründen fehlschlagen, von denen alle (außer dem Absturz des Benutzer-Agents) einen Abbruch-Callback auslösen:

- Abbruch aufgrund fehlerhafter Anfragen, z.B. der Versuch, denselben Schlüssel zweimal mit `add()` hinzuzufügen, oder `put()` mit demselben Indexschlüssel mit einer Eindeutigkeitsbeschränkung. Dies führt zu einem Fehler bei der Anfrage, der sich zu einem Fehler bei der Transaktion ausweiten kann, was die Transaktion abbricht. Dies kann durch Verwendung von `preventDefault()` beim Fehlerereignis auf der Anfrage verhindert werden.
- Ein expliziter `abort()`-Aufruf aus dem Skript.
- Eine unbehandelte Ausnahme im `success`/`error`-Handler der Anfrage.
- Ein E/A-Fehler (z.B. ein tatsächliches Scheitern beim Schreiben auf die Festplatte, oder ein anderes Betriebssystem/Hardware-Versagen).
- Überschrittenes Kontingent.
- Ein Absturz des Benutzer-Agents.

## Haltbarkeitsgarantien in Firefox

Beachten Sie, dass ab Firefox 40 IndexedDB-Transaktionen entspannte Haltbarkeitsgarantien haben, um die Leistung zu verbessern (siehe [Firefox Bug 1112702](https://bugzil.la/1112702)). Früher wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben worden waren. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, jedoch möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann also schneller als zuvor geliefert werden, jedoch besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Benutzer nicht weiter darum kümmern müssen.

Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z.B. wenn Sie kritische Daten speichern, die später nicht mehr berechnet werden können), können Sie eine Transaktion zwingen, vor der Lieferung des `complete`-Ereignisses auf die Festplatte zu schreiben, indem Sie eine Transaktion mit dem experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

## Instanz-Eigenschaften

- [`IDBTransaction.db`](/de/docs/Web/API/IDBTransaction/db) {{ReadOnlyInline}}
  - : Die Datenbankverbindung, mit der diese Transaktion verknüpft ist.
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) {{ReadOnlyInline}}
  - : Gibt den Haltbarkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
- [`IDBTransaction.error`](/de/docs/Web/API/IDBTransaction/error) {{ReadOnlyInline}}
  - : Gibt eine [`DOMException`](/de/docs/Web/API/DOMException) zurück, die den Fehlertyp angibt, der bei einer erfolglosen Transaktion aufgetreten ist. Diese Eigenschaft ist `null`, wenn die Transaktion nicht beendet ist, erfolgreich abgeschlossen wurde oder mit der [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort)-Funktion abgebrochen wurde.
- [`IDBTransaction.mode`](/de/docs/Web/API/IDBTransaction/mode) {{ReadOnlyInline}}
  - : Der Modus zur Isolierung des Zugriffs auf Daten in den Objekt-Stores, die im Geltungsbereich der Transaktion liegen. Der Standardwert ist `readonly`.
- [`IDBTransaction.objectStoreNames`](/de/docs/Web/API/IDBTransaction/objectStoreNames) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringList`](/de/docs/Web/API/DOMStringList) der Namen von [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekten zurück, die mit der Transaktion verknüpft sind.

## Instanzmethoden

Erbt von: [`EventTarget`](/de/docs/Web/API/EventTarget)

- [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort)
  - : Macht alle Änderungen an Objekten in der mit dieser Transaktion verbundenen Datenbank rückgängig. Wenn diese Transaktion bereits abgebrochen oder abgeschlossen wurde, löst diese Methode ein Fehlerereignis aus.
- [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)
  - : Gibt ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekt zurück, das einen Objekt-Store repräsentiert, der Teil des Geltungsbereichs dieser Transaktion ist.
- [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit)
  - : Bei einer aktiven Transaktion die Transaktion abschließen. Beachten Sie, dass dies normalerweise nicht aufgerufen werden _muss_ — eine Transaktion wird automatisch abgeschlossen, wenn alle ausstehenden Anfragen erfüllt wurden und keine neuen Anfragen gestellt wurden. `commit()` kann verwendet werden, um den Abschlussprozess zu starten, ohne auf Ereignisse von ausstehenden Anfragen warten zu müssen.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder indem Sie einen Ereignisbehandler der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die `IndexedDB`-Transaktion abgebrochen wird.
    Ebenfalls verfügbar über die `onabort`-Eigenschaft; dieses Ereignis wandert zu [`IDBDatabase`](/de/docs/Web/API/IDBDatabase).
- [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die Transaktion erfolgreich abgeschlossen wird.
    Ebenfalls verfügbar über die `oncomplete`-Eigenschaft.
- [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis bis zum Verbindungsobjekt ([`IDBDatabase`](/de/docs/Web/API/IDBDatabase)) hochwandert.
    Ebenfalls verfügbar über die `onerror`-Eigenschaft.

## Moduskonstanten

{{Deprecated_Header}}

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die Zeichenfolgenkonstanten direkt verwenden. ([Firefox-Bug 888598](https://bugzil.la/888598))

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
      <td><p>Erlaubt das Lesen von Daten, aber nicht das Ändern.</p></td>
    </tr>
    <tr>
      <td>
        <code><a>READ_WRITE</a></code>
      </td>
      <td>"readwrite" (1 in Chrome)</td>
      <td>
        Erlaubt das Lesen und Schreiben von Daten in vorhandenen Datenspeichern, um geändert zu werden.
      </td>
    </tr>
    <tr>
      <td>
        <code><a>VERSION_CHANGE</a></code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Erlaubt jede Operation, einschließlich solcher, die Objekt-Store und Indizes löschen und erstellen. Transaktionen in diesem Modus können nicht gleichzeitig mit anderen Transaktionen ausgeführt werden. Transaktionen in diesem Modus sind als "Upgrade-Transaktionen" bekannt.
      </td>
    </tr>
  </tbody>
</table>

Auch wenn diese Konstanten jetzt veraltet sind, können Sie sie immer noch verwenden, um bei Bedarf Rückwärtskompatibilität bereitzustellen. Sie sollten defensiv programmieren für den Fall, dass das Objekt nicht mehr verfügbar ist:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen einem Objekt-Store Daten hinzu. Beachten Sie auch die Funktionen, die an Transaktionsereignisbehandler angehängt sind, um über das Ergebnis der Transaktionseröffnung im Falle von Erfolg oder Misserfolg zu berichten. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
