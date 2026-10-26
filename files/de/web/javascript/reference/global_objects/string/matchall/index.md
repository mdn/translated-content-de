---
title: String.prototype.matchAll()
short-title: matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`matchAll()`** von {{jsxref("String")}}-Werten gibt einen Iterator über alle Ergebnisse zurück, die beim Abgleich dieses Strings mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) gefunden werden, einschließlich der [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
  - : Ein Objekt für reguläre Ausdrücke oder ein beliebiges Objekt mit einer [`Symbol.matchAll`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll)-Methode.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.matchAll`-Methode besitzt, wird es mit `new RegExp(regexp, 'g')` implizit in ein {{jsxref("RegExp")}} umgewandelt.

    Wenn `regexp` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss das globale Flag (`g`) gesetzt sein. Andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

### Rückgabewert

Ein [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) (das nicht neu gestartet werden kann), das Treffer liefert, oder ein leerer Iterator, wenn keine Treffer gefunden werden. Jeder vom Iterator gelieferte Wert ist ein Array mit derselben Struktur wie der Rückgabewert von {{jsxref("RegExp.prototype.exec()")}}.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `regexp` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), bei dem das globale Flag (`g`) nicht gesetzt ist (dessen Eigenschaft [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) also kein `"g"` enthält).

## Beschreibung

Die Implementierung von `String.prototype.matchAll` ruft im Wesentlichen nur die `Symbol.matchAll`-Methode des Arguments mit dem String als erstem Parameter auf (abgesehen von der zusätzlichen Prüfung, ob der reguläre Ausdruck global ist). Die eigentliche Implementierung stammt von [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll).

## Beispiele

### Regexp.prototype.exec() und matchAll()

Ohne `matchAll()` können Sie [`regexp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (mit einem regulären Ausdruck mit dem Flag `g`) wiederholt in einer Schleife aufrufen, um alle Treffer zu erhalten:

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

Mit `matchAll()` können Sie auf die {{jsxref("Statements/while", "while")}}-Schleife und `exec` mit `g` verzichten. Stattdessen erhalten Sie einen Iterator, den Sie mit den bequemeren Konstrukten {{jsxref("Statements/for...of", "for...of")}}, [Spread-Syntax für Arrays](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array.from()")}} verwenden können:

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

`matchAll` löst eine Ausnahme aus, wenn das Flag `g` fehlt.

```js
const regexp = /[a-c]/;
const str = "abc";
str.matchAll(regexp);
// TypeError
```

`matchAll` erstellt intern eine Kopie von `regexp`. Anders als bei {{jsxref("RegExp/exec", "regexp.exec()")}} ändert sich `lastIndex` daher beim Durchsuchen des Strings nicht.

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// [ "1 b", "1 c" ]
```

Das bedeutet allerdings auch, dass Sie `lastIndex` anders als bei der Verwendung von [`regexp.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) in einer Schleife nicht verändern können, um den regulären Ausdruck vor- oder zurückzusetzen.

### Besserer Zugriff auf Erfassungsgruppen (als mit String.prototype.match())

Ein weiterer wichtiger Grund für die Verwendung von `matchAll` ist der verbesserte Zugriff auf Erfassungsgruppen.

Bei Verwendung von {{jsxref("String/match", "match()")}} mit dem globalen Flag `g` werden Erfassungsgruppen ignoriert:

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

str.match(regexp); // ['test1', 'test2']
```

Mit `matchAll` können Sie einfach auf Erfassungsgruppen zugreifen:

```js
const array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

### matchAll() mit einem Objekt verwenden, das `[Symbol.matchAll]()` implementiert und kein RegExp ist

Wenn ein Objekt eine `Symbol.matchAll`-Methode besitzt, kann es als benutzerdefinierter Matcher verwendet werden. Der Rückgabewert von `Symbol.matchAll` wird zum Rückgabewert von `matchAll()`.

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

- [Polyfill für `String.prototype.matchAll` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.matchAll` von es-shims](https://www.npmjs.com/package/string.prototype.matchall)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- Leitfaden zu [Gruppen und Rückwärtsreferenzen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
