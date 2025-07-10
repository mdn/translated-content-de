---
title: JSON.isRawJSON()
short-title: isRawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`JSON.isRawJSON()`** statische Methode prüft, ob ein Wert ein von {{jsxref("JSON.rawJSON()")}} zurückgegebenes Objekt ist.

## Syntax

```js-nolint
JSON.isRawJSON(value)
```

### Parameter

- `value`
  - : Der Wert, der getestet werden soll.

### Rückgabewert

`true`, wenn `value` durch {{jsxref("JSON.rawJSON()")}} erstellt wurde; andernfalls `false`.

## Beschreibung

„Roh-JSON“-Objekte werden bei der Serialisierung nach JSON so behandelt, als ob sie bereits ein Stück JSON sind. Darüber hinaus ist das rohe JSON aufgrund der Funktionsweise von {{jsxref("JSON.rawJSON()")}} garantiert syntaktisch gültiges JSON. Weitere Informationen zur Struktur und zum Verhalten von Roh-JSON-Objekten finden Sie unter {{jsxref("JSON.rawJSON()")}}. Diese Methode existiert, um anderen Serialisierungsbibliotheken zu ermöglichen, ein ähnliches Verhalten wie `JSON.stringify()` für Roh-JSON-Objekte zu implementieren.

## Beispiele

### Verwendung von JSON.isRawJSON()

Das folgende Beispiel zeigt, wie `JSON.isRawJSON()` verwendet wird, um zu testen, ob ein Objekt von `JSON.rawJSON()` zurückgegeben wurde. Es implementiert einen benutzerdefinierten Serializer, der Daten in ein YAML-ähnliches Format serialisiert.

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

Wenn in dem obigen Beispiel die `userId`-Werte nicht durch `JSON.rawJSON()` erstellt, sondern direkt als Zahlen übergeben würden, dann kommt es aufgrund von JS-Fließkomma-Präzisionsbeschränkungen zu einem Präzisionsverlust.

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

- [Polyfill von `JSON.isRawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
