---
title: Error.prototype.name
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`name`** Daten-Eigenschaft von `Error.prototype` wird von allen {{jsxref("Error")}} Instanzen geteilt. Sie repräsentiert den Namen für den Fehlertyp. Für `Error.prototype.name` ist der Anfangswert `"Error"`. Unterklassen wie {{jsxref("TypeError")}} und {{jsxref("SyntaxError")}} bieten ihre eigenen `name` Eigenschaften.

## Wert

Ein String. Für `Error.prototype.name` ist der Anfangswert `"Error"`.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Standardmäßig wird {{jsxref("Error")}} Instanzen der Name "Error" zugewiesen. Die `name` Eigenschaft wird zusätzlich zur {{jsxref("Error/message", "message")}} Eigenschaft von der {{jsxref("Error.prototype.toString()")}} Methode verwendet, um eine String-Darstellung des Fehlers zu erzeugen.

## Beispiele

### Auslösen eines benutzerdefinierten Fehlers

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
