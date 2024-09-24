---
title: RegExp.lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffseigenschaft **`RegExp.lastParen`** gibt die zuletzt geklammerte Teilzeichenfolge zurück, falls vorhanden. `RegExp["$+"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastParen` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, wird es immer als `RegExp.lastParen` oder `RegExp["$+"]` verwendet und nicht als Eigenschaft eines `RegExp`-Objekts, das Sie erstellt haben.

Der Wert von `lastParen` wird jedes Mal aktualisiert, wenn eine Instanz von `RegExp` (aber nicht eine `RegExp`-Unterklasse) erfolgreich übereinstimmt. Wenn keine Übereinstimmungen vorhanden sind oder die letzte Regex-Ausführung keine Erfassungsgruppen enthält, ist `lastParen` eine leere Zeichenfolge. Der set-Accessor von `lastParen` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzform-Alias nicht mit dem Punkt-Eigenschafts-Accessor (`RegExp.$+`) verwenden, da `+` kein gültiger Identifikator-Teil ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

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
