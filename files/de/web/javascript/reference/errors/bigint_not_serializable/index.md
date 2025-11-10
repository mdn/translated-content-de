---
title: "TypeError: BigInt-Wert kann nicht in JSON serialisiert werden"
slug: Web/JavaScript/Reference/Errors/BigInt_not_serializable
l10n:
  sourceCommit: 4026c18a22b6ceb24e69adf4851de13af8fab92d
---

Die JavaScript-Ausnahme "BigInt-Wert kann nicht in JSON serialisiert werden" tritt auf, wenn ein {{jsxref("BigInt")}} in {{jsxref("JSON.stringify")}} ohne eine benutzerdefinierte Serialisierungsmethode auftritt.

## Nachricht

```plain
TypeError: Do not know how to serialize a BigInt (V8-based)
TypeError: BigInt value can't be serialized in JSON (Firefox)
TypeError: JSON.stringify cannot serialize BigInt. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Sie versuchen, einen BigInt-Wert mit `JSON.stringify` zu serialisieren, was standardmäßig keine BigInt-Werte unterstützt. Manchmal erfolgt die JSON-Stringifizierung implizit in Bibliotheken als Teil der Datenserialisierung. Beispielsweise erfordert das Senden von Daten an den Server, das Speichern in externen Speichern oder das Übertragen zwischen Threads eine Serialisierung, die oft mit JSON durchgeführt wird.

Es gibt mehrere Möglichkeiten, damit umzugehen:

- Wenn Sie die Datenquelle ändern können, vermeiden Sie die Verwendung von BigInt-Werten und wandeln Sie diese zuerst in eine Zahl um (was für große Zahlen Präzisionsverluste bedeuten kann).
- Wenn Sie den Stringifizierungsprozess ändern können, übergeben Sie eine Ersetzungsfunktion an `JSON.stringify`, die BigInt-Werte in Zeichenfolgen oder Zahlen umwandelt.
- Sie können auch global eine `BigInt.prototype.toJSON`-Methode bereitstellen, die aufgerufen wird, wann immer ein BigInt-Wert stringifiziert wird.

Für weitere Informationen zu verschiedenen Kompromissen siehe [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json).

## Beispiele

### Bereitstellung einer benutzerdefinierten Serialisierungsmethode

Standardmäßig sind BigInt-Werte nicht in JSON serialisierbar:

```js example-bad
const data = { a: 1n };
JSON.stringify(data);
// TypeError: BigInt value can't be serialized in JSON
```

Angenommen, Sie beabsichtigen, dass das JSON einen Zahlenwert enthält, hier sind einige Ansätze, die funktionieren:

- Wandeln Sie den BigInt vor der Stringifizierung in eine Zahl um:

  ```js
  const data = { a: 1n };
  JSON.stringify({ ...data, a: Number(data.a) });
  // '{"a":1}'
  ```

- Stellen Sie eine Ersetzungsfunktion bereit, die BigInt-Werte in Zahlen oder [raw JSON objects](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON) umwandelt:

  ```js
  const data = { a: 1n };
  JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? Number(value) : value,
  );
  // '{"a":1}'
  ```

  ```js
  const data = { a: 1n };
  JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? JSON.rawJSON(value.toString()) : value,
  );
  // '{"a":1}'
  ```

- Stellen Sie eine `BigInt.prototype.toJSON`-Methode bereit, die aufgerufen wird, wann immer ein BigInt-Wert stringifiziert wird:

  ```js
  BigInt.prototype.toJSON = function () {
    return Number(this);
  };
  const data = { a: 1n };
  JSON.stringify(data);
  // '{"a":1}'
  ```

  ```js
  BigInt.prototype.toJSON = function () {
    return JSON.rawJSON(this.toString());
  };
  const data = { a: 1n };
  JSON.stringify(data);
  // '{"a":1}'
  ```

## Siehe auch

- {{jsxref("BigInt")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
