---
title: Intl.Locale.prototype.getCollations()
short-title: getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getCollations()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren [Kollationstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Zugriffsobjekteigenschaft namens `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie nun als Methode implementiert, um zu verhindern, dass `locale.collations === locale.collations` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle für die `Locale` gebräuchlichen Kollationstypen in alphabetischer Reihenfolge darstellt, wobei die Werte `standard` und `search` immer ausgeschlossen sind. Wenn die `Locale` bereits eine [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Für eine Liste unterstützter Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

## Beispiele

### Ermitteln von unterstützten Kollationstypen

Wenn das `Locale`-Objekt noch keine `collation` hat, listet `getCollations()` alle gebräuchlichen Kollationstypen für die gegebene `Locale` auf. Für Beispiele zum expliziten Festlegen einer `collation`, siehe [`collation`-Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

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
