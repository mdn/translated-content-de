---
title: RegExp.lastMatch ($&)
short-title: lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Alle statischen Eigenschaften von `RegExp`, die den letzten Übereinstimmungszustand global exponieren, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffseigenschaft **`RegExp.lastMatch`** gibt die zuletzt übereinstimmende Teilzeichenkette zurück. `RegExp["$&"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastMatch` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.lastMatch` oder `RegExp["$&"]`, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `lastMatch` wird jedes Mal aktualisiert, wenn eine `RegExp`-Instanz (aber nicht eine `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden, ist `lastMatch` ein leerer String. Der Set-Accessor von `lastMatch` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzform-Alias nicht mit dem Punkt-Eigenschaft-Zugriffsoperator (`RegExp.$&`) verwenden, da `&` kein gültiger Identifikator-Teil ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$&` kann auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das steht in keinem Zusammenhang mit der veralteten `RegExp["$&"]`-Eigenschaft.

## Beispiele

### Verwendung von lastMatch und $&

```js
const re = /hi/g;
re.test("hi there!");
RegExp.lastMatch; // "hi"
RegExp["$&"]; // "hi"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
