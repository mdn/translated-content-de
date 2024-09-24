---
title: "IDBFactory: databases() Methode"
short-title: databases()
slug: Web/API/IDBFactory/databases
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`databases`** Methode der {{domxref("IDBFactory")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von Objekten erfüllt wird, die den Namen und die Version aller verfügbaren Datenbanken enthalten.

Dies ist eine Momentaufnahme der Datenbanken, die hauptsächlich dazu dient, es Webanwendungen zu ermöglichen, zu überprüfen, welche Datenbanken erstellt wurden – zum Beispiel, um Datenbanken zu bereinigen, die von früheren Versionen des Anwendungscodes erstellt wurden.

## Syntax

```js-nolint
databases()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, die eine Momentaufnahme der verfügbaren Datenbanken darstellen (oder mit den unten aufgeführten Fehlern/Ausnahmen abgelehnt wird).

Jedes Array-Objekt hat die folgenden Eigenschaften:

- `name`
  - : Ein Datenbankname.
- `version`
  - : Die Datenbankversion.

Beachten Sie, dass die Reihenfolge der zurückgegebenen Objekte nicht definiert ist.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}

  - : Ausgelöst, wenn die Methode von einem [intransparenten Ursprung](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802#42242802) aufgerufen wird oder der Benutzer den Speicher deaktiviert hat.

- `UnknownError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn die Menge der verfügbaren Datenbanken aus irgendeinem Grund nicht bestimmt werden kann.

## Beispiele

### Erstellen und Auflisten von Datenbanken

Dieses Beispiel erstellt/öffnet mehrere Datenbanken.
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

Zuerst definieren wir die Funktion, die verwendet wird, um die verfügbaren Datenbanken abzurufen und zu protokollieren.
Diese wartet auf das Versprechen, das von `indexedDB.databases()` zurückgegeben wird, und durchläuft dann das Array und listet die Werte jedes Elements auf:

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
Für jede Datenbank protokollieren wir, kurz bevor die Datenbank geöffnet wird.
Wir protokollieren auch bei erfolgreicher Initialisierung (oder Fehler) und anschließend auch die verfügbaren Datenbanken.

```js
// Erstellen Sie eine Datenbank mit dem Namen toDoList mit der Standardversion (1)
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

// Erstellen Sie die Datenbank "AnotherDb"
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

Das Ergebnis wird unten angezeigt. Beachten Sie, dass die Zeit, die benötigt wird, um die Datenbanken zu erhalten, und deren Reihenfolge nicht definiert sind.

{{EmbedLiveSample('Create and list databases', '100%', '280px')}}

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
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
