---
title: RegExp.leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global darstellen, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die statische Zugriffs-Eigenschaft **`RegExp.leftContext`** gibt die Teilzeichenfolge zurück, die der letzten Übereinstimmung vorausgeht. ``RegExp["$`"]`` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `leftContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.leftContext` oder ``RegExp["$`"]``, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `leftContext` wird aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht eine `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen vorhanden sind, ist `leftContext` ein leerer String. Der Set-Zugriffsmodifikator von `leftContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Alias in Kurzform nicht mit dem Punkt-Zugriffsoperator verwenden (``RegExp.$` ``), da `` ` `` kein gültiger Bestandteil eines Bezeichners ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`` $` `` kann auch im Ersetzungs-String von {{jsxref("String.prototype.replace()")}} verwendet werden, steht jedoch in keinem Zusammenhang mit der veralteten Eigenschaft ``RegExp["$`"]``.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
