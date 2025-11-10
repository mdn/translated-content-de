---
title: RegExp.prototype.multiline
short-title: multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`multiline`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt an, ob das `m`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.multiline` hat den Wert `true`, wenn das `m`-Flag verwendet wurde; andernfalls `false`. Das `m`-Flag zeigt an, dass ein mehrzeiliger Eingabestring als mehrere Zeilen behandelt werden soll. Zum Beispiel ändern sich bei Verwendung von `m` die Zeichen `^` und `$` von einer Übereinstimmung nur am Anfang oder Ende des gesamten Strings zu einer Übereinstimmung am Anfang oder Ende jeder Zeile innerhalb des Strings.

Der Set-Zugriffsberechtiger von `multiline` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
