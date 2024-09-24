---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungszustand global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffs-Eigenschaft **`RegExp.input`** gibt den String zurück, gegen den ein regulärer Ausdruck abgeglichen wird. `RegExp.$_` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `input` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie es immer als `RegExp.input` oder `RegExp.$_`, anstatt es als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts zu nutzen.

Der Wert von `input` wird jedes Mal aktualisiert, wenn eine `RegExp`-Instanz (aber nicht eine `RegExp`-Unterklasse) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen gefunden wurden, ist `input` ein leerer String. Sie können den Wert von `input` festlegen, aber dies beeinflusst andere Verhaltensweisen des regulären Ausdrucks nicht, und der Wert wird wieder überschrieben, wenn die nächste erfolgreiche Übereinstimmung erzielt wird.

## Beispiele

### Verwendung von input und $\_

```js
const re = /hi/g;
re.test("hi there!");
RegExp.input; // "hi there!"
re.test("foo"); // neuer Test, keine Übereinstimmung
RegExp.$_; // "hi there!"
re.test("hi world!"); // neuer Test, Übereinstimmung
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
