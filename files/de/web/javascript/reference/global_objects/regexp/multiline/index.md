---
title: RegExp.prototype.multiline
short-title: multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`multiline`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `m`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.multiline", "taller")}}

```js interactive-example
const regex1 = /^football/;
const regex2 = /^football/m;

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

`RegExp.prototype.multiline` hat den Wert `true`, wenn das `m`-Flag verwendet wurde; andernfalls `false`. Das `m`-Flag zeigt an, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden sollte. Wenn `m` beispielsweise verwendet wird, verändern sich `^` und `$` dahingehend, dass sie nicht nur am Anfang oder Ende der gesamten Zeichenfolge, sondern am Anfang oder Ende jeder Zeile innerhalb der Zeichenfolge übereinstimmen.

Der Set-Zugriffsmodifikator von `multiline` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von multiline

```js
const regex = /^foo/m;

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
