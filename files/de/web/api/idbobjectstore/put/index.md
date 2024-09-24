---
title: "IDBObjectStore: put()-Methode"
short-title: put()
slug: Web/API/IDBObjectStore/put
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`put()`**-Methode der Schnittstelle {{domxref("IDBObjectStore")}} aktualisiert einen gegebenen Datensatz in einer Datenbank oder fügt einen neuen Datensatz ein, wenn der gegebene Eintrag nicht vorhanden ist.

Sie gibt ein {{domxref("IDBRequest")}}-Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des Wertes und speichert den geklonten Wert im Objekt-Store. Dies dient dazu, neue Datensätze hinzuzufügen oder bestehende Datensätze in einem Objekt-Store zu aktualisieren, wenn der Modus der Transaktion `readwrite` ist. Wenn der Datensatz erfolgreich gespeichert wird, wird ein Erfolgsevent auf dem zurückgegebenen Anfrageobjekt ausgelöst, wobei das `result` auf den Schlüssel für den gespeicherten Datensatz und die `transaction` auf die Transaktion gesetzt wird, in der dieser Objekt-Store geöffnet ist.

Die put-Methode ist eine _Update- oder Insert_-Methode.
Siehe die {{domxref("IDBObjectStore.add")}}-Methode für eine _nur-Insert_-Methode.

Beachten Sie, dass, wenn Sie einen {{domxref("IDBCursor","IDBCursor")}} auf den Datensatz haben, den Sie aktualisieren möchten, es vorzuziehen ist, ihn mit {{domxref("IDBCursor.update()")}} zu aktualisieren, anstatt `IDBObjectStore.put()` zu verwenden. Dies macht deutlich, dass ein bestehender Datensatz aktualisiert wird, anstatt einen neuen Datensatz einzufügen.

## Syntax

```js-nolint
put(item)
put(item, key)
```

### Parameter

- `item`
  - : Der Eintrag, den Sie aktualisieren (oder einfügen) möchten.
- `key` {{optional_inline}}
  - : Der Primärschlüssel des Datensatzes, den Sie aktualisieren möchten (z. B. von {{domxref("IDBCursor.primaryKey")}}).

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, bei dem nachfolgende Events im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage der Schlüssel für den neuen oder aktualisierten Datensatz.

### Ausnahmen

Diese Methode kann einen {{domxref("DOMException")}} der folgenden Typen auslösen:

- `ReadOnlyError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die mit dieser Operation verbundene Transaktion im <a href="/de/docs/Web/API/IDBTransaction#mode_constants">Read-Only-Modus</a> ist.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen zutrifft:
    - Der Objekt-Store verwendet [Inline-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#in-line_key) oder hat einen [Schlüsselgenerator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator), und ein `key`-Parameter wurde bereitgestellt.
    - Der Objekt-Store verwendet Out-of-Line-Schlüssel und hat keinen Schlüsselgenerator, und kein `key`-Parameter wurde bereitgestellt.
    - Der Objekt-Store verwendet Inline-Schlüssel, aber keinen Schlüsselgenerator, und der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) des Objekt-Stores ergibt keinen gültigen Schlüssel.
    - Der `key`-Parameter wurde bereitgestellt, enthält jedoch keinen gültigen Schlüssel.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("IDBObjectStore")}} gelöscht oder entfernt wurde.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klonalgorithmus geklont werden konnten.

## Beispiele

Das folgende Beispiel fragt einen bestimmten Titel eines Datensatzes an; wenn diese Anfrage erfolgreich ist, holt die `onsuccess`-Funktion den zugehörigen Datensatz aus dem {{domxref("IDBObjectStore")}} (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und gibt dann den aktualisierten Datensatz in einer anderen Anfrage mit `put()` zurück in den Objekt-Store. Ein vollständiges funktionierendes Beispiel finden Sie in unserer [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Live-Beispiel ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Öffnen Sie wie gewohnt eine Transaktion
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Holen Sie das To-Do-List-Objekt, das diesen Titel als Titel hat
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Holen Sie sich das als Ergebnis zurückgegebene Datenobjekt
  const data = objectStoreTitleRequest.result;

  // Aktualisieren Sie den benachrichtigten Wert im Objekt auf "yes"
  data.notified = "yes";

  // Erstellen Sie eine weitere Anfrage, die den Eintrag zurück in die Datenbank einfügt
  const updateTitleRequest = objectStore.put(data);

  // Protokollieren Sie die Transaktion, die diese Anfrage initiiert hat
  console.log(
    `Die Transaktion, die diese Anfrage initiiert hat, ist ${updateTitleRequest.transaction}`,
  );

  // Wenn diese neue Anfrage erfolgreich ist, führen Sie die Funktion displayData() erneut aus, um die Anzeige zu aktualisieren
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
- Verwalten von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwenden von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
