---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmzustand global offenlegen, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die statische Zugriffs-Eigenschaft **`RegExp.lastMatch`** gibt die zuletzt übereinstimmende Teilzeichenkette zurück. `RegExp["$&"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastMatch` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.lastMatch` oder `RegExp["$&"]`, anstatt als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `lastMatch` wird aktualisiert, wann immer eine `RegExp`- (aber nicht `RegExp`-Unterklassen-) Instanz eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen gefunden wurden, ist `lastMatch` eine leere Zeichenkette. Der Set-Zugriff von `lastMatch` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzform-Alias nicht mit dem Punktzugriff (`RegExp.$&`) verwenden, da `&` kein gültiger Identifier-Teil ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$&` kann auch in der Ersetzungszeichenkette von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das steht nicht in Zusammenhang mit der `RegExp["$&"]`-Legacy-Eigenschaft.

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
