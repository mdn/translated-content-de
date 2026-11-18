---
title: Intl.Locale.prototype.getCollations()
short-title: getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Methode **`getCollations()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste mit einem oder mehreren [Sortierungstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für dieses Gebietsschema zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser war diese Methode als Accessor-Property namens `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie nun als Methode implementiert. So wird vermieden, dass `locale.collations === locale.collations` den Wert `false` zurückgibt. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle für das `Locale` häufig verwendeten Sortierungstypen in alphabetischer Reihenfolge enthält. Die Werte `standard` und `search` sind immer ausgeschlossen. Wenn für das `Locale` bereits ein Wert für [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) festgelegt ist, enthält das zurückgegebene Array nur diesen Wert.

Eine Liste der unterstützten Sortierungstypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

## Beispiele

### Unterstützte Sortierungstypen abrufen

Wenn für das `Locale`-Objekt noch kein Wert für `collation` festgelegt ist, listet `getCollations()` alle häufig verwendeten Sortierungstypen für das angegebene `Locale` auf. Beispiele für das explizite Festlegen von `collation` finden Sie in den [Beispielen zu `collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

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
