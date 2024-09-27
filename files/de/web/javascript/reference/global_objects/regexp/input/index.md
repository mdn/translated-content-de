---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungsstatus global exponieren, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die statische Zugriffsobjekteigenschaft **`RegExp.input`** gibt den String zurück, mit dem ein regulärer Ausdruck verglichen wird. `RegExp.$_` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `input` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, verwenden Sie sie immer als `RegExp.input` oder `RegExp.$_` und nicht als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `input` wird aktualisiert, wenn eine Instanz von `RegExp` (aber nicht einer Unterklasse von `RegExp`) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen erzielt wurden, ist `input` ein leerer String. Sie können den Wert von `input` festlegen, aber dies beeinflusst andere Verhaltensweisen des Regex nicht, und der Wert wird überschrieben, wenn die nächste erfolgreiche Übereinstimmung erzielt wird.

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
