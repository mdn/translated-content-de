---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`valueOf()`**-Methode von {{jsxref("Boolean")}}-Werten gibt den primitiven Wert eines
{{jsxref("Boolean")}}-Objekts zurück.

{{InteractiveExample("JavaScript Demo: Boolean.prototype.valueOf()")}}

```js interactive-example
const x = new Boolean();

console.log(x.valueOf());
// Expected output: false

const y = new Boolean("Mozilla");

console.log(y.valueOf());
// Expected output: true
```

## Syntax

```js-nolint
valueOf()
```

### Parameter

Keine.

### Rückgabewert

Der primitive Wert des angegebenen {{jsxref("Boolean")}}-Objekts.

## Beschreibung

Die `valueOf()`-Methode von {{jsxref("Boolean")}} gibt den primitiven Wert
eines `Boolean`-Objekts oder literalen `Boolean` als Boolean-Datentyp zurück.

Diese Methode wird normalerweise intern von JavaScript aufgerufen und nicht explizit im Code.

## Beispiele

### Verwendung von `valueOf()`

```js
const x = new Boolean();
const myVar = x.valueOf(); // assigns false to myVar
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.valueOf()")}}
