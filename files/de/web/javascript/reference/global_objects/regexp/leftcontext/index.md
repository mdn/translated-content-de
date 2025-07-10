---
title: RegExp.leftContext ($`)
short-title: leftContext ($`)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/leftContext
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Alle statischen Eigenschaften von `RegExp`, die den zuletzt gematchten Zustand global anzeigen, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die statische Zugriffs-Eigenschaft **`RegExp.leftContext`** gibt die Zeichenfolge zurück, die dem letzten Treffer vorangeht. ``RegExp["$`"]`` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `leftContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie es immer als `RegExp.leftContext` oder ``RegExp["$`"]``, anstatt als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `leftContext` wird jedes Mal aktualisiert, wenn eine Instanz von `RegExp` (aber nicht eine `RegExp`-Unterklasse) erfolgreich gematcht wird. Wenn keine Übereinstimmungen gefunden wurden, ist `leftContext` eine leere Zeichenfolge. Der Set-Zugriff von `leftContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzform-Alias nicht mit dem Punktzugriffsoperator verwenden (``RegExp.$` ``), da `` ` `` kein gültiger Identifier-Teil ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`` $` `` kann auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, steht aber nicht im Zusammenhang mit der ``RegExp["$`"]``-Alt-Eigenschaft.

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
