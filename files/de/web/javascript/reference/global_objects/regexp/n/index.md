---
title: RegExp.$1, …, RegExp.$9
short-title: $1, …, $9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Alle statischen Eigenschaften von `RegExp`, die den letzten globalen Übereinstimmungszustand exponieren, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die statischen Accessor-Eigenschaften **`RegExp.$1, …, RegExp.$9`** geben die Übereinstimmungen in Klammern zurück.

## Beschreibung

Da `$1`–`$9` statische Eigenschaften von {{jsxref("RegExp")}} sind, verwenden Sie sie immer als `RegExp.$1`, `RegExp.$2` usw., anstatt als Eigenschaften eines von Ihnen erstellten `RegExp`-Objekts.

Die Werte von `$1, …, $9` werden aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden oder wenn die letzte Übereinstimmung die entsprechende Erfassungsgruppe nicht hat, ist die jeweilige Eigenschaft ein leerer String. Der Set-Accessor jeder Eigenschaft ist `undefined`, sodass Sie die Eigenschaften nicht direkt ändern können.

Die Anzahl der möglichen geklammerten Teilstrings ist unbegrenzt, aber das `RegExp`-Objekt kann nur die ersten neun halten. Sie können auf alle geklammerten Teilstrings über die Indizes des zurückgegebenen Arrays zugreifen.

`$1, …, $9` können auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das ist nicht mit den `RegExp.$n`-Legacy-Eigenschaften verwandt.

## Beispiele

### Verwendung von $n mit RegExp.prototype.test()

Das folgende Skript verwendet die Methode {{jsxref("RegExp.prototype.test()")}}, um eine Zahl in einem generischen String zu erfassen.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

Bitte beachten Sie, dass jede Operation, die die Verwendung anderer regulärer Ausdrücke zwischen einem `re.test(str)`-Aufruf und der `RegExp.$n`-Eigenschaft umfasst, Nebenwirkungen haben kann. Daher sollte der Zugriff auf diese speziellen Eigenschaften sofort erfolgen, andernfalls könnte das Ergebnis unerwartet sein.

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
