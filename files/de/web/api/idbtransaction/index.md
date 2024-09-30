---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBTransaction`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet eine statische, asynchrone Transaktion auf einer Datenbank unter Verwendung von Event-Handler-Attributen. Alle Lese- und Schreibvorgänge werden innerhalb von Transaktionen durchgeführt. Sie verwenden [`IDBDatabase`](/de/docs/Web/API/IDBDatabase), um Transaktionen zu starten, `IDBTransaction`, um den Modus der Transaktion festzulegen (z.B. ob sie `readonly` oder `readwrite` ist), und Sie greifen auf einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) zu, um eine Anfrage zu stellen. Sie können auch ein `IDBTransaction`-Objekt verwenden, um Transaktionen abzubrechen.

{{InheritanceDiagram}}

Transaktionen starten, wenn die Transaktion erstellt wird, nicht bei der ersten Anforderung; betrachten Sie zum Beispiel dies:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

Nachdem der Code ausgeführt wurde, sollte der Object Store den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

Eine Transaktion wechselt zwischen _aktiv_ und _inaktiv_ zwischen Event-Loop-Aufgaben. Sie ist aktiv in der Aufgabe, als sie erstellt wurde, und in jeder Aufgabe der [`success`](/de/docs/Web/API/IDBRequest/success_event)- oder [`error`](/de/docs/Web/API/IDBRequest/error_event)-Event-Handler der Anfragen. Sie ist in allen anderen Aufgaben inaktiv, in diesem Fall schlägt das Platzieren von Anfragen fehl. Wenn keine neuen Anfragen platziert werden, während die Transaktion aktiv ist, und keine anderen ausstehenden Anfragen vorhanden sind, wird die Transaktion automatisch abgeschlossen.

## Transaktionsfehler

Transaktionen können aus einer festen Anzahl von Gründen fehlschlagen, die alle (außer dem Absturz des Benutzeragenten) einen Abbruch-Callback auslösen:

- Abbruch aufgrund schlechter Anfragen, z.B. der Versuch, denselben Schlüssel zweimal hinzuzufügen (`add()`), oder ein `put()` mit demselben Indexschlüssel mit einem Eindeutigkeitskriterium. Dies verursacht einen Fehler bei der Anfrage, der zu einem Fehler bei der Transaktion führen kann, der die Transaktion abbricht. Dies kann verhindert werden, indem `preventDefault()` auf dem Fehlerereignis der Anfrage verwendet wird.
- Ein expliziter `abort()`-Aufruf aus dem Skript.
- Eine nicht abgefangene Ausnahme in der `success`/`error`-Handler der Anfrage.
- Ein I/O-Fehler (z.B. ein tatsächliches Scheitern, auf die Festplatte zu schreiben, oder ein anderer OS-/Hardwarefehler).
- Überschrittenes Kontingent.
- Ein Absturz des Benutzeragenten.

## Dauerhaftigkeitsgarantien in Firefox

Beachten Sie, dass ab Firefox 40 IndexedDB-Transaktionen entspannte Dauerhaftigkeitsgarantien haben, um die Leistung zu steigern (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)). Früher wurde in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, möglicherweise jedoch bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller als zuvor zugestellt werden, jedoch besteht eine kleine Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder ein Stromausfall auftritt, bevor die Daten auf die Festplatte geschrieben werden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter darum kümmern müssen.

Wenn Sie aus irgendeinem Grund Dauerhaftigkeit sicherstellen müssen (z.B. speichern Sie kritische Daten, die später nicht neu berechnet werden können), können Sie eine Transaktion erzwingen, um auf die Festplatte zu schreiben, bevor das `complete`-Ereignis erfolgt, indem Sie eine Transaktion mit dem experimentellen (nicht-standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction).

## Instanz-Eigenschaften

- [`IDBTransaction.db`](/de/docs/Web/API/IDBTransaction/db) {{ReadOnlyInline}}
  - : Die Datenbankverbindung, mit der diese Transaktion verbunden ist.
- [`IDBTransaction.durability`](/de/docs/Web/API/IDBTransaction/durability) {{ReadOnlyInline}}
  - : Gibt den Dauerhaftigkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
- [`IDBTransaction.error`](/de/docs/Web/API/IDBTransaction/error) {{ReadOnlyInline}}
  - : Gibt eine [`DOMException`](/de/docs/Web/API/DOMException) zurück, die den Typ des Fehlers angibt, der auftrat, wenn eine Transaktion nicht erfolgreich war. Diese Eigenschaft ist `null`, wenn die Transaktion nicht abgeschlossen ist, erfolgreich abgeschlossen wurde oder mit der Funktion [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort) abgebrochen wurde.
- [`IDBTransaction.mode`](/de/docs/Web/API/IDBTransaction/mode) {{ReadOnlyInline}}
  - : Der Modus zur Isolierung des Zugriffs auf Daten in den im Geltungsbereich der Transaktion enthaltenen Objekt-Stores. Der Standardwert ist `readonly`.
- [`IDBTransaction.objectStoreNames`](/de/docs/Web/API/IDBTransaction/objectStoreNames) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringList`](/de/docs/Web/API/DOMStringList) der Namen der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekte zurück, die mit der Transaktion verbunden sind.

