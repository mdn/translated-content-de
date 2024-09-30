---
title: "IDBFactory: databases()-Methode"
short-title: databases()
slug: Web/API/IDBFactory/databases
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`databases`**-Methode des [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von Objekten erfüllt wird, die den Namen und die Version aller verfügbaren Datenbanken enthalten.

Dies ist ein Schnappschuss der Datenbanken, der hauptsächlich dazu gedacht ist, Webanwendungen zu ermöglichen, zu prüfen, welche Datenbanken erstellt wurden – um beispielsweise Datenbanken, die von früheren Versionen des Anwendungscodes erstellt wurden, zu bereinigen.

## Syntax

```js-nolint
databases()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, die einen Schnappschuss der verfügbaren Datenbanken darstellen (oder mit den unten aufgeführten Fehlern/Ausnahmen abgelehnt wird).

Jedes Arrayobjekt hat die folgenden Eigenschaften:

- `name`
  - : Ein Datenbankname.
- `version`
  - : Die Datenbankversion.

Beachten Sie, dass die Reihenfolge der zurückgegebenen Objekte nicht definiert ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die Methode von einem [intransparenten Ursprung](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802#42242802) aufgerufen wird oder der Benutzer den Speicher deaktiviert hat.

- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn aus irgendeinem Grund die Menge der verfügbaren Datenbanken nicht bestimmt werden kann.

## Beispiele

### Erstellen und Auflisten von Datenbanken

Dieses Beispiel erstellt/öffnet mehrere Datenbanken.
Bei erfolgreicher Initialisierung jeder Datenbank listet es alle verfügbaren Datenbanken auf.

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
Diese wartet auf das von `indexedDB.databases()` zurückgegebene Promise und iteriert dann das Array und listet die Werte jedes Elements auf:

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
Für jede Datenbank protokollieren wir kurz bevor die Datenbank geöffnet wird.
Wir protokollieren auch bei erfolgreicher Initialisierung (oder Fehler) und protokollieren dann auch die verfügbaren Datenbanken.

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

Das Ergebnis wird unten gezeigt. Beachten Sie, dass die Zeit, die benötigt wird, um die Datenbanken zu erhalten, und deren Reihenfolge nicht definiert sind.

{{EmbedLiveSample('Create and list databases', '100%', '280px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
