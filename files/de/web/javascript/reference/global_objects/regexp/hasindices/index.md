---
title: RegExp.prototype.hasIndices
short-title: hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die Accessor-Eigenschaft **`hasIndices`** von {{jsxref("RegExp")}}-Instanzen gibt an, ob bei diesem regulären Ausdruck das Flag `d` verwendet wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.hasIndices")}}

```js interactive-example
const regex1 = /foo/d;

console.log(regex1.hasIndices);
// Expected output: true

const regex2 = /bar/;

console.log(regex2.hasIndices);
// Expected output: false
```

## Beschreibung

`RegExp.prototype.hasIndices` hat den Wert `true`, wenn das Flag `d` verwendet wurde; andernfalls hat die Eigenschaft den Wert `false`. Das Flag `d` bewirkt, dass das Ergebnis eines Treffers eines regulären Ausdrucks die Start- und Endindizes der Teilzeichenfolgen jeder Capture Group enthält. Es ändert weder die Interpretation des regulären Ausdrucks noch dessen Verhalten beim Abgleichen, sondern liefert lediglich zusätzliche Informationen im Ergebnis.

Dieses Flag wirkt sich hauptsächlich auf den Rückgabewert von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) aus. Wenn das Flag `d` vorhanden ist, hat das von `exec()` zurückgegebene Array eine zusätzliche Eigenschaft `indices`, wie unter [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) der Methode `exec()` beschrieben. Da alle anderen Methoden, die reguläre Ausdrücke verwenden (etwa {{jsxref("String.prototype.match()")}}), intern `exec()` aufrufen, geben auch sie die Indizes zurück, wenn der reguläre Ausdruck das Flag `d` hat.

Der Set-Accessor von `hasIndices` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus Gründen der Abwärtskompatibilität gilt `RegExp.prototype.hasIndices === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Eigentlich wäre zu erwarten, dass der Getter einen `TypeError` auslöst, wenn der Wert von `this` keine `RegExp`-Instanz ist.)

## Beispiele

Ein ausführlicheres Anwendungsbeispiel finden Sie unter [Gruppen und Rückverweise > Gruppen und Trefferindizes verwenden](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups_and_match_indices).

### hasIndices verwenden

```js
const str1 = "foo bar foo";

const regex1 = /foo/dg;

console.log(regex1.hasIndices); // true

console.log(regex1.exec(str1).indices[0]); // [0, 3]
console.log(regex1.exec(str1).indices[0]); // [8, 11]

const str2 = "foo bar foo";

const regex2 = /foo/;

console.log(regex2.hasIndices); // false

console.log(regex2.exec(str2).indices); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
