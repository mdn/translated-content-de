---
title: "TypeError: matchAll/replaceAll muss mit einem globalen RegExp aufgerufen werden"
slug: Web/JavaScript/Reference/Errors/Requires_global_RegExp
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "TypeError: matchAll/replaceAll must be called with a global RegExp" tritt auf, wenn die Methode {{jsxref("String.prototype.matchAll()")}} oder {{jsxref("String.prototype.replaceAll()")}} mit einem {{jsxref("RegExp")}}-Objekt verwendet wird, das nicht das {{jsxref("RegExp/global", "global")}}-Flag gesetzt hat.

## Meldung

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

Die Methoden {{jsxref("String.prototype.matchAll()")}} und {{jsxref("String.prototype.replaceAll()")}} erfordern ein {{jsxref("RegExp")}}-Objekt mit dem {{jsxref("RegExp/global", "global")}}-Flag. Dieses Flag zeigt an, dass der reguläre Ausdruck alle Vorkommen in der Eingabestring erkennen kann, anstatt beim ersten Treffer zu stoppen. Obwohl das `g`-Flag bei der Verwendung dieser Methoden redundant ist (da diese Methoden immer einen globalen Ersatz durchführen), ist es dennoch erforderlich, um die Absicht klarzustellen.

Es ist erwähnenswert, dass die Validierung des `g`-Flags in den Methoden `matchAll` und `replaceAll` erfolgt. Wenn Sie stattdessen die Methode [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) von `RegExp` verwenden, erhalten Sie diesen Fehler nicht, aber es wird nur ein einzelner Treffer gefunden.

## Beispiele

### Ungültige Fälle

```js example-bad
"abc".matchAll(/./); // TypeError
"abc".replaceAll(/./, "f"); // TypeError
```

### Gültige Fälle

Wenn Sie eine globale Übereinstimmung/einen globalen Ersatz durchführen möchten: Fügen Sie entweder das `g`-Flag hinzu oder erstellen Sie ein neues `RegExp`-Objekt mit dem `g`-Flag, falls Sie den ursprünglichen regulären Ausdruck unverändert lassen möchten.

```js example-good
[..."abc".matchAll(/./g)]; // [[ "a" ], [ "b" ], [ "c" ]]
"abc".replaceAll(/./g, "f"); // "fff"

const existingPattern = /./;
const newPattern = new RegExp(
  existingPattern.source,
  `${existingPattern.flags}g`,
);
"abc".replaceAll(newPattern, "f"); // "fff"
```

Wenn Sie nur eine einzelne Übereinstimmung/einen einzelnen Ersatz durchführen möchten: Verwenden Sie stattdessen {{jsxref("String.prototype.match()")}} oder {{jsxref("String.prototype.replace()")}}. Sie können auch die `[Symbol.matchAll]()`-Methode verwenden, wenn Sie einen Iterator wie `matchAll` wünschen, der nur einen Treffer enthält, aber dies wird sehr verwirrend sein.

```js example-good
"abc".match(/./); // [ "a" ]
"abc".replace(/./, "f"); // "fbc"

[..././[Symbol.matchAll]("abc")]; // [[ "a" ]]
```

## Siehe auch

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("RegExp.prototype.global")}}
