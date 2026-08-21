---
title: RegExp.lastParen ($+)
short-title: lastParen ($+)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastParen
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global exponieren, sind veraltet. Siehe [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) für weitere Informationen.

Die statische Zugriffs-Eigenschaft **`RegExp.lastParen`** gibt das zuletzt erfasste klammernde Teilstring-Match zurück, falls vorhanden. `RegExp["$+"]` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `lastParen` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.lastParen` oder `RegExp["$+"]`, anstatt als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `lastParen` wird immer dann aktualisiert, wenn eine Instanz von `RegExp` (aber nicht einer `RegExp`-Unterklasse) ein erfolgreiches Match durchführt. Wenn keine Übereinstimmungen erzielt wurden oder wenn die letzte Regex-Ausführung keine erfassenden Gruppen enthält, ist `lastParen` ein leerer String. Der set-Zugriff von `lastParen` ist `undefined`, weshalb Sie diese Eigenschaft nicht direkt ändern können.

Sie können den Kurzschritt-Alias nicht mit dem Punktzugriffsoperator verwenden (`RegExp.$+`), da `+` kein gültiger Bestandteil eines Identifikators ist, was einen {{jsxref("SyntaxError")}} verursacht. Verwenden Sie stattdessen die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

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
