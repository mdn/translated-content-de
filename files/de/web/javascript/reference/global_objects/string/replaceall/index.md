---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`replaceAll()`** Methode von {{jsxref("String")}}-Werten gibt einen neuen Zeichenfolgenwert zurück, bei dem alle Übereinstimmungen eines `patterns` durch einen `Ersatz` ersetzt werden. Das `pattern` kann eine Zeichenfolge oder ein {{jsxref("RegExp")}} sein, und der `Ersatz` kann eine Zeichenfolge oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Die ursprüngliche Zeichenfolge bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.replaceAll()")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"
```

## Syntax

```js-nolint
replaceAll(pattern, replacement)
```

### Parameter

- `pattern`

  - : Kann eine Zeichenfolge oder ein Objekt sein, das eine [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode besitzt — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der die `Symbol.replace`-Methode nicht besitzt, wird in eine Zeichenfolge umgewandelt.

    Wenn `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss es das globale (`g`)-Flag haben, ansonsten wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann eine Zeichenfolge oder eine Funktion sein. Der Ersatz hat die gleichen Semantiken wie die von [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Eine neue Zeichenfolge, bei der alle Übereinstimmungen eines Musters durch einen Ersatz ersetzt werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), das nicht das globale (`g`)-Flag gesetzt hat (seine [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält kein `"g"`).

## Beschreibung

Diese Methode verändert nicht den Wert der Zeichenfolge, auf der sie aufgerufen wird. Sie gibt eine neue Zeichenfolge zurück.

Im Gegensatz zu [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ersetzt diese Methode alle Vorkommen einer Zeichenfolge und nicht nur das erste. Während es auch möglich ist, `replace()` mit einem dynamisch erstellten globalen Regex mit [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) zu verwenden, um alle Instanzen einer Zeichenfolge zu ersetzen, kann dies unbeabsichtigte Folgen haben, wenn die Zeichenfolge Sonderzeichen enthält, die in regulären Ausdrücken eine Bedeutung haben (was passieren kann, wenn die Ersatzzeichenfolge von Benutzereingaben stammt). Obwohl dieser Fall durch die Verwendung von {{jsxref("RegExp.escape()")}} gemildert werden kann, um die reguläre Ausdruckszeichenfolge in ein Textmuster zu verwandeln, ist es besser, einfach `replaceAll()` zu verwenden und die Zeichenfolge ohne Umwandlung in ein Regex zu übergeben.

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

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode (einschließlich `RegExp`-Objekten) ist, wird diese Methode mit der Zielzeichenfolge und dem `replacement` als Argumente aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replaceAll()`. In diesem Fall ist das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()`-Methode kodiert und hat daher dasselbe Ergebnis wie `replace()` (abgesehen von der zusätzlichen Eingabeüberprüfung, dass der Regex global ist).

Wenn das `pattern` eine leere Zeichenfolge ist, wird der Ersatz zwischen jedem UTF-16-Codeeinheit eingefügt, ähnlich wie das Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replaceAll()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Beispiele

### Verwendung von replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Nicht-globaler Regex löst Fehler aus

Bei Verwendung eines Suchwerts, der ein regulärer Ausdruck ist, muss er global sein. Dies funktioniert nicht:

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
