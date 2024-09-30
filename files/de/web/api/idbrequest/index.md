---
title: IDBRequest
slug: Web/API/IDBRequest
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBRequest`**-Schnittstelle der IndexedDB API bietet Zugang zu den Ergebnissen asynchroner Anfragen an Datenbanken und Datenbankobjekte mittels Ereignis-Handler-Attributen. Jede Lese- und Schreiboperation auf einer Datenbank wird über eine Anfrage durchgeführt.

Das Anfrageobjekt enthält anfänglich keine Informationen über das Ergebnis der Operation. Sobald Informationen verfügbar sind, wird ein Ereignis für die Anfrage ausgelöst, und die Informationen werden über die Eigenschaften der `IDBRequest`-Instanz zugänglich.

Alle asynchronen Operationen geben sofort eine `IDBRequest`-Instanz zurück. Jede Anfrage hat einen `readyState`, der auf den `'pending'`-Zustand gesetzt ist; dieser ändert sich zu `'done'`, wenn die Anfrage abgeschlossen ist oder fehlschlägt. Wenn der Status auf `done` gesetzt wird, gibt jede Anfrage ein `result` und einen `error` zurück, und ein Ereignis wird bei der Anfrage ausgelöst. Wenn der Status noch `pending` ist, führt jeder Versuch, auf das `result` oder den `error` zuzugreifen, zu einer `InvalidStateError`-Ausnahme.

Einfach ausgedrückt, geben alle asynchronen Methoden ein Anfrageobjekt zurück. Wenn die Anfrage erfolgreich abgeschlossen wurde, wird das Ergebnis über die `result`-Eigenschaft verfügbar gemacht und ein Ereignis, das den Erfolg anzeigt, wird bei der Anfrage ausgelöst ([`success`](/de/docs/Web/API/IDBRequest/success_event)). Wenn beim Ausführen der Operation ein Fehler auftritt, wird die Ausnahme über die `error`-Eigenschaft verfügbar gemacht und ein Fehlerereignis wird ausgelöst ([`error`](/de/docs/Web/API/IDBRequest/error_event)).

Die Schnittstelle [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) leitet sich von `IDBRequest` ab.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`IDBRequest.error`](/de/docs/Web/API/IDBRequest/error) {{ReadOnlyInline}}
  - : Gibt eine [`DOMException`](/de/docs/Web/API/DOMException) im Falle einer fehlgeschlagenen Anfrage zurück, die anzeigt, was schiefgelaufen ist.
- [`IDBRequest.result`](/de/docs/Web/API/IDBRequest/result) {{ReadOnlyInline}}
  - : Gibt das Ergebnis der Anfrage zurück. Wenn die Anfrage nicht abgeschlossen ist, ist das Ergebnis nicht verfügbar und eine `InvalidStateError`-Ausnahme wird ausgelöst.
- [`IDBRequest.source`](/de/docs/Web/API/IDBRequest/source) {{ReadOnlyInline}}
  - : Die Quelle der Anfrage, wie ein [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore). Falls keine Quelle existiert (zum Beispiel beim Aufruf von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)), wird null zurückgegeben.
- [`IDBRequest.readyState`](/de/docs/Web/API/IDBRequest/readyState) {{ReadOnlyInline}}
  - : Der Status der Anfrage. Jede Anfrage beginnt im `pending`-Status. Der Status ändert sich zu `done`, wenn die Anfrage erfolgreich abgeschlossen wird oder ein Fehler auftritt.
- [`IDBRequest.transaction`](/de/docs/Web/API/IDBRequest/transaction) {{ReadOnlyInline}}
  - : Die Transaktion der Anfrage. Diese Eigenschaft kann bei bestimmten Anfragen null sein, z.B. bei denen, die von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) zurückgegeben werden, es sei denn, ein Upgrade ist erforderlich. (Sie verbinden sich lediglich mit einer Datenbank, daher gibt es keine Transaktion zurückzugeben).

## Instanzmethoden

_Keine Methoden, aber erbt Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` ab oder weisen Sie dieser Schnittstelle einen Ereignis-Listener zu, indem Sie die Eigenschaft `oneventname` verwenden.

- [`error`](/de/docs/Web/API/IDBRequest/error_event)
  - : Wird ausgelöst, wenn ein Fehler eine Anfrage zum Scheitern bringt.
- [`success`](/de/docs/Web/API/IDBRequest/success_event)
  - : Wird ausgelöst, wenn eine `IDBRequest` erfolgreich ist.

## Beispiel

Im folgenden Codeausschnitt öffnen wir eine Datenbank asynchron und stellen eine Anfrage; `onerror` und `onsuccess` Funktionen sind enthalten, um die Erfolgs- und Fehlerfälle zu behandeln. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being
// opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database.
  db = DBOpenRequest.result;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Eine Reihe von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Ihre Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
