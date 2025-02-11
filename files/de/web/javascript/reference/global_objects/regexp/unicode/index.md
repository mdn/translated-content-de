---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Zugriffseigenschaft **`unicode`** von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `u`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicode", "taller")}}

```js interactive-example
const regex1 = new RegExp("\u{61}");
const regex2 = new RegExp("\u{61}", "u");

console.log(regex1.unicode);
// Expected output: false

console.log(regex2.unicode);
// Expected output: true

console.log(regex1.source);
// Expected output: "a"

console.log(regex2.source);
// Expected output: "a"
```

## Beschreibung

`RegExp.prototype.unicode` hat den Wert `true`, wenn das `u`-Flag verwendet wurde; andernfalls `false`. Das `u`-Flag aktiviert verschiedene Unicode-bezogene Funktionen. Mit dem `u`-Flag:

- Jede [Unicode-Codepunkt-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) wird als solche interpretiert, anstatt als Identitäts-Escape. Zum Beispiel wird `/\u{61}/u` als `"a"` interpretiert, während `/\u{61}/` (ohne `u`-Flag) `"u".repeat(61)` entspricht, wobei `\u` einem einzelnen `u` entspricht.
- Surrogat-Paare werden als ganze Zeichen interpretiert, anstatt als zwei separate. Zum Beispiel würde `/[😄]/u` nur `"😄"` treffen, aber nicht `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch vorangetrieben wird (z. B. bei einem Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), werden Unicode-RegExps um Unicode-Codepunkte anstelle von UTF-16-Code-Einheiten verschoben.

Es gibt weitere Änderungen im Parsing-Verhalten, die mögliche Syntaxfehler verhindern (ähnlich wie im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) für RegExp-Syntax). Diese Syntaxen sind alle [veraltet und nur aus Kompatibilitätsgründen erhalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und sie sollten nicht verwendet werden.

Der Setter von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

### Unicode-Modus

Wenn wir vom _Unicode-Modus_ sprechen, meinen wir, dass der reguläre Ausdruck entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag besitzt. In diesem Fall aktiviert der RegExp Unicode-bezogene Funktionen (wie [Unicode-Zeichenklassenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) und hat wesentlich strengere Syntaxregeln. Da `u` und `v` denselben RegExp auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ebenso ist ein RegExp _nicht Unicode-bewusst_, wenn er weder das `u`- noch das `v`-Flag besitzt. In diesem Fall wird der RegExp als Sequenz von UTF-16-Code-Einheiten interpretiert, und es gibt viele veraltete Syntaxen, die nicht zu Syntaxfehlern werden.

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
