---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`replaceAll()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem alle Vorkommen eines `pattern` durch einen `replacement` ersetzt wurden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und der `replacement` kann ein String oder eine Funktion sein, die für jedes Vorkommen aufgerufen wird. Der ursprüngliche String bleibt unverändert.

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

  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein – typischerweise ein [Regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der keine `Symbol.replace`-Methode besitzt, wird in einen String umgewandelt.

    Wenn `pattern` [ein Regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss er das globale (`g`)-Flag gesetzt haben, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann ein String oder eine Funktion sein. Der Ersatzwert hat dieselben Semantiken wie der von [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Ein neuer String, bei dem alle Vorkommen eines Musters durch einen Ersatzwert ersetzt wurden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `pattern` [ein Regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), der nicht das globale (`g`)-Flag gesetzt hat (dessen [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält kein `"g"`).

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Im Gegensatz zu [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ersetzt diese Methode alle Vorkommen eines Strings, nicht nur das erste. Es ist zwar auch möglich, `replace()` mit einem dynamisch konstruierten globalen Regulären Ausdruck mithilfe von [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) zu verwenden, um alle Instanzen eines Strings zu ersetzen, dies kann jedoch unbeabsichtigte Konsequenzen haben, wenn der String Sonderzeichen enthält, die in regulären Ausdrücken eine Bedeutung haben (was passieren kann, wenn der Ersatz-String aus Benutzereingaben stammt). Während dies durch die Verwendung von {{jsxref("RegExp.escape()")}} zur Umwandlung des regulären Ausdrucksstrings in ein wörtliches Muster entschärft werden kann, ist es besser, einfach `replaceAll()` zu verwenden und den String ohne Umwandlung in einen Regulären Ausdruck zu übergeben.

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

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Der Rückgabewert wird zum Rückgabewert von `replaceAll()`. In diesem Fall wird das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()`-Methode definiert und hat daher dasselbe Ergebnis wie `replace()` (abgesehen von der zusätzlichen Eingabevalidierung, dass der Reguläre Ausdruck global ist).

Wenn das `pattern` ein leerer String ist, wird der Ersatzwert zwischen jede UTF-16-Codeeinheit eingefügt, ähnlich wie das Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

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

### Nicht-globale Regex löst Fehler aus

Bei der Verwendung eines Regulären Ausdrucks als Suchwert muss dieser global sein. Dies funktioniert nicht:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

Das funktioniert:

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
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
