---
title: "IDBFactory: deleteDatabase()-Methode"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`deleteDatabase()`**-Methode der
{{DOMxRef("IDBFactory")}}-Schnittstelle fordert die Löschung einer Datenbank an. Die Methode
gibt sofort ein {{DOMxRef("IDBOpenDBRequest")}}-Objekt zurück und führt den Löschvorgang
asynchron aus.

Wenn die Datenbank erfolgreich gelöscht wird, wird ein `success`-Ereignis auf dem
von dieser Methode zurückgegebenen Anforderungsobjekt ausgelöst, wobei dessen `result` auf
`undefined` gesetzt ist. Wenn ein Fehler während des Löschens der Datenbank auftritt, wird ein
`error`-Ereignis auf dem von dieser Methode zurückgegebenen Anforderungsobjekt ausgelöst.

Wenn `deleteDatabase()` aufgerufen wird, erhalten alle anderen offenen Verbindungen zu dieser
speziellen Datenbank ein [versionchange](/de/docs/Web/API/IDBDatabase/versionchange_event)-Ereignis.

## Syntax

```js-nolint
// Für den aktuellen Standard:
deleteDatabase(name)

// Für die experimentelle Version mit `options` (siehe unten):
deleteDatabase(name)
deleteDatabase(name, options)
```

### Parameter

- `name`
  - : Der Name der Datenbank, die Sie löschen möchten. Beachten Sie, dass der Versuch, eine
    nicht existierende Datenbank zu löschen, keine Ausnahme auslöst, im Gegensatz zu
    {{DOMxRef("IDBDatabase.deleteObjectStore()")}}, das eine Ausnahme auslöst, wenn der
    benannte Objektspeicher nicht existiert.
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : In Gecko, seit [Version 26](/de/docs/Mozilla/Firefox/Releases/26), können Sie einen
    nicht standardmäßigen optionalen Speicherparameter einschließen, der angibt, ob Sie eine
    `permanent` (der Standardwert) IndexedDB löschen möchten oder eine IndexedDB im
    `temporary` Speicher (auch bekannt als Shared Pool).

### Rückgabewert

Ein {{DOMxRef("IDBOpenDBRequest")}}, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Anforderung ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anforderung `null`.

## Beispiele

```js
const DBDeleteRequest = window.indexedDB.deleteDatabase("toDoList");

DBDeleteRequest.onerror = (event) => {
  console.error("Fehler beim Löschen der Datenbank.");
};

DBDeleteRequest.onsuccess = (event) => {
  console.log("Datenbank erfolgreich gelöscht");

  console.log(event.result); // sollte undefined sein
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{DOMxRef("IDBDatabase")}}
- Verwendung von Transaktionen: {{DOMxRef("IDBTransaction")}}
- Einen Schlüsselbereich festlegen: {{DOMxRef("IDBKeyRange")}}
- Ihre Daten abrufen und Änderungen vornehmen: {{DOMxRef("IDBObjectStore")}}
- Verwendung von Cursoren: {{DOMxRef("IDBCursor")}}
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
