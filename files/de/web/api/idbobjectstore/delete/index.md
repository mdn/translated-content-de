---
title: "IDBObjectStore: delete()-Methode"
short-title: delete()
slug: Web/API/IDBObjectStore/delete
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und löscht in einem separaten Thread den oder die angegebenen Datensätze.

Es kann entweder ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) übergeben werden, was erlaubt, einen oder mehrere Datensätze aus einem Speicher zu löschen. Um alle Datensätze in einem Speicher zu löschen, verwenden Sie [`IDBObjectStore.clear`](/de/docs/Web/API/IDBObjectStore/clear).

Beachten Sie, dass, wenn Sie einen [`IDBCursor`](/de/docs/Web/API/IDBCursor) verwenden, Sie die [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)-Methode nutzen können, um den aktuellen Datensatz effizienter zu löschen – ohne explizit den Schlüssel des Datensatzes suchen zu müssen.

## Syntax

```js-nolint
delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des zu löschenden Datensatzes oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) zum Löschen aller Datensätze mit Schlüsseln im Bereich.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem folgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anforderung `undefined`.

### Ausnahmen

Diese Methode kann einen [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses Objekt-Speichers inaktiv ist.
- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Transaktionsmodus des Objekt-Speichers schreibgeschützt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Objekt-Speicher gelöscht wurde.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `key` kein [gültiger Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) oder ein [Schlüsselbereich](/de/docs/Web/API/IDBKeyRange) ist.

## Beispiele

Das folgende Codebeispiel zeigt die Funktion `deleteItem()`,
die Teil der Beispiel-App für To-do-Benachrichtigungen ist. Diese App speichert To-do-Listenartikel unter Verwendung von IndexedDB. Sie können [den vollständigen Code der App auf GitHub ansehen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und [die App live ausprobieren](https://mdn.github.io/dom-examples/to-do-notifications/).

Die Funktion `deleteItem()` wird aufgerufen, wenn der Benutzer den
Button zum Löschen eines To-do-Listenartikels klickt. Der Artikelschlüssel ist im `'data-task'` Daten-Attribut des Buttons festgelegt, sodass die Funktion weiß, welcher Artikel gelöscht werden soll. Die Funktion öffnet eine Datenbanktransaktion, in der der Artikel gelöscht wird, indem sie seinen Schlüssel angibt. Wenn die Transaktion abgeschlossen ist, aktualisiert die Funktion die App-Oberfläche, um zu berichten, dass der Artikel gelöscht wurde.

Beachten Sie, dass in dieser Funktion `db` eine globale Variable ist,
die sich auf ein [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt bezieht, das bei Laden der App initialisiert wird.

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
