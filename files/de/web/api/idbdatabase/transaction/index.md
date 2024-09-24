---
title: "IDBDatabase: transaction()-Methode"
short-title: transaction()
slug: Web/API/IDBDatabase/transaction
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`transaction`**-Methode der {{domxref("IDBDatabase")}}-Schnittstelle gibt sofort ein Transaktionsobjekt ({{domxref("IDBTransaction")}}) zurück, das die {{domxref("IDBTransaction.objectStore")}}-Methode enthält, mit der Sie auf Ihren Objekt-Store zugreifen können.

## Syntax

```js-nolint
transaction(storeNames)
transaction(storeNames, mode)
transaction(storeNames, mode, options)
```

### Parameter

- `storeNames`

  - : Die Namen von Objekt-Stores, die im Geltungsbereich der neuen Transaktion liegen, deklariert als ein Array von Zeichenfolgen. Geben Sie nur die Objekt-Stores an, auf die Sie zugreifen müssen.
    Wenn Sie nur auf einen Objekt-Store zugreifen müssen, können Sie dessen Namen als Zeichenfolge angeben.
    Daher sind die folgenden Zeilen äquivalent:

    ```js
    db.transaction(["my-store-name"]);
    db.transaction("my-store-name");
    ```

    Wenn Sie auf alle Objekt-Stores in der Datenbank zugreifen müssen, können Sie die Eigenschaft {{domxref("IDBDatabase.objectStoreNames")}} verwenden:

    ```js
    const transaction = db.transaction(db.objectStoreNames);
    ```

    Ein leeres Array zu übergeben, wird eine Ausnahme auslösen.

- `mode` {{optional_inline}}

  - : Die Arten von Zugriffen, die in der Transaktion durchgeführt werden können.
    Transaktionen werden in einem von drei Modi geöffnet:

    - `readonly`
      - : Öffnen Sie eine Transaktion zum Lesen aus einem Objekt-Store. Dies ist der Standardmodus.
    - `readwrite`
      - : Öffnen Sie eine Transaktion sowohl zum Lesen als auch zum Schreiben in einem Objekt-Store.
        Dies sollte nur verwendet werden, wenn Sie in die Datenbank schreiben müssen.
    - `readwriteflush` {{non-standard_inline}} {{experimental_inline}}
      - : Erzwingen Sie, dass eine Transaktion vor der Zustellung des `complete`-Ereignisses auf die Festplatte geschrieben wird.
        Dies könnte verwendet werden, um kritische Daten zu speichern, die später nicht neu berechnet werden können.

- `options` {{optional_inline}}

  - : Objekt zur Definition zusätzlicher Optionen, einschließlich:

    - `durability`

      - : Einer der drei unten aufgeführten Zeichenfolgenwerte:

        - `"strict"`
          - : Der Benutzeragent kann die Transaktion erst dann als erfolgreich abgeschlossen betrachten, nachdem er überprüft hat, dass alle ausstehenden Änderungen erfolgreich in ein dauerhaftes Speichermedium geschrieben wurden.
            Dies wird empfohlen, wo das Risiko eines Datenverlusts den Einfluss seiner Verwendung auf Leistung und Energieverbrauch (im Vergleich zu `relaxed`) überwiegt.
        - `"relaxed"`
          - : Der Benutzeragent kann die Transaktion als erfolgreich abgeschlossen betrachten, sobald alle ausstehenden Änderungen an das Betriebssystem übermittelt wurden, ohne nachfolgende Überprüfung.
            Dies bietet eine bessere Leistung als `strict` und wird für flüchtige Daten wie Caches oder sich schnell ändernde Aufzeichnungen empfohlen.
        - `"default"`
          - : Der Benutzeragent sollte sein Standardverhalten zur Dauerhaftigkeit für den Speichereimer verwenden.
            Dies ist der Standard für Transaktionen, wenn nichts anderes angegeben ist.

### Rückgabewert

Ein {{domxref("IDBTransaction")}}-Objekt.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("IDBDatabase.close", "close()")}}-Methode zuvor auf dieser {{domxref("IDBDatabase")}}-Instanz aufgerufen wurde.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein in dem 'storeNames'-Parameter angegebenes Objekt-Store gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert für den `mode`-Parameter ungültig ist.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Funktion mit einer leeren Liste von Store-Namen aufgerufen wurde.

## Beispiele

In diesem Beispiel öffnen wir eine Datenbankverbindung und verwenden dann transaction(), um eine Transaktion in der Datenbank zu öffnen. Für ein vollständiges Beispiel siehe unsere [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Dies wird viel unten verwendet
  db = DBOpenRequest.result;

  // Führen Sie die displayData()-Funktion aus, um die Aufgabenliste mit
  // allen bereits im IDB befindlichen To-Do-List-Daten zu füllen
  displayData();
};

// Öffnen Sie eine Lese-/Schreib-Transaktion, bereit zum Hinzufügen der Daten
const transaction = db.transaction(["toDoList"], "readwrite");

// Berichten Sie über den Erfolg des Öffnens der Transaktion
transaction.oncomplete = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaktion abgeschlossen: Datenbankänderung abgeschlossen.";
};

transaction.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaktion konnte aufgrund eines Fehlers nicht geöffnet werden. Doppelte Elemente sind nicht erlaubt.";
};

// Sie würden dann weiter etwas mit dieser Datenbank machen
// über einen Objekt-Store
const objectStore = transaction.objectStore("toDoList");
// etc.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegung eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
