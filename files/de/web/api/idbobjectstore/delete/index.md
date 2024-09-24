---
title: "IDBObjectStore: delete()-Methode"
short-title: delete()
slug: Web/API/IDBObjectStore/delete
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode des {{domxref("IDBObjectStore")}}-Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück und löscht in einem separaten Thread den oder die angegebenen Datensätze.

Es kann entweder ein Schlüssel oder ein {{domxref("IDBKeyRange")}} übergeben werden, sodass ein oder mehrere Datensätze aus einem Speicher gelöscht werden können. Um alle Datensätze in einem Speicher zu löschen, verwenden Sie {{domxref("IDBObjectStore.clear")}}.

Beachten Sie, dass Sie bei der Verwendung eines {{domxref("IDBCursor", "IDBCursor")}} die Methode {{domxref("IDBCursor.delete()")}} verwenden können, um den aktuellen Datensatz effizienter zu löschen, ohne den Schlüssel des Datensatzes explizit abfragen zu müssen.

## Syntax

```js-nolint
delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des zu löschenden Datensatzes oder ein {{domxref("IDBKeyRange")}}, um alle Datensätze mit Schlüsseln im Bereich zu löschen.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Ist die Operation erfolgreich, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Antrags `undefined`.

### Ausnahmen

Diese Methode kann ein {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses Objektspeichers inaktiv ist.
- `ReadOnlyError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Transaktionsmodus des Objektspeichers schreibgeschützt ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Objektspeicher gelöscht wurde.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `key` kein [gültiger Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) oder ein [Schlüsselbereich](/de/docs/Web/API/IDBKeyRange) ist.

## Beispiele

Der folgende Codeausschnitt zeigt die `deleteItem()`-Funktion, die Teil der Beispielanwendung "To-do Notifications" ist. Diese App speichert To-do-Listen-Einträge mit IndexedDB. Sie können [den kompletten Code der App auf GitHub ansehen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) und [die App live ausprobieren](https://mdn.github.io/dom-examples/to-do-notifications/).

Die `deleteItem()`-Funktion wird aufgerufen, wenn der Benutzer auf die Schaltfläche klickt, um einen To-do-Listen-Eintrag zu löschen. Der Elementschlüssel ist im Datenattribut `'data-task'` der Schaltfläche festgelegt, sodass die Funktion weiß, welches Element gelöscht werden soll. Die Funktion öffnet eine Datenbanktransaktion, um das Element zu löschen, indem sie seinen Schlüssel bereitstellt. Wenn die Transaktion abgeschlossen ist, aktualisiert die Funktion die Benutzeroberfläche der App, um zu melden, dass das Element gelöscht wurde.

Beachten Sie, dass in dieser Funktion `db` eine globale Variable ist, die sich auf ein {{domxref("IDBDatabase")}}-Objekt bezieht, das beim Laden der App initialisiert wird.

```js
function deleteItem(event) {
  // den Namen der zu löschenden Aufgabe abrufen
  let dataTask = event.target.getAttribute("data-task");

  // eine Datenbanktransaktion öffnen und die Aufgabe löschen, indem sie durch den oben abgerufenen Namen gefunden wird
  let transaction = db.transaction(["toDoList"], "readwrite");
  let request = transaction.objectStore("toDoList").delete(dataTask);

  // melden, dass der Datensatz gelöscht wurde
  transaction.oncomplete = () => {
    // das übergeordnete Element der Schaltfläche löschen, das der Listeneintrag ist, damit es nicht mehr angezeigt wird
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    note.appendChild(document.createElement("li")).textContent =
      `Aufgabe "${dataTask}" gelöscht.`;
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abfragen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursor: {{domxref("IDBCursor")}}
- Beispielreferenz: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
