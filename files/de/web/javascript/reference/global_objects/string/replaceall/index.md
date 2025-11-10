---
title: String.prototype.replaceAll()
short-title: replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

Die Methode **`replaceAll()`** von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem alle Vorkommen eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jedes Vorkommen aufgerufen wird. Der ursprüngliche String bleibt unverändert.

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
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht über die `Symbol.replace` Methode verfügt, wird in einen String umgewandelt.

    Falls `pattern` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss dieser das globale (`g`) Flag gesetzt haben, oder es wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann ein String oder eine Funktion sein. Das Ersatzverhalten hat die gleichen Semantiken wie bei [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Ein neuer String, bei dem alle Vorkommen eines Musters durch eine Ersetzung ersetzt wurden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `pattern` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), der nicht das globale (`g`) Flag gesetzt hat (dessen [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) Eigenschaft enthält kein `"g"`).

## Beschreibung

Diese Methode verändert nicht den String-Wert, auf den sie angewendet wird. Sie gibt einen neuen String zurück.

Im Gegensatz zu [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ersetzt diese Methode alle Vorkommen eines Strings, nicht nur das erste. Obwohl es auch möglich ist, `replace()` mit einem dynamisch erzeugten globalen regulären Ausdruck mit [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) zu verwenden, um alle Instanzen eines Strings zu ersetzen, kann dies unbeabsichtigte Folgen haben, wenn der String Sonderzeichen enthält, die in regulären Ausdrücken eine Bedeutung haben (was passieren kann, wenn der Ersetzungsstring von Benutzereingaben stammt). Während Sie diesen Fall durch die Verwendung von {{jsxref("RegExp.escape()")}} entschärfen können, um die reguläre Ausdruckzeichenkette in ein literal pattern umzuwandeln, ist es einfacher, den String direkt an `replaceAll()` zu übergeben, ohne ihn in einen regulären Ausdruck umzuwandeln.

<!-- cSpell:ignore acke -->

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function semiSafeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}
function superSafeRedactName(text, name) {
  // only match at word boundaries
  return text.replaceAll(
    new RegExp(`\\b${RegExp.escape(name)}\\b`, "g"),
    "[REDACTED]",
  );
}

let report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(semiSafeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."

report = "A hacker called acke breached the system.";

console.log(semiSafeRedactName(report, "acke")); // "A h[REDACTED]r called [REDACTED] breached the system."
console.log(superSafeRedactName(report, "acke")); // "A hacker called [REDACTED] breached the system."
```

Wenn das `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) Methode ist (einschließlich `RegExp` Objekten), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Der Rückgabewert wird der Rückgabewert von `replaceAll()`. In diesem Fall wird das Verhalten von `replaceAll()` vollständig von der `[Symbol.replace]()` Methode kodiert und hat somit das gleiche Ergebnis wie `replace()` (abgesehen von der zusätzlichen Eingabevalidierung, dass der reguläre Ausdruck global ist).

Wenn das `pattern` ein leerer String ist, wird das Ersatzmuster zwischen jedem UTF-16-Code-Einheit eingefügt, ähnlich dem Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Weitere Informationen darüber, wie Regex-Eigenschaften (insbesondere das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flag) mit `replaceAll()` interagieren, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Beispiele

### Verwendung von replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Nicht-globale Regex wirft einen Fehler

Bei der Verwendung eines regulären Ausdrucks als Suchwert muss dieser global sein. Das wird nicht funktionieren:

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
- [Regular Expressions](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
