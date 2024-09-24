---
title: "TypeError: BigInt-Wert kann nicht in JSON serialisiert werden"
slug: Web/JavaScript/Reference/Errors/BigInt_not_serializable
l10n:
  sourceCommit: ee5df9771d3a0664120417c9e72e37693d362766
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "BigInt value can't be serialized in JSON" tritt auf, wenn ein {{jsxref("BigInt")}} in {{jsxref("JSON.stringify")}} ohne eine benutzerdefinierte Serialisierungsmethode angetroffen wird.

## Meldung

```plain
TypeError: Do not know how to serialize a BigInt (V8-based)
TypeError: BigInt value can't be serialized in JSON (Firefox)
TypeError: JSON.stringify cannot serialize BigInt. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Sie versuchen, einen BigInt-Wert mit `JSON.stringify` zu serialisieren, was standardmäßig BigInt-Werte nicht unterstützt. Manchmal erfolgt die JSON-Serialisierung implizit in Bibliotheken im Rahmen der Datenserialisierung. Beispielsweise erfordert das Senden von Daten an den Server, das Speichern in einem externen Speicher oder der Transfer zwischen Threads eine Serialisierung, die oft mittels JSON erfolgt.

Es gibt mehrere Möglichkeiten, dies zu handhaben:

- Wenn Sie die Datenquelle ändern können, vermeiden Sie die Verwendung von BigInt-Werten und wandeln Sie diese zuerst in eine Zahl um (was möglicherweise die Genauigkeit bei großen Zahlen verliert).
- Wenn Sie den Serialisierungsprozess anpassen können, übergeben Sie eine Ersetzungsfunktion an `JSON.stringify`, die BigInt-Werte in Zeichenfolgen oder Zahlen umwandelt.
- Sie können auch global eine `BigInt.prototype.toJSON`-Methode bereitstellen, die immer dann aufgerufen wird, wenn ein BigInt-Wert serialisiert wird.

Weitere Informationen zu den verschiedenen Kompromissen finden Sie in der [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json).

## Beispiele

### Bereitstellen einer benutzerdefinierten Serialisierungsmethode

Standardmäßig sind BigInt-Werte in JSON nicht serialisierbar:

```js example-bad
const data = { a: 1n };
JSON.stringify(data);
// TypeError: BigInt value can't be serialized in JSON
```

Angenommen, Sie möchten, dass das JSON einen Zahlenwert enthält, hier einige Ansätze, die funktionieren:

- Wandeln Sie den BigInt vor der Serialisierung in eine Zahl um:

  ```js
  const data = { a: 1n };
  JSON.stringify({ ...data, a: Number(data.a) });
  // '{"a":1}'
  ```

- Stellen Sie eine Ersetzungsfunktion bereit, die BigInt-Werte in Zahlen oder [roh JSON-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON) umwandelt:

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

- Stellen Sie eine `BigInt.prototype.toJSON`-Methode bereit, die immer dann aufgerufen wird, wenn ein BigInt-Wert serialisiert wird:

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
