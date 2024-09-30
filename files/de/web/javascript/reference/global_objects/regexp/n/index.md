---
title: RegExp.$1, …, RegExp.$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen Eigenschaften von `RegExp`, die den letzten Match-Zustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statischen Accessor-Eigenschaften **`RegExp.$1, …, RegExp.$9`** geben erfasste Teilzeichenfolgen zurück.

## Beschreibung

Da `$1`–`$9` statische Eigenschaften von {{jsxref("RegExp")}} sind, verwenden Sie sie immer als `RegExp.$1`, `RegExp.$2` etc., anstatt als Eigenschaften eines von Ihnen erstellten `RegExp`-Objekts.

Die Werte von `$1, …, $9` werden jedes Mal aktualisiert, wenn eine Instanz von `RegExp` (aber nicht von einer `RegExp`-Unterklasse) einen erfolgreichen Treffer erzielt. Wenn keine Treffer erzielt wurden oder wenn der letzte Treffer die entsprechende Erfassungsgruppe nicht enthält, ist die jeweilige Eigenschaft eine leere Zeichenfolge. Der Set-Accessor jeder Eigenschaft ist `undefined`, sodass Sie die Eigenschaften nicht direkt ändern können.

Die Anzahl möglicher erfasster Teilzeichenfolgen ist unbegrenzt, aber das `RegExp`-Objekt kann nur die ersten neun halten. Sie können auf alle erfassten Teilzeichenfolgen über die Indizes des zurückgegebenen Arrays zugreifen.

`$1, …, $9` können auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das steht in keinem Zusammenhang mit den `RegExp.$n`-Veralteten-Eigenschaften.

## Beispiele

### Verwendung von $n mit RegExp.prototype.test()

Das folgende Skript verwendet die Methode {{jsxref("RegExp.prototype.test()")}}, um eine Zahl in einem generischen String zu erfassen.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

Bitte beachten Sie, dass jede Operation, die die Verwendung anderer regulärer Ausdrücke zwischen einem `re.test(str)`-Aufruf und der `RegExp.$n`-Eigenschaft umfasst, Nebeneffekte haben kann, sodass der Zugriff auf diese speziellen Eigenschaften sofort erfolgen sollte, andernfalls könnte das Ergebnis unerwartet sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
