---
title: RegExp.$1, …, RegExp.$9
short-title: $1, …, $9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global verfügbar machen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statischen Zugriffsattribute **`RegExp.$1, …, RegExp.$9`** geben geklammerte Teilstring-Übereinstimmungen zurück.

## Beschreibung

Da `$1`–`$9` statische Eigenschaften von {{jsxref("RegExp")}} sind, verwenden Sie sie immer als `RegExp.$1`, `RegExp.$2`, usw., und nicht als Eigenschaften eines von Ihnen erstellten `RegExp`-Objekts.

Die Werte von `$1, …, $9` werden aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht von einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden oder die letzte Übereinstimmung die entsprechende Erfassungsgruppe nicht enthält, ist die jeweilige Eigenschaft ein leerer String. Der Set-Zugriff von jeder Eigenschaft ist `undefined`, sodass Sie die Eigenschaften nicht direkt ändern können.

Die Anzahl der möglichen geklammerten Teilstrings ist unbegrenzt, aber das `RegExp`-Objekt kann nur die ersten neun speichern. Sie können auf alle geklammerten Teilstrings über die Indizes des zurückgegebenen Arrays zugreifen.

`$1, …, $9` können auch im Ersetzungsstring von {{jsxref("String.prototype.replace()")}} verwendet werden, aber das ist nicht mit den `RegExp.$n`-Legacy-Eigenschaften verbunden.

## Beispiele

### Verwendung von $n mit RegExp.prototype.test()

Das folgende Skript verwendet die Methode {{jsxref("RegExp.prototype.test()")}}, um eine Zahl in einem generischen String zu erfassen.

```js
const str = "Test 24";
const number = /(\d+)/.test(str) ? RegExp.$1 : "0";
number; // "24"
```

Bitte beachten Sie, dass jede Operation, die die Verwendung anderer regulärer Ausdrücke zwischen einem `re.test(str)`-Aufruf und der `RegExp.$n`-Eigenschaft beinhaltet, Nebeneffekte haben kann, daher sollte der Zugriff auf diese speziellen Eigenschaften unverzüglich erfolgen, ansonsten könnte das Ergebnis unerwartet sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (``$` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
