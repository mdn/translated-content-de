---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`unicode`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `u`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}

## Beschreibung

`RegExp.prototype.unicode` hat den Wert `true`, wenn das `u`-Flag verwendet wurde; andernfalls `false`. Das `u`-Flag aktiviert verschiedene Funktionen im Zusammenhang mit Unicode. Mit dem "u"-Flag:

- Jedes [Unicode-Codepunkt-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) wird als solches interpretiert, anstatt als Identitäts-Escape. Zum Beispiel `/\u{61}/u` erfasst `"a"`, aber `/\u{61}/` (ohne `u`-Flag) erfasst `"u".repeat(61)`, wobei das `\u` einem einzelnen `u` entspricht.
- Surrogatpaare werden als ganze Zeichen interpretiert, anstatt als zwei separate Zeichen. Zum Beispiel würde `/[😄]/u` nur `"😄"` erfassen, aber nicht `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch weitergeschaltet wird (wie beim Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), werden Unicode-Reguläre Ausdrücke nach Unicode-Codepunkten anstelle von UTF-16-Codeeinheiten weitergeschaltet.

Es gibt weitere Änderungen im Parsing-Verhalten, die mögliche Syntaxfehler verhindern (analog zu [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) für Regex-Syntax). Diese Syntaxen sind alle [veraltet und werden nur für die Webkompatibilität beibehalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Der Set-Accessor von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

### Unicode-basierter Modus

Wenn wir uns auf den _Unicode-basierten Modus_ beziehen, meinen wir, dass der reguläre Ausdruck entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flag hat, in welchem Fall der reguläre Ausdruck Unicode-bezogene Features aktiviert (wie z.B. [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) und viel strengere Syntaxregeln hat. Da `u` und `v` denselben regulären Ausdruck auf inkompatible Weisen interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ebenso ist ein regulärer Ausdruck _Unicode-unbewusst_, wenn er weder das `u`- noch das `v`-Flag hat. In diesem Fall wird der reguläre Ausdruck als eine Sequenz von UTF-16-Codeeinheiten interpretiert, und es gibt viele veraltete Syntaxen, die nicht zu Syntaxfehlern werden.

## Beispiele

### Die unicode-Eigenschaft verwenden

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
