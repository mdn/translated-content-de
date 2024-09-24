---
title: "IDBFactory: open()-Methode"
short-title: open()
slug: Web/API/IDBFactory/open
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`open()`**-Methode der {{domxref("IDBFactory")}}-Schnittstelle fordert das Öffnen einer [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection) an.

Die Methode gibt sofort ein {{domxref("IDBOpenDBRequest")}}-Objekt zurück und führt den Öffnungsvorgang asynchron aus. Wenn der Vorgang erfolgreich ist, wird ein `success`-Event auf dem zurückgegebenen Anforderungsobjekt ausgelöst, mit dessen `result`-Attribut auf das neue {{domxref("IDBDatabase")}}-Objekt für die Verbindung gesetzt.

Kann `upgradeneeded`-, `blocked`- oder `versionchange`-Events auslösen.

## Syntax

```js-nolint
open(name)
open(name, version)
```

### Parameter

- `name`
  - : Der Name der Datenbank.
- `version` {{optional_inline}}
  - : Optional. Die Version, mit der die Datenbank geöffnet werden soll. Wenn die Version nicht angegeben ist und die Datenbank existiert, wird eine Verbindung zur Datenbank geöffnet, ohne deren Version zu ändern. Wenn die Version nicht angegeben ist und die Datenbank nicht existiert, wird sie mit der Version `1` erstellt.

### Rückgabewert

Ein {{domxref("IDBOpenDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Anforderung ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anforderung ein {{domxref("IDBDatabase")}}-Objekt, das die Verbindung zur Datenbank darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert von `version` keine Zahl größer als null ist.

## Beispiele

Beispiel für den Aufruf von `open` mit dem `version`-Parameter der aktuellen Spezifikation:

```js
const request = window.indexedDB.open("toDoList", 4);
```

Im folgenden Code-Schnipsel machen wir eine Anfrage, um eine Datenbank zu öffnen und fügen Handler für die Erfolgs- und Fehlerfälle hinzu. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Lassen Sie uns Version 4 unserer Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// diese beiden Event-Handler reagieren auf den erfolgreichen Öffnungsversuch der Datenbank,
// oder wenn nicht
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der
  // Variable db. Diese wird später oft verwendet, um
  // Transaktionen zu öffnen und ähnliches.
  db = DBOpenRequest.result;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Speicherquoten und Kriterien für die Datenentfernung in Browsern](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
