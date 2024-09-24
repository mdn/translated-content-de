---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`search()`** Methode von {{jsxref("String")}}-Werten führt eine Suche nach einem Übereinstimmung zwischen einem regulären Ausdruck und diesem String durch und gibt den Index des ersten Treffers im String zurück.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Syntax

```js-nolint
search(regexp)
```

### Parameter

- `regexp`

  - : Ein reguläres Ausdrucksobjekt oder jedes Objekt, das eine [`Symbol.search`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search) Methode hat.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.search`-Methode hat, wird es implizit in ein {{jsxref("RegExp")}} umgewandelt, indem `new RegExp(regexp)` verwendet wird.

### Rückgabewert

Der Index des ersten Treffers zwischen dem regulären Ausdruck und dem gegebenen String oder `-1`, wenn keine Übereinstimmung gefunden wurde.

## Beschreibung

Die Implementierung von `String.prototype.search()` selbst ist sehr einfach – sie ruft einfach die `Symbol.search` Methode des Arguments mit dem String als erstem Parameter auf. Die eigentliche Implementierung stammt von [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Das `g`-Flag von `regexp` hat keinen Einfluss auf das `search()` Ergebnis, und die Suche erfolgt immer so, als ob der `lastIndex` des regulären Ausdrucks 0 ist. Für mehr Informationen über das Verhalten von `search()`, siehe [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search).

Wenn Sie wissen wollen, ob ein Muster gefunden wird, und _auch_ dessen Index in einem String kennen, verwenden Sie `search()`.

- Wenn Sie nur wissen möchten, ob es existiert, verwenden Sie die {{jsxref("RegExp.prototype.test()")}} Methode, die einen Boolean zurückgibt.
- Wenn Sie den Inhalt des übereinstimmenden Textes benötigen, verwenden Sie {{jsxref("String.prototype.match()")}} oder {{jsxref("RegExp.prototype.exec()")}}.

## Beispiele

### Verwendung von search()

Das folgende Beispiel durchsucht einen String mit zwei verschiedenen Regex-Objekten, um eine erfolgreiche Suche (positiver Wert) vs. eine erfolglose Suche (`-1`) zu demonstrieren.

```js
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // gibt 4 zurück, der Index des ersten Großbuchstabens "J"
console.log(str.search(reDot)); // gibt -1 zurück, da '.' Punkt-Zeichen nicht gefunden wird
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.search` in `core-js` mit Korrekturen und Implementierung von modernem Verhalten wie `Symbol.search` Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
