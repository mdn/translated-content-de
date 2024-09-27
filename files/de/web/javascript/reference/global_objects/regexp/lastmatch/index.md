---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global freigeben, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.lastMatch`** gibt die zuletzt übereinstimmende Teilzeichenfolge zurück. `RegExp["$&"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastMatch` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, wird sie immer als `RegExp.lastMatch` oder `RegExp["$&"]` verwendet und nicht als Eigenschaft eines erstellten `RegExp`-Objekts.

Der Wert von `lastMatch` wird immer dann aktualisiert, wenn eine Instanz von `RegExp` (aber nicht von einer `RegExp`-Unterklasse) erfolgreich übereinstimmt. Wenn keine Übereinstimmungen gefunden wurden, ist `lastMatch` ein leerer String. Der set-Accessor von `lastMatch` ist `undefined`, sodass Sie diese Eigenschaft nicht direkt ändern können.

Sie können den Kurzschreibweis-Alias mit dem Punkt-Zugriffsoperator (`RegExp.$&`) nicht verwenden, da `&` kein gültiger Teil eines Bezeichners ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$&` kann auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, was jedoch nichts mit der veralteten Eigenschaft `RegExp["$&"]` zu tun hat.

## Beispiele

### Verwendung von lastMatch und $&

```js
const re = /hi/g;
re.test("hi there!");
RegExp.lastMatch; // "hi"
RegExp["![](0-f3c42592.md)"]; // "hi"
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
