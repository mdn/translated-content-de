---
title: Intl.Locale.prototype.getCollations()
short-title: getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`getCollations()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste mit einem oder mehreren [Sortierungstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für diese Locale zurück.

> [!NOTE]
> In einigen Versionen mancher Browser wurde diese Methode als Accessor-Property namens `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie jetzt als Methode implementiert. So wird vermieden, dass `locale.collations === locale.collations` den Wert `false` zurückgibt. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle für die `Locale` gebräuchlichen Sortierungstypen in alphabetischer Reihenfolge enthält. Die Werte `standard` und `search` sind stets ausgeschlossen. Wenn für die `Locale` bereits eine [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) festgelegt ist, enthält das zurückgegebene Array nur diesen einen Wert.

Eine Liste der unterstützten Sortierungstypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

## Beispiele

### Unterstützte Sortierungstypen abrufen

Wenn für das `Locale`-Objekt noch keine `collation` festgelegt ist, listet `getCollations()` alle gebräuchlichen Sortierungstypen für die angegebene `Locale` auf. Beispiele für das explizite Festlegen einer `collation` finden Sie unter [Beispiele für `collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

```js
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["emoji", "eor", "pinyin", "stroke", "zhuyin"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
