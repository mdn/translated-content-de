---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`replaceAll()`**-Methode von {{jsxref("String")}}-Werten gibt einen neuen String zurück, bei dem alle Übereinstimmungen eines `pattern` durch ein `replacement` ersetzt werden. Das `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Der ursprüngliche String bleibt unverändert.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## Syntax

```js-nolint
replaceAll(pattern, replacement)
```

### Parameter

- `pattern`

  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein — das typische Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert, der nicht über die `Symbol.replace`-Methode verfügt, wird in einen String umgewandelt.

    Wenn `pattern` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss dieser das globale (`g`) Flag gesetzt haben, sonst wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann ein String oder eine Funktion sein. Das Replacement hat die gleichen Semantiken wie die von [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Ein neuer String, bei dem alle Übereinstimmungen eines Musters durch ein Replacement ersetzt wurden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn das `pattern` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), der nicht das globale (`g`) Flag gesetzt hat (dessen [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaft enthält nicht `"g"`).

## Beschreibung

Diese Methode verändert nicht den String-Wert, auf dem sie aufgerufen wird. Sie gibt einen neuen String zurück.

Im Gegensatz zu [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) würde diese Methode alle Vorkommen eines Strings ersetzen, nicht nur das erste. Das ist besonders nützlich, wenn der String nicht statisch bekannt ist, da das Aufrufen des [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)-Konstruktors ohne Escape-Zeichen für Sonderzeichen unbeabsichtigt seine Semantiken ändern könnte.

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

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekte), wird diese Methode mit dem Zielstring und `replacement` als Argumente aufgerufen. Der Rückgabewert wird der Rückgabewert von `replaceAll()`. In diesem Fall ist das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()`-Methode kodiert und daher wird es das gleiche Ergebnis wie `replace()` haben (abgesehen von der zusätzlichen Eingabevalidierung, dass der Regex global ist).

Wenn das `pattern` ein leerer String ist, wird das Replacement zwischen jede UTF-16-Codeeinheit eingefügt, ähnlich wie das Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Für mehr Informationen darüber, wie Regex-Eigenschaften (besonders das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag) mit `replaceAll()` interagieren, sehen Sie [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Beispiele

### Verwendung von replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Nicht-globaler Regex wirft eine Ausnahme

Bei der Verwendung eines regularen Ausdruck-Suchwertes muss dieser global sein. Das wird nicht funktionieren:

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
