---
title: RegExp.leftContext ($`)
short-title: leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Alle statischen Eigenschaften von `RegExp`, die den letzten globalen Übereinstimmungszustand anzeigen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.leftContext`** gibt die Teilzeichenkette zurück, die der zuletzt gefundenen Übereinstimmung vorausgeht. ``RegExp["$`"]`` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `leftContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie es immer als `RegExp.leftContext` oder ``RegExp["$`"]`` und nicht als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `leftContext` wird aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht von einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen gefunden wurden, ist `leftContext` eine leere Zeichenkette. Der Set-Zugriffszuweiser von `leftContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzalias nicht mit dem Punktzugriffsoperator verwenden (``RegExp.$` ``), da `` ` `` kein gültiger Bezeichnerteil ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammer-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`` $` `` kann auch in der Ersetzungszeichenkette von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das steht nicht im Zusammenhang mit der veralteten Eigenschaft ``RegExp["$`"]``.

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
