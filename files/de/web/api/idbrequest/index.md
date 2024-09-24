---
title: IDBRequest
slug: Web/API/IDBRequest
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBRequest`**-Schnittstelle der IndexedDB-API bietet Zugriff auf die Ergebnisse asynchroner Anfragen an Datenbanken und Datenbankobjekte mittels Ereignis-Handler-Attributen. Jede Lese- und Schreiboperation in einer Datenbank wird unter Verwendung einer Anfrage durchgeführt.

Das Anfrageobjekt enthält zunächst keine Informationen über das Ergebnis der Operation, aber sobald Informationen verfügbar werden, wird ein Ereignis für die Anfrage ausgelöst, und die Informationen werden durch die Eigenschaften der `IDBRequest`-Instanz zugänglich.

Alle asynchronen Operationen geben sofort eine `IDBRequest`-Instanz zurück. Jede Anfrage hat einen `readyState`, der auf den Zustand `'pending'` gesetzt ist; dieser ändert sich zu `'done'`, wenn die Anfrage abgeschlossen ist oder fehlschlägt. Wenn der Zustand auf `done` gesetzt ist, gibt jede Anfrage ein `result` und einen `error` zurück, und ein Ereignis wird für die Anfrage ausgelöst. Solange der Zustand noch `pending` ist, führt jeder Versuch, auf das `result` oder den `error` zuzugreifen, zu einer `InvalidStateError`-Ausnahme.

Einfach gesagt, alle asynchronen Methoden geben ein Anfrageobjekt zurück. Wenn die Anfrage erfolgreich abgeschlossen wurde, wird das Ergebnis über die `result`-Eigenschaft verfügbar gemacht und ein Ereignis, das den Erfolg anzeigt, wird bei der Anfrage ausgelöst ({{domxref("IDBRequest.success_event", "success")}}). Wenn während der Operation ein Fehler auftritt, wird die Ausnahme über die `error`-Eigenschaft verfügbar gemacht und ein Fehlerereignis wird ausgelöst ({{domxref("IDBRequest.error_event", "error")}}).

Die Schnittstelle {{domxref("IDBOpenDBRequest")}} ist von `IDBRequest` abgeleitet.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von {{domxref("EventTarget")}}._

- {{domxref("IDBRequest.error")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMException")}} im Falle einer fehlgeschlagenen Anfrage zurück, der angibt, was schiefgelaufen ist.
- {{domxref("IDBRequest.result")}} {{ReadOnlyInline}}
  - : Gibt das Ergebnis der Anfrage zurück. Wenn die Anfrage nicht abgeschlossen ist, ist das Ergebnis nicht verfügbar und eine `InvalidStateError`-Ausnahme wird ausgelöst.
- {{domxref("IDBRequest.source")}} {{ReadOnlyInline}}
  - : Die Quelle der Anfrage, wie ein {{domxref("IDBIndex")}} oder ein {{domxref("IDBObjectStore")}}. Wenn keine Quelle existiert (wie beim Aufruf von {{domxref("IDBFactory.open")}}), gibt es null zurück.
- {{domxref("IDBRequest.readyState")}} {{ReadOnlyInline}}
  - : Der Zustand der Anfrage. Jede Anfrage beginnt im Zustand `pending`. Der Zustand wechselt zu `done`, wenn die Anfrage erfolgreich abgeschlossen wird oder ein Fehler auftritt.
- {{domxref("IDBRequest.transaction")}} {{ReadOnlyInline}}
  - : Die Transaktion für die Anfrage. Diese Eigenschaft kann bei bestimmten Anfragen null sein, beispielsweise bei den von {{domxref("IDBFactory.open")}} zurückgegebenen Anfragen, es sei denn, ein Upgrade ist erforderlich. (Sie verbinden sich nur mit einer Datenbank, daher gibt es keine Transaktion zurückzugeben).

## Instanz-Methoden

_Keine Methoden, aber erbt Methoden von {{domxref("EventTarget")}}._

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`error`](/de/docs/Web/API/IDBRequest/error_event)
  - : Wird ausgelöst, wenn ein Fehler eine Anfrage fehlschlagen lässt.
- [`success`](/de/docs/Web/API/IDBRequest/success_event)
  - : Wird ausgelöst, wenn eine `IDBRequest` erfolgreich ist.

## Beispiel

Im folgenden Code-Snippet öffnen wir eine Datenbank asynchron und stellen eine Anfrage; `onerror`- und `onsuccess`-Funktionen sind enthalten, um die Erfolgs- und Fehlerfälle zu behandeln. Für ein vollständiges funktionierendes Beispiel sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Diese beiden Ereignis-Handler reagieren darauf, ob die Datenbank
// erfolgreich geöffnet wurde oder nicht
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Das Ergebnis des Öffnens der Datenbank speichern.
  db = DBOpenRequest.result;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Einen Bereich von Schlüsseln festlegen: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
