---
title: RegExp.prototype.multiline
short-title: multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die Accessor-Eigenschaft **`multiline`** von {{jsxref("RegExp")}}-Instanzen gibt an, ob für diesen regulären Ausdruck das Flag `m` verwendet wird.

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

`RegExp.prototype.multiline` hat den Wert `true`, wenn das Flag `m` verwendet wurde; andernfalls hat die Eigenschaft den Wert `false`. Das Flag `m` bewirkt, dass eine Eingabezeichenfolge mit mehreren Zeilen als einzelne Zeilen behandelt wird. Wenn `m` verwendet wird, entsprechen `^` und `$` beispielsweise nicht mehr nur dem Anfang oder Ende der gesamten Zeichenfolge, sondern dem Anfang oder Ende einer beliebigen Zeile innerhalb der Zeichenfolge.

> [!NOTE]
> Um im `m`-Modus den Anfang und das Ende der gesamten Zeichenfolge abzugleichen, verwenden Sie die [Zusicherungen für Puffergrenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) `\A`, `\z` und `\Z`.

Der set-Accessor von `multiline` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus Gründen der Abwärtskompatibilität gilt `RegExp.prototype.multiline === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Eigentlich wäre zu erwarten, dass der Getter einen `TypeError` auslöst, wenn der `this`-Wert keine `RegExp`-Instanz ist.)

## Beispiele

### multiline verwenden

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
