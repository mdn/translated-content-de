---
title: RegExp.rightContext ($')
short-title: rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die **`RegExp.rightContext`** statische Accessor-Eigenschaft gibt den Teilstring zurück, der auf die letzte Übereinstimmung folgt. `RegExp["$'"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `rightContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.rightContext` oder `RegExp["$'"]`, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `rightContext` wird jedes Mal aktualisiert, wenn eine Instanz von `RegExp` (aber nicht von einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden, ist `rightContext` ein leerer String. Der Set-Accessor von `rightContext` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzalias nicht mit dem Punkt-Property-Accessor (`RegExp.$'`) verwenden, da `'` kein gültiger Bezeichnerteil ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$'` kann auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das ist nicht mit der veralteten Eigenschaft `RegExp["$'"]` verwandt.

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
