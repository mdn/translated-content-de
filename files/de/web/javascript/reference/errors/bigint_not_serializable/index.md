---
title: "TypeError: BigInt value kann in JSON nicht serialisiert werden"
slug: Web/JavaScript/Reference/Errors/BigInt_not_serializable
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "BigInt value kann in JSON nicht serialisiert werden" tritt auf, wenn ein {{jsxref("BigInt")}} in {{jsxref("JSON.stringify")}} ohne benutzerdefinierte Serialisierungsmethode vorgefunden wird.

## Nachricht

```plain
TypeError: Do not know how to serialize a BigInt (V8-based)
TypeError: BigInt value can't be serialized in JSON (Firefox)
TypeError: JSON.stringify cannot serialize BigInt. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Sie versuchen, einen BigInt-Wert mit `JSON.stringify` zu serialisieren, was standardmäßig keine BigInt-Werte unterstützt. Manchmal erfolgt die JSON-Serialisierung implizit in Bibliotheken als Teil der Datenserialisierung. Zum Beispiel erfordert das Senden von Daten an den Server, das Speichern in einem externen Speicher oder das Übertragen zwischen Threads alle eine Serialisierung, die oft mit JSON durchgeführt wird.

Es gibt mehrere Möglichkeiten, dies zu handhaben:

- Wenn Sie die Datenquelle ändern können, vermeiden Sie die Verwendung von BigInt-Werten und wandeln Sie sie in eine Zahl um (was möglicherweise bei großen Zahlen zu Präzisionsverlusten führt).
- Wenn Sie den Serialisierungsprozess ändern können, übergeben Sie eine Ersetzungsfunktion an `JSON.stringify`, die BigInt-Werte in Strings oder Zahlen umwandelt.
- Sie können auch global eine `BigInt.prototype.toJSON`-Methode bereitstellen, die aufgerufen wird, wann immer ein BigInt-Wert serialisiert wird.

Für weitere Informationen zu verschiedenen Abwägungen siehe [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json).

## Beispiele

### Bereitstellung einer benutzerdefinierten Serialisierungsmethode

Standardmäßig sind BigInt-Werte in JSON nicht serialisierbar:

```js example-bad
const data = { a: 1n };
JSON.stringify(data);
// TypeError: BigInt value can't be serialized in JSON
```

Angenommen, Sie beabsichtigen, dass das JSON einen Zahlenwert enthält, hier sind einige Ansätze, die funktionieren:

- Konvertieren Sie das BigInt in eine Zahl, bevor Sie es serialisieren:

  ```js
  const data = { a: 1n };
  JSON.stringify({ ...data, a: Number(data.a) });
  // '{"a":1}'
  ```

- Stellen Sie eine Ersetzungsfunktion bereit, die BigInt-Werte in Zahlen oder [rohe JSON-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON) konvertiert:

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

- Stellen Sie eine `BigInt.prototype.toJSON`-Methode bereit, die aufgerufen wird, wann immer ein BigInt-Wert serialisiert wird:

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
