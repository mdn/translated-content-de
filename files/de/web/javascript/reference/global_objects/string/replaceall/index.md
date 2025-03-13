---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`replaceAll()`** Methode von {{jsxref("String")}}-Werten gibt einen neuen Zeichenfolgenwert zurück, bei dem alle Vorkommen eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann eine Zeichenkette oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann eine Zeichenkette oder eine Funktion sein, die für jedes Vorkommen aufgerufen wird. Die ursprüngliche Zeichenfolge bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.prototype.replaceAll()")}}

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

  - : Kann eine Zeichenkette oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht über die `Symbol.replace` Methode verfügt, wird in eine Zeichenkette umgewandelt.

    Wenn `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), dann muss es das globale (`g`)-Flag gesetzt haben, oder ein {{jsxref("TypeError")}} wird ausgelöst.

- `replacement`
  - : Kann eine Zeichenkette oder eine Funktion sein. Das `replacement` hat dieselbe Semantik wie das von [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Eine neue Zeichenfolge, bei der alle Vorkommen eines Musters durch eine Ersetzung ersetzt werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), das nicht das globale (`g`)-Flag gesetzt hat (seine [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält kein `"g"`).

## Beschreibung

Diese Methode verändert nicht den Zeichenfolgenwert, auf dem sie aufgerufen wird. Sie gibt eine neue Zeichenfolge zurück.

Im Gegensatz zur [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) Methode ersetzt diese Methode alle Vorkommen einer Zeichenkette, nicht nur das erste. Obwohl es auch möglich ist, `replace()` mit einem dynamisch konstruierten globalen Regex mit [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) zu verwenden, um alle Instanzen einer Zeichenkette zu ersetzen, kann dies unbeabsichtigte Folgen haben, wenn die Zeichenkette Sonderzeichen enthält, die in regulären Ausdrücken eine Bedeutung haben (was passieren kann, wenn die Ersatzzeichenkette aus Benutzereingaben stammt). Während Sie diesen Fall mit {{jsxref("RegExp.escape()")}} abmildern können, um die reguläre Ausdruckszeichenkette in ein literales Muster zu verwandeln, ist es besser, einfach `replaceAll()` zu verwenden und die Zeichenkette ohne Umwandlung in ein Regex zu übergeben.

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

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit der Zielzeichenkette und `replacement` als Argumente aufgerufen. Der Rückgabewert wird der Rückgabewert von `replaceAll()`. In diesem Fall wird das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()` Methode kodiert und hat daher das gleiche Ergebnis wie `replace()` (abgesehen von der zusätzlichen Eingabevalidierung, dass der Regex global ist).

Wenn das `pattern` eine leere Zeichenkette ist, wird die Ersetzung zwischen jedem UTF-16-Codezeichen eingefügt, ähnlich wie das Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Für weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replaceAll()` interagieren, siehe [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Beispiele

### Verwendung von replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Nicht-globale Regex-Würfe

Bei der Verwendung eines regulären Ausdruckssuchwerts muss dieser global sein. Dies wird nicht funktionieren:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

Dies wird funktionieren:

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
- [es-shims polyfill von `String.prototype.replaceAll`](https://www.npmjs.com/package/string.prototype.replaceall)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
