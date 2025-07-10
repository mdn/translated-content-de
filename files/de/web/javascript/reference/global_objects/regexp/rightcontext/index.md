---
title: RegExp.rightContext ($')
short-title: rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global preisgeben, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffseigenschaft **`RegExp.rightContext`** gibt die Zeichenfolge zurück, die der letzten Übereinstimmung folgt. `RegExp["$'"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `rightContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie es immer als `RegExp.rightContext` oder `RegExp["$'"]`, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `rightContext` wird jedes Mal aktualisiert, wenn eine Instanz von `RegExp` (aber nicht einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung durchführt. Wenn keine Übereinstimmungen vorgenommen wurden, ist `rightContext` eine leere Zeichenfolge. Der Set-Zugriffsor von `rightContext` ist `undefined`, sodass Sie diese Eigenschaft nicht direkt ändern können.

Sie können den Kurzschreib-Alias nicht mit dem Punkt-Eigenschafts-Zugriffsor (`RegExp.$'`) verwenden, da `'` kein gültiger Identitätsteils ist, was zu einem {{jsxref("SyntaxError")}} führt. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$'` kann auch in der Ersetzungszeichenfolge von {{jsxref("String.prototype.replace()")}} verwendet werden, steht jedoch in keinem Zusammenhang mit der veralteten Eigenschaft `RegExp["$'"]`.

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
