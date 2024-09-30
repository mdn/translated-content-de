---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`hasIndices`** Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `d`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-hasindices.html")}}

## Beschreibung

`RegExp.prototype.hasIndices` hat den Wert `true`, wenn das `d`-Flag verwendet wurde; andernfalls `false`. Das `d`-Flag zeigt an, dass das Ergebnis eines regulären Ausdrucks-Matchs die Start- und Endindizes der Teilzeichenfolgen jeder Erfassungsgruppe enthalten sollte. Es ändert in keiner Weise die Interpretation oder das Matching-Verhalten des Regex, sondern liefert nur zusätzliche Informationen im Matching-Ergebnis.

Dieses Flag beeinflusst hauptsächlich den Rückgabewert von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec). Wenn das `d`-Flag vorhanden ist, hat das von `exec()` zurückgegebene Array eine zusätzliche `indices`-Eigenschaft, wie im [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) der `exec()`-Methode beschrieben. Da alle anderen regexbezogenen Methoden (wie {{jsxref("String.prototype.match()")}}) intern `exec()` aufrufen, geben auch sie die Indizes zurück, wenn das Regex das `d`-Flag hat.

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
