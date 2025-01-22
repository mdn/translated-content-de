---
title: Intl.Locale.prototype.getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`getCollations()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren [Kollationstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Zugriffsattribut namens `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.collations === locale.collations` `false` zurückgibt. Sehen Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität) für weitere Details nach.

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle Kollationstypen darstellt, die üblicherweise für die `Locale` verwendet werden, alphabetisch sortiert, wobei die Werte `standard` und `search` immer ausgeschlossen sind. Wenn die `Locale` bereits eine [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

## Beispiele

### Abrufen unterstützter Kollationstypen

Wenn das `Locale`-Objekt noch keine `collation` hat, listet `getCollations()` alle gängigen Kollationstypen für die angegebene `Locale` auf. Für Beispiele zur expliziten Einstellung einer `collation`, siehe [`collation` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

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
