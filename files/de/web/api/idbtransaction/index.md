---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die Schnittstelle **`IDBTransaction`** der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt eine statische, asynchrone Transaktion für eine Datenbank unter Verwendung von Event-Handler-Attributen bereit. Sämtliches Lesen und Schreiben von Daten erfolgt innerhalb von Transaktionen. Sie verwenden [`IDBDatabase`](/de/docs/Web/API/IDBDatabase), um Transaktionen zu starten, `IDBTransaction`, um den Modus der Transaktion festzulegen (z. B. ob sie `readonly` oder `readwrite` ist), und greifen auf einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) zu, um eine Anfrage auszuführen. Sie können ein `IDBTransaction`-Objekt auch verwenden, um Transaktionen abzubrechen.

{{InheritanceDiagram}}

Transaktionen werden gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; betrachten Sie beispielsweise Folgendes:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

Nach Ausführung des Codes sollte der Object Store den Wert „2“ enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

Eine Transaktion wechselt zwischen den Zuständen _aktiv_ und _inaktiv_ zwischen Event-Loop-Tasks. Sie ist in dem Task aktiv, in dem sie erstellt wurde, sowie in jedem Task der [`success`](/de/docs/Web/API/IDBRequest/success_event)- oder [`error`](/de/docs/Web/API/IDBRequest/error_event)-Event-Handler der Anfragen. In allen anderen Tasks ist sie inaktiv; in diesem Fall schlagen Anfragen fehl. Wenn keine neuen Anfragen gestellt werden, während die Transaktion aktiv ist, und keine weiteren ausstehenden Anfragen vorhanden sind, wird die Transaktion automatisch festgeschrieben.

## Transaktionsfehler

Transaktionen können aus einer festgelegten Anzahl von Gründen fehlschlagen; alle davon (außer einem Absturz des User Agents) lösen einen Abort-Callback aus:

- Abbruch aufgrund fehlerhafter Anfragen, z. B. beim Versuch, denselben Schlüssel zweimal mit `add()` hinzuzufügen, oder bei `put()` mit demselben Indexschlüssel bei einer Eindeutigkeitsbeschränkung. Dies verursacht einen Fehler bei der Anfrage, der zu einem Fehler bei der Transaktion weitergereicht werden kann, wodurch die Transaktion abgebrochen wird. Dies kann verhindert werden, indem `preventDefault()` für das Fehlerereignis der Anfrage verwendet wird.
- Ein expliziter `abort()`-Aufruf durch ein Skript.
- Eine nicht abgefangene Ausnahme im `success`/`error`-Handler der Anfrage.
- Ein E/A-Fehler (z. B. ein tatsächlicher Fehler beim Schreiben auf die Festplatte oder ein anderer Betriebssystem-/Hardwarefehler).
- Überschrittenes Kontingent.
- Ein Absturz des User Agents.

## Firefox-Dauerhaftigkeitsgarantien

Beachten Sie, dass IndexedDB-Transaktionen seit Firefox 40 gelockerte Dauerhaftigkeitsgarantien haben, um die Leistung zu erhöhen (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702).) Zuvor wurde bei einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis erst ausgelöst, wenn garantiert war, dass alle Daten auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben, jedoch möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller als zuvor ausgeliefert werden; allerdings besteht eine geringe Wahrscheinlichkeit, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder die Stromversorgung ausfällt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Nutzenden nicht weiter darum kümmern.

Wenn Sie aus irgendeinem Grund Dauerhaftigkeit sicherstellen müssen (z. B. weil Sie kritische Daten speichern, die später nicht neu berechnet werden können), können Sie eine Transaktion dazu zwingen, vor der Auslieferung des `complete`-Ereignisses auf die Festplatte zu schreiben, indem Sie eine Transaktion mit dem experimentellen (nicht standardmäßigen) Modus `readwriteflush` erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction).

## Instanzeigenschaften

- [`IDBTransaction.db`](/de/docs/Web/API/IDBTransaction/db) {{ReadOnlyInline}}
  - : Die Datenbankverbindung, der diese Transaktion zugeordnet ist.
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) {{ReadOnlyInline}}
  - : Gibt den Dauerhaftigkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
