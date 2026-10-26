---
title: String.prototype.search()
short-title: search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`search()`** von {{jsxref("String")}}-Werten sucht nach einer Übereinstimmung zwischen einem regulären Ausdruck und diesem String und gibt den Index der ersten Übereinstimmung im String zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.search()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"
```

## Syntax

```js-nolint
search(regexp)
```

### Parameter

- `regexp`
  - : Ein Objekt mit einem regulären Ausdruck oder ein beliebiges Objekt mit einer [`Symbol.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search)-Methode.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.search`-Methode hat, wird es mit `new RegExp(regexp)` implizit in ein {{jsxref("RegExp")}}-Objekt umgewandelt.

### Rückgabewert

Der Index der ersten Übereinstimmung zwischen dem regulären Ausdruck und dem angegebenen String oder `-1`, wenn keine Übereinstimmung gefunden wurde.

## Beschreibung

Die Implementierung von `String.prototype.search()` ruft lediglich die `Symbol.search`-Methode des Arguments mit dem String als erstem Parameter auf. Die eigentliche Implementierung befindet sich in [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Das `g`-Flag von `regexp` hat keinen Einfluss auf das Ergebnis von `search()`. Die Suche erfolgt immer so, als wäre `lastIndex` des regulären Ausdrucks gleich 0. Weitere Informationen zum Verhalten von `search()` finden Sie unter [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Wenn Sie wissen möchten, ob ein Muster gefunden wurde, und _auch_ dessen Index innerhalb eines Strings benötigen, verwenden Sie `search()`.

- Wenn Sie nur wissen möchten, ob das Muster vorkommt, verwenden Sie die Methode {{jsxref("RegExp.prototype.test()")}}, die einen booleschen Wert zurückgibt.
- Wenn Sie den Inhalt des übereinstimmenden Textes benötigen, verwenden Sie {{jsxref("String.prototype.match()")}} oder {{jsxref("RegExp.prototype.exec()")}}.

## Beispiele

### search() verwenden

Das folgende Beispiel durchsucht einen String mit zwei verschiedenen Objekten mit regulären Ausdrücken, um eine erfolgreiche Suche (positiver Wert) und eine erfolglose Suche (`-1`) gegenüberzustellen.

```js
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.search` in `core-js` mit Korrekturen und Implementierung modernen Verhaltens, etwa der Unterstützung von `Symbol.search`](https://core-js.io/docs/features/ecmascript/string-regexp)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
