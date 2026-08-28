---
title: RegExp.prototype.multiline
short-title: multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Die **`multiline`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `m`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.multiline` hat den Wert `true`, wenn das `m`-Flag verwendet wurde; andernfalls `false`. Das `m`-Flag gibt an, dass eine mehrzeilige Eingabezeichenkette als mehrere Zeilen behandelt werden soll. Zum Beispiel ändern sich bei Verwendung von `m` `^` und `$` von der Übereinstimmung nur am Anfang oder Ende der gesamten Zeichenkette zur Übereinstimmung am Anfang oder Ende jeder Zeile innerhalb der Zeichenkette.

> [!NOTE]
> Um den Anfang und das Ende der gesamten Zeichenkette im `m`-Modus zu erfassen, verwenden Sie die [Puffergrenzen-Assertionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) `\A`, `\z` und `\Z`.

Der Set-Accessor von `multiline` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
