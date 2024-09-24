---
title: "IDBRequest: source-Eigenschaft"
short-title: source
slug: Web/API/IDBRequest/source
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`source`** schreibgeschützte Eigenschaft des {{domxref("IDBRequest")}}-Interfaces gibt die Quelle der Anfrage zurück, wie zum Beispiel einen Index oder einen Objektspeicher. Wenn keine Quelle existiert (zum Beispiel beim Aufrufen von {{domxref("IDBFactory.open")}}), wird null zurückgegeben.

## Wert

Ein Objekt, das die Quelle der Anfrage darstellt, wie ein {{domxref("IDBIndex")}}, {{domxref("IDBObjectStore")}} oder {{domxref("IDBCursor")}}.

## Beispiele

Im folgenden Beispiel wird ein Datensatz mit einem bestimmten Titel angefordert, bei `onsuccess` wird der zugehörige Datensatz aus dem {{domxref("IDBObjectStore")}} geholt (verfügbar als `objectStoreTitleRequest.result`), eine Eigenschaft des Datensatzes wird aktualisiert und der aktualisierte Datensatz wird in einer weiteren Anfrage wieder in den Objektspeicher eingefügt. Die Quelle der zweiten Anfrage wird in der Entwicklerkonsole protokolliert. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Öffnen Sie eine Transaktion wie üblich
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Holen Sie das To-do-Listenobjekt, das diesen Titel als seinen Titel hat
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Greifen Sie auf das Datenobjekt zu, das als Ergebnis zurückgegeben wurde
  const data = objectStoreTitleRequest.result;

  // Aktualisieren Sie den benachrichtigten Wert im Objekt auf "yes"
  data.notified = "yes";

  // Erstellen Sie eine weitere Anfrage, die das Element wieder
  // in die Datenbank einfügt
  const updateTitleRequest = objectStore.put(data);

  // Protokollieren Sie die Quelle dieser Anfrage
  console.log(`The source of this request is ${updateTitleRequest.source}`);
  // Wenn diese neue Anfrage erfolgreich ist, führen Sie die Funktion displayData()
  // erneut aus, um die Anzeige zu aktualisieren
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
