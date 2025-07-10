---
title: Intl.Locale.prototype.getNumberingSystems()
short-title: getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getNumberingSystems()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren eindeutigen [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system)-Bezeichnern für diese Locale zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffs-Eigenschaft namens `numberingSystems` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.numberingSystems === locale.numberingSystems` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle für die `Locale` üblicherweise verwendeten Zahlensysteme darstellt, sortiert in absteigender Präferenz. Wenn die `Locale` bereits ein [`numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) hat, dann enthält das zurückgegebene Array diesen einzelnen Wert.

Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Beispiele

### Ermitteln von unterstützten Zahlensystemen

Wenn das `Locale`-Objekt noch kein `numberingSystem` hat, listet `getNumberingSystems()` alle üblicherweise verwendeten Zahlensysteme für das gegebene `Locale` auf. Für Beispiele, wie man ein `numberingSystem` explizit festlegt, siehe [`numberingSystem` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

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
- [Details zu den standardmäßigen Unicode-Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
