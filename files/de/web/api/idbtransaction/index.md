---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die Schnittstelle **`IDBTransaction`** der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt eine statische, asynchrone Transaktion für eine Datenbank bereit, die Event-Handler-Attribute verwendet. Daten werden ausschließlich innerhalb von Transaktionen gelesen und geschrieben. Mit [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) starten Sie Transaktionen, mit `IDBTransaction` legen Sie den Modus der Transaktion fest (z. B. `readonly` oder `readwrite`), und über einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) stellen Sie Anfragen. Sie können ein `IDBTransaction`-Objekt auch verwenden, um Transaktionen abzubrechen.

{{InheritanceDiagram}}

Transaktionen beginnen, wenn sie erstellt werden, nicht erst bei der ersten Anfrage. Betrachten Sie beispielsweise Folgendes:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

Nach der Ausführung des Codes sollte der Object Store den Wert „2“ enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

Eine Transaktion wechselt zwischen den Zuständen _aktiv_ und _inaktiv_, während Tasks der Ereignisschleife ausgeführt werden. Sie ist in dem Task aktiv, in dem sie erstellt wurde, sowie in jedem Task der [`success`](/de/docs/Web/API/IDBRequest/success_event)- oder [`error`](/de/docs/Web/API/IDBRequest/error_event)-Event-Handler ihrer Anfragen. In allen anderen Tasks ist sie inaktiv; dort schlagen neue Anfragen fehl. Wenn während der aktiven Phase keine neuen Anfragen gestellt werden und keine weiteren Anfragen ausstehen, wird die Transaktion automatisch abgeschlossen.

## Fehler bei Transaktionen

Transaktionen können aus einer begrenzten Anzahl von Gründen fehlschlagen. Alle außer einem Absturz des User Agents lösen einen Abort-Callback aus:

- Abbruch aufgrund fehlerhafter Anfragen, z. B. wenn versucht wird, denselben Schlüssel zweimal mit `add()` hinzuzufügen oder `put()` mit demselben Indexschlüssel bei einer Eindeutigkeitsbeschränkung aufzurufen. Dadurch tritt bei der Anfrage ein Fehler auf, der sich als Fehler der Transaktion fortsetzen und diese abbrechen kann. Dies lässt sich verhindern, indem Sie beim Fehlerereignis der Anfrage `preventDefault()` aufrufen.
- Ein expliziter Aufruf von `abort()` durch ein Skript.
- Eine nicht abgefangene Ausnahme im `success`- oder `error`-Handler der Anfrage.
- Ein E/A-Fehler (z. B. ein tatsächlicher Fehler beim Schreiben auf den Datenträger oder ein anderer Fehler des Betriebssystems oder der Hardware).
- Überschreitung des Speicherkontingents.
- Ein Absturz des User Agents.

## Dauerhaftigkeitsgarantien in Firefox

Beachten Sie, dass IndexedDB-Transaktionen seit Firefox 40 abgeschwächte Dauerhaftigkeitsgarantien haben, um die Leistung zu verbessern (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)). Zuvor wurde bei einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis erst ausgelöst, wenn garantiert war, dass alle Daten auf den Datenträger geschrieben worden waren. Ab Firefox 40 wird das `complete`-Ereignis ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben – möglicherweise aber bevor die Daten tatsächlich auf den Datenträger geschrieben wurden. Das `complete`-Ereignis kann dadurch schneller als zuvor eintreffen. Allerdings besteht eine geringe Wahrscheinlichkeit, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder die Stromversorgung ausfällt, bevor die Daten auf den Datenträger geschrieben wurden. Da solche schwerwiegenden Ereignisse selten sind, müssen sich die meisten Anwender damit nicht weiter befassen.

Wenn Sie aus einem bestimmten Grund die Dauerhaftigkeit sicherstellen müssen (z. B. weil Sie kritische Daten speichern, die sich später nicht erneut berechnen lassen), können Sie erzwingen, dass die Daten einer Transaktion vor dem Auslösen des `complete`-Ereignisses auf den Datenträger geschrieben werden. Erstellen Sie dazu eine Transaktion im experimentellen (nicht standardisierten) Modus `readwriteflush` (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

## Instanzeigenschaften

- [`IDBTransaction.db`](/de/docs/Web/API/IDBTransaction/db) {{ReadOnlyInline}}
  - : Die Datenbankverbindung, der diese Transaktion zugeordnet ist.
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) {{ReadOnlyInline}}
  - : Gibt den Dauerhaftigkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
