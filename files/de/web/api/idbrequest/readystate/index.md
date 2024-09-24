---
title: "IDBRequest: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/IDBRequest/readyState
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`readyState`**-Eigenschaft der
{{domxref("IDBRequest")}}-Schnittstelle gibt den Status der Anfrage zurück.

Jede Anfrage beginnt im `pending` Status. Der Status wechselt zu
`done`, wenn die Anfrage erfolgreich abgeschlossen ist oder ein Fehler
auftritt.

## Wert

Einer der folgenden Zeichenfolgen:

- `pending`
  - : Wird zurückgegeben, wenn die Anfrage noch läuft.
- `done`
  - : Wird zurückgegeben, wenn die Anfrage bereits abgeschlossen wurde.

## Beispiele

Im folgenden Beispiel wird ein bestimmter Datensatz-Titel angefordert, `onsuccess` erhält den
zugeordneten Datensatz aus dem {{domxref("IDBObjectStore")}} (verfügbar als `objectStoreTitleRequest.result`), aktualisiert
eine Eigenschaft des Datensatzes und legt dann den aktualisierten Datensatz mit einer anderen Anfrage wieder in den Object Store zurück. Der `readyState` der zweiten Anfrage wird in der Entwicklungskonsole protokolliert. Für ein vollständiges Arbeitsbeispiel siehe unsere
[To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App
([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Öffnen Sie wie üblich eine Transaktion
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Holen Sie sich das To-Do-Listen-Objekt, das diesen Titel als Titel hat
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Holt das zurückgegebene Datenobjekt als Ergebnis
  const data = objectStoreTitleRequest.result;

  // Aktualisieren Sie den notified-Wert im Objekt auf "yes"
  data.notified = "yes";

  // Erstellen Sie eine weitere Anfrage, die das Element wieder
  // in die Datenbank einfügt
  const updateTitleRequest = objectStore.put(data);

  // Protokollieren Sie den readyState dieser Anfrage
  console.log(
    `The readyState of this request is ${updateTitleRequest.readyState}`,
  );

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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
