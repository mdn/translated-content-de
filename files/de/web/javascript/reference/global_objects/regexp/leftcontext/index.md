---
title: RegExp.leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten globalen Übereinstimmungszustand offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.leftContext`** gibt die Teilzeichenkette zurück, die der letzten Übereinstimmung vorausgeht. ``RegExp["$`"]`` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `leftContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.leftContext` oder ``RegExp["$`"]`` und nicht als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `leftContext` wird aktualisiert, wenn eine Instanz von `RegExp` (aber nicht einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen gemacht wurden, ist `leftContext` eine leere Zeichenkette. Der Set-Accessor von `leftContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den abgekürzten Alias nicht mit dem Punktzugriffsoperator verwenden (``RegExp.$` ``), da `` ` `` kein gültiger Identifikatorteil ist und dies einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`` $` `` kann auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das ist nicht mit der ``RegExp["$`"]`` Legacy-Eigenschaft verbunden.

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
