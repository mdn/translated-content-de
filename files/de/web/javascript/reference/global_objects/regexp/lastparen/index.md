---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Match-Zustand global exponieren, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.lastParen`** gibt das zuletzt geklammerte Teilstring-Match zurück, falls vorhanden. `RegExp["$+"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastParen` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.lastParen` oder `RegExp["$+"]`, anstatt als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `lastParen` wird immer dann aktualisiert, wenn eine `RegExp`-Instanz (jedoch nicht eine `RegExp`-Unterklasse) einen erfolgreichen Match erzielt. Wenn keine Matches erzielt wurden oder die letzte Regex-Ausführung keine erfassten Gruppen enthält, ist `lastParen` ein leerer String. Der Set-Zugriffsmodifikator von `lastParen` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können das Kurzform-Alias nicht mit dem Punkt-Zugriffsoperator verwenden (`RegExp.$+`), da `+` kein gültiger Teil eines Bezeichners ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

## Beispiele

### Verwendung von lastParen und $+

```js
const re = /(hi)/g;
re.test("hi there!");
RegExp.lastParen; // "hi"
RegExp["$+"]; // "hi"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.input` (`$_`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
