---
title: RegExp.$1, …, RegExp.$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den Status des letzten Treffers global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statischen Accessor-Eigenschaften **`RegExp.$1, …, RegExp.$9`** geben übereinstimmende Teilzeichenfolgen in Klammern zurück.

## Beschreibung

Da `$1`–`$9` statische Eigenschaften von {{jsxref("RegExp")}} sind, verwenden Sie diese immer als `RegExp.$1`, `RegExp.$2` usw., anstatt als Eigenschaften eines von Ihnen erstellten `RegExp`-Objekts.

Die Werte von `$1, …, $9` werden aktualisiert, wann immer eine `RegExp`-Instanz (aber keine `RegExp`-Unterklasse) einen erfolgreichen Treffer erzielt. Wenn keine Übereinstimmungen erzielt wurden oder wenn die letzte Übereinstimmung die entsprechende erfassende Gruppe nicht enthält, ist die jeweilige Eigenschaft eine leere Zeichenfolge. Der Set-Accessor jeder Eigenschaft ist `undefined`, daher können Sie die Eigenschaften nicht direkt ändern.

Die Anzahl der möglichen in Klammern gesetzten Teilzeichenfolgen ist unbegrenzt, aber das `RegExp`-Objekt kann nur die ersten neun speichern. Sie können auf alle in Klammern gesetzten Teilzeichenfolgen über die Indizes des zurückgegebenen Arrays zugreifen.

`$1, …, $9` können auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das steht nicht in Zusammenhang mit den `RegExp.$n`-Legacy-Eigenschaften.

## Beispiele

### Verwendung von $n mit RegExp.prototype.test()

Das folgende Skript verwendet die Methode {{jsxref("RegExp.prototype.test()")}}, um eine Zahl in einer generischen Zeichenfolge zu erfassen.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

Bitte beachten Sie, dass jegliche Operation, die zwischen einem `re.test(str)`-Aufruf und der `RegExp.$n`-Eigenschaft die Verwendung anderer regulärer Ausdrücke beinhaltet, Nebeneffekte haben kann. Daher sollte der Zugriff auf diese speziellen Eigenschaften sofort erfolgen, sonst könnte das Ergebnis unerwartet sein.

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
