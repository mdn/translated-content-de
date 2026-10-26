---
title: JSON.isRawJSON()
short-title: isRawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`JSON.isRawJSON()`** prüft, ob ein Wert ein von {{jsxref("JSON.rawJSON()")}} zurückgegebenes Objekt ist.

## Syntax

```js-nolint
JSON.isRawJSON(value)
```

### Parameter

- `value`
  - : Der zu prüfende Wert.

### Rückgabewert

`true`, wenn `value` durch {{jsxref("JSON.rawJSON()")}} erstellt wurde; andernfalls `false`.

## Beschreibung

„Raw JSON“-Objekte werden bei der Serialisierung in JSON so behandelt, als wären sie bereits ein Teil von JSON. Aufgrund der Funktionsweise von {{jsxref("JSON.rawJSON()")}} ist außerdem gewährleistet, dass das Raw JSON syntaktisch gültiges JSON ist. Weitere Informationen zur Struktur und zum Verhalten von Raw JSON-Objekten finden Sie unter {{jsxref("JSON.rawJSON()")}}. Diese Methode ermöglicht es anderen Serialisierungsbibliotheken, für Raw JSON-Objekte ein ähnliches Verhalten wie `JSON.stringify()` zu implementieren.

## Beispiele

### JSON.isRawJSON() verwenden

Das folgende Beispiel zeigt, wie Sie mit `JSON.isRawJSON()` prüfen, ob ein Objekt von `JSON.rawJSON()` zurückgegeben wurde. Es implementiert einen benutzerdefinierten Serializer, der Daten in ein YAML-ähnliches Format serialisiert.

```js
function mySerializer(value, indent = "") {
  if (typeof value !== "object" || value === null) {
    return JSON.stringify(value);
  }
  if (JSON.isRawJSON(value)) {
    return value.rawJSON;
  }
  const subIndent = `${indent}  `;
  if (Array.isArray(value)) {
    return `- ${value.map((v) => mySerializer(v, subIndent)).join(`\n${indent}- `)}`;
  }
  return Object.entries(value)
    .map(([key, value]) => {
      const subValue = mySerializer(value, subIndent);
      if (subValue.includes("\n")) {
        return `${key}:\n${subIndent}${subValue}`;
      }
      return `${key}: ${subValue}`;
    })
    .join(`\n${indent}`);
}

console.log(
  mySerializer({
    name: "Josh",
    userId: JSON.rawJSON("12345678901234567890"),
    friends: [
      { name: "Alice", userId: JSON.rawJSON("9876543210987654321") },
      { name: "Bob", userId: JSON.rawJSON("56789012345678901234") },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567890
// friends:
//   - name: "Alice"
//     userId: 9876543210987654321
//   - name: "Bob"
//     userId: 56789012345678901234
```

Wenn die `userId`-Werte im obigen Beispiel nicht mit `JSON.rawJSON()` erstellt, sondern direkt als Zahlen übergeben würden, käme es aufgrund der begrenzten Genauigkeit von JavaScript-Gleitkommazahlen bereits zu einem Genauigkeitsverlust.

```js
console.log(
  mySerializer({
    name: "Josh",
    userId: 12345678901234567890,
    friends: [
      { name: "Alice", userId: 9876543210987654321 },
      { name: "Bob", userId: 56789012345678901234 },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567000
// friends:
//   - name: "Alice"
//     userId: 9876543210987655000
//   - name: "Bob"
//     userId: 56789012345678900000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `JSON.isRawJSON` in `core-js`](https://core-js.io/docs/features/ecmascript/json)
- {{jsxref("JSON")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
