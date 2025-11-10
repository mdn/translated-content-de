---
title: RegExp.input ($_)
short-title: input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Alle statischen `RegExp`-Eigenschaften, die den letzten Übereinstimmungsstatus global offenlegen, sind veraltet. Weitere Informationen finden Sie unter [veraltete RegExp-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

Die **statische Zugriffseigenschaft `RegExp.input`** gibt den String zurück, gegen den ein regulärer Ausdruck abgeglichen wird. `RegExp.$_` ist ein Alias für diese Eigenschaft.

## Beschreibung

Da `input` eine statische Eigenschaft von {{jsxref("RegExp")}} ist, wird sie immer als `RegExp.input` oder `RegExp.$_` verwendet und nicht als Eigenschaft eines von Ihnen erstellten `RegExp`-Objekts.

Der Wert von `input` wird aktualisiert, wann immer eine Instanz von `RegExp` (aber nicht einer Unterklasse von `RegExp`) eine erfolgreiche Übereinstimmung erzielt. Wenn keine Übereinstimmungen gemacht wurden, ist `input` ein leerer String. Sie können den Wert von `input` festlegen, aber dies beeinflusst nicht das andere Verhalten des regulären Ausdrucks, und der Wert wird beim nächsten erfolgreichen Abgleich erneut überschrieben.

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
