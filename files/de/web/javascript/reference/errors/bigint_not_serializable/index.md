---
title: "TypeError: BigInt-Wert kann nicht in JSON serialisiert werden"
slug: Web/JavaScript/Reference/Errors/BigInt_not_serializable
l10n:
  sourceCommit: ee5df9771d3a0664120417c9e72e37693d362766
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "BigInt value can't be serialized in JSON" tritt auf, wenn ein {{jsxref("BigInt")}} in {{jsxref("JSON.stringify")}} ohne benutzerdefinierte Serialisierungsmethode verwendet wird.

## Meldung

```plain
TypeError: Do not know how to serialize a BigInt (V8-based)
TypeError: BigInt value can't be serialized in JSON (Firefox)
TypeError: JSON.stringify cannot serialize BigInt. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Sie versuchen, einen BigInt-Wert mit `JSON.stringify` zu serialisieren, was standardmäßig keine BigInt-Werte unterstützt. Manchmal geschieht die JSON-Serialisierung implizit in Bibliotheken im Rahmen der Datenserialisierung. Zum Beispiel erfordert das Senden von Daten an den Server, das Speichern in einem externen Speicher oder das Übertragen zwischen Threads eine Serialisierung, die oft mit JSON durchgeführt wird.

Es gibt mehrere Möglichkeiten, dies zu handhaben:

- Wenn Sie die Datenquelle ändern können, vermeiden Sie die Nutzung von BigInt-Werten und wandeln Sie sie zuerst in eine Zahl um (was zu einem Präzisionsverlust bei großen Zahlen führen kann).
- Wenn Sie den Serialisierungsprozess ändern können, übergeben Sie eine Ersetzungsfunktion an `JSON.stringify`, die BigInt-Werte in Zeichenfolgen oder Zahlen umwandelt.
- Sie können auch eine globale Methode `BigInt.prototype.toJSON` bereitstellen, die immer aufgerufen wird, wenn ein BigInt-Wert serialisiert wird.

Für weitere Informationen zu den verschiedenen Kompromissen siehe [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json).

## Beispiele

### Bereitstellung einer benutzerdefinierten Serialisierungsmethode

Standardmäßig sind BigInt-Werte nicht in JSON serialisierbar:

```js example-bad
const data = { a: 1n };
JSON.stringify(data);
// TypeError: BigInt value can't be serialized in JSON
```

Wenn Sie beabsichtigen, dass das JSON einen Zahlenwert enthält, hier sind einige Ansätze, die funktionieren:

- Konvertieren Sie den BigInt in eine Zahl, bevor Sie ihn serialisieren:

  ```js
  const data = { a: 1n };
  JSON.stringify({ ...data, a: Number(data.a) });
  // '{"a":1}'
  ```

- Bereitstellung einer Ersetzungsfunktion, die BigInt-Werte in Zahlen oder [rohe JSON-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON) umwandelt:

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

- Bereitstellung einer `BigInt.prototype.toJSON`-Methode, die immer aufgerufen wird, wenn ein BigInt-Wert serialisiert wird:

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
