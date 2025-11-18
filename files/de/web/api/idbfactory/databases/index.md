---
title: "IDBFactory: databases()-Methode"
short-title: databases()
slug: Web/API/IDBFactory/databases
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`databases`**-Methode der [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von Objekten erfüllt wird, die den Namen und die Version aller verfügbaren Datenbanken enthalten.

Dies ist ein Schnappschuss der Datenbanken, der hauptsächlich dazu gedacht ist, Webanwendungen zu ermöglichen, zu überprüfen, welche Datenbanken erstellt wurden — um zum Beispiel Datenbanken zu bereinigen, die von früheren Versionen des Anwendungscodes erstellt wurden.

## Syntax

```js-nolint
databases()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, das einen Schnappschuss der verfügbaren Datenbanken darstellt (oder mit den unten aufgeführten Fehlern/Ausnahmen abgelehnt wird).

Jedes Objekt im Array hat die folgenden Eigenschaften:

- `name`
  - : Ein Datenbankname.
- `version`
  - : Die Datenbankversion.

Beachten Sie, dass die Reihenfolge der zurückgegebenen Objekte nicht definiert ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode von einem [undurchsichtigen Ursprung](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802#42242802) aufgerufen wird oder der Benutzer den Speicher deaktiviert hat.

- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Menge der verfügbaren Datenbanken aus irgendeinem Grund nicht bestimmt werden kann.

## Beispiele

### Datenbanken erstellen und auflisten

Dieses Beispiel erstellt/öffnet eine Anzahl von Datenbanken.
Bei erfolgreicher Initialisierung jeder Datenbank werden alle verfügbaren Datenbanken aufgelistet.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 240px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Zuerst definieren wir die Funktion, die verwendet wird, um die verfügbaren Datenbanken zu erhalten und zu protokollieren.
Diese wartet auf das Promise, das von `indexedDB.databases()` zurückgegeben wird, und iteriert dann das Array, um die Werte jedes Elements aufzulisten:

```js
async function getDb() {
  const databases = await indexedDB.databases();
  log("List databases:");
  databases.forEach((element) => {
    log(`name: ${element.name}, version: ${element.version}`);
  });
}
```

Um zu demonstrieren, wie die obige Funktion verwendet wird, erstellen wir unten zwei Datenbanken.
Für jede Datenbank protokollieren wir, unmittelbar bevor die Datenbank geöffnet wird.
Wir protokollieren auch bei erfolgreicher Initialisierung (oder Fehler) und anschließend auch die verfügbaren Datenbanken.

```js
// Create a database named toDoList with default version (1)
const dbName1 = "toDoList";
log(`Opening: ${dbName1}`);
let DBOpenRequest = window.indexedDB.open(dbName1);

DBOpenRequest.addEventListener("error", (event) => {
  log(`Error opening: ${dbName1}`);
  getDb();
});

DBOpenRequest.addEventListener("success", (event) => {
  log(`Initialized: ${dbName1}`);
  getDb();
});

// Create database "AnotherDb"
const dbName2 = "AnotherDb";
log(`Opening ${dbName2}`);
DBOpenRequest = window.indexedDB.open(dbName2, 2);

DBOpenRequest.addEventListener("error", (event) => {
  log(`Error opening: ${dbName2}`);
  getDb();
});

DBOpenRequest.addEventListener("success", (event) => {
  log(`Initialized: ${dbName2}`);
  getDb();
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Beachten Sie, dass die Zeit, die zum Abrufen der Datenbanken benötigt wird, und ihre Reihenfolge nicht definiert sind.

{{EmbedLiveSample('Create and list databases', '100%', '280px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Änderungen an Ihren Daten vornehmen: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
