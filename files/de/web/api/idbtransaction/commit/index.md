---
title: "IDBTransaction: commit()-Methode"
short-title: commit()
slug: Web/API/IDBTransaction/commit
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`commit()`**-Methode der {{domxref("IDBTransaction")}}-Schnittstelle gibt die Transaktion frei, wenn sie auf eine aktive Transaktion angewendet wird.

Beachten Sie, dass `commit()` normalerweise nicht _aufgerufen werden muss_ — eine Transaktion wird automatisch abgeschlossen, wenn alle ausstehenden Anfragen erfüllt wurden und keine neuen Anfragen gestellt wurden. `commit()` kann verwendet werden, um den Abschlusspunkt zu initiieren, ohne auf Ereignisse von ausstehenden Anfragen zu warten.

Wenn sie auf eine Transaktion angewendet wird, die nicht aktiv ist, wirft sie einen `InvalidStateError` {{domxref("DOMException")}}.

## Syntax

```js-nolint
commit()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Transaktionsstatus nicht aktiv ist.

## Beispiele

```js
const note = document.getElementById("notifications");

// Eine Lese-/Schreib-DB-Transaktion öffnen, bereit zum Hinzufügen der Daten
const transaction = db.transaction(["myDB"], "readwrite");

// Erfolg beim Öffnen der Transaktion melden
transaction.oncomplete = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaktion abgeschlossen: Datenbankänderung beendet.";
};

transaction.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaktion aufgrund eines Fehlers nicht geöffnet. Doppelte Einträge sind nicht erlaubt.";
};

// Einen Objektspeicher in der Transaktion erstellen
const objectStore = transaction.objectStore("myObjStore");

// Unser newItem-Objekt zum Objektspeicher hinzufügen
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  // Erfolg der Anfrage melden (das bedeutet nicht, dass das Element
  // erfolgreich in der DB gespeichert wurde - dafür benötigen Sie transaction.onsuccess)
  note.appendChild(document.createElement("li")).textContent =
    "Anfrage erfolgreich.";
};

// Erzwingen, dass die Änderungen schnellstmöglich in die Datenbank übernommen werden
transaction.commit();
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
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
