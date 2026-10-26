---
title: String.prototype.match()
short-title: match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`match()`** von {{jsxref("String")}}-Werten ermittelt das Ergebnis eines Abgleichs dieser Zeichenfolge mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions).

{{InteractiveExample("JavaScript Demo: String.prototype.match()", "shorter")}}

```js interactive-example
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]
```

## Syntax

```js-nolint
match(regexp)
```

### Parameter

- `regexp`
  - : Ein Objekt mit einem regulären Ausdruck oder ein beliebiges Objekt mit einer [`Symbol.match`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match)-Methode.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.match`-Methode besitzt, wird es mit `new RegExp(regexp)` implizit in ein {{jsxref("RegExp")}} umgewandelt.

    Wenn Sie keinen Parameter übergeben und die Methode `match()` direkt aufrufen, erhalten Sie ein {{jsxref("Array")}} mit einer leeren Zeichenfolge: `[""]`. Das entspricht `match(/(?:)/)`.

### Rückgabewert

Ein {{jsxref("Array")}}, dessen Inhalt davon abhängt, ob das globale Flag (`g`) gesetzt ist, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keine Übereinstimmung gefunden wurde.

- Wenn das Flag `g` gesetzt ist, werden alle Übereinstimmungen mit dem vollständigen regulären Ausdruck zurückgegeben, jedoch ohne Capturing Groups.
- Wenn das Flag `g` nicht gesetzt ist, werden nur die erste vollständige Übereinstimmung und die zugehörigen Capturing Groups zurückgegeben. In diesem Fall liefert `match()` dasselbe Ergebnis wie {{jsxref("RegExp.prototype.exec()")}}: ein Array mit einigen zusätzlichen Eigenschaften.

## Beschreibung

Die Implementierung von `String.prototype.match` tut im Wesentlichen nichts anderes, als die `Symbol.match`-Methode des Arguments aufzurufen und ihr die Zeichenfolge als ersten Parameter zu übergeben. Die eigentliche Implementierung stammt von [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match).

- Wenn Sie prüfen möchten, ob eine Zeichenfolge mit einem regulären Ausdruck {{jsxref("RegExp")}} übereinstimmt, verwenden Sie {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie nur die erste gefundene Übereinstimmung benötigen, können Sie stattdessen {{jsxref("RegExp.prototype.exec()")}} verwenden.
- Wenn Sie Capturing Groups erhalten möchten und das globale Flag gesetzt ist, müssen Sie stattdessen {{jsxref("RegExp.prototype.exec()")}} oder {{jsxref("String.prototype.matchAll()")}} verwenden.

Weitere Informationen zum Verhalten von `match()` bei Übergabe eines regulären Ausdrucks finden Sie unter [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match).

## Beispiele

### match() verwenden

Im folgenden Beispiel wird `match()` verwendet, um `"Chapter"` zu finden, gefolgt von mindestens einem numerischen Zeichen und anschließend von einem Dezimalpunkt und einem numerischen Zeichen, wobei die Folge aus Dezimalpunkt und numerischem Zeichen beliebig oft vorkommen kann.

Der reguläre Ausdruck enthält das Flag `i`, sodass Unterschiede zwischen Groß- und Kleinschreibung ignoriert werden.

```js
const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);
// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]
```

Im obigen Ergebnis ist `'see Chapter 3.4.5.1'` die vollständige Übereinstimmung. `'Chapter 3.4.5.1'` wurde durch `(chapter \d+(\.\d)*)` erfasst. `'.1'` war der letzte von `(\.\d)` erfasste Wert. Die Eigenschaft `index` (`22`) ist der nullbasierte Index der vollständigen Übereinstimmung. Die Eigenschaft `input` enthält die ursprüngliche Zeichenfolge, die verarbeitet wurde.

### Globale und Groß-/Kleinschreibungs-Flags mit match() verwenden

Das folgende Beispiel zeigt die Verwendung des globalen Flags und des Flags zum Ignorieren der Groß- und Kleinschreibung mit `match()`. Alle Buchstaben von `A` bis `E` und von `a` bis `e` werden zurückgegeben, jeweils als eigenes Element im Array.

```js
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[a-e]/gi;
const matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> [!NOTE]
> Siehe auch {{jsxref("String.prototype.matchAll()")}} und [Erweiterte Suche mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags).

### Benannte Capturing Groups verwenden

In Browsern, die benannte Capturing Groups unterstützen, erfasst der folgende Code `"fox"` oder `"cat"` in einer Gruppe namens `animal`:

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### match() ohne Parameter verwenden

```js
const str = "Nothing will come of nothing.";

str.match(); // returns [""]
```

### match() mit einem Nicht-RegExp-Objekt verwenden, das `[Symbol.match]()` implementiert

Wenn ein Objekt eine `Symbol.match`-Methode besitzt, kann es als benutzerdefinierter Matcher verwendet werden. Der Rückgabewert von `Symbol.match` wird zum Rückgabewert von `match()`.

```js
const str = "Hmm, this is interesting.";

str.match({
  [Symbol.match](str) {
    return ["Yes, it's interesting."];
  },
}); // returns ["Yes, it's interesting."]
```

### Ein Nicht-RegExp-Wert als Parameter

Wenn der Parameter `regexp` eine Zeichenfolge oder eine Zahl ist, wird er mit `new RegExp(regexp)` implizit in ein {{jsxref("RegExp")}} umgewandelt.

```js
const str1 =
  "All numbers except NaN satisfy <= Infinity and >= -Infinity in JavaScript.";
const str2 =
  "My grandfather is 65 years old and My grandmother is 63 years old.";
const str3 = "The contract was declared null and void.";
str1.match("number"); // "number" is a string. returns ["number"]
str1.match(NaN); // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity); // the type of Infinity is the number. returns ["Infinity"]
str1.match(-Infinity); // returns ["-Infinity"]
str2.match(65); // returns ["65"]
str3.match(null); // returns ["null"]
```

Dies kann zu unerwarteten Ergebnissen führen, wenn Sonderzeichen nicht korrekt maskiert werden.

```js
console.log("123".match("1.3")); // [ "123" ]
```

Hier liegt eine Übereinstimmung vor, weil `.` in einem regulären Ausdruck auf ein beliebiges Zeichen passt. Damit nur ein Punkt als Zeichen erkannt wird, müssen Sie die Eingabe maskieren.

```js
console.log("123".match("1\\.3")); // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.match` in `core-js` mit Korrekturen und Implementierung modernen Verhaltens wie der Unterstützung von `Symbol.match`](https://core-js.io/docs/features/ecmascript/string-regexp)
- Leitfaden zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
