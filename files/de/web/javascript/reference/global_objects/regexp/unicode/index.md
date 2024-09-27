---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`unicode`** Accessor-Eigenschaft der {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `u`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}

## Beschreibung

`RegExp.prototype.unicode` hat den Wert `true`, wenn das `u`-Flag verwendet wurde; andernfalls `false`. Das `u`-Flag aktiviert verschiedene Unicode-bezogene Funktionen. Mit dem "u"-Flag:

- Beliebige [Unicode-Codepunkt-Fluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) (`\u{xxxx}`, `\p{UnicodePropertyValue}`) werden als solche und nicht als identische Fluchten interpretiert. Zum Beispiel `/\u{61}/u` entspricht `"a"`, aber `/\u{61}/` (ohne `u`-Flag) entspricht `"u".repeat(61)`, wobei `\u` einem einzelnen `u` entspricht.
- Surrogatpaare werden als ganze Zeichen statt als zwei separate Zeichen interpretiert. Zum Beispiel würde `/[😄]/u` nur `"😄"` entsprechen, aber nicht `"\ud83d"`.
- Wenn [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) automatisch erhöht wird (zum Beispiel beim Aufrufen von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)), werden Unicode-regexes durch Unicode-Codepunkte statt durch UTF-16-Codierungseinheiten erhöht.

Es gibt weitere Änderungen im Parsing-Verhalten, die mögliche Syntaxfehler verhindern (ähnlich wie der [strikte Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) für die Regex-Syntax). Diese Syntaxen sind alle [veraltet und werden nur aus Web-Kompatibilitätsgründen beibehalten](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Der Set-Accessor von `unicode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

### Unicode-sensitiver Modus

Wenn wir von einem _Unicode-sensitiven Modus_ sprechen, meinen wir, dass der Regex entweder das `u`- oder das [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flag hat, in welchem Fall der Regex Unicode-bezogene Funktionen (wie [Unicode-Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)) aktiviert und strengere Syntaxregeln hat. Da `u` und `v` denselben Regex auf inkompatible Weise interpretieren, führt die Verwendung beider Flags zu einem {{jsxref("SyntaxError")}}.

Ebenso ist ein Regex _Unicode-unempfindlich_, wenn er weder das `u`- noch das `v`-Flag hat. In diesem Fall wird der Regex als eine Folge von UTF-16-Codierungseinheiten interpretiert, und es gibt viele alte Syntaxen, die keine Syntaxfehler werden.

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
