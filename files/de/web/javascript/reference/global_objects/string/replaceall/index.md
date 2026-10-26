---
title: String.prototype.replaceAll()
short-title: replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`replaceAll()`** von {{jsxref("String")}}-Werten gibt einen neuen String zurück, in dem alle Übereinstimmungen mit einem `pattern` durch einen `replacement` ersetzt wurden. `pattern` kann ein String oder ein {{jsxref("RegExp")}} sein. `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Der ursprüngliche String bleibt unverändert.

{{InteractiveExample("JavaScript Demo: String.prototype.replaceAll()")}}

```js interactive-example
const paragraph = "This dog's name is just Dog! Yes, that is the name.";

console.log(paragraph.replaceAll("name", "nickname"));
// Expected output: "This dog's nickname is just Dog! Yes, that is the nickname."

console.log(paragraph.replaceAll(/\bis\b/g, "was"));
// Expected output: "This dog's name was just Dog! Yes, that was the name."
```

## Syntax

```js-nolint
replaceAll(pattern, replacement)
```

### Parameter

- `pattern`
  - : Kann ein String oder ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode sein – ein typisches Beispiel ist ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Jeder Wert ohne `Symbol.replace`-Methode wird in einen String umgewandelt.

    Wenn `pattern` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), muss das globale Flag (`g`) gesetzt sein. Andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

- `replacement`
  - : Kann ein String oder eine Funktion sein. Für den Ersatz gelten dieselben Regeln wie bei [`String.prototype.replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Rückgabewert

Ein neuer String, in dem alle Übereinstimmungen mit dem Suchmuster durch den Ersatz ersetzt wurden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `pattern` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes), bei dem das globale Flag (`g`) nicht gesetzt ist (dessen Eigenschaft [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) also kein `"g"` enthält).

## Beschreibung

Diese Methode verändert den String-Wert, auf dem sie aufgerufen wird, nicht. Sie gibt einen neuen String zurück.

Anders als [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ersetzt diese Methode alle Vorkommen eines Strings, nicht nur das erste. Es ist zwar auch möglich, mit `replace()` und einem dynamisch durch [`RegExp()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) erzeugten globalen regulären Ausdruck alle Vorkommen eines Strings zu ersetzen. Das kann jedoch unbeabsichtigte Folgen haben, wenn der String Sonderzeichen enthält, die in regulären Ausdrücken eine Bedeutung haben (was beispielsweise vorkommen kann, wenn der zu ersetzende String aus einer Benutzereingabe stammt). Sie können dies vermeiden, indem Sie {{jsxref("RegExp.escape()")}} verwenden, um aus dem String ein literales Suchmuster für den regulären Ausdruck zu erzeugen. Einfacher ist es jedoch, den String direkt an `replaceAll()` zu übergeben, ohne ihn in einen regulären Ausdruck umzuwandeln.

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

Wenn `pattern` ein Objekt mit einer [`Symbol.replace`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)-Methode ist (einschließlich `RegExp`-Objekten), wird diese Methode mit dem Ziel-String und `replacement` als Argumenten aufgerufen. Ihr Rückgabewert wird zum Rückgabewert von `replaceAll()`. In diesem Fall wird das Verhalten von `replaceAll()` vollständig durch die `[Symbol.replace]()`-Methode bestimmt. Das Ergebnis ist daher dasselbe wie bei `replace()` (abgesehen von der zusätzlichen Prüfung, ob der reguläre Ausdruck global ist).

Wenn `pattern` ein leerer String ist, wird der Ersatz zwischen allen UTF-16-Codeeinheiten eingefügt, ähnlich dem Verhalten von [`split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Weitere Informationen dazu, wie die Eigenschaften regulärer Ausdrücke (insbesondere das [sticky-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)) mit `replaceAll()` zusammenwirken, finden Sie unter [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Beispiele

### replaceAll() verwenden

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Nicht globale reguläre Ausdrücke lösen einen Fehler aus

Wenn Sie einen regulären Ausdruck als Suchwert verwenden, muss er global sein. Folgendes funktioniert nicht:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

Folgendes funktioniert:

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.replaceAll` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.replaceAll` von es-shims](https://www.npmjs.com/package/string.prototype.replaceall)
- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
