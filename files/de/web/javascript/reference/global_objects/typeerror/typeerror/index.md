---
title: TypeError() Konstruktor
short-title: TypeError()
slug: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`TypeError()`** Konstruktor erstellt {{jsxref("TypeError")}} Objekte.

## Syntax

```js-nolint
new TypeError()
new TypeError(message)
new TypeError(message, options)
new TypeError(message, fileName)
new TypeError(message, fileName, lineNumber)

TypeError()
TypeError(message)
TypeError(message, options)
TypeError(message, fileName)
TypeError(message, fileName, lineNumber)
```

> [!NOTE]
> `TypeError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `TypeError` Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften hat:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Beim Abfangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übermitteln.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat

## Beispiele

### Abfangen eines TypeError

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

### Erstellen eines TypeError

```js
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
