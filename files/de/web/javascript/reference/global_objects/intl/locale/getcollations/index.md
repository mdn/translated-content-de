---
title: Intl.Locale.prototype.getCollations()
short-title: getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getCollations()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren [Kollationstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für diese Sprache zurück.

> [!NOTE]
> In einigen Versionen mancher Browser wurde diese Methode als Accessor-Eigenschaft namens `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.collations === locale.collations` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle Kollationstypen enthält, die üblicherweise für die `Locale` verwendet werden, alphabetisch sortiert, wobei die Werte `standard` und `search` immer ausgeschlossen sind. Wenn die `Locale` bereits eine [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) hat, dann enthält das zurückgegebene Array diesen einzelnen Wert.

Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

## Beispiele

### Erhalten von unterstützten Kollationstypen

Wenn das `Locale`-Objekt bereits keine `collation` hat, listet `getCollations()` alle üblicherweise verwendeten Kollationstypen für die gegebene `Locale` auf. Für Beispiele zur expliziten Festlegung einer `collation` siehe [`collation` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

```js
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["pinyin", "stroke", "zhuyin", "emoji", "eor"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
