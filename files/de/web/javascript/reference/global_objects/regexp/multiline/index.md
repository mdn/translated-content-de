---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`multiline`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `m`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-multiline.html", "taller")}}

## Beschreibung

`RegExp.prototype.multiline` hat den Wert `true`, wenn das `m`-Flag verwendet wurde; andernfalls `false`. Das `m`-Flag zeigt an, dass eine mehrzeilige Eingabezeichenfolge als mehrere Zeilen behandelt werden sollte. Wenn beispielsweise `m` verwendet wird, ändern sich `^` und `$` vom Abgleichen nur am Anfang oder Ende der gesamten Zeichenfolge zum Anfang oder Ende einer beliebigen Zeile innerhalb der Zeichenfolge.

Der Set-Zugriffsmodus von `multiline` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
