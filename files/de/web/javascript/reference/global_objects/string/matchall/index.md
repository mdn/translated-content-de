---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`matchAll()`** Methode von {{jsxref("String")}} Werten gibt einen Iterator mit allen Ergebnissen zurück, die dieser String mit einem [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt, einschließlich [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Syntax

```js-nolint
matchAll(regexp)
```

### Parameter

- `regexp`

  - : Ein reguläres Ausdrucksobjekt oder ein beliebiges Objekt, das eine [`Symbol.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) Methode besitzt.

    Wenn `regexp` kein `RegExp`-Objekt ist und nicht über eine `Symbol.matchAll` Methode verfügt, wird es implizit in ein {{jsxref("RegExp")}} umgewandelt, indem `new RegExp(regexp, 'g')` verwendet wird.

    Wenn `regexp` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss es das globale (`g`) Flag gesetzt haben, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

### Rückgabewert

Ein [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (das nicht neu gestartet werden kann) der Treffer oder ein leerer Iterator, wenn keine Treffer gefunden werden. Jeder vom Iterator ausgegebene Wert ist ein Array mit derselben Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `regexp` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), der nicht das globale (`g`) Flag gesetzt hat (seine [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) Eigenschaft enthält kein `"g"`).

## Beschreibung

Die Implementierung von `String.prototype.matchAll` selbst ist sehr einfach — sie ruft einfach die `Symbol.matchAll` Methode des Arguments mit dem String als ersten Parameter auf (abgesehen von der zusätzlichen Eingabevalidierung, dass das Regex global ist). Die eigentliche Implementierung stammt von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll).

## Beispiele

### Regexp.prototype.exec() und matchAll()

Ohne `matchAll()` ist es möglich, mit Aufrufen von [`regexp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (und Regexen mit dem `g` Flag) in einer Schleife alle Treffer zu erhalten:

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

Mit `matchAll()` können Sie die {{jsxref("Statements/while", "while")}} Schleife und `exec` mit `g` vermeiden. Stattdessen erhalten Sie einen Iterator zur Verwendung mit der bequemeren {{jsxref("Statements/for...of", "for...of")}}, [Array spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), oder {{jsxref("Array.from()")}} Konstrukten:

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

`matchAll` wird eine Ausnahme auslösen, wenn das `g` Flag fehlt.

```js
const regexp = /[a-c]/;
const str = "abc";
str.matchAll(regexp);
// TypeError
```

`matchAll` erstellt intern einen Klon des `regexp` — im Gegensatz zu {{jsxref("RegExp/exec", "regexp.exec()")}}, ändert sich `lastIndex` nicht, während der String durchsucht wird.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Dies bedeutet jedoch, dass Sie im Gegensatz zur Verwendung von [`regexp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) in einer Schleife `lastIndex` nicht ändern können, um das Regex vor- oder zurücklaufen zu lassen.

### Besserer Zugriff auf Erfassungsgruppen (als String.prototype.match())

Ein weiterer überzeugender Grund für `matchAll` ist der verbesserte Zugriff auf Erfassungsgruppen.

Erfassungsgruppen werden ignoriert, wenn {{jsxref("String/match", "match()")}} mit dem globalen `g` Flag verwendet wird:

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']
```

Mit `matchAll` können Sie leicht auf Erfassungsgruppen zugreifen:

```js
const array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### Verwendung von matchAll() mit einem Nicht-RegExp, das `[Symbol.matchAll]()` implementiert

Wenn ein Objekt eine `Symbol.matchAll`-Methode hat, kann es als benutzerdefinierter Matcher verwendet werden. Der Rückgabewert von `Symbol.matchAll` wird zum Rückgabewert von `matchAll()`.

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
- {{jsxref("String.prototype.match()")}}
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
