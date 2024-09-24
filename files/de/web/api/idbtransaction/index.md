---
title: IDBTransaction
slug: Web/API/IDBTransaction
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBTransaction`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet eine statische, asynchrone Transaktion auf einer Datenbank unter Verwendung von Event-Handler-Attributen. Alle Lese- und Schreibvorgänge von Daten erfolgen innerhalb von Transaktionen. Sie verwenden {{domxref("IDBDatabase")}}, um Transaktionen zu starten, `IDBTransaction`, um den Modus der Transaktion festzulegen (z.B. ob sie `readonly` oder `readwrite` ist), und Sie greifen auf einen {{domxref("IDBObjectStore")}} zu, um eine Anfrage zu stellen. Sie können ein `IDBTransaction`-Objekt auch verwenden, um Transaktionen abzubrechen.

{{InheritanceDiagram}}

Transaktionen werden gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; beispielsweise betrachten Sie folgendes:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

Nach der Ausführung des Codes sollte der Objektstore den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

Eine Transaktion wechselt zwischen _aktiven_ und _inaktiven_ Zuständen zwischen den Aufgaben der Event-Schleife. Sie ist in der Aufgabe aktiv, als sie erstellt wurde, und in jeder Aufgabe der Event-Handler für die `success`- oder `error`-Ereignisse der Anfragen. Sie ist in allen anderen Aufgaben inaktiv, in denen die Platzierung von Anfragen fehlschlägt. Wenn keine neuen Anfragen gestellt werden, während die Transaktion aktiv ist, und es keine anderen ausstehenden Anfragen gibt, wird die Transaktion automatisch festgeschrieben.

## Transaktionsfehler

Transaktionen können aus einer begrenzten Anzahl von Gründen fehlschlagen, von denen alle (außer einem Absturz des Benutzeragenten) einen Abbruch-Callback auslösen:

- Abbruch aufgrund fehlerhafter Anfragen, z.B. wenn versucht wird, den gleichen Schlüssel zweimal hinzuzufügen (add()) oder mit demselben Indexschlüssel mit einer Einzigartigkeitseinschränkung put() zu verwenden. Dies verursacht einen Fehler bei der Anfrage, der sich zu einem Fehler bei der Transaktion entwickeln kann, wodurch die Transaktion abgebrochen wird. Dies kann verhindert werden, indem `preventDefault()` beim Fehlerereignis der Anfrage verwendet wird.
- Ein expliziter `abort()`-Aufruf aus dem Skript.
- Eine nicht abgefangene Ausnahme im `success`/`error`-Handler der Anfrage.
- Ein I/O-Fehler (z.B. ein tatsächliches Scheitern beim Schreiben auf die Festplatte oder ein anderer OS/Hardware-Fehler).
- Quota überschritten.
- Ein Absturz des Benutzeragenten.

## Firefox-Haltbarkeitsgarantien

Beachten Sie, dass ab Firefox 40 die Haltbarkeitsgarantien von IndexedDB-Transaktionen gelockert wurden, um die Leistung zu steigern (siehe [Firefox bug 1112702](https://bugzil.la/1112702)). Zuvor wurde bei einer `readwrite`-Transaktion ein {{domxref("IDBTransaction.complete_event","complete")}}-Ereignis nur ausgelöst, wenn alle Daten garantiert auf die Festplatte geschrieben wurden. In Firefox 40+ wird das `complete`-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das `complete`-Ereignis kann daher schneller als zuvor geliefert werden, jedoch besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall des Systems kommt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, müssen sich die meisten Anwender nicht weiter darum kümmern.

Wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen müssen (z.B. weil Sie kritische Daten speichern, die später nicht neu berechnet werden können), können Sie eine Transaktion dazu zwingen, vor der Lieferung des `complete`-Ereignisses auf die Festplatte zu schreiben, indem Sie eine Transaktion mit dem experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe {{domxref("IDBDatabase.transaction")}}).

## Instanz-Eigenschaften

- {{domxref("IDBTransaction.db")}} {{ReadOnlyInline}}
  - : Die Datenbankverbindung, mit der diese Transaktion verbunden ist.
- {{domxref("IDBTransaction.durability")}} {{ReadOnlyInline}}
  - : Gibt den Haltbarkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
- {{domxref("IDBTransaction.error")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("DOMException")}} zurück, die den Fehlertyp angibt, der aufgetreten ist, wenn eine Transaktion nicht erfolgreich ist. Diese Eigenschaft ist `null`, wenn die Transaktion nicht abgeschlossen ist, abgeschlossen und erfolgreich festgeschrieben wurde oder mit der {{domxref("IDBTransaction.abort()")}} Funktion abgebrochen wurde.
- {{domxref("IDBTransaction.mode")}} {{ReadOnlyInline}}
  - : Der Modus zur Isolierung des Zugriffs auf Daten in den Objektstores, die im Bereich der Transaktion enthalten sind. Der Standardwert ist `readonly`.
- {{domxref("IDBTransaction.objectStoreNames")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("DOMStringList")}} der Namen der {{domxref("IDBObjectStore")}}-Objekte zurück, die mit der Transaktion verbunden sind.

## Instanz-Methoden

Erbt von: {{domxref("EventTarget")}}

- {{domxref("IDBTransaction.abort()")}}
  - : Macht alle Änderungen an Objekten in der mit dieser Transaktion verbundenen Datenbank rückgängig. Wenn diese Transaktion bereits abgebrochen oder abgeschlossen wurde, wird bei diesem Aufruf ein Fehlerereignis ausgelöst.
- {{domxref("IDBTransaction.objectStore()")}}
  - : Gibt ein {{domxref("IDBObjectStore")}}-Objekt zurück, das einen Objektstore repräsentiert, der Teil des Bereichs dieser Transaktion ist.
- {{domxref("IDBTransaction.commit()")}}
  - : Für eine aktive Transaktion bestätigt die Transaktion. Beachten Sie, dass dies normalerweise nicht _erforderlich_ ist — eine Transaktion wird automatisch festgeschrieben, wenn alle ausstehenden Anfragen erfüllt wurden und keine neuen Anfragen gestellt wurden. `commit()` kann verwendet werden, um den Bestätigungsprozess zu starten, ohne auf Ereignisse von ausstehenden Anfragen zu warten.

## Ereignisse

Hören Sie diese Ereignisse mittels `addEventListener()` oder indem Sie einen Event-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die `IndexedDB`-Transaktion abgebrochen wird.
    Auch über die `onabort`-Eigenschaft verfügbar; dieses Ereignis steigt bis zu {{domxref("IDBDatabase")}} auf.
- [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)
  - : Ein Ereignis, das ausgelöst wird, wenn die Transaktion erfolgreich abgeschlossen wurde.
    Auch über die `oncomplete`-Eigenschaft verfügbar.
- [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler erzeugt und das Ereignis bis zum Verbindungsobjekt ({{domxref("IDBDatabase")}}) aufsteigt.
    Auch über die `onerror`-Eigenschaft verfügbar.

## Modus-Konstanten

{{Deprecated_Header}}

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die String-Konstanten direkt verwenden. ([Firefox bug 888598](https://bugzil.la/888598))

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
        Erlaubt das Lesen und Ändern von Daten in vorhandenen Datenspeichern.
      </td>
    </tr>
    <tr>
      <td>
        <code><a>VERSION_CHANGE</a></code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Erlaubt alle Operationen, einschließlich derjenigen, die Objektstores
        und Indizes löschen und erstellen. Transaktionen dieses Modus können
        nicht gleichzeitig mit anderen Transaktionen ausgeführt werden.
        Transaktionen in diesem Modus sind als "Upgrade-Transaktionen" bekannt.
      </td>
    </tr>
  </tbody>
</table>

Auch wenn diese Konstanten jetzt veraltet sind, können Sie sie immer noch verwenden, um die Rückwärtskompatibilität sicherzustellen, falls erforderlich (in Chrome [wurde die Änderung in Version 21 vorgenommen](https://peter.sh/2012/05/tab-sizing-string-values-for-indexeddb-and-chrome-21/)). Sie sollten vorsichtig programmieren, falls das Objekt nicht mehr verfügbar ist:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen einem Objektstore einige Daten hinzu. Beachten Sie auch die Funktionen, die an die Transaktions-Event-Handler angehängt sind, um über das Ergebnis der Transaktionsöffnung im Erfolgs- oder Fehlerfall zu berichten. Für ein vollständiges funktionierendes Beispiel sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)) an.

```js
const note = document.getElementById("notifications");

