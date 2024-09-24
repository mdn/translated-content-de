---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.lastMatch`** gibt die zuletzt übereinstimmende Teilzeichenfolge zurück. `RegExp["$&"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastMatch` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie es immer als `RegExp.lastMatch` oder `RegExp["$&"]`, anstatt es als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts zu verwenden.

Der Wert von `lastMatch` wird aktualisiert, wann immer eine `RegExp`-Instanz (aber nicht eine `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erreicht. Wenn keine Übereinstimmungen erzielt wurden, ist `lastMatch` eine leere Zeichenkette. Der Set-Accessor von `lastMatch` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den verkürzten Alias nicht mit dem Punkt-Accessor (`RegExp.$&`) verwenden, da `&` kein gültiger Identifikator-Teil ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$&` kann auch in der Ersetzungszeichenkette von {{jsxref("String.prototype.replace()")}} verwendet werden, was jedoch nicht mit der `RegExp["$&"]`-Legacy-Eigenschaft zu tun hat.

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
