---
title: SyntaxError()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
l10n:
  sourceCommit: f5d6eeec8c270d74f92e59dd915261e8bf1d083f
---

{{JSRef}}

Der **`SyntaxError()`**-Konstruktor erzeugt {{jsxref("SyntaxError")}}-Objekte.

## Syntax

```js-nolint
new SyntaxError()
new SyntaxError(message)
new SyntaxError(message, options)
new SyntaxError(message, fileName)
new SyntaxError(message, fileName, lineNumber)

SyntaxError()
SyntaxError(message)
SyntaxError(message, options)
SyntaxError(message, fileName)
SyntaxError(message, fileName, lineNumber)
```

> **Note:** `SyntaxError()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `SyntaxError`-Instanz.

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt.
        Beim Auffangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler weiterzuleiten.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat

## Beispiele

### Abfangen eines SyntaxErrors

```js
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack des Fehlers
}
```

### Erzeugen eines SyntaxErrors

```js
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack des Fehlers
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}