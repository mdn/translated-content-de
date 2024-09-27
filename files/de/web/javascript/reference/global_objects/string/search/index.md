---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`search()`**-Methode von {{jsxref("String")}}-Werten führt eine Suche nach einer Übereinstimmung zwischen einem regulären Ausdruck und diesem String aus und gibt den Index der ersten Übereinstimmung im String zurück.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Syntax

```js-nolint
search(regexp)
```

### Parameter

- `regexp`

  - : Ein reguläres Ausdrucksobjekt oder ein beliebiges Objekt, das eine [`Symbol.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search)-Methode hat.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.search`-Methode besitzt, wird es implizit durch Verwendung von `new RegExp(regexp)` in ein {{jsxref("RegExp")}} umgewandelt.

### Rückgabewert

Der Index der ersten Übereinstimmung zwischen dem regulären Ausdruck und dem angegebenen String oder `-1`, wenn keine Übereinstimmung gefunden wurde.

## Beschreibung

Die Implementierung von `String.prototype.search()` selbst ist sehr einfach – sie ruft einfach die `Symbol.search`-Methode des Arguments mit dem String als erstem Parameter auf. Die eigentliche Implementierung stammt von [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Das `g`-Flag von `regexp` hat keine Auswirkung auf das Ergebnis von `search()`, und die Suche erfolgt immer so, als ob der `lastIndex` des Regex 0 wäre. Weitere Informationen zum Verhalten von `search()` finden Sie unter [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Wenn Sie wissen möchten, ob ein Muster gefunden wird, und _auch_ dessen Index innerhalb eines Strings kennen möchten, verwenden Sie `search()`.

- Wenn Sie nur wissen möchten, ob es existiert, verwenden Sie die {{jsxref("RegExp.prototype.test()")}}-Methode, die einen booleschen Wert zurückgibt.
- Wenn Sie den Inhalt des übereinstimmenden Textes benötigen, verwenden Sie {{jsxref("String.prototype.match()")}} oder {{jsxref("RegExp.prototype.exec()")}}.

## Beispiele

### Verwendung von search()

Das folgende Beispiel durchsucht einen String mit zwei verschiedenen Regex-Objekten, um eine erfolgreiche Suche (positiver Wert) im Vergleich zu einer erfolglosen Suche (`-1`) zu zeigen.

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

- [Polyfill von `String.prototype.search` in `core-js` mit Korrekturen und Implementierung moderner Verhaltensweisen wie der Unterstützung von `Symbol.search`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
