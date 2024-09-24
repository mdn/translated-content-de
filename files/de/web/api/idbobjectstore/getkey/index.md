---
title: "IDBObjectStore: getKey()-Methode"
short-title: getKey()
slug: Web/API/IDBObjectStore/getKey
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`getKey()`**-Methode der
{{domxref("IDBObjectStore")}}-Schnittstelle gibt ein {{domxref("IDBRequest")}}-Objekt zurück,
und in einem separaten Thread wird der Schlüssel zurückgegeben, der durch die angegebene Abfrage ausgewählt wurde. Dies dient zum Abrufen spezifischer Datensätze aus einem Objekt-Store.

Wenn ein Schlüssel erfolgreich gefunden wird, wird eine strukturierte Kopie davon erstellt und als Ergebnis des Anforderungsobjekts festgelegt.

## Syntax

```js-nolint
getKey(key)
```

### Parameter

- `key`
  - : Der Schlüssel oder der Schlüsselsbereich, der den abzurufenden Datensatz identifiziert.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Anforderungsobjekts der Schlüssel für den ersten Datensatz, der mit dem angegebenen Schlüssel oder Schlüsselsbereich übereinstimmt.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref("IDBObjectStore")}} gelöscht oder entfernt wurde.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselsbereich einen ungültigen Schlüssel enthält.

## Beispiel

```js
let openRequest = indexedDB.open("telemetry");
openRequest.onsuccess = (event) => {
  let db = event.target.result;
  let store = db.transaction("netlogs").objectStore("netlogs");

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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegung eines Schlüsselsbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
