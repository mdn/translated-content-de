---
title: "IDBRequest: transaction-Eigenschaft"
short-title: transaction
slug: Web/API/IDBRequest/transaction
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`transaction`** Eigenschaft von der IDBRequest-Schnittstelle, die nur lesbar ist, gibt die Transaktion für die Anfrage zurück, das heißt, die Transaktion, innerhalb derer die Anfrage gestellt wird.

Diese Eigenschaft kann `null` sein für Anfragen, die nicht innerhalb von Transaktionen gestellt werden, wie zum Beispiel Anfragen, die von {{domxref("IDBFactory.open")}} zurückgegeben werden — in diesem Fall verbinden Sie sich nur mit einer Datenbank, daher gibt es keine Transaktion zurückzugeben. Wenn beim Öffnen einer Datenbank ein Versions-Upgrade erforderlich ist, wird während des {{domxref("IDBOpenDBRequest.upgradeneeded_event", "upgradeneeded")}}-Ereignishandlers die **`transaction`** Eigenschaft eine {{domxref("IDBTransaction")}} mit {{domxref("IDBTransaction.mode", "mode")}} gleich `"versionchange"` sein und kann verwendet werden, um auf bestehende Objektstores und Indizes zuzugreifen oder das Upgrade abzubrechen. Nach dem Upgrade wird die **`transaction`** Eigenschaft wieder `null` sein.

## Wert

Eine {{domxref("IDBTransaction")}}.

## Beispiele

Im folgenden Beispiel wird ein bestimmter Datensatz-Titel angefordert, `onsuccess` erhält den zugehörigen Datensatz aus dem {{domxref("IDBObjectStore")}} (bereitgestellt als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und fügt dann den aktualisierten Datensatz in einer anderen Anfrage zurück in den Objektstore ein. Die Quelle der Anfragen wird in die Entwicklerkonsole geloggt – beide stammen aus derselben Transaktion. Ein vollständiges Arbeitsbeispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Öffnen Sie wie gewohnt eine Transaktion
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Holen Sie das To-do-List-Objekt, das diesen Titel als Titel hat
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Abrufen des als Ergebnis zurückgegebenen Datenobjekts
  const data = objectStoreTitleRequest.result;

  // Aktualisieren Sie den Wert im Objekt auf "yes"
  data.notified = "yes";

  // Erstellen Sie eine weitere Anfrage, die das Element zurück
  // in die Datenbank einfügt
  const updateTitleRequest = objectStore.put(data);

  // Loggen Sie die Transaktion, die diese Anfrage ausgelöst hat
  console.log(
    `Die Transaktion, die diese Anfrage ausgelöst hat, ist ${updateTitleRequest.transaction}`,
  );

  // Wenn diese neue Anfrage erfolgreich ist, führen Sie die displayData()
  // Funktion erneut aus, um die Anzeige zu aktualisieren
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};
```

Dieses Beispiel zeigt, wie die **`transaction`** Eigenschaft während eines Versions-Upgrades verwendet werden kann, um auf bestehende Objektstores zuzugreifen:

```js
const openRequest = indexedDB.open("db", 2);
console.log(openRequest.transaction); // Wird "null" protokollieren.

openRequest.onupgradeneeded = (event) => {
  console.log(openRequest.transaction.mode); // Wird "versionchange" protokollieren.
  const db = openRequest.result;
  if (event.oldVersion < 1) {
    // Neue Datenbank, erstellen Sie den "books"-Objektstore.
    db.createObjectStore("books");
  }
  if (event.oldVersion < 2) {
    // Upgrade von Version 1 der Datenbank: Index auf "title" zum "books"-Store hinzufügen.
    const bookStore = openRequest.transaction.objectStore("books");
    bookStore.createIndex("by_title", "title");
  }
};

openRequest.onsuccess = () => {
  console.log(openRequest.transaction); // Wird "null" protokollieren.
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
- Festlegung eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursor: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
