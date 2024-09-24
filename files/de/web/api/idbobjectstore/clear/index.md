---
title: "IDBObjectStore: clear()-Methode"
short-title: clear()
slug: Web/API/IDBObjectStore/clear
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`clear()`**-Methode des {{domxref("IDBObjectStore")}}-Interfaces erstellt und gibt sofort ein {{domxref("IDBRequest")}}-Objekt zurück und löscht diesen Object Store in einem separaten Thread. Dies dient dazu, alle aktuellen Daten aus einem Object Store zu entfernen.

Das Löschen eines Object Stores besteht darin, alle Datensätze aus dem Object Store zu entfernen und alle Datensätze in Indizes zu entfernen, die auf den Object Store verweisen. Um nur einige der Datensätze in einem Store zu entfernen, verwenden Sie {{domxref("IDBObjectStore.delete")}} unter Angabe eines Schlüssels oder {{domxref("IDBKeyRange")}}.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage `undefined`.

### Ausnahmen

- `ReadOnlyError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die mit dieser Operation verbundene Transaktion im Nur-Lese-[Modus](/de/docs/Web/API/IDBTransaction/mode) ist.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese/Schreib-Transaktion auf unserer Datenbank und löschen alle aktuellen Daten aus dem Object Store mit `clear()`. Für ein vollständiges funktionsfähiges Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Diese wird unten häufig verwendet
  db = DBOpenRequest.result;

  // Löschen Sie alle Daten aus dem Object Store
  clearData();
};

function clearData() {
  // Öffnen Sie eine Lese/Schreib-Datenbanktransaktion, bereit zum Löschen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Berichten Sie über den Erfolg des Abschlusses der Transaktion, wenn alles erledigt ist
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaktion abgeschlossen.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      `Transaktion aufgrund eines Fehlers nicht geöffnet: ${transaction.error}`;
  };

  // Erstellen Sie einen Object Store in der Transaktion
  const objectStore = transaction.objectStore("toDoList");

  // Erstellen Sie eine Anfrage, um alle Daten aus dem Object Store zu löschen
  const objectStoreRequest = objectStore.clear();

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursor: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
