---
title: Error.prototype.name
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`name`** Daten-Eigenschaft von `Error.prototype` wird von allen {{jsxref("Error")}}-Instanzen geteilt. Sie repräsentiert den Namen für den Fehler-Typ. Für `Error.prototype.name` ist der anfängliche Wert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} stellen ihre eigenen `name`-Eigenschaften bereit.

## Wert

Ein String. Für `Error.prototype.name` ist der anfängliche Wert `"Error"`.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Standardmäßig erhalten {{jsxref("Error")}}-Instanzen den Namen "Error". Die `name`-Eigenschaft wird neben der {{jsxref("Error/message", "message")}}-Eigenschaft von der {{jsxref("Error.prototype.toString()")}}-Methode verwendet, um eine String-Darstellung des Fehlers zu erstellen.

## Beispiele

### Werfen eines benutzerdefinierten Fehlers

```js
const e = new Error("Malformed input"); // e.name is 'Error'

e.name = "ParseError";
throw e;
// e.toString() would return 'ParseError: Malformed input'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
