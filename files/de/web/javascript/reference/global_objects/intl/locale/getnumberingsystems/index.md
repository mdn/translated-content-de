---
title: Intl.Locale.prototype.getNumberingSystems()
short-title: getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`getNumberingSystems()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt ein Array zurück, das einen einzelnen Bezeichner für das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) dieser Locale enthält.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Accessor-Property namens `numberingSystems` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie nun als Methode implementiert. So wird vermieden, dass `locale.numberingSystems === locale.numberingSystems` den Wert `false` zurückgibt. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameter

Keine.

### Rückgabewert

Ein Array mit einem einzelnen String, der das Standardzahlensystem für die `Locale` angibt. Wenn für die `Locale` bereits ein [`numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) festgelegt ist, enthält das zurückgegebene Array diesen Wert.

Eine Liste der unterstützten Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Beispiele

### Unterstützte Zahlensysteme ermitteln

Wenn für das `Locale`-Objekt noch kein `numberingSystem` festgelegt ist, gibt `getNumberingSystems()` das Standardzahlensystem für die angegebene `Locale` zurück. Beispiele für das explizite Festlegen eines `numberingSystem` finden Sie in den [Beispielen zu `numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getNumberingSystems()); // ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.getNumberingSystems()); // ["latn"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
- [Details zu den standardisierten Unicode-Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
