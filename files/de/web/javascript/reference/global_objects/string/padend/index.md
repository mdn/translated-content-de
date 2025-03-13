---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`padEnd()`**-Methode der {{jsxref("String")}}-Werte fügt diesem String eine angegebene Zeichenfolge hinzu (wenn nötig wiederholt), sodass die resultierende Zeichenfolge eine bestimmte Länge erreicht. Das Padding wird vom Ende dieses Strings angewendet.

{{InteractiveExample("JavaScript Demo: String.prototype.padEnd()")}}

```js interactive-example
const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "
```

## Syntax

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Parameter

- `targetLength`
  - : Die Länge der resultierenden Zeichenfolge, nachdem der aktuelle `str` gepolstert wurde. Wenn der Wert kleiner oder gleich `str.length` ist, wird der aktuelle String unverändert zurückgegeben.
- `padString` {{optional_inline}}
  - : Die Zeichenfolge, mit der der aktuelle `str` gefüllt werden soll. Wenn `padString` zu lang ist, um innerhalb `targetLength` zu bleiben, wird es gekürzt: Für von links nach rechts lesende Sprachen wird der linkste Teil angewendet und für von rechts nach links lesende Sprachen der rechtsste Teil. Der Standardwert für diesen Parameter ist " " (`U+0020`).

### Rückgabewert

Eine {{jsxref("String")}} der angegebenen `targetLength` mit dem `padString` am Ende des aktuellen `str`.

## Beispiele

### Verwendung von padEnd

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.padEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.padEnd`](https://www.npmjs.com/package/string.prototype.padend)
- {{jsxref("String.prototype.padStart()")}}
