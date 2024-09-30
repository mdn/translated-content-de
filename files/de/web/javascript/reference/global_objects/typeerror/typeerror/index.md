---
title: TypeError() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

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

> **Note:** `TypeError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `TypeError` Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften hat:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler weiterzugeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat

## Beispiele

### Einen TypeError abfangen

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

### Einen TypeError erstellen

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
