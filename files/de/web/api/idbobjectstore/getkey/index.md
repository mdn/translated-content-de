---
title: "IDBObjectStore: getKey()-Methode"
short-title: getKey()
slug: Web/API/IDBObjectStore/getKey
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`getKey()`**-Methode des
[`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und liefert in einem separaten Thread den Schlüssel, der durch die angegebene Abfrage ausgewählt wurde. Dies dient zum Abrufen bestimmter Datensätze aus einem Objekt-Store.

Wenn ein Schlüssel erfolgreich gefunden wird, wird eine strukturierte Kopie davon erstellt und als Ergebnis des Anforderungsobjekts gesetzt.

## Syntax

```js-nolint
getKey(key)
```

### Parameter

- `key`
  - : Der Schlüssel oder der Schlüsselbereich, der den abzurufenden Datensatz identifiziert.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Schlüssel des ersten Datensatzes, der mit dem angegebenen Schlüssel oder Schlüsselbereich übereinstimmt.

### Ausnahmen

Diese Methode kann einen der folgenden Typen von [`DOMException`](/de/docs/Web/API/DOMException) auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.

## Beispiel

```js
let openRequest = indexedDB.open("telemetry");
openRequest.onsuccess = (event) => {
  let db = event.target.result;
  let store = db.transaction("net-logs").objectStore("net-logs");

  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let request = store.getKey(IDBKeyRange(yesterday, today));
  request.onsuccess = (event) => {
    let when = event.target.result;
    alert(`The 1st activity in last 24 hours was occurred at ${when}`);
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Ein Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und Änderungen vornehmen: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
