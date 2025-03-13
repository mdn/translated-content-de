---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`search()`**-Methode von {{jsxref("String")}}-Werten führt eine Suche nach einem Treffer zwischen einem regulären Ausdruck und diesem String durch und gibt den Index des ersten Treffers im String zurück.

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

  - : Ein regulärer Ausdrucksobjekt oder ein beliebiges Objekt, das eine [`Symbol.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search)-Methode hat.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.search`-Methode hat, wird es implizit in ein {{jsxref("RegExp")}} umgewandelt, indem `new RegExp(regexp)` verwendet wird.

### Rückgabewert

Der Index des ersten Treffers zwischen dem regulären Ausdruck und dem angegebenen String oder `-1`, wenn kein Treffer gefunden wurde.

## Beschreibung

Die Implementierung von `String.prototype.search()` tut nicht viel mehr, als die `Symbol.search`-Methode des Arguments mit dem String als erstem Parameter aufzurufen. Die eigentliche Implementierung stammt von [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Das `g`-Flag von `regexp` hat keinen Effekt auf das `search()`-Ergebnis, und die Suche erfolgt immer so, als ob der `lastIndex` des Regex 0 ist. Für weitere Informationen zum Verhalten von `search()` siehe [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Wenn Sie wissen möchten, ob ein Muster gefunden wird und _auch_ seinen Index innerhalb eines Strings kennen möchten, verwenden Sie `search()`.

- Wenn Sie nur wissen möchten, ob es existiert, verwenden Sie die {{jsxref("RegExp.prototype.test()")}}-Methode, die einen booleschen Wert zurückgibt.
- Wenn Sie den Inhalt des übereinstimmenden Textes benötigen, verwenden Sie {{jsxref("String.prototype.match()")}} oder {{jsxref("RegExp.prototype.exec()")}}.

## Beispiele

### Verwendung von search()

Das folgende Beispiel durchsucht einen String mit zwei verschiedenen Regex-Objekten, um eine erfolgreiche Suche (positiver Wert) vs. eine erfolglose Suche (`-1`) zu zeigen.

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

- [Polyfill von `String.prototype.search` in `core-js` mit Fixes und Implementierung von modernem Verhalten wie `Symbol.search` Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
