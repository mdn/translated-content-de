---
title: Intl.Locale.prototype.getNumberingSystems()
short-title: getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getNumberingSystems()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einer oder mehreren eindeutigen [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system)-Bezeichnern für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Accessor-Eigenschaft namens `numberingSystems` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgab, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.numberingSystems === locale.numberingSystems` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle Zahlensysteme repräsentiert, die üblicherweise für das `Locale` verwendet werden, sortiert in absteigender Präferenz. Wenn das `Locale` bereits ein [`numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Beispiele

### Ermitteln von unterstützten Zahlensystemen

Wenn das `Locale`-Objekt noch kein `numberingSystem` hat, listet `getNumberingSystems()` alle gebräuchlichen Zahlensysteme für das gegebene `Locale` auf. Für Beispiele, wie ein `numberingSystem` explizit gesetzt wird, siehe [`numberingSystem` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

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
