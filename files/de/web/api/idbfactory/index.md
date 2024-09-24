---
title: IDBFactory
slug: Web/API/IDBFactory
l10n:
  sourceCommit: dbd4ba01220a5031d3a26a3ac1490d3269210124
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBFactory`** Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) ermöglicht Anwendungen, asynchron auf die indizierten Datenbanken zuzugreifen. Das Objekt, das das Interface implementiert, ist `window.indexedDB`. Sie öffnen – das heißt, erstellen und greifen auf – und löschen eine Datenbank mit diesem Objekt und nicht direkt mit `IDBFactory`.

## Instanzmethoden

- {{domxref("IDBFactory.open()")}}
  - : Fordert das Öffnen einer [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection) an.
- {{domxref("IDBFactory.deleteDatabase()")}}
  - : Fordert das Löschen einer Datenbank an.
- {{domxref("IDBFactory.cmp()")}}
  - : Vergleicht zwei Schlüssel und gibt ein Ergebnis zurück, das anzeigt, welcher größer ist.
- {{domxref("IDBFactory.databases()")}}
  - : Gibt ein Promise zurück, das mit einem Array aller verfügbaren Datenbanken inklusive ihrer Namen und Versionen erfüllt wird.

## Beispiel

Im folgenden Codebeispiel wird eine Anfrage zum Öffnen einer Datenbank gestellt, einschließlich Handlern für die Erfolgs- und Fehlerfälle. Ein vollständiges funktionierendes Beispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Lassen Sie uns Version 4 unserer Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Diese beiden Ereignishandler reagieren darauf, ob die Datenbank erfolgreich geöffnet wurde oder nicht
DBOpenRequest.onerror = (event) => {
  console.error("Fehler beim Laden der Datenbank.");
};

DBOpenRequest.onsuccess = (event) => {
  console.info("Datenbank initialisiert.");

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable. Diese wird später viel verwendet, um Transaktionen zu öffnen und dergleichen.
  db = DBOpenRequest.result;
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
- Einen Bereich von Schlüsseln festlegen: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
