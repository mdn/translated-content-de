---
title: "IDBObjectStore: Methode getAllKeys()"
short-title: getAllKeys()
slug: Web/API/IDBObjectStore/getAllKeys
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

Die Methode `getAllKeys()` der {{domxref("IDBObjectStore")}}-Schnittstelle gibt ein {{domxref("IDBRequest")}}-Objekt zurück, das die Schlüssel für alle Objekte im Objektspeicher abruft, die dem angegebenen Parameter entsprechen, oder alle Objekte im Speicher, wenn keine Parameter angegeben sind.

Wenn ein Wert erfolgreich gefunden wird, wird eine strukturierte Kopie davon erstellt und als Ergebnis des Anforderungsobjekts festgelegt.

Diese Methode liefert das gleiche Ergebnis für:

- einen Datensatz, der nicht in der Datenbank existiert
- einen Datensatz, der einen undefinierten Wert hat

Um diese Situationen zu unterscheiden, müssen Sie die Methode {{domxref("IDBObjectStore.openCursor","openCursor()")}} mit demselben Schlüssel aufrufen. Diese Methode stellt einen Cursor bereit, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Wert, der ein {{domxref("IDBKeyRange")}} ist oder sich in einen solchen auflöst.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der Werte an, die zurückgegeben werden sollen, wenn mehr als einer gefunden wird. Ist der Wert kleiner als `0` oder größer als `2^32 - 1`, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der Eigenschaft {{domxref("IDBRequest.result", "result")}} der Anfrage ein {{jsxref("Array")}} der Schlüssel für alle Datensätze, die der angegebenen Abfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref("IDBObjectStore")}} gelöscht oder entfernt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwalten von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
