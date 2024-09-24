---
title: "TypeError: matchAll/replaceAll muss mit einem globalen RegExp aufgerufen werden"
slug: Web/JavaScript/Reference/Errors/Requires_global_RegExp
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "TypeError: matchAll/replaceAll muss mit einem globalen RegExp aufgerufen werden" tritt auf, wenn die Methode {{jsxref("String.prototype.matchAll()")}} oder {{jsxref("String.prototype.replaceAll()")}} mit einem {{jsxref("RegExp")}}-Objekt verwendet wird, das nicht das {{jsxref("RegExp/global", "global")}}-Flag gesetzt hat.

## Nachricht

```plain
TypeError: String.prototype.matchAll called with a non-global RegExp argument (V8-based)
TypeError: String.prototype.replaceAll called with a non-global RegExp argument (V8-based)
TypeError: matchAll must be called with a global RegExp (Firefox)
TypeError: replaceAll must be called with a global RegExp (Firefox)
TypeError: String.prototype.matchAll argument must not be a non-global regular expression (Safari)
TypeError: String.prototype.replaceAll argument must not be a non-global regular expression (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Die Methoden {{jsxref("String.prototype.matchAll()")}} und {{jsxref("String.prototype.replaceAll()")}} erfordern ein {{jsxref("RegExp")}}-Objekt mit dem {{jsxref("RegExp/global", "global")}}-Flag. Dieses Flag zeigt an, dass der reguläre Ausdruck alle Vorkommen der Eingabezeichenfolge finden kann, anstatt beim ersten Treffer zu stoppen. Obwohl das `g`-Flag redundant ist, wenn diese Methoden verwendet werden (da diese Methoden immer einen globalen Ersatz durchführen), werden sie dennoch benötigt, um die Absicht klar zu machen.

Es ist zu beachten, dass die `g`-Flag-Validierung in den Methoden `matchAll` und `replaceAll` durchgeführt wird. Wenn Sie die Methode [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) von `RegExp` verwenden, tritt dieser Fehler nicht auf, aber es wird nur ein einzelner Treffer gefunden.

## Beispiele

### Ungültige Fälle

```js example-bad
"abc".matchAll(/./); // TypeError
"abc".replaceAll(/./, "f"); // TypeError
```

### Gültige Fälle

Wenn Sie beabsichtigen, globales Matching/Ersatz durchzuführen: Fügen Sie entweder das `g`-Flag hinzu oder erstellen Sie ein neues `RegExp`-Objekt mit dem `g`-Flag, wenn Sie den ursprünglichen Regex unverändert lassen möchten.

```js example-good
[..."abc".matchAll(/./g)]; // [[ "a" ], [ "b" ], [ "c" ]]
"abc".replaceAll(/./g, "f"); // "fff"

const existingPattern = /./;
const newPattern = new RegExp(
  existingPattern.source,
  existingPattern.flags + "g",
);
"abc".replaceAll(newPattern, "f"); // "fff"
```

Wenn Sie nur ein einzelnes Matching/Ersatz beabsichtigen: Verwenden Sie stattdessen {{jsxref("String.prototype.match()")}} oder {{jsxref("String.prototype.replace()")}}. Sie können auch die Methode `[Symbol.matchAll]()` verwenden, wenn Sie einen Iterator wie `matchAll` haben möchten, der nur einen Treffer enthält, aber dabei wird es sehr verwirrend sein.

```js example-good
"abc".match(/./); // [ "a" ]
"abc".replace(/./, "f"); // "fbc"

[..././[Symbol.matchAll]("abc")]; // [[ "a" ]]
```

## Siehe auch

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("RegExp.prototype.global")}}
