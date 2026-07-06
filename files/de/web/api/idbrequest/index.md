---
title: IDBRequest
slug: Web/API/IDBRequest
l10n:
  sourceCommit: 8623f4af1cb6a9f904d6c18f5f772675bdce3411
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBRequest`** Interface der IndexedDB API bietet Zugriff auf die Ergebnisse asynchroner Anfragen an Datenbanken und Datenbankobjekte mittels Event-Handler-Attributen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`IDBRequest.error`](/de/docs/Web/API/IDBRequest/error) {{ReadOnlyInline}}
  - : Gibt eine [`DOMException`](/de/docs/Web/API/DOMException) im Falle einer fehlgeschlagenen Anfrage zurück, die angibt, was schiefgelaufen ist.
- [`IDBRequest.result`](/de/docs/Web/API/IDBRequest/result) {{ReadOnlyInline}}
  - : Gibt das Ergebnis der Anfrage zurück. Ist die Anfrage nicht abgeschlossen, ist das Ergebnis nicht verfügbar und es wird eine `InvalidStateError` Ausnahme ausgelöst.
- [`IDBRequest.source`](/de/docs/Web/API/IDBRequest/source) {{ReadOnlyInline}}
  - : Die Quelle der Anfrage, wie etwa ein [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore). Wenn keine Quelle existiert (wie bei einem Aufruf von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)), wird null zurückgegeben.
- [`IDBRequest.readyState`](/de/docs/Web/API/IDBRequest/readyState) {{ReadOnlyInline}}
  - : Der Zustand der Anfrage. Jede Anfrage beginnt im `pending` Zustand. Der Zustand ändert sich zu `done`, wenn die Anfrage erfolgreich abgeschlossen ist oder ein Fehler auftritt.
- [`IDBRequest.transaction`](/de/docs/Web/API/IDBRequest/transaction) {{ReadOnlyInline}}
  - : Die Transaktion der Anfrage. Diese Eigenschaft kann bei bestimmten Anfragen null sein, zum Beispiel bei denen, die von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) zurückgegeben werden, es sei denn, ein Upgrade ist notwendig. (Sie verbinden sich lediglich mit einer Datenbank, daher gibt es keine Transaktion, die zurückgegeben werden könnte).

## Instanzmethoden

_Keine Methoden, aber erbt Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Diese Ereignisse können mit `addEventListener()` abgehört oder indem ein Event-Listener der `oneventname` Eigenschaft dieses Interface zugewiesen wird:

- [`error`](/de/docs/Web/API/IDBRequest/error_event)
  - : Wird ausgelöst, wenn ein Fehler eine Anfrage fehlschlagen lässt.
- [`success`](/de/docs/Web/API/IDBRequest/success_event)
  - : Wird ausgelöst, wenn eine `IDBRequest` erfolgreich ist.

## Beschreibung

Die Ergebnisse aller Lese- und Schreiboperationen in der Datenbank werden mit einem Anfrageobjekt dieses Typs gemeldet.

Das Anfrageobjekt enthält zunächst keine Informationen über das Ergebnis der Operation, aber sobald Informationen verfügbar werden, wird ein Ereignis auf der Anfrage ausgelöst, und die Informationen werden über die Eigenschaften der `IDBRequest` Instanz zugänglich.

Alle asynchronen Operationen geben sofort eine `IDBRequest` Instanz zurück. Jede Anfrage hat einen `readyState`, der auf den `'pending'` Zustand gesetzt ist; dieser ändert sich zu `'done'`, wenn die Anfrage abgeschlossen oder fehlgeschlagen ist. Wenn der Zustand auf `done` gesetzt wird, liefert jede Anfrage ein `result` und ein `error`, und ein Ereignis wird auf der Anfrage ausgelöst. Wenn der Zustand noch `pending` ist, führt jeder Versuch, auf `result` oder `error` zuzugreifen, zu einer `InvalidStateError` Ausnahme.

Einfach ausgedrückt, alle asynchronen Methoden geben ein Anfrageobjekt zurück. Wenn die Anfrage erfolgreich abgeschlossen wurde, wird das Ergebnis über die `result` Eigenschaft verfügbar gemacht, und ein Ereignis, das den Erfolg signalisiert, wird bei der Anfrage ausgelöst ([`success`](/de/docs/Web/API/IDBRequest/success_event)). Wenn ein Fehler bei der Durchführung der Operation auftritt, wird die Ausnahme über die `error` Eigenschaft verfügbar gemacht und ein Fehlerereignis wird ausgelöst ([`error`](/de/docs/Web/API/IDBRequest/error_event)).
Die Daten in `result` hängen von der aufgerufenen Operation ab.

Das Interface [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) ist von `IDBRequest` abgeleitet.

## Beispiel

### Grundlegende Verwendung

Im folgenden Code-Snippet öffnen wir eine Datenbank asynchron und stellen eine Anfrage; Event-Listener für `error` und `success` sind enthalten, um Erfolgs- und Fehlerfälle zu behandeln.
Für ein vollständiges funktionierendes Beispiel, sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Handle the case where there is an error opening the database
DBOpenRequest.addEventListener("error", (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
});

// Handle the case where the database opens successfully
DBOpenRequest.addEventListener("success", (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database.
  db = DBOpenRequest.result;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
