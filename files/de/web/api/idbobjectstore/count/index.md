---
title: "IDBObjectStore: count() Methode"
short-title: count()
slug: Web/API/IDBObjectStore/count
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`count()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, und in einem separaten Thread die Gesamtzahl der Datensätze, die mit dem angegebenen Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) übereinstimmen. Wenn keine Argumente angegeben werden, wird die Gesamtzahl der Datensätze im Speicher zurückgegeben.

## Syntax

```js-nolint
count()
count(query)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)-Objekt, das einen Bereich von Datensätzen festlegt, die Sie zählen möchten.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft des Antrags die Anzahl der Datensätze, die mit der angegebenen Abfrage übereinstimmen.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich ungültig ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und zählen dann
die Anzahl der Datensätze im Speicher mit `count()` — wenn der Erfolgshandler
ausgelöst wird, protokollieren wir den Zählwert (eine ganze Zahl) in der Konsole.

```js
const transaction = db.transaction(["fThings"], "readonly");
const objectStore = transaction.objectStore("fThings");

const countRequest = objectStore.count();
countRequest.onsuccess = () => {
  console.log(countRequest.result);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