- [`IDBTransaction.error`](/de/docs/Web/API/IDBTransaction/error) {{ReadOnlyInline}}
  - : Gibt eine [`DOMException`](/de/docs/Web/API/DOMException) zurück, die den Fehlertyp angibt, der bei einer nicht erfolgreichen Transaktion aufgetreten ist. Diese Eigenschaft ist `null`, wenn die Transaktion nicht abgeschlossen ist, abgeschlossen und erfolgreich festgeschrieben wurde oder mit der Funktion [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) abgebrochen wurde.
- [`IDBTransaction.mode`](/de/docs/Web/API/IDBTransaction/mode) {{ReadOnlyInline}}
  - : Der Modus zur Isolierung des Zugriffs auf Daten in den Object Stores, die zum Geltungsbereich der Transaktion gehören. Der Standardwert ist `readonly`.
- [`IDBTransaction.objectStoreNames`](/de/docs/Web/API/IDBTransaction/objectStoreNames) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringList`](/de/docs/Web/API/DOMStringList) mit den Namen der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekte zurück, die der Transaktion zugeordnet sind.

## Instanzmethoden

Geerbt von: [`EventTarget`](/de/docs/Web/API/EventTarget)

- [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort)
  - : Macht alle Änderungen an Objekten in der Datenbank rückgängig, die dieser Transaktion zugeordnet sind. Wenn diese Transaktion abgebrochen wurde oder abgeschlossen ist, löst diese Methode ein Fehlerereignis aus.
- [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)
  - : Gibt ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekt zurück, das einen Object Store darstellt, der Teil des Geltungsbereichs dieser Transaktion ist.
- [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit)
  - : Schreibt bei einer aktiven Transaktion die Transaktion fest. Beachten Sie, dass dies normalerweise nicht aufgerufen werden _muss_ — eine Transaktion wird automatisch festgeschrieben, wenn alle ausstehenden Anfragen erfüllt wurden und keine neuen Anfragen gestellt wurden. `commit()` kann verwendet werden, um den Festschreibungsprozess zu starten, ohne darauf zu warten, dass Ereignisse ausstehender Anfragen ausgeliefert werden.

## Ereignisse

Überwachen Sie diese Ereignisse mit `addEventListener()` oder indem Sie der Eigenschaft `oneventname` dieser Schnittstelle einen Event Listener zuweisen.

- [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die `IndexedDB`-Transaktion abgebrochen wird.
    Auch über die Eigenschaft `onabort` verfügbar; dieses Ereignis wird an [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) weitergereicht.
- [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die Transaktion erfolgreich abgeschlossen wird.
    Auch über die Eigenschaft `oncomplete` verfügbar.
- [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis an das Verbindungsobjekt ([`IDBDatabase`](/de/docs/Web/API/IDBDatabase)) weitergereicht wird.
    Auch über die Eigenschaft `onerror` verfügbar.

## Moduskonstanten

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die Zeichenkettenkonstanten direkt verwenden. ([Firefox-Bug 888598](https://bugzil.la/888598))

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
      <td><p>Erlaubt das Lesen von Daten, jedoch nicht deren Änderung.</p></td>
    </tr>
    <tr>
      <td>
        <code>READ_WRITE</code>
      </td>
      <td>"readwrite" (1 in Chrome)</td>
      <td>
        Erlaubt das Lesen und Schreiben von Daten in vorhandenen Datenspeichern.
      </td>
    </tr>
    <tr>
      <td>
        <code>VERSION_CHANGE</code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Erlaubt die Ausführung beliebiger Operationen, einschließlich solcher, die
        Object Stores und Indizes löschen und erstellen. Transaktionen dieses Modus können nicht
        gleichzeitig mit anderen Transaktionen ausgeführt werden. Transaktionen in diesem Modus werden
        als „Upgrade-Transaktionen“ bezeichnet.
      </td>
    </tr>
  </tbody>
</table>

Auch wenn diese Konstanten jetzt veraltet sind, können Sie sie bei Bedarf weiterhin verwenden, um Abwärtskompatibilität bereitzustellen. Sie sollten defensiv programmieren, falls das Objekt nicht mehr verfügbar ist:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Beispiele

Im folgenden Codeausschnitt öffnen wir eine Lese-/Schreibtransaktion für unsere Datenbank und fügen einem Object Store einige Daten hinzu. Beachten Sie auch die Funktionen, die an die Event-Handler der Transaktion angehängt sind, um bei Erfolg oder Fehlschlag über das Ergebnis des Öffnens der Transaktion zu berichten. Ein vollständiges funktionierendes Beispiel finden Sie in unserer App [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Ihre Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
