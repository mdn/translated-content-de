---
title: "IDBObjectStore: add() Methode"
short-title: add()
slug: Web/API/IDBObjectStore/add
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`add()`** Methode der {{domxref("IDBObjectStore")}} Schnittstelle gibt ein {{domxref("IDBRequest")}} Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des Werts und speichert den geklonten Wert im Objekt-Store. Diese Methode dient zum Hinzufügen neuer Datensätze zu einem Objekt-Store.

Um festzustellen, ob die Hinzufügungsoperation erfolgreich abgeschlossen wurde, sollten Sie sowohl auf das `complete` Ereignis der Transaktion als auch auf das `success` Ereignis des `IDBObjectStore.add` Requests hören, da die Transaktion auch nach dem Auslösen des Success-Ereignisses noch fehlschlagen kann. Mit anderen Worten, das Success-Ereignis wird nur ausgelöst, wenn die Transaktion erfolgreich in die Warteschlange gestellt wurde.

Die Add-Methode ist eine _Nur-Einfüge_-Methode. Wenn bereits ein Datensatz im Objekt-Store mit dem `key` Parameter als Schlüssel existiert, wird ein `ConstraintError` Fehlerereignis auf dem zurückgegebenen Anfrageobjekt ausgelöst. Um bestehende Datensätze zu aktualisieren, sollten Sie stattdessen die {{domxref("IDBObjectStore.put")}} Methode verwenden.

## Syntax

```js-nolint
add(value)
add(value, key)
```

### Parameter

- `value`
  - : Der Wert, der gespeichert werden soll.
- `key` {{optional_inline}}
  - : Der Schlüssel, der zur Identifikation des Datensatzes verwendet wird. Wenn nicht angegeben, ist er null.

### Rückgabewert

Ein {{domxref("IDBRequest")}} Objekt, auf dem nachfolgende Ereignisse in Bezug auf diese Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}} Eigenschaft der Anfrage der Schlüssel für den neuen Eintrag.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `ReadOnlyError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die mit dieser Operation verbundene Transaktion im Lese-<a href="/de/docs/Web/API/IDBTransaction#mode_constants">Modus</a> ist.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen zutrifft:
    - Der Objekt-Store verwendet In-Line-Schlüssel oder hat einen Schlüsselgenerator, und es wurde ein Schlüsselparameter angegeben.
    - Der Objekt-Store verwendet Out-of-Line-Schlüssel und hat keinen Schlüsselgenerator, und es wurde kein Schlüsselparameter angegeben.
    - Der Objekt-Store verwendet In-Line-Schlüssel, aber keinen Schlüsselgenerator, und der Schlüsselpfad des Objekt-Stores ergibt keinen gültigen Schlüssel.
    - Der Schlüsselparameter wurde angegeben, enthält jedoch keinen gültigen Schlüssel.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref("IDBObjectStore")}} gelöscht oder entfernt wurde.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klon-Algorithmus geklont werden konnten.
- `ConstraintError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Einfügevorgang fehlschlägt, weil die Primärschlüsselbedingung verletzt wurde (aufgrund eines bereits existierenden Eintrags mit demselben Primärschlüsselwert).

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen einige Daten zu einem Objekt-Store mit `add()` hinzu. Beachten Sie auch die Funktionen, die an die Transaktions-Event-Handler angehängt sind, um über den Ausgang der Transaktionsöffnung im Falle eines Erfolgs oder Misserfolgs zu berichten. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Diese wird weiter unten häufig verwendet
  db = DBOpenRequest.result;

  // Führen Sie die addData() Funktion aus, um die Daten zur Datenbank hinzuzufügen
  addData();
};

function addData() {
  // Erstellen Sie ein neues Objekt, das in die IDB eingefügt werden soll
  const newItem = [
    {
      taskTitle: "Hund ausführen",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "Dezember",
      year: 2013,
      notified: "nein",
    },
  ];

  // Öffnen Sie eine Lese-/Schreib-DB-Transaktion, bereit zum Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Berichten Sie über den Erfolg des Abschlusses der Transaktion, wenn alles erledigt ist
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion aufgrund eines Fehlers nicht geöffnet. Doppelte Einträge sind nicht erlaubt.";
  };

  // Erstellen Sie einen Objekt-Store in der Transaktion
  const objectStore = transaction.objectStore("toDoList");

  // Stellen Sie eine Anfrage, um unser newItem-Objekt dem Objekt-Store hinzuzufügen 
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // Berichten Sie über den Erfolg unserer Anfrage
    note.appendChild(document.createElement("li")).textContent =
      "Anfrage erfolgreich.";
  };
}
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
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
