---
title: RegExp.$1, …, RegExp.$9
short-title: $1, …, $9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global freilegen, sind veraltet. Siehe [veraltete RegExp-Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die **`RegExp.$1, …, RegExp.$9`** statischen Zugriffs-Eigenschaften geben die in Klammern gesetzten Teilzeichenfolgen-Übereinstimmungen zurück.

## Beschreibung

Da `$1`–`$9` statische Eigenschaften von {{jsxref("RegExp")}} sind, verwenden Sie sie immer als `RegExp.$1`, `RegExp.$2` usw., anstatt als Eigenschaften eines von Ihnen erstellten `RegExp`-Objekts.

Die Werte von `$1, …, $9` aktualisieren sich, wann immer eine `RegExp`-Instanz (aber keine `RegExp`-Unterklasse) einen erfolgreichen Treffer erzielt. Wenn keine Treffer erzielt wurden oder wenn der letzte Treffer die entsprechende Erfassungsgruppe nicht enthält, ist die jeweilige Eigenschaft ein leerer String. Der Set-Zugriffsoperator jeder Eigenschaft ist `undefined`, sodass Sie die Eigenschaften nicht direkt ändern können.

Die Anzahl der möglichen in Klammern gesetzten Teilzeichenfolgen ist unbegrenzt, aber das `RegExp`-Objekt kann nur die ersten neun halten. Sie können auf alle in Klammern gesetzten Teilzeichenfolgen über die Indizes des zurückgegebenen Arrays zugreifen.

`$1, …, $9` können auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das ist nicht mit den `RegExp.$n`-Legacy-Eigenschaften zu verwechseln.

## Beispiele

### Verwendung von $n mit RegExp.prototype.test()

Das folgende Skript verwendet die Methode {{jsxref("RegExp.prototype.test()")}}, um eine Zahl in einem generischen String zu erfassen.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

Bitte beachten Sie, dass jede Operation, die die Verwendung anderer regulärer Ausdrücke zwischen einem `re.test(str)` Aufruf und der `RegExp.$n`-Eigenschaft beinhaltet, Nebeneffekte haben könnte, sodass der Zugriff auf diese speziellen Eigenschaften sofort erfolgen sollte, andernfalls könnte das Ergebnis unerwartet sein.

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
