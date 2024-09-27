---
title: IDBRequest
slug: Web/API/IDBRequest
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBRequest`**-Interface der IndexedDB-API ermöglicht den Zugriff auf die Ergebnisse asynchroner Anfragen an Datenbanken und Datenbankobjekte mittels Ereignis-Handler-Attributen. Jede Lese- und Schreiboperation in einer Datenbank wird mit Hilfe einer Anfrage durchgeführt.

Das Anfrageobjekt enthält anfänglich keine Informationen über das Ergebnis der Operation, sobald jedoch Informationen verfügbar werden, wird ein Ereignis auf der Anfrage ausgelöst und die Informationen werden durch die Eigenschaften der `IDBRequest`-Instanz zugänglich.

Alle asynchronen Operationen geben sofort eine `IDBRequest`-Instanz zurück. Jede Anfrage hat einen `readyState`, der zunächst auf den Zustand `'pending'` gesetzt ist; dieser ändert sich auf `'done'`, wenn die Anfrage abgeschlossen oder fehlgeschlagen ist. Wenn der Zustand auf `done` gesetzt ist, gibt jede Anfrage ein `result` und einen `error` zurück, und ein Ereignis wird auf der Anfrage ausgelöst. Wenn der Zustand noch `pending` ist, führt jeder Versuch, auf das `result` oder den `error` zuzugreifen, zu einer `InvalidStateError`-Ausnahme.

Einfach ausgedrückt, alle asynchronen Methoden geben ein Anfrageobjekt zurück. Wenn die Anfrage erfolgreich abgeschlossen wurde, wird das Ergebnis über die `result`-Eigenschaft verfügbar gemacht und ein Ereignis, das den Erfolg anzeigt, wird bei der Anfrage ausgelöst ([`success`](/de/docs/Web/API/IDBRequest/success_event)). Wenn bei der Durchführung der Operation ein Fehler auftritt, wird die Ausnahme über die `error`-Eigenschaft verfügbar gemacht und ein Fehlerereignis ausgelöst ([`error`](/de/docs/Web/API/IDBRequest/error_event)).

Das Interface [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) leitet sich von `IDBRequest` ab.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`IDBRequest.error`](/de/docs/Web/API/IDBRequest/error) {{ReadOnlyInline}}
  - : Gibt eine [`DOMException`](/de/docs/Web/API/DOMException) im Falle einer nicht erfolgreichen Anfrage zurück, die angibt, was schiefgelaufen ist.
- [`IDBRequest.result`](/de/docs/Web/API/IDBRequest/result) {{ReadOnlyInline}}
  - : Gibt das Ergebnis der Anfrage zurück. Wenn die Anfrage nicht abgeschlossen ist, ist das Ergebnis nicht verfügbar und eine `InvalidStateError`-Ausnahme wird ausgelöst.
- [`IDBRequest.source`](/de/docs/Web/API/IDBRequest/source) {{ReadOnlyInline}}
  - : Die Quelle der Anfrage, wie z. B. ein [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore). Wenn keine Quelle existiert (wie bei einem Aufruf von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open)), wird null zurückgegeben.
- [`IDBRequest.readyState`](/de/docs/Web/API/IDBRequest/readyState) {{ReadOnlyInline}}
  - : Der Zustand der Anfrage. Jede Anfrage beginnt im `pending`-Zustand. Der Zustand ändert sich zu `done`, wenn die Anfrage erfolgreich abgeschlossen oder ein Fehler aufgetreten ist.
- [`IDBRequest.transaction`](/de/docs/Web/API/IDBRequest/transaction) {{ReadOnlyInline}}
  - : Die Transaktion für die Anfrage. Diese Eigenschaft kann für bestimmte Anfragen null sein, z. B. die von [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) zurückgegebenen, es sei denn, ein Upgrade ist erforderlich. (Sie verbinden sich lediglich mit einer Datenbank, es gibt daher keine Transaktion, die zurückgegeben werden könnte).

## Instanz-Methoden

_Keine Methoden, aber erbt Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` ab oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`error`](/de/docs/Web/API/IDBRequest/error_event)
  - : Wird ausgelöst, wenn ein Fehler dazu führte, dass eine Anfrage fehlschlug.
- [`success`](/de/docs/Web/API/IDBRequest/success_event)
  - : Wird ausgelöst, wenn eine `IDBRequest` erfolgreich ist.

## Beispiel

Im folgenden Code-Snippet öffnen wir eine Datenbank asynchron und führen eine Anfrage durch; `onerror`- und `onsuccess`-Funktionen sind enthalten, um die Erfolgs- und Fehlerfälle zu behandeln. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).)

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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
