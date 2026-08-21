---
title: RegExp.rightContext ($')
short-title: rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.rightContext`** gibt den Teilstring zurück, der der letzten Übereinstimmung folgt. `RegExp["$'"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `rightContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.rightContext` oder `RegExp["$'"]`, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `rightContext` wird aktualisiert, sobald eine `RegExp`-Instanz (aber keine `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden, ist `rightContext` ein leerer String. Der Set-Accessor von `rightContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzschreibungs-Alias nicht mit dem Punkt-Zugriffsoperator (dot property accessor) verwenden (`RegExp.$'`), da `'` kein gültiger Teil eines Identifikators ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$'` kann auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das steht nicht in Zusammenhang mit der `RegExp["$'"]`-Alt-Eigenschaft.

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
