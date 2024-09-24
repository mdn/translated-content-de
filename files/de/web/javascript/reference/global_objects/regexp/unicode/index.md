---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`unicode`** Zugriffsproperty von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `u`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}

## Beschreibung

`RegExp.prototype.unicode` hat den Wert `true`, wenn das `u`-Flag verwendet wurde; andernfalls `false`. Das `u`-Flag ermöglicht verschiedene Unicode-bezogene Funktionen. Mit dem "u"-Flag:

- Jede [Unicode-Codepunkt-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) wird als solche interpretiert anstatt als Identitäts-Escape. Beispielsweise `/\u{61}/u` entspricht `"a"`, aber `/\u{61}/` (ohne `u`-Flag) entspricht `"u".repeat(61)`, wobei `\u` einem einzelnen `u` entspricht.
- Surrogat-Paare werden als ganze Zeichen und nicht als zwei getrennte Zeichen interpretiert. Zum Beispiel würde `/[😄]/u` nur `"😄"` entsprechen, aber nicht `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch erhöht wird (zum Beispiel beim Aufruf von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), rücken Unicode-Reguläre Ausdrücke um Unicode-Codepunkte vor, anstatt um UTF-16-Einheiten.

Es gibt weitere Änderungen im Parsing-Verhalten, die mögliche Syntaxfehler verhindern (ähnlich wie [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) für Regex-Syntax). Diese Syntaxen sind alle [veraltet und werden nur aus Kompatibilitätsgründen beibehalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Der Set-Zugriff von `unicode` ist `undefined`. Sie können diese Property nicht direkt ändern.

### Unicode-aware mode

Wenn wir uns auf den _Unicode-aware mode_ beziehen, bedeutet das, dass der Regex entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) -Flag hat, in welchem Fall der Regex Unicode-bezogene Funktionen (wie [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) aktiviert und viel strengere Syntaxregeln hat. Da `u` und `v` denselben Regex auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ebenso ist ein Regex _Unicode-unaware_, wenn er weder das `u`- noch das `v`-Flag hat. In diesem Fall wird der Regex als eine Folge von UTF-16-Codeeinheiten interpretiert, und es gibt viele Legacy-Syntaxen, die nicht zu Syntaxfehlern werden.

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
