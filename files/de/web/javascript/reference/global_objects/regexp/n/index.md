---
title: RegExp.$1, …, RegExp.$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global anzeigen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statischen Accessor-Eigenschaften **`RegExp.$1, …, RegExp.$9`** geben die in Klammern gesetzten Teilzeichenfolgenübereinstimmungen zurück.

## Beschreibung

Da `$1`–`$9` statische Eigenschaften von {{jsxref("RegExp")}} sind, verwenden Sie sie immer als `RegExp.$1`, `RegExp.$2` usw., anstatt als Eigenschaften eines von Ihnen erstellten `RegExp`-Objekts.

Die Werte von `$1, …, $9` werden aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung findet. Wenn keine Übereinstimmungen gefunden wurden oder wenn die letzte Übereinstimmung die entsprechende Erfassungsgruppe nicht enthält, ist die jeweilige Eigenschaft eine leere Zeichenfolge. Der Set-Accessor jeder Eigenschaft ist `undefined`, sodass Sie die Eigenschaften nicht direkt ändern können.

Die Anzahl der möglichen in Klammern gesetzten Teilzeichenfolgen ist unbegrenzt, aber das `RegExp`-Objekt kann nur die ersten neun halten. Sie können auf alle in Klammern gesetzten Teilzeichenfolgen über die Indizes des zurückgegebenen Arrays zugreifen.

`$1, …, $9` können auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, was jedoch nicht mit den `RegExp.$n`-Legacy-Eigenschaften zusammenhängt.

## Beispiele

### Verwendung von $n mit RegExp.prototype.test()

Das folgende Skript verwendet die Methode {{jsxref("RegExp.prototype.test()")}}, um eine Zahl in einer generischen Zeichenfolge zu erfassen.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

Bitte beachten Sie, dass jede Operation, die die Verwendung anderer regulärer Ausdrücke zwischen einem `re.test(str)`-Aufruf und der `RegExp.$n`-Eigenschaft beinhaltet, Nebeneffekte haben kann, sodass der Zugriff auf diese speziellen Eigenschaften sofort erfolgen sollte, da ansonsten das Ergebnis unerwartet sein könnte.

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
