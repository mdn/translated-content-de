---
title: RegExp.prototype[Symbol.matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.matchAll]()`**-Methode von {{jsxref("RegExp")}}-Instanzen legt fest, wie [`String.prototype.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) funktionieren sollte.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@matchall.html", "taller")}}

## Syntax

```js-nolint
regexp[Symbol.matchAll](str)
```

### Parameter

- `str`
  - : Ein {{jsxref("String")}}, der das Ziel des Abgleichs ist.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (das nicht neu gestartet werden kann) von Treffern. Jeder Treffer ist ein Array mit derselben Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

## Beschreibung

Diese Methode wird intern in {{jsxref("String.prototype.matchAll()")}} aufgerufen. Beispielsweise liefern die folgenden zwei Beispiele dasselbe Ergebnis.

```js
"abc".matchAll(/a/g);

/a/g[Symbol.matchAll]("abc");
```

Ähnlich wie [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) verwendet `[Symbol.matchAll]()` [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species), um ein neues Regex zu erstellen und so zu verhindern, dass das ursprüngliche Regex in irgendeiner Weise verändert wird. [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) beginnt als der Wert des ursprünglichen Regex.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Die Überprüfung, ob die Eingabe ein globales Regex ist, erfolgt in [`String.prototype.matchAll()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll). `[Symbol.matchAll]()` validiert die Eingabe nicht. Wenn das Regex nicht global ist, gibt der zurückgegebene Iterator das Ergebnis von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) einmal zurück und gibt dann `undefined` zurück. Ist das Regex global, wird bei jedem Aufruf der `next()`-Methode des zurückgegebenen Iterators das [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des Regex aufgerufen und das Ergebnis zurückgegeben.

Wenn das Regex sticky und global ist, werden weiterhin Sticky-Übereinstimmungen ausgeführt – d. h., es werden keine Vorkommen über den `lastIndex` hinaus übereinstimmen.

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

Wenn die aktuelle Übereinstimmung ein leerer String ist, wird der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) dennoch vorgerückt. Wenn das Regex das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag hat, wird um einen Unicode-Codepunkt vorgerückt; andernfalls wird um einen UTF-16-Codepunkt vorgerückt.

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]

console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

Diese Methode existiert, um das Verhalten von `matchAll()` in {{jsxref("RegExp")}}-Unterklassen anzupassen.

## Beispiele

### Direkter Aufruf

Diese Methode kann auf fast dieselbe Weise wie {{jsxref("String.prototype.matchAll()")}} verwendet werden, außer mit einem anderen Wert für `this` und der anderen Reihenfolge der Argumente.

```js
const re = /[0-9]+/g;
const str = "2016-01-02";
const result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// [ "2016", "01", "02" ]
```

### Verwendung von `[Symbol.matchAll]()` in Unterklassen

Unterklassen von {{jsxref("RegExp")}} können die `[Symbol.matchAll]()`-Methode überschreiben, um das Standardverhalten zu ändern.

Zum Beispiel, um ein {{jsxref("Array")}} anstelle eines [Iterators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurückzugeben:

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    return result ? Array.from(result) : null;
  }
}

const re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)", "g");
const str = "2016-01-02|2019-03-07";
const result = str.matchAll(re);

console.log(result[0]);
// [ "2016-01-02", "2016", "01", "02" ]

console.log(result[1]);
// [ "2019-03-07", "2019", "03", "07" ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `RegExp.prototype[Symbol.matchAll]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.matchAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("Symbol.matchAll")}}