// eine Instanz eines db-Objekts, um die IDB-Daten zu speichern
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db
  // Variable. Diese wird unten oft verwendet
  db = DBOpenRequest.result;

  // Fügen Sie die Daten zur Datenbank hinzu
  addData();
};

function addData() {
  // Erstellen Sie ein neues Objekt, das in die IDB eingefügt werden soll
  const newItem = [
    {
      taskTitle: "Hund ausführen",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "Dezember",
      year: 2013,
      notified: "nein",
    },
  ];

  // Öffnen Sie eine Lese-/Schreibdatenbanktransaktion, um Daten hinzuzufügen
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Bericht über den Erfolg der Transaktionsöffnung
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen: Datenbankänderung abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion nicht eröffnet aufgrund eines Fehlers. Doppelte Einträge nicht erlaubt.";
  };

  // Erstellen Sie einen Objektstore auf der Transaktion
  const objectStore = transaction.objectStore("toDoList");

  // Fügen Sie unser newItem-Objekt dem Objekt-Store hinzu
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // Berichten Sie über den Erfolg der Anfrage (dies bedeutet nicht, dass das Element
    // erfolgreich in der DB gespeichert wurde - hierfür benötigen Sie transaction.oncomplete)
    note.appendChild(document.createElement("li")).textContent =
      "Anfrage erfolgreich.";
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursor: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
