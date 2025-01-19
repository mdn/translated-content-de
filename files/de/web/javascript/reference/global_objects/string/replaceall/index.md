---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 7d09807ed7594cf5c7b93afc1fa0424a26663b9b
---

{{JSRef}}

Die **`replaceAll()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem alle Übereinstimmungen eines `pattern` durch einen `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und der `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Der ursprüngliche String bleibt unverändert.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## Syntax

```js-nolint
replaceAll(pattern, replacement)
```

### Parameter

- `pattern`

  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht über die `Symbol.replace`-Methode verfügt, wird in einen String umgewandelt.

    Wenn `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), dann muss es das globale (`g`) Flag gesetzt haben, ansonsten wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann ein String oder eine Funktion sein. Der Ersatz hat dieselbe Semantik wie der von [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Ein neuer String, bei dem alle Übereinstimmungen eines Musters durch einen Ersatz ersetzt wurden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das `pattern` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), das nicht das globale (`g`) Flag gesetzt hat (die [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält kein `"g"`).

## Beschreibung

Diese Methode verändert den String-Wert, auf den sie angewendet wird, nicht. Sie gibt einen neuen String zurück.

Im Gegensatz zu [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ersetzt diese Methode alle Vorkommen eines Strings, nicht nur das erste. Während es auch möglich ist, `replace()` mit einem dynamisch konstruierten globalen Regex über [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) zu verwenden, um alle Instanzen eines Strings zu ersetzen, kann dies unbeabsichtigte Folgen haben, wenn der String Sonderzeichen enthält, die in regulären Ausdrücken eine Bedeutung haben (was passieren könnte, wenn der Ersatzstring aus Benutzereingaben kommt). Während Sie diesen Fall mit {{jsxref("RegExp.escape()")}} mildern können, um den regulären Ausdruck zu einem literalen Muster zu machen, ist es besser, einfach `replaceAll()` zu verwenden und den String zu übergeben, ohne ihn in ein Regex umzuwandeln.

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

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Zielstring und dem `replacement` als Argumenten aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replaceAll()`. In diesem Fall wird das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()`-Methode bestimmt und wird daher dasselbe Ergebnis wie `replace()` haben (abgesehen von der zusätzlichen Eingabevalidierung, dass das Regex global ist).

Wenn das `pattern` ein leerer String ist, wird der Ersatz zwischen jede UTF-16-Code-Einheit eingefügt, ähnlich dem Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

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

### Nicht-globales Regex wirft einen Fehler

Bei Verwendung eines regulären Ausdrucks als Suchwert muss dieser global sein. Das hier wird nicht funktionieren:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

Das hier wird funktionieren:

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
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
