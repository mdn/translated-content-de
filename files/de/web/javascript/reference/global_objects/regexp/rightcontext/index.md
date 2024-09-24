---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Accessor-Eigenschaft **`RegExp.rightContext`** gibt die Teilzeichenkette zurück, die auf die zuletzt gefundene Übereinstimmung folgt. `RegExp["$'"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `rightContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.rightContext` oder `RegExp["$'"]`, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `rightContext` wird jedes Mal aktualisiert, wenn eine Instanz von `RegExp` (aber nicht eine `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen gefunden wurden, ist `rightContext` ein leerer String. Der set-Accessor von `rightContext` ist `undefined`, sodass Sie diese Eigenschaft nicht direkt ändern können.

Sie können den Kurzform-Alias mit dem Punkt-Property-Accessor (`RegExp.$'`) nicht verwenden, da `'` kein gültiger Identifier-Teil ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$'` kann auch in der Ersetzungszeichenkette von {{jsxref("String.prototype.replace()")}} verwendet werden, was jedoch nicht mit der veralteten Eigenschaft `RegExp["$'"]` zusammenhängt.

## Beispiele

### Verwendung von rightContext und $'

```js
const re = /hello/g;
re.test("hello world!");
RegExp.rightContext; // " world!"
RegExp["$'"]; // " world!"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