## Instanz-Methoden

Erbt von: [`EventTarget`](/de/docs/Web/API/EventTarget)

- [`IDBTransaction.abort()`](/de/docs/Web/API/IDBTransaction/abort)
  - : Macht alle Änderungen an Objekten in der mit dieser Transaktion verbundenen Datenbank rückgängig. Wenn diese Transaktion abgebrochen oder abgeschlossen wurde, löst diese Methode ein Fehlerereignis aus.
- [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore)
  - : Gibt ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekt zurück, das einen Objekt-Store darstellt, der Teil des Geltungsbereichs dieser Transaktion ist.
- [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit)
  - : Für eine aktive Transaktion wird die Transaktion abgeschlossen. Beachten Sie, dass dies normalerweise nicht aufgerufen werden muss — eine Transaktion wird automatisch abgeschlossen, wenn alle ausstehenden Anfragen zufriedenstellend bearbeitet wurden und keine neuen Anfragen gestellt werden. `commit()` kann verwendet werden, um den Abschlussprozess zu starten, ohne auf Ereignisse aus ausstehenden Anfragen zu warten.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` ab oder indem Sie einen Ereignis-Listener der Eigenschaft `oneventname` dieser Schnittstelle zuweisen.

- [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die `IndexedDB`-Transaktion abgebrochen wird.
    Auch über die `onabort`-Eigenschaft verfügbar; dieses Ereignis steigt bis zur [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) hinauf.
- [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die Transaktion erfolgreich abgeschlossen wurde.
    Auch über die `oncomplete`-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis bis zum Verbindungsobjekt ([`IDBDatabase`](/de/docs/Web/API/IDBDatabase)) aufsteigt.
    Auch über die `onerror`-Eigenschaft verfügbar.

## Modus-Konstanten

{{Deprecated_Header}}

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
        Erlaubt das Lesen und Schreiben von Daten in bestehenden Daten-Stores.
      </td>
    </tr>
    <tr>
      <td>
        <code><a>VERSION_CHANGE</a></code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Ermöglicht das Ausführen beliebiger Operationen, einschließlich solcher, die Objekt-Stores und Indizes löschen und erstellen. Transaktionen dieses Modus können nicht gleichzeitig mit anderen Transaktionen ausgeführt werden. Transaktionen in diesem Modus sind als "Upgrade-Transaktionen" bekannt.
      </td>
    </tr>
  </tbody>
</table>

Auch wenn diese Konstanten jetzt veraltet sind, können Sie sie dennoch verwenden, um abwärtskompatibel zu sein, wenn dies erforderlich ist (in Chrome [wurde die Änderung in Version 21 vorgenommen](https://peter.sh/2012/05/tab-sizing-string-values-for-indexeddb-and-chrome-21/)). Sie sollten defensiv programmieren, falls das Objekt nicht mehr verfügbar ist:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Beispiele

Im folgenden Code-Schnipsel öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen einige Daten zu einem Objekt-Store hinzu. Beachten Sie auch die Funktionen, die an Transaktions-Ereignis-Handler angehängt sind, um über das Ergebnis der Transaktionsöffnung im Falle eines Erfolgs oder Misserfolgs zu berichten. Für ein vollständiges Arbeitsbeispiel siehe unsere [Aufgabenbenachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [Aufgabenbenachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
