---
title: RegExp.leftContext ($`)
short-title: leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen Eigenschaften von `RegExp`, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Accessor-Eigenschaft **`RegExp.leftContext`** gibt die Teilzeichenkette zurück, die der letzten Übereinstimmung vorausgeht. ``RegExp["$`"]`` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `leftContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.leftContext` oder ``RegExp["$`"]`` und nicht als Eigenschaft eines erstellten `RegExp`-Objekts.

Der Wert von `leftContext` wird aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht eine `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung findet. Wenn keine Übereinstimmungen gefunden wurden, ist `leftContext` eine leere Zeichenkette. Der Set-Accessor von `leftContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzschreibalias nicht mit dem Punkt-Eigenschafts-Accessor (``RegExp.$` ``) verwenden, da `` ` `` kein gültiger Bezeichnerteil ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`` $` `` kann auch in der Ersetzungszeichenkette von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das ist nicht mit der veralteten Eigenschaft ``RegExp["$`"]`` verwandt.

## Beispiele

### Verwendung von leftContext und $\`

```js
const re = /world/g;
re.test("hello world!");
RegExp.leftContext; // "hello "
RegExp["$`"]; // "hello "
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
