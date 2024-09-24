---
title: "IDBRequest: result-Eigenschaft"
short-title: result
slug: Web/API/IDBRequest/result
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`result`**-Eigenschaft der Schnittstelle {{domxref("IDBRequest")}} gibt das Ergebnis der Anfrage zurück. Wenn die Anfrage nicht abgeschlossen ist, ist das Ergebnis nicht verfügbar und es wird eine `InvalidStateError`-Ausnahme ausgelöst.

## Wert

any

## Beispiele

Im folgenden Beispiel wird ein bestimmter Datensatz-Titel angefordert, `onsuccess` erhält den zugehörigen Datensatz aus dem {{domxref("IDBObjectStore")}} (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt anschließend den aktualisierten Datensatz wieder in den Objekt-Store. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Öffnen Sie wie gewohnt eine Transaktion
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Holen Sie sich das To-do-Listen-Objekt, das diesen Titel als seinen Titel hat
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Erfassen Sie das Datenobjekt, das als Ergebnis zurückgegeben wird
  const data = objectStoreTitleRequest.result;

  // Aktualisieren Sie den notified-Wert im Objekt auf "yes"
  data.notified = "yes";

  // Erstellen Sie eine weitere Anfrage, die das Element
  // wieder in die Datenbank einfügt
  const updateTitleRequest = objectStore.put(data);

  // Wenn diese neue Anfrage erfolgreich ist, führen Sie die displayData()
  // Funktion erneut aus, um die Anzeige zu aktualisieren
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
- Einstellen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
