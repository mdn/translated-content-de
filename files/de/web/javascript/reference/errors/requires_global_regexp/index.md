---
title: "TypeError: matchAll/replaceAll muss mit einem globalen RegExp aufgerufen werden"
slug: Web/JavaScript/Reference/Errors/Requires_global_RegExp
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "TypeError: matchAll/replaceAll muss mit einem globalen RegExp aufgerufen werden" tritt auf, wenn die {{jsxref("String.prototype.matchAll()")}}- oder {{jsxref("String.prototype.replaceAll()")}}-Methode mit einem {{jsxref("RegExp")}}-Objekt verwendet wird, das nicht das {{jsxref("RegExp/global", "global")}}-Flag gesetzt hat.

## Meldung

```plain
TypeError: String.prototype.matchAll called with a non-global RegExp argument (V8-based)
TypeError: String.prototype.replaceAll called with a non-global RegExp argument (V8-based)
TypeError: matchAll must be called with a global RegExp (Firefox)
TypeError: replaceAll must be called with a global RegExp (Firefox)
TypeError: String.prototype.matchAll argument must not be a non-global regular expression (Safari)
TypeError: String.prototype.replaceAll argument must not be a non-global regular expression (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Die {{jsxref("String.prototype.matchAll()")}}- und {{jsxref("String.prototype.replaceAll()")}}-Methoden erfordern ein {{jsxref("RegExp")}}-Objekt mit dem {{jsxref("RegExp/global", "global")}}-Flag. Dieses Flag zeigt an, dass der reguläre Ausdruck alle Vorkommen der Eingabezeichenkette durchlaufen kann, anstatt beim ersten Treffer zu stoppen. Obwohl das `g`-Flag redundant ist, wenn Sie diese Methoden verwenden (da diese Methoden immer eine globale Ersetzung vornehmen), sind sie dennoch erforderlich, um die Absicht klar zu machen.

Es ist bemerkenswert, dass die Überprüfung des `g`-Flags in den `matchAll`- und `replaceAll`-Methoden erfolgt. Wenn Sie stattdessen die [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)-Methode von `RegExp` verwenden, erhalten Sie diesen Fehler nicht, aber es wird nur ein einzelner Treffer gefunden.

## Beispiele

### Ungültige Fälle

```js example-bad
"abc".matchAll(/./); // TypeError
"abc".replaceAll(/./, "f"); // TypeError
```

### Gültige Fälle

Wenn Sie beabsichtigen, globale Übereinstimmungen/Ersetzungen durchzuführen: Fügen Sie entweder das `g`-Flag hinzu oder erstellen Sie ein neues `RegExp`-Objekt mit dem `g`-Flag, wenn Sie das ursprüngliche Regex unverändert lassen möchten.

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

Wenn Sie nur eine einzige Übereinstimmung/Ersetzung beabsichtigen: Verwenden Sie stattdessen {{jsxref("String.prototype.match()")}} oder {{jsxref("String.prototype.replace()")}}. Sie können auch die `[Symbol.matchAll]()`-Methode verwenden, wenn Sie einen Iterator wie `matchAll` erhalten möchten, der nur einen Treffer enthält, aber das wird sehr verwirrend sein.

```js example-good
"abc".match(/./); // [ "a" ]
"abc".replace(/./, "f"); // "fbc"

[..././[Symbol.matchAll]("abc")]; // [[ "a" ]]
```

## Siehe auch

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- {{jsxref("RegExp.prototype.global")}}
