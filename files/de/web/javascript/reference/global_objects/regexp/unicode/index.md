---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: e439cd79166dbfd9bbe3a003abaf5898ae165509
---

{{JSRef}}

Die **`unicode`** Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `u`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicode")}}

```js interactive-example
const regex1 = new RegExp("\\u{61}");
const regex2 = new RegExp("\\u{61}", "u");

console.log(regex1.unicode);
// Expected output: false

console.log(regex2.unicode);
// Expected output: true
```

## Beschreibung

`RegExp.prototype.unicode` hat den Wert `true`, wenn das `u`-Flag verwendet wurde; andernfalls `false`. Das `u`-Flag aktiviert verschiedene unicodebezogene Funktionen. Mit dem `u`-Flag:

- Beliebige [Unicode-Codepunkt-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) werden als solche interpretiert, anstatt als Identitäts-Escapes. Zum Beispiel: `/\u{61}/u` passt zu `"a"`, aber `/\u{61}/` (ohne `u`-Flag) passt zu `"u".repeat(61)`, wobei `\u` gleichbedeutend mit einem einzelnen `u` ist.
- Surrogatpaare werden als ganze Zeichen und nicht als zwei separate Zeichen interpretiert. Zum Beispiel würde `/[😄]/u` nur zu `"😄"` passen, aber nicht zu `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch vorgerückt wird (z. B. beim Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), rücken unicodebezogene reguläre Ausdrücke durch Unicode-Codepunkte statt durch UTF-16-Codeeinheiten vor.

Es gibt weitere Änderungen am Parserverhalten, die potenzielle Syntaxfehler verhindern (analog zum [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) für die Regex-Syntax). Diese Syntaxen sind alle [veraltet und werden nur aus Gründen der Web-Kompatibilität beibehalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht auf sie verlassen.

Der Setter von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

### Unicode-awareness-Modus

Wenn wir uns auf den _Unicode-awareness-Modus_ beziehen, meinen wir, dass der reguläre Ausdruck entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag enthält. In diesem Fall aktiviert der reguläre Ausdruck unicodebezogene Funktionen (wie [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) und hat viel strengere Syntaxregeln. Da `u` und `v` denselben regulären Ausdruck auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ebenso ist ein regulärer Ausdruck _Unicode-unaware_, wenn er weder das `u`- noch das `v`-Flag enthält. In diesem Fall wird der reguläre Ausdruck als Folge von UTF-16-Codeeinheiten interpretiert, und es gibt viele Legacy-Syntaxen, die keine Syntaxfehler darstellen.

## Beispiele

### Verwendung der unicode-Eigenschaft

```js
const regex = /\u{61}/u;

console.log(regex.unicode); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
