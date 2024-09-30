---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die statische Zugriffseigenschaft **`RegExp.rightContext`** liefert die Zeichenkette, die der letzten Übereinstimmung folgt. `RegExp["$'"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `rightContext` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie es immer als `RegExp.rightContext` oder `RegExp["$'"]` und nicht als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `rightContext` wird aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht eine von `RegExp`-Unterklassen) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden, ist `rightContext` eine leere Zeichenkette. Der Set-Accessor von `rightContext` ist `undefined`, sodass Sie diese Eigenschaft nicht direkt ändern können.

Sie können den Kurzformular-Alias nicht mit dem Punkt-Eigenschafts-Accessor verwenden (`RegExp.$'`), da `'` kein gültiger Identifikator-Teil ist, was ein {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

`$'` kann auch in der Ersetzungszeichenkette von {{jsxref("String.prototype.replace()")}} verwendet werden, dies hat jedoch keinen Bezug zur `RegExp["$'"]`-Legacy-Eigenschaft.

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
