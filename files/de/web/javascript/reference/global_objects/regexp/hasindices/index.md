---
title: RegExp.prototype.hasIndices
slug: Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`hasIndices`**-Zugriffsproprietät von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `d`-Flag mit diesem regulären Ausdruck verwendet wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.hasIndices")}}

```js interactive-example
const regex1 = new RegExp("foo", "d");

console.log(regex1.hasIndices);
// Expected output: true

const regex2 = new RegExp("bar");

console.log(regex2.hasIndices);
// Expected output: false
```

## Beschreibung

`RegExp.prototype.hasIndices` hat den Wert `true`, wenn das `d`-Flag verwendet wurde; ansonsten `false`. Das `d`-Flag zeigt an, dass das Ergebnis eines Matches eines regulären Ausdrucks die Start- und Endindizes der Teilzeichenfolgen jeder Erfassungsgruppe enthalten soll. Es ändert in keiner Weise die Interpretation oder das Verhalten des regulären Ausdrucks beim Matchen, sondern liefert nur zusätzliche Informationen im Match-Ergebnis.

Dieses Flag beeinflusst hauptsächlich den Rückgabewert von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec). Wenn das `d`-Flag vorhanden ist, besitzt das von `exec()` zurückgegebene Array eine zusätzliche `indices`-Eigenschaft, wie in der [Rückgabewertbeschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) der Methode `exec()` beschrieben. Da alle anderen regex-bezogenen Methoden (wie {{jsxref("String.prototype.match()")}}) `exec()` intern aufrufen, geben sie die Indizes ebenfalls zurück, wenn der reguläre Ausdruck das `d`-Flag besitzt.

Der Set-Zugriffsmechanismus von `hasIndices` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Es gibt ein detaillierteres Nutzungsbeispiel unter [Gruppen und Rückverweise > Verwendung von Gruppen und Match-Indizes](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#using_groups_and_match_indices).

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
