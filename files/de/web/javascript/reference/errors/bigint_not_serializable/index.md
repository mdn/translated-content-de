---
title: "TypeError: BigInt-Wert kann in JSON nicht serialisiert werden"
slug: Web/JavaScript/Reference/Errors/BigInt_not_serializable
l10n:
  sourceCommit: ee5df9771d3a0664120417c9e72e37693d362766
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "BigInt value can't be serialized in JSON" tritt auf, wenn ein {{jsxref("BigInt")}} in {{jsxref("JSON.stringify")}} verwendet wird, ohne dass eine benutzerdefinierte Serialisierungsmethode bereitgestellt wird.

## Nachricht

```plain
TypeError: Do not know how to serialize a BigInt (V8-based)
TypeError: BigInt value can't be serialized in JSON (Firefox)
TypeError: JSON.stringify cannot serialize BigInt. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schief gelaufen?

Sie versuchen, einen BigInt-Wert mit `JSON.stringify` zu serialisieren, was BigInt-Werte standardmäßig nicht unterstützt. Manchmal erfolgt die JSON-Serialisierung implizit in Bibliotheken als Teil der Datenserialisierung. Beispielsweise erfordert das Senden von Daten an den Server, das Speichern in externem Speicher oder das Übertragen zwischen Threads eine Serialisierung, die oft mit JSON durchgeführt wird.

Es gibt mehrere Möglichkeiten, dies zu handhaben:

- Wenn Sie die Datenquelle ändern können, vermeiden Sie die Verwendung von BigInt-Werten und konvertieren Sie diese zuerst in eine Zahl (was möglicherweise die Genauigkeit für große Zahlen verliert).
- Wenn Sie den Stringifizierungsprozess ändern können, übergeben Sie eine Ersetzungsfunktion an `JSON.stringify`, die BigInt-Werte in Zeichenfolgen oder Zahlen umwandelt.
- Sie können auch global eine `BigInt.prototype.toJSON`-Methode bereitstellen, die immer dann aufgerufen wird, wenn ein BigInt-Wert stringifiziert wird.

Für weitere Informationen zu den verschiedenen Kompromissen, siehe [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json).

## Beispiele

### Bereitstellung einer benutzerdefinierten Serialisierungsmethode

Standardmäßig sind BigInt-Werte nicht in JSON serialisierbar:

```js example-bad
const data = { a: 1n };
JSON.stringify(data);
// TypeError: BigInt value can't be serialized in JSON
```

Angenommen, Sie möchten, dass das JSON einen Zahlenwert enthält, hier sind einige Ansätze, die funktionieren:

- Konvertieren Sie den BigInt in eine Zahl, bevor Sie ihn stringifizieren:

  ```js
  const data = { a: 1n };
  JSON.stringify({ ...data, a: Number(data.a) });
  // '{"a":1}'
  ```

- Stellen Sie eine Ersetzungsfunktion bereit, die BigInt-Werte in Zahlen oder [rohe JSON-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON) umwandelt:

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

- Stellen Sie eine `BigInt.prototype.toJSON`-Methode bereit, die immer dann aufgerufen wird, wenn ein BigInt-Wert stringifiziert wird:

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
