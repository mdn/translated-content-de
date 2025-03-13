---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`match()`**-Methode der {{jsxref("String")}}-Werte liefert das Ergebnis des Abgleichs dieses Strings mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions).

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

  - : Ein reguläres Ausdrucksobjekt oder ein beliebiges Objekt, das eine [`Symbol.match`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match)-Methode hat.

    Wenn `regexp` kein `RegExp`-Objekt ist und keine `Symbol.match`-Methode hat, wird es implizit in ein {{jsxref("RegExp")}} umgewandelt, indem `new RegExp(regexp)` verwendet wird.

    Wenn Sie keinen Parameter angeben und die `match()`-Methode direkt verwenden, erhalten Sie ein {{jsxref("Array")}} mit einem leeren String: `[""]`, da dies gleichbedeutend mit `match(/(?:)/)` ist.

### Rückgabewert

Ein {{jsxref("Array")}}, dessen Inhalt von der Anwesenheit oder Abwesenheit des globalen (`g`)-Flags abhängt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keine Übereinstimmungen gefunden werden.

- Wenn das `g`-Flag verwendet wird, werden alle Ergebnisse zurückgegeben, die dem vollständigen regulären Ausdruck entsprechen, aber Erfassungsgruppen sind nicht enthalten.
- Wenn das `g`-Flag nicht verwendet wird, wird nur die erste vollständige Übereinstimmung und die zugehörigen Erfassungsgruppen zurückgegeben. In diesem Fall liefert `match()` dasselbe Ergebnis wie {{jsxref("RegExp.prototype.exec()")}} (ein Array mit einigen zusätzlichen Eigenschaften).

## Beschreibung

Die Implementierung von `String.prototype.match` macht nicht viel anderes, als die `Symbol.match`-Methode des Arguments mit dem String als ersten Parameter aufzurufen. Die tatsächliche Implementierung stammt von [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match).

- Wenn Sie wissen müssen, ob ein String einem regulären Ausdruck {{jsxref("RegExp")}} entspricht, verwenden Sie {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie nur die erste gefundene Übereinstimmung möchten, könnten Sie stattdessen {{jsxref("RegExp.prototype.exec()")}} verwenden.
- Wenn Sie Erfassungsgruppen erhalten möchten und das globale Flag gesetzt ist, müssen Sie {{jsxref("RegExp.prototype.exec()")}} oder {{jsxref("String.prototype.matchAll()")}} verwenden.

Für weitere Informationen über die Semantik von `match()`, wenn ein Regex übergeben wird, siehe [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match).

## Beispiele

### Verwendung von match()

Im folgenden Beispiel wird `match()` verwendet, um `"Chapter"` gefolgt von einem oder mehreren numerischen Zeichen und anschließend einem Dezimalpunkt und numerischen Zeichen null oder mehrmals zu finden.

Der reguläre Ausdruck enthält das `i`-Flag, damit Unterschiede zwischen Groß- und Kleinschreibung ignoriert werden.

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

Im obigen Matchergebnis ist `'see Chapter 3.4.5.1'` die gesamte Übereinstimmung. `'Chapter 3.4.5.1'` wurde von `(chapter \d+(\.\d)*)` erfasst. `'.1'` wurde zuletzt von `(\.\d)` erfasst. Die `index`-Eigenschaft (`22`) ist der nullbasierte Index der gesamten Übereinstimmung. Die `input`-Eigenschaft ist der ursprüngliche String, der geparst wurde.

### Verwendung von globalen und ignoreCase-Flags mit match()

Das folgende Beispiel zeigt die Verwendung des globalen Flags und des ignore-case-Flags mit `match()`. Alle Buchstaben `A` bis `E` und `a` bis `e` werden zurückgegeben, jeweils als eigenes Element im Array.

```js
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> [!NOTE]
> Siehe auch {{jsxref("String.prototype.matchAll()")}} und [Fortgeschrittenes Suchen mit Flags](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags).

### Verwendung von benannten Erfassungsgruppen

In Browsern, die benannte Erfassungsgruppen unterstützen, erfasst der folgende Code `"fox"` oder `"cat"` in einer Gruppe namens `animal`:

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### Verwendung von match() ohne Parameter

```js
const str = "Nothing will come of nothing.";

str.match(); // returns [""]
```

### Verwendung von match() mit einem Nicht-RegExp, das `[Symbol.match]()` implementiert

Wenn ein Objekt eine `Symbol.match`-Methode hat, kann es als benutzerdefinierter Matcher verwendet werden. Der Rückgabewert von `Symbol.match` wird zum Rückgabewert von `match()`.

```js
const str = "Hmm, this is interesting.";

str.match({
  [Symbol.match](str) {
    return ["Yes, it's interesting."];
  },
}); // returns ["Yes, it's interesting."]
```

### Ein Nicht-RegExp als Parameter

Wenn der `regexp`-Parameter ein String oder eine Zahl ist, wird er implizit in ein {{jsxref("RegExp")}} umgewandelt, indem `new RegExp(regexp)` verwendet wird.

```js
const str1 =
  "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
const str2 =
  "My grandfather is 65 years old and My grandmother is 63 years old.";
const str3 = "The contract was declared null and void.";
str1.match("number"); // "number" is a string. returns ["number"]
str1.match(NaN); // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity); // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity); // returns ["Infinity"]
str1.match(-Infinity); // returns ["-Infinity"]
str2.match(65); // returns ["65"]
str2.match(+65); // A number with a positive sign. returns ["65"]
str3.match(null); // returns ["null"]
```

Dies kann unerwartete Ergebnisse haben, wenn Sonderzeichen nicht richtig maskiert werden.

```js
console.log("123".match("1.3")); // [ "123" ]
```

Dies ist eine Übereinstimmung, weil `.` in einem Regex jedes Zeichen matched. Um es nur mit einem Punkt-Zeichen übereinstimmen zu lassen, müssen Sie die Eingabe maskieren.

```js
console.log("123".match("1\\.3")); // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.match` in `core-js` mit Korrekturen und Implementierung moderner Verhaltensweisen wie `Symbol.match`-Unterstützung](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
