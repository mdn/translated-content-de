---
title: RegExp.prototype.unicode
short-title: unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`unicode`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt an, ob das `u`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicode")}}

```js interactive-example
const regex1 = /\u{61}/;
const regex2 = /\u{61}/u;

console.log(regex1.unicode);
// Expected output: false

console.log(regex2.unicode);
// Expected output: true
```

## Beschreibung

`RegExp.prototype.unicode` hat den Wert `true`, wenn das `u`-Flag verwendet wurde; andernfalls `false`. Das `u`-Flag aktiviert verschiedene Unicode-bezogene Funktionen. Mit dem "u"-Flag:

- Alle [Unicode Codepoint Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) werden als solche und nicht als Identitäts-Escapes interpretiert. Zum Beispiel `/\u{61}/u` passt auf `"a"`, aber `/\u{61}/` (ohne `u`-Flag) passt auf `"u".repeat(61)`, wobei das `\u` einem einzelnen `u` entspricht.
- Surrogat-Paare werden als ganze Zeichen interpretiert, anstatt als zwei separate Zeichen. Zum Beispiel würde `/[😄]/u` nur auf `"😄"` passen, aber nicht auf `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch erhöht wird (z.B. beim Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), schreiten Unicode-Reguläre Ausdrücke nach Unicode-Codepunkten voran anstatt nach UTF-16 Code-Einheiten.

Es gibt weitere Änderungen im Parsing-Verhalten, die mögliche Syntaxfehler verhindern (die analog zum [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) für Regex-Syntax sind). Diese Syntaxen sind alle [veraltet und nur aus Web-Kompatibilitätsgründen erhalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht auf sie verlassen.

Der Set-Accessor von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

### Unicode-bewusster Modus

Wenn wir vom _Unicode-bewussten Modus_ sprechen, meinen wir, dass der Regex entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag hat, in welchem Fall der Regex Unicode-bezogene Funktionen (wie [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) aktiviert und wesentlich strengere Syntaxregeln hat. Da `u` und `v` denselben Regex auf inkompatible Weisen interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ähnlich ist ein Regex _Unicode-unbewusst_, wenn er weder das `u`- noch das `v`-Flag hat. In diesem Fall wird der Regex als eine Sequenz von UTF-16 Code-Einheiten interpretiert, und es gibt viele veraltete Syntaxen, die nicht zu Syntaxfehlern führen.

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
