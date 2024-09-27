---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`replaceAll()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem alle Übereinstimmungen eines `pattern` durch einen `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Der Original-String bleibt unverändert.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## Syntax

```js-nolint
replaceAll(pattern, replacement)
```

### Parameter

- `pattern`

  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein - das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht die `Symbol.replace`-Methode hat, wird in einen String umgewandelt.

    Wenn `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss es das globale (`g`)-Flag gesetzt haben, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann ein String oder eine Funktion sein. Der `replacement` hat die gleiche Semantik wie die von [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Ein neuer String, in dem alle Übereinstimmungen eines Musters durch eine Ersetzung ersetzt wurden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn das `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), das nicht das globale (`g`)-Flag gesetzt hat (seine [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält kein `"g"`).

## Beschreibung

Diese Methode verändert den aufgerufenen String-Wert nicht. Sie gibt einen neuen String zurück.

Im Gegensatz zu [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ersetzt diese Methode alle Vorkommen eines Strings, nicht nur das erste. Dies ist besonders nützlich, wenn der String nicht statisch bekannt ist, da das Aufrufen des [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktors ohne Escape von Sonderzeichen möglicherweise unbeabsichtigt seine Semantik ändert.

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

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und dem `replacement` als Argumente aufgerufen. Sein Rückgabewert wird der Rückgabewert von `replaceAll()`. In diesem Fall ist das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()`-Methode kodiert und hat daher das gleiche Ergebnis wie `replace()` (abgesehen von der zusätzlichen Eingabevalidierung, dass der Regex global ist).

Wenn das `pattern` ein leerer String ist, wird die Ersetzung zwischen jede UTF-16-Codeeinheit eingefügt, ähnlich dem Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

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

### Nicht-globaler Regex wirft Fehler

Wenn ein regulärer Ausdruck als Suchwert verwendet wird, muss er global sein. Das wird nicht funktionieren:

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
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
