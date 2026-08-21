---
title: RegExp.input ($_)
short-title: input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Alle statischen Eigenschaften von `RegExp`, die den globalen Zustand des letzten Treffers anzeigen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.input`** gibt die Zeichenkette zurück, gegen die ein regulärer Ausdruck abgeglichen wird. `RegExp.$_` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `input` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.input` oder `RegExp.$_`, anstatt als eine Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `input` wird aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht von einem `RegExp`-Unterklasse) einen erfolgreichen Treffer erzielt. Wenn keine Treffer erzielt wurden, ist `input` eine leere Zeichenkette. Sie können den Wert von `input` setzen, aber dies beeinflusst nicht andere Verhaltensweisen des regulären Ausdrucks, und der Wert wird wieder überschrieben, wenn der nächste erfolgreiche Treffer erzielt wird.

## Beispiele

### Verwendung von input und $\_

```js
const re = /hi/g;
re.test("hi there!");
RegExp.input; // "hi there!"
re.test("foo"); // new test, non-matching
RegExp.$_; // "hi there!"
re.test("hi world!"); // new test, matching
RegExp.$_; // "hi world!"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RegExp.lastMatch` (`$&`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
- [`RegExp.lastParen` (`$+`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
- [`RegExp.leftContext` (`` $` ``)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
- [`RegExp.rightContext` (`$'`)](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
- [`RegExp.$1`, …, `RegExp.$9`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
