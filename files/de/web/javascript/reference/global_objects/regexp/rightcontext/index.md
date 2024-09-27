---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den Zustand des letzten Matches global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffseigenschaft **`RegExp.rightContext`** gibt die Teilzeichenfolge zurück, die auf das zuletzt gefundene Match folgt. `RegExp["$'"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `rightContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.rightContext` oder `RegExp["$'"]`, anstatt als Eigenschaft eines erzeugten `RegExp`-Objekts.

Der Wert von `rightContext` wird jedes Mal aktualisiert, wenn eine `RegExp`-Instanz (aber nicht eine `RegExp`-Unterklasse) ein erfolgreiches Match erzielt. Wenn keine Matches gefunden wurden, ist `rightContext` ein leerer String. Der Set-Zugriff von `rightContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Alias nicht mit dem Punkt-Zugriffsoperator verwenden (`RegExp.$'`), da `'` kein gültiger Bestandteil eines Bezeichners ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$'` kann auch in der Ersetzungszeichenfolge von {{jsxref("String.prototype.replace()")}} verwendet werden, dies steht jedoch nicht im Zusammenhang mit der veralteten Eigenschaft `RegExp["$'"]`.

## Beispiele

### Verwendung von rightContext und $'

```js
const re = /hello/g;
re.test("hello world!");
RegExp.rightContext; // " world!"
RegExp["

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)"]; // " world!"
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
