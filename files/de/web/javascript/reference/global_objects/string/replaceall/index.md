---
title: String.prototype.replaceAll()
short-title: replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`replaceAll()`** Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem alle Übereinstimmungen eines `pattern` durch eine `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Der ursprüngliche String bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.prototype.replaceAll()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /dog/gi;
console.log(paragraph.replaceAll(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"
```

## Syntax

```js-nolint
replaceAll(pattern, replacement)
```

### Parameter

- `pattern`

  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace`-Methode nicht hat, wird in einen String umgewandelt.

    Wenn `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss es das globale (`g`) Flag gesetzt haben, oder es wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann ein String oder eine Funktion sein. Das Replacement hat die gleichen Semantiken wie bei [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Ein neuer String, bei dem alle Vorkommen eines Musters durch ein Replacement ersetzt werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), das nicht das globale (`g`) Flag gesetzt hat (dessen [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält nicht `"g"`).

## Beschreibung

Diese Methode ändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Im Gegensatz zu [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace), ersetzt diese Methode alle Vorkommen eines Strings, nicht nur das erste. Während es auch möglich ist, `replace()` mit einem globalen regulären Ausdruck, der dynamisch mit [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) konstruiert wurde, zu verwenden, um alle Instanzen eines Strings zu ersetzen, kann dies unerwünschte Konsequenzen haben, wenn der String Sonderzeichen enthält, die eine Bedeutung in regulären Ausdrücken haben (was passieren kann, wenn der Replacement-String aus Benutzereingaben kommt). Während Sie diesen Fall mit {{jsxref("RegExp.escape()")}} mildern können, indem Sie den regulären Ausdruck als Literal-Muster behandeln, ist es besser, `replaceAll()` zu verwenden und den String zu übergeben, ohne ihn in einen regulären Ausdruck zu konvertieren.

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}

const report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(safeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."
```

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird der Rückgabewert von `replaceAll()`. In diesem Fall ist das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()` Methode kodiert und hat daher das gleiche Ergebnis wie `replace()` (abgesehen von der zusätzlichen Eingabevalidierung, dass das Regex global ist).

Wenn das `pattern` ein leerer String ist, wird das Replacement zwischen jedem UTF-16 Code-Einheit eingefügt, ähnlich dem Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replaceAll()` interagieren, finden Sie in [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Beispiele

### Verwendung von replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Nicht-globales Regex wirft Fehler

Bei Verwendung eines regulären Ausdrucks als Suchwert muss dieser global sein. Das funktioniert nicht:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

Das wird funktionieren:

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.replaceAll` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.replaceAll`](https://www.npmjs.com/package/string.prototype.replaceall)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
