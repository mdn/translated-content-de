---
title: "IDBObjectStore: delete()-Methode"
short-title: delete()
slug: Web/API/IDBObjectStore/delete
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode des
[`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück,
und löscht in einem separaten Thread den oder die angegebenen Datensätze.

Entweder ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) kann übergeben werden, sodass ein oder mehrere
Datensätze aus einem Speicher gelöscht werden können. Um alle Datensätze in einem Speicher zu löschen, verwenden Sie
[`IDBObjectStore.clear`](/de/docs/Web/API/IDBObjectStore/clear).

Bedenken Sie, dass wenn Sie einen [`IDBCursor`](/de/docs/Web/API/IDBCursor) verwenden, Sie die
[`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)-Methode verwenden können, um den aktuellen
Datensatz effizienter zu löschen, ohne den Schlüssel des Datensatzes explizit nachschlagen zu müssen.

## Syntax

```js-nolint
delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des zu löschenden Datensatzes oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), um alle
    Datensätze mit Schlüsseln im Bereich zu löschen.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage `undefined`.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses Objekt-Speichers inaktiv ist.
- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Transaktionsmodus des Objekt-Speichers schreibgeschützt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Objekt-Speicher gelöscht wurde.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `key` kein [gültiger Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) oder ein [Schlüsselbereich](/de/docs/Web/API/IDBKeyRange) ist.

## Beispiele

Der folgende Codeausschnitt zeigt die `deleteItem()`-Funktion,
die Teil der To-do Notifications-Beispiel-App ist. Diese App speichert To-do-
Listeneinträge mit IndexedDB. Sie können
[den vollständigen Quellcode der App auf GitHub ansehen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und
[die App live ausprobieren](https://mdn.github.io/dom-examples/to-do-notifications/).

Die `deleteItem()`-Funktion wird aufgerufen, wenn der Benutzer auf die
Schaltfläche klickt, um einen To-do-Listeneintrag zu löschen. Der Artikel-Schlüssel ist im Datenattribut `'data-task'` der Schaltfläche festgelegt, sodass die Funktion
weiß, welcher Artikel gelöscht werden soll. Die Funktion öffnet eine Datenbanktransaktion,
in der der Artikel gelöscht wird, indem der Schlüssel übergeben wird. Wenn die Transaktion abgeschlossen ist,
aktualisiert die Funktion die App-Oberfläche, um zu berichten, dass das Element gelöscht wurde.

Beachten Sie, dass in dieser Funktion `db` eine globale Variable ist,
die sich auf ein [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt bezieht, das initialisiert wird, wenn
die App geladen wird.

```js
function deleteItem(event) {
  // retrieve the name of the task we want to delete
  let dataTask = event.target.getAttribute("data-task");

  // open a database transaction and delete the task, finding it by the name we retrieved above
  let transaction = db.transaction(["toDoList"], "readwrite");
  let request = transaction.objectStore("toDoList").delete(dataTask);

  // report that the data item has been deleted
  transaction.oncomplete = () => {
    // delete the parent of the button, which is the list item, so it no longer is displayed
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    note.appendChild(document.createElement("li")).textContent =
      `Task "${dataTask}" deleted.`;
  };
}
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
