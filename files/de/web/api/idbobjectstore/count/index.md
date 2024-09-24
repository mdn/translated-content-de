---
title: "IDBObjectStore: count()-Methode"
short-title: count()
slug: Web/API/IDBObjectStore/count
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`count()`**-Methode des {{domxref("IDBObjectStore")}}-Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück und ermittelt in einem separaten Thread die Gesamtanzahl der Datensätze, die dem angegebenen Schlüssel oder {{domxref("IDBKeyRange")}} entsprechen. Wenn keine Argumente angegeben werden, wird die Gesamtanzahl der Datensätze im Speicher zurückgegeben.

## Syntax

```js-nolint
count()
count(query)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein {{domxref("IDBKeyRange")}}-Objekt, das einen Bereich von Datensätzen spezifiziert, die Sie zählen möchten.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage die Anzahl der Datensätze, die der angegebenen Abfrage entsprechen.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn dieses {{domxref("IDBObjectStore")}} gelöscht wurde.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich ungültig ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und zählen dann die Anzahl der Datensätze im Speicher mit `count()` - wenn der Erfolgshandler ausgelöst wird, protokollieren wir den Zählwert (eine ganze Zahl) in die Konsole.

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Einstellen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
