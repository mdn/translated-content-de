---
title: String.prototype.matchAll()
short-title: matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`matchAll()`**-Methode von {{jsxref("String")}}-Werten gibt einen Iterator von allen Ergebnissen zurück, die mit dieser Zeichenkette gegen einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmen, einschließlich [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

{{InteractiveExample("JavaScript Demo: String.prototype.matchAll()")}}

```js interactive-example
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
```

## Syntax

```js-nolint
matchAll(regexp)
```

### Parameter

- `regexp`

  - : Ein reguläres Ausdrucksobjekt oder ein beliebiges Objekt, das über eine [`Symbol.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll)-Methode verfügt.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.matchAll`-Methode hat, wird es implizit in ein {{jsxref("RegExp")}} umgewandelt, indem `new RegExp(regexp, 'g')` verwendet wird.

    Wenn `regexp` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss es das globale (`g`)-Flag gesetzt haben, oder ein {{jsxref("TypeError")}} wird ausgelöst.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (das nicht neu gestartet werden kann) von Übereinstimmungen oder ein leerer Iterator, wenn keine Übereinstimmungen gefunden werden. Jeder vom Iterator zurückgegebene Wert ist ein Array mit derselben Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `regexp` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), der das globale (`g`)-Flag nicht gesetzt hat (dessen [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält kein `"g"`).

## Beschreibung

Die Implementierung von `String.prototype.matchAll` macht nicht viel mehr, als die `Symbol.matchAll`-Methode des Arguments mit der Zeichenkette als erstem Parameter aufzurufen (abgesehen von der zusätzlichen Eingabevalidierung, dass der reguläre Ausdruck global ist). Die eigentliche Implementierung stammt von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll).

## Beispiele

### Regexp.prototype.exec() und matchAll()

Ohne `matchAll()` ist es möglich, Aufrufe an [`regexp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (und reguläre Ausdrücke mit dem `g`-Flag) in einer Schleife zu verwenden, um alle Übereinstimmungen zu erhalten:

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.
```

Mit `matchAll()` können Sie die {{jsxref("Statements/while", "while")}}-Schleife und `exec` mit `g` vermeiden. Stattdessen erhalten Sie einen Iterator, den Sie mit den bequemeren Konstrukten wie {{jsxref("Statements/for...of", "for...of")}}, [Array-Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array.from()")}} verwenden können:

```js
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}
// Found football start=6 end=14.
// Found foosball start=16 end=24.

// matches iterator is exhausted after the for...of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]
```

`matchAll` löst eine Ausnahme aus, wenn das `g`-Flag fehlt.

```js
const regexp = /[a-c]/;
const str = "abc";
str.matchAll(regexp);
// TypeError
```

`matchAll` erstellt intern eine Kopie des `regexp` — daher ändert sich `lastIndex` nicht, während die Zeichenkette durchsucht wird.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Dies bedeutet jedoch, dass Sie im Gegensatz zur Verwendung von [`regexp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) in einer Schleife `lastIndex` nicht ändern können, um den regulären Ausdruck vor- oder zurückzusetzen.

### Besserer Zugriff auf Erfassungsgruppen (als bei String.prototype.match())

Ein weiterer überzeugender Grund für `matchAll` ist der verbesserte Zugriff auf Erfassungsgruppen.

Erfassungsgruppen werden ignoriert, wenn {{jsxref("String/match", "match()")}} mit dem globalen `g`-Flag verwendet wird:

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']
```

Mit `matchAll` können Sie ganz einfach auf Erfassungsgruppen zugreifen:

```js
const array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### Verwendung von matchAll() mit einem Nicht-RegExp-Objekt, das `[Symbol.matchAll]()` implementiert

Wenn ein Objekt über eine `Symbol.matchAll`-Methode verfügt, kann es als benutzerdefinierter Matcher verwendet werden. Der Rückgabewert von `Symbol.matchAll` wird zum Rückgabewert von `matchAll()`.

```js
const str = "Hmm, this is interesting.";

str.matchAll({
  [Symbol.matchAll](str) {
    return [["Yes, it's interesting."]];
  },
}); // returns [["Yes, it's interesting."]]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.matchAll` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.matchAll`](https://www.npmjs.com/package/string.prototype.matchall)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Leitfaden zu Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
