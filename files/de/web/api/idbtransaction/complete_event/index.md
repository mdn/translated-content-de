---
title: "IDBTransaction: complete-Event"
short-title: complete
slug: Web/API/IDBTransaction/complete_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("IndexedDB")}}

Das **`complete`**-Ereignis der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wird ausgelöst, wenn die Transaktion erfolgreich abgeschlossen wurde, entweder nachdem Sie explizit {{domxref("IDBTransaction.commit()")}} aufrufen oder wenn alle Anfragen erfolgreich bearbeitet wurden und nach der Verarbeitung ihrer Ergebnisse keine neuen Anfragen gestellt wurden. Weitere Informationen finden Sie unter {{domxref("IDBTransaction")}}.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("complete", (event) => {});
oncomplete = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Verwendung von {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}:

```js
// Öffnen der Datenbank
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("Fehler beim Erstellen der Datenbank");
  };

  // Erstellen eines objectStore für diese Datenbank
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren, welche Datenelemente der objectStore enthalten wird
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // Starten einer Lese-/Schreib-Datenbanktransaktion, bereit zum Hinzufügen der Daten
  const transaction = db.transaction(["toDoList"], "readwrite");

  // Listener für `complete` hinzufügen
  transaction.addEventListener("complete", (event) => {
    console.log("Transaktion wurde abgeschlossen");
  });

  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2019,
  };
  const objectStoreRequest = objectStore.add(newItem);

  objectStoreRequest.onsuccess = () => {
    // Einen zweiten Antrag im onsuccess-Handler stellen,
    // damit wir diesen Antrag nach dem Abschluss des ersten Antrags ausführen können,
    // während wir dieselbe Transaktion weiterverwenden
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = () => {
      // Keine weiteren Anfragen, die Transaktion wird nach Ausführen dieses Handlers abgeschlossen
      console.log(getAllRequest.result);
    };
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
