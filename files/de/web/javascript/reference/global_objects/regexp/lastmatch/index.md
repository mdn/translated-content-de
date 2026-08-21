---
title: RegExp.lastMatch ($&)
short-title: lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungsstatus global freigeben, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.lastMatch`** gibt die zuletzt übereinstimmende Teilzeichenfolge zurück. `RegExp["$&"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastMatch` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.lastMatch` oder `RegExp["$&"]`, anstatt als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `lastMatch` aktualisiert sich, wann immer eine `RegExp`-Instanz (aber keine `RegExp`-Unterklasse) einen erfolgreichen Abgleich durchführt. Wenn keine Übereinstimmungen gefunden wurden, ist `lastMatch` eine leere Zeichenfolge. Der Set-Accessor von `lastMatch` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzform-Alias nicht mit dem Punkt-Zugriffsoperator verwenden (`RegExp.$&`), da `&` kein gültiger Bezeichnerteil ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$&` kann auch in der Ersetzungszeichenfolge von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das ist nicht mit der `RegExp["$&"]` Legacy-Eigenschaft verbunden.

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
