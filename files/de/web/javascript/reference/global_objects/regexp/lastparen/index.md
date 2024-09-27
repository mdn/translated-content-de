---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffseigenschaft **`RegExp.lastParen`** gibt die letzte in Klammern gesetzte Teilzeichenfolgenübereinstimmung zurück, falls vorhanden. `RegExp["$+"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastParen` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.lastParen` oder `RegExp["$+"]`, anstatt als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `lastParen` wird aktualisiert, wenn eine Instanz von `RegExp` (aber nicht einer `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden oder wenn die jüngste Ausführung des regulären Ausdrucks keine Erfassungsgruppen enthält, ist `lastParen` eine leere Zeichenfolge. Die set Accessor-Funktion von `lastParen` ist `undefined`, sodass Sie diese Eigenschaft nicht direkt ändern können.

Sie können den Kurzalias nicht mit dem Punkt-Eigenschaftenzugriff (`RegExp.$+`) verwenden, da `+` kein gültiger Teil eines Bezeichners ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

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
