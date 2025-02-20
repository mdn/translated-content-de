---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`multiline`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `m`-Flag bei diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.multiline", "taller")}}

```js interactive-example
const regex1 = new RegExp("^football");
const regex2 = new RegExp("^football", "m");

console.log(regex1.multiline);
// Expected output: false

console.log(regex2.multiline);
// Expected output: true

console.log(regex1.test("rugby\nfootball"));
// Expected output: false

console.log(regex2.test("rugby\nfootball"));
// Expected output: true
```

## Beschreibung

`RegExp.prototype.multiline` hat den Wert `true`, wenn das `m`-Flag verwendet wurde; andernfalls `false`. Das `m`-Flag gibt an, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden soll. Wenn beispielsweise `m` verwendet wird, ändern sich `^` und `$` von der Übereinstimmung nur am Anfang oder Ende der gesamten Zeichenkette zur Übereinstimmung am Anfang oder Ende einer beliebigen Zeile innerhalb der Zeichenkette.

Der Set-Accessor von `multiline` ist `undefined`. Sie können diese Eigenschaft nicht direkt verändern.

## Beispiele

### Verwendung von multiline

```js
const regex = /foo/m;

console.log(regex.multiline); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
