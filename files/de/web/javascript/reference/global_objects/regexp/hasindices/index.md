---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

Die Zugriffsoroperty **`hasIndices`** von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `d`-Flag mit diesem regulären Ausdruck verwendet wird.

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

`RegExp.prototype.hasIndices` hat den Wert `true`, wenn das `d`-Flag verwendet wurde, andernfalls `false`. Das `d`-Flag gibt an, dass das Ergebnis eines regulären Ausdrucks-Matches die Start- und Endindizes der Teilzeichenfolgen jeder Erfassungsgruppe enthalten soll. Es ändert die Interpretation oder das Match-Verhalten des regulären Ausdrucks in keiner Weise, sondern liefert nur zusätzliche Informationen im Matchergebnis.

Dieses Flag wirkt sich hauptsächlich auf den Rückgabewert von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) aus. Wenn das `d`-Flag vorhanden ist, enthält das von `exec()` zurückgegebene Array eine zusätzliche `indices`-Eigenschaft, wie im [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) der Methode `exec()` beschrieben. Da alle anderen regex-bezogenen Methoden (wie {{jsxref("String.prototype.match()")}}) intern `exec()` aufrufen, geben sie ebenfalls die Indizes zurück, wenn der reguläre Ausdruck das `d`-Flag hat.

Der Set-Accessor von `hasIndices` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Ein ausführlicheres Anwendungsbeispiel finden Sie unter [Gruppen und Rückverweise > Verwenden von Gruppen und Match-Indizes](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups_and_match_indices).

### Verwendung von hasIndices

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
