---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

Die **`unicode`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt an, ob das `u`-Flag bei diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.unicode` hat den Wert `true`, wenn das `u`-Flag verwendet wurde, ansonsten `false`. Das `u`-Flag aktiviert verschiedene Unicode-bezogene Funktionen. Mit dem "u"-Flag:

- Alle [Unicode-Codepunkt-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) werden als solche interpretiert, anstatt als Identitäts-Escapes. Zum Beispiel `/\u{61}/u` entspricht `"a"`, während `/\u{61}/` (ohne `u`-Flag) `"u".repeat(61)` entspricht, wobei `\u` einem einzelnen `u` entspricht.
- Surrogatpaare werden als ganze Zeichen interpretiert, anstatt als zwei separate Zeichen. Zum Beispiel würde `/[😄]/u` nur `"😄"` entsprechen, aber nicht `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch erhöht wird (wie beim Aufrufen von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), werden Unicode-RegExps nach Unicode-Codepunkten anstatt nach UTF-16-Codeeinheiten erhöht.

Es gibt weitere Änderungen am Analyseverhalten, die mögliche Syntaxfehler verhindern (ähnlich wie [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) für die RegEx-Syntax). Diese Syntaxen sind alle [deprecated und werden nur aus Webkompatibilitätsgründen beibehalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht auf sie verlassen.

Der Set-Accessor von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

### Unicode-bewusster Modus

Wenn wir uns auf einen _Unicode-bewussten Modus_ beziehen, meinen wir, dass der RegEx entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag hat, in welchem Fall der RegEx Unicode-bezogene Funktionen aktiviert (wie [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) und viel strengere Syntaxregeln hat. Da `u` und `v` denselben RegEx auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ähnlich ist ein RegEx _Unicode-unbewusst_, wenn er weder das `u`- noch das `v`-Flag hat. In diesem Fall wird der RegEx als eine Folge von UTF-16-Codeeinheiten interpretiert, und es gibt viele veraltete Syntaxen, die keine Syntaxfehler werden.

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
