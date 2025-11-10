---
title: RegExp.lastParen ($+)
short-title: lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Alle `RegExp`-statischen Eigenschaften, die den letzten Übereinstimmungszustand global freigeben, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die **`RegExp.lastParen`** statische Zugriffseigenschaft gibt die zuletzt in Klammern gesetzte Teilzeichenfolge zurück, wenn vorhanden. `RegExp["$+"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastParen` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.lastParen` oder `RegExp["$+"]`, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `lastParen` wird aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht eine Unterklasse von `RegExp`) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden oder wenn die zuletzt ausgeführte Regex keinen erfassenden Gruppen enthält, ist `lastParen` eine leere Zeichenkette. Der Set-Accessor von `lastParen` ist `undefined`, daher können Sie diese Eigenschaft nicht direkt ändern.

Sie können den Kurzform-Alias nicht mit dem Punkt-Zugriffsoperator (`RegExp.$+`) verwenden, da `+` kein gültiger Bezeichnerteil ist. Dies führt zu einem {{jsxref("SyntaxError")}}. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

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