- [`IDBTransaction.error`](/de/docs/Web/API/IDBTransaction/error) {{ReadOnlyInline}}
  - : Gibt bei einer fehlgeschlagenen Transaktion eine [`DOMException`](/de/docs/Web/API/DOMException) zurück, die den aufgetretenen Fehlertyp angibt. Diese Eigenschaft ist `null`, wenn die Transaktion noch nicht abgeschlossen ist, erfolgreich abgeschlossen wurde oder mit der Funktion [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) abgebrochen wurde.
- [`IDBTransaction.mode`](/de/docs/Web/API/IDBTransaction/mode) {{ReadOnlyInline}}
  - : Der Modus, mit dem der Zugriff auf Daten in den Object Stores im Geltungsbereich der Transaktion isoliert wird. Der Standardwert ist `readonly`.
- [`IDBTransaction.objectStoreNames`](/de/docs/Web/API/IDBTransaction/objectStoreNames) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringList`](/de/docs/Web/API/DOMStringList) mit den Namen der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekte zurück, die der Transaktion zugeordnet sind.

## Instanzmethoden

Erbt von: [`EventTarget`](/de/docs/Web/API/EventTarget)

- [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort)
  - : Macht alle Änderungen an Objekten in der Datenbank rückgängig, die dieser Transaktion zugeordnet sind. Wenn diese Transaktion bereits abgebrochen oder abgeschlossen wurde, löst diese Methode ein Fehlerereignis aus.
- [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)
  - : Gibt ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekt zurück, das einen Object Store im Geltungsbereich dieser Transaktion repräsentiert.
- [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit)
  - : Schließt eine aktive Transaktion ab. Beachten Sie, dass diese Methode normalerweise _nicht_ aufgerufen werden muss: Eine Transaktion wird automatisch abgeschlossen, wenn alle ausstehenden Anfragen bearbeitet wurden und keine neuen Anfragen gestellt wurden. Mit `commit()` können Sie den Abschlussvorgang einleiten, ohne darauf zu warten, dass Ereignisse zu ausstehenden Anfragen ausgelöst werden.

## Ereignisse

Verwenden Sie `addEventListener()`, um auf diese Ereignisse zu reagieren, oder weisen Sie der Eigenschaft `oneventname` dieser Schnittstelle einen Event Listener zu.

- [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die `IndexedDB`-Transaktion abgebrochen wird. Es ist auch über die Eigenschaft `onabort` verfügbar; dieses Ereignis wird an [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) weitergereicht.
- [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die Transaktion erfolgreich abgeschlossen wird. Es ist auch über die Eigenschaft `oncomplete` verfügbar.
- [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis bis zum Verbindungsobjekt ([`IDBDatabase`](/de/docs/Web/API/IDBDatabase)) weitergereicht wird. Es ist auch über die Eigenschaft `onerror` verfügbar.

## Moduskonstanten

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar – sie wurden in Gecko 25 entfernt. Verwenden Sie stattdessen direkt die String-Konstanten. ([Firefox-Bug 888598](https://bugzil.la/888598))

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
        <code>READ_ONLY</code>
      </td>
      <td>"readonly" (0 in Chrome)</td>
      <td><p>Erlaubt das Lesen von Daten, aber keine Änderungen.</p></td>
    </tr>
    <tr>
      <td>
        <code>READ_WRITE</code>
      </td>
      <td>"readwrite" (1 in Chrome)</td>
      <td>
        Erlaubt das Lesen und Schreiben von Daten in bestehenden Datenspeichern.
      </td>
    </tr>
    <tr>
      <td>
        <code>VERSION_CHANGE</code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Erlaubt jede Operation, einschließlich des Löschens und Erstellens von
        Object Stores und Indizes. Transaktionen in diesem Modus können nicht
        gleichzeitig mit anderen Transaktionen ausgeführt werden. Sie werden
        als „Upgrade-Transaktionen“ bezeichnet.
      </td>
    </tr>
  </tbody>
</table>

Auch wenn diese Konstanten inzwischen veraltet sind, können Sie sie bei Bedarf weiterhin verwenden, um Abwärtskompatibilität zu gewährleisten. Schreiben Sie Ihren Code defensiv für den Fall, dass das Objekt nicht mehr verfügbar ist:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Beispiele

Im folgenden Codeausschnitt öffnen wir eine Lese-/Schreibtransaktion für unsere Datenbank und fügen einem Object Store einige Daten hinzu. Beachten Sie auch die Funktionen, die den Event-Handlern der Transaktion zugewiesen sind: Sie melden, ob die Transaktion erfolgreich geöffnet wurde oder fehlgeschlagen ist. Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserer App [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
