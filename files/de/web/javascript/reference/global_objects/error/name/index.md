---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{JSRef}}

Die **`name`** Daten-Eigenschaft von `Error.prototype` wird von allen Instanzen von {{jsxref("Error")}} geteilt. Sie repräsentiert den Namen für den Fehlertyp. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Subklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name` Eigenschaften an.

## Wert

Ein String. Für `Error.prototype.name` ist der Anfangswert `"Error"`.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Standardmäßig erhalten {{jsxref("Error")}} Instanzen den Namen "Error". Die `name` Eigenschaft wird zusammen mit der {{jsxref("Error/message", "message")}} Eigenschaft von der {{jsxref("Error.prototype.toString()")}} Methode verwendet, um eine Zeichenkettenrepräsentation des Fehlers zu erstellen.

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
