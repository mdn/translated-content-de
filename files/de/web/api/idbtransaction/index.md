---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBTransaction`**-Interface der [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) bietet eine statische, asynchrone Transaktion auf einer Datenbank mit Event-Handler-Attributen. Alle Lese- und Schreibvorgänge von Daten erfolgen innerhalb von Transaktionen. Sie verwenden [`IDBDatabase`](/de/docs/Web/API/IDBDatabase), um Transaktionen zu starten, `IDBTransaction`, um den Modus der Transaktion festzulegen (z.B. ob sie `readonly` oder `readwrite` ist), und greifen auf einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) zu, um eine Anfrage zu stellen. Sie können auch ein `IDBTransaction`-Objekt verwenden, um Transaktionen abzubrechen.

{{InheritanceDiagram}}

Transaktionen werden begonnen, wenn die Transaktion erstellt wird, nicht, wenn die erste Anfrage gestellt wird; zum Beispiel:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

Nach Ausführung des Codes sollte der Object Store den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

Eine Transaktion wechselt zwischen _aktiven_ und _inaktiven_ Zuständen zwischen Event-Loop-Aufgaben. Sie ist in der Aufgabe aktiv, wenn sie erstellt wurde, und in jeder Aufgabe der [`success`](/de/docs/Web/API/IDBRequest/success_event)- oder [`error`](/de/docs/Web/API/IDBRequest/error_event)-Event-Handler der Anfragen. In allen anderen Aufgaben ist sie inaktiv, in diesem Fall scheitern neue Anfragen. Wenn keine neuen Anfragen gestellt werden, wenn die Transaktion aktiv ist, und es keine anderen ausstehenden Anfragen gibt, wird die Transaktion automatisch abgeschlossen.

## Transaktionsfehler

Transaktionen können aus einer begrenzten Anzahl von Gründen fehlschlagen, von denen alle (außer dem Absturz des User-Agents) einen Abbruch-Callback auslösen:

- Abbruch aufgrund fehlerhafter Anfragen, z.B. der Versuch, denselben Schlüssel zweimal hinzuzufügen (`add()`) oder mit demselben Indexschlüssel mit einer Einzigartigkeitsbeschränkung zu `put()`. Dies führt zu einem Fehler bei der Anfrage, der sich bis zu einem Fehler bei der Transaktion ausbreiten kann, wodurch die Transaktion abgebrochen wird. Dies kann verhindert werden, indem `preventDefault()` für das Fehler-Event bei der Anfrage verwendet wird.
- Ein expliziter `abort()`-Aufruf aus dem Skript.
- Eine nicht abgefangene Ausnahme im `success`/`error` Handler der Anfrage.
- Ein E/A-Fehler (z.B. ein tatsächliches Schreibversagen auf die Festplatte oder ein anderes Betriebssystem-/Hardware-Versagen).
- Überschreiten der Quote.
- Ein Absturz des User-Agents.

## Haltbarkeitsgarantien in Firefox

Beachten Sie, dass seit Firefox 40 IndexedDB-Transaktionen entspannte Haltbarkeitsgarantien haben, um die Leistung zu steigern (siehe [Firefox Bug 1112702](https://bugzil.la/1112702)). Früher wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Event nur ausgelöst, wenn garantiert war, dass alle Daten auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Event ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Event kann daher schneller als zuvor geliefert werden, es besteht jedoch ein kleines Risiko, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter damit beschäftigen müssen.

Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z.B. speichern Sie kritische Daten, die später nicht erneut berechnet werden können), können Sie eine Transaktion zwingen, auf die Festplatte geschrieben zu werden, bevor das `complete`-Event ausgeliefert wird, indem Sie eine Transaktion im experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)).

## Instanz-Eigenschaften

- [`IDBTransaction.db`](/de/docs/Web/API/IDBTransaction/db) {{ReadOnlyInline}}
  - : Die Datenbankverbindung, mit der diese Transaktion verknüpft ist.
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) {{ReadOnlyInline}}
  - : Gibt den Haltbarkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
- [`IDBTransaction.error`](/de/docs/Web/API/IDBTransaction/error) {{ReadOnlyInline}}
  - : Gibt eine [`DOMException`](/de/docs/Web/API/DOMException) zurück, die den Fehlertyp angibt, der aufgetreten ist, wenn eine Transaktion nicht erfolgreich war. Diese Eigenschaft ist `null`, wenn die Transaktion nicht abgeschlossen ist, erfolgreich abgeschlossen wurde oder mit der Funktion [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) abgebrochen wurde.
- [`IDBTransaction.mode`](/de/docs/Web/API/IDBTransaction/mode) {{ReadOnlyInline}}
  - : Der Modus zur Isolierung des Zugriffs auf Daten in den Objekt-Stores, die im Geltungsbereich der Transaktion liegen. Der Standardwert ist `readonly`.
- [`IDBTransaction.objectStoreNames`](/de/docs/Web/API/IDBTransaction/objectStoreNames) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringList`](/de/docs/Web/API/DOMStringList) der Namen von [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekten zurück, die mit der Transaktion verknüpft sind.

## Instanz-Methoden

Erbt von: [`EventTarget`](/de/docs/Web/API/EventTarget)

- [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort)
  - : Macht alle Änderungen an Objekten in der mit dieser Transaktion verbundenen Datenbank rückgängig. Wenn diese Transaktion abgebrochen oder abgeschlossen wurde, wird ein Fehler-Event ausgelöst.
- [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)
  - : Gibt ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekt zurück, das einen Objekt-Store darstellt, der Teil des Geltungsbereichs dieser Transaktion ist.
- [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit)
  - : Für eine aktive Transaktion, bestätigt die Transaktion. Beachten Sie, dass dies normalerweise nicht _aufgerufen werden muss_ — eine Transaktion wird automatisch bestätigt, wenn alle ausstehenden Anfragen erfüllt sind und keine neuen Anfragen gestellt werden. `commit()` kann verwendet werden, um den Bestätigungsprozess zu starten, ohne auf Ereignisse von ausstehenden Anfragen zu warten.

## Ereignisse

Hören Sie auf diese Ereignisse, indem Sie `addEventListener()` verwenden oder einen Event-Listener an die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die `IndexedDB`-Transaktion abgebrochen wird. Ebenfalls über die `onabort`-Eigenschaft verfügbar; dieses Ereignis steigt bis zu [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) auf.
- [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die Transaktion erfolgreich abgeschlossen wird. Ebenfalls über die `oncomplete`-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis sich bis zum Verbindungsobjekt ([`IDBDatabase`](/de/docs/Web/API/IDBDatabase)) hochschaukelt. Ebenfalls über die `onerror`-Eigenschaft verfügbar.

## Modus-Konstanten

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die Zeichenfolgenkonstanten direkt verwenden. ([Firefox Bug 888598](https://bugzil.la/888598))

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
        Erlaubt das Lesen und Schreiben von Daten in bestehenden Datenbanken.
      </td>
    </tr>
    <tr>
      <td>
        <code><a>VERSION_CHANGE</a></code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Erlaubt alle Operationen, einschließlich solcher, die Objekt-Stores und
        Indizes löschen und erstellen. Transaktionen dieses Modus können nicht
        gleichzeitig mit anderen Transaktionen ausgeführt werden. Transaktionen
        in diesem Modus sind als "Upgrade-Transaktionen" bekannt.
      </td>
    </tr>
  </tbody>
</table>

Auch wenn diese Konstanten jetzt veraltet sind, können Sie sie weiterhin verwenden, um bei Bedarf Rückwärtskompatibilität zu bieten. Sie sollten defensiv codieren, falls das Objekt nicht mehr verfügbar ist:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreib-Transaktion auf unserer Datenbank und fügen einem Objekt-Store einige Daten hinzu. Beachten Sie auch die Funktionen, die an die Transaktions-Event-Handler angehängt sind, um über das Ergebnis der Transaktionseröffnung im Falle eines Erfolgs oder Fehlschlags zu berichten. Für ein vollständig funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([live Beispiel ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
