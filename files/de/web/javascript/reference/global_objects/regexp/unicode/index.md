---
title: RegExp.prototype.unicode
short-title: unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`unicode`** Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `u`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

- Alle [Unicode-Codepunkt-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) werden als solche interpretiert statt als Identitäts-Escapes. Zum Beispiel `/\u{61}/u` entspricht `"a"`, aber `/\u{61}/` (ohne `u`-Flag) entspricht `"u".repeat(61)`, wobei `\u` einem einzelnen `u` entspricht.
- Surrogatpaare werden als ganze Zeichen statt als zwei separate Zeichen interpretiert. Zum Beispiel würde `/[😄]/u` nur `"😄"` entsprechen, aber nicht `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch weitergesetzt wird (wie beim Aufrufen von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), werden Unicode-RegExps nach Unicode-Codepunkten und nicht nach UTF-16-Codeeinheiten vorgerückt.

Es gibt andere Änderungen im Parsing-Verhalten, die mögliche Syntaxfehler verhindern (analog zu [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) für Regex-Syntax). Diese Syntaxen sind alle [veraltet und werden nur für Webkompatibilität beibehalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht auf sie verlassen.

Der set-Accessor von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

### Unicode-bewusster Modus

Wenn wir von _Unicode-bewusstem Modus_ sprechen, meinen wir, dass der Regex entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag hat, in welchem Fall der Regex Unicode-bezogene Funktionen aktiviert (wie [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) und viel strengere Syntaxregeln hat. Da `u` und `v` denselben Regex auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ähnlich ist ein Regex _Unicode-unabhängig_, wenn er weder das `u`- noch das `v`-Flag hat. In diesem Fall wird der Regex als eine Folge von UTF-16-Codeeinheiten interpretiert, und es gibt viele alte Syntaxen, die keine Syntaxfehler werden.

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
