---
title: RegExp.prototype.unicode
short-title: unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die Accessor-Eigenschaft **`unicode`** von {{jsxref("RegExp")}}-Instanzen gibt an, ob für diesen regulären Ausdruck das Flag `u` verwendet wird.

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

`RegExp.prototype.unicode` hat den Wert `true`, wenn das Flag `u` verwendet wurde; andernfalls hat die Eigenschaft den Wert `false`. Das Flag `u` aktiviert verschiedene Unicode-bezogene Funktionen. Mit dem Flag „u“ gilt:

- [Unicode-Codepunkt-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) werden als solche interpretiert und nicht als Identity-Escapes. Beispielsweise findet `/\u{61}/u` eine Übereinstimmung mit `"a"`, während `/\u{61}/` (ohne das Flag `u`) eine Übereinstimmung mit `"u".repeat(61)` findet, da `\u` einem einzelnen `u` entspricht.
- [Puffergrenzen-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) (`\A`, `\z`, `\Z`) werden als solche interpretiert und nicht als Identity-Escapes.
- Surrogatpaare werden als vollständige Zeichen statt als zwei separate Zeichen interpretiert. Beispielsweise findet `/[😄]/u` eine Übereinstimmung mit `"😄"`, aber nicht mit `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch erhöht wird (etwa beim Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), erfolgt dies bei Unicode-regulären Ausdrücken nach Unicode-Codepunkten statt nach UTF-16-Codeeinheiten.

Es gibt weitere Änderungen am Parsing-Verhalten, die mögliche Syntaxfehler verhindern (vergleichbar mit dem [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) für die Syntax regulärer Ausdrücke). Diese Syntaxformen sind alle [veraltet und werden nur aus Gründen der Webkompatibilität beibehalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp). Sie sollten sich nicht auf sie verlassen.

Der Setter-Accessor von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus historischen Gründen gilt `RegExp.prototype.unicode === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Man würde erwarten, dass der Getter einen `TypeError` auslöst, wenn der Wert von `this` keine `RegExp`-Instanz ist.)

### Unicode-bewusster Modus

Mit _Unicode-bewusstem Modus_ ist gemeint, dass der reguläre Ausdruck entweder das Flag `u` oder das Flag [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) hat. In diesem Fall sind Unicode-bezogene Funktionen (wie [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) aktiviert, und es gelten deutlich strengere Syntaxregeln. Da `u` und `v` denselben regulären Ausdruck auf inkompatible Weise interpretieren, führt die gemeinsame Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ein regulärer Ausdruck ist entsprechend _nicht Unicode-bewusst_, wenn er weder das Flag `u` noch das Flag `v` hat. In diesem Fall wird er als Folge von UTF-16-Codeeinheiten interpretiert, und viele ältere Syntaxformen führen nicht zu Syntaxfehlern.

## Beispiele

### Die Eigenschaft `unicode` verwenden

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
